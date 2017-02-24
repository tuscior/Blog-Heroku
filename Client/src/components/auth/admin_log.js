import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

function submit(values){
  actions.authAdmin(values);
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Login extends Component {
  render(){
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
    <form onSubmit={handleSubmit(submit.bind(this))}>
      <Field name="nickname" type="text" component={renderField} label="Nickname"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}
}
export default reduxForm({
  form: 'submitValidation' 
}, actions)(Login)
