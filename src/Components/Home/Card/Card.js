import React,{Component} from 'react';

import './Card.css';
class Card extends Component{
    render(){
        return(
            <div className="card">
                <div className="card--outer">
                    <div className="card--inner">
                        <div className="card-image">A</div>
                    </div>
                </div>
                <div className="card-backdrop"></div>
                <span>Movie name</span>
            </div>
        );
    }
}

export default Card;