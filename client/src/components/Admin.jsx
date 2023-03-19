import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Navbar from "./Navbar";

const Admin = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(true);
  useEffect(() => {
    getAllUser();
    // sortUserData();
  }, []);

  const serverURL = "https://elevate2k23.onrender.com";
  const localURL = "http://localhost:8080";
  const URL = serverURL;

  const getAllUser = () => {
    fetch(`${URL}/getAllUsers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "userData");
        if (sortBy) setData(data.data.sort(compareName));
        else {
          setData(data.data.sort(compareDate));
        }
      });
  };
  const compareName = (a, b) => {
    if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
    return 0;
  };
  const compareDate = (a, b) => {
    if (Date(a.time) < Date(b.time)) return -1;
    if (Date(a.time) > Date(b.time)) return 1;
    return 0;
  };

  const deleteUser = (id, username) => {
    if (window.confirm(`Are you sure you want to delete ${username}`)) {
      fetch(`${URL}/deleteUser`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };
  const incPoints = (id, username, points) => {
    // alert("points increased +10")
    if (
      window.confirm(
        `Are you sure you want to increase ${username}'s points by 10`
      )
    ) {
      fetch(`${URL}/incPointsby10`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };
  const decPoints = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to decrease ${username}'s points by 10`
      )
    ) {
      fetch(`${URL}/decPointsby10`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };
  // var sorteddata = data?.sort() || "";
  return (
    <>
      <Navbar />
      <div className="mt-[70px]">
        <h1 className="h1 text-center">Admin Panel</h1>
        <div className="sortby flex justify-center align-items-center">
          <h2> sort by: </h2>
          <button
            onClick={() => {
              setSortBy(true);
              getAllUser();
            }}
            className={styles.greenButton + " btn mx-1"}
          >
            Name
          </button>
          <button
            onClick={() => {
              setSortBy(false);
              getAllUser();
            }}
            className={styles.greenButton + " btn mx-1"}
          >
            Date
          </button>
        </div>
        <div className="note text-center">
          *double click on the button to sort the data accordingly
        </div>
        {data?.map((i, index) => {
          return (
            <div key={index}>
              <h4>User {index + 1}</h4>
              <p className="ml-2">
                username: {i.username} <br />
                fname: {i.firstName}
                <br /> lname: {i.lastName} <br /> fullname: {i.fullname}
                <br /> email: {i.email} <br /> mobile: {i.mobile} <br />{" "}
                institute: {i.institute} <br /> tid: {i.tid}
                <br /> Date: {i.time} <br /> points: {i.points}{" "}
              </p>
              <button
                className={styles.greenButton + " btn mx-2"}
                onClick={() => {
                  deleteUser(i._id, i.username);
                }}
              >
                delete
              </button>
              <button
                className={styles.greenButton + " btn mx-2"}
                onClick={() => {
                  incPoints(i._id, i.username, i.points);
                }}
              >
                {" "}
                +10
              </button>
              <button
                className={styles.greenButton + " btn mx-2"}
                onClick={() => {
                  decPoints(i._id, i.username, i.points);
                }}
              >
                {" "}
                -10
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Admin;
