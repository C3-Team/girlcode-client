import React from "react";

const Contact = () => {
  return (
    <form action="action_page.php">
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label htmlFor="country">zipcode</label>
      <input type="text" />
      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Contact;
