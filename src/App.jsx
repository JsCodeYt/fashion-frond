import React, { useLayoutEffect } from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Trending from "./components/Trending"
import ShopCategory from './components/ShopCategory'
import Subscribe from './components/Subscribe'
import Card from './components/Card'
import Footer from './components/Footer'
import Aos from 'aos'


function App() {
    useLayoutEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='container'>
            <Navbar />
            <Header />
            <Trending />
            <ShopCategory />
            <Subscribe />
            <Card />
            <Footer />
        </div>
    )
}

export default App