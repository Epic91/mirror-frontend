import React from 'react';
// import '../CSS/Home.css';
import styled from 'styled-components'
import Quotes from './Quotes'
import Entries from './Entries'

function Home (){
    return(
        <Container>
            <h1>Welcome User!</h1>
            <Main>
                <Quotes/>
                <Entries />
            </Main>
        </Container>
    )
}
    // constructor(){
    //     super()
    //     this.state={
    //         quotes: []
    //     }
    // }

    // componentDidMount(){
    //     fetch("https://type.fit/api/quotes")
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data, 'data')
    //     })
    // }

    // render(){


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
    grid-template-columns: 450px auto;
    background-color: HoneyDew;
`