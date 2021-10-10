import { useRouter } from 'next/router';
// import { useState } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  redirectionFromSignupContainerStyles,
  signUpStyles,
} from '../components/styles';

// ******

// ****

export default function Signup() {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  // const [newFirstName, setNewFirstName] = useState('');
  // const [newLastName, setNewLastName] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [newEmail, setNewEmail] = useState('');
  // const [newsletter, setNewsletter] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function handleEmailChange(e) {
  //   setNewEmail(e.currentTarget.value);
  // }

  // function handleFirstNameChange(e) {
  //   setNewFirstName(e.currentTarget.value);
  // }
  // function handleLastNameChange(e) {
  //   setNewLastName(e.currentTarget.value);
  // }
  // function handlePasswordChange(e) {
  //   setNewPassword(e.currentTarget.value);
  // }
  // function handleNewsletterChange() {
  //   setNewsletter((previous) => !previous);
  // }

  const onSubmit = (formData) => {
    // alert(JSON.stringify(formData));
    // alert(JSON.stringify(formData.email));

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newUser: [
          formData.email,
          formData.password,
          formData.firstName,
          formData.lastName,
        ],
      }),
    }).then(() => {
      setShowSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    });
  };

  // custom validation rule for password: must contain one digit and one uppercase letter

  const validPasswordType = (password) => {
    if (!password) return true;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return true;
    return false;
  };

  return (
    <div
      css={signUpStyles}
      className="fill-middle-area flex-container-center-content"
    >
      <div className="sign-up-box flex-container-center-content">
        <h1>Sign up</h1>
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
            placeholder="e-mail"
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
            placeholder="first name"
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
            placeholder="last Name"
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

          <button className="sign-up-button">Sign Up!</button>
        </form>
      </div>
      <div
        css={redirectionFromSignupContainerStyles}
        style={{ display: showSuccess ? 'flex' : 'none' }}
        className="flex-container-center-content redirection-fill-screen"
      >
        <div className="redirection-from-signup-text-container flex-container-center-content">
          <h2>Your account has been created. Please log in!</h2>
        </div>
      </div>
    </div>
  );
}
