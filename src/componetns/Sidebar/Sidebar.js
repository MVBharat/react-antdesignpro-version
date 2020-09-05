import React, { useState } from 'react'
import './Sidebar.css'
function Sidebar() {

    const [showdashboard, setshowdashboard] = useState(true)
    const [showForm, setshowForm] = useState(false)
    const [showlist, setlist] = useState(false)
    return (
        <div className="sidebar">
            <ul className="side-items">
                <li>
                    <span className="logo-block">
                        <a href="/">Turbo Comply </a>
                    </span>
                </li>
                <li>
                    <span className="outer-list" onClick={() => setshowdashboard(!showdashboard)}>
                        Dashboard
                        <i class="fa fa-caret-down"></i>

                    </span>
                    {showdashboard ?
                        <ul className="inner-list" >
                            <li>Analysis</li>
                            <li>Monitor</li>
                            <li>Workplace</li>
                        </ul>
                        : ''}
                </li>
                <li >
                    <span className="outer-list" onClick={() => setshowForm(!showForm)}>
                        Form
                    </span>
                    {showForm ?
                        <ul className="inner-list" >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        : ''}
                </li>
                <li >
                    <span className="outer-list" onClick={() => setlist(!showlist)}>
                        List
                    </span>
                    {showlist ?
                        <ul className="inner-list" >
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        : ''}
                </li>


            </ul>
        </div>
    )
}

export default Sidebar
