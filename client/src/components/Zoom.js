import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Question from "./Question";

const ENDPOINT = "http://localhost:5000";

let socket;

const Zoom = ({ location }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    setName(name);

    socket.emit("join", { name }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  const handleChange = () => {
    socket.emit("post-question", name);
  };

  const [obj, setObj] = useState([]);

  useEffect(() => {
    socket.on("pop-up", (object) => {
      setObj((obj) => [...obj, object.message[0]]);
    });
  }, []);

  console.log(obj);

  return (
    <>
      <button className="btn btn-success btn-md" onClick={handleChange}>
        Post
      </button>
      {obj.length === 0 ? <> </> : <Question obj={obj} />}
    </>
  );
};

export default Zoom;
