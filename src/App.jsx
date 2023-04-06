import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import DashoardIndex from './pages/dashboard/DashoardIndex';

function App() {
  
  return (
    < >
      <div className='bg-main'>
        <Routes>
          {/* <Route exact path="/" render={() => (
            <Redirect to="/dashboard"/>
          )}/> */}
          <Route path="/dashboard" element={<DashoardIndex />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
