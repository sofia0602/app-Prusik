import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({tableName, colums, rows, data,deleteData, route}) => {

  return (
    <div className="container">
      <div className="py-4">
        <h1>{tableName}</h1>
        <table class="table border shadow">
       <TableHead colums={colums}/>
       <TableBody data={data} rows={rows} deleteData={deleteData} route={route}></TableBody>   
        </table>
      </div>
    </div>
  );
};

export default Table;
