import Image from 'next/image';
import imgAgentProgram from 'public/images/agent-program.png';

const AgentProgramComponent = () => {
  return (
    <div className="contact-wrap-custom">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 partners-conent py-1">
          <br />
          <h2>Agent Program</h2>
          <p />
          <p>Build your own business</p>
          <p>
            Becoming a Paytriot agent will enable you to build and operate your
            own business with very high long-term income potential. Our agent
            program offers the support of a provider that brings you
            unparalleled products and services, training, marketing, reporting
            and brand name recognition without the cost of registering as an
            ISO. Each merchant account in your portfolio has a value based on
            monthly revenue received from that merchant, so you can build a
            revenue stream and grow your own profitable business.
          </p>
          <ul>
            <li>&#8594; Full Training</li>
            <li>&#8594; Work in your own time</li>
            <li>&#8594; Monthly Revenue Stream</li>
            <li>&#8594; Monthly Reporting</li>
            <li>&#8594; Paytriot Gateway technology</li>
            <li>&#8594; Build your own portfolio</li>
            <li>&#8594; Use our existing relationships</li>
            <li>&#8594; Huge earning potential</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <Image
            style={{ paddingTop: '4rem', height: 'auto', maxWidth: '100%' }}
            alt=""
            src={imgAgentProgram}
          />
        </div>
      </div>
    </div>
  );
};
export default AgentProgramComponent;
