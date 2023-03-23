import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import iconArrowDownSvg from 'public/images/icon-arrow-down.svg';
import imgAboutHero from 'public/images/img-about-hero.png';
import imgCustomer1 from 'public/images/img-customer-1.png';
import imgCustomer2 from 'public/images/img-customer-2.png';
import imgCustomer3 from 'public/images/img-customer-3.png';

import imgAboutWedo from 'public/images/img-about-wedo.png';
import imgRatingSvg from 'public/images/img-rating.svg';

export default function AboutUs() {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        <title>About Us | Paytriot</title>
      </Head>
      {/* @TODO
      <nav className="nav-l position-fixed">
        <div className="nav-contain">
          <ul>
            <li className="label-nav hero active">
              <Link href="#hero">Who</Link>
            </li>
            <li className="label-nav our-story">
              <Link href="#our-story">Why paytriot</Link>
            </li>
            <li className="label-nav customer-say">
              <Link href="#customer-say">Why</Link>
            </li>
            <li className="label-nav wedo-about">
              <Link href="#wedo-about">What is</Link>
            </li>
            <li className="label-nav call-to-action">
              <Link href="#call-to-action">How to</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-center align-items-start">
              <h2 className="mb-lg-5">Who Are We Lorem Ipsum Dolor</h2>
              <p className="p-18 mb-lg-5">
                Payriot Payments has many years experience in all aspects of the
                International and online financial world. This allows us to
                offer the best solution, one which is tailored to the exact
                requirements of your business.
              </p>
              <Link
                href="#"
                className="p-18 meet-us"
                role="button"
                data-bs-toggle="button"
              >
                Meet Us <Image src={iconArrowDownSvg} alt="" className="ms-4" />
              </Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <Image
                src={imgAboutHero}
                alt=""
                className="about-hero-no-padding w-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our-story" id="our-story">
        <div className="container">
          <h2 className="text-center">Our Story</h2>
          <div className="story-wrapper position-relative">
            <div className="yearbtn position-sticky">2022</div>
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box">
                  <p className="p-18">
                    <span className="orange">January</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story-box dekstop">
                  <p className="p-18">
                    <span className="orange">February</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box mobile">
                  <p className="p-18">
                    <span className="orange">February</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
              <div className="col-lg-6" />
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box">
                  <p className="p-18">
                    <span className="orange">March</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story-box dekstop">
                  <p className="p-18">
                    <span className="orange">April</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box mobile">
                  <p className="p-18">
                    <span className="orange">April</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
              <div className="col-lg-6" />
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box">
                  <p className="p-18">
                    <span className="orange">May</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story-box dekstop">
                  <p className="p-18">
                    <span className="orange">June</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 border-lineL position-relative">
                <div className="story-box mobile">
                  <p className="p-18">
                    <span className="orange">June</span>
                  </p>
                  <p className="p-18">
                    Payriot Payments has many years experience in all aspects.
                  </p>
                </div>
                <div className="story-bullet-outer position-absolute top-50">
                  <div className="story-bullet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-say" id="customer-say">
        <div className="container">
          <h2 className="text-center">What Our Customers Say?</h2>
          <div className="row">
            <div className="col-4">
              <div className="testi-wrap d-flex flex-column align-items-center">
                <Image src={imgCustomer1} alt="" className="cust-prof" />
                <h4 className="mt-4">Jessica Hun</h4>
                <h5 className="fst-italic">Marketing Manager</h5>
                <div className="rating-wrap d-flex my-4">
                  <Image src={imgRatingSvg} alt="" />
                </div>
                <p className="p-16 text-opacity">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus libero vitae vehicula suscipit.”
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="testi-wrap d-flex flex-column align-items-center">
                <Image src={imgCustomer2} alt="" className="cust-prof" />
                <h4 className="mt-4">August Malik</h4>
                <h5 className="fst-italic">Photographer</h5>
                <div className="rating-wrap d-flex my-4">
                  <Image src={imgRatingSvg} alt="" />
                </div>
                <p className="p-16 text-opacity">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus libero vitae vehicula suscipit.”
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="testi-wrap d-flex flex-column align-items-center">
                <Image src={imgCustomer3} alt="" className="cust-prof" />
                <h4 className="mt-4">Bernedetta Carol</h4>
                <h5 className="fst-italic">Co-Founder</h5>
                <div className="rating-wrap d-flex my-4">
                  <Image src={imgRatingSvg} alt="" />
                </div>
                <p className="p-16 text-opacity">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus libero vitae vehicula suscipit.”
                </p>
              </div>
            </div>
          </div>

          {/* Slider main container */}
          {/* <div className="swiper swipercust">
            {/* Additional required wrapper */}
          {/* <div className="swiper-wrapper"> */}
          {/* Slides */}
          {/* <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer1} alt="" className="cust-prof" />
                  <h4 className="mt-4">Jessica Hun</h4>
                  <h5 className="fst-italic">Marketing Manager</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer2} alt="" className="cust-prof" />
                  <h4 className="mt-4">August Malik</h4>
                  <h5 className="fst-italic">Photographer</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div> */}
          {/* <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer3} alt="" className="cust-prof" />
                  <h4 className="mt-4">Bernedetta Carol</h4>
                  <h5 className="fst-italic">Co-Founder</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div> */}
          {/* Slides */}
          {/* <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer1} alt="" className="cust-prof" />
                  <h4 className="mt-4">Jessica Hun</h4>
                  <h5 className="fst-italic">Marketing Manager</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div> */}
          {/* <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer2} alt="" className="cust-prof" />
                  <h4 className="mt-4">August Malik</h4>
                  <h5 className="fst-italic">Photographer</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div> */}
          {/* <div className="swiper-slide">
                <div className="testi-wrap d-flex flex-column align-items-center">
                  <Image src={imgCustomer3} alt="" className="cust-prof" />
                  <h4 className="mt-4">Bernedetta Carol</h4>
                  <h5 className="fst-italic">Co-Founder</h5>
                  <div className="rating-wrap d-flex my-4">
                    <Image src={imgRatingSvg} alt="" />
                  </div>
                  <p className="p-16 text-opacity text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempus libero vitae vehicula suscipit.”
                  </p>
                </div>
              </div> */}
          {/* </div> */}
          {/* If we need pagination */}
          {/* <div className="swiper-pagination" /> */}
          {/* If we need navigation buttons */}
          {/* <div class="swiper-button-prev"></div> */}
          {/* <div class="swiper-button-next"></div> */}
          {/* If we need scrollbar */}
          {/* <div class="swiper-scrollbar"></div> */}
          {/* </div> */}
        </div>
      </section>
      <section className="wedo-about" id="wedo-about">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 ">
              <Image src={imgAboutWedo} alt="" className="w-100" />
            </div>
            <div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center mb-5 mb-lg-0">
              <div className="wedo-wrap">
                <h2 className="mb-5">What We Do</h2>
                <p className="p-18 mb-5">
                  Payriot Payments has many years experience in all aspects of
                  the International and online financial world. This allows us
                  to offer the best solution, one which is tailored to the exact
                  requirements of your business.
                </p>
                <Link
                  href="wallet"
                  className="btn btn-primary"
                  role="button"
                  data-bs-toggle="button"
                >
                  Paytriot Wallet{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
