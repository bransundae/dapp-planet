import { FC } from 'react';
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className="flex">
            <div className="w-64 h-screen shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66 relative left-0 top-0 p-4">
                {/* Add your sidebar content here */}
            </div>
            <div className="flex-1 pl-8">
                <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
                <div className="items-center drawer-content">
                    {children}
                </div>
            </div>
        </div>
    );
};
