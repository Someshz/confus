import React from 'react';
import {Link} from 'react-router-dom';
import {Loading} from "./LoadingComponent"
import {baseUrl} from '../shared/baseUrl';
import {Card ,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';

function RenderMenuItem({dishesh})
{
    return(

                        <Card >    
                            <Link to={`/menu/${dishesh.id}`}>
                            <CardImg  width="100%"  src={baseUrl+dishesh.image} alt={dishesh.name} />
                        <CardImgOverlay   className="ml-5 ">
                          <CardTitle>{dishesh.name}</CardTitle>   
                        </CardImgOverlay>
                        </Link>
                    </Card>
    )
}
   
const Menu=(props)=>
    {
          
    
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errmess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errmess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            const menu=props.dishes.dishes.map((dishesh)=>{
                return (
                    <div key={dishesh.id} className="col-xl-5 mb-2" >
                      <RenderMenuItem dishesh={dishesh}  />  
                    </div>
                )
            });
        return (
                <div className="container-md">
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                    {menu} 
                    </div>                             
                </div>   
              );
    }
}



export default Menu
