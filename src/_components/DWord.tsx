import { DocumentMagnifyingGlassIcon, SwatchIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function DWord() {
    const [wordData, setWordData] = useState<{
        word: string;
        definition: string | null;
        type: string | null;
    } | null>(null);
    const [attempts, setAttempts] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [showType, setShowType] = useState(false);
    const [showDefinition, setShowDefinition] = useState(false);
    const [letterTracker, setLetterTracker] = useState<Record<string, string>>({});
    const [gameWon, setGameWon] = useState(false);

    const fetchWord = async () => {
        try {
            const response = await fetch(
                'https://kdafov-services-worker.kdafov.workers.dev/api/word',
            );
            const data = await response.json();

            if (response.ok) {
                setWordData({
                    word: data.word.toLowerCase(),
                    definition: data.definition,
                    type: data.type,
                });
            }
        } catch {
            setError('There was an error loading the game. Try again later.');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (!wordData) return;

        if (e.key === 'Backspace') {
            const updatedGuess = currentGuess.split('');
            updatedGuess[index] = '';
            setCurrentGuess(updatedGuess.join(''));

            if (index > 0) {
                setTimeout(() => {
                    document.getElementById(`letter-${index - 1}`)?.focus();
                }, 35);
            }
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            const updatedGuess = currentGuess.split('');
            updatedGuess[index] = e.key.toUpperCase();
            setCurrentGuess(updatedGuess.join(''));

            if (index < wordData.word.length - 1) {
                setTimeout(() => {
                    document.getElementById(`letter-${index + 1}`)?.focus();
                }, 35);
            }
        } else if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (!wordData) return;

        if (currentGuess.length !== wordData.word.length) {
            setError(`Guess must be ${wordData.word.length} letters.`);
            setTimeout(() => setError(null), 3000);
            return;
        }

        const newTracker = { ...letterTracker };
        currentGuess.split('').forEach((letter, index) => {
            const lowerLetter = letter.toLowerCase();
            if (wordData.word[index] === lowerLetter) {
                newTracker[lowerLetter] = 'correct';
            } else if (wordData.word.includes(lowerLetter)) {
                newTracker[lowerLetter] = 'present';
            } else {
                newTracker[lowerLetter] = 'absent';
            }
        });

        setLetterTracker(newTracker);

        if (currentGuess.toLowerCase() === wordData.word) {
            setGameWon(true);
            return;
        }

        revealLetters(currentGuess.split(''));
        setAttempts((prev) => [...prev, currentGuess]);
        setCurrentGuess('');

        setTimeout(() => {
            document.getElementById('letter-0')?.focus();
        }, 100);
    };

    const revealLetters = (letters: string[]) => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                const letterBox = document.getElementById(`attempt-${attempts.length}-${index}`);
                if (letterBox) {
                    letterBox.classList.add('flip');
                }
            }, index * 200);
        });
    };

    useEffect(() => {
        fetchWord();
    }, []);

    if (error === 'There was an error loading the game. Try again later.') {
        return <div className="text-red-600 text-center">{error}</div>;
    }

    if (!wordData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    const maxAttempts =
        wordData.word.length <= 4
            ? 3
            : wordData.word.length <= 6
            ? 5
            : wordData.word.length <= 8
            ? 6
            : 7;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DWord</h1>
            <p className="text-gray-700 mb-4">Attempts left: {maxAttempts - attempts.length}</p>
            {error && <div className="text-red-600 text-sm text-center mb-4">{error}</div>}
            {gameWon && (
                <div className="text-green-600 text-lg font-bold mb-4 border border-green-500 rounded-lg bg-green-100 px-4 py-2">
                    Congratulations! You guessed the word: {wordData.word}
                </div>
            )}
            <div className="flex flex-col items-center gap-2 sm:gap-4 w-full">
                {attempts.map((attempt, index) => (
                    <div key={index} className="flex gap-1">
                        {attempt.split('').map((letter, i) => (
                            <div
                                id={`attempt-${index}-${i}`}
                                key={i}
                                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border rounded text-lg font-bold ${
                                    wordData.word[i] === letter.toLowerCase()
                                        ? 'bg-green-500 text-white'
                                        : wordData.word.includes(letter.toLowerCase())
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-gray-200 text-black'
                                }`}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                ))}
                {!gameWon && attempts.length < maxAttempts && (
                    <div className="flex gap-1 items-center w-full justify-center">
                        {new Array(wordData.word.length).fill('').map((_, i) => (
                            <input
                                autoComplete={'off'}
                                id={`letter-${i}`}
                                key={i}
                                type="text"
                                value={currentGuess[i] || ''}
                                maxLength={1}
                                className="w-10 h-10 sm:w-12 sm:h-12 border rounded text-center text-lg"
                                onKeyDown={(e) => handleKeyPress(e, i)}
                                onChange={(e) => {
                                    const updatedGuess = currentGuess.split('');
                                    updatedGuess[i] = e.target.value.toUpperCase();
                                    setCurrentGuess(updatedGuess.join(''));
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-6 grid grid-cols-9 gap-2">
                {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
                    <div
                        key={letter}
                        className={`w-8 h-8 flex items-center justify-center border rounded ${
                            letterTracker[letter] === 'correct'
                                ? 'bg-green-500 text-white'
                                : letterTracker[letter] === 'present'
                                ? 'bg-yellow-500 text-white'
                                : letterTracker[letter] === 'absent'
                                ? 'bg-gray-300 text-black'
                                : 'bg-white'
                        }`}
                    >
                        {letter.toUpperCase()}
                    </div>
                ))}
            </div>

            {attempts.length >= Math.floor(maxAttempts / 2) && (
                <div className="mt-6 flex flex-col items-center gap-4 w-full px-4">
                    {/* Type Hint */}
                    <div
                        className={`flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                            showType ? 'blur-none' : 'blur-[2px]'
                        } w-full max-w-md sm:max-w-lg`}
                        onClick={() => setShowType(true)}
                    >
                        {!showType && (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xs sm:text-sm">
                                Click to reveal
                            </div>
                        )}
                        <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                            <SwatchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                        <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                            {showType ? `Type: ${wordData.type || 'Unknown'}` : ''}
                        </div>
                    </div>

                    {/* Definition Hint */}
                    <div
                        className={`flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                            showDefinition ? 'blur-none' : 'blur-[2px]'
                        } w-full max-w-md sm:max-w-lg`}
                        onClick={() => setShowDefinition(true)}
                    >
                        {!showDefinition && (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xs sm:text-sm">
                                Click to reveal
                            </div>
                        )}
                        <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                            <DocumentMagnifyingGlassIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                        <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                            {showDefinition
                                ? `Definition: ${wordData.definition || 'Unknown'}`
                                : ''}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
