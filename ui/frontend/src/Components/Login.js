import React, { Component } from 'react';
import '../CSS/Login.css'


class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            UserPassword: ''
        }
    }

    UserLoginFunction(){
        const { username }  = this.state ;
        const { password }  = this.state ;


        fetch('https://localhost/LoginData.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                username: username,

                password: password

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // If server response message same as Data Matched
                if(responseJson === 'Data Matched')
                {

                    //Then open Profile activity and send user email to profile activity.
                    //this.props.push('Home',{username:username})

                }
                else{

                    console.log(responseJson);
                }

            }).catch((error) => {
            console.error(error);
        });

    }


    render(){
        return(
            <div>
                <h2>Login page</h2>
                <form action="../bizlogic/loginData.php" method='post'>
                    <label>User Name</label>
                    <input type ="text"id="username"name="username"placeholder="User name.."
                           value={this.state.username}
                           onChange={e => this.setState({ username: e.target.value })}
                    />
                    <label>Password</label>
                    <input type ="password" id="UserPassword"name="UserPassword"placeholder="Your password"
                           value={this.state.UserPassword}
                           onChange={e => this.setState({ UserPassword: e.target.value })}
                    />

                    <input type="submit" onClick={this.UserLoginFunction()} value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login;



