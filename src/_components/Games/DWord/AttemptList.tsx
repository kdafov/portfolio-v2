import { WordData } from './fetchWord';

interface AttemptListProps {
    attempts: string[];
    wordData: WordData;
}

export default function AttemptList({ attempts, wordData }: AttemptListProps) {
    const wordArray = wordData.word.split('');

    return (
        <div className="flex flex-col items-center gap-2 sm:gap-4 w-full">
            {attempts.map((attempt, index) => {
                const guessArray = attempt.split('');
                const tempMatch = new Array(wordArray.length).fill(false);

                // First pass: Mark greens
                guessArray.forEach((letter, i) => {
                    if (wordArray[i] === letter.toLowerCase()) {
                        tempMatch[i] = true; // Mark as matched for green
                    }
                });

                // Render the guess
                return (
                    <div key={index} className="flex gap-1">
                        {guessArray.map((letter, i) => {
                            const lowerLetter = letter.toLowerCase();
                            let colorClass = 'bg-gray-200 text-black'; // Default to gray

                            // Green: Correct letter and correct position
                            if (wordArray[i] === lowerLetter) {
                                colorClass = 'bg-green-500 text-white';
                            }
                            // Yellow: Correct letter but wrong position
                            else if (
                                wordArray.includes(lowerLetter) &&
                                tempMatch.findIndex(
                                    (matched, idx) => !matched && wordArray[idx] === lowerLetter,
                                ) !== -1
                            ) {
                                colorClass = 'bg-yellow-500 text-white';
                                const matchIndex = tempMatch.findIndex(
                                    (matched, idx) => !matched && wordArray[idx] === lowerLetter,
                                );
                                tempMatch[matchIndex] = true; // Mark as matched for yellow
                            }

                            return (
                                <div
                                    key={i}
                                    id={`attempt-${index}-${i}`}
                                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border rounded text-lg font-bold ${colorClass}`}
                                >
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
