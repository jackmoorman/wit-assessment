import React from 'react';
import SubmissionLayout from './layout';
import styles from './submission.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function index() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('John@');
  const [file, setFile] = useState(null);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !file)
      return alert('Please fill out all fields and select an image to upload');

    if (!email.includes('@')) return alert('Please enter a valid email');

    setIsDisabled(true);
    setIsLoading(true);

    const imageForm = new FormData();
    imageForm.append('image', file);

    const upload = await fetch('/api/image', {
      method: 'POST',
      body: imageForm,
    });

    if (upload.status !== 200) {
      alert('There was an error during your submission. Please try again.');
      setIsDisabled(false);
      setIsLoading(false);
      return;
    }

    const res = await upload.json();
    console.log(res);
    const { imageId } = res;

    const addUser = await fetch('/api/submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        firstName,
        lastName,
        email,
        imageId,
      },
    });
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
