import React, { Component } from 'react'
import {

    Link
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/general" >NEWSKEY APP</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link hover-underline-animation home" to="/general">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="/">Disabled</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link " to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/entertainment">Entertainment</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link " to="/general">General</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link " to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/technology">Technology</Link>
                            </li>


                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
