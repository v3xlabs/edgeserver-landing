import Link from "next/link";
import {
    CSSProperties,
    FC,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaAngleDown } from "react-icons/fa";

import {
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
    const [currentPage, setCurrentPage] =
        useState<typeof links[number]["name"]>("Home");

    const [initialIndicatorStyle, setInitialIndicatorStyle] =
        useState<CSSProperties>();

    useEffect(() => {
        // eslint-disable-next-line unicorn/prefer-query-selector
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
    );
};
