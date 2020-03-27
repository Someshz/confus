import React, { Component } from 'react';
import {Media, CardBody } from 'reactstrap';
import {Card ,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            selected:null
        }
       
    }
 onFunction(dish)
{
    if(dish!=null)
    {
    console.log("somesh");
   this.setState(
   {

   selected:(<Card>
        <CardBody>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardText>{dish.description}</CardText>
        </CardBody>     
    </Card>),
   });
    }
    else{
        this.setState= (
   {
   selected:(<div></div>),
   });
    }

}


    render()
    {
        const menu=this.props.dishes.map((dishesh)=>{
            return (
                <div key={dishesh.id} className="col-xl-6 col-sm-12 mb-5" >
                    <Card  onClick={()=>this.onFunction(dishesh)}>
                    
                        
                            <CardImg  width="100%"  src={dishesh.image} alt={dishesh.name} />
                      
                        <CardImgOverlay   className="ml-5 ">
                          <CardTitle>{dishesh.name}</CardTitle> 
                            
                        </CardImgOverlay>
                    </Card>

                </div>
            )
        });
        return (
            <div className="container">
                <div class="row">
                    
                        {menu}
                    
                    
                </div>
                <div>{this.state.selected}</div>

            </div>

        );
    }
}


export default Menu
