import {
    ComputerDesktopIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon,
    WindowIcon,
} from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, ReactElement, RefAttributes, SVGProps } from 'react';

type FeatureType = {
    name: string;
    description: string;
    icon: ForwardRefExoticComponent<
        Omit<SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined;
            titleId?: string | undefined;
        } & RefAttributes<SVGSVGElement>
    >;
};

const features: Array<FeatureType> = [
    {
        name: 'Website setup & maintenance',
        description:
            'Digitilise your business through E-commerce website, portfolio website, educational website and more.',
        icon: WindowIcon,
    },
    {
        name: 'Mobile applications',
        description:
            'Make appearance on Google Play or App Store with your first mobile app. Create communication app, clock-in/out system, business enhancing apps, learning portals and more.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Desktop software',
        description:
            'Got a great idea for personalised software for you or your company? Messaging and communication app, inventory system, HR Software, Remote control systems and more.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Embedded systems',
        description:
            'Powerful logic and substantial value within a compact enclosure. Suitable for collecting sensors data, home automation, network monitor tool, voice assistant software and more.',
        icon: CpuChipIcon,
    },
];

export default function Solutions(): ReactElement {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-white">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                            </div>
                            {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-400">
                            {feature.description}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
