import './App.css';
import ProjectsContainer from './components/ProjectsContainer.js';


const App = (props) => {
  return (
    <div className="App">
      <ProjectsContainer store={props.store} />
    </div>
  );
}

export default App;
