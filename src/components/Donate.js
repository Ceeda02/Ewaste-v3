import React, { useState } from "react";

function DonationPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [ewasteType, setEwasteType] = useState("");

  // Handler for phone number input
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handler for donation amount selection
  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  // Handler for ewaste type input
  const handleEwasteTypeChange = (e) => {
    setEwasteType(e.target.value);
  };

  return (
    <div className="container p-5 mt-5 mb-5">
      <h1>Donation Page</h1>
      <div className="form-group">
        <label htmlFor="phoneNumber">
          <h3>Phone Number</h3>
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ewasteType">
          <h3>What type of Ewaste?</h3>
        </label>
        <input
          type="text"
          className="form-control"
          id="ewasteType"
          placeholder="(e.g., phone, cd, etc)"
          value={ewasteType}
          onChange={handleEwasteTypeChange}
        />
      </div>
      <div className="form-group">
        <label>
          <h3>Donation Amount</h3>
        </label>
        <div className="d-flex flex-column">
          <label className="d-flex align-items-center">
            <input
              type="radio"
              value="1kg"
              checked={donationAmount === "1kg"}
              onChange={handleDonationAmountChange}
            />
            1kg
          </label>
          <label className="d-flex align-items-center">
            <input
              type="radio"
              value="2kg"
              checked={donationAmount === "2kg"}
              onChange={handleDonationAmountChange}
            />
            2kg
          </label>
          <label className="d-flex align-items-center">
            <input
              type="radio"
              value="3kg"
              checked={donationAmount === "3kg"}
              onChange={handleDonationAmountChange}
            />
            3kg+
          </label>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
            <td>Row 1, Column 4</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
            <td>Row 2, Column 4</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default DonationPage;
