import styled from 'styled-components';

const StyledMain = styled.main`
    width:65vw;
    height:100vh;
    font-size:calc(10px + .5vw);
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:10px;
`

export default function Certifications() {
    return (
        <StyledMain>
            <title>Certifications | Resume</title>
            <div id="container">
                <h2>Certifications</h2>
                <ul>
                    <li>Food Handlers</li>
                    <li>TABC: Texas Alcoholic Beverage Commission</li>
                </ul>

            </div>
        </StyledMain>
    )
}