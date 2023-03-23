import LottiePlayer from '@/components/LottiePlayer';

import paymentGatewayJson from 'public/animation/landing-page/toolkit/1payment.json';
import multiCurrencyJson from 'public/animation/landing-page/toolkit/multicurrency.json';
import competitiveRatesJson from 'public/animation/landing-page/toolkit/competitiverates.json';
import safeSecureJson from 'public/animation/landing-page/toolkit/safesecure.json';
import costumizedSolutionJson from 'public/animation/landing-page/toolkit/costumizedsolution.json';
import multifinanceverticalJson from 'public/animation/landing-page/toolkit/multifinancevertical.json';
import easySetupJson from 'public/animation/landing-page/toolkit/easysetup.json';
import longTermJson from 'public/animation/landing-page/toolkit/longterm.json';
import posJson from 'public/animation/landing-page/toolkit/pos.json';

export default function ToolkitComponent() {
  return (
    <>
      <div className="container">
        <h2 className="text-capitalize text-center mb-5">
          The complete toolkit <br /> for internet business
        </h2>
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={paymentGatewayJson} />
              </div>
              <p className="p-18 mb-0">Payment Gateway</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={multiCurrencyJson} />
              </div>
              <p className="p-18 mb-0">Multi-currency</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={competitiveRatesJson} />
              </div>
              <p className="p-18 mb-0">Competitive Rates</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={safeSecureJson} />
              </div>
              <p className="p-18 mb-0">Safe &amp; Secure Payments</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={costumizedSolutionJson} />
              </div>
              <p className="p-18 mb-0">Customized Transaction Solutions</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={multifinanceverticalJson} />
              </div>
              <p className="p-18 mb-0">Multifaceted Vertical Acceptance</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center mb-3">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={easySetupJson} />
              </div>
              <p className="p-18 mb-0">
                Easy Set-Up &amp; Friendly Back Office
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center mb-3">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={longTermJson} />
              </div>
              <p className="p-18 mb-0">Long-term Support</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-4">
            <div className="toolkit-wrap d-flex align-items-center mb-3">
              <div className="icon-toolkit me-3 me-lg-4">
                <LottiePlayer animationData={posJson} />
              </div>
              <p className="p-18 mb-0">POS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
