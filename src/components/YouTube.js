import React from 'react'
import ReactPlayer from "react-player"
import styled from 'styled-components'
import QuotesContainer from '../containers/QuotesContainer'



function YouTube() {
    return (
        <Container>
            <Main>
                <ReactPlayer 
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