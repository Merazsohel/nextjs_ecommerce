import React, {Component} from 'react';
import Header from "./components/Header/Header";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
import FooterCopyright from "./components/FooterCopyright/FooterCopyright";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <InstagramFeed/>
            <Footer/>
            <FooterCopyright/>
            <a href="#" id="back-to-top" title="Back to top" style={{ display: "none" }}>&uarr;</a>
        </>
    );
}
