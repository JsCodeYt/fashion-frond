import React from 'react'
import "./index.css"

export default function Subscribe() {
    return (
        <div className='subs'>
            <h1>
                Subscribe for <span className='skid'><i>10%</i></span> off your first order
            </h1>
            <form className='subs__form'>
                <input type="email" placeholder='Enter your email address' />
                <button>Send</button>
            </form>
        </div>
    )
}
