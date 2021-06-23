import React from 'react';
import './styles/BadgeList.css'
import Icon from '@mdi/react'
import { mdiTwitter, mdiDesktopClassic , mdiEmailOutline , mdiAccountOutline    } from '@mdi/js'


class BadgesList extends React.Component{
  render(){
    return(
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return(
            <li className="content" key={badge.id}>
              <div className="conten__image">
                {badge.avatarUrl} 
              </div>
              <div className="content__info">
                <p>
                  <i><Icon path={mdiAccountOutline } title="User Profile" size={1} color="black" /></i>
                  {badge.firstName} {badge.lastName}  
                </p>
                <p>
                  <i><Icon path={mdiEmailOutline  } title="User Profile" size={1} color="black" /></i>
                  {badge.email}
                </p>
                <p>
                <i><Icon path={mdiDesktopClassic } title="User Profile" size={1} color="black" /></i>
                  {badge.jobTitle}
                </p>
                <p>
                  <i><Icon path={mdiTwitter} title="User Profile" size={1} color="#0096d2 " /></i>
                  {badge.twitter}
                </p>
              </div>              
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;