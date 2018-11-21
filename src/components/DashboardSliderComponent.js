import React from 'react';
import { Link } from 'react-router-dom'
import placeholder from '../assets/images/placeholder-user.png';
import Carousel from 'nuka-carousel';
import Spinner from 'react-spinkit';

const DashboardSliderComponent = props =>{
  const { users } = props;
  return(
    users?
      users.length === 0 ? 
        <span className="uk-text-center uk-text-bold">Niestety nie znaleziono żadnych użytkowników z okolicy</span> 
      :
        <Carousel
          className="slider uk-width-1-1"
          swiping={true}
        >
          {users.map((user,key) => {
            return(
              <Link key={key} to={{pathname:"/profile", clickedUser:user}}>
                {user.avatar ? <img src={user.avatar} alt="user-avatar" /> : <img src={placeholder} alt="user-placeholder" />}
              </Link>
            )
          })}
        </Carousel> 
    :
      <Spinner name="circle" color="orange" />
  )
}

export default DashboardSliderComponent