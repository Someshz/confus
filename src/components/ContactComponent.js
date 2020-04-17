import React,{Component} from 'react';
import {Button,Label,Col,Row} from 'reactstrap';
import {Control,LocalForm,Errors} from "react-redux-form";
//import {Link} from 'react-router-dom';

const Required=(val)=> val && val.length;
const minLength=(len)=>(val)=>val && (val.length>=len);
const maxLength=(len)=>(val)=> !(val) || (val.length<=len);
const isNumber=(val)=>!isNaN(Number(val));
const isEmail=(val)=>/^[A-Z0-9%_+-]+@[A-Z0-9%_+-]+\.[A-Z]{2,4}/i.test(val);

class Contact extends Component
{
    constructor(props)
    {
       super(props); 
       this.handleSubmit=this.handleSubmit.bind(this);
    } 
   
    handleSubmit(values)
    {
        console.log("current state is"+JSON.stringify(values));
        alert("current state is"+JSON.stringify(values)); 
    }
    render()
    {
        return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <div class="row row-content text-left">
                <div className="col-12">
                    <h3>Send us Feedback</h3>
                </div>
                <div className="col-12">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            Required,minLength1:minLength(2),maxLength:maxLength(15)
                                        }}
                                         />
                                         <Errors className="text-danger" show="touched" model=".firstname" messages={{Required:"required",
                                         minLength1:"length should be greater than 2",
                                         maxLength:"length should be less than 15"}}/>
                                </Col>
                            </Row>
                        <Row className="form-group">
                            <Label md={2} htmlfor="lastname">LastName</Label>
                            <Col md={10}>
                            <Control.text className="form-control" model=".lastname"   id="lastname" 
                            validators={{
                                Required,minLength1:minLength(2),maxLength:maxLength(15)
                            }}
                            name="lastname" placeholder="LastName" />
                            <Errors className="text-danger" show="touched" model=".lastname" 
                            messages={{Required:"required",
                                         minLength1:"length should be greater than 2",
                                         maxLength:"length should be less than 15"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlfor="telnum">Contact Tel</Label>
                            <Col md={10}>
                            <Control.text 
                            validators={{
                                Required,minLength1:minLength(2),maxLength:maxLength(15),isNumber
                            }}
                            className="form-control" model=".telnum"   id="telnum" name="telnum" placeholder="Tel.num"/>
                           <Errors className="text-danger" show="touched" model=".telnum" 
                            messages={{Required:"required",
                                         minLength1:"length should be greater than 2",
                                         maxLength:"length should be less than 15",
                                         isNumber:"it should be number"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlfor="email">Email</Label>
                            <Col md={10}>
                            <Control.text className="form-control" model=".email" 
                            validators={{
                                Required,isEmail
                            }}  
                            id="email" name="email" placeholder="Email"/>
                            <Errors className="text-danger" show="touched" model=".email" 
                            messages={{Required:"required",  
                                       isEmail:"invalid email address"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{offset:2 ,size:6}}>
                                <div className="form-check">
                                <Label check >
                                    <Control.checkbox className="form-check-input" model=".agree"   name="agree" />
                                    <strong>May  We contact you</strong>
                                </Label>
                                </div>
                            </Col>
                            <Col md={{offset:1,size:3}}>
                                <Control.select  className="form-control" model=".contactType"   name="contactType"  >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                            
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlfor="message">Your Feedback</Label>
                            <Col md={10}>
                            <Control.textarea model=".message" className="form-control"   id="message" name="message" rows="12" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary">Submit Feedback </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
      
    );
   }
}

export default Contact;