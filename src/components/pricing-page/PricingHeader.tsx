import LottiePlayer from '@/components/LottiePlayer';
import monthlyFlatFeeJson from 'public/animation/pricing/pricing-monthly-flat-fee.json';

const PricingHeader = () => (
  <section className="pricing-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="txt-wrap">
            <h1 className="mb-3">Monthly Flat Fee</h1>
            <h2 className="fw-normal mb-5">No More Charge Per Transaction</h2>
            <p className="p-18">
              Stop paying fees per transaction, Paytriot charges a flat monthly
              fee for small businesses. Avoid the unnecessary costs of fees per
              transaction and having higher costs as you grow.
              <br /> <br />
              If you are low risk small business use the sliding scale below to
              see how much you would pay. Accounts are setup instantly and start
              integrating Paytriot to your site straight away.
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="holder d-flex justify-content-lg-end">
            <LottiePlayer animationData={monthlyFlatFeeJson} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingHeader;
