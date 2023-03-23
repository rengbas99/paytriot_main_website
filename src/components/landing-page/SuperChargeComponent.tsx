import LottiePlayer from '@/components/LottiePlayer';
import Link from 'next/link';

import superchargeYourBusiness from 'public/animation/landing-page/supercharge-your-business/supercharge-your-business.json';

export default function SuperChargeComponent() {
  return (
    <>
      <section className="supercharge position-relative">
        <div className="container">
          <div className="row flex-column-reverse  flex-lg-row">
            <div className="col-lg-5 d-flex d-lg-block justify-content-center justify-content-lg-start">
              <LottiePlayer animationData={superchargeYourBusiness} />
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex flex-column justify-content-center mb-lg-0 mb-5">
              <div className="txt-wrap">
                <h2 className="text-capitalize mb-lg-5 text-lg-start text-center">
                  Supercharge your business with Paytriot
                </h2>
                <p className="p-18 text-lg-start text-center mx-auto mx-lg-0">
                  Paytriot has their own dedicated wallet solution. Sign up to a
                  Paytriot wallet account to securely use your email and
                  password to pay at websites that accept Paytriot Payments.
                </p>
                <div className="btn-wrap d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                  <Link
                    href="wallet"
                    className="btn btn-primary"
                    role="button"
                    data-bs-toggle="button"
                  >
                    Paytriot Wallet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
