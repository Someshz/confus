import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse,Nav,Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    { 
        super(props);
        this.state=
        {
            isOpen:false
        };
        this.isToggle=this.isToggle.bind(this)

    }
    isToggle()
    {
        console.log("somesh");
       this.setState(
           {
               
              isOpen: !this.state.isOpen
           });
    }
    render()
    {
       return ( <React.Fragment>
        <Navbar  dark expand="md">
       
          <div className="Container">
          <div className="row">
          <NavbarToggler onClick={this.isToggle}/>
              <NavbarBrand className="ml-5" href="/">
                  <img src="assets/images/logo.png" height="40"  width="80" alt="Ristorante Con Fusion" />
              </NavbarBrand>
              
              <Collapse navbar isOpen={this.state.isOpen}>
              <Nav navbar>
                  <NavItem>
                      <NavLink className="nav-link" to="/home"> <span class="fa fa-home">
                          </span>Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to="/aboutus"> <span class="fa fa-info">
                          </span>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to="/menu"> <span class="fa fa-list">
                          </span>Menu</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to="/contactus"> <span class="fa fa-address-card">
                          </span>Contact Us</NavLink>
                  </NavItem>
                  
              </Nav>
            </Collapse>
            </div>
          </div>
        </Navbar>
        <Jumbotron>
            
                    <div  className="col-md-12 text-left">
                       <h1>Ristorante Con Fusion</h1>
                       <p>this is one of the best restaurent in the Indiathis is one of the best restaurent in the Indiathis is one of the best restaurent in the India</p>
                    </div>
                
       </Jumbotron>
    </React.Fragment>
       );
    }
}
export default Header