import "../css/Hero.css";
import image from "../images/restauranfood.jpg";
import {Link} from 'react-router-dom';
export default function Hero(){
    return(
        <div class="hero">
                <div class="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button type="button" id="reserve">Reserve a Table</button></Link>
                </div>
                <div class="image">
                    <img id="rf" src={image} alt="Restaurant Food" />
                </div>
        </div>
    );
}