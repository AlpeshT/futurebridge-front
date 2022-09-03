import axios from "axios";
let headers = {
  "Content-type": "application/json"
}
export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: headers
});