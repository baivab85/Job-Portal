import React, { useState } from "react";
import { useEffect } from "react";
import '../App.css'
import Sidebar from "./Sidebar1";
import { NavLink } from "react-router-dom";

import { getUsers,deleteUsers } from "../service/api";

const ViewJob = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    });
    const getAllUsers = async () => {

        let response = await getUsers();
        setUsers(response.data);
    }
    
    const deleteButton = async (e) => {
        // console.log(e)
        const res = await deleteUsers({ id: e })
        if (res.status === 201) {
            alert('Successfully deleted')
        } else (
            alert('sonethig is wrong')
        )
    }

 

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10 body m-0 p-0">
                        

                        {/*Body Area start here*/}
                        <div className="container-fluid whole" style={{marginLeft:'-20px'}}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="body-title">
                                        <h1>Welcome To The Best Job Portal</h1>
                                        <div className="service-heading">
                                            <NavLink to="/" className="servicenav" style={{textDecoration:'none',color:'black'}}>|| Home ||</NavLink>
                                            <NavLink to="/Posting" className="servicenav" style={{textDecoration:'none',color:'black'}}>   Add Job Post  ||</NavLink>
                                            
                                        </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="service-view">
                                        <h4 style={{textAlign:'center',paddingTop:'10px'}}>VIEW JOB DETAILS</h4><hr></hr>

                                        <div className="row">
                                            <div className="col-12">
                                                <table className="table table-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>Sno.</th>
                                                            <th>Student Name</th>
                                                            <th>Mobile Number</th>
                                                            <th style={{textAlign:'center'}}>Description</th>
                                                            <th>Apply</th>
                                                            <th>Image</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            users.map((user, key) => {

                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{key += 1}</td>
                                                                            <td>{user.cname}</td>
                                                                            <td>{user.mobile}</td>
                                                                            <td>{user.address}</td>
                                                                            <td>{user.adate}</td>
                                                                            <td>
                                                                                <img src={`http://localhost:8000/uploads/${user.image}`} alt='image'  height='80px' />
                                                                            </td>
                                                                            <td>
                                                                                                                                                             
                                                                               <NavLink to="" onClick={() => { deleteButton(`${user._id}`) }} className="action-btn " style={{ backgroundColor: '#D2001A', padding: '5px 13px' }}><i className="fas fa-trash"></i></NavLink>
                                                                               <NavLink to={`/EditStudent/${user._id}`} className="action-btn" style={{ backgroundColor: 'blueviolet', padding: '5px 13px' }}>  <i class="fas fa-edit"></i></NavLink>
                                                                               
                                                                        </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Body area end here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewJob