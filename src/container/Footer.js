import React, { useEffect, useState } from 'react';
import '../styles/x_app.css';
import '../styles/denisha.css';
import googlePlay from '../img/x_img/google-play.png';
import appStore from '../img/x_img/app-store.png';
import { Link, useNavigate } from 'react-router-dom'; // Add this import at the top
// import logo from '../img/x_img/logo.png';
import facebook from '../img/facebook.png';
import twiter from '../img/twiter.png';
import instagram from '../img/instagram.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/slices/categorySlice';

 
function Footer({setIsVegetablePage,setIsCartPage,setIsCheckoutPage,setIsProductDetailPage,setIsFaqPage,setIsTermsPage,setIsContactUsPage,setIsAboutUsPage}) {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories, isLoading, error } = useSelector(state => state.category);
    const [activeButton, setActiveButton] = useState(null);
 
    useEffect(() => {
      dispatch(fetchCategories({ page: 1, pageSize: 10 }));
    }, [dispatch]);
 
    return (
        <footer className="footer">
            <div className='a_header_container'>
                <div className="footer-content p-0">
                    {/* Logo and Description Section */}
                    <div className="footer-section">
                        <h2 className='x_category-title'>Logo</h2>
                        {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
                        <p className="footer-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                        <div className="social-links x_dis_f">
                            <h4>Follow us for updates</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                    <img src={facebook} alt="Logo" className="footer-logo" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                                    <img src={twiter} alt="Logo" className="footer-logo" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                    <img src={instagram} alt="Logo" className="footer-logo" />
                                </a>
                            </div>
                        </div>
                    </div>
 
                    {/* Category Links */}
                    <div className="footer-section">
                        <h3>Category</h3>
                        <ul className="footer-links">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link
                                    to="/vegetable"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.setItem('activePage', category.categoryName);
                                        localStorage.setItem('selectedCategoryId', category._id);
                                        setIsVegetablePage(true);
                                        setIsCartPage(false);
                                        setIsCheckoutPage(false);
                                        setIsProductDetailPage(false);
                                        setIsFaqPage(false);
                                        setIsTermsPage(false);
                                        setIsContactUsPage(false);
                                        setIsAboutUsPage(false);
                                        navigate('/vegetable');
                                    }}
                                >
                                    {category.categoryName}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
 
                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Sell on FastKart</Link></li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem('activePage');
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/vegetable"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'Vegetables');
                                    }}
                                >
                                    Vegetables
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/today-deals"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'Today deals');
                                    }}
                                >
                                    Today Deals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'About us');
                                    }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'Contact us');
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'Terms');
                                    }}
                                >
                                    Terms & Condition
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faqs"
                                    onClick={() => {
                                        localStorage.setItem('activePage', 'Faq');
                                    }}
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
 
                    {/* Experience App Section */}
                    <div className="footer-section">
                        <h3>Experience App On Mobile</h3>
                        {/* <div className="app-downloads">
                        <a href="#" className="app-link">
                            <img src={googlePlay} alt="Google Play" />
                        </a>
                        <a href="#" className="app-link">
                            <img src={appStore} alt="App Store" />
                        </a>
                    </div> */}
                        <div className="d-flex align-items-center flex-sm-row flex-lg-column flex-row gap-4 x_cres">
                            <div className="a_appUI_btns w-md-auto w-100 d-flex justify-content-center align-items-center gap-2">
                                <div>
                                    <img src={googlePlay} alt="Google Play" />
                                </div>
                                <div>
                                    <p className="mb-0">GET IN ON</p>
                                    <h5 >Google Play</h5>
                                </div>
                            </div>
                            <div className="a_appUI_btns w-md-auto w-100 d-flex justify-content-center align-items-center gap-2">
                                <div>
                                    <img src={appStore} alt="App Store" />
                                </div>
                                <div>
                                    <p className="mb-0">GET IN ON</p>
                                    <h5>Google Play</h5>
                                </div>
                            </div>
                        </div>
                    </div>
 
 
                    <div className="social-links x_dis_ff">
                            <h4>Follow us for updates</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                    <img src={facebook} alt="Logo" className="footer-logo" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                                    <img src={twiter} alt="Logo" className="footer-logo" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                    <img src={instagram} alt="Logo" className="footer-logo" />
                                </a>
                            </div>
                        </div>
                </div>
 
            </div>
            {/* Copyright */}
            <div className="footer-bottom">
                <p>©2025 All rights reserved.</p>
            </div>
        </footer>
    );
}
 
export default Footer;
 