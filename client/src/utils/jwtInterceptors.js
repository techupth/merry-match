import axios from "axios";

function jwtInterceptor() {
  axios.interceptors.request.use((req) => {
    const hasToken = Boolean(window.localStorage.getItem("token")); //Check token in localStorage

    if (hasToken) {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      };
    }

    return req;
  });

  axios.interceptors.response.use(
    (req) => {
      return req;
    },
    (err) => {
      if (
        err.status === 401 &&
        err.statusText === "Unauthorized"
      ) {
        window.localStorage.removeItem("token");
        window.location.replace("/");
      }
    }
  );
}

export default jwtInterceptor;
