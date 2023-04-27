import React from 'react';
import SubmissionLayout from './layout';
import styles from './submission.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function index() {
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('John@');
  const [file, setFile] = useState(null);

  // Next Router to push to success page if successful submit.
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !file)
      return alert('Please fill out all fields and select an image to upload');

    // There are WAY more checks needed to make sure an email is valid. This is just very basic.
    if (!email.includes('@')) return alert('Please enter a valid email');

    // Enable loading state and disable the button to prevent multiple submissions.
    setIsDisabled(true);
    setIsLoading(true);

    // Create a new form data object and append the image to it.
    const imageForm = new FormData();
    imageForm.append('image', file);

    // 'upload' the image --> save it to the /public/uploads directory.
    const upload = await fetch('/api/image', {
      method: 'POST',
      body: imageForm,
    });

    // if status is NOT okay, throw an error.
    if (upload.status !== 200) {
      alert('There was an error during your submission. Please try again.');
      setIsDisabled(false);
      setIsLoading(false);
      return;
    }

    // parse response and get the imageId to be used as its path.
    const res = await upload.json();
    const { imageId } = res;

    // add the user to the database.
    const addUser = await fetch('/api/submission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        imageId,
      }),
    });

    // if status is NOT okay, throw an error.
    if (addUser.status !== 200) {
      alert('There was an error during your submission. Please try again.');
      // allow user to re-input if this type of error occurs.
      setIsDisabled(false);
      setIsLoading(false);
      return;
    }

    const resUser = await addUser.json();

    if (!resUser.success) {
      // if error on the server side, alert the user.
      return alert(success.error);
    }

    // push to success page if successful.
    router.push('/success');
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
