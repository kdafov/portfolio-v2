interface GameResultOverlayProps {
    gameWon: boolean;
    word: string;
    attempts: number;
}

export default function GameResultOverlay({ gameWon, word, attempts }: GameResultOverlayProps) {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl text-center w-full max-w-md sm:max-w-lg border border-gray-300">
                <h2
                    className={`text-2xl sm:text-3xl font-extrabold ${
                        gameWon ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {gameWon ? 'You Won! 🎉' : 'You Lost! 😢'}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-800">
                    {gameWon ? `The word was: ` : `Better luck next time! The word was:`}
                    <span className="font-bold text-blue-600"> {word.toUpperCase()}</span>
                </p>
                {gameWon && (
                    <p className="mt-2 text-sm sm:text-base text-gray-700">
                        You guessed it in{' '}
                        <span className="font-bold text-green-500">{attempts}</span> attempts!
                    </p>
                )}
            </div>
        </div>
    );
}
