import React from "react";
class Formcomponent extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <div className="form-control">
                        <label>Username</label>
                        <input type ="text" placeholder = "Username" ></input>
                    </div>
                    <div className="from-control">
                        <label>Password</label>
                        <input type ="text" placeholder = "Password" ></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        ) ;
    }
}

export default Formcomponent