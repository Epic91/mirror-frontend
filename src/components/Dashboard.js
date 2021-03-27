import React from 'react';
import styled from 'styled-components'
import Entries from './Entries'
import YouTube from './YouTube'
import { connect } from 'react-redux'

class Dashboard extends React.Component{
    componentDidMount(){
         if(!this.props.auth){
             this.props.history.push('/login')
            }
        }

        render(){
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
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
    }
}


export default connect(mapStateToProps)(Dashboard)

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