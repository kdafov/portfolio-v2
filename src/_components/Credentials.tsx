import { ReactElement } from 'react';

type IncentiveType = {
    name: string;
    imageSrc: string;
    description: string;
};

const incentives: Array<IncentiveType> = [
    {
        name: 'Industry experience',
        imageSrc: './industry_icon.svg',
        description:
            'I have worked with and developed solutions for Publicis Sapient and AllCityCleaning Ltd.',
    },
    {
        name: 'Recommendations',
        imageSrc: './recommendations_icon.svg',
        description: 'I am highly recommended by clients and colleagues.',
    },
    {
        name: 'Certifications',
        imageSrc: './certifications_icon.svg',
        description: 'I hold certifications in full-stack development and cloud engineering.',
    },
];

const title: string = 'Industry experience, Recommendations & Certifications';
const description: string =
    'I have industry experience with leading tech companies, delivering solutions for high-profile clients. My work is backed by numerous recommendations from both employers and colleagues, as well as clients I’ve created solutions for. Additionally, I can demonstrate my expertise through a range of certifications and successful projects that showcase my skills and knowledge.';

export default function Credentials(): ReactElement {
    return (
        <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
                <p className="mt-4 text-gray-400">{description}</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                    <div
                        key={incentive.name}
                        className="text-center sm:flex sm:text-left lg:block lg:text-center"
                    >
                        <div className="sm:flex-shrink-0">
                            <div className="flow-root">
                                <img
                                    alt="icon"
                                    src={incentive.imageSrc}
                                    className="mx-auto h-16 w-16 bg-white rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                            <h3 className="text-sm font-medium text-white">{incentive.name}</h3>
                            <p className="mt-2 text-sm text-gray-400">{incentive.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
