const handleSubmit = (e) => {
  e.preventDefault(); // Prevents default refresh by the browser
  emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID).then(
    (result) => {
      alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
      alert("An error occurred, Please try again", error.text);
    }
  );
};

export default handleSubmit;
