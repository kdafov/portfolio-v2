import { useEffect, useState } from 'react';
import { maxAttempts } from './constants';
import { useAlert } from '../../../util/AlertContext';
import { fetchWord } from './fetchWord';
import WordInput from './WordInput';
import AttemptList from './AttemptList';
import HintBox from './HintBox';
import LetterTracker from './LetterTracker';
import GameResultOverlay from './GameResultOverlay';
import { checkOrCreateGameCookie, updateGameCookie } from './gameCookieHandler';
import { WordData } from './fetchWord';

export interface GameState {
    wordData: WordData | null;
    attempts: string[];
    letterTracker: Record<string, string>;
    currentGuess: string;
    showType: boolean;
    showDefinition: boolean;
    gameWon: boolean;
    gameLost: boolean;
}

export default function DWord() {
    const { showAlert } = useAlert();

    const [gameState, setGameState] = useState<GameState>({
        wordData: null,
        attempts: [],
        letterTracker: {},
        currentGuess: '',
        showType: false,
        showDefinition: false,
        gameWon: false,
        gameLost: false,
    });

    const [showLastHint, setShowLastHint] = useState(false);
    const [revealedHint, setRevealedHint] = useState<{ letter: string; index: number } | null>(
        null,
    );

    const attemptsLeft = gameState.wordData?.word
        ? maxAttempts(gameState.wordData?.word.length) - gameState.attempts.length
        : 0;

    useEffect(() => {
        const loadGame = async () => {
            try {
                const cookieData = checkOrCreateGameCookie();

                if (cookieData) {
                    const wordData = await fetchWord();
                    setGameState({
                        wordData,
                        attempts: cookieData.attempts,
                        letterTracker: cookieData.letterTracker,
                        currentGuess: '',
                        showType: false,
                        showDefinition: false,
                        gameWon: cookieData.status === 'won',
                        gameLost: cookieData.status === 'failed',
                    });
                } else {
                    const wordData = await fetchWord();
                    setGameState((prev) => ({ ...prev, wordData }));
                }
            } catch (error) {
                if (error instanceof Error) {
                    showAlert('There was an error!', 'error');
                }
            }
        };

        loadGame();
    }, []);

    useEffect(() => {
        const wordLength = gameState.wordData?.word.length || 0;
        const attemptsThreshold = Math.floor(maxAttempts(wordLength) / 2);

        if (!gameState.gameWon && !gameState.gameLost && attemptsLeft === attemptsThreshold) {
            const messages = [
                'Hints are now available! Check the boxes below to reveal helpful details.',
                'Feeling stuck? You can now get a hint! Click the boxes below for more help.',
                'Need a boost? Check out the hint section below to reveal some useful clues.',
                "Don't give up! A hint might be all you need. Check the boxes below to uncover clues.",
            ];

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showAlert(randomMessage, 'info');
        }

        if (!gameState.gameWon && !gameState.gameLost && attemptsLeft === 1) {
            showAlert(
                'This is your last attempt! Consider using the hint below to reveal a letter!',
                'warning',
            );
        }
    }, [attemptsLeft]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (!gameState.wordData) return;

        if (e.key === 'Backspace') {
            const updatedGuess = gameState.currentGuess.split('');
            updatedGuess[index] = '';
            setGameState((prev) => ({ ...prev, currentGuess: updatedGuess.join('') }));

            if (index > 0) {
                setTimeout(() => {
                    document.getElementById(`letter-${index - 1}`)?.focus();
                }, 50);
            }
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            const updatedGuess = gameState.currentGuess.split('');
            updatedGuess[index] = e.key.toUpperCase();
            setGameState((prev) => ({ ...prev, currentGuess: updatedGuess.join('') }));

            if (index < gameState.wordData.word.length - 1) {
                setTimeout(() => {
                    document.getElementById(`letter-${index + 1}`)?.focus();
                }, 50);
            }
        } else if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (!gameState.wordData) return;

        const { word } = gameState.wordData;
        const wordArray = word.split('');
        const guessArray = gameState.currentGuess.split('');

        if (gameState.currentGuess.length !== word.length) {
            showAlert(`Guess must be ${word.length} letters.`, 'error');
            return;
        }

        const tempTracker: Record<string, string> = { ...gameState.letterTracker };
        const letterCounts: Record<string, number> = {};
        const markedIndices: Set<number> = new Set();

        wordArray.forEach((letter) => {
            letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        });

        // First pass: Mark greens and decrement counts
        guessArray.forEach((letter, index) => {
            const lowerLetter = letter.toLowerCase();
            if (wordArray[index] === lowerLetter) {
                tempTracker[lowerLetter] = 'correct';
                markedIndices.add(index);
                letterCounts[lowerLetter] -= 1;
            }
        });

        // Second pass: Process remaining letters for yellows and final grays
        guessArray.forEach((letter, index) => {
            if (markedIndices.has(index)) {
                return; // Skip already marked greens
            }

            const lowerLetter = letter.toLowerCase();
            if (letterCounts[lowerLetter] > 0) {
                tempTracker[lowerLetter] = 'present';
                letterCounts[lowerLetter] -= 1;
            } else {
                // Mark as gray (not present)
                if (!tempTracker[lowerLetter]) {
                    tempTracker[lowerLetter] = 'absent';
                }
            }
        });

        const gameWon = guessArray.join('').toLowerCase() === word;
        const gameLost = !gameWon && gameState.attempts.length + 1 >= maxAttempts(word.length);

        updateGameCookie({
            status: gameWon ? 'won' : gameLost ? 'failed' : 'in_progress',
            attempts: [...gameState.attempts, gameState.currentGuess],
            letterTracker: tempTracker,
        });
        setGameState((prev) => ({
            ...prev,
            attempts: [...prev.attempts, prev.currentGuess],
            letterTracker: tempTracker,
            currentGuess: '',
            gameWon,
            gameLost,
        }));

        revealLetters(gameState.currentGuess.split(''));
    };

    const revealLetters = (letters: string[]) => {
        letters.forEach((_, index) => {
            setTimeout(() => {
                const letterBox = document.getElementById(
                    `attempt-${gameState.attempts.length}-${index}`,
                );
                if (letterBox) {
                    letterBox.classList.add('flip');
                }
            }, index * 200);
        });
    };

    if (!gameState.wordData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    const revealHint = () => {
        if (!gameState.wordData) return;

        const wordArray = gameState.wordData.word.split('');
        const allGuessedLetters = gameState.attempts.join('').split('');

        // Find indices of letters that are neither guessed correctly nor guessed at all
        const greyIndices = wordArray
            .map((letter, index) => ({ letter, index }))
            .filter(
                ({ letter }) =>
                    !allGuessedLetters.includes(letter) &&
                    !gameState.letterTracker[letter]?.includes('correct'),
            )
            .map(({ index }) => index);

        let revealIndex;

        if (greyIndices.length > 0) {
            // Prioritize revealing a "grey" letter
            revealIndex = greyIndices[Math.floor(Math.random() * greyIndices.length)];
        } else {
            // If no grey letters, reveal a random unrevealed letter
            const unrevealedIndices = wordArray
                .map((_, index) => index)
                .filter((index) => !gameState.attempts.join('').includes(wordArray[index]));

            if (unrevealedIndices.length > 0) {
                revealIndex =
                    unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            } else {
                return;
            }
        }

        setRevealedHint({ letter: wordArray[revealIndex], index: revealIndex });
        setShowLastHint(true);
    };

    return (
        <div
            className="bg-gray-100 flex flex-col items-center p-4 rounded-lg relative overflow-x-auto scrollbar-hide"
            style={{ height: 'calc(100vh - 150px)' }}
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DWord</h1>
            <p className="text-gray-700 mb-4">Attempts left: {attemptsLeft}</p>

            <AttemptList attempts={gameState.attempts} wordData={gameState.wordData} />
            {!gameState.gameWon && !gameState.gameLost && attemptsLeft > 0 && (
                <div className="mt-4">
                    <WordInput
                        wordLength={gameState.wordData.word.length}
                        currentGuess={gameState.currentGuess}
                        handleKeyPress={handleKeyPress}
                        setCurrentGuess={(guess) =>
                            setGameState((prev) => ({ ...prev, currentGuess: guess }))
                        }
                    />
                </div>
            )}
            <LetterTracker letterTracker={gameState.letterTracker} />
            <HintBox
                wordData={gameState.wordData}
                showType={gameState.showType}
                showDefinition={gameState.showDefinition}
                setShowType={(value) => setGameState((prev) => ({ ...prev, showType: value }))}
                setShowDefinition={(value) =>
                    setGameState((prev) => ({ ...prev, showDefinition: value }))
                }
                revealHint={revealHint}
                showHintBox={!gameState.gameWon && !gameState.gameLost && attemptsLeft === 1}
                showHints={
                    !gameState.gameWon &&
                    !gameState.gameLost &&
                    attemptsLeft <=
                        Math.floor(maxAttempts(gameState.wordData?.word.length || 0) / 2)
                }
                showLastHint={showLastHint}
                revealedHint={revealedHint}
            />

            {(gameState.gameWon || gameState.gameLost) && (
                <GameResultOverlay
                    gameWon={gameState.gameWon}
                    word={gameState.wordData.word}
                    attempts={gameState.attempts.length}
                />
            )}
        </div>
    );
}
