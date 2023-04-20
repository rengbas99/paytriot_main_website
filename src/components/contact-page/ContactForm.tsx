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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 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");

  const data1 = {
    "personalizations": [
      {
        "to": [
          {
            "email": "admin@paytriot.co.uk",
            "name": "Admin"
          }
        ],
        "subject": "New Enquiry for Paytriot Payments"
      }
    ],
    "content": [
      {
        "type": "text/plain",
        "value": `New Customer enquiry from ${register.name}`
      }
    ],
    "from": {
      "email": "anish@paytriot.co.uk",
      "name": "Anish"
    }
  };
  

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data.name);
    console.log(data1.content[0].value);

    let  string = `New customer enquiry from ${data.name}, Please find the contact details

     Name: ${data.name} ,

     Email: ${data.email},

     Phone: ${data.phone},

     Website: ${data.website.toString()},

     Message: ${data.message} .
     
     `

    data1.content[0].value = string;

    try {
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data1),
        redirect: 'follow',

      });
      console.log(process.env.bearerToken);
      console.log(res);
      console.log(data1);

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
          type="text"
          label="Email"
          {...register('email', { required: true })}
          status={errors.email ? 'error' : undefined}
          fullWidth
        />

        <Input
          rounded
          className="my-2"
          size="lg"
          type="phone"
          label="Phone"
          {...register('phone', { required: true })}
          status={errors.phone ? 'error' : undefined}
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
