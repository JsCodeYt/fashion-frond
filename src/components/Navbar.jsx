import React from 'react'
import "./index.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <h3 className='left__logo'>beyouuboutique.us</h3>
            </div>
            <div className="navbar__right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-user"></i>
                <span class="material-symbols-outlined">menu</span>
            </div>
        </div>
    )
}
