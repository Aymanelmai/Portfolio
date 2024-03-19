import React from "react";
import "./Contact.css";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9bba49b2-b9b6-45f8-bc87-53753e7063aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact">
      
        <form onSubmit={onSubmit} className="Form">
          <div className="Form_Container">
        <div className="Title">Contact Me</div>
        <input type="text" name="name" className="Input" placeholder="Full Name" required/>
        <input type="email" className="Input" name="email" placeholder="Your-Email@gmail.com" required/>
        <textarea name="message" className="Input" placeholder="Type whatever you want !" required></textarea>

        <button type="submit" className="Submit">Submit Form</button>
        </div>
      </form>ù
      <span>{result}</span>


    </div>
  );
};

export default Contact;
