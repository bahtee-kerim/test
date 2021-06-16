import React from 'react';
import  axios from 'axios';
import { connect } from 'react-redux';
import {getItems} from './../redux/redux-store';
import Projects from './Projects';
import Input from './Input';

class ProjectsContainerAPI extends React.Component  {

  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/search/repositories?q=subject').then((res) => {
      this.props.getItems(res.data.items)
    })
  }

  getInput = (e) => {
    let body = e.target.value;
    this.setState({
      input: body
    })
  }

  render() {
    return (
      <>
        <Input getInput={this.getInput} state={this.state}/>

        {this.props.items.map((item) => {
          if(item.name.toLowerCase().startsWith(this.state.input.toLowerCase())) {
            if(this.state.input !== '') {
              return (
                <Projects  item={item} />
              )
            }
          }
        })}
        
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps  = {getItems};

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsContainerAPI);

export default ProjectsContainer;
