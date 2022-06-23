import styled from "styled-components";

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
`;

// export const Item = styled.div`
//     flex: 1;
// `;

// https://stackoverflow.com/questions/32378953/keep-the-middle-item-centered-when-side-items-have-different-widths
export const LocationWrapper = styled.button`
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    border: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-radius: 1rem;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
    transition: all ease-in 0.15s;
    transition-property: background-color;
    z-index: 10;
    position: relative;
`;

export const IconWrapper = styled.div`
    display: flex;
    transition: all ease-in-out 0.2s;
    transition-property: transform;
`;

export const Dropdown = styled.div`
    position: absolute;
    transition: all ease-in-out 0.2s;
    transition-property: padding, transform;
    min-width: 18rem;
    top: -100%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    padding-top: 1rem;
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
    &.active {
        ${LocationWrapper} {
            background-color: ${({ theme }) => theme.palette.secondary.bg};
        }

        ${Dropdown} {
            transform: translateX(-50%) translateY(0%);
            padding-top: calc(
                100% + 0.5rem
            ); /* So it doesn't glitch when hover leave top*/
        }

        ${IconWrapper} {
            transform: rotate(180deg);
        }
    }
`;
