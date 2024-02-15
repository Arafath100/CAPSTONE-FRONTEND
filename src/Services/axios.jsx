// Axios requests for user authentication and email services

import axios from "axios";
import API from "../url";

const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("x-Auth-token"),
    user: localStorage.getItem("user"),
  },
});

export const signUpAxios = (values) => axiosInstance.post("/users/signup", values);

export const verifyEmailAxios = (params) => axiosInstance.get(`/users/verifyemail/${params}`);

export const passResetAxios = (data) => axiosInstance.post("/users/resetpassword", data);

export const checkString = (data) => axiosInstance.get(`/users/resetpassword/${data}`);

export const changePassAxios = (data, string) =>
  axiosInstance.post(`/users/changepassword/${string}`, data);

export const loginAxios = (data) => axiosInstance.post("/users/login", data);

export const verifyTokenAxios = () =>
  axiosInstance.get("/users/verifyToken")
    .catch(error => {
      // Handle error globally if needed
      console.error("Error in verifyTokenAxios:", error);
      throw error; // Rethrow the error to propagate it
    });

export const settingsAxios = (data) =>
  axiosInstance.post("/email/settings", data)
    .catch(error => {
      console.error("Error in settingsAxios:", error);
      throw error;
    });

export const getCredential = () =>
  axiosInstance.get("/email/getCredential")
    .catch(error => {
      console.error("Error in getCredential:", error);
      throw error;
    });

export const sendEmailToRecepiantAxios = (data) =>
  axiosInstance.post("/email/sendEmails", data)
    .catch(error => {
      console.error("Error in sendEmailToRecepiantAxios:", error);
      throw error;
    });

export const deleteCredentials = () =>
  axiosInstance.delete("/email/deleteCred")
    .catch(error => {
      console.error("Error in deleteCredentials:", error);
      throw error;
    });

export const getLogDetails = () =>
  axiosInstance.get("/email/getLogDetailsData")
    .catch(error => {
      console.error("Error in getLogDetails:", error);
      throw error;
    });

export const graphDataAxios = (data) =>
  axiosInstance.post("/email/getGraphData", data)
    .catch(error => {
      console.error("Error in graphDataAxios:", error);
      throw error;
    });

export const getMailsCountAxios = () =>
  axiosInstance.get("/email/getMailSendToday")
    .catch(error => {
      console.error("Error in getMailsCountAxios:", error);
      throw error;
    });
