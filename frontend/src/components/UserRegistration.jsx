import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';
  import { useRef } from "react";
  import { addUser } from "../service/api.js";

const Form = () =>{

    const[user, setUser] = useState({
        name:'',
        mobile:'',
        image:''
    })

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user)
    }

    const fileData = (e) =>{
        setUser({...user, image : e.target.files[0]})
    }

    const nameValid = useRef(null);
    const mobileValid = useRef(null)

    const submitData = async(e) =>{
        e.preventDefault()
        const {name, mobile, image} = user

        if(!name){
            document.getElementById('name').style.display = 'block';
            nameValid.current.focus();
        }else if(!mobile){
            alert("Enter Your Mobile");
            mobileValid.current.focus()
        }else if(mobile.length !== 10){
            alert("Enter Your Valid Mobile Number");
            mobileValid.current.focus();
        }else if(!image){
            alert("Please Upload Image");
        }else{
            const formData = new FormData()

            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('mobile', user.mobile)

            const res = await addUser(formData);
            if(res.status === 201){
                alert("Data Inserted");
            }else{
                alert("Error");
            }

        }
    }

    return(
        <>
            <ChakraProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-md-4">
                            <form>
                                <div className="form pl-2 pr-2">
                                    <h6 className="pt-3">Registration Form</h6><hr></hr>
                                    <FormControl>
                                        <FormLabel style={{fontSize:'14px', marginTop:'15px'}}>Name <span style={{color:'red'}}>*</span></FormLabel>
                                            <Input
                                             type='text'
                                             name="name" 
                                             ref={nameValid}
                                             onChange={(e) => onValueChange(e)}
                                             placeholder="Enter Your Name"
                                            />
                                            <p id="name"><i>Please Enter Your Name *</i></p>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel style={{fontSize:'14px', marginTop:'15px'}}>Mobile Number <span style={{color:'red'}}>*</span></FormLabel>
                                        <Input
                                         type="text"
                                         name="mobile"
                                         ref={mobileValid}
                                         onChange={(e) => onValueChange(e)}
                                         placeholder='Enter Your Mobile'
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel style={{fontSize:'14px', marginTop:'15px'}}>Image <span style={{color:'red'}}>*</span></FormLabel>
                                        <Input
                                         type="file"
                                         name="image"
                                         onChange={fileData}
                                        />
                                    </FormControl>

                                    <div className="mt-3">
                                        <Button colorScheme='blue' onClick={submitData}>Submit</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default Form