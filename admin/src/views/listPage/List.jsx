import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./List.scss"
import DataTable from '../../components/dataTable/DataTable';

const List = () => {
  return (
    <main className="list-page">
      <Sidebar />

      <div className="list-container">
        <Navbar />
        <DataTable />
      </div>
    </main>
  );
};

export default List;
