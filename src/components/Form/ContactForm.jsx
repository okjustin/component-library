import { useState } from 'react';
import SubmitButton from './SubmitButton';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (field, value) => {
    let error;

    switch(field) {
      case 'name':
        if (!value) {
          error = 'Name is required.';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validate(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (formData) => {
    setServerMessage(null);
    setIsSuccess(false);

    try {
      const json = {};
      Array.from(formData.entries()).forEach(([key, value]) => {
        json[key] = value;
      })

      console.log(JSON.stringify(json));

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerMessage(result.error || 'Something went wrong.');
      } else {
        setServerMessage(result.message);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
      }
    } catch (error) {
      setServerMessage('Failed to connect to the server.');
    }
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.message && errors.message && <span>{errors.message}</span>}
      </div>

      <SubmitButton />

      {serverMessage && (
        <div style={{ color: isSuccess ? 'green' : 'red', marginTop: '10px' }}>
          {serverMessage}
        </div>
      )}
    </form>
  )
}
