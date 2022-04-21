import { Table as AntdTable } from "antd";

const Table = ({ dataSource, columns }) => {
  return (
    <div className="w-11/12 mx-auto overflow-x-scroll">
      <AntdTable
        size="small"
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Table;
