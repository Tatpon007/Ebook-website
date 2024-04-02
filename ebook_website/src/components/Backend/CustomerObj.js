import React from "react";

// const express = require('express')
// const mysql = require('mysql2/promise')

// const app = express()
// const port = 8000

// const initMySQL = async () => {
//   conn = await mysql.createConnection({
//     host: 'db', // หรือใส่เป็น localhost ก็ได้
//     user: 'root',
//     password: 'root',
//     database: 'tutorial'
//   })
// }

const data = [
    {username : "tatsaponto"    ,password :"ggsaponto"},
    {username : "punyawat"      ,password :"ggsaponto007"}
]

class CustomerObj extends React.Component {
    constructor(props) {
        super(props);
        this.status = false ;
        this.username = "" ;
        this.password = "" ;
    }
    return_status = () => {
        return this.status ;
    }
    login = ({username, password}) => {
        const search = data.filter(e => {
            return username === e.username && password === e.password;
        });
        console.log(search) ;
        if (search.length === 0) {
            console.log("Username or password not correct");
        } else {
            this.username = username ;
            this.status = true ;
            console.log("Success") ;
        }
    };

}

export default CustomerObj;