import { Table as AntdTeble } from "antd";
import { useContext, useEffect, useState } from "react";
import rootContext from "../context";

const Table = () => {
  const { data } = useContext(rootContext);

  const [dataSource, setDataSource] = useState([]);

  const [nameFAs, setNameFAs] = useState(null);
  const [navs, setNavs] = useState(null);
  const [pnavs, setPnavs] = useState(null);
  const [ltis, setLtis] = useState(null);
  const [mcs, setMcs] = useState(null);
  const [nis, setNis] = useState(null);

  useEffect(() => {
    setNameFAs(data?.ostani_data?.nameFA);
    setNavs(data?.ostani_data?.nav);
    setPnavs(data?.ostani_data?.pnav);
    setLtis(data?.ostani_data?.lti);
    setMcs(data?.ostani_data?.mc);
    setNis(data?.ostani_data?.ni);

    // nameFAs?.map((i, item) =>
    //   setDataSource(...dataSource, {
    //     key: i,
    //     nameFA: item[i],
    //     nav: navs[i],
    //     pnav: pnavs[i],
    //     lti: ltis[i],
    //     mc: mcs[i],
    //     ni: nis[i],
    //   })
    // );

    for (let i = 0; i < nameFAs?.length; i++) {
      setDataSource(...dataSource, {
        key: i,
        nameFA: nameFAs[i],
        nav: navs[i],
        pnav: pnavs[i],
        lti: ltis[i],
        mc: mcs[i],
        ni: nis[i],
      });
    }
  }, [data, nameFAs, navs, pnavs, ltis, mcs, nis, dataSource]);

  // const dataSource = [
  //   {
  //     key: "1",
  //     nameFA: "Mike",
  //     nav: 32,
  //     pnav: 215,
  //     lti: 345,
  //     mc: 22315,
  //     ni: 245315,
  //   },
  //   {
  //     key: "2",
  //     nameFA: "John",
  //     nav: 42,
  //     pnav: 234,
  //     lti: 213245,
  //     mc: 454234,
  //     ni: 423556,
  //   },
  // ];

  const columns = [
    {
      title: "نام نماد",
      dataIndex: "nameFA",
      key: "nameFA",
    },
    {
      title: "ارزش خالص دارایی",
      dataIndex: "nav",
      key: "nav",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.nav - b.nav,
    },
    {
      title: "نسبت قیمت به ارزش خالص دارایی",
      dataIndex: "pnav",
      key: "pnav",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pnav - b.pnav,
    },
    {
      title: "مقدار سرمایه گذاری بلند مدت",
      dataIndex: "lti",
      key: "lti",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lti - b.lti,
    },
    {
      title: "ارزش بازار",
      dataIndex: "mc",
      key: "mc",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.mc - b.mc,
    },
    {
      title: "سود خالص",
      dataIndex: "ni",
      key: "ni",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.ni - b.ni,
    },
  ];

  return (
    <div>
      <AntdTeble dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Table;
