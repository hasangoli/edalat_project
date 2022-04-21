import { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import "antd/dist/antd.min.js";
import rootContext from "./context";
import Table from "./components/Table";
import { ConfigProvider } from "antd";
import Cards from "./components/Cards";

const App = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("/data/edalat_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <rootContext.Provider value={{ data }}>
      <ConfigProvider direction="rtl">
        <div className="App">
          <h1>پروژه عدالت</h1>
          <Cards />
          <Table />
        </div>
      </ConfigProvider>
    </rootContext.Provider>
  );
};

export default App;
