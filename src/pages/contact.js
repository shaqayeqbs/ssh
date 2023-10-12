import React from "react";

function Contact() {
  const contactInfo = {
    email: "contact@example.com",
    phoneNumber: "+1 (123) 456-7890",
    address: "123 Main Street, City, Country",
  };

  return (
    <div className="p-4 mt-20 bg-salem/10 text-center rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        If you have any questions or need assistance, please feel free to
        contact us using the information below:
      </p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Email</h2>
        <p>{contactInfo.email}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Phone Number</h2>
        <p>{contactInfo.phoneNumber}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{contactInfo.address}</p>
      </div>
    </div>
  );
}

export default Contact;
