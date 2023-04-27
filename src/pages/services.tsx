import Image from 'next/image';
import Link from 'next/link';

import LottiePlayer from '@/components/LottiePlayer';
import servicesDashboardJson from 'public/animation/services/service-dashboard.json';
import servicesPaymentJson from 'public/animation/services/service-payment/service-payment.json';

import ShoppingCartMatter from '@/components/services-page/ShoppingCartMatter';
import Head from 'next/head';
import imgInteractiveCartMobile from 'public/images/img-cart-sample.svg';

export default function Services() {
  return (
    <>
      <main>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Paytriot Payments Services"/>

          <title>Services | Paytriot</title>
        </Head>

        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-services">
                  <h2 className="mb-4">Services</h2>
                  <p className="p-18 mb-5">
                    Paytriot Payments has a broad range of financial services
                    that together, create a robust suite of Merchant Services.
                    We provide payment processing solutions including Merchant
                    Accounts and a payment gateway appropriate for businesses of
                    any size.
                    <br />
                    <br />
                    Whether you are a large retail establishment requiring
                    Merchant Credit Card Processing Services, or a start-up
                    requiring Credit Card Processing for small businesses, our
                    commitment to you is the same and the related value,
                    exemplary.
                    <br />
                    <br />
                    As a business owner you likely place high value on business
                    partners that can offer you excellent products, support, and
                    service. Well, we do too. We realize that ultimately, the
                    value of the services we provide to you is only as good as
                    the quality of partners and products we have selected. We
                    choose the best so we can offer you the best.
                  </p>
                  <div className="cta-wrap d-flex">
                    <Link
                      href="contact-us"
                      className="btn btn-primary me-4"
                      role="button"
                      data-bs-toggle="button"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="contact-us"
                      className="btn btn-secondary"
                      role="button"
                      data-bs-toggle="button"
                    >
                      Get a Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center ps-5">
                <Link href="wallet">
                  {/* <Image src={imgWalletSvg} alt="" /> */}
                  <svg
                    width={194}
                    height={58}
                    viewBox="0 0 194 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5 0C10.5213 0 0 10.5213 0 23.5C0 36.4787 10.5213 47 23.5 47H151.5L157 58L162.042 47H170.5C183.479 47 194 36.4787 194 23.5C194 10.5213 183.479 0 170.5 0H23.5Z"
                      fill="url(#paint0_linear_1286_3298)"
                    />
                    <path
                      d="M56.854 22.168C56.854 22.6627 56.7373 23.1293 56.504 23.568C56.2707 24.0067 55.8973 24.366 55.384 24.646C54.8707 24.9167 54.2127 25.052 53.41 25.052H51.646V29H50.05V19.27H53.41C54.1567 19.27 54.7867 19.4007 55.3 19.662C55.8227 19.914 56.21 20.2593 56.462 20.698C56.7233 21.1367 56.854 21.6267 56.854 22.168ZM53.41 23.75C54.0167 23.75 54.4693 23.6147 54.768 23.344C55.0667 23.064 55.216 22.672 55.216 22.168C55.216 21.104 54.614 20.572 53.41 20.572H51.646V23.75H53.41ZM57.8442 25.108C57.8442 24.3333 58.0028 23.6473 58.3202 23.05C58.6468 22.4527 59.0855 21.9907 59.6362 21.664C60.1962 21.328 60.8122 21.16 61.4842 21.16C62.0908 21.16 62.6182 21.2813 63.0662 21.524C63.5235 21.7573 63.8875 22.0513 64.1582 22.406V21.286H65.7682V29H64.1582V27.852C63.8875 28.216 63.5188 28.5193 63.0522 28.762C62.5855 29.0047 62.0535 29.126 61.4562 29.126C60.7935 29.126 60.1868 28.958 59.6362 28.622C59.0855 28.2767 58.6468 27.8007 58.3202 27.194C58.0028 26.578 57.8442 25.8827 57.8442 25.108ZM64.1582 25.136C64.1582 24.604 64.0462 24.142 63.8222 23.75C63.6075 23.358 63.3228 23.0593 62.9682 22.854C62.6135 22.6487 62.2308 22.546 61.8202 22.546C61.4095 22.546 61.0268 22.6487 60.6722 22.854C60.3175 23.05 60.0282 23.344 59.8042 23.736C59.5895 24.1187 59.4822 24.576 59.4822 25.108C59.4822 25.64 59.5895 26.1067 59.8042 26.508C60.0282 26.9093 60.3175 27.2173 60.6722 27.432C61.0362 27.6373 61.4188 27.74 61.8202 27.74C62.2308 27.74 62.6135 27.6373 62.9682 27.432C63.3228 27.2267 63.6075 26.928 63.8222 26.536C64.0462 26.1347 64.1582 25.668 64.1582 25.136ZM74.8085 21.286L70.0765 32.626H68.4245L69.9925 28.874L66.9545 21.286H68.7325L70.9025 27.166L73.1565 21.286H74.8085ZM92.3196 19.27L89.4356 29H87.6296L85.5856 21.636L83.4156 29L81.6236 29.014L78.8656 19.27H80.5596L82.5756 27.194L84.7596 19.27H86.5516L88.5816 27.152L90.6116 19.27H92.3196ZM94.4479 20.264C94.1586 20.264 93.9159 20.166 93.7199 19.97C93.5239 19.774 93.4259 19.5313 93.4259 19.242C93.4259 18.9527 93.5239 18.71 93.7199 18.514C93.9159 18.318 94.1586 18.22 94.4479 18.22C94.7279 18.22 94.9659 18.318 95.1619 18.514C95.3579 18.71 95.4559 18.9527 95.4559 19.242C95.4559 19.5313 95.3579 19.774 95.1619 19.97C94.9659 20.166 94.7279 20.264 94.4479 20.264ZM95.2319 21.286V29H93.6359V21.286H95.2319ZM99.1893 22.588V26.858C99.1893 27.1473 99.2547 27.3573 99.3853 27.488C99.5253 27.6093 99.7587 27.67 100.085 27.67H101.065V29H99.8053C99.0867 29 98.536 28.832 98.1533 28.496C97.7707 28.16 97.5793 27.614 97.5793 26.858V22.588H96.6693V21.286H97.5793V19.368H99.1893V21.286H101.065V22.588H99.1893ZM106.526 21.16C107.114 21.16 107.637 21.286 108.094 21.538C108.561 21.79 108.925 22.1633 109.186 22.658C109.457 23.1527 109.592 23.75 109.592 24.45V29H108.01V24.688C108.01 23.9973 107.838 23.47 107.492 23.106C107.147 22.7327 106.676 22.546 106.078 22.546C105.481 22.546 105.005 22.7327 104.65 23.106C104.305 23.47 104.132 23.9973 104.132 24.688V29H102.536V18.64H104.132V22.182C104.403 21.8553 104.744 21.6033 105.154 21.426C105.574 21.2487 106.032 21.16 106.526 21.16ZM122.069 22.168C122.069 22.6627 121.952 23.1293 121.719 23.568C121.486 24.0067 121.112 24.366 120.599 24.646C120.086 24.9167 119.428 25.052 118.625 25.052H116.861V29H115.265V19.27H118.625C119.372 19.27 120.002 19.4007 120.515 19.662C121.038 19.914 121.425 20.2593 121.677 20.698C121.938 21.1367 122.069 21.6267 122.069 22.168ZM118.625 23.75C119.232 23.75 119.684 23.6147 119.983 23.344C120.282 23.064 120.431 22.672 120.431 22.168C120.431 21.104 119.829 20.572 118.625 20.572H116.861V23.75H118.625ZM123.059 25.108C123.059 24.3333 123.218 23.6473 123.535 23.05C123.862 22.4527 124.3 21.9907 124.851 21.664C125.411 21.328 126.027 21.16 126.699 21.16C127.306 21.16 127.833 21.2813 128.281 21.524C128.738 21.7573 129.102 22.0513 129.373 22.406V21.286H130.983V29H129.373V27.852C129.102 28.216 128.734 28.5193 128.267 28.762C127.8 29.0047 127.268 29.126 126.671 29.126C126.008 29.126 125.402 28.958 124.851 28.622C124.3 28.2767 123.862 27.8007 123.535 27.194C123.218 26.578 123.059 25.8827 123.059 25.108ZM129.373 25.136C129.373 24.604 129.261 24.142 129.037 23.75C128.822 23.358 128.538 23.0593 128.183 22.854C127.828 22.6487 127.446 22.546 127.035 22.546C126.624 22.546 126.242 22.6487 125.887 22.854C125.532 23.05 125.243 23.344 125.019 23.736C124.804 24.1187 124.697 24.576 124.697 25.108C124.697 25.64 124.804 26.1067 125.019 26.508C125.243 26.9093 125.532 27.2173 125.887 27.432C126.251 27.6373 126.634 27.74 127.035 27.74C127.446 27.74 127.828 27.6373 128.183 27.432C128.538 27.2267 128.822 26.928 129.037 26.536C129.261 26.1347 129.373 25.668 129.373 25.136ZM140.023 21.286L135.291 32.626H133.639L135.207 28.874L132.169 21.286H133.947L136.117 27.166L138.371 21.286H140.023ZM143.09 22.588V26.858C143.09 27.1473 143.155 27.3573 143.286 27.488C143.426 27.6093 143.659 27.67 143.986 27.67H144.966V29H143.706C142.987 29 142.436 28.832 142.054 28.496C141.671 28.16 141.48 27.614 141.48 26.858V22.588H140.57V21.286H141.48V19.368H143.09V21.286H144.966V22.588H143.09ZM148.033 22.406C148.266 22.014 148.574 21.7107 148.957 21.496C149.349 21.272 149.811 21.16 150.343 21.16V22.812H149.937C149.311 22.812 148.835 22.9707 148.509 23.288C148.191 23.6053 148.033 24.156 148.033 24.94V29H146.437V21.286H148.033V22.406ZM152.622 20.264C152.332 20.264 152.09 20.166 151.894 19.97C151.698 19.774 151.6 19.5313 151.6 19.242C151.6 18.9527 151.698 18.71 151.894 18.514C152.09 18.318 152.332 18.22 152.622 18.22C152.902 18.22 153.14 18.318 153.336 18.514C153.532 18.71 153.63 18.9527 153.63 19.242C153.63 19.5313 153.532 19.774 153.336 19.97C153.14 20.166 152.902 20.264 152.622 20.264ZM153.406 21.286V29H151.81V21.286H153.406ZM158.847 29.126C158.119 29.126 157.461 28.9627 156.873 28.636C156.285 28.3 155.823 27.8333 155.487 27.236C155.151 26.6293 154.983 25.9293 154.983 25.136C154.983 24.352 155.156 23.6567 155.501 23.05C155.847 22.4433 156.318 21.9767 156.915 21.65C157.513 21.3233 158.18 21.16 158.917 21.16C159.655 21.16 160.322 21.3233 160.919 21.65C161.517 21.9767 161.988 22.4433 162.333 23.05C162.679 23.6567 162.851 24.352 162.851 25.136C162.851 25.92 162.674 26.6153 162.319 27.222C161.965 27.8287 161.479 28.3 160.863 28.636C160.257 28.9627 159.585 29.126 158.847 29.126ZM158.847 27.74C159.258 27.74 159.641 27.642 159.995 27.446C160.359 27.25 160.653 26.956 160.877 26.564C161.101 26.172 161.213 25.696 161.213 25.136C161.213 24.576 161.106 24.1047 160.891 23.722C160.677 23.33 160.392 23.036 160.037 22.84C159.683 22.644 159.3 22.546 158.889 22.546C158.479 22.546 158.096 22.644 157.741 22.84C157.396 23.036 157.121 23.33 156.915 23.722C156.71 24.1047 156.607 24.576 156.607 25.136C156.607 25.9667 156.817 26.6107 157.237 27.068C157.667 27.516 158.203 27.74 158.847 27.74ZM166.291 22.588V26.858C166.291 27.1473 166.356 27.3573 166.487 27.488C166.627 27.6093 166.86 27.67 167.187 27.67H168.167V29H166.907C166.188 29 165.638 28.832 165.255 28.496C164.872 28.16 164.681 27.614 164.681 26.858V22.588H163.771V21.286H164.681V19.368H166.291V21.286H168.167V22.588H166.291Z"
                      fill="white"
                    />
                    <circle cx={30} cy={24} r={10} fill="white" />
                    <path
                      d="M27.2857 21C26.9447 21 26.6177 21.1264 26.3766 21.3515C26.1355 21.5765 26 21.8817 26 22.2V22.8H35V22.2C35 21.8817 34.8645 21.5765 34.6234 21.3515C34.3823 21.1264 34.0553 21 33.7143 21H27.2857ZM26 25.8V23.4H35V25.8C35 26.1183 34.8645 26.4235 34.6234 26.6485C34.3823 26.8736 34.0553 27 33.7143 27H27.2857C26.9447 27 26.6177 26.8736 26.3766 26.6485C26.1355 26.4235 26 26.1183 26 25.8ZM32.1071 25.2C32.0219 25.2 31.9401 25.2316 31.8799 25.2879C31.8196 25.3441 31.7857 25.4204 31.7857 25.5C31.7857 25.5796 31.8196 25.6559 31.8799 25.7121C31.9401 25.7684 32.0219 25.8 32.1071 25.8H33.3929C33.4781 25.8 33.5599 25.7684 33.6201 25.7121C33.6804 25.6559 33.7143 25.5796 33.7143 25.5C33.7143 25.4204 33.6804 25.3441 33.6201 25.2879C33.5599 25.2316 33.4781 25.2 33.3929 25.2H32.1071Z"
                      fill="#827BFF"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1286_3298"
                        x1="0.26539"
                        y1="-2.61066"
                        x2="6.64204"
                        y2="79.7664"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AFB5FE" />
                        <stop offset={1} stopColor="#6B5EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard">
          <div className="container">
            <LottiePlayer animationData={servicesDashboardJson} />
          </div>
        </section>

        <section className="merchant-services  d-flex flex-column align-items-center">
          <div className="container d-flex flex-column align-items-center">
            <div className="text-wrap mb-5">
              <h2 className="text-center mb-4">Merchant Services</h2>
              <p className="p-18 text-center">
                Paytriot Payments are directly registered with Visa and
                MasterCard. Processing and settlement will all be through
                Paytriot and we will provide the gateway and merchant account as
                an all in one solution.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 mb-3">
                <div className="services-item d-flex align-items-center justify-content-center">
                  <label
                    htmlFor="item-services"
                    className="label-services text-center"
                  >
                    Competitive Rates
                  </label>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <div className="services-item d-flex align-items-center justify-content-center">
                  <label
                    htmlFor="item-services"
                    className="label-services text-center"
                  >
                    Smooth Boarding Process
                  </label>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <div className="services-item d-flex align-items-center justify-content-center">
                  <label
                    htmlFor="item-services"
                    className="label-services text-center"
                  >
                    Multi-Currency
                  </label>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <div className="services-item d-flex align-items-center justify-content-center">
                  <label
                    htmlFor="item-services"
                    className="label-services text-center"
                  >
                    UK based Customer Service
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-column align-items-center">
            <div className="text-wrap mb-5">
              <h2 className="text-center mb-4">Shopping Cart Integrations</h2>
              <p className="p-18 text-center">
                Paytriot is integrated with all major shopping cart providers
                and cashiers. We can provide you with a ready-to-go modules
                linked to
              </p>
            </div>

            <ShoppingCartMatter />

            <Image
              src={imgInteractiveCartMobile}
              alt=""
              className="w-100 mobile"
            />
          </div>
          <div></div>

          <div className="container d-flex flex-column align-items-center mb-0 ">
            <div className="text-wrap mb-5">
              <h2 className="text-center mb-4">Payment Gateway</h2>
              <p className="p-18 text-center">
                Our Payment Gateway will let you as an online business accept
                payments on your website smoothly and securely. Our gateway is
                configured with third party fraud tools that will help reduce
                chargebacks and block fraudulent transactions.
              </p>
            </div>
            <LottiePlayer animationData={servicesPaymentJson} />
          </div>
        </section>
      </main>
    </>
  );
}
