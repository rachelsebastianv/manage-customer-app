import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems';

export const NavigationItems = () => {
  return (
    <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/create">Create</NavigationItem>
    </ul>
  );
}

