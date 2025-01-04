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
        <div className="mt-6 flex flex-col items-center gap-4 w-full px-4">
            {/* Type Hint */}
            {showHints && (
                <div
                    className={`flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        showType ? '' : 'hover:bg-gray-400'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={() => setShowType(true)}
                >
                    <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-lg">HINT</span>
                    </div>
                    <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                        {showType ? `Type: ${wordData.type || 'Unknown'}` : 'Reveal word type'}
                    </div>
                </div>
            )}

            {/* Definition Hint */}
            {showHints && (
                <div
                    className={`flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer ${
                        showDefinition ? '' : 'hover:bg-gray-400'
                    } w-full max-w-md sm:max-w-lg`}
                    onClick={() => setShowDefinition(true)}
                >
                    <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-lg">HINT</span>
                    </div>
                    <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                        {showDefinition
                            ? `Definition: ${wordData.definition || 'Unknown'}`
                            : 'Reveal word definition'}
                    </div>
                </div>
            )}

            {/* Reveal Letter Hint */}
            {showHintBox && !showLastHint && (
                <div
                    className="flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative cursor-pointer hover:bg-gray-400 w-full max-w-md sm:max-w-lg"
                    onClick={revealHint}
                >
                    <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-lg">HINT</span>
                    </div>
                    <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                        Reveal a random letter
                    </div>
                </div>
            )}

            {/* Display revealed hint */}
            {showHintBox && showLastHint && revealedHint && (
                <div className="flex gap-2 sm:gap-4 items-center bg-gray-300 rounded-lg p-2 sm:p-4 relative w-full max-w-md sm:max-w-lg">
                    <div className="flex-shrink-0 w-1/4 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-lg">HINT</span>
                    </div>
                    <div className="w-3/4 text-gray-800 font-medium text-xs sm:text-sm">
                        Letter:{' '}
                        <span className="font-bold text-green-600">
                            {revealedHint.letter.toUpperCase()}
                        </span>
                        , Position:{' '}
                        <span className="font-bold text-green-600">{revealedHint.index + 1}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
