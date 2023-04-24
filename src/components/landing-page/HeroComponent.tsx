import LottiePlayer from '@/components/LottiePlayer';
import { Button } from '@nextui-org/react';

import Link from 'next/link';
import headerAnimationJson from 'public/animation/landing-page/header.json';

export default function HeroComponent() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
            <div className="text-wrap d-flex flex-column align-items-lg-start align-items-center">
              <h1 className="mb-lg-5 mb-4 text-center text-lg-start hero-component"><span className="gradient-text ">Rates from 0% </span>   Monthly Flat Fee Stop paying per transaction</h1>
              <p className="p-18 mb-5 text-center text-lg-start">
              Paytriot now offers a monthly fee for businesses looking to start processing or switching. 
              </p>
              {/* <Link
                href="signup"
                className="btn btn-primary"
                role="button"
                data-bs-toggle="button"
              >
                Start Now
              </Link> */}
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button rounded size="xl" color="warning">
                  Start Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <LottiePlayer animationData={headerAnimationJson} />
          </div>
        </div>
      </div>
    </>
  );
}
