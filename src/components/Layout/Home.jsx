import React from 'react';
const Home = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-warning text-center mt-5 display-2 font-weight-bold">
        {' '}
        🎉 CULTURO FESTO 🎉{' '}
      </h1>

      <div className="hi">
        <h2 className="text-white text-center my-4">
          Live every day as it is a Festival.
        </h2>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-4">
          <img
            src="https://images.unsplash.com/photo-1595150273385-8501b87c4842?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9saXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-4">
          <img
            src="https://images.unsplash.com/photo-1609561727271-353219a937bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <br></br>
      <h3 className="alert alert-primary text-center">
        Register for the events , enjoy with your family and friends and
        celebrate the feast.
      </h3>
    </div>
  );
};

export default Home;
