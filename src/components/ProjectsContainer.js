import React from 'react';
import  axios from 'axios';
import { connect } from 'react-redux';
import {getItems} from './../redux/redux-store';

class ProjectsContainerAPI extends React.Component  {

  componentDidMount() {
    axios.get('https://api.github.com/search/repositories?q=subject').then((res) => {
      this.props.getItems(res.data.items)
    })
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='enter'/>
        <button>GO</button>
        <div>{this.props.items.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    name: state.items.name,
    starGazersCount: state.items.stargazers_count,
    watchersCount: state.items.watchers_count
  }
}

const ProjectsContainer = connect(mapStateToProps, {getItems})(ProjectsContainerAPI)

export default ProjectsContainer;
