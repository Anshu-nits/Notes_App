import axios from "axios";

const BASE_URL = "http://localhost:8080/api/notes";

export const getAllNotes = () => axios.get(BASE_URL);

export const createNote = (note) => axios.post(BASE_URL, note);

export const searchByTag = (tag) =>
  axios.get(`${BASE_URL}/search?tag=${tag}`);