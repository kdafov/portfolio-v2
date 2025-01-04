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

                return (
                    <div key={index} className="flex gap-1">
                        {guessArray.map((letter, i) => {
                            let colorClass = 'bg-gray-200 text-black';

                            if (wordArray[i] === letter.toLowerCase()) {
                                colorClass = 'bg-green-500 text-white';
                                tempMatch[i] = true;
                            } else if (
                                wordArray.includes(letter.toLowerCase()) &&
                                !tempMatch[wordArray.indexOf(letter.toLowerCase())]
                            ) {
                                colorClass = 'bg-yellow-500 text-white';
                                tempMatch[wordArray.indexOf(letter.toLowerCase())] = true;
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
