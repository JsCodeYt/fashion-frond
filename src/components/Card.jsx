import React from 'react'
import "./index.css"

export default function Card() {
    return (
        <div className='cards'>
            <div className="card">
                <span class="material-symbols-outlined">
                    local_shipping
                </span>
                <div className="titles">
                    <h5>Lorem Inpsum Stylbol</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid soluta odio ducimus rerum, nisi tenetur voluptas vel sapiente quos minus quis qui sed quibusdam nemo dolore. Debitis, velit molestiae.</p>
                </div>
            </div>
            <div className="card">
                <span class="material-symbols-outlined">
                    contact_phone
                </span>
                <div className="titles">
                    <h5>Lorem Inpsum Stylbol</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid soluta odio ducimus rerum, nisi tenetur voluptas vel sapiente quos minus quis qui sed quibusdam nemo dolore. Debitis, velit molestiae.</p>
                </div>
            </div>
            <div className="card">
                <span class="material-symbols-outlined">
                    engineering
                </span>
                <div className="titles">
                    <h5>Lorem Inpsum Stylbol</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid soluta odio ducimus rerum, nisi tenetur voluptas vel sapiente quos minus quis qui sed quibusdam nemo dolore. Debitis, velit molestiae.</p>
                </div>
            </div>
        </div>
    )
}
