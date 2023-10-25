import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Main.css'
import Dashboard from '../Dashboard/Dashboard'

const Main = ({ setModalOpen, modalOpen,rank, percentile, correctAnswers }) => {
    return (
        <div className="grid-container">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="main">
                <Dashboard setModalOpen={ setModalOpen } modalOpen={modalOpen} rank={rank} percentile={percentile} correctAnswers={correctAnswers}/>
            </div>
            
        </div>

    )
}

export default Main
