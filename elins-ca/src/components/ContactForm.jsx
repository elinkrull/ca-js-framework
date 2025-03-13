import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      name,
      subject,
	  email,
      body,
    };

    fetch('http://www.example.com', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onSubjectChange(event) {
    setSubject(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onBodyChange(event) {
    setBody(event.target.value);
  }

  return (
    <div>
      <form className="contact-form" onSubmit={onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={name}
          placeholder=""
          onChange={onNameChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder=""
          onChange={onSubjectChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          placeholder=""
          onChange={onEmailChange}
        />
		   <label htmlFor="email">Body</label>
        <input
          name="body"
          value={body}
          placeholder=""
          onChange={onBodyChange}
        />
		<div className="contact-form-submit-wrapper">
        <button className="contact-form-submit-button">Submit</button>
		</div>
      </form>
    </div>
  );
}