
import React from "react"
import Nav from "./Nav Bar/nav"
import Header from "./Header/Header"
import About from "./About/About"
import Howitwork from "./HowItWorks/HowitWorks"
import Lists from "./Listing/lists"
import Blogs from "./Blogs/blogs"
import Footer from "./Footer/footer"
import FooterLinks from "./FooterLinks/footerLinks"
function App(){

    return(<>
   <Nav/>
    <Header/>
    <About/>
    <Howitwork/>
    <Lists/>
    <Blogs/>
    <Footer/>
    <FooterLinks/>
           </>)
}
export default App