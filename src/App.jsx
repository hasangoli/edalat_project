import "./App.css";
import "antd/dist/antd.min.css";
import "antd/dist/antd.min.js";
import rootContext from "./context";
import Table from "./components/Table";
import { ConfigProvider } from "antd";
import Card from "./components/Card";
import PieChart from "./components/PieChart";
import { useContext } from "react";

const App = () => {
  const { edalatData, pieData, dataSource, columns } = useContext(rootContext);

  return (
    <ConfigProvider direction="rtl">
      <div className="container mx-auto pb-8">
        <h1 className="text-4xl text-center mt-8 mb-12">پروژه عدالت</h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
          {edalatData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
        <div className="my-8">
          <PieChart pieData={pieData} />
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </ConfigProvider>
  );
};

export default App;
