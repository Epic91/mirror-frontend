import React from 'react'

function Fails({setFailText, fails, setFails, failText, setFailStatus}) {
    const inputFailHandler = (e) => {
        console.log(e)
    }

    const failSubmithandler = (e) => {
        console.log(e)
    }

    const failHandler = (e) => {
        console.log(e)
    }

    return (
        <form className='fail-form'>
            <input className='fail-input'value={failText} onChange={inputFailHandler} type='text'/>
            <button 
            className='fail-button' 
            onClick={failSubmithandler} 
            type='submit'>Submit</button>
            <div className='fail-select-staus'>
                <select className='filter-fails' onChange={failHandler} name='fails'>
                    <option>All</option>
                    <option>W.I.P</option>
                    <option>Tackled</option>
                </select>

            </div>

        </form>
            
    )
}

export default Fails
