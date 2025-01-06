import { WordData } from './fetchWord';

interface HintBoxProps {
    wordData: WordData;
    showType: boolean;
    showDefinition: boolean;
    setShowType: (value: boolean) => void;
    setShowDefinition: (value: boolean) => void;
    revealHint: () => void;
    showHintBox: boolean;
    showHints: boolean;
    showLastHint: boolean;
    revealedHint: { letter: string; index: number } | null;
}

export default function HintBox({
    wordData,
    showType,
    showDefinition,
    setShowType,
    setShowDefinition,
    revealHint,
    showHintBox,
    showHints,
    showLastHint,
    revealedHint,
}: HintBoxProps) {
    return (
        <div className="mt-6 flex flex-col items-center gap-4 w-full">
            {/* Type & Definition Hint */}
            {showHints && (
                <div
                    className={`flex flex-col items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        showType || showDefinition
                            ? 'border-2 border-green-800 rounded-md p-4 shadow-md'
                            : 'hover:bg-gray-400'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={() => {
                        setShowType(true);
                        setShowDefinition(true);
                    }}
                >
                    <div className="w-full text-left text-gray-600 font-bold text-lg">HINT</div>
                    <div className="w-full text-left text-gray-800 font-medium text-xs sm:text-sm mt-2">
                        {showType && showDefinition ? (
                            <div>
                                <span className="block text-gray-800">
                                    <span className="font-bold">Word type:</span>{' '}
                                    {
                                        wordData.type[
                                            Math.floor(Math.random() * wordData.type.length)
                                        ]
                                    }
                                </span>
                                <span className="block mt-2">
                                    <span className="font-bold">Definition:</span>{' '}
                                    {
                                        wordData.definition[
                                            Math.floor(Math.random() * wordData.definition.length)
                                        ]
                                    }
                                </span>
                            </div>
                        ) : (
                            'Reveal a random word type and definition'
                        )}
                    </div>
                </div>
            )}

            {/* Reveal Letter Hint */}
            {showHintBox && (
                <div
                    className={`flex flex-col items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        !showLastHint
                            ? 'hover:bg-gray-400'
                            : 'border-2 border-green-800 rounded-md p-4 shadow-md'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={!showLastHint ? revealHint : undefined}
                >
                    <div className="w-full text-left text-gray-600 font-bold text-lg">HINT</div>
                    <div className="w-full text-left text-gray-800 font-medium text-xs sm:text-sm mt-2">
                        {!showLastHint ? (
                            'Reveal a random letter'
                        ) : revealedHint ? (
                            <>
                                Letter:{' '}
                                <span className="font-bold text-green-600">
                                    {revealedHint.letter.toUpperCase()}
                                </span>
                                , Position:{' '}
                                <span className="font-bold text-green-600">
                                    {revealedHint.index + 1}
                                </span>
                            </>
                        ) : (
                            'No hint available'
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
