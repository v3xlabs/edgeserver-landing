import { enterPressed } from "@lib/utilts";
import Link from "next/link";
import Router from "next/router";
import {
    CSSProperties,
    FC,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaAngleDown } from "react-icons/fa";

import { NavbarButtons } from "./buttons";
import {
    ButtonsWrapper,
    Dropdown,
    DropdownIndicator,
    DropdownItem,
    DropdownItemsWrapper,
    DropdownWrapper,
    IconWrapper,
    LocationWrapper,
} from "./dropdown.style";
import { links } from "./links";

export const DropdownComponent: FC<{
    wrapperReference: MutableRefObject<HTMLDivElement>;
}> = ({ wrapperReference }) => {
    const indicatorReference = useRef<HTMLDivElement>();

    const dropdownRefernce = useRef<HTMLDivElement>();
    const dropdownWrapperRefernce = useRef<HTMLDivElement>();

    const [dropdownActive, setDropdownActive] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
    const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>();

    useEffect(() => {
        const currentPageIndicatorElement = document.querySelector(
            `#di_${currentPageIndex}`
        ) as HTMLDivElement;

        setIndicatorStyle({
            top: currentPageIndicatorElement.offsetTop,
            height: currentPageIndicatorElement.offsetHeight,
        });
    }, [currentPageIndex]);

    useEffect(() => {
        // TODO - Come up with a better solution for getting the correct padding
        const height = dropdownWrapperRefernce.current.clientHeight;
        const navbarHeight = wrapperReference.current.clientHeight;

        dropdownRefernce.current.style.paddingTop = `${
            height + navbarHeight
        }px`;
    }, []);

    return (
        <DropdownWrapper
            className={dropdownActive ? "active" : ""}
            onMouseEnter={() => {
                setDropdownActive(true);
            }}
            onMouseLeave={() => {
                setDropdownActive(false);
            }}
            onKeyDown={(event) => {
                if (event.key == "ArrowDown") {
                    const newIndex = currentPageIndex + 1;
                    const link = links[newIndex];

                    if (link == undefined) return;

                    setCurrentPageIndex(newIndex);
                    Router.push(link.path);
                } else if (event.key == "ArrowUp") {
                    const newIndex = currentPageIndex - 1;
                    const link = links[newIndex];

                    if (link == undefined) return;

                    setCurrentPageIndex(newIndex);
                    Router.push(link.path);
                }
            }}
            ref={dropdownWrapperRefernce}
        >
            <LocationWrapper
                tabIndex={0}
                onTouchStartCapture={(event) => {
                    event.stopPropagation();
                    setDropdownActive(!dropdownActive);
                }}
                onKeyDown={(event) => {
                    enterPressed(event, () => {
                        setDropdownActive(!dropdownActive);
                    });
                }}
            >
                <p>{links[currentPageIndex].name}</p>

                <IconWrapper>
                    <FaAngleDown />
                </IconWrapper>
            </LocationWrapper>

            <Dropdown ref={dropdownRefernce}>
                <DropdownItemsWrapper>
                    <DropdownIndicator
                        style={indicatorStyle}
                        ref={indicatorReference}
                    />
                    {links.map((link, index) => (
                        <Link href={link.path} key={index} passHref>
                            <DropdownItem
                                tabIndex={-1}
                                // onTouchStartCapture={(event) => {
                                //     // event.stopPropagation();
                                //     setCurrentPageIndex(index);
                                //     // setDropdownActive(false);
                                // }}
                                id={`di_${index}`}
                                onClick={() => {
                                    setCurrentPageIndex(index);
                                }}
                            >
                                {link.name}
                            </DropdownItem>
                        </Link>
                    ))}

                    <ButtonsWrapper>
                        <NavbarButtons />
                    </ButtonsWrapper>
                </DropdownItemsWrapper>
            </Dropdown>
        </DropdownWrapper>
    );
};
