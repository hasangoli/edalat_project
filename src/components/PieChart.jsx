import { Pie, G2 } from "@ant-design/plots";

const PieChart = ({ pieData }) => {
  const G = G2.getEngine("canvas");
  const cfg = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 0.55,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: -10,
            y: 5,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.percent.toFixed(2) * 100}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return <Pie {...config} />;
};

// import { Pie } from "@ant-design/plots";

// const PieChart = ({ pieData }) => {
//   const config = {
//     appendPadding: 10,
//     data: pieData,
//     angleField: "value",
//     colorField: "type",
//     radius: 0.5,
//     label: {
//       type: "spider",
//       labelHeight: 28,
//       content: "{name} \n{percentage}",
//     },
//     interactions: [
//       {
//         type: "element-selected",
//       },
//       {
//         type: "element-active",
//       },
//     ],
//     state: {
//       active: {
//         animate: { duration: 100, easing: "easeLinear" },
//         style: {
//           lineWidth: 2,
//           stroke: "#000",
//         },
//       },
//     },
//   };
//   return <Pie {...config} />;
// };

export default PieChart;
