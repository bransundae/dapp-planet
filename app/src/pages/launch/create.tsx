import type { NextPage } from "next";
import Head from "next/head";
import {CreateView} from "../../views";

const Create: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Dapp Planet</title>
                <meta
                    name="description"
                    content="Create"
                />
            </Head>
            <CreateView />
        </div>
    );
};

export default Create;
