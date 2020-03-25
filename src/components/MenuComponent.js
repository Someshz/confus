import React, { Component } from 'react';
import {Media } from 'reactstrap';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.states={
            dishesh:[
                {
                    id:0,
                    name:"Uthapizza",
                    img:'assets/images/uthappizza.png',
                    category:'mains',
                    label:'hot',
                    price:4.99,
                    desc:'unique combination of combination of indian and chinese indian and chinese '
                },
                {
                    id:1,
                    name:"zucchipakoda",
                    img:'assets/images/zucchipakoda.png',
                    category:'mains',
                    label:'hot',
                    price:4.99,
                    desc:'unique combination ofcombination of indian and chinese  indian and chinese '
                },
                {
                    id:2,
                    name:"vadonut",
                    img:'assets/images/vadonut.png',
                    category:'mains',
                    label:'hot',
                    price:4.99,
                    desc:'unique combination of indian and chinese combination of indian and chinese lorem10 f f g sffdf'
                },
                {
                    id:3,
                    name:"elaicheesecake",
                    img:'assets/images/elaicheesecake.png',
                    category:'mains',
                    label:'hot',
                    price:4.99,
                    desc:'unique combination ofcombination of indian and chinese  indian and chinese '
                },
            ]
        }
    }
    render()
    {
        const menu=this.states.dishesh.map((dishesh)=>{
            return (
                <div key={dishesh.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dishesh.img} alt={dishesh.name} />
                        </Media>
                        <Media body className="ml-5 ">
                          <Media heading>{dishesh.name}</Media> 
                          <p>{dishesh.desc}</p>   
                        </Media>
                    </Media>

                </div>
            )
        });
        return (
            <div className="container">
                <div class="row">
                    <Media list>
                        {menu}
                    </Media>
                    
                </div>

            </div>

        );
    }
}


export default Menu
