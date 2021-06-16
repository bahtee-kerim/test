import React from 'react';
import s from './../components/Projects.module.css';

const Projects = (props) => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.mainCardWrapper}>
      <div>
        <div className={s.items}>Name: <a href={props.item.html_url}><div className={s.itemItems}>{props.item.name}</div></a></div>
      </div>
      <div>
        <div className={s.gazers}>Star gazers: <div className={s.itemGazers}>{props.item.stargazers_count}</div></div>
      </div>
      <div>
        <div className={s.watchers}>Watchers: <div className={s.itemWatchers}>{props.item.watchers_count}</div></div>
      </div>
    </div>
    </div>
  )
}

export default Projects;
