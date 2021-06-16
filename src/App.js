import './App.css';
import ProjectsContainer from './components/ProjectsContainer.js';


const App = (props) => {
  return (
    <div className="App">
      <ProjectsContainer state={props.state} />
    </div>
  );
}

export default App;
