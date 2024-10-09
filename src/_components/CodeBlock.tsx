import { ReactElement } from 'react';

export default function CodeBlock(): ReactElement {
    return (
        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        App.tsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">Settings.json</div>
                </div>
            </div>
            <div className="px-6 pb-14 pt-6">
                <p className="text-white">
                    <span className="text-purple-400">import</span> React{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">'react'</span> ;
                </p>
                <p className="text-white"> </p>
                <p className="text-white">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">App</span>: React.FC = () =&gt; &#123;
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;
                    <span className="text-purple-400">return</span> (
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-sky-500">&lt;div&gt;</span>
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-sky-500">&lt;h1&gt;</span>
                    Build Your E-Commerce Website!
                    <span className="text-sky-500">&lt;/h1&gt;</span>
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-sky-500">&lt;span&gt;</span>
                    Create, customize, and explore e-commerce features in your own practice store.
                    <span className="text-sky-500">&lt;/span&gt;</span>
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-sky-500">&lt;button&gt;</span>
                    Start Building
                    <span className="text-sky-500">&lt;/button&gt;</span>
                </p>
                <p className="text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-sky-500">&lt;/div&gt;</span>
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
    );
}
