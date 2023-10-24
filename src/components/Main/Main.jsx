import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Main.css'
import Dashboard from '../Dashboard/Dashboard'

const Main = () => {
    return (
        <div className="grid-container">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="main">
                <Dashboard/>
            </div>
            
        </div>

    )
}

export default Main
