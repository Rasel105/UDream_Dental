import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
     return (
          <div style={{ height: "500px" }} className="d-flex justify-content-center align-items-center">
               <Spinner animation="border" variant="info" />
          </div>
     );
};

export default Loading;