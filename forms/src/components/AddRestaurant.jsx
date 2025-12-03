import { useState } from "react";

function AddRestaurant({ updateRestaurants }) {
  const [formData, setFormData] = useState( {
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
    image: ""
  });

  // e is the event object
  // onChange is an event handler
  // when event handlers call functions, React calls handleChange(e)
  // most relevant part of event object for forms is e.target
  // this represents the html element that triggered the event.
  // e.target.name tells us which field changes
  // e.target.value tells us what the user typed
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // This creates a shallow copy and adds a new key:value pair
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRestaurants(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>image:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} required />
      </div>

      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>

      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

      <div>
        <label>Cuisine:</label>
        <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} required />
      </div>

      <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
