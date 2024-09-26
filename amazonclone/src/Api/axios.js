import axios from "axios";

const axiosInstance = axios.create({
  // // localinstance of firebase function
//  baseURL:"http://127.0.0.1:5001/clone-54352/us-central1/api"
// // deployed version of amazone server on render.com
 baseURL:"https://amazon-clone-deploy-nl3c.onrender.com/"
});

export { axiosInstance }