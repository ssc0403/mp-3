import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";

// mains import
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Employment from "./mains/Employment.tsx";
import Projects from "./mains/Projects.tsx";
import Skills from "./mains/Skills.tsx";
import Certifications from "./mains/Certifications.tsx";

// styled
import styled from "styled-components";

const PageWrapper = styled.div`
    height:100%;
    margin:0 auto;
    width:90vw;
    color: #2f2f2f;
    // justify-content: center;
    background-color:whitesmoke;
    display:flex;
    flex-direction:column;
`

const MainContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export default function Root(){
    return (
        <>
            <PageWrapper>
            <Header />

                <MainContainer>
                <Nav />

                <Routes>
                    <Route path={`/`} element={<Home/>} />
                    <Route path={`/education`} element={<Education/>} />
                    <Route path={`/employment`} element={<Employment/>} />
                    <Route path={`/projects`} element={<Projects/>} />
                    <Route path={`/certifications`} element={<Certifications/>} />
                    <Route path={`/skills`} element={<Skills/>} />
                    <Route path={`/credits`} element={<Home/>} />
                </Routes>

                </MainContainer>

            <Footer />
            </PageWrapper>
        </>
    )
}