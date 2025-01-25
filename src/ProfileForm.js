import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import "./ProfileForm.css";
import Button from "./Button";

export default function ProfileForm() {
  const rowMargin = {
    marginTop: "1rem",
    display: 'flex'
  };
  const hrStyle = {height: '2px', borderTop: '2px solid #aaa', marginTop: '2rem', marginBottom: '2rem'};
  const country = ["Nigeria", "Ghana", "Ivory Coast"];
  const city = ["Lagos", "Abuja", "Port Harcourt"];
  return (
    <div className="form-section">
      <h2>Profile settings</h2>
      <form>
        <div style={rowMargin}>
          <InputField type="text" name="first_name" placeholder="First name" />
          <InputField type="text" name="last_name" placeholder="Last name" />
        </div>
        <div style={rowMargin}>
          <InputField type="email" name="email" placeholder="Email" />
        </div>
        <div style={rowMargin}>
          <InputField type="text" name="address" placeholder="Address" />
        </div>
        <div style={rowMargin}>
          <SelectField name="country" label="Country" data={country} />
          <SelectField name="city" label="City" data={city} />
        </div>
        <div style={rowMargin}>
          <InputField type="number" name="zipcode" placeholder="Zip Code" />
          <InputField type="tel" name="phone" placeholder="Phone Number" />
        </div>
        <div style={hrStyle}></div>
        <div style={rowMargin}>
          <Button bgColor="#ccc" txtColor="black" flex='1'>Update</Button>
          <Button bgColor="#eee" txtColor="black" flex='1'>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
