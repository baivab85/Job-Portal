import React, { useState } from "react";
import Sidebar from "./Sidebar2";
import { NavLink } from "react-router-dom";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Posting = () => {

    const defaultValue = {
        cname: '',
        mobile: '',
        address: '',
        image: '',
        adate: '',
    }

    const [user, setUser] = useState(defaultValue);


    const fileData = (e) => {
        // console.log(e.target.files[0])
        setUser({ ...user, image: e.target.files[0] })
    }

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const addUserDetails = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image', user.image, user.image.name)
        formData.append('cname', user.cname)
        formData.append('mobile', user.mobile)
        formData.append('address', user.address)
        formData.append('adate', user.adate)
        const res = await addUser(formData);
        if (res.status === 201) {
            alert('Job Successfully Posted');
            navigate('/ViewJob');
        }
        else (
            alert('error')
        )
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-2 m-0 p-0" >
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-10 body m-0 p-0">
                        

                        {/*Body Area start here*/}
                        <div className="container-fluid whole1" style={{backgroundColor:'#59B4C3',marginLeft:'0px',width:'100%'}}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="body-title">
                                        <h1 style={{color:'white',textAlign:'center'}}>Welcome to the Best Job Portal in India</h1>
                                        <div className="service-heading">
                                              </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="serviceassign-form">
                                            <h5 style={{color:'white',textAlign:'center'}}>Add Job Details</h5><hr></hr>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Company's Name<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="cname" className="form-control" placeholder="Enter Company's Name" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-lg-6 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Company's Contact Number<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="mobile" className="form-control" placeholder="Enter Contact Number" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                
                                            </div>

                                            <div className="row">
                                                
                                            <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Apply Link<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="adate" className="form-control" placeholder="Enter Apply Link" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                               
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Job Description<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <textarea name="address" className="form-control" placeholder="Enter Job Description..." onChange={(e) => onValueChange(e)} required></textarea>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">
                                               
                                                
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Photo<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="file" name="image" className="form-control" onChange={fileData} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="btn">
                                                        <NavLink to="" onClick={addUserDetails} className="btn btn-primary" style={{ fontFamily: 'redo' }}>Submit Form</NavLink>
                                                        <button type="reset" className="btn btn-danger " style={{marginLeft:'10px'}}>Reset Form</button>
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

export default Posting