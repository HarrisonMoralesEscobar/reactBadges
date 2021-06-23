import React from 'react';
//Componentes

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
//componentes

import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
  state = {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobtitle: '',
    twitter: '',
  }}

  handleChange = e =>{
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
      //nextForm,
      // {
        //[e.target.name]:e.target.value,
      //}
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header}  alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
               firstName={this.state.form.firstName} 
               lastName={this.state.form.lastName}
               jobTitle={this.state.form.jobtitle}
               email={this.state.form.email}
               avatarUrl="https://s.gravatar.com/avatar/1de368983b54fd73f2fac63d55ad2118?s=80"
               twitter={this.state.form.twitter}
              />
            </div>

            <div className="col-6">
               <BadgeForm 
               onChange={this.handleChange}
               formValues={this.state.form}
               />
            </div> 

          </div>
        </div>

      </React.Fragment>
    ); 
  }
}

export default BadgeNew;
