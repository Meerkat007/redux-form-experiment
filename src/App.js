import React, { Component } from 'react';
import './App.css';

import { Field, reduxForm } from 'redux-form';

const onSubmit = (data) => {
  console.log(data)
}

const customField = (field) => {
  return (
    <div>
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error && 
      <span>{field.meta.error}</span>}
    </div>
  )
}

const ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nativeField">Native Field</label>
        <Field name="nativeField" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="customField">Custom Field</label>
        <Field name="customField" component={customField} />
      </div>
      <input type="submit" />
    </form>
  )
}

const ContactFormReduxForm = reduxForm({
  form: 'contact'
})(ContactForm);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Form Experiment</h1>
        <ContactFormReduxForm />
      </div>
    );
  }
}

export default App;
