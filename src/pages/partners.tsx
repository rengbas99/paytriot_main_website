import AgentProgramComponent from '@/components/partner-page/AgentProgram';
import ReferralProgramComponent from '@/components/partner-page/ReferralProgram';
import Head from 'next/head';
import Image from 'next/image';
import { Link } from '@nextui-org/react';

import imgGambioLogo from 'public/images/img-logo-gambio.png';
import imgHamptonLogo from 'public/images/img-logo-hampton.png';
import imgLogoJumpSellerLogo from 'public/images/img-logo-jumpseller.png';
import imgLuisLogo from 'public/images/img-logo-luis.png';
import imgMatraLogo from 'public/images/img-logo-matra.png';
import imgCudeLogo from 'public/images/img-logo-cude.png';
import imgPaypalLogo from 'public/images/img-logo-paypal.png';
import imgLogoShopify from 'public/images/img-logo-shopify.png';
import imgPizzaLogo from 'public/images/img-logo-pizza.png';

export default function Partners() {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Paytriot Payments Partners" />
        <title>Partners | Paytriot</title>
      </Head>
      <main>
        <section className="partners">
          <div className="container">
            <h1 className="text-center">Paytriot Partners</h1>
            <p className="p-18 mt-4 text-center">
              Great companies we work with
            </p>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                  <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://shopify.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={'80'}
                      src={imgLogoShopify}
                      alt=""
                      className="logo-partners"
                    />
                  </Link>
                  <label className="partners-txt">Shopify</label>
                  <p className="p-14 text-opacity">Global Commerce Platform</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.gambio.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                      width={'80'}
                      src={imgGambioLogo}
                      alt=""
                      className="logo-partners"
                    />
                </Link>
                  <label className="partners-txt">Gambio</label>
                  <p className="p-14 text-opacity">Ecommerce Platform</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.hilton.com/en/brands/hampton-by-hilton/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgHamptonLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Hampton Inn</label>
                  <p className="p-14 text-opacity">Leading Hotel Brand</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.matraasia.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgMatraLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Matra Asia</label>
                  <p className="p-14 text-opacity">Agricultural Platform</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.pizzahut.co.uk/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgPizzaLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Pizza Hut</label>
                  <p className="p-14 text-opacity">
                    Franchise Restaurant Industry
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">   
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.cudedesign.co.uk/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'200'}
                    height={'200'}
                    src={imgCudeLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Cude Design</label>
                  <p className="p-14 text-opacity">Web Design Agency</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://www.paypal.com/uk/home'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgPaypalLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Paypal</label>
                  <p className="p-14 text-opacity">Online Digital Wallet</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://jumpseller.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgLogoJumpSellerLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Jump Seller</label>
                  <p className="p-14 text-opacity">Ecommerce Platform</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="partners-box d-flex flex-column align-items-center">
                <Link
                    style={{ textDecoration: 'none' }}
                    href={'https://luisonofre.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    width={'80'}
                    src={imgLuisLogo}
                    alt=""
                    className="logo-partners"
                  />
                </Link>
                  <label className="partners-txt">Luis Onofre</label>
                  <p className="p-14 text-opacity">Online Retail Platform</p>
                </div>
              </div>
            </div>
            <AgentProgramComponent />
            <br />
            <ReferralProgramComponent />
          </div>
        </section>
      </main>
    </>
  );
}
