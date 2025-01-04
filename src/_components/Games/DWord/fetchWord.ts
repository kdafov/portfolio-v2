export interface WordData {
    word: string;
    definition: string | null;
    type: string | null;
}

export const fetchWord = async (): Promise<WordData> => {
    try {
        const response = await fetch('https://kdafov-services-worker.kdafov.workers.dev/api/word');
        const data = await response.json();

        if (response.ok) {
            return {
                word: data.word.toLowerCase(),
                definition: data.definition,
                type: data.type,
            };
        } else {
            throw new Error('Failed to fetch word data');
        }
    } catch {
        throw new Error('There was an error loading the game. Try again later.');
    }
};
