import { ReactElement } from 'react';
import { timeline } from './FeedData';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const title: string = 'From concept to final product';

export default function Credentials(): ReactElement {
    return (
        <div className="flow-root">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8">{title}</h2>
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span
                                    aria-hidden="true"
                                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                                />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={classNames(
                                            event.iconBackground,
                                            'flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white',
                                        )}
                                    >
                                        <event.icon
                                            aria-hidden="true"
                                            className="h-5 w-5 text-white"
                                        />
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-white">{event.content}</p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-400">
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
