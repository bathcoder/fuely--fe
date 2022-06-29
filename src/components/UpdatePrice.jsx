import { useState } from "react";
// import { postNewPrice } from "../utils/api";


const UpdatePrice = ({setPrice, setPriceMessage}) => {
  const [newPrice, setNewPrice] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
const isValid = /^\d\d\d\.\d$/.test(newPrice);
if (!isValid) {setNewPrice(""); setPriceMessage("please enter price in pence, ie. 198.9")}
if (isValid){setPrice(newPrice); setPriceMessage("Thanks for submitting your price!")}

  setNewPrice("")
  //  postNewPrice(newPrice) --- posting to database. this is a placeholder for the real thing
  }
  return (
    <div>
       <form onSubmit ={handleSubmit}>
            <label id = "price-label">
              <input
                type="number"
                id="price-input"
                name="new-price"
                placeholder="Enter new price"
                value={newPrice}
                step= "any"
                onChange={(event) => setNewPrice(event.target.value)}
              />
            </label>
            <button type="submit">submit</button>
          </form>
    </div>
  );
};


export default UpdatePrice;
  