import React from 'react';
import '../CSS/Home.css';
import { Container } from 'semantic-ui-react';


class Home extends React.Component{
    constructor(){
        super()
        this.state={
            quotes: []
        }
    }

    componentDidMount(){
        fetch("https://type.fit/api/quotes")
        .then(resp => resp.json())
        .then(data => {
            console.log(data, 'data')
        })
    }

    render(){
        return(
            <Container >
                <div className="entries-container">
                    <h1 clssName="entries-header">Recent entries:</h1>
                <div class="ui link card" className="entry-cards">
                    <h5>Subject | Date</h5>
                </div>
                </div>
            </Container>
        )
    }
}

export default Home;