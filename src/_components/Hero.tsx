import { ChevronRightIcon } from '@heroicons/react/20/solid';
import CodeBlock from './CodeBlock';
import { HeroSubText } from './HeroSubText';
import { useState } from 'react';

export default function Hero() {
    const subLinks: Array<string> = ['Projects list', 'Check all projects'];
    const title: string = 'Full-stack software engineer';
    const mainLinks: Array<string> = ['Contact me', 'View my GitHub'];

    const [clickTimeout, setClickTimeout] = useState<number | null>(null);
    const handleLogoClick = () => {
        if (clickTimeout) {
            clearTimeout(clickTimeout);
            setClickTimeout(null);
            window.location.href = '/games';
        } else {
            const timeout = setTimeout(() => {
                window.location.href = '/';
                setClickTimeout(null);
            }, 500);
            setClickTimeout(timeout);
        }
    };

    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <img
                                    className="h-16"
                                    src="logo.png"
                                    alt="KD"
                                    onClick={handleLogoClick}
                                />
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="/projects" className="inline-flex space-x-6">
                                        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                            {subLinks[0]}
                                        </span>
                                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                            <span>{subLinks[1]}</span>
                                            <ChevronRightIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </a>
                                </div>
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    {title}
                                </h1>
                                <HeroSubText />
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#contactme"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {mainLinks[0]}
                                    </a>
                                    <a
                                        href="https://github.com/kdafov"
                                        target="_blank"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        {mainLinks[1]} <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <CodeBlock />
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
}
