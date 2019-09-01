import React,{Component} from 'react';
import {
    BrowserRouter as Link,

} from 'react-router-dom'
export default class SignUpForm extends Component{


    state={
        email:'',
        password:'',
        name:'',
        hasAgreed:''
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
            <div className="FormCenter">
                <form action=""
                      className="FormFields"
                      onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label htmlFor="name"
                               className="FormField__Label">Full
                            Name</label>
                        <input type="text"
                               id='name'
                               className="FormField__Input"
                               placeholder='Enter your full name'
                               name='name'
                               value={this.state.name}
                               onChange={this.handleChange}/>
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
                               onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label htmlFor="email"
                               className="FormField__Label">Email Address</label>
                        <input type="email"
                               id='email'
                               className="FormField__Input"
                               placeholder='Enter your email'
                               name='email'
                               value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>
                    <label
                        className="FormField__checkboxLabel">
                        <input
                            type="checkbox"
                            name='hasAgreed'
                            className="FormField__checkbox"
                            value={this.state.hasAgreed}
                            required
                            onChange={this.handleChange}
                        />I agree all statement in <a
                        href="/"
                        className="FormField__TermsLink">terms of services</a>
                    </label>
                    <div className="FormField">
                        <button htmlFor="email"
                                className="FormField__Button mr-20">Sign Up</button>
                        <Link to='/sign-in'
                           className="FormField__Link">I'm already a member</Link>
                    </div>
                </form>
            </div>
        );
    }
}