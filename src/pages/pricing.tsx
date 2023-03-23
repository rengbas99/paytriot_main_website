import PricingHeader from '@/components/pricing-page/PricingHeader';
import TabsContainer from '@/components/pricing-page/TabsContainer';
import Head from 'next/head';
// import Script from "next/script";

export default function Pricing() {
  return (
    <>
      <main>
        <Head>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Pricing | Paytriot</title>
        </Head>
        <PricingHeader />
        <TabsContainer />
      </main>
    </>
  );
}
