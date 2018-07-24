import axios from "axios";

export default {
    createAudioFile: function (userid, id, file) {
        return axios.post("/api/" + userid + "/" + id, file);
    },
    getFilesByProject: function(id) {
        return axios.get("/api/" + id);
    },
    deleteFile: function(id) {
        return axios.delete("/api/" + id);
    }
};