import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import devx3 from '/DevX3.png'

function Header(props) {


  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="fixed top-0 w-full z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

         
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block">
              <img className="w-13 h-8 fill-current text-purple-600" viewBox="0 0 32 32" src={devx3}/>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="md:flex md:grow">

            {/* Desktop menu links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              <Dropdown title="Support">
                <li>
                  <Link to="/contact" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Contact us</Link>
                </li>
                <li>
                  <Link to="/help" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Help center</Link>
                </li>
                <li>
                  <Link to="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">404</Link>
                </li>
              </Dropdown>
            </ul> */}

            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a href="https://22qbl0f4j9e.typeform.com/to/OCYLtumm?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-lg">Join Us</a>
              </li>
              <li>
              <img onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end" 
                 src={props.darkMode ? "/toggle-off.png" : "/toggle-on.png"} />
              </li>
            </ul> */}

            <div className="flex grow items-end justify-end">
                <img onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end w-11"  
                 src={props.darkMode ? "/toggle-off.png" : "/toggle-on.png"} />
            </div>

          </nav>

          {/* Mobile menu
          <div className="md:hidden">

            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/features" className="flex text-gray-300 hover:text-gray-200 py-2">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="flex text-gray-300 hover:text-gray-200 py-2">Pricing</Link>
                </li>
                <li>
                  <Link to="/blog" className="flex text-gray-300 hover:text-gray-200 py-2">Blog</Link>
                </li>
                <li>
                  <Link to="/about" className="flex text-gray-300 hover:text-gray-200 py-2">About us</Link>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-gray-300 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link to="/contact" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/help" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</Link>
                    </li>
                    <li>
                      <Link to="/404" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>

          </div> */}

        </div>
      </div>
    </header>
  );
}

export default Header;
