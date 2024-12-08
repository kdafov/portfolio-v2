import { FC } from 'react';
import { technologiesColors } from './technologiesColors.map';
import { ProjectType } from './ProjectsList';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Project: FC<ProjectType> = ({
    title,
    description,
    version,
    imageSrc,
    imageAlt,
    rating,
    technologies,
    viewLink,
    buttonText,
}) => {
    return (
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="lg:w-1/2 flex items-stretch">
                <img
                    alt={imageAlt}
                    src={imageSrc}
                    className="w-full h-full object-cover rounded-t-lg lg:rounded-none lg:rounded-l-lg"
                />
            </div>

            <div className="flex flex-col justify-between p-6 lg:w-1/2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    <p className="mt-2 text-sm text-gray-500">{version}</p>
                    <div className="mt-4 flex items-center">
                        {[1, 2, 3, 4, 5].map((difficultyIdx) => {
                            const isFilled = rating >= difficultyIdx;
                            const color =
                                difficultyIdx <= 2
                                    ? 'text-green-500'
                                    : difficultyIdx === 3
                                    ? 'text-yellow-500'
                                    : 'text-red-500';
                            return (
                                <div
                                    key={difficultyIdx}
                                    className={classNames(
                                        'h-5 w-5 mx-1 rounded-full border-2 flex items-center justify-center',
                                        isFilled ? color : 'text-gray-300',
                                        isFilled ? 'bg-current' : 'bg-white',
                                    )}
                                    aria-hidden="true"
                                />
                            );
                        })}
                    </div>
                </div>

                <p className="mt-6 text-gray-500">{description}</p>

                <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">Technologies</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className={classNames(
                                    'inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                                    technologiesColors[tech] ||
                                        'bg-gray-50 text-gray-600 ring-gray-500/10',
                                )}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    {viewLink ? (
                        <a
                            href={viewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            {buttonText}
                            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </a>
                    ) : (
                        <span className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white">
                            {buttonText || 'Private project'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
