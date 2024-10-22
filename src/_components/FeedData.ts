import { ArrowPathIcon, CodeBracketIcon, LifebuoyIcon, PencilSquareIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type TimelineType = {
    id: number,
    content: string,
    time: string,
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & 
        { title?: string | undefined; titleId?: string | undefined; } & 
        RefAttributes<SVGSVGElement>>,
    iconBackground: string
}

export const timeline: TimelineType[] = [
    {
        id: 1,
        content: "Define your application's vision, goals, and purpose",
        time: 'At start',
        icon: PencilSquareIcon,
        iconBackground: 'bg-indigo-600',
    },
    {
        id: 2,
        content: 'Mockups and prototypes to refine the application experience through feedback',
        time: 'By week 1',
        icon: ArrowPathIcon,
        iconBackground: 'bg-indigo-600',
    },
    {
        id: 3,
        content: 'Development stage - bringing to life',
        time: 'By week 3',
        icon: CodeBracketIcon,
        iconBackground: 'bg-indigo-600',
    },
    {
        id: 4,
        content: 'Application testing & Launch',
        time: 'At end',
        icon: WrenchScrewdriverIcon,
        iconBackground: 'bg-indigo-600',
    },
    {
        id: 5,
        content: 'Ongoing support & Maintenance',
        time: 'Lifetime',
        icon: LifebuoyIcon,
        iconBackground: 'bg-indigo-600',
    }
]