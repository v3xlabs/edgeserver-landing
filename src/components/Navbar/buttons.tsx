import { Config } from "@lib/config";
import Link from "next/link";
import { FC } from "react";
import { FaEthereum } from "react-icons/fa";

import { LaunchAppButton } from "./buttons.style";

export const NavbarButtons: FC = () => {
    return (
        <Link href={Config.APP_URL} passHref>
            <LaunchAppButton>
                <FaEthereum fontSize={20} />
                <p>Launch Hosted App</p>
            </LaunchAppButton>
        </Link>
    );
};
