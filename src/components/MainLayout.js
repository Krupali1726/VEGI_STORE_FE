import React from 'react';
import { Outlet } from 'react-router-dom';
import LogoHeader from '../container/LogoHeader';
import Footer from '../container/Footer';
import FastKartHeader from '../container/FastKartHeader';

function MainLayout() {
    const [isVegetablePage, setIsVegetablePage] = React.useState(false);
    const [isAboutUsPage, setIsAboutUsPage] = React.useState(false);
    const [isContactUsPage, setIsContactUsPage] = React.useState(false);
    const [isTodayDealsPage, setIsTodayDealsPage] = React.useState(false);
    const [isCartPage, setIsCartPage] = React.useState(false);
    const [isCheckoutPage, setIsCheckoutPage] = React.useState(false);
    const [isFaqPage, setIsFaqPage] = React.useState(false);
    const [isTermsPage, setIsTermsPage] = React.useState(false);
    const [isProfilePage, setIsProfilePage] = React.useState(false);
    const [isProductDetailPage, setIsProductDetailPage] = React.useState(false);

    return (
        <div className="main-layout">
            
      <FastKartHeader />
            <LogoHeader
                setIsVegetablePage={setIsVegetablePage}
                setIsAboutUsPage={setIsAboutUsPage}
                setIsContactUsPage={setIsContactUsPage}
                setIsTodayDealsPage={setIsTodayDealsPage}
                setIsCartPage={setIsCartPage}
                setIsCheckoutPage={setIsCheckoutPage}
                setIsFaqPage={setIsFaqPage}
                setIsTermsPage={setIsTermsPage}
                setIsProfilePage={setIsProfilePage}
                setIsProductDetailPage={setIsProductDetailPage}
            />
            <main>
                <Outlet />
            </main>
            <Footer
                setIsVegetablePage={setIsVegetablePage}
                setIsCartPage={setIsCartPage}
                setIsCheckoutPage={setIsCheckoutPage}
                setIsProductDetailPage={setIsProductDetailPage}
                setIsFaqPage={setIsFaqPage}
                setIsTermsPage={setIsTermsPage}
                setIsContactUsPage={setIsContactUsPage}
                setIsAboutUsPage={setIsAboutUsPage}
            />
        </div>
    );
}

export default MainLayout;