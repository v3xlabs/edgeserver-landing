import { Navbar } from "@components/Navbar";
import { NextSeo } from "next-seo";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <NextSeo
                title="Web3 Hosting - EdgeServer"
                description="Easily deploy your projects."
            />
            <Navbar></Navbar>
        </>
    );
};

export default Home;
