import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ProjectsView from './views/ProjectsView/ProjectsView'
import './App.css'


function renderView(view, setView) {
  switch(view){
    case 'HOME':
      return(
        <section>
          <div class="main">
              <h1>About Me</h1>
              <p>New engineering graduate from New Orleans.</p>
          </div>
        </section>
      )
      case 'PROJECTS':
      return <ProjectsView />
      default:
        return null
  }
}

function App() {
  const [view, setView] = useState('HOME')
  
    return (
      <div className="App">
        <NavBar view setView={setView}/>
        {renderView(view, setView)}
        <Footer />
      </div>
    );
}

export default App;
