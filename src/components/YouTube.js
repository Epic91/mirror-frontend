import React from 'react'
import ReactPlayer from "react-player"
import styled from 'styled-components'
import QuotesContainer from '../containers/QuotesContainer'
import '../CSS/Youtube.css';

function YouTube() {
    return (
        <Container>
            <Main>
                <ReactPlayer
                width={'550px'}
                height={'300px'}
                url="https://www.youtube.com/watch?v=DWcJFNfaw9c"/>
                <QuotesContainer />

            </Main>
            
        </Container>
    )
}

export default YouTube

const Container = styled.div`
`
const Main = styled.div`
`