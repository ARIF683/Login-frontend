import React , {useState , useEffect }from "react";
import axios from "axios";

export default function FreeComponent(){

    const [message, setMessage] = useState("");

    useEffect (() => {
        const configuration = {
            method : "get",
           url: "https://login-backend-4tl6.vercel.app/free-endpoint"
        }
        axios(configuration).then((result) => {
            setMessage(result.data.message)
        })
    }, [])
    return (
        <>
        <h1 className = "text-center">Free Component</h1>
        <p className = "text-center text-danger" >{message}</p>
        </>
    )
}