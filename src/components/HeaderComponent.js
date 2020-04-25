import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse,Nav,Jumbotron,Input,Label,Form,FormGroup,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    { 
        super(props);
        this.state=
        {
            isOpen1:false,
            isModalOpen:false
        };
        this.isToggle=this.isToggle.bind(this);
        this.modalToggle=this.modalToggle.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    isToggle()
    {
       this.setState(
           {  
              isOpen1: !this.state.isOpen1,
           });
    }
    modalToggle()
    {
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        })
    }
    handleLogin(event)
    {
         this.modalToggle();
        alert("username" + this.username.value +"password"+this.password.value +"remember me"+this.check1.checked );
        event.preventDefault()
    }
    render()
    {
       return ( 
       <React.Fragment>
        <Navbar  dark expand="md">
          <div className="Container">
          <div className="row">
          <NavbarToggler onClick={this.isToggle}/>
              <NavbarBrand className="ml-auto" href="/">
                  <img src="assets/images/logo.png" height="40"  width="80" alt="Ristorante Con Fusion" />
              </NavbarBrand>
              <Collapse navbar isOpen={this.state.isOpen1}>
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
              <Nav className="ml-auto" navbar>
              <NavItem >
                  <Button type="Submit" dark  value="submit" onClick={this.modalToggle}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
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
       <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle} >
           <ModalHeader  toggle={this.modalToggle}>Login</ModalHeader>
           <ModalBody>
               <Form>
                   <FormGroup>
                       <Label htmlfor="username">Username</Label>
                       <Input type="text" 
                       innerRef={(input)=>this.username=input}
                       name="username" id="username"/>
                   </FormGroup>
                   <FormGroup>
                       <Label htmlfor="password">Password</Label>
                       <Input type="password" 
                        innerRef={(input1)=>this.password=input1}
                        name="password" id="passoword"/>
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                            <Input type="checkbox"
                             innerRef={(input)=>this.check1=input}
                              name="check1" id="check1"/>
                            <strong>Entered information is correct</strong>
                       </Label>
                   </FormGroup>
                   <FormGroup>
                       <Button type="submit" onClick={this.handleLogin}  color="primary" value="submit">Submit</Button>
                   </FormGroup> 
               </Form>
           </ModalBody>
       </Modal>
    </React.Fragment>
       );
    }
}
export default Header