import React, { useState, useEffect } from 'react'
import FastKartHeader from '../container/FastKartHeader'
import LogoHeader from '../container/LogoHeader'
import Menuheader from '../container/Menuheader'
import Slide2 from './Slide2'
import Home from './Home'
import Category from '../container/Category'
import GardenFresh from '../container/GardenFresh'
import SpecialOffer from '../container/SpecialOffer'
import Subscribe from '../container/Subscribe'
import HomeMethod from './HomeMethod'
import AppUI from '../container/AppUI'
import Footer from '../container/Footer'
import { useLocation } from 'react-router-dom'
import Aboutus from '../container/Aboutus'
import Contactus from '../container/Contactus'
import TodayDeals from '../container/TodayDeals'
import Seasonal from '../container/Seasonal'
import Vegetable from '../container/Vegetable'
import Addcart from '../container/Addcart';
import MyProfile from '../container/MyProfile'

// Add Checkout import at the top
import Checkout from '../container/Checkout';
import Faqs from '../container/Faqs'
import Termsandcondition from '../container/Termsandcondition'
import ProductDetails from '../container/ProductDetails'
import { useDispatch } from 'react-redux'

export default function HomeMain() {
  const location = useLocation();
  // Add new state for cart page
  const [isCartPage, setIsCartPage] = useState(false);
  const [isVegetablePage, setIsVegetablePage] = useState(false);
  const [isAboutUsPage, setIsAboutUsPage] = useState(false);
  const [isContactUsPage, setIsContactUsPage] = useState(false);
  const [isTodayDealsPage, setIsTodayDealsPage] = useState(false);
  // Add new state
  const [isProfilePage, setIsProfilePage] = useState(false);
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const [isFaqPage, setIsFaqPage] = useState(false);  // Add new states
  const [isTermsPage, setIsTermsPage] = useState(false);
  const [isProductDetailPage, setIsProductDetailPage] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const activePage = localStorage.getItem('activePage');
    // Reset all states first
    const resetAllStates = () => {
      setIsVegetablePage(false);
      setIsAboutUsPage(false);
      setIsContactUsPage(false);
      setIsTodayDealsPage(false);
      setIsCartPage(false);
      setIsProfilePage(false);
      setIsCheckoutPage(false);
      setIsFaqPage(false);
      setIsTermsPage(false);
      setIsProductDetailPage(false);
    };

    resetAllStates();

    switch (activePage) {
      case "Cart":
        setIsCartPage(true);
        break;
      case "Checkout":
        setIsCheckoutPage(true);
        break;
      case "Vegetables":
        setIsVegetablePage(true);
        break;
      case "About us":
        setIsAboutUsPage(true);
        break;
      case "Contact us":
        setIsContactUsPage(true);
        break;
      case "Today deals":
        setIsTodayDealsPage(true);
        break;
      case "Profile":
        setIsProfilePage(true);
        break;
      case "Faq":
        setIsFaqPage(true);
        break;
      case "Terms":
        setIsTermsPage(true);
        break;
      case "ProductDetails":
        setIsProductDetailPage(true);
        break;
      default:
        // Home page case
        break;
    }
  }, [location.pathname]); // Add location.pathname as dependency

  // Add a function to handle category navigation
  const handleCategoryNavigation = (categoryId, categoryName) => {
    console.log("categories", categoryId, categoryName);
    localStorage.setItem('selectedCategoryId', categoryId);
    localStorage.setItem('selectedCategoryName', categoryName);
    localStorage.setItem('activePage', 'Vegetables');
    setIsVegetablePage(true);
  };

  return (
    <>
     
      {isCheckoutPage ? (
        <Checkout setIsCheckoutPage={setIsCheckoutPage} />
      ) : isProfilePage ? (
        <MyProfile />
      ) : isCartPage ? (
        <Addcart
          setIsCheckoutPage={setIsCheckoutPage}
          setIsCartPage={setIsCartPage}
        />
      ) : isVegetablePage ? (
        <Vegetable
        setIsVegetablePage={setIsVegetablePage}
        setIsProductDetailPage={setIsProductDetailPage}
        setSelectedProductId={setSelectedProductId}
        />
      ) : isAboutUsPage ? (
        <Aboutus />
      ) : isContactUsPage ? (
        <Contactus />
      ) : isTodayDealsPage ? (
        <TodayDeals 
        setIsProductDetailPage={setIsProductDetailPage}
        setSelectedProductId={setSelectedProductId}
        setIsVegetablePage={setIsVegetablePage}/>
      ) : isProductDetailPage ? (
        <ProductDetails productId={selectedProductId} setIsVegetablePage={setIsVegetablePage} setIsProductDetailPage={setIsProductDetailPage} />
      ) : isFaqPage ? (
        <Faqs />
      ) : isTermsPage ? (
        <Termsandcondition />
      ) : (
        <>
          <Home setIsTodayDealsPage={setIsTodayDealsPage}></Home>
          <Category onCategoryClick={handleCategoryNavigation}></Category>
          <GardenFresh
            setIsVegetablePage={setIsVegetablePage}
            setIsProductDetailPage={setIsProductDetailPage}
            setSelectedProductId={setSelectedProductId}
          ></GardenFresh>
          <Slide2 setIsVegetablePage={setIsVegetablePage}></Slide2>
          <Seasonal
            setIsVegetablePage={setIsVegetablePage}
            setIsProductDetailPage={setIsProductDetailPage}
            setSelectedProductId={setSelectedProductId}
          ></Seasonal>
          <SpecialOffer
            setIsVegetablePage={setIsVegetablePage}
            setIsProductDetailPage={setIsProductDetailPage}
            setSelectedProductId={setSelectedProductId}
          ></SpecialOffer>
          <Subscribe></Subscribe>
          <HomeMethod></HomeMethod>
          <AppUI></AppUI>
        </>
      )}
    </>
  );
}
