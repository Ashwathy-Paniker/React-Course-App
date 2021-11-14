import React, { useState, useRef } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav,Card, Button, Container, Table, Row, Col, InputGroup, FormControl, Alert } from 'react-bootstrap';

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName = RegExp(/^[a-zA-Z]{2,100}$/);
const regForMob=RegExp(/^[6-9][0-9]{9}$/);
const regForUserName = RegExp(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/);
const regForpassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export default function Registration() {
    const [state, setState] = useState();
    const [userdata, setuserdata] = useState([]);
    const [data, setdata] = useState('');
    const [flag1, setflag1] = useState(0);
    const [errors, seterror] = useState('');

    const handler = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "fname":
                let error = regForName.test(value) ? " " : "First Name should be character";
                seterror(error);
                break;
            case "uname":
                let error3 = regForUserName.test(value) ? " " : "Invalid Username";
                seterror(error3);
                break;
            case "email":
                let error4 = regForEmail.test(value) ? " " : "Enter Correct Email-Id";
                seterror(error4);
                break;
            case "mobile":
                let error7 = regForMob.test(value) ? " " : "Enter Correct Mobile No";
                seterror(error7);
                break;
        }
    };
    const validate = () => {
        if (errors.length > 0) {
            setflag1(1);
            const course = JSON.parse(localStorage.getItem('course'))
            let formData = {
                fName: document.getElementById("fname").value,
                uName: document.getElementById("uname").value,
                Email: document.getElementById("email").value,
                Mob: document.getElementById("mobile").value,
                registereduser: []
            };
            console.log(formData)
            setState(formData)
            course.registereduser = [...course.registereduser, formData]
            localStorage.setItem('course', JSON.stringify(course));
            const user1 = JSON.parse(localStorage.getItem('course'));
            const userd = user1.registereduser
            setuserdata([...userd])
        }
        else {
               seterror("Enter all details");
             }
    };
    return (
        <div>
            {!flag1 ? 
                <div className="col d-flex justify-content-center">
                    <Card className="bg-light" style={{width:"500px"}} >
                        <Card.Body>
                        <h1 className="text-center">Enquire here !</h1><hr/>
                        {errors.length > 1 && <Alert variant="danger">{errors}</Alert>}
                        <InputGroup className="mb-3">
                            <InputGroup.Text name="fname" id="fname"><i class="fa fa-user" /></InputGroup.Text>
                            <FormControl name="fname" id="fname" placeholder="Enter Full Name" onChange={handler} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text name="uname" id="uname"><i class="fa fa-user" /></InputGroup.Text>
                            <FormControl name="uname" id="uname" placeholder="Enter Username" onChange={handler} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="email" name="email"><i class="fa fa-paper-plane"></i></InputGroup.Text>
                            <FormControl id="email" name="email" placeholder="Enter Email Id" onChange={handler} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="mobile" name="mobile" ><i class="fa fa-phone" aria-hidden="true"></i></InputGroup.Text>
                            <FormControl id="mobile" name="mobile" placeholder="Enter Mobile No" onChange={handler} />
                        </InputGroup>
                        <div className="mb-2 text-center">
                            <Button variant="dark" size="lg" onClick={validate}>Submit</Button><hr />
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                :
                <Redirect to="/course"></Redirect>}
        </div>
    );
}

