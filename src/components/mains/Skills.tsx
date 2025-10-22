
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

export default function Skills(){
    return (
        <StyledMain>
            <title>Skills | Resume</title>
            <div id="container">
                <h2>Skills & Interests</h2>
                <h4>Skills</h4>
                <ul>
                    <li><span>Programming Related:</span> Python, C, OCaml, SQL, Java, Javascript, HTML, CSS, Git</li>
                    <li>MS Office</li>
                    <li>Canva</li>
                    <li>Adobe After Effects</li>
                </ul>

                <h4>Interests</h4>
                <ul>
                    <li>Baking and cooking</li>
                    <li>Painting</li>
                    <li>Reading</li>
                    <li>Formula 1 Racing</li>
                    <li>Video Editing</li>
                    <li>Yoga</li>
                    <li>Softball</li>
                </ul>
            </div>
        </StyledMain>
    )
}