import { ReactElement } from 'react';
import DWord from './DWord';

export type GameType = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    component: ReactElement;
};

export const games: GameType[] = [
    {
        title: 'DWord',
        description:
            'Word-guessing game where the player attempt to deduce a hidden word, with feedback provided on each guess.',
        imageSrc: 'dword.png',
        imageAlt: 'DWord Game',
        component: <DWord />,
    },
];
