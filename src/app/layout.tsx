import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <header className="bg-gray-400 p-5 py-15  flex gap-3">
        <div className="SiteName">
          <Link href="/">Assignment_2</Link>
        </div>
        <div className="navBar">
          <ul className="top-link flex gap-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/team">Team</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </div>
      </header>
      <div className="mainContent p-5">
        {children}
      </div>
      <footer className="bg-gray-800  px-5 py-5 text-white">
      <div className="grid gap-12 xl:grid-cols-6 xl:gap-24 py-5">
        <div className="col-span-2">
          <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase text-white">About Us</h2>
          <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
        </div>
        <div className="single-footer f-link col-span-1">
          <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase text-white">Quick Links</h2>
            <ul>
                <li><Link href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</Link></li>
                <li><Link href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</Link></li>
                <li><Link href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</Link></li>
                <li><Link href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</Link></li>
                <li><Link href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</Link></li>	
            </ul>
        </div>
        <div className="single-footer col-span-1">
          <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase text-white">Open Hours</h2>
          <ul className="time-sidual">
            <li className="day">Monday - Friday<span>8.00-20.00</span></li>
            <li className="day">Saturday <span>9.00-18.30</span></li>
            <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
          </ul>
        </div>
        <div className="single-footer col-span-2">
          <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase text-white">Newsletter</h2>
          <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>

        </div>
      </div>
        <div className="copyright-content p-5 py-15 text-center">
          <p>© Copyright 2018  |  All Rights Reserved by <Link href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</Link> </p>
        </div>
      </footer>
      </body>      
    </html>
  );
}
