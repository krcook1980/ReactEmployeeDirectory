import reactDom from "react-dom";
import Card from "../components/Card";
import API from "../utils/API";

class Home extends Component {
    state = {
        image: "",
        name: "",
        location: "",
        nationality: "",
        age: "",

     }

     loadEmployee = () => {
        API.getOneEmployee()
        .then(res => this.setState({
            image: res.data.picture.medium,
            name: res.data.name.first,
            location: res.data.location.state,
            nationality: res.data.nat,
            age: res.data.dob.age,
        }))
     }

     render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Employee Directory</h1>
                        <p>We pride ourselves on having the best employees!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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
        )
     }
}

export default Home;