import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <img className="h-16" src="logo.png" alt="KD" />
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="/projects" className="inline-flex space-x-6">
                                        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                            Projects list
                                        </span>
                                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                            <span>Check all projects</span>
                                            <ChevronRightIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </a>
                                </div>
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Full-stack software engineer
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Hey there, I'm Kristian Dafov, and I'm all about bringing
                                    cutting-edge technology to empower businesses in the digital
                                    age. I specialise in crafting rich web platforms, intricate
                                    desktop software, and user-friendly mobile apps, all designed to
                                    deliver an exceptional user experience.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="/contact"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Contact me
                                    </a>
                                    <a
                                        href="https://github.com/kdafov"
                                        target="_blank"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        View my GitHub <span aria-hidden="true">→</span>
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
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        App.tsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">
                                                        Settings.json
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 pb-14 pt-6">
                                                <p className="text-white">
                                                    <span className="text-purple-400">import</span>{' '}
                                                    React{' '}
                                                    <span className="text-purple-400">from</span>{' '}
                                                    <span className="text-green-400">'react'</span>{' '}
                                                    ;
                                                </p>
                                                <p className="text-white"> </p>
                                                <p className="text-white">
                                                    <span className="text-purple-400">const</span>{' '}
                                                    <span className="text-yellow-300">App</span>:{' '}
                                                    React.FC = () =&gt; &#123;
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;
                                                    <span className="text-purple-400">
                                                        return
                                                    </span>{' '}
                                                    (
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="text-sky-500">
                                                        &lt;div&gt;
                                                    </span>
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="text-sky-500">&lt;h1&gt;</span>
                                                    Build Your E-Commerce Website!
                                                    <span className="text-sky-500">
                                                        &lt;/h1&gt;
                                                    </span>
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="text-sky-500">
                                                        &lt;span&gt;
                                                    </span>
                                                    Create, customize, and explore e-commerce
                                                    features in your own practice store.
                                                    <span className="text-sky-500">
                                                        &lt;/span&gt;
                                                    </span>
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="text-sky-500">
                                                        &lt;button&gt;
                                                    </span>
                                                    Start Building
                                                    <span className="text-sky-500">
                                                        &lt;/button&gt;
                                                    </span>
                                                </p>
                                                <p className="text-white">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="text-sky-500">
                                                        &lt;/div&gt;
                                                    </span>
                                                </p>
                                                <p className="text-white">&nbsp;&nbsp;);</p>
                                                <p className="text-white">&#125;</p>
                                                <p className="text-white"> </p>
                                                <p className="text-white">
                                                    <span className="text-purple-400">export</span>{' '}
                                                    <span className="text-purple-400">default</span>{' '}
                                                    <span className="text-yellow-300">App</span>;
                                                </p>
                                            </div>
                                        </div>
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
