import { ReactElement } from 'react';
import { BentoSubGrid } from './BentoSubGrid';
import Solutions from './Solutions';
import Credentials from './Credentials';
import Feed from './Feed';

type HighlightProps = {
    header: string;
    title: string;
    description: string;
};

export default function BentoGrid(): ReactElement {
    const sectionLabels: Array<string> = [
        'All-in-1',
        'Everything you need for a complete digital transformation',
    ];

    const technologies_highlights: HighlightProps = {
        header: 'Technologies',
        title: 'Using cutting-edge & top-tier tools',
        description:
            'I specialise in Python, Java, and JavaScript development, work with databases like MySQL, PostgreSQL, and MongoDB, and effectively use all major cloud platforms (AWS, Azure, GCP) to deliver complete software solutions.',
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-400">{sectionLabels[0]}</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-grey-900 sm:text-5xl">
                    {sectionLabels[1]}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <BentoSubGrid colSpan={4} position="tl" first>
                        <Solutions />
                    </BentoSubGrid>

                    <BentoSubGrid
                        colSpan={2}
                        position="tr"
                        image={
                            <img
                                alt=""
                                src="/tech_wall.png"
                                className="h-80 object-cover object-left"
                            />
                        }
                        highlight={technologies_highlights}
                    />

                    <BentoSubGrid colSpan={2} position="bl">
                        <Feed />
                    </BentoSubGrid>

                    <BentoSubGrid colSpan={4} position="br" last>
                        <Credentials />
                    </BentoSubGrid>
                </div>
            </div>
        </div>
    );
}
