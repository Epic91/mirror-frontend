import React from 'react'
import styled from 'styled-components'
import QuotesCard from '../components/QuotesCard'

class QuotesContainer extends React.Component{
    state = {
        quotes: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/quotesArr')
        .then(resp => resp.json())
        .then(data => {
            console.log('data', data)
        })
    }

    render(){
        return (
            <Container>
            <QuotesCard />
        </Container>
        )
    }
}

export default QuotesContainer

const Container = styled.div`
`

