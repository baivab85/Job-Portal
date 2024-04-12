import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { addUser } from "../service/api1";
import { useNavigate } from "react-router-dom";

const Posting = () => {

    const defaultValue = {
        cname: '',
        mobile: '',
        address: '',
        image: '',
        adate: '',
        uname:'',
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
        formData.append('uname', user.uname)
        const res = await addUser(formData);
        if (res.status === 201) {
            alert('User Successfully Added');
            navigate('/UserLogin');
        }
        else (
            alert('error')
        )
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                   
                    
                        

                        {/*Body Area start here*/}
                        <div className="container-fluid whole1" style={{backgroundColor:'#059296'}}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="body-title"><br></br>
                                        <h1 style={{textAlign:'center',color:'white'}}><u>Welcome to the Best Job Portal in India</u></h1>
                                        <div className="service-heading">
                                            </div>
                                        <hr></hr><br></br>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="serviceassign-form">
                                            <h5 style={{color:'white',textAlign:'center'}}>ADD USER DETAILS</h5><hr></hr>

                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Full Name<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input  type="text" name="cname" className="form-control" placeholder="Enter Full Name" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Contact Number<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="mobile" className="form-control" placeholder="Enter Contact Number" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>username<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="uname" className="form-control" placeholder="Enter username" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="row">                                             
                                               <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Password<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="adate" className="form-control" placeholder="Enter password" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                    </div>
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td style={{color:'white'}}>Address<span style={{color:'red'}}>*</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" name="address" className="form-control" placeholder="Enter address" onChange={(e) => onValueChange(e)} required></input></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                
                                               
                                            </div>

                                            <div className="row">
                                                
                                            </div>

                                            <div className="row">
                                               
                                                
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <table className="table table-responsive">
                                                        <tr>
                                                            <td>Photo<span style={{color:'red'}}>*</span></td>
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
        
    )
}

export default Posting