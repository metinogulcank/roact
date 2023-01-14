import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWNhYmNiMzRiNzdmMTIzZjhlNjk2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjYzOTM0MiwiZXhwIjoxNjcyODk4NTQyfQ.LFzLTFiqeMBkzobnpNSTv5nzH8KI6V_0UF55wCP_GDQ"

console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `metobaba123, ${TOKEN}` },
});