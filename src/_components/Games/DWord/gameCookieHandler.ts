import Cookies from 'js-cookie';

export interface GameStateCookie {
    date: string;
    status: 'won' | 'failed' | 'in_progress';
    attempts: string[];
    letterTracker: Record<string, string>;
}

const COOKIE_NAME = 'kd-gamex-theword';

export function checkOrCreateGameCookie(): GameStateCookie | null {
    const todayDate = new Date().toISOString().split('T')[0];
    const cookieData = Cookies.get(COOKIE_NAME);

    if (cookieData) {
        const parsedData: GameStateCookie = JSON.parse(cookieData);

        // Return existing cookie if it's for today
        if (parsedData.date === todayDate) {
            return parsedData;
        }
    }

    // Create a new cookie for today's game
    const newCookie: GameStateCookie = {
        date: todayDate,
        status: 'in_progress',
        attempts: [],
        letterTracker: {},
    };
    Cookies.set(COOKIE_NAME, JSON.stringify(newCookie), { expires: 1 });
    return newCookie;
}

export function updateGameCookie(updates: Partial<GameStateCookie>): void {
    const cookieData = Cookies.get(COOKIE_NAME);
    if (!cookieData) return;

    const parsedData: GameStateCookie = JSON.parse(cookieData);
    const updatedCookie = { ...parsedData, ...updates };
    Cookies.set(COOKIE_NAME, JSON.stringify(updatedCookie), { expires: 1 });
}
