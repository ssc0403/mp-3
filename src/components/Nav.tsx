import { Link } from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    margin:0;
    width:30vw;
    height:100vh;
    display:flex;
    position: relative;
    flex-direction: column;
`

const StyledUl = styled.ul`
    padding-left:0;
    padding-top:20px;
    text-align:center;
    list-style:none;
    width:30vw;
    height:100vh;
    background-color: #d8d8ea;
    display:flex;
    flex-direction:column;
`

const StyledLi = styled.li`
    margin:2px auto;
    text-align:center;
    width:90%;
    padding:5%;
    background-color:whitesmoke;
    border: 1px #2f2f2f solid;
    font-size: calc(2px + 1.5vw);
    
    
`

export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><Link to={`/`}>Home</Link></StyledLi>
                <StyledLi><Link to={`/education`}>Education</Link></StyledLi>
                <StyledLi><Link to={`/employment`}>Employment</Link></StyledLi>
                <StyledLi><Link to={`/projects`}>Projects</Link></StyledLi>
                <StyledLi><Link to={`/certifications`}>Certifications</Link></StyledLi>
                <StyledLi><Link to={`/skills`}>Skills & Interests</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}