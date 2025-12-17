'use client'

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

//Components
import {XMarkIcon} from "@heroicons/react/20/solid";

export default function SideNav(props){

    // Current locale (for highlighting active button)
        const [locale, setLocale] = useState('en');
        const router = useRouter();

        // Read locale from cookie on mount
            useEffect(() => {
                if (typeof document !== 'undefined') {
                    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
                    if (match?.[1]) {
                        setLocale(decodeURIComponent(match[1]));
                    }
                }
            }, []);

    // Change language & refresh page
    const changeLanguage = (newLocale) => {
        document.cookie = `locale=${newLocale}; path=/`;
        setLocale(newLocale);
        router.refresh();
    };

    return(
        <Fragment>
            {/* Mobile Navbar  */}
            <nav className={
                props.offcanvas
                    ? "offcanvas-menu-wrap active"
                    : "offcanvas-menu-wrap"
            }>
                <nav className="offcanvas-menu z-50">
                    <div className="offcanvas-menu-items" onClick={props.showOffcanvas}>

                        {/* Logo and Close Button Wrapper*/}
                        <div className="navbar-toggle flex justify-between items-center pb-[15px] cursor-pointer">
                            
                            {/* Logo */}
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image 
                                        src={props.logo} 
                                        height={60} 
                                        width={100} 
                                        alt={"logo"}
                                    />
                                </Link>
                            </div>

                            {/* Close Button */}
                            <button className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all" aria-label="Right Align">
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* List */}
                        <div>
                            
                            {/* Link 1 */}
                            <Link href={"/"} >
                                <div className='offcanvas-text'>
                                    {props.links[0]}
                                </div>
                            </Link>

                            {/* Link 2 */}
                            <Link href={"/" + [props.links[1]]} >
                                <div className='offcanvas-text'>
                                    {props.links[1]}
                                </div>
                            </Link>

                            {/* Link 3 */}
                            {/* <Link href={"/" + [props.links[2]]} >
                                <div className='offcanvas-text'>
                                    {props.links[2]}
                                </div>
                            </Link> */}

                            {/* Link 4 */}
                            <Link href={"/" + [props.links[3]]} >
                                <div className='offcanvas-text'>
                                    {props.links[3]}
                                </div>
                            </Link>

                            {/* Link 5 */}
                            <Link href= {props.links[4]} >
                                <div className='offcanvas-text'>
                                    {props.links[4]}
                                </div>
                            </Link>

                            <div
                                type="button"
                                onClick={() => changeLanguage('en')}
                                className={`px-3 py-1 rounded border ${
                                    locale === 'en'
                                        ? 'bg-yellow-500 text-black border-yellow-500'
                                        : 'border-gray-400'
                                }`}
                            >
                                EN
                            </div>
                            <div
                                type="button"
                                onClick={() => changeLanguage('es')}
                                className={`px-3 py-1 rounded border ${
                                    locale === 'es'
                                        ? 'bg-yellow-500 text-black border-yellow-500'
                                        : 'border-gray-400'
                                }`}
                            >ES
                            </div>
                            
                        </div>

                    </div>
                </nav>
            </nav>
        </Fragment>
    )
}