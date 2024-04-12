import React from "react";
import './css/Sidebar.css';
import { NavLink } from "react-router-dom";

const img = '../images/quick.png';

const Sidebar = () =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div className="sidebar">
                            <div className="sidebar-top">
                                <img src={img} alt={img} className="img-fluid"></img>
                            </div>

                            <div id="sidebar-bottom">
                                <nav>
                                    <NavLink to={'/Main'} className={'nav mt-3'} ><i class="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                                    <NavLink to={'/ViewJob'} className={'nav'}><i class="far fa-user"></i> View Jobs <i id="drop" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={'/Posting'} className={'nav'} ><i class="far fa-user"></i> Add Jobs <i id="drop1" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'} id="active"><i class="far fa-user"></i> Edit Job <i id="drop2" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-bus"></i> Statistics <i id="drop3" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-table"></i> News</NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-bus"></i> Profiles <i id="drop3" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to={''} className={'nav'}><i class="fas fa-table"></i>Categories </NavLink>
                                    
                                    </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
