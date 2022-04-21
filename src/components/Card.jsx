const Card = ({ data, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{data?.last_value}</p>
      <p>بازدهی هفته:</p>
      <p>{data?.last7Return.toFixed(2)}%</p>
      <p>بازدهی ماه:</p>
      <p>{data?.last30Return.toFixed(2)}%</p>
    </div>
  );
};

export default Card;
