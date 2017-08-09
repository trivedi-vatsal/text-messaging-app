import React,{Component} from 'react';
import axios from 'axios';
import {Form, FormGroup, FormControl, HelpBlock} from 'react-bootstrap';
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:{value: '', isValid: true, message:''},
            password: {value: '', isValid: true, message:''},
            confirmPassword: {value: '', isValid: true, message:''},
            /*keyin:{values:'',isValid: true, message:''}*/
        };
    }
    change = e =>{
        var state = this.state;
        state[e.target.name].value = e.target.value;
        this.setState(state);
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.resetValidationStates();
        if (this.formIsValid()) {
            axios.post('http://boiling-lowlands-48353.herokuapp.com/createUser', {
                username:this.state.username.value,
                password:this.state.password.value
            })
                .then(function (response) {
                    console.log(response);
                    this.props.history.push('/Login');
                })
                .catch(function (error){
                    console.log("error");
                });

        }
    };

    formIsValid = () => {
        let state = this.state;
        let flag = 0;
        if (state.username.value.length <= 3) {
            state.username.isValid = false;
            state.username.message = 'Please enter name of length greater than 3';
            this.setState(state);
            flag = 1;
        }
        else if((state.password.value) !== (state.confirmPassword.value)){
            state.password.isValid = false;
            state.confirmPassword.isValid = false;
            state.password.value = '';
            state.confirmPassword.value = '';
            state.confirmPassword.message = 'Password did not match';
            this.setState(state);
            flag = 1;
        }
        //for Key checking
        //else if{}
        return flag !== 1;

    };

    resetValidationStates = () => {
        let state = this.state;
        // eslint-disable-next-line
        Object.keys(state).map(key => {
            if (state[key].hasOwnProperty('isValid')) {
                state[key].isValid = true;
                state[key].message = '';
            }
        });
        this.setState(state);
    };


    render(){
        return(
            <div>
                <h2>Sign Up</h2>
                <Form>
                    <FormGroup className={"has-error" ? !this.state.username.isValid: false }>
                        <FormControl
                            name="username"
                            placeholder="Username"
                            type="text"
                            value={this.state.username.value}
                            onChange={e => this.change(e)}
                        />
                        <HelpBlock>{this.state.username.message}</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={this.state.password.value}
                            onChange={e => this.change(e)}
                        />
                        <HelpBlock>{this.state.password.message}</HelpBlock>
                    </FormGroup>
                    <FormGroup className={"has-error" ? !this.state.confirmPassword.isValid: false }>
                        <FormControl
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            value={this.state.confirmPassword.value}
                            onChange={e => this.change(e)}
                        />
                        <HelpBlock>{this.state.confirmPassword.message}</HelpBlock>
                    </FormGroup>
                    {/*Key verficiation section*/}
                    {/*<FormGroup>*/}
                    {/*<FormControl*/}
                    {/*name="keyin"*/}
                    {/*placeholder="Key"*/}
                    {/*type="password"*/}
                    {/*value={this.state.keyin.value}*/}
                    {/*onChange={e => this.change(e)}*/}
                    {/*/>*/}
                    {/*<HelpBlock>{this.state.keyin.message}</HelpBlock>*/}
                    {/*</FormGroup>*/}
                    <button onClick={ e => this.onSubmit(e)}>
                        Submit
                    </button>
                </Form>
            </div>
        );
    }
}

export default SignUp;