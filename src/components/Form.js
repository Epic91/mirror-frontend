import React from 'react'
import '../CSS/Form.css'

function Form({setInputText, todos, setTodos, inputText, setStatus}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, {text: inputText, completed: false, id:Math.random() * 1000}
        ]);
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)

    }
    return (
        // <div className='todo-container'>
            <form className="todo-form">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                {/* <Icon onClick={submitHandler} className='todo-button'name='plus' type='submit'/> */}
                <button onClick={submitHandler}className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        // </div>

    )
}

export default Form
