import React from 'react'
import '../CSS/Highlights.css';
import { Message } from 'semantic-ui-react'


class Highlights extends React.Component{

    state = {
        highlights: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/entries')
        .then(resp => resp.json())
        .then(entries => {
            entries.map(entry => {
                this.setState({
                    highlights: [...this.state.highlights, entry.highlight]
                })
            })
        })
    }

    render(){
        const highlights = this.state.highlights.map(highlight => 
            <Message className='message-div'size='big'>{highlight}</Message>)
        
        return(

            <div className='quote-container'>
                <h2 className='highlight-header'>"Do what you can, with what you have, where you are."</h2>
                <h4 className="highlight-author">-Teddy Roosevelt</h4>

            <div className="message-container">
                {/* {console.log(this.entry)} */}
                {highlights}
            </div>
            </div>
        )
    }    
}

export default Highlights;