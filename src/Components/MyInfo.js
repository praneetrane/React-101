import react from "react";
import Header from "./Header";
import Footer from "./Footer";

function MyInfo(){
  const firstName="Praneet";
  const lastName="Rane";

  const date = new Date(2021, 5, 15, 20);
  const hours= date.getHours()
  let timeofTheDay;

  const styles={ 
    //color: "Purple" , 
    //backgroundColor:"Pink",
    fontSize:"50px"
  };

  if (hours<12){
    timeofTheDay="Morning";
    styles.color="Yellow";
  }else if(hours >= 12 && hours<17){
    timeofTheDay="Afternoon";
    styles.color="Red";
  }else{
    timeofTheDay="Night";
    styles.color="Pink";
  }

 
    return (   
      <div>
         <Header/>
        <h1>Hello I am {" "+ firstName + " " + lastName}</h1>
        <h1>Hello I am {`${firstName} ${lastName}`} </h1>
        <h2 style={styles}>Good {timeofTheDay} !</h2>
        <h2 style={{color:"Yellow",backgroundColor:"Red"}}>Good {timeofTheDay} !</h2>
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