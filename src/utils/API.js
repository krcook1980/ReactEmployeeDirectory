import axios from "axios";

export default {
    getRandomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=50")
    },
    getEmployeeSearch: function(nationality){
        return axios.get("https://randomuser.me/api/?nat=" + nationality + "&results=20")
    },
    getOneEmployee: function(){
        return axios.get("https://randomuser.me/api/?results=1")
    }

}

