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

export interface WordData {
    word: string;
    definition: string | null;
    type: string | null;
}

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
    }, [showAlert]);

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

        if (gameState.currentGuess.length !== word.length) {
            showAlert(`Guess must be ${word.length} letters.`, 'error');
            return;
        }

        const newTracker = { ...gameState.letterTracker };
        gameState.currentGuess.split('').forEach((letter, index) => {
            const lowerLetter = letter.toLowerCase();
            if (word[index] === lowerLetter) {
                newTracker[lowerLetter] = 'correct';
            } else if (word.includes(lowerLetter)) {
                newTracker[lowerLetter] = 'present';
            } else {
                newTracker[lowerLetter] = 'absent';
            }
        });

        const gameWon = gameState.currentGuess.toLowerCase() === word;
        const gameLost = !gameWon && gameState.attempts.length + 1 >= maxAttempts(word.length);

        updateGameCookie({
            status: gameWon ? 'won' : gameLost ? 'failed' : 'in_progress',
            attempts: [...gameState.attempts, gameState.currentGuess],
            letterTracker: newTracker,
        });

        setGameState((prev) => ({
            ...prev,
            attempts: [...prev.attempts, prev.currentGuess],
            letterTracker: newTracker,
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

    const attemptsLeft = gameState.wordData?.word
        ? maxAttempts(gameState.wordData?.word.length) - gameState.attempts.length
        : 0;

    return (
        <div
            className="bg-gray-100 flex flex-col items-center p-4 rounded-lg relative"
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
