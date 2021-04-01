import React, {useState, useEffect}from 'react';
import YouTube from './YouTube'
import { connect } from 'react-redux'
import '../CSS/Dashboard.css';
import Form from './Form'
import TodoList from './TodoList'
import Reflections from './Reflections'


function Dashboard () {

    const [inputText, setInputText] = useState ("");
    const [todos, setTodos] =  useState([]);
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

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
            </div>
            <div class='column right'>
            <header>
                <h1 className='todo-header'>Ev's To-Do List:</h1>
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

            <Reflections />


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