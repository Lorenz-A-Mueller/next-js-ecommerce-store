import Head from 'next/head';
import { useRouter } from 'next/router';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { accountStyles } from '../utils/styles';

type Props = {
  loggedInUser:
    | {
        id: number;
        userName: string;
        userPassword: string;
        firstName: string;
        lastName: string;
      }
    | {};
  setLoggedInUser: (
    arg:
      | {}
      | {
          id: number;
          userName: string;
          userPassword: string;
          firstName: string;
          lastName: string;
        },
  ) => void;
};

// ****

export default function Account(props: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    if (!('id' in props.loggedInUser)) return;
    fetch(`http://localhost:3000/api/users/${props.loggedInUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        updatedUser: [
          props.loggedInUser.id,
          formData.email,
          formData.password,
          formData.firstName,
          formData.lastName,
        ],
      }),
    });
    setTimeout(() => {
      window.location.href = '/products';
    }, 1000);
  };

  function handleDeleteAccountClick(userId: number | null) {
    if (userId === null) return;
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userId),
    }).then(() => props.setLoggedInUser({}));
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }

  // custom validation rule for password: must contain one digit and one uppercase letter

  const validPasswordType = (password: string) => {
    if (!password) return true;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return true;
    return false;
  };

  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market - Account</title>
      </Head>
      <div
        css={accountStyles}
        className="fill-middle-area flex-container-center-content"
      >
        <div className="account-box flex-container-center-content">
          <h1>Your Account</h1>
          <h2>Change account details: </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="label-email">
              E-mail:
            </label>
            <input
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S+$/i,
              })}
              name="email"
              id="email"
              placeholder={
                'id' in props.loggedInUser ? props.loggedInUser.userName : ''
              }
              // onChange={(e) => handleEmailChange(e)}
              // value={newEmail}
              type="email"
            />
            {errors.email && (
              <div className="validation-error-container validation-error-container-email">
                {errors.email.type === 'required' && <p>E-mail is required</p>}
                {errors.email.type === 'pattern' && (
                  <p>Not a valid e-mail format</p>
                )}
              </div>
            )}
            <label htmlFor="firstName" className="label-firstName">
              First Name:
            </label>
            <input
              {...register('firstName', { required: true, maxLength: 20 })}
              name="firstName"
              id="firstName"
              placeholder={
                'id' in props.loggedInUser ? props.loggedInUser.firstName : ''
              }
              // onChange={(e) => handleFirstNameChange(e)}
              // value={newFirstName}
            />
            {errors.firstName && (
              <div className="validation-error-container validation-error-container-firstName">
                {errors.firstName.type === 'required' && (
                  <p>First Name is required</p>
                )}
                {errors.firstName.type === 'maxLength' && <p>Too long!</p>}
              </div>
            )}
            <label htmlFor="lastName" className="label-lastName">
              Last Name:
            </label>
            <input
              {...register('lastName', { required: true, maxLength: 20 })}
              name="lastName"
              id="lastName"
              placeholder={
                'id' in props.loggedInUser ? props.loggedInUser.lastName : ''
              }
              // onChange={(e) => handleLastNameChange(e)}
              // value={newLastName}
            />
            {errors.lastName && (
              <div className="validation-error-container validation-error-container-lastName">
                {errors.lastName.type === 'required' && (
                  <p>Last Name is required</p>
                )}
                {errors.lastName.type === 'maxLength' && <p>Too long!</p>}
              </div>
            )}

            <label htmlFor="password" className="label-password">
              Password:
            </label>
            <input
              {...register('password', {
                required: true,
                minLength: 10,
                maxLength: 20,
                validate: { validPasswordType },
              })}
              name="password"
              id="password"
              placeholder="password"
              type="password"
              // onChange={(e) => handlePasswordChange(e)}
              // value={newPassword}
            />
            {errors.password && (
              <div className="validation-error-container validation-error-container-password">
                {errors.password.type === 'required' && (
                  <p>Password is required</p>
                )}
                {errors.password.type === 'minLength' && (
                  <p>Too short (must be 10-20 characters)!</p>
                )}
                {errors.password.type === 'maxLength' && (
                  <p>Too long (must be 10-20 characters)!</p>
                )}
                {errors.password.type === 'validPasswordType' && (
                  <p>Must contain an uppercase letter and at least one digit</p>
                )}
              </div>
            )}

            <label htmlFor="newsletter" className="label-newsletter">
              Subscribe to our newsletter?
            </label>
            <input
              {...register('newsletter')}
              name="newsletter"
              id="newsletter"
              // onChange={(e) => handleNewsletterChange(e)}
              // checked
              type="checkbox"
            />

            <button className="save-button button-blue">Save</button>
          </form>
          <button
            className="delete-account-button button-red"
            onClick={() =>
              handleDeleteAccountClick(
                'id' in props.loggedInUser ? props.loggedInUser.id : null,
              )
            }
          >
            Delete your account
          </button>
        </div>
      </div>
    </>
  );
}
