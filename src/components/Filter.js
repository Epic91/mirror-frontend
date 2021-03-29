import React from 'react'
import '../CSS/Filter.css';

class Filter extends React.Component {
    render() {
        return (
            <div className='filter'>
                <div className='options'>
                    <label>Sort by:</label>
                 </div>
                 <div className='ui item'>
                     <select
                     className='ui selection dropdown'
                     name='sort'
                     onChange={this.props.updatedFilter}
                     >
    
                    <option value=''></option>
                    <option value='data'>Date</option>
                    <option value='topic'>Topic</option>
    
                    </select>
              </div>
                {/* <select name="search" id="search">
                    <option value="">Sort By:</option>
                    <option value="date">Date</option>
                    <option value="emotion">Emotion</option>
                    <option value="topic">Topic</option>
                </select> */}
    
            </div>
            )
        }
    }

export default Filter
