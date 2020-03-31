import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './HeaderComponent'
// import './App.css';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'
import Footer from './FooterComponent';
import Home from './HomeComponent'
import {Route,Switch,Redirect} from 'react-router-dom';


class Main extends Component
 {
   constructor(props)
   {
     super(props);
     this.state=
     {
       dishes:DISHES,
       selected:null
     }
   }
   onFunction(dish)
    {
        this.setState({
            selected:dish,
        })
    }
  render()
  {
    const HomePage= ()=>{
      return (
      <Home />
      );
    }
  return (
    <div >
        <Header />
        <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/menu" component={()=><Menu  dishes={this.state.dishes}/> }/>
        <Redirect to="/home" />
        </Switch>
        <Footer/>
     </div>
  );
 }
}

export default Main
