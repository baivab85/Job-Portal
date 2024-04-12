import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar4";
import '../App.css'
import { NavLink, useParams } from "react-router-dom";
import { getUsersdata, updateUsers } from "../service/api";
import { useNavigate } from "react-router-dom";

export default function EditStudent() {
    const navigate = useNavigate();
    const id = useParams();

    const getData = async () => {
        const res = await getUsersdata(id)
        console.log(res.data)
        setUser(res.data)
    }
    useEffect(() => {
        getData()
    }, [])





    const [user, setUser] = useState({
        _id: "",
        cname: '',
        mobile: '',
        
        
        address: '',
        adate: '',
        
    });



    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const addUserDetails = async (e) => {
        e.preventDefault()
        const res = await updateUsers(user)
        if (res.status === 201) {
            alert('Job Successfully Updated');
            navigate('/ViewJob');
        } else {
            alert('sonething is wrong')
        }

    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-2 m-0 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10 body m-0 p-0">
                        <div className="top-header">
                            <form>
                                <i className="fas fa-bars"></i>
                                
                                <i class="far fa-user float-right mr-3"></i>
                                <i class="far fa-bell float-right"></i>
                                <i class="far fa-envelope float-right"></i>
                            </form>
                        </div>

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

                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="serviceassign-form">
                                            <h5>Add Job Details</h5><hr></hr>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Name</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.cname} type="text" name="cname" className="form-control" placeholder="Enter Student's Name" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Mobile Number</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.mobile} type="text" name="mobile" className="form-control" placeholder="Enter Mobile Number" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                
                                            </div>

                                            <div className="row">
                                                
                                                
                                                
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Address</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea value={user.address} name="address" className="form-control" placeholder="Enter Full Address..." onChange={(e) => onValueChange(e)}></textarea>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Apply link</td>
                                                        </tr>
                                                        <tr>
                                                            <td><input value={user.adate} type="text" name="adate" className="form-control" onChange={(e) => onValueChange(e)}></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                
                                                
                                            </div>


                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="btn">
                                                        <button onClick={addUserDetails} className="btn btn-primary mr-2" style={{ fontFamily: 'redo' }}>Update</button>
                                                        <NavLink to="/pages/ViewStudent" className="btn btn-danger mr-2" >Cancel</NavLink>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*Body area end here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
