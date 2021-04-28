import axios from "axios";

const API = {
    getRandomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=20")
    },
    getEmployeeSearch: function(nationality){
        return axios.get("https://randomuser.me/api/?nat=" + nationality + "&results=20")
    },
    getOneEmployee: function(){
        return axios.get("https://randomuser.me/api/?results=1")
    }

}

export default API;

