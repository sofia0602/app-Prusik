import React from 'react';
const TableHead = ({colums}) => {
    return (   
    <thead class="thead-dark">
    <tr>
      {colums.map(e=>( <th scope="col">{e}</th>))}
      <th>Action</th>
    </tr>
  </thead>);
}
 
export default TableHead;