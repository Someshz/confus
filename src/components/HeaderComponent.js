import React, { Component } from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';

class Header extends Component
{
    render()
    {
       return ( <React.Fragment>
        <Navbar  dark color="primary">
          <div className="Container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                       <h1>Ristorante Con Fusion</h1>
                       <p>this is one of the best restaurent in the Indiathis is one of the best restaurent in the Indiathis is one of the best restaurent in the India</p>
                    </div>
                </div> 
            </div>
       </Jumbotron>

        </React.Fragment>
       );
    }
}
export default Header