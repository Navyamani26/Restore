import type { PaymentIntent } from "@stripe/stripe-js";
import type { PaymentSummary, ShippingAddress } from "../app/models/order";
import { add } from "date-fns";

export function currencyFormart(amount: number){
    return '$' +(amount/100).toFixed(2);
}

export function filterEmptyValues(values: object){
    return  Object.fromEntries(
                    Object.entries(values).filter(
                        ([,value]) => value !== '' && value !== null
                        && value !== undefined && value.lenght !== 0 
                    )
                )
}

export const formatAddressString = (address: ShippingAddress) => {
     return `${address?.name}, ${address?.line1}, ${address?.city}, 
        ${address?.state}, ${address?.postal_code}, ${address?.country}`
  }

  export const formatPaymentString = (card: PaymentSummary) => {
        return `${card?.brand?.toUpperCase()}, **** **** **** ${card?.last4}, 
        Exp: ${card?.exp_month}/${card?.exp_year}`
   
  }