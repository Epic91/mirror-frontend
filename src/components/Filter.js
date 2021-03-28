import React from 'react'
import '../CSS/Filter.css';

function Filter() {
    return (
        <div className='filterWrapper'>
        <div className='ui menu'>
            <div className='item'>
            <label className="sort-text">Sort by: </label>
            </div>
            <div className='dd-items'>
                <select
                className='dropdown'
                name='sort'
                onChange='something'
                >
                    <option value=''></option>
                    <option value='name'>Date</option>
                    <option value='weight'>Emotion</option>
                    <option value='weight'>Topic</option>
                </select>
            </div>
            <div className='search-butn-div'>
              <button
                className='search-btn'
                onClick='something'
                >
                Search
              </button>
            </div>
        </div>
        </div>
    )
}

export default Filter
