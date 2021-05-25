import react from 'react';
/* //Functional component
function Footer() {
    return (
        <footer>This is footer component</footer>
    );
}
 */

//----Class based component. Created above function based component into class based component.
class Footer extends react.Component {
    render() {
        return (
            <footer>This is footer component</footer>
        );
    }
}

export default Footer