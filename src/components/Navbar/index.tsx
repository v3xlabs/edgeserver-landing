/* eslint-disable unicorn/prefer-query-selector */
import { Container } from "@components/Container";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";

import { NavbarButtons } from "./buttons";
import { DropdownComponent } from "./dropdown";
import { Item, ItemsWrapper } from "./navbar.style";

// Make dropdown component, then render it with absolute parent as body to put in left.
export const Navbar: FC = () => {
    const wrapperReference = useRef<HTMLDivElement>();

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

                <DropdownComponent wrapperReference={wrapperReference} />

                <Item style={{ justifyContent: "flex-end" }}>
                    <NavbarButtons />
                </Item>
            </ItemsWrapper>
        </Container>
    );
};
