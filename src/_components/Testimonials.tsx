import { ReactElement } from 'react';
import { testimonials } from './TestimonialsList';

const heading: string[] = ['Why me?', 'Hear more from clients, friends, and colleagues'];

export default function Testimonials(): ReactElement {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                        {heading[0]}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {heading[1]}
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                            >
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-900">
                                        <p>{testimonial.body}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img
                                            alt="avatar"
                                            src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(
                                                ' ',
                                                '+',
                                            )}&background=4f46e5&color=fff&rounded=true`}
                                            className="h-10 w-10 rounded-full bg-gray-50"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-gray-600">
                                                {testimonial.relation}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
