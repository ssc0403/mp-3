
import { Link } from "react-router";

import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 90vw;
    margin:0 auto;
    text-align: center;
    background-color:lavender;
    font-size: calc(2px + 1.5vw);
    color: #2f2f2f;
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Shepherd Currie <Link to={`/credits`}>Credits</Link>&#169;</p>
        </StyledFooter>
    )
}