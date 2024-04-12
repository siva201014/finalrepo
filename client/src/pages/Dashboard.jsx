import React, { useEffect, useState } from "react";
import { checkAuthentication } from "../components/auth";

export const DashboardPage = () => {
  const params = new URLSearchParams(window.location.search);

  // Get individual query parameters
  const param1 = params.get("param1");
  const param2 = params.get("param2");
  // localStorage.setItem("token", param1);
  // Do something with the parameters
  console.log("param1:", param1);
  console.log("param2:", param2);
  console.log("param1", param1);
  debugger;
  console.log(localStorage);
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const userIdCookie = cookies.find((cookie) => cookie.startsWith("userId="));
  const userId = userIdCookie ? userIdCookie.split("=")[1] : null;
  console.log("cookies");
  console.log(cookies);
  if (param1) localStorage.setItem("token", userId);
  const [data, setData] = useState({ username: "default" });
  useEffect(() => {
    const fetchData = async () => {
      const isAuth = await checkAuthentication();

      const token = localStorage.getItem("token");
      if (!isAuth) window.location.href = "/";
      const response = await fetch(`${window.ENVIRONMENT.api}/dashboard`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Specify the content type of the request body
        }, // Ensure that credentials are included in the request
      });
      const jsonData = await response.json();

      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="top-nav top-nav-custom">
        <h1 className="title">Billing System</h1>
      </div>

      <div className="apply-translation">
        <div className="dashboard">
          <h1>Dashboard</h1>
          <h2>Welcome {data.username}</h2>
        </div>

        <div id="dashboard-options">
          <div className="dashboard-links">
            <h3>What would you like to do...</h3>
            <div className="dashboard-options-list">
              <div onClick={() => (window.location.href = "/billingsystem")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
                </svg>
                <a href="/billingsystem">Go to Billing System</a>
              </div>
              <div onClick={() => (window.location.href = "/instructions")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                </svg>
                <a href="/instructions">Go to Instructions</a>
              </div>
              <div onClick={() => (window.location.href = "/user_info")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <a href="/user_info">Go to User Information</a>
              </div>
              <div onClick={() => (window.location.href = "/logout")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                  />
                </svg>
                <a href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
