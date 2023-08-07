import React, {useState} from 'react';
export default function BookingForm(props){
    //Get props from parent
    const formData = props.formData;
    const setFormData = props.setFormData;
    const dispatch = props.dispatch;
    const availableTimes = props.availableTimes;
    const submitForm = props.submitForm;
    //State of whether input is valid or not
    const [isDateValid, setDateValid] = useState(false);
    const [isTimeValid, setTimeValid] = useState(false);
    const [isGuestsValid, setGuestsValid] = useState(false);
    const [isOccasionValid, setOccasionValid] = useState(false);
    // Tracking whether the input is interacted with already
    const [isDateTouched, setDateTouched] = useState(false);
    const [isTimeTouched, setTimeTouched] = useState(false);
    const [isGuestsTouched, setGuestsTouched] = useState(false);
    const [isOccasionTouched, setOccasionTouched] = useState(false);
    //Update the state when input is interacted with
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        if (name === 'date') {
            dispatch({ type: 'SET_AVAILABLE_TIMES', payload: value });
        }
    };
    //Handling submission of Form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
          setFormData(
            {
              date: '',
              time: '- Choose -',
              guests: '',
              occasion: '- Choose -',
          });
          submitForm(formData);
        }
    };
    const handleClick = () => {
        setDateTouched(true);
        setTimeTouched(true);
        setGuestsTouched(true);
        setOccasionTouched(true);
    }
    //Handling the Blur
    const handleBlur = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'date':
              setDateTouched(true);
              break;
            case 'time':
              setTimeTouched(true);
              break;
            case 'guests':
              setGuestsTouched(true);
              break;
            case 'occasion':
              setOccasionTouched(true);
              break;
            default:
              break;
        }
        validateField(name, value);
    };
    //Validae Field Function
      const validateField = (name, value) => {
        switch (name) {
          case 'date':
            setDateValid(value.length > 0);
            break;
          case 'time':
            setTimeValid(value !== "- Choose -" && value.length !== 0);
            break;
          case 'guests':
            setGuestsValid(value >= 1);
            break;
          case 'occasion':
            setOccasionValid(value !== "- Choose -" && value.length !== 0);
            break;
          default:
            break;
        }
      };
    //Checking if Form is Valid
    const isFormValid = () => {
        return isDateValid && isTimeValid && isGuestsValid && isOccasionValid;
    };
    //Return
    return(
        <form style={{display: 'grid', minWidth: '60vw', gap: '20px'}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date</label>
            <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required onBlur={handleBlur}/>
            {isDateTouched && !isDateValid && <span style={{ color: 'red' }}>*Please Choose a Date.</span>}
            <div>
                <h1 class="availableTimes">Available Times</h1>
                <ul>
                    {availableTimes.map((time, index) => (
                    <li key={index}>{time}</li>
                    ))}
                </ul>
            </div>
            <label htmlFor="res-time">Time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleChange} required onBlur={handleBlur}>
                    <option>- Choose -</option>
                    {availableTimes.map((time, index) => (
                        <option key={index}>{time}</option>
                    ))}
            </select>
            {isTimeTouched && !isTimeValid && <span style={{ color: 'red' }}>*Please Choose a Time.</span>}
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" placeholder="0" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} required onBlur={handleBlur}/>
            {isGuestsTouched && !isGuestsValid && <span style={{ color: 'red' }}>*Please Enter Valid Number of Guests.</span>}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required onBlur={handleBlur}>
                <option>- Choose -</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {isOccasionTouched && !isOccasionValid && <span style={{ color: 'red' }}>*Please Select an Occassion.</span>}
            <input type="submit" value="Reserve" onClick={handleClick} aria-label="On Click" id="reserve-button"/>
            { (isDateTouched && isTimeTouched && isGuestsTouched && isOccasionTouched) && !(isDateValid && isTimeValid && isGuestsValid && isOccasionValid) && <span style={{ color: 'red' }}>*Please Submit Valid Form.</span>}
        </form>
    );
}