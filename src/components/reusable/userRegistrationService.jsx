import axios from 'axios';

const REGISTER_API_BASE_URL="http://localhost:8080/user/all";

class userRegistrationService {
    createRegister(user){
        return axios.post(REGISTER_API_BASE_URL, user)
    }
}
export default new userRegistrationService()