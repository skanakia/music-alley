import axios from "axios";

export default {
  getRecs: function() {
    return axios.get("/api/recs");
  },

};