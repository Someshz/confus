import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './HeaderComponent'
// import './App.css';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent';

import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Route,Switch,Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import {withRouter}from "react-router-dom";
import About from './AboutComponent'



const mapStateToProps=(state)=>
{
  return {
  dishes:state.dishes,
  promotions:state.promotions,
  leaders:state.leaders,
  comments:state.comments,
  }
}

class Main extends Component
 {
   constructor(props)
   {
     super(props);
    
   }
  
  render()
  {
    const HomePage= ()=>{
      return (
      <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} promo={this.props.promotions.filter((promo)=>promo.featured)[0]} lead={this.props.leaders.filter((lead)=>lead.featured)[0]}  />
      );
    }
const DishWithId=({match})=>
{
  return(
   <DishDetail selected1={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishid,10))[0]} 
   comments1={this.props.comments.filter((com)=>com.id===parseInt(match.params.dishid,10))[0]}/>
  )
}

  return (
    <div >
        <Header/>  
        <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/> }/>
        <Route exact path="/menu" component={()=><Menu  dishes={this.props.dishes}/> }/>
        <Route path="/menu/:dishid"  component={DishWithId} />
        <Route path="/contactus" component={Contact} />
        <Redirect to="/home" />
        </Switch>
        <Footer/>
     </div>
  );
 }
}

export default withRouter(connect(mapStateToProps)(Main));
