/* eslint-disable unicorn/prefer-query-selector */
import { Container } from "@components/Container";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import {
    Dropdown,
    DropdownIndicator,
    DropdownItem,
    DropdownItemsWrapper,
    DropdownWrapper,
    IconWrapper,
    Item,
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

    const dropdownRefernce = useRef<HTMLDivElement>();
    const dropdownWrapperRefernce = useRef<HTMLDivElement>();
    const wrapperReference = useRef<HTMLDivElement>();

    const [dropdownActive, setDropdownActive] = useState(false);
    const [currentPage, setCurrentPage] =
        useState<typeof links[number]["name"]>("Home");

    const [initialIndicatorStyle, setInitialIndicatorStyle] =
        useState<CSSProperties>();

    useEffect(() => {
        const currentPageIndicatorElement = document.getElementById(
            `di_${currentPage}`
        );

        setInitialIndicatorStyle({
            top: currentPageIndicatorElement.offsetTop,
            height: currentPageIndicatorElement.offsetHeight,
        });

        // TODO - Come up with a better solution for getting the correct padding
        const height = dropdownWrapperRefernce.current.clientHeight;
        const navbarHeight = wrapperReference.current.clientHeight;

        dropdownRefernce.current.style.paddingTop = `${
            height + navbarHeight
        }px`;
    }, []);

    return (
        <Container>
            <ItemsWrapper ref={wrapperReference}>
                <Item>
                    <Link href="/">
                        <div>
                            <Image
                                src="/icon.svg"
                                width={150}
                                height={90}
                                alt="Icon"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </Link>
                </Item>
                <DropdownWrapper
                    className={dropdownActive ? "active" : ""}
                    onMouseEnter={() => {
                        setDropdownActive(true);
                    }}
                    onMouseLeave={() => {
                        setDropdownActive(false);
                    }}
                    ref={dropdownWrapperRefernce}
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

                    <Dropdown ref={dropdownRefernce}>
                        <DropdownItemsWrapper>
                            <DropdownIndicator
                                style={initialIndicatorStyle}
                                ref={indicatorReference}
                            />
                            {links.map((link, index) => (
                                <Link href={link.path} key={index} passHref>
                                    <DropdownItem
                                        id={`di_${link.name}`}
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

                <Item style={{ justifyContent: "flex-end" }}>
                    <p>sssssssssssssssssHomesssssssssssssssssHome</p>
                </Item>
            </ItemsWrapper>
        </Container>
    );
};
