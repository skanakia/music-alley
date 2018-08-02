import axios from "axios";

export default {
    createAudioFile: function (userid, id, file_url) {
        return axios.post("http://localhost:3001/api/audio/" + userid + "/" + id, file_url, {crossOrigin: true});
    },
    getFilesByProject: function(id) {
        return axios.get("http://localhost:3001/api/audio/" + id, {crossOrigin: true});
    },
    deleteFile: function(id) {
        return axios.delete("http://localhost:3001/api/audio/" + id, {crossOrigin: true});
    },
    createNewUser: function(user) {
        return axios.post("http://localhost:3001/api/audio/user", user, {crossOrigin: true});
    },
    login: function(user) {
        // console.log(axios.post("/api/audio/user/login", {"username": user.username, "password": user.password}, { crossDomain: true }));
        return axios.post("http://localhost:3001/api/audio/user/login", {"username": user.username, "password": user.password}, {crossOrigin: true})
    }

};