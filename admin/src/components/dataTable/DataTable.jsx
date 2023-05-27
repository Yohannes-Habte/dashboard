import React, { useState } from 'react';
import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/dataTableSource';
import { NavLink } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  /*
  Inside data table component, do an action such as 
   - display either "Users, Products, Orders, or Delivry" or
   -delete either "Users, Products, Orders, or Delivry"
  */

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        // params is used to access the row elements
        return (
          <div className="cellAction">
            <NavLink to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </NavLink>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <article className="add-container">
        <h3 className="data-table-title">Add New User</h3>
        <NavLink to={'/users/newpage'} className={'link'}>
          Add New
        </NavLink>
      </article>
      <DataGrid className='DataGrid'
        rows={data}
        // to add "actionColumn" to the data table, use concate() method
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={9}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
