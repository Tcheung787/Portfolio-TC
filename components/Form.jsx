'use client';  // Add this line to make it a Client Component

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage success/error messages and form submission status
  const [formStatus, setFormStatus] = useState({
    success: null,
    error: null,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to backend API
    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Show success message
        setFormStatus({
          success: 'Thank you! Your message has been sent successfully.',
          error: null,
        });

        // Reset form fields after successful submission
        setFormData({ name: '', email: '', message: '' });

        // Make the success message disappear after 5 seconds
        setTimeout(() => {
          setFormStatus({ success: null, error: null });
        }, 5000); // Message disappears after 5 seconds
      } else {
        // Show error message
        setFormStatus({
          success: null,
          error: 'Failed to send the message. Please try again later.',
        });

        // Make the error message disappear after 5 seconds
        setTimeout(() => {
          setFormStatus({ success: null, error: null });
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({
        success: null,
        error: 'Failed to send the message. Please try again later.',
      });

      // Make the error message disappear after 5 seconds
      setTimeout(() => {
        setFormStatus({ success: null, error: null });
      }, 5000);
    }
  };

  return (
    <form className='flex flex-col gap-y-4 xl:translate-y-[-90px]' onSubmit={handleSubmit}>
      {/* Name input */}
      <div className='relative flex items-center'>
        <Input
          type='text'
          id='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <User className='absolute right-6' size={20} />
      </div>

      {/* Email input */}
      <div className='relative flex items-center'>
        <Input
          type='email'
          id='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>

      {/* Message textarea */}
      <div className='relative flex items-center'>
        <Textarea
          id='message'
          placeholder='Write me a message'
          className='py-4'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>

      {/* Submit button */}
      <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>

      {/* Success/Error Messages */}
      {formStatus.success && (
        <p className="text-500 mt-4">{formStatus.success}</p>
      )}
      {formStatus.error && (
        <p className="text-500 mt-4">{formStatus.error}</p>
      )}
    </form>
  );
};

export default Form;
