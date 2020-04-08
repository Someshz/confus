import React,{Component} from 'react';
import {Button,Form,FormGroup,Input,Label,Col,FormFeedback} from 'reactstrap'
//import {Link} from 'react-router-dom';

class Contact extends Component
{
    constructor(props)
    {
       super(props); 
       this.state=
       {
           firstname:'',
           lastname:'',
           telnum:'',
           email:'',
           agree:false,
           contactType:'',
           message:'',
           touched:
           {
            firstname:false,
            lastname:false,
            telnum:false,
            email:false,

           }

       }
       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleBlur=this.handleBlur.bind(this);
    }
    handleBlur=(field)=>(evt)=>
    {
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });

    }
    validate(firstname,lastname,telnum,email)
    {
        const error=
        {
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
        }
        if(this.state.touched.firstname && firstname.length<3)
        {
            error.firstname="length should be >=3"
        }
        else if(this.state.touched.firstname && firstname.length>10)
        {
            error.firstname="length should be <=10"
        }
        if(this.state.touched.lastname && lastname.length<3)
        {
            error.lastname="length should be >=3"
        }
        else if(this.state.touched.lastname && lastname.length>10)
        {
            error.lastname="length should be <=10"
        }
        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
        {
            error.telnum="enter only number";
        }
        if(this.state.touched.email && email.split("").filter(x=>x==='@').length!==1)
        {
            error.email="invalid email";
        }
        
        return error;
    }

    handleInputChange =(event)=>
    {
        const target=event.target;
        const value=target.type === 'checkbox' ? target.checked:target.value;
        const name=target.name;
        this.setState(
            {
                [name]:value,

            }
        )
    }
    handleSubmit(event)
    {
        console.log("current state is"+JSON.stringify(this.state));
        alert("current state is"+JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        const error=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row >
                            <Label md={2} htmlfor="firstname">FirstName</Label>
                            <Col md={10}>
                            <Input type="text" valid={error.firstname===''} invalid={error.firstname!==''} onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange} id="firstname" name="firstname" placeholder="FirstName" value={this.state.firstname} />
                            <FormFeedback>{error.firstname}   </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlfor="lastname">LastName</Label>
                            <Col md={10}>
                            <Input type="text" valid={error.lastname===''} invalid={error.lastname!==''}  onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange} id="lastname" name="lastname" placeholder="LastName" value={this.state.lastname}/>
                            <FormFeedback>{error.lastname}   </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlfor="telnum">Contact Tel</Label>
                            <Col md={10}>
                            <Input type="tel" valid={error.telnum===''} invalid={error.telnum!==''}  onBlur={this.handleBlur('telnum')} onChange={this.handleInputChange} id="telnum" name="telnum" placeholder="Tel.num" value={this.state.telnum}/>
                            <FormFeedback>{error.telnum}   </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlfor="email">Email</Label>
                            <Col md={10}>
                            <Input type="email" valid={error.email===''} invalid={error.email!==''}  onBlur={this.handleBlur('email')} onChange={this.handleInputChange} id="email" name="email" placeholder="Email" value={this.state.email}/>
                            <FormFeedback>{error.email}   </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{offset:2 ,size:6}}>
                                <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" onChange={this.handleInputChange}  name="agree" checked={this.state.agree}/>
                                    <strong>May  We contact you</strong>
                                </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{offset:1,size:3}}>
                                <Input type="select" onChange={this.handleInputChange}  name="contactType" value={this.state.contactType} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                            
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlfor="message">Your Feedback</Label>
                            <Col md={10}>
                            <Input type="textarea" onChange={this.handleInputChange} id="message" name="message" rows="12" value={this.state.message}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2}}>
                                <Button tpe="submit" color="primary">Submit Feedback </Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </div>

            </div>

        </div>
      
    );
}
}

export default Contact;