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

export default function Education(){
    return (
        <StyledMain>
            <title>Education | Resume</title>
            <div id="container">
                <h2>Education</h2>

                <h3>Kent School</h3>
                <span>August 2017 - May 2021</span>
                <p>High school Diploma</p>


                <h3>Boston University</h3>
                <span>September 2021 - Current</span>
                <p>B.A. Computer Science Candidate</p>

            </div>
        </StyledMain>
    )
}