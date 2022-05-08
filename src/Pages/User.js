import React, { Component } from 'react'
import Account from '../Components/Account';
import { useUserAuth } from "../Context/UserAuthContext";
 
export class User extends Component {

    
  render() {
    return (
        <>
            <Account/>
        </>
    )
  }
}

export default User