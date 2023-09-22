import React, { useEffect } from "react";
import Inputcard from "../../component/input card/Inputcard";
import TodosCard from "../../component/todos card/TodosCard";
import axios from "axios";
import "./Home.css";
import { useState } from "react";
function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);





  const handelChange = (e) => {
    setValue(e.target.value);
  };
//   console.log(value, "value");
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setData(res.data)
    //   console.log(res.data, "res");
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
// console.log(data,"data");
  return (
    <div>
      <div className="first-div">
        <h1>TODP List</h1>
        <Inputcard value={value} onChange={handelChange} setData={setData} setValue={setValue} data={data} />
      </div>
      <div className="second-div">
        <TodosCard data={data} setData={setData}  />
      </div>
    </div>
  );
}

export default Home;
