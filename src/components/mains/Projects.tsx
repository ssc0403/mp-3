// import styled from 'styled-components';

import styled from "styled-components";
import Calculator from "./Calculator.tsx";

const StyledMain = styled.main`
    width:65vw;
    height:100vh;
    font-size:calc(10px + .5vw);
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:10px;
`

export default function Projects(){
    return (
        <StyledMain>
            <title>Projects | Resume</title>
            <div id="container">
                <h2>Projects</h2>
                <h4>'It's Pretty Simple' Cookbook Collection</h4>
                <p>Assigned the role of project manager, designing and formatting a collection of digital web cookbooks using HTML, CSS, and Canva.</p>

                <h4>Game Player Statistics</h4>
                <a href="https://github.com/melimtz/CS506_Final_Project">Github</a>
                <p>Collaborated in a team with 4 others, utilizing the python programming language and its data analysis and visualization tools (such as
                    pandas, matplotlib, seaborn, etc.) to observe the relationship between a game’s player statistics and its popularity from a public database.</p>
                <p>Prepared a Git repo and workflow to monitor coding and data analytics progress. Reported our findings and composed a video presentation of our progress and results.</p>
            </div>

            <h4>JavaScript Calculator</h4>
            <Calculator/>

        </StyledMain>

    )
}