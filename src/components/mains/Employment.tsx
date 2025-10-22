import styled from 'styled-components';

const StyledMain = styled.main`
    width:65vw;
    height:100vh;
    font-size:calc(10px + .5vw);
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:10px;
        
    }
`

const StyledSpanBold = styled.span`
    font-weight: bold;
    display: block;
`

const StyledSpanItalic = styled.span`
    font-style: italic;
    display: block;
`

export default function Employment() {
    return (
        <StyledMain>
            <title>Employment | Resume</title>
            <div id="container">
                <h2>Employment</h2>
                <h4>The Pretty Farmer</h4>
                <StyledSpanBold>Project Designer</StyledSpanBold>
                <StyledSpanItalic>May 2025 - August 2025</StyledSpanItalic>
                <p>During my experience with this company, I was responsible for managing, designing, and formatting a collection of digital and web cookbooks using HTML, CSS, and Canva. I photographed and staged several products and managed recipe research and development.</p>

                <h4>James Avery Jewelry</h4>
                <StyledSpanBold>Sales Associate</StyledSpanBold>
                <StyledSpanItalic>May 2023 - September 2023</StyledSpanItalic>
                <p>During my positon as a sales associate, I was responsible for the sales of jewelry items, including sterling silver, gold, and precious stones. I took custom orders and handled online pickup orders. I restocked, organized, and merchandised jewelry cases on the sales floor and in the stockroom.</p>
            </div>
        </StyledMain>
    )
}