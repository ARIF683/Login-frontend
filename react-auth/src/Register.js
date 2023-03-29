import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "https://login-backend-4tl6.vercel.app/register",
            data: {
                email,
                password
            }
        }
        axios(configuration)
        .then((result) => {setRegister(true)})
        .catch((error) => {new Error()})
    }
    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.
                            target.value)}
                        placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {register ? (<p className = "text-success">You are registered successfuly</p> ): (<p className = "text-danger" >Registration failed :( </p>)}
        </>
    )
}

