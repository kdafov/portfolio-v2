import { FC } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface AlertProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, type = 'success', onClose }) => {
    const bgColors: Record<string, string> = {
        success: 'bg-green-50 text-green-800',
        error: 'bg-red-50 text-red-800',
        warning: 'bg-yellow-50 text-yellow-800',
        info: 'bg-blue-50 text-blue-800',
    };

    const iconColors: Record<string, string> = {
        success: 'text-green-400',
        error: 'text-red-400',
        warning: 'text-yellow-400',
        info: 'text-blue-400',
    };

    return (
        <div className={`rounded-md p-4 ${bgColors[type]}`}>
            <div className="flex">
                <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className={`w-5 h-5 ${iconColors[type]}`} />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium">{message}</p>
                </div>
                <div className="ml-auto pl-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className={`inline-flex rounded-md p-1.5 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 ${bgColors[type]}`}
                    >
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon aria-hidden="true" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
