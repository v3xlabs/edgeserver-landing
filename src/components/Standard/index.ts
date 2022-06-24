import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const Button = styled.button`
    background-color: transparent;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 1rem;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
`;

export const LinkButton = styled.a`
    background-color: transparent;
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 1rem;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
`;
