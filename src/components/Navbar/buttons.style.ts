import { LinkButton } from "@components/Standard";
import styled from "styled-components";

export const LaunchAppButton = styled(LinkButton)`
    padding: 0 1.5rem 0 1.5rem;
    height: 100%;
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.accent.purple.normal},
        ${({ theme }) => theme.palette.accent.pink.normal},
        ${({ theme }) => theme.palette.accent.pink.normal}
    );
    background-size: 200%;
    transition: all ease-in-out 0.4s;
    font-weight: bold;
    font-size: 0.8rem;

    &:hover {
        background-position: right;
    }
`;
