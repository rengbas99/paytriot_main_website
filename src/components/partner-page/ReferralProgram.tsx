import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import imgPartnerPerson from 'public/images/partner-img.png';

const ReferralProgramComponent = () => {
  return (
    <div className="contact-wrap-custom">
      <div className="row py-4	">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="ref-partner">
            <Image
              style={{ paddingTop: '4rem', height: 'auto', maxWidth: '100%' }}
              alt=""
              src={imgPartnerPerson}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 partners-conent">
          <h2>Referral Partner</h2>
          <p>Earn Residual Income Quickly</p>
          <p>
            A Paytriot referral partner program provides opportunity to earn
            additional revenue fast.
          </p>
          <p>
            We provide the tools and resources for marketing, customer service,
            account management and technical support.
          </p>
          <p>
            You will receive top of the line reporting, expedited approvals, and
            security that can’t be matched. We make sure the process is easy and
            seamless, we offer a true partnership.
          </p>
          <p>Contact us to start earning Commission Now!</p>
          <p>
            <Link href="/contact-us" style={{ textDecoration: 'none' }}>
              <Button rounded size="xl" color="warning">
                Know more
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgramComponent;
