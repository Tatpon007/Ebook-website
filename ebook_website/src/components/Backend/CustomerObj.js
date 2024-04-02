import React from "react";


const data = [
    {username : "p" ,email :"tatpon@gmail" ,phone:"0635844830",password :"ggsaponto"},
    {username : "punyawat",email :"tjaj@gmail" ,phone:"0123456789",password :"ggsaponto007"}
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
    register = (props) =>{
        const search = data.filter(e => {
            return props.username === e.username || props.email === e.email || props.phone === e.phone || props.username ===" " || props.email ===" " || props.phone === " " || props.password === " " 
        });
        if(search.lenght === 0){

        }else{
            data.push(props) ;
            this.username = props.username ;
        }

    }

    

}

export default CustomerObj ;