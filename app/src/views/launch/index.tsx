import { FC } from "react";
import { AppTable } from "./components/AppTable";
import Link from "next/link";

export const LaunchView: FC = ({ }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2 mt-2">
                <h1 className="md:text-4xl font-semibold">Your Dapps</h1>

                <Link href="/launch/create">
                    <button className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black">
                        <span>Create Dapp</span>
                    </button>
                </Link>
            </div>

            <div className="flex-grow">
                <AppTable/>
            </div>
        </div>
    );
};
