import React from 'react'
import "./index.css"

export default function Footer() {
    return (
        <footer>
            <div className="navigation">
                <ul className="about items">
                    <h1>About</h1>
                    <li className="about__item">About</li>
                    <li className="about__item">Trending</li>
                    <li className="about__item">Shop</li>
                    <li className="about__item">Testiminiotials</li>
                    <li className="about__item">Product</li>
                </ul>
                <ul className="information items">
                    <h1>Information</h1>
                    <li className="info__item">My Accaunt</li>
                    <li className="info__item">My Order</li>
                    <li className="info__item">My Cards</li>
                    <li className="info__item">Support</li>
                    <li className="info__item">Privacy Policy</li>
                </ul>
                <ul className="curtomer items">
                    <h1>Customers</h1>
                    <li className="curtomer__item">Return/Extganche policy</li>
                    <li className="curtomer__item">Internation Orders</li>
                    <li className="curtomer__item">How to Buy</li>
                    <li className="curtomer__item">Contact Us</li>
                </ul>
                <ul className="services items">
                    <h1>Services</h1>
                    <li className="services__item">Gift Sectificates</li>
                    <li className="services__item">School Discount</li>
                    <li className="services__item">Blog</li>
                    <li className="services__item">Terms & Condination</li>
                </ul>
            </div>
            <hr />
            <div className="navigation__end">
                <span>Copyright © 2021, beyouuboutique.us. All Rights Reserved</span>
                <div className="icons">
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div className="cards">
                    <i class="fa-sharp fa-solid fa-credit-card"></i>
                    <i class="fa-sharp fa-solid fa-credit-card"></i>
                    <i class="fa-sharp fa-solid fa-credit-card"></i>
                    <i class="fa-sharp fa-solid fa-credit-card"></i>
                </div>
            </div>
        </footer>
    )
}
