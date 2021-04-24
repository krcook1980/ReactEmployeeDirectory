import React from "react";

function Card (props) {
    return (
        <div className="card" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-header">
                    <h3>Hi, My Name Is: {props.name}</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Current City: {props.location}</li>
                    <li className="list-group-item">Nationality: {props.nationality}</li>
                    <li className="list-group-item">Current Age: {props.age}</li>
                </ul>
            </div>
        </div>

    )
}

export default Card;