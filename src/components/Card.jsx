import React from "react";


function Card(props) {



    

    return <div className="card">
            <div className="card-body">
                <img src={props.logo} alt="card-img" />
                <span><h5>{props.name}</h5>
                <p>{props.description}</p></span>
            </div>
            <div className="control">
            <button onClick={() => {props.onChecked(props.id)}}>Remove</button>
            <label className="switch">
            <input type="checkbox" checked={props.state} onChange={() => props.onToggle(props.id)}/>
            <span className="slider"></span>
            </label>
            </div>

        
        </div>

}
export default Card;