import React from 'react'
import { Card } from 'semantic-ui-react'

// import ReflectionCard from './ReflectionCard'

class Reflections extends React.Component{
    constructor(){
        super()
        this.state={
            prompts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/prompts')
        .then(resp => resp.json())
        .then(prompts => {
            this.setState({
                prompts: prompts
            })
        })
    }
    render(){
        const prompts = this.state.prompts.map(prompt => 
            <Card>
            <Card.Content description={prompt.question} />
          </Card>
            )
        return(
            <div className="reflection-container">
                <h1 className="reflection-header">Reflections</h1>
                <div className="reflection-div">
                    {prompts}
                </div>
            </div>
        )
    }
}

export default Reflections
