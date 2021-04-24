import Card from "../components/Card";
import API from "../utils/API";
import React, { Component } from "react";

class Main extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        image: "",
        name: "",
        location: "",
        nationality: "",
        age: "",

    }
    componentDidMount() {
        
            API.getOneEmployee()
                .then(res => {
                    console.log(res.data.results[0])
                    this.setState({
                        image: res.data.results[0].picture.large,
                        name: res.data.results[0].name.first,
                        location: res.data.results[0].location.city,
                        nationality: res.data.results[0].nat,
                        age: res.data.results[0].dob.age,
                    })
                
                })
     
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h1>Employee Directory</h1>
                        <p>We pride ourselves on having the best employees!</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2>Employee of the Month!</h2>
                        <Card
                        image={this.state.image}
                        name={this.state.name}
                        location={this.state.location}
                        nationality={this.state.nationality}
                        age={this.state.age}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;