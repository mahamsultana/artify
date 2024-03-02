import React from "react";
import NavBar from "../components/navbar";
import Main from "../components/main";
import Featured from "../components/featured";
import Event from "../components/event";
import ArtStore from "../components/artstore";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";


function Home() {
    return(
       <div style={{width:"100%",height:"100%"}}>
        <NavBar/>
        <Main/>
        <div style={{backgroundColor:"#ebe0e0"}}><Featured/>
        <Event/>
        <ArtStore/>
        <Testimonials/>
        <Footer/>
        </div>
       </div>
    );
}

export default Home;