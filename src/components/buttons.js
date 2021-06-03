import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ props => props.width};
    height: ${props => props.height};
    border-radius: ${ props => props.borderRadius};
    background-color: ${props => props.bgColor};
    margin-left: ${props => props.mgL};
    font-size: ${props => props.fontSize ? props.fontSize : "24px"};
    color: ${props => props.color};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:focus {
        box-shadow: 0px 0px 4px 1px ${props => props.focusColor ? props.focusColor : "rgb(29,31,39, .3)"};
       ${props => props.focusScale && "transform: scale(1.1);" }
    }

    &:hover {
        background-color: ${props => props.hover && props.focusColor};
        color: ${props => props.hover && props.bgColor};
    }

`

