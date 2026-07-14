import { useState } from "react";

function Forms1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted: " + formData);
        console.log(formData)
      }}
    >
      {/* Yahan formData.firstName use karo, sirf firstName nahi */}
      <input type="text" value={formData.firstName} placeholder="First Name"
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />

      <input placeholder="Last Name" value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />

      <input type="date" value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />

      <input placeholder="Email" value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

      <input placeholder="Phone" value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms1;