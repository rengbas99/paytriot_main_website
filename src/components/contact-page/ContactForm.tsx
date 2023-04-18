import { Button, Input, Loading, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { SendIcon } from './SendIcon';

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const data = {
    personalizations: [
      {
        to: [
          {
            email: 'anish@paytiot.co.uk',
            name: 'Anish Kulandaisamy',
          },
        ],
        subject: 'Hello, World!',
      },
    ],
    content: [
      {
        type: 'text/plain',
        value: register,
      },
    ],
    from: {
      email: 'info@paytriot.co.uk',
      name: 'Indo Smith',
    },
  };

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer `,
        },
        body: JSON.stringify(data)
      });

      console.log(res);
      console.log(data);

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        setError('Oops! Something went wrong.');
      }
    } catch (err) {
      setError('Oops! Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" contact-wrap-custom col-lg-8 d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          rounded
          className="my-2"
          size="lg"
          type="text"
          label="Name"
          {...register('name', { required: true })}
          status={errors.name ? 'error' : undefined}
          fullWidth
        />

        <Input
          rounded
          className="my-2"
          size="lg"
          type="email"
          label="Email"
          {...register('email', { required: true })}
          status={errors.email ? 'error' : undefined}
          fullWidth
        />

        <Input
          rounded
          className="my-2"
          size="lg"
          type="url"
          label="Website"
          {...register('website', { required: true })}
          status={errors.email ? 'error' : undefined}
          fullWidth
        />

        <Textarea
          rows={6}
          size="lg"
          className="my-2"
          label="Message"
          placeholder="Enter your message here..."
          fullWidth
          {...register('message', { required: true })}
          status={errors?.message ? 'error' : undefined}
        />
        <div className="py-4">
          <Button
            rounded
            size="xl"
            color="warning"
            type="submit"
            // iconRight={<SendIcon set="bold" />}
            disabled={loading}
          >
            {!loading ? 'Submit' : <Loading color="currentColor" size="md" />}
          </Button>

          {success && (
            <p style={{ color: 'green' }}>Your message has been sent!</p>
          )}

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
