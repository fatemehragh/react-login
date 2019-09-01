import React,{Component} from 'react';
import {
    BrowserRouter as
    Link,

} from 'react-router-dom'

export default class SignInForm extends Component{

    state={
        email:'',
        password:''
    }

    handleChange=(e)=>{
let target = e.target;
let value = target.type === 'checkbox' ? target.checked : target.value;
let name = target.name;

        this.setState({
            [name]:value
    })
    };

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log('form submitter');
        console.log(this.state);
    }



    render() {
        return (
            <div>
                <div className="FormCenter">
                    <form action=""
                          className="FormFields"
                          onSubmit={this.handleSubmit}>

                        <div className="FormField">
                            <label htmlFor="email"
                                   className="FormField__Label">Email Address</label>
                            <input type="email"
                                   id='email'
                                   className="FormField__Input"
                                   placeholder='Enter your email'
                                   name='email'
                            value={this.state.email}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="FormField">
                            <label htmlFor="password"
                                   className="FormField__Label">Password</label>
                            <input type="password"
                                   id='password'
                                   className="FormField__Input"
                                   placeholder='Enter your password'
                                   name='password'
                            value={this.state.password}
                                   onChange={this.handleChange}
                            />
                        </div>

                        <div className="FormField">
                            <button htmlFor="email"
                                    className="FormField__Button mr-20">Sign In </button>
                            <Link exact to='/'
                               className="FormField__Link">Create an account</Link>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}