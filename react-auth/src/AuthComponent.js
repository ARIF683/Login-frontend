import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

export default function AuthComponent() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://login-backend-4tl6.vercel.app/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const Logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  };
  return (
    <>
      <h1 className="text-center">Auth Component </h1>
      <p className="text-center text-success">{message}</p>

      <Button variant="danger" type="submit" onClick={() => Logout()}>
        Logout
      </Button>
    </>
  );
}
