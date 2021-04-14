import axios from 'axios';
const REGSTRATION_API_BASE_URL = "http://localhost:8080/user";
const Event_API_BASE_URL = "http://localhost:8080/event";
class RegService{

    getAllUsers(){
        return axios.get(REGSTRATION_API_BASE_URL+"/all");
    }
    createUser(data){
        return axios.post(REGSTRATION_API_BASE_URL+"/a",data);
    }
    deleteUser(id) {
        return axios.delete(REGSTRATION_API_BASE_URL+"/all/"+id);
    }
    getAllEvents(){
        return axios.get(Event_API_BASE_URL);
    }
    
}
export default new RegService()