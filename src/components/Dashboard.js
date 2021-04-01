import React, {useState, useEffect}from 'react';
import YouTube from './YouTube'
import { connect } from 'react-redux'
import '../CSS/Dashboard.css';
import Form from './Form'
import TodoList from './TodoList'
import Reflections from './Reflections'
// import Fails from './Fails'


function Dashboard () {
    // TODO LIST
    const [inputText, setInputText] = useState ("");
    const [todos, setTodos] =  useState([]);
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    // WHAT DID I FAIL AT THIS WEEK?
    // const [failText, setFailText] = useState ("");
    // const [fails, setFails] = useState([]);
    // const [failStatus, setFailStatus] = useState('all');
    // const [filteredFails, setFilteredFails] = useState([]);

    useEffect(() => {
        getLocalTodos()
    }, [ ])

    useEffect(() => {
        filterHandler() 
        saveLocalTodos()
    }, [todos, status]);

    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false))
                break;
            default:
            setFilteredTodos(todos);
            break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
        
    };
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    };
    
    return(
        <div class ='row'>
            <div class="column left">
                <YouTube />
                <Reflections />
            </div>
            <div class='column right'>
                <header>
                    <h1 className='todo-header'>What did you fail at this week?</h1>
                    <h3 className='todo-subheader'>"Each failure is not about the outcome but about not trying."</h3>
                </header>
                <Form 
                inputText={inputText}  
                todos={todos} 
                setTodos={setTodos} 
                setInputText={setInputText}
                setStatus={setStatus}
                />
                <TodoList 
                filteredTodos={filteredTodos}
                setTodos={setTodos} 
                todos={todos}/>

                {/* <Fails 
                failText={failText}
                fails={fails}
                setFails={setFails}
                setFailText={setFailText}
                setFailStatus={setFailStatus}
                /> */}
            </div>
        </div>
        )
    }
        
    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

export default connect(mapStateToProps)(Dashboard)

    // componentDidMount(){
    //      if (!this.props.auth){
    //          this.props.history.push('/')
    //         }
    //     }