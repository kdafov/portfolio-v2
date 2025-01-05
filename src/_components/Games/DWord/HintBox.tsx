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
            {/* Type Hint */}
            {showHints && (
                <div
                    className={`flex flex-col items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        showType
                            ? 'border-2 border-green-800 rounded-md p-4 shadow-md'
                            : 'hover:bg-gray-400'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={() => setShowType(true)}
                >
                    <div className="w-full text-left text-gray-600 font-bold text-lg">HINT</div>
                    <div className="w-full text-left text-gray-800 font-medium text-xs sm:text-sm mt-2">
                        {showType ? (
                            <ul className="list-none">
                                {wordData.type.map((type: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-800 font-bold mb-1"
                                    >
                                        <span
                                            className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mr-2 flex-shrink-0"
                                            style={{ minWidth: '1.5rem', minHeight: '1.5rem' }}
                                        >
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            'Reveal word types'
                        )}
                    </div>
                </div>
            )}

            {/* Definition Hint */}
            {showHints && (
                <div
                    className={`flex flex-col items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        showDefinition
                            ? 'border-2 border-green-800 rounded-md p-4 shadow-md'
                            : 'hover:bg-gray-400'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={() => setShowDefinition(true)}
                >
                    <div className="w-full text-left text-gray-600 font-bold text-lg">HINT</div>
                    <div className="w-full text-left text-gray-800 font-medium text-xs sm:text-sm mt-2">
                        {showDefinition ? (
                            <ul className="list-none">
                                {wordData.definition.map((definition: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-800 font-bold mb-1"
                                    >
                                        <span
                                            className="w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mr-2 flex-shrink-0"
                                            style={{ minWidth: '1.5rem', minHeight: '1.5rem' }}
                                        >
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">{definition}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span className="block">Reveal word definitions</span>
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
