import { useEffect, useState } from 'react';
import { maxAttempts } from './constants';
import { useAlert } from '../../../util/AlertContext';
import { fetchWord, WordData } from './fetchWord';

export default function DWord() {
    const { showAlert } = useAlert();

    const [wordData, setWordData] = useState<WordData | null>(null);
    const [attempts, setAttempts] = useState<string[]>([]);

    useEffect(() => {
        const loadWord = async () => {
            try {
                const data = await fetchWord();
                setWordData(data);
            } catch (error) {
                if (error instanceof Error) {
                    showAlert(error.message, 'error');
                }
            }
        };

        loadWord();
    }, [showAlert]);

    return (
        <div
            className="bg-gray-100 flex flex-col items-center p-4 rounded-lg"
            style={{ height: 'calc(100vh - 150px)' }}
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DWord</h1>
            {wordData ? (
                <>
                    <p className="text-gray-700 mb-4">
                        Attempts left: {maxAttempts(wordData.word.length) - attempts.length}
                    </p>

                    {/* More content */}
                </>
            ) : (
                <div className="flex justify-center mt-6">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
}
