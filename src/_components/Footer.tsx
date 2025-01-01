import { ReactElement } from 'react';

export default function Footer(): ReactElement {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600 text-center">
                        &copy; 2024-{new Date().getFullYear()} Kristian Dafov, KD Inc. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
