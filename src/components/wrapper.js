import styled from 'styled-components'

export const Wrapper = styled.div`
    position: ${props => props.position};
    display: flex;
    align-items: ${props => props.alignY};
    justify-content: ${props => props.alignX};
    flex-direction: ${props => props.flexDirection};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    transition: ${props => props.transition};
    cursor: ${props => props.cursor}
`