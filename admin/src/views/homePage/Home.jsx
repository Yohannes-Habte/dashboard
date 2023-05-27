import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import FeaturedChart from '../../components/featureChart/FeaturedChart';
import Chart from '../../components/chart/Chart';
import TableReact from '../../components/table/Table';

const Home = () => {
  return (
    <main className="home-page">
      <Sidebar className="home-sidbar" />
      <section className="home-contianer">
        <Navbar />

        <div className="widgets-container">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="chats-container">
          <FeaturedChart />
          <Chart aspect={2/1} title={"Last Six Months Revenue"} />
        </div>

        <article className='list-container'>
          <h3 className='list-Title'> Latest Transactions </h3>
          <TableReact />
        </article>


      </section>
    </main>
  );
};

export default Home;
