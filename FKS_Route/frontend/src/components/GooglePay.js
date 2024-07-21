import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import {Form} from 'react-router-dom';

export default function GooglePay() {
  return (
    <Form method="post">
    <div>
      <span style={{textAlign:'center'}}><h4>Registraion Successfully done you need to pay Kundali Charges & then juwithin 15days you will get kundali by courier</h4></span>
        <GooglePayButton
              environment='TEST' // PRODUCTION
              paymentRequest={
                {
                  apiVersion:2,
                  apiVersionMinor:0,
                  allowedPaymentMethods:[
                    {
                       type:"CARD",
                       parameters:{
                        allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
                        allowedCardNetworks:["MASTERCARD","VISA"]
                       },
                       tokenizationSpecification:{
                        type:"PAYMENT_GATEWAY",
                        parameters:{
                          gateway:"example", //
                         // gatewayMerchantId:"exampleGateMerchantID"
                        }
                       } 
                    }
                  ],
                  merchantInfo:{    //provide the merchant info here
                    merchantId:"123456789",
                    merchantName:"Demo Merchant"
                  },
                  transactionInfo:{
                    totalPriceStatus:"FINAL",
                    totalPriceLabel:"Total",
                    totalPrice:"1",
                    currencyCode:"INR",
                    countryCode:"IN"
                  },
                  shippingAddressRequired:false,
                  callbackIntents:["PAYMENT_AUTHORIZATION"]
                }
              }
              onLoadPaymentData={paymentRequest=>{
                console.log(paymentRequest);
              }}
              onPaymentAuthorized={
                paymentData =>{
                  console.log(paymentData);
                  return {transactionState :'SUCCESS'}
                }
              }
              existingPaymentMethodRequired='false'
              buttonColor='Black'
            />
            <div className="row mb-3" >
              <div className="text-center button-make" style={{float: 'right',padding:'5px'}}>
              <button className="btn btn-outline-dark">Send Notification Email</button>
              </div>
            </div>
    </div>
    </Form>
  )
}