// Axios requests for user authentication and email services

import axios from "axios";
import API from "../url";

// User registration
export const singUpAxios = (values) => {
  return axios({
    url: `${API}/users/signup`,
    method: "post",
    data: values,
  });
};

// Verify email after registration
export const verifyEmailAxios = (params) => {
  return axios({
    url: `${API}/users/verifyemail/${params}`,
    method: "get",
  });
};

// Request for resetting password
export const passResetAxios = (data) => {
  return axios({
    url: `${API}/users/resetpassword`,
    method: "post",
    data: data,
  });
};

// Check the validity of the reset password string
export const checkString = (data) => {
  return axios({
    url: `${API}/users/resetpassword/${data}`,
    method: "get",
  });
};

// Change password after resettin
export const changePassAxios = (data, string) => {
  return axios({
    url: `${API}/users/changepassword/${string}`,
    method: "post",
    data: data,
  });
};

// User login
export const loginAxios = (data) => {
  return axios({
    url: `${API}/users/login`,
    method: "post",
    data: data,
  });
};

// Verify user token
export const verifyTokenAxios = (data) => {
  return axios({
    url: `${API}/users/verifyToken`,
    method: "get",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
    },
  });
};

// Email settings update
export const settingsAxios = (data) => {
  return axios({
    url: `${API}/email/settings`,
    method: "post",
    data: data,
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
    },
  });
};

// Get user credentials
export const getCredential = () => {
  return axios({
    url: `${API}/email/getCredential`,
    method: "get",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
  });
};

// Send emails to recipients
export const sendEmailToRecepiantAxios = (data) => {
  return axios({
    url: `${API}/email/sendEmails`,
    method: "post",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
    data: data,
  });
};

// Delete user credentials
export const deleteCredentials = () => {
  return axios({
    url: `${API}/email/deleteCred`,
    method: "delete",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
  });
};

// Get user's email log details
export const getLogDetails = () => {
  return axios({
    url: `${API}/email/getLogDetailsData`,
    method: "get",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
  });
};

// Get graph data for email analytics
export const graphDataAxios = (data) => {
  return axios({
    url: `${API}/email/getGraphData`,
    method: "post",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
    data: data,
  });
};

// Get count of emails sent today
export const getMailsCountAxios = () => {
  return axios({
    url: `${API}/email/getMailSendToday`,
    method: "get",
    headers: {
      "x-auth-token": localStorage.getItem("x-Auth-token"),
      user: localStorage.getItem("user"),
    },
  });
};
