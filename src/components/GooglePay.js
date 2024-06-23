import React from 'react'
import GooglePayButton from '@google-pay/button-react';

export default function GooglePay() {
  return (
    <div>
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
    </div>
  )
}