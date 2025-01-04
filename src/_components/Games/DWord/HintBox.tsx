import { WordData } from './fetchWord';
import { SwatchIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface HintBoxProps {
    wordData: WordData;
    showType: boolean;
    showDefinition: boolean;
    setShowType: (value: boolean) => void;
    setShowDefinition: (value: boolean) => void;
}

export default function HintBox({
    wordData,
    showType,
    showDefinition,
    setShowType,
    setShowDefinition,
}: HintBoxProps) {
    return (
        <div className="mt-6 flex flex-col items-center gap-4 w-full px-4">
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
                    {showDefinition ? `Definition: ${wordData.definition || 'Unknown'}` : ''}
                </div>
            </div>
        </div>
    );
}
