// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cook.css";
// import Axios from "axios";

// function Register() {
//   const [Plates, setPlates] = useState("");
//   const [Dish, setDish] = useState("");
//   const [Date, setDate] = useState("");
//   const [Time, setTime] = useState("");
//   const [Delivery, setDelivery] = useState("");
//   const [addDetails, setAddDetails] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const dishOptions = ['Paratha', 'Dal Rice' , 'Chole Bhature', 'Idli/Dosa', 'Paneer Masala', 'Noodles' , 'Biryani' , 'Burger' , 'Pizza' , 'Chicken Masala'];
//   const timeOptions = ['7am-10am', '1pm-4pm', '8pm-11pm'];

//   const navigate = useNavigate();

//   const register = (event) => {
//     event.preventDefault();

//     Axios.post("http://localhost:3001/addDetails", {
//       Plates: Plates,
//       Dish: Dish,
//       Date: Date,
//       Time: Time,
//       Delivery: Delivery,
//     })
//     .then((response) => {
//       if (response.data.success) {
//         setAddDetails("Details added successfully");
//         setShowPopup(true);

//         // Route to "/customer" after 6 seconds
//         setTimeout(() => {
//           navigate("/");
//         }, 3000);
//       } else {
//         setAddDetails("Failed to add details. Please check the inputs.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error adding details:", error);
//       setAddDetails("Failed to add details. ");
//     });
//   };

//   useEffect(() => {
//     // Cleanup the popup after 6 seconds
//     const timer = setTimeout(() => {
//       setShowPopup(false);
//     }, 6000);

//     return () => clearTimeout(timer);
//   }, [showPopup]);

//   return (
//     <div className="cook-new">
//       <div className="cook">
//         <div className="form-container">
//           <form>
//             <h4>Add Details</h4>
//             {/* <label htmlFor="plates" className="input-label">Plates*</label><br />
//             <input className="textInput" type="text" name="plates" onChange={(event) => setPlates(event.target.value)} required /><br /> */}
            
//             <label htmlFor="dish" className="input-label">Dish*</label><br />
//             <select className="dropdown" value={Dish} onChange={(event) => setDish(event.target.value)} required>
//               <option value="" disabled>Select Dish</option>
//               {dishOptions.map((dish, index) => (
//                 <option key={index} value={dish}>{dish}</option>
//               ))}
//             </select><br />

//             <label htmlFor="date" className="input-label">Date*</label><br />
//             <input className="textInput" type="date" name="date" onChange={(event) => setDate(event.target.value)} required /><br />
            
//             <label htmlFor="time" className="input-label">Time*</label><br />
//             <select className="dropdown" value={Time} onChange={(event) => setTime(event.target.value)} required>
//               <option value="" disabled>Select Time</option>
//               {timeOptions.map((time, index) => (
//                 <option key={index} value={time}>{time}</option>
//               ))}
//             </select><br />

//             <label htmlFor="plates" className="input-label">No. Of Plates*</label><br />
//             <input className="textInput" type="text" name="plates" onChange={(event) => setPlates(event.target.value)} required /><br />

//             <label htmlFor="delivery" className="input-label">Delivery*</label><br />
//             <input className="textInput" type="text" name="delivery" onChange={(event) => setDelivery(event.target.value)} required /><br />

//             <input className="button" type="submit" onClick={register} value="Add Details" /><br />
//             <h1 className="message" style={{ fontSize: '15px', textAlign: 'center', marginTop: '0px' }}>{addDetails}</h1>
//           </form>
//         </div>
//       </div>
//       {showPopup && <div className="popup">Details Successfully Added!<br/>Redirecting to Home Page</div>}
//     </div>
//   );
// }

// export default Register;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cook.css";
import Axios from "axios";

function Register() {
  const [Plates, setPlates] = useState("");
  const [Dish, setDish] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Delivery, setDelivery] = useState("");
  const [addDetails, setAddDetails] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const dishOptions = ['Paratha', 'Dal Rice' , 'Chole Bhature', 'Idli Dosa', 'Paneer Masala', 'Noodles' , 'Biryani' , 'Burger' , 'Pizza' , 'Chicken Masala'];
  const timeOptions = ['7am-10am', '1pm-4pm', '8pm-11pm'];

  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:3001/addDetails", {
      Plates: Plates,
      Dish: Dish,
      Date: Date,
      Time: Time,
      Delivery: Delivery,
    })
    .then((response) => {
      if (response.data.success) {
        setAddDetails("Details added successfully");
        setShowPopup(true);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setAddDetails("Failed to add details. Please check the inputs.");
      }
    })
    .catch((error) => {
      console.error("Error adding details:", error);
      setAddDetails("Failed to add details. ");
    });
  };

  useEffect(() => {
    // Cleanup the popup after 6 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <div className="cook-new">
      <div className="cook">
        <div className="form-container">
          <form>
            <h4>Add Details</h4>
            
            <label htmlFor="dish" className="input-label">Dish*</label><br />
            <select className="dropdown" value={Dish} onChange={(event) => setDish(event.target.value)} required>
              <option value="" disabled>Select Dish</option>
              {dishOptions.map((dish, index) => (
                <option key={index} value={dish}>{dish}</option>
              ))}
            </select><br />

            <label htmlFor="date" className="input-label">Date*</label><br />
            <input className="textInput" type="date" name="date" onChange={(event) => setDate(event.target.value)} required /><br />
            
            <label htmlFor="time" className="input-label">Time*</label><br />
            <select className="dropdown" value={Time} onChange={(event) => setTime(event.target.value)} required>
              <option value="" disabled>Select Time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select><br />

            <label htmlFor="plates" className="input-label">No. Of Plates*</label><br />
            <input className="textInput" type="text" name="plates" onChange={(event) => setPlates(event.target.value)} required /><br />

            <label htmlFor="delivery" className="input-label">Delivery*</label><br />
            <select className="dropdown" value={Delivery} onChange={(event) => setDelivery(event.target.value)} required>
              <option value="" disabled>Select Delivery Option</option>
              <option value="Only Pickup">Only Pickup</option>
              <option value="Pickup/Delivery">Pickup/Delivery</option>
            </select><br />

            <input className="button" type="submit" onClick={register} value="Add Details" /><br />
            <h1 className="message" style={{ fontSize: '15px', textAlign: 'center', marginTop: '0px' }}>{addDetails}</h1>
          </form>
        </div>
      </div>
      {showPopup && <div className="popup">Details Successfully Added!<br/>Redirecting to Home Page in 5 seconds</div>}
    </div>
  );
}

export default Register;
