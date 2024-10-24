import React from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import HomeContent from './Component/HomeContent'

const App = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <HomeContent />
        </div>
    )
}

export default App