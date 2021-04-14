import axios from 'axios';
const EVENT_API_BASE_URL = "http://localhost:8080/event";
const EVENT_API_BASE_URL1 = "http://localhost:8080/events";

const headers = {
    'Content-Type': 'application/json',
     }
class EventService {
    
    getAllEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }

    createEvent(event){
        return axios.post(EVENT_API_BASE_URL,event,{headers});
    }

    getEventById(eventId){
        return axios.get(EVENT_API_BASE_URL1 + '/' + eventId);
    }


    deleteEvent(id){
        return axios.delete(EVENT_API_BASE_URL + '/' + id);
    }
}
export default new EventService()