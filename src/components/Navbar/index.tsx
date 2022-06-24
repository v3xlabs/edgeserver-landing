/* eslint-disable unicorn/prefer-query-selector */
import IconImage from "@assets/icon.svg";
import { Container } from "@components/Standard";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";

import { NavbarButtons } from "./buttons";
import { DropdownComponent } from "./dropdown";
import {
    ButtonsWrapper,
    ContainerWrapper,
    Item,
    ItemsWrapper,
} from "./navbar.style";

export const Navbar: FC = () => {
    const wrapperReference = useRef<HTMLDivElement>();

    return (
        <ContainerWrapper>
            <Container>
                <ItemsWrapper ref={wrapperReference}>
                    <Item>
                        <Link href="/">
                            <div>
                                <Image
                                    src={IconImage}
                                    width={150}
                                    height={90}
                                    alt="Icon"
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        </Link>
                    </Item>

                    <DropdownComponent wrapperReference={wrapperReference} />

                    <ButtonsWrapper style={{ justifyContent: "flex-end" }}>
                        <NavbarButtons />
                    </ButtonsWrapper>
                </ItemsWrapper>
            </Container>
        </ContainerWrapper>
    );
};
