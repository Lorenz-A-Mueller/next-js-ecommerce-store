import { css, keyframes } from '@emotion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpContainerStyles } from '../components/styles';

// ******

// ****

export default function Signup(props) {
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  // const [validInput, setValidInput] = useState(true);
  // const [startAnimation, setStartAnimation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleNameChange(e) {
    setNewName(e.currentTarget.value);
  }
  function handlePasswordChange(e) {
    setNewPassword(e.currentTarget.value);
  }
  function handleEmailChange(e) {
    setNewEmail(e.currentTarget.value);
  }
  function handleNewsletterChange() {
    setNewsletter((previous) => !previous);
  }

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  // custom validation rule for password: must contain one digit and one uppercase letter

  const validPasswordType = (password) => {
    if (!password) return true;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return true;
    return false;
  };

  return (
    <div css={signUpContainerStyles}>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            name="name"
            id="name"
            placeholder="user_name"
            onChange={(e) => handleNameChange(e)}
            value={newName}
          />
          {errors.name && (
            <div className="validation-error-container">
              {errors.name.type === 'required' && <p>Name is required</p>}
              {errors.name.type === 'maxLength' && <p>Too long!</p>}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
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
            onChange={(e) => handlePasswordChange(e)}
            value={newPassword}
          />
          {errors.password && (
            <div className="validation-error-container">
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
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+\.\S+$/i,
            })}
            name="email"
            id="email"
            placeholder="e-mail"
            onChange={(e) => handleEmailChange(e)}
            value={newEmail}
            type="email"
          />
          {errors.email && (
            <div className="validation-error-container">
              {errors.email.type === 'required' && <p>E-mail is required</p>}
              {errors.email.type === 'pattern' && (
                <p>Not a valid e-mail format</p>
              )}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="newsletter">Subscribe to our newsletter?</label>
          <input
            {...register('newsletter')}
            name="newsletter"
            id="newsletter"
            onChange={(e) => handleNewsletterChange(e)}
            checked={newsletter}
            type="checkbox"
          />
        </div>

        <button>Sign Up!</button>
      </form>
    </div>
    // </div>
  );
}

export async function getServerSideProps() {
  const { users } = await import('../utils/database');

  return {
    props: {
      users,
    },
  };
}
