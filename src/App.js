import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Download } from './features/downloader/Dowload';
function App() {
  return (
    <div className="App">
      <h1 className='border bg text-secondary '>
        redit reload
      </h1>
      <div className='Date'>
       <h3>6 April 2023</h3>
      </div>
        
          {/* <div className='col-12 border'>
          <img className="img-fluid mt-3 mb-3" src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"/>
            <h2>Czesc</h2>
            <h3>To ja</h3>
          </div>
          <div className='col-12 border'>
          <img className="img-fluid mt-3 mb-3" src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"/>
            <h2>Czesc</h2>
            <h3>To ja</h3>
          </div>
          <div className='col-12 border'>
          <img className="img-fluid mt-3 mb-3" src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"/>
            <h2>Czesc</h2>
            <h3>sdgsdgfsdgsdgadfadsfasfrasfasfawrawfasfarqwasfasfwetqefafsdgserdfsdfsjkljljkljkljkljklljkjklkjjkl</h3>
          </div> */}
          <Download/>
      <div className='AuthorSection'>
        Copyright: Mateusz Paszko
      </div> 
    </div>
  );
}

export default App;
