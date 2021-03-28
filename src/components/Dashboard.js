import React from 'react';
import styled from 'styled-components'
import Entries from './Entries'
import YouTube from './YouTube'
import { connect } from 'react-redux'
import '../CSS/Dashboard.css';


class Dashboard extends React.Component{
    componentDidMount(){
         if (!this.props.auth){
             this.props.history.push('/')
            }
        }

        render(){
            return(
            <Container>
                <Main>
                    <div className="left-container">
                    <YouTube />
                    </div>
                    <div className="right-container">
                    <Entries />

                    </div>
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
    background-color: #ee7752;
    display: grid;
    grid-template-rows: 40px auto;
`

const Main = styled.div`
    display: grid;
    grid-template-columns: 700px auto;
    height: 100vh;

`