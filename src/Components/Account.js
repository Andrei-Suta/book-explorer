import React from 'react'
import { useUserAuth } from "../Context/UserAuthContext";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";


export function Account(){
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
        <h1>Your email adress: {user.email}</h1>
        <Button variant="primary" onClick={handleLogout} style={{backgroundColor: "peachpuff"}}>
          Log out
        </Button>
      
    </>
  );
};

export default Account;


