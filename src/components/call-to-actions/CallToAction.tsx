import Image from 'next/image';
import Link from 'next/link';

import imgBgPaytriotAds from 'public/images/bg-paytriots-ads.png';
import logoAppStoreSvg from 'public/images/logo-appstore.svg';
import logoPlayStoreSvg from 'public/images/logo-googleplay.svg';
import iconWhiteCheckSvg from 'public/images/icon-check-white.svg';

export default function CallToAction() {
  return (
    <>
      <section className="call-to-action" id="call-to-action">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-lg-6 offset-lg-1 d-flex align-items-center justify-content-center">
              <div className="txt-wrap d-flex flex-column align-items-lg-start align-items-center py-5">
                <h2 className="mb-4 mb-lg-5 text-center text-lg-start">
                  Charge Your Payment With Paytriot
                </h2>
                <div className="label-wrap d-flex flex-column flex-lg-row mb-5">
                  <div className="label-item d-flex align-items-center me-lg-5 mb-3 mb-lg-0">
                    <div className="icon-small me-1">
                      <Image src={iconWhiteCheckSvg} alt="" />
                    </div>
                    <label htmlFor="label-14" className="label-14">
                      Quick Access
                    </label>
                  </div>
                  <div className="label-item d-flex align-items-center me-lg-5 mb-3 mb-lg-0">
                    <div className="icon-small me-1">
                      <Image src={iconWhiteCheckSvg} alt="" />
                    </div>
                    <label htmlFor="label-14" className="label-14">
                      24x7 Support
                    </label>
                  </div>
                  <div className="label-item d-flex align-items-center">
                    <div className="icon-small me-1">
                      <Image src={iconWhiteCheckSvg} alt="" />
                    </div>
                    <label htmlFor="label-14" className="label-14">
                      24x7 Support
                    </label>
                  </div>
                </div>
                <div className="btn-wrap d-flex">
                  <Link
                    href="#"
                    className="btn btn-outline-primary me-3"
                    role="button"
                    data-bs-toggle="button"
                  >
                    <Image src={logoPlayStoreSvg} alt="" className="w-100" />
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-outline-primary"
                    role="button"
                    data-bs-toggle="button"
                  >
                    <Image src={logoAppStoreSvg} alt="" className="w-100" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex d-lg-block align-items-start">
              <Image src={imgBgPaytriotAds} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
