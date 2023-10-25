import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Main.css'
import Dashboard from '../Dashboard/Dashboard'

const Main = ({ setModalOpen, modalOpen }) => {
    return (
        <div className="grid-container">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="main">
                <Dashboard setModalOpen={ setModalOpen } modalOpen={modalOpen}/>
            </div>
            
        </div>

    )
}

export default Main
