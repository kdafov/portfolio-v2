interface LetterTrackerProps {
    letterTracker: Record<string, string>;
}

export default function LetterTracker({ letterTracker }: LetterTrackerProps) {
    return (
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
    );
}
