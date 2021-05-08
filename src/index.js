import react from 'react';
import reactDOM from 'react-dom';

function MyApp(){
  return (
    <html>
      <ul>
      <li>C#</li> 
      <li> React JS</li> 
      <li> Angular </li> 
      </ul>
    </html> 
    );
}

reactDOM.render( <MyApp/>, document.getElementById('root'));
