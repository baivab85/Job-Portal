import React from "react";
import Sidebar from "./Sidebar";
import './css/Main.css';
import { NavLink } from "react-router-dom";
import Body from "./Body";


const Main = () =>{

    const envelope = 'images/email.png';
    const bell = 'images/bell.png';
    const avtar = 'images/avtar.jpg';
    const user = 'images/user.png';
    const setting = 'images/settings.png';

    const User = () =>{
        if(document.getElementById('user').style.display === 'block'){
            document.getElementById('user').style.display = 'none';
        }else{
            document.getElementById('user').style.display = 'block';
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>

                    <div className="col-12 col-md-10 m-0 p-0">
                        <div className="top_header">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="search-area">
                                            <div class="form-group">
                                                <input type="search" class="form-control" id="exampleInputEmail1" placeholder="Search..." aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>


                    {/*body part start here */}
                        <Body />
                    {/*body part end here */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main