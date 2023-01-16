import React from 'react'
import "./index.css"

export default function Header() {
    return (
        <header>
            <div className="header__left">
                <h1>Imagine the next level of Fashion</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae quos quaerat nisi voluptatum?  </p>
                <button>Sign Up</button>
            </div>
            <div className="header__right">
                <img className="right__img" src="https://i.ibb.co/dM7X1Jc/Placeholder.png" alt="Placeholder" />
                <img className='absolute__img' src="https://i.ibb.co/ZgfkhQZ/Placeholder.png" alt="Placeholder" border="0"></img>
                <div className="play">
                    <div className="play__container"></div>
                    <span class="material-symbols-outlined">play_arrow</span>
                </div>
            </div>
        </header>
    )
}
