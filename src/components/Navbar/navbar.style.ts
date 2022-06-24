import styled from "styled-components";

export const ContainerWrapper = styled.div`
    /* background-color: red; */
`;

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 4rem;
    padding: 0.5rem 0 0.5rem 0;
`;

export const Item = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
`;

export const ButtonsWrapper = styled(Item)`
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
    }
`;
