import MainNav from '../components/MainNav';
import {Container} from "react-bootstrap";

function Layout(props)
{
    return (
    <div>
        <MainNav />
        <br />
        <Container>{props.children}</Container>
        <br />
    </div>    
);
}
export default Layout;

