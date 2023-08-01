import '../css/Header.css';
import Nav from "./Nav";
import Logo from "../images/Logo.svg";
export default function Header(){
    return (
            <header>
                <div class="header">
                    <img src={Logo} alt="Logo"></img>
                    <Nav></Nav>
                </div>
            </header>
    );
}