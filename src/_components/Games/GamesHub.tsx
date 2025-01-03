import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { games } from './Games';
import { GameType } from './Games';

export default function GamesHub() {
    const [selectedGame, setSelectedGame] = useState<GameType | null>(null);

    return (
        <div className="bg-green-950 min-h-screen p-6">
            {selectedGame ? (
                <div>
                    <button
                        onClick={() => setSelectedGame(null)}
                        className="bg-green-950 flex items-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md px-3 py-1 text-sm font-medium mb-6"
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Games Hub
                    </button>
                    {selectedGame.component}
                </div>
            ) : (
                <div className="space-y-10">
                    <div className="flex items-center justify-between bg-white shadow-md rounded-lg border border-gray-200 px-6 py-4">
                        <a
                            href="/"
                            className="bg-green-950 flex items-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md px-3 py-1 text-sm font-medium"
                        >
                            <ArrowLeftIcon className="h-5 w-5 mr-2" />
                            Back
                        </a>
                        <h1 className="text-2xl font-bold text-gray-900">Games Hub</h1>
                        <div className="w-10" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {games.map((game, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedGame(game)}
                                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-transform transform"
                            >
                                <div
                                    className="h-40 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${game.imageSrc})` }}
                                ></div>
                                <div className="p-4 bg-white">
                                    <h2 className="text-lg font-bold text-gray-900">
                                        {game.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mt-1">{game.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
