import AgentProgramComponent from '@/components/partner-page/AgentProgram';
import ReferralProgramComponent from '@/components/partner-page/ReferralProgram';
import Head from 'next/head';
import Image from 'next/image';

import imgGambioLogo from 'public/images/img-logo-gambio.png';
import imgHamptonLogo from 'public/images/img-logo-hampton.png';
import imgLogoJumpSellerLogo from 'public/images/img-logo-jumpseller.png';
import imgLuisLogo from 'public/images/img-logo-luis.png';
import imgMatraLogo from 'public/images/img-logo-matra.png';
import imgNetflixLogo from 'public/images/img-logo-netflix.png';
import imgPaypalLogo from 'public/images/img-logo-paypal.png';
import imgLogoPayrex from 'public/images/img-logo-payrex.png';
import imgPizzaLogo from 'public/images/img-logo-pizza.png';

export default function Partners() {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Partners | Paytriot</title>
      </Head>
      <main>
        <section className="partners">
          <div className="container">
            <h2 className="text-center">Paytriot Partners</h2>
            <p className="p-18 mt-4 text-center">
              Great companies we work with 
            </p>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgLogoPayrex}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Payrexx</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgGambioLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Gambio</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgHamptonLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Hampton Inn</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgMatraLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Matra Asia</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgPizzaLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Pizza Hut</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgNetflixLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Netflix</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgPaypalLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Paypal</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgLogoJumpSellerLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Jump Seller</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Image
                    width={'80'}
                    src={imgLuisLogo}
                    alt=""
                    className="logo-partners"
                  />
                  <label className="partners-txt">Luis Onofre</label>
                  <p className="p-14 text-opacity">
                    Quisque gravida nibh non mi
                  </p>
                </div>
              </div>
            </div>

            {/* <lottie-player
							src="https://assets2.lottiefiles.com/packages/lf20_7ovzuurf/Partners/data.json"
							background="transparent"
							speed={1}
							style={{}}
							loop=""
							autoPlay=""
						/> */}

            <AgentProgramComponent />
            <br />
            <ReferralProgramComponent />
          </div>
        </section>
      </main>
    </>
  );
}
