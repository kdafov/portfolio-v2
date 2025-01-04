import React, { useEffect, useRef } from 'react';

interface WordInputProps {
    wordLength: number;
    currentGuess: string;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    setCurrentGuess: (guess: string) => void;
}

export default function WordInput({
    wordLength,
    currentGuess,
    handleKeyPress,
    setCurrentGuess,
}: WordInputProps) {
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (currentGuess === '') {
            firstInputRef.current?.focus();
        }
    }, [currentGuess]);

    return (
        <div className="flex gap-1 items-center w-full justify-center">
            {new Array(wordLength).fill('').map((_, i) => (
                <input
                    autoComplete="off"
                    id={`letter-${i}`}
                    key={i}
                    type="text"
                    value={currentGuess[i] || ''}
                    maxLength={1}
                    className="w-10 h-10 sm:w-12 sm:h-12 border rounded text-center text-lg"
                    ref={i === 0 ? firstInputRef : null}
                    onKeyDown={(e) => handleKeyPress(e, i)}
                    onChange={(e) => {
                        const updatedGuess = currentGuess.split('');
                        updatedGuess[i] = e.target.value.toUpperCase();
                        setCurrentGuess(updatedGuess.join(''));
                    }}
                />
            ))}
        </div>
    );
}
