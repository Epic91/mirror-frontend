import React from 'react';
// import '../CSS/Home.css';
import styled from 'styled-components'
import Entries from './Entries'
import YouTube from './YouTube'

function Home (){
    return(
        <Container>
            <h2>Welcome User!</h2>
            <Main>
                <YouTube />
                <Entries />
            </Main>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: HoneyDew;
    display: grid;
    grid-template-rows: 40px auto;
`

const Main = styled.div`
    display: grid;
    grid-template-columns: 800px auto;
    background-color: white;
`