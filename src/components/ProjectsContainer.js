import React from 'react';
import  axios from 'axios';
import { connect } from 'react-redux';
import {getItems} from './../redux/redux-store';
import s from './../components/ProjectsContainer.module.css';

class ProjectsContainerAPI extends React.Component  {

  constructor() {
    super();

    this.state = {
      input: '',
      display: ''
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
      <div>

        <div className={s.inputWrap}>
        <input className={s.input} onChange={this.getInput}  type='text' placeholder='search project'/>
        </div>

        {this.props.items.map((item) => {
          if(item.name.toLowerCase()[0].includes(this.state.input.toLowerCase())) {
            if(this.state.input !== '') {

              return (
                <div className={s.mainWrapper}>
                  <div className={s.mainCardWrapper}>
                  <div>
                    <div className={s.items} style={{display: this.state.display}}>Name: <a href={item.html_url}><div className={s.itemItems}>{item.name}</div></a></div>
                  </div>
                  <div>
                    <div className={s.gazers}>Star gazers: <div className={s.itemGazers}>{item.stargazers_count}</div></div>
                  </div>
                  <div>
                    <div className={s.watchers}>Watchers: <div className={s.itemWatchers}>{item.watchers_count}</div></div>
                  </div>
                </div>
                </div>
              )
            }
          }
        })}
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps  = {getItems}

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsContainerAPI)

export default ProjectsContainer;
