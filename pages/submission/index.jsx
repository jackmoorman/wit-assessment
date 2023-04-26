import React from 'react';
import SubmissionLayout from './layout';
import styles from './submission.module.scss';
import { useState } from 'react';

export default function index() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('John@');
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email)
      return alert('Please fill out all fields');

    if (!email.includes('@')) return alert('Please enter a valid email');

    setIsDisabled(true);
    setIsLoading(true);

    const fileData = new FormData();
    fileData.append('file', file);

    // const userData = {
    //   firstName,
    //   lastName,
    //   email,
    // };

    const submission = await fetch('/api/submission', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: fileData,
      // body: {
      //   userData: JSON.stringify(userData),
      //   file: fileData,
      // },
    });
    // console.log('EMAIL: ', email);
    // console.log('FIRST NAME: ', firstName);
    // console.log('LAST NAME: ', lastName);
    // console.log('FILE: ', file);
    // console.log('FILE: ', e.target.file.files[0]);
  }

  return (
    <SubmissionLayout>
      {!isLoading ? (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <label htmlFor="first-name">First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            type="text"
            placeholder="John"
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            type="text"
            placeholder="Doe"
          />
          <label htmlFor="email-address">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-address"
            type="text"
            placeholder="johndoe@email.com"
          />
          <label htmlFor="file">Upload File:</label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            type="file"
            name="file"
            accept="image/png, image/jpeg"
          />
          <button disabled={isDisabled} type="submit">
            Submit
          </button>
        </form>
      ) : (
        <h1 className={styles.loading}>Loading...</h1>
      )}
    </SubmissionLayout>
  );
}
