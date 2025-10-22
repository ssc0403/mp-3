import styled from 'styled-components';

const HeaderWrapper = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: calc(2px + 1.5vw);
    background-color: lavender;
    color: #2f2f2f;
    padding: 0 10px;
`

export default function Header(){
    return(
        <HeaderWrapper>
            <h1>Shepherd Currie's Resume</h1>
            <p>Online Resume</p>
        </HeaderWrapper>
    )
}