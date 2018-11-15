import React from 'react';
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
              user.avatar ? <img key={key} src={user.avatar} alt="user-avatar" /> : <img key={key} src={placeholder} alt="user-placeholder" />
            )
          })}
        </Carousel> 
    :
      <Spinner name="circle" color="orange" />
  )
}

export default DashboardSliderComponent