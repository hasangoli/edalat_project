const Card = ({ data }) => {
  const { title, last_value, last7Return, last30Return } = data;

  return (
    <div className="w-4/5 md:w-2/5 text-center mb-8 md:mb-0 px-8 py-4 rounded-xl shadow-2xl transition-all cursor-pointer hover:bg-slate-100 hover:scale-110">
      <p className="m-0 text-right mb-2">{title} :</p>
      <p className="m-0 text-left text-lg">
        {last_value.toLocaleString()} ريال
      </p>
      <p className="m-0 text-right">بازدهی هفته:</p>
      <p className="m-0 text-left" dir="ltr">
        {last7Return.toFixed(2)}
      </p>
      <p className="m-0 text-right">بازدهی ماه:</p>
      <p className="m-0 text-left" dir="ltr">
        {last30Return.toFixed(2)}
      </p>
    </div>
  );
};

export default Card;
