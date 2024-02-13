import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <header className='container'>
           <Link href='/'>Home</Link>
           <Link href='/blog'>Blog</Link>
           <Link href='/about'>About</Link>
        </header>
    );
}

export default Footer;