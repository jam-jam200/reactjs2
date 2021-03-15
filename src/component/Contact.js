import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1>Contact Us</h1>
        <form>
          Name:{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
          />{" "}
          <br />
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
          />
          <br />
          <textarea
            name="textarea"
            id="text-area"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Submit Form" />
        </form>
      </>
    );
  }
}

export default Contact;
