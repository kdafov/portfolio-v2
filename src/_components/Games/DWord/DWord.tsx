import { useState } from 'react';
import { maxAttempts } from './constants';

export default function DWord() {
    const [attempts, setAttempts] = useState<string[]>([]);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DWord</h1>
            <p className="text-gray-700 mb-4">
                Attempts left: {maxAttempts('test'.length) - attempts.length}
            </p>
        </div>
    );
}
