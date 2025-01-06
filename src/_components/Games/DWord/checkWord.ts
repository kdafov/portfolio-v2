export const isValidWord = async (word: string): Promise<boolean> => {
    try {
        const response = await fetch('https://kdafov-services-worker.kdafov.workers.dev/api/word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word }),
        });

        const data = await response.json();

        if (response.ok) {
            if (data.exists) {
                return true;
            } else if (!data.exists) {
                return false;
            }
        } else if (response.status === 500) {
            return true;
        } else {
            throw new Error('Unhandled response from the server');
        }
    } catch (error) {
        throw new Error('Unexpected response from the server' + error);
    }
    return false;
};
