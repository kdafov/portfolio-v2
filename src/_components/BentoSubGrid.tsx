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
};

export const BentoSubGrid = ({
    children,
    image,
    colSpan,
    highlight,
    position,
}: BentoSubGridProps): ReactElement => {
    const colSpanClassMap: { [key: number]: string } = {
        1: 'lg:col-span-1',
        2: 'lg:col-span-2',
        3: 'lg:col-span-3',
        4: 'lg:col-span-4',
        5: 'lg:col-span-5',
        6: 'lg:col-span-6',
    };

    const positionClassMap: { [key: string]: string } = {
        tl: 'rounded-tl-[2rem] max-lg:rounded-t-[2rem]',
        tr: 'lg:rounded-tr-[2rem]',
        bl: 'lg:rounded-bl-[2rem]',
        br: 'rounded-br-[2rem] max-lg:rounded-b-[2rem]',
    };

    return (
        <div className={`flex p-px sm:block lg:flex ${colSpanClassMap[colSpan]}`}>
            <div
                className={`
                    overflow-hidden bg-gray-800 ring-1 ring-white/15 
                    ${positionClassMap[position]} 
                    ${children ? 'w-full flex items-center p-8' : ''}
                `}
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
