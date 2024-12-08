import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Project from './Project';
import { projects } from './ProjectsList';

export default function Projects() {
    return (
        <div className="bg-green-950 space-y-10 lg:p-10 p-3">
            <div className="flex items-center justify-between bg-white shadow-md rounded-lg border border-gray-200 px-6 py-4">
                <a
                    href="/"
                    className="bg-green-950 flex items-center text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md px-3 py-1 text-sm font-medium"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back
                </a>
                <h1 className="text-2xl font-bold text-gray-900">Projects page</h1>
                <div className="w-10" />
            </div>

            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}
