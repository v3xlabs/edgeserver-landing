import { Button } from "@components/Standard";
import styled from "styled-components";

export const LocationWrapper = styled(Button)`
    z-index: 10;
    position: relative;
    height: 100%;
    transition: all ease-in 0.15s;
    transition-property: background-color;
`;

export const IconWrapper = styled.div`
    display: flex;
    transition: all ease-in-out 0.2s;
    transition-property: transform;
`;

export const Dropdown = styled.div`
    position: absolute;
    transition: all ease-in-out 0.2s;
    transition-property: padding, transform, top;
    min-width: 18rem;
    top: -100%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    padding-bottom: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        transform: translateX(0vw) translateY(-100%);
        padding: 0 1rem 1rem 1rem;
        left: 0;
        top: -100%;
        width: 100vw;
    }
`;

export const DropdownItemsWrapper = styled.div`
    position: relative;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border: solid ${({ theme }) => theme.palette.secondary.bg} 2px;
    background-color: ${({ theme }) => theme.palette.primary.bg};
    /* box-shadow: 5px 10px 20px 10px #101010; */
    border-radius: 1rem;
`;

export const DropdownIndicator = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.palette.accent.blue.normal};
    border-radius: 1rem;
    top: 0;
    left: 10px;
    height: 0;
    width: 3px;
    transition: all ease-in-out 0.2s;
`;

export const DropdownItem = styled.a`
    text-decoration: none;
    color: inherit;
    position: relative;
    cursor: pointer;
    transition: background-color ease-in 0.15s;
    padding: 1rem;
    border-radius: 0.7rem;

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.bg};
    }
`;

export const DropdownWrapper = styled.div`
    position: relative;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        position: static;
    }

    &.active {
        ${LocationWrapper} {
            background-color: ${({ theme }) => theme.palette.secondary.bg};
        }

        ${Dropdown} {
            transform: translateX(-50%) translateY(0%);
            @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
                transform: translateX(0%) translateY(0%);
                left: 0;
                top: 0;
                width: 100vw;
            }
        }

        ${IconWrapper} {
            transform: rotate(180deg);
        }
    }
`;

export const ButtonsWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
    }
`;
