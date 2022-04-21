import { useContext } from "react";
import rootContext from "../context";
import Card from "./Card";

const Cards = () => {
  const { data } = useContext(rootContext);
  return (
    <div>
      {data && <Card data={data.edalat1} title="ارزش پرتفوی 1 میلیون تومانی" />}
      {data && <Card data={data.edalat5} title="ارزش پرتفوی 500 هزار تومانی" />}
    </div>
  );
};

export default Cards;
