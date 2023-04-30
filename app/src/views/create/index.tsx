import { FC } from "react";
import {AppForm} from "./components/AppForm";

export const CreateView: FC = ({ }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2 mt-4">
                <h1 className="md:text-4xl font-semibold">Create Dapp</h1>
            </div>

            <div className="flex-grow mt-4">
                <AppForm/>
            </div>
        </div>
    );
};
