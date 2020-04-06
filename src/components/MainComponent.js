import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './HeaderComponent'
// import './App.css';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'
import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Route,Switch,Redirect} from 'react-router-dom';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import About from './AboutComponent'


class Main extends Component
 {
   constructor(props)
   {
     super(props);
     this.state=
     {
       dishes:DISHES,
       promotions:PROMOTIONS,
       leaders:LEADERS,
       comments:COMMENTS,
     }
   }
  
  render()
  {
    const HomePage= ()=>{
      return (
      <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} promo={this.state.promotions.filter((promo)=>promo.featured)[0]} lead={this.state.leaders.filter((lead)=>lead.featured)[0]}  />
      );
    }
const DishWithId=({match})=>
{
  return(
   <DishDetail selected1={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishid,10))[0]} 
   comments1={this.state.comments.filter((com)=>com.id===parseInt(match.params.dishid,10))[0]}/>
  )
}

  return (
    <div >
        <Header/>  
        <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/> }/>
        <Route exact path="/menu" component={()=><Menu  dishes={this.state.dishes}/> }/>
        <Route path="/menu/:dishid"  component={DishWithId} />
        <Route path="/contactus" component={Contact} />
        <Redirect to="/home" />
        </Switch>
        <Footer/>
     </div>
  );
 }
}

export default Main
