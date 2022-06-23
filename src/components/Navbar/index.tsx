import { Container } from "@components/Container";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import {
    Dropdown,
    DropdownIndicator,
    DropdownItem,
    DropdownItemsWrapper,
    DropdownWrapper,
    IconWrapper,
    ItemsWrapper,
    LocationWrapper,
} from "./navbar.style";

const links: {
    name: "Home" | "Away";
    path: string;
}[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Away",
        path: "/",
    },
];

export const Navbar: FC = () => {
    const indicatorReference = useRef<HTMLDivElement>();
    const [dropdownActive, setDropdownActive] = useState(false);

    const [currentPage, setCurrentPage] =
        useState<typeof links[number]["name"]>("Home");

    return (
        <Container>
            <ItemsWrapper>
                <Link href="/">
                    <Image
                        src="/icon.svg"
                        width={80}
                        height={90}
                        style={{ cursor: "pointer" }}
                    />
                </Link>
                <DropdownWrapper
                    className={dropdownActive ? "active" : ""}
                    onMouseEnter={() => {
                        setDropdownActive(true);
                    }}
                    onMouseLeave={() => {
                        setDropdownActive(false);
                    }}
                >
                    <LocationWrapper
                        tabIndex={0}
                        onTouchStartCapture={(event) => {
                            event.stopPropagation();
                            setDropdownActive(!dropdownActive);
                        }}
                    >
                        <p>{currentPage}</p>

                        <IconWrapper>
                            <FaAngleDown />
                        </IconWrapper>
                    </LocationWrapper>
                    {/*if link.name equals active, set style.top */}

                    <Dropdown>
                        <DropdownItemsWrapper>
                            <DropdownIndicator ref={indicatorReference} />
                            {links.map((link, index) => (
                                <Link href={link.path} key={index} passHref>
                                    <DropdownItem
                                        onClick={(event) => {
                                            setCurrentPage(link.name);
                                            const target =
                                                event.target as HTMLDivElement;
                                            const indicator =
                                                indicatorReference.current;

                                            indicator.style.top =
                                                target.offsetTop + "px";
                                            indicator.style.height =
                                                target.offsetHeight + "px";
                                        }}
                                    >
                                        {link.name}
                                    </DropdownItem>
                                </Link>
                            ))}
                        </DropdownItemsWrapper>
                    </Dropdown>
                </DropdownWrapper>
                <p>sssssssssssssssssHome</p>
            </ItemsWrapper>
        </Container>
    );
};
