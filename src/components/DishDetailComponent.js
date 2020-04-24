import React, { Component } from 'react';
import {Card, CardBody,CardImg,CardTitle,Label,Row,Col,CardText,BreadcrumbItem,Breadcrumb,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Errors, Control} from "react-redux-form";
import {Loading} from "./LoadingComponent"

let info1=<div></div>
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
      
       this.props.addComment(this.props.selected1.id, values.rating, values.yourname, values.comment);
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
 
       
RenderInfo(dish1)
  {
    if(dish1!=null)
    {  
        info1 =dish1.map((dish)=>{
          return(
            <div className=" text-left font-weight-bold">    
                {dish.comment}
                <br/>
                <br/>  
                -- {dish.author} ,
                {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.date)))} 
                <br/>
                <br/> 
            </div> )
        });
     
    }
    else{
        
         info1=   <div></div>
       
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
                            <Label htmlfor="rating">Rating</Label>
                            <Control.text   className="form-control" model=".rating" id="rating" name="rating" />
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
                            <Control.textarea   className="form-control" row={15} model=".comment" id="comment" name="comment"/>
                            </Col>
                        </Row>
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

    
    
    
    if(this.props.comments1!=null)
    {
   this.RenderInfo( this.props.comments1)
    }
    
    if (this.props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    {Loading()}
                </div>
            </div>
        );
    }
    else if (this.props.errmess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{this.props.errmess}</h4>
                </div>
            </div>
        );
    }
    else 
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
              {info1}
            </div>
            </div>
            {this.medial()}
            </div>
    )
 }
}

export default DishDetail;





   


   

