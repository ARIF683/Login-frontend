import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "https://login-backend-4tl6.vercel.app/login",
            data: {
                email,
                password
            }
        }
        axios(configuration)
            .then((result) => {
                cookies.set("TOKEN", result.data.token, {path: "/",});
                window.location.href = "/auth";
                setLogin(true);
            })
            .catch((error) => { error: new Error() })
    }
    return (
        <>
            <h2>Login</h2>
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
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {login ? (<p className="text-success">Login Successful</p>) : (<p className="text-danger">Login failed</p>)}
        </>
    )
}