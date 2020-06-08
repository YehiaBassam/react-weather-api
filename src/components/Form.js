import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type='text' placeholder='Country ...' name='country'/>
            <input type='text' placeholder='City ...' name='city'/>
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form