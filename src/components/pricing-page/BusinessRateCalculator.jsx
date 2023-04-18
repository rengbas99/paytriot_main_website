import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#F7931E',
  },

  tooltip: {
    backgroundColor: '#F7931E',
    height: '25px',
    fontWeight: 'bold',
    fontSize: 14,
    '& .MuiTooltip-arrow': {
      color: '#F7931E',
    },
  },
  mark:{
    color: '#F7931E'
  },
}));


function BusinessRateCalculator() {
  const classes = useStyles();
  const [monthlyBilling, setMonthlyBilling] = useState(true);
  const [domesticPlan, setDomesticPlan] = useState(true);
  const [price, setPrice] = useState(10000);

  const marks = [
    {
      value: 10000,
    },
    {
      value: 30000,
    },
    {
      value: 50000,
    },
    {
      value: 100000,
    },
  ];

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleBillingChange = event => {
    const newValue = event.target.value === 'true';
    if (newValue !== monthlyBilling) {
      setMonthlyBilling(newValue);
    }
  };

  const handlePlanChange = event => {
    const newValue = event.target.value === 'true';
    if (newValue !== domesticPlan) {
      setDomesticPlan(newValue);
    }
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;
    const classes = useStyles();
  
    return (
      <Tooltip
        classes={classes}
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={`${price}/month`}
        arrow={true}
      >
        {children}
      </Tooltip>
    );
  }

  const calculateTotal = () => {
    let total = price;
    if(domesticPlan){
      if(price === 10000){
        total = 29
      }else if(price === 30000){
        total = 39
      }else if(price === 50000){
        total = 59
      } else if(price === 100000){
        total = 99
      }
    }else{
      if(price === 10000){
        total = 49
      }else if(price === 30000){
        total = 69
      }else if(price === 50000){
        total = 99
      } else if(price === 100000){
        total = 139
      }
    }
    console.log(total)
    if(!monthlyBilling){
      total = total - (total * 0.15)
    }
    return total >= 0 ? total : 0;
  };

  return (
    <div className="business-tab">
      <div className="row">
        <div className="col-lg-8 price-range">
          <h3 className="mb-5 fw-bold text-capitalize">Estimate Your Cost</h3>
          <div className="d-lg-flex mb-5">
            <div className="w-100 me-lg-3 mb-3 mb-lg-0">
              <div className="p-16 mb-2">Plan</div>
              <select
                className="form-select"
                // id="trans-dom"
                aria-label="Default select example"
                // onChange={onChange2}
                onChange={handlePlanChange}
              >
                {/* <option selected>Open this select menu</option> */}
                <option value={true} defaultValue={true}>
                  Domestic Transactions
                </option>
                <option value={false}>UK and Europe transactions</option>
              </select>
            </div>
            <div className="w-100 ms-lg-3">
              <div className="p-16 mb-2">Billing</div>
              <select
                className="form-select"
                id="pricingplan"
                aria-label="Default select example"
                onChange={handleBillingChange}
              >
                {/* <option selected>Open this select menu</option> */}
                <option value={true} defaultValue={true}>
                  Monthly
                </option>
                <option value={false}>Yearly</option>
              </select>
            </div>
          </div>
          <Slider
            color = '#F7931E'
            className={classes.root}
            value = {price}
            onChange={handleChange}
            valueLabelDisplay="on"
            ValueLabelComponent={ValueLabelComponent}
            aria-label = "Restricted values"
            defaultValue={10000}
            step={null}
            marks={marks}
            min={0}
            max={100000}
          />
          <div className="d-flex justify-content-end my-3">
            {!monthlyBilling && (
              <div
                className="disc-label text-center "
                style={{
                  backgroundColor: '#F7931E',
                  color: 'white'
                }}
              >
                15% off
              </div>
            )}
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4">
            <p className="p-16" id="transplan">
              Plan - {monthlyBilling ? 'Monthly' : 'Yearly'}
            </p>
            <div className="d-flex">
              <div className="p-16 result-js">Total: {price}</div>
            </div>
          </div>
          <div className="d-flex flex-wrap items-center justify-content-between mb-4">
            <p className="p-16">Total</p>
            <div className="d-flex">
              <p className="p-17 fw-bold text-center space-after-pound">{'£'}</p>
              <div className="p-16  fw-bold text-center " id="totalmonth">
                 { calculateTotal()}
              </div>
              <p className="p-16 fw-bold">/mo</p>
            </div>
          </div>
        </div>
        <div className="col plans-detail">
          <h3 className="mb-3 text-white">All plans include</h3>
          <ul className="ps-0">
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Payment Gateway
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Accept Visa and MasterCard
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Transactions in UK
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Dashboard
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Customer Receipt Notifications
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Accounting integration
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Seamless integrations
            </li>
            <li className="d-flex align-items-center mb-2">
              <div className="icon me-2">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM19.291 9.99961L13.5324 17.984C13.4519 18.0963 13.3458 18.1879 13.2229 18.251C13.1 18.3141 12.9638 18.3471 12.8256 18.3471C12.6874 18.3471 12.5512 18.3141 12.4283 18.251C12.3053 18.1879 12.1992 18.0963 12.1188 17.984L8.70898 13.259C8.60508 13.1141 8.70898 12.9117 8.88672 12.9117H10.1691C10.448 12.9117 10.7133 13.0457 10.8773 13.2754L12.8242 15.977L17.1227 10.016C17.2867 9.78906 17.5492 9.65234 17.8309 9.65234H19.1133C19.291 9.65234 19.3949 9.85469 19.291 9.99961Z"
                    fill="white"
                  />
                </svg>
              </div>
              Customer Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BusinessRateCalculator;
