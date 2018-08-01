import axios from "axios";

export default {
    createAudioFile: function (userid, id, file) {
        return axios.post("/api/audio/" + userid + "/" + id, file);
    },
    getFilesByProject: function(id) {
        return axios.get("/api/audio/" + id);
    },
    deleteFile: function(id) {
        return axios.delete("/api/audio/" + id);
    },
    createNewUser: function(user) {
        return axios.post("/api/audio/user", user);
    },
    login: function(user) {
        // console.log(axios.post("/api/audio/user/login", {"username": user.username, "password": user.password}, { crossDomain: true }));
        return axios.post("/api/audio/user/login", {"username": user.username, "password": user.password})
    }

};