import React from 'react'
import TopNav from './foodComponents/TopNav'
import Featured from './foodComponents/Featured'
// simport TopPicks from './foodComponents/TopPicks'
import Meal from './foodComponents/Meal'
import Categories from './foodComponents/Categories'
import Footer from './foodComponents/Footer'

const FoodMain = () => {
  return (
    <>
    
    <TopNav/>
    <Featured/>
  
    <TopPicks/>
    <Meal/>
    <Categories/>
    <Footer/>
    
    </>
  )
}

export default FoodMain