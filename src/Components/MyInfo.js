import react from "react";
import Header from "./Header";
import Footer from "./Footer";

function MyInfo(){
    return (
     
      <div>
         <Header/>
        <h1>Praneet Rane</h1>
        <p style={{color: "Purple", fontStyle: "Italic"}}>I am a fullstack .Net developer. <br/> My favourite vacation spots are:</p>
        <ul>
          <li>Andaman</li>
          <li>Dubai</li>
          <li>Santorini</li>
        </ul>

        <Footer/>
      </div>

    );
  }

  export default MyInfo