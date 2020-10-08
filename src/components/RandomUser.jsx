import React, { Component } from "react";
import "./RandomUser.css";


const RandomUser = props => {
    const { userData } = props;
    return (
        <ul>
            {userData.map((user) => (
                <li className="user-card" key={user.login.uuid}>
                    <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    />
                <p>
                    {user.name.first} {user.name.last}
                </p> 
             
             </li> 
            ))}
        
        </ul>
    );

    
};









export default RandomUser;