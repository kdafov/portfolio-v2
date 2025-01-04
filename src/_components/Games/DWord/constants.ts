export const maxAttempts = (wordLen: number): number => {
    return wordLen <= 4
        ? 3
        : wordLen <= 6
        ? 5
        : wordLen <= 8
        ? 6
        : 7;
};