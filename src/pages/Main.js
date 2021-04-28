import Row from "../components/Row";
import API from "../utils/API";
import React, { Component } from "react";
import Search from "../components/Search";

class Main extends Component {
    state = {
        people: [{
            picture: {
                thumbnail: "",
            },
            name: {
                first: "",
                last: "",
            },
            location: {
                city: "",
                state: ""
            },
            dob: {
                age: ""
            },
            nat: ""
        }],
        order: "ascend",
        search: "",
        filterPeople: []
    }

    // get people for display and put them in array 
    componentDidMount() {
        API.getRandomEmployees()
            .then(res => {
           
                this.setState({
                   
                    people: res.data.results,
                    filterPeople: res.data.results,
                })
                    
            })
            .catch(err => console.log("API CALL " + err))
    }


    // search input box
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
       
        this.filterPeople(value)
    };


    //filter function based on above input
    filterPeople = (search) => {   
        const newPeople =  this.state.filterPeople.filter(person => {  
            return (
            person.name.first.toLowerCase()
                .includes(search.toLowerCase()) ||
            person.name.last.toLowerCase()
            .includes(search.toLowerCase())  ||
            person.location.city.toLowerCase()
            .includes(search.toLowerCase())  
            )
            });
            this.setState({
               people: newPeople
            })
    }

    //sort by any of the headings clicked (image will sort female/male)
       sortList = (columnName, subName) => {
        this.state.people.sort((a,b) => {
            //Use localeCompare to compare the two strings
 
            // check to see does it have a subName?
           return subName ? 
           //check if this is a string (to handle sort age)
           typeof a[columnName][subName] === "string" ? 
          
           // if string and has subName
           a[columnName][subName].localeCompare(b[columnName][subName]) :
           
           //if not a string (age)
           a[columnName][subName] - b[columnName][subName]:

           //if string and no subName  (this line is the default like final else)
           a[columnName].localeCompare(b[columnName])

        })
        this.setState({people: this.state.people})
    }

    // header row of "table"
    render() {
        return (
            <div className="container">

                <Search
                    handleInputChange={this.handleInputChange}
                   
                />
                <p className="text-muted text-center"> Employee information can be sorted by clicking any of the headings</p>
                <div className="row display" >

                    <div className="col-md-2" onClick={()=> this.sortList("gender")}>
                        <h3> Image </h3>
                    </div>

                    <div className="col-md-2" onClick={()=> this.sortList("name", "first")}>
                        <h3> Employee Name</h3>
                    </div>

                    <div className="col-md-3" onClick={()=> this.sortList("location", "city")}>
                        <h3> Location</h3>
                    </div>

                    <div className="col-md-2" onClick={()=> this.sortList("dob", "age")}>
                        <h3>Age</h3>
                    </div>

                    <div className="col-md-2" onClick={()=> this.sortList("nat")}>
                        <h3>Nationality</h3>
                    </div>
                </div>
                {/* display each person */}
                <Row
                    people={this.state.people}
                 
                />
            </div>

        )
    }
}

export default Main;