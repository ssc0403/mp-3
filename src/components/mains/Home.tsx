import styled from 'styled-components';

const StyledMain = styled.main`
    width:65vw;
    height:100vh;
    font-size:calc(10px + .5vw);
    display:flex;
    margin: 0 auto;
    padding:10px;
    
`

const StyledImg = styled.img`
    margin: 0 auto;
    max-width: 100%;
    border: 1px solid #2f2f2f;
    display: flex;
`

export default function Home(){
    return (
        <StyledMain>
            <title>Home | Resume</title>
            <div>
                <h2>Home</h2>
                <StyledImg  src="/imgs/shepherd-currie-small.jpg" alt="Shepherd Currie"/>
                <p>My name is Shepherd Currie, and I am currently studying with a Computer Science major and a
                    Psychology minor at Boston University.</p>
                <p>Welcome to my website! Here you will find my Education, Employment, and Project history.</p>
            </div>
        </StyledMain>
    )
}