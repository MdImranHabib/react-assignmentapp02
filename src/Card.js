import React from 'react';

const Card = (props) => {
    return(
        <div>
            <div className="card" style={{width:400}}>
                <img className="card-img-top" src={props.imgSource} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div> 
        </div>
    );
}

export default Card;