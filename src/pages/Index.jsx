import React from 'react'
import Favorites from "../components/Favorites";
import Meals from "../components/Meals";
import Modal from "../components/Modal";
import Search from "../components/Search";
import { useGlobalContext } from '../Context';

const Index = () => {
  const context = useGlobalContext()
  const { favorites } = context
  
  return (
    <main className="container">
      {<Search />}
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {/* <Modal /> */}
    </main>
  );
}

export default Index