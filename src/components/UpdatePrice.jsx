import { useState } from "react";

const UpdatePrice = (setprice) => {
  const [newPrice, setNewPrice] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  setprice(newPrice)
  
  }
  return (
    <div>
       <form onSubmit ={handleSubmit}>
            <label>
              <input
                type="number"
                id="price-input"
                name="new-price"
                placeholder="what price can you see?"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
              />
            </label>
            <button type="submit">enter fuely</button>
          </form>
    </div>
  );
};

export default UpdatePrice;
  