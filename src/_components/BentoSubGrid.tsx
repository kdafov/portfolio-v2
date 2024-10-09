import { ReactElement, ReactNode } from 'react';

type Highlight = {
    header?: string;
    title: string;
    description: string;
};

type BentoSubGridProps = {
    children?: ReactNode;
    image?: ReactNode;
    colSpan: number;
    highlight?: Highlight;
    position: 'tl' | 'tr' | 'bl' | 'br';
    first?: boolean;
    last?: boolean;
};

export const BentoSubGrid = ({
    children,
    image,
    colSpan,
    highlight,
    position,
    first,
    last,
}: BentoSubGridProps): ReactElement => {
    return (
        <div className={`flex p-px lg:col-span-${colSpan}`}>
            <div
                className={`overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 ${
                    first || last
                        ? `
                            ${first ? 'max-lg:rounded-t-[2rem]' : ''} 
                            ${last ? 'max-lg:rounded-b-[2rem]' : ''}
                        `
                        : ''
                } lg:rounded-${position}-[2rem] w-full`}
            >
                {children ?? (
                    <>
                        {image}
                        {highlight && (
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">
                                    {highlight.header ?? ''}
                                </h3>
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                                    {highlight.title}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    {highlight.description}
                                </p>
                            </div>
                        )}{' '}
                    </>
                )}
            </div>
        </div>
    );
};
