import BookingForm from "./BookingForm";
import "../css/BookingPage.css";
export default function BookingPage(props){
    return(
        <div class="bookingPage">
            <h1 style={{color: 'black'}}>Booking Form</h1>
            <BookingForm {...props}/>
        </div>
    );
}