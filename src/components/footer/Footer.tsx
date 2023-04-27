import Image from 'next/image';
import Link from 'next/link';

import icoEmailSvg from 'public/images/icon-email.svg';
import iconFacebookSvg from 'public/images/icon-facebook.svg';
import iconLinkedInSvg from 'public/images/icon-linkedin.svg';
import iconTwitterSvg from 'public/images/icon-twitter.svg';
import iconYoutubeSvg from 'public/images/icon-youtube.svg';
import logoSvg from 'public/images/img-logo.svg';
import logoMasterCardSvg from 'public/images/logo-mastercard.svg';
import logoOthelistSvg from 'public/images/logo-onthelist.svg';
import logoVisaSvg from 'public/images/logo-visa.svg';

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
              <div className="brand-wrap">
                <div className="footer-brand mb-4 mb-lg-5">
                  <Image
                    src={logoSvg}
                    alt=""
                    className="logo-footer img-logo"
                  />
                </div>
                <p className="label-14 mb-4 mb-lg-0">
                  Paytriot Payments has many years experience in all aspects of
                  the International and online financial world.
                </p>
              </div>
              <div className="socmed d-flex mb-4">
                <div className="icon-small icon1">
                  <Image src={iconFacebookSvg} alt="" className="img-logo" />
                </div>
                <div className="icon-small icon2">
                  <Image src={iconTwitterSvg} alt="" className="img-logo" />
                </div>
                <div className="icon-small icon3">
                  <Image src={iconLinkedInSvg} alt="" className="img-logo" />
                </div>
                <div className="icon-small icon4">
                  <Image src={iconYoutubeSvg} alt="" className="img-logo" />
                </div>
                <div className="icon-small icon5">
                  <Image src={icoEmailSvg} alt="" className="img-logo" />
                </div>
              </div>
              <label
                htmlFor="label-14/200% light "
                className="d-inline-block d-lg-none"
              >
                @ 2023 Paytriot Ltd{' '}
              </label>
            </div>
            <div className="col-lg-3 offset-lg-1 pt-lg-3 mb-4">
              <h4 style={{ paddingLeft: '1.2rem' }}>Useful Links</h4>
              <div className="nav-item-wrap d-flex justify-content-between justify-content-lg-start mt-3">
                <ul className="nav-footer ps-0 me-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Testimonial</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/partners">Clients</Link>
                  </li>
                </ul>
                <ul className="/nav-footer ps-0">
                  <li>
                    <Link href="https://www.paytriot.co.uk/services">Service</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/bank-account">Bank Account</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/partners">Partners</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/wallet">Wallet</Link>
                  </li>
                  <li>
                    <Link href="https://www.paytriot.co.uk/contact-us">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-card mb-4">
                <h4>Contact Details</h4>
                <div className="address-wrap">
                  <label htmlFor="label-14/light" className="label-14">
                    <span>Address:</span> The Charter Building, Charter Place,
                    Uxbridge, UB8 1JG
                  </label>
                  <label htmlFor="label-14/light" className="label-14">
                    <span>Phone:</span> +44 (0203)884 1611
                  </label>
                  <label htmlFor="label-14/light" className="label-14">
                    <span>Email:</span> info@paytriot.co.uk
                  </label>
                </div>
              </div>
              <div className="logo-payment d-flex align-items-center ps-lg-4">
                <div className="supportedby logo1">
                  <Image
                    src={logoOthelistSvg}
                    alt=""
                    className="img-logo me-5"
                  />
                </div>
                <div className="supportedby logo2">
                  <Image
                    src={logoMasterCardSvg}
                    alt=""
                    className="img-logo me-5"
                  />
                </div>
                <div className="supportedby logo3">
                  <Image src={logoVisaSvg} alt="" className="img-logo" />
                </div>
              </div>
              <div className="terms-policy d-block d-lg-none mt-4">
                <Link href="/terms-and-conditions" className="label-14 me-3">
                  Terms &amp; Conditions
                </Link>
                <Link href="/privacy-policy" className="label-14">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="trademarks d-lg-flex justify-content-between d-none">
            <Link href={'#'} className="label-14">
              @ 2023 Paytriot Ltd
            </Link>

            <div className="terms-policy">
              <Link href="/terms-and-conditions" className="label-14 me-3">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy-policy" className="label-14">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
