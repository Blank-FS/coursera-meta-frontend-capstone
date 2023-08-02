import '../css/Header.css';
import Logo from "../images/Logo.svg";
export default function Header(){
    return (
            <header>
                <nav>
                    <ul>
                        <li><img src={Logo} alt="Logo"></img></li>
                        <li><a href="https://www.google.ca/">Home</a></li>
                        <li><a href="https://www.google.ca/">About</a></li>
                        <li><a href="https://www.google.ca/">Menu</a></li>
                        <li><a href="https://www.google.ca/">Reservations</a></li>
                        <li><a href="https://www.google.ca/">Order Online</a></li>
                        <li><a href="https://www.google.ca/">Login</a></li>
                    </ul>
                </nav>
            </header>
    );
}