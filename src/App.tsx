import React from 'react';
import { Card } from 'primereact/card';
import angular from './assets/angular.svg'; // Tell webpack this JS file uses this image
import react from './assets/react.png'; // Tell webpack this JS file uses this image
import csharp from './assets/csharp.svg'; // Tell webpack this JS file uses this image
import java from './assets/java.png'; // Tell webpack this JS file uses this image


import './App.css';
import 'primeflex/primeflex.css';
import ProfilePhoto from './assets/me.jpg'


const App: React.FC = () => {
  return (
    <div className="App">
      <Card className="card">
        <div className="name">
         <h2>thyago silva</h2>
         <h4>desenvolvedor full-stack</h4> 
        </div>
        <div className="profile-container">
          <img className="profilePhoto" src={ProfilePhoto} alt="Foto de Thyago Silva"/>
        </div>
        <div className="social-media p-grid">
          <div className="p-col">
            <a href="https://www.linkedin.com/in/thyago-santos-7b97531b0/" target="_blank" rel="noreferrer" data-testid="social-anchor">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
          <div className="p-col">
            <a href="https://github.com/thyago-silva" target="_blank" rel="noreferrer" data-testid="social-anchor">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
          <div className="p-col">
            <a href={process.env.PUBLIC_URL + '/curriculo.pdf'} download data-testid="social-anchor">
              <i className="fa fa-file-text" aria-hidden="true"></i>
            </a>
          </div>
          <div className="p-col">
            <a href="mailto:thyago.kun@gmail.com" data-testid="social-anchor">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="skill-container">
          <div data-testid="skill-card">
            <Card className="skill-card">
              <img className="skill-item" src={angular} alt="Java" />
            </Card>
          </div>
          <div data-testid="skill-card">
            <Card className="skill-card">
              <img className="skill-item" src={java} alt="CSharp" />
            </Card>
          </div>
        </div>

        <div className="skill-container">
          <div data-testid="skill-card">
            <Card className="skill-card">
              <img className="skill-item" src={react} alt="Angular" />
            </Card>
          </div>
          <div data-testid="skill-card">
            <Card className="skill-card">
              <img className="skill-item" src={csharp} alt="React" />
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
