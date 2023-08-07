import BookingForm from "./BookingForm";
import "../css/BookingPage.css";
export default function BookingPage(props){
    return(
        <div class="bookingPage">
            <h1>This is the Booking Page</h1>
            <BookingForm {...props}/>
        </div>
    );
}