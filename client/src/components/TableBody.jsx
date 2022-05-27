import React from 'react';
import { Link } from "react-router-dom";
const TableBody = ({data, deleteData,route}) => {
    return (<React.Fragment>
         <tbody>
            {data.map((item) => (
              <tr>
                {Object.keys(item).map(e=>(<th scope="col">{item[e]}</th>))}
                <td>
                  <Link class="btn btn-primary mr-2" to={`/${route}/${item._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/${route}/edit/${item._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteData(item._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
    </React.Fragment>  );
}
 
export default TableBody;