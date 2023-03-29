import ContactForm from '@/components/contact-page/ContactForm';
import { Button } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';

import iconDirectionSvg from 'public/images/icon-direction.svg';

export default function ContactUs() {
  const openGoogleMaps = () => {
    window.open('https://goo.gl/maps/AeuwB3ftnZ8JWBNn6', '_blank');
  };
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Contact Us | Paytriot</title>
      </Head>
      <main>
        <section className="contact">
          <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <p className="p-18 text-center">Get in touch with us</p>
            <div className="row">
              {/* <div className="col-lg-4 d-flex justify-content-center">
                <div className="contact-wrap d-flex flex-column align-items-center">
                  <div className="contact-icon mb-4">
                    <Image src={iconPhoneSvg} alt="" className="w-100" />
                  </div>
                  <h4 className="mb-3 text-center">Costumer Service</h4>
                  <p className="p-14 text-opacity text-center mb-5">
                    Urabitur nulla mi, sollicitudin a commodo sit amet.
                  </p>
                  <Link
                    href="#"
                    className="btn btn-primary w-100"
                    role="button"
                    data-bs-toggle="button"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="contact-wrap d-flex flex-column align-items-center">
                  <div className="contact-icon mb-4">
                    <Image src={iconMediaSvg} alt="" className="w-100" />
                  </div>
                  <h4 className="mb-3 text-center">Media and Press</h4>
                  <p className="p-14 text-opacity text-center mb-5">
                    Urabitur nulla mi, sollicitudin a commodo sit amet.
                  </p>
                  <Link
                    href="#"
                    className="btn btn-primary w-100"
                    role="button"
                    data-bs-toggle="button"
                  >
                    Visit
                  </Link>
                </div>
              </div> */}

              <ContactForm />
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="contact-wrap d-flex flex-column align-items-center">
                  <div className="contact-icon mb-4">
                    <Image src={iconDirectionSvg} alt="" className="w-100" />
                  </div>
                  <h4 className="mb-3 text-center">Address</h4>
                  <p className="p-14 text-opacity text-center mb-5">
                    The Charter Building, <br/>
                    Charter Place, <br/>
                    Uxbridge, <br/>
                    UB8 1JG
                  </p>
                  {/* <Link
                    href="https://goo.gl/maps/AeuwB3ftnZ8JWBNn6"
                    target="_blank"
                    className="btn btn-primary w-100"
                    role="button"
                    data-bs-toggle="button"
                  >
                    View Maps
                  </Link> */}
                  <Button
                    rounded
                    size="xl"
                    color="warning"
                    onClick={openGoogleMaps}
                  >
                    View in Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
    </>
  );
}
