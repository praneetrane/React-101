import react from "react";
import Header from "./Header";
import Footer from "./Footer";

function MyInfo(){
  const firstName="Praneet";
  const lastName="Rane";

  const date = new Date();
  const hours= date.getHours()
  let timeofTheDay;

  if (hours<12){
    timeofTheDay="Morning";
  }else if(hours >= 12 && hours<17){
    timeofTheDay="Afternoon";
  }else{
    timeofTheDay="Night";
  }
    return (
     
      <div>
         <Header/>
        <h1>Hello I am {" "+ firstName + " " + lastName}</h1>
        <h1>Hello I am {`${firstName} ${lastName}`} </h1>
        <h2>Good {timeofTheDay} !</h2>
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