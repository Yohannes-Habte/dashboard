import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './Newpage.scss';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Newpage = ({ inputs, title }) => {
  // Local state variables
  const [file, setFile] = useState('');
  console.log(file);

  return (
    <main className="new-page">
      <Sidebar />
      <section className="new-page-container">
        <Navbar />
        <article className="top-container">
          <h1 className="title"> {title} </h1>
        </article>
        <div className="bottom-container">
          <div className="left-cotainer">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon//no-image-icon-0.jpg'
              }
              alt=""
              className="image"
            />
          </div>
          <div className="right-cotainer">
            <form action="" className="form">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FaCloudUploadAlt className="icon" />{' '}
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  // upload only one image
                  onChange={(e) => setFile(e.target.files[0])}
                  className="file-input"
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div key={input.id} className="formInput">
                    <label htmlFor=""> {input.label} </label>
                    <input
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                      className='input'
                    />
                  </div>
                );
              })}

              <div className="btn-container">
                <button className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newpage;
