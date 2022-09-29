import './App.css';
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Detail from './components/Detail';
import { skillData, projectsData } from './data.js'

function App() {
  const [projects, setProjects] = useState(projectsData)
  console.log(projects)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects projects={projects}/>} />
        <Route path='/projects/:id' element={<Detail projects={projects}/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route paht="/projects/:id" />
      </Routes>
    </div>
  );
}

export default App;


