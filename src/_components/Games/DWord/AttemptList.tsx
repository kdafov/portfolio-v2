import { WordData } from './fetchWord';

interface AttemptListProps {
    attempts: string[];
    wordData: WordData;
}

export default function AttemptList({ attempts, wordData }: AttemptListProps) {
    return (
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
        </div>
    );
}
