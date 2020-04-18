import React, { Component } from 'react';
import {Card, CardBody,CardImg,CardTitle,Label,Input,Row,Col,CardText,BreadcrumbItem,Breadcrumb,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Errors, Control} from "react-redux-form";


const Required=(val)=> val && val.length;
const minLength=(len)=>(val)=>val && (val.length>=len);
const maxLength=(len)=>(val)=> !(val) || (val.length<=len);

class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            isOpen1:false,
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.modalToggle=this.modalToggle.bind(this);
    }


modalToggle()
{
    this.setState(
        {
         isOpen1: !(this.state.isOpen1),   
        })

}

handleSubmit(values)
    {
        console.log("current state is"+JSON.stringify(values));
        alert("current state is"+JSON.stringify(values)); 
    }
    
RenderDish(dish1)
{
     if(dish1!=null)
     {
     
            return( <Card >
                   <CardImg width="100%" src={dish1.image} alt={dish1.name}/>
                   <CardBody>
                   <CardTitle >{dish1.name}</CardTitle>
                   <CardText >{dish1.description}</CardText>
                   </CardBody>       
                   </Card>
            )
     }
     else{
         return (
             <div></div>
         )
     }  
 }
       
RenderInfo(dish)
  {
    if(dish!=null)
    {
     return(   
    <div className=" text-left font-weight-bold">    
    {dish.comment}
    <br/>
    <br/>  
    -- {dish.author} ,
     {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.date)))} 

     <br/>
     <br/>
     </div> 
     )  
    }
    else{
        return(
            <div></div>
        )
    }     
 
}
medial()
{
return(
    <div>
    <Button outline onClick={this.modalToggle}  value="submit"><span className="fa fa-pencil"></span>Submit Comment </Button>

    <Modal isOpen={this.state.isOpen1} toggle={this.modalToggle}>
                <ModalHeader  toggle={this.modalToggle}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col md={12}>
                            <Label htmlfor="rating">Rating </Label>
                            <Input type="number" className="form-control" modal=".rating" id="rating" name="rating" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={12}>
                <Label htmlFor="rating">Your Name</Label>
                <Control.text 
                  model=".yourname"
                  id="yourname"
                  name="yourname"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    Required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourname"
                  show="touched"
                  messages={{
                    Required: "Required ",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
                  </Col>
                </Row>
                        <Row className="form-group">
                            <Col md={12}>
                            <Label htmlfor="comment">Comment</Label>
                            <Input type="textarea" className="form-control" row={15} modal=".comment" id="comment" name="comment"/>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="form-group">
                        <Col md={12}>
                        <Button type="submit" color="primary" value="submit">Submit</Button>
                        </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
            );
}
 render()
 {

    let info="";
    if(this.props.comments1!=null)
    {
    info=this.RenderInfo( this.props.comments1)
    }

    return (
        <div className="container">
            <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.selected1.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.selected1.name}</h3>
                            <hr/>
                        </div>
                    </div>
            <div className="row">
                
            <div className="col-md-5 col-sm-12 col-sm-12 font-weight-bold text-left">
            {this.RenderDish(this.props.selected1)}
            </div>
            <div className="col-md-5 col-sm-12">
            <h1 className="text-left ">Comments</h1>
              {info}
            </div>
            </div>
            {this.medial()}
            </div>
    )
 }
}

export default DishDetail;





   


   

