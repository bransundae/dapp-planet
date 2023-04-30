import type { NextPage } from "next";
import Head from "next/head";
import {LaunchView} from "../../views";

const Launch: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Dapp Planet</title>
        <meta
          name="description"
          content="Launch"
        />
      </Head>
      <LaunchView />
    </div>
  );
};

export default Launch;
