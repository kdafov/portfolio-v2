import { ReactElement } from 'react';

export default function ContactForm(): ReactElement {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Contact me
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Whether you're a client looking for innovative solutions, or a colleague
                        exploring collaboration opportunities, I'd love to connect and discuss how
                        we can work together.
                    </p>
                </div>
                <div
                    id="contactme"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                            Email
                        </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <a href="mailto:contact@kdafov.com">
                                <p>contact@kdafov.com</p>
                            </a>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                            GitHub
                        </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <a href="https://github.com/kdafov" target="_blank">
                                <p>github.com/kdafov</p>
                            </a>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                            LinkedIn
                        </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <a href="https://www.linkedin.com/in/dafov/" target="_blank">
                                <p>linkedin.com/in/dafov/</p>
                            </a>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
}
