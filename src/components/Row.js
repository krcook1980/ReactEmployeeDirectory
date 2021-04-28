import React from "react";

function Row(props) {
  const peopleArr =   props.people
  
    return (
    <>
    {peopleArr.map((one, index) =>
        <div className="row display" key={index}>
            <div className="col-md-2 text-center">
                <img src={one.picture.thumbnail} alt="..." />
            </div>
            <div className="col-md-2">
                {one.name.first} {one.name.last}
            </div>
            <div className="col-md-3">
                {one.location.city}, {one.location.state}
            </div>
            <div className="col-md-2 text-center">
                {one.dob.age}
            </div>
            <div className="col-md-2 text-center">
                {one.nat}
            </div>
        </div>
    )}
    </>
    )
}

export default Row;