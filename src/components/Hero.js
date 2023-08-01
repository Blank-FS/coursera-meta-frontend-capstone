import "../css/Hero.css";
import image from "../images/restauranfood.jpg";
export default function Hero(){
    return(
        <div class="hero">
            <div class="content">
                <div class="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button type="button" id="reserve">Reserve a Table</button>
                </div>
                <div class="image">
                    <img id="rf" src={image} alt="Restaurant Food" />
                </div>
            </div>
        </div>
    );
}