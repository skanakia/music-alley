import axios from "axios";

export default {
    createAudioFile: function (userid, id, file) {
        return axios.post("http://localhost:3001/api/audio/" + userid + "/" + id, file, { crossDomain: true });
    },
    getFilesByProject: function(id) {
        return axios.get("/api/audio/" + id);
    },
    deleteFile: function(id) {
        return axios.delete("/api/audio/" + id);
    },
    createNewUser: function(user) {
        return axios.post("http://localhost:3001/api/audio/user", user, { crossDomain: true });
    },
    login: function(user, password) {
        return axios.post("http://localhost:3001/api/audio/user/login", {"username": user, "password": password}, { crossDomain: true })
    }

};