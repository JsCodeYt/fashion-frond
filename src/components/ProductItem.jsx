import React from 'react'
import "./index.css"


export default function ProductItem({ type }) {
    return (
        <>
            {type === "item" ? (
                <div className='product' data-aos="fade-up">
                    <img src="https://i.ibb.co/fFsr9WF/Mask-Group.png" alt="Mask-Group" />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nulla ut, impedit sapiente modi saepe nam amet quia id possimus magnam maiores illum cum excepturi, alias eveniet facere maxime dolorem!</p>
                    <span>$120</span>
                </div>
            ) : (
                <div className='cataroie'>
                    <img src="https://i.ibb.co/k51GfYR/Card-01.png" alt="Card-01" />
                    <span>Lorem Ipsum Simple</span>
                </div>
            )}</>
    )
}
