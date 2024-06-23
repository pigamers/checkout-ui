'use client'
import { useState } from 'react'
import Image from "next/image";

export default function Hero() {
  const [isCreditCardOpen, setIsCreditCardOpen] = useState(false)
  const [isDebitCardOpen, setIsDebitCardOpen] = useState(false)
  const [isNetbankingOpen, setIsNetbankingOpen] = useState(false)
  const [isUpiOpen, setIsUpiOpen] = useState(false)
  return (
    <div className="bg-[#E9F2F9] font-jakarta pb-16">
      <h1 className="px-12 pt-8 pb-4 text-4xl font-bold mx-3 text-[#0B2C4B]">
        Checkout
      </h1>
      <div className="flex flex-row justify-between px-12 mx-3">
        <div className="flex flex-col gap-6">
          <div class="w-[720px] rounded-md border-[#7DB1D1] border">
            <div class="p-6">
              <h1 class="text-xl font-semibold text-[#0B2C4B]">Billing Information</h1>
              <p class="mt-3 text-sm">
                We use this information to register your order, and secure your identity.
              </p>
              <ul className="mt-3 font-medium">
                <li className="text-lg">Aman Bansal</li>
                <li className="text-sm">Gurgaon sector-01, 832145</li>
                <ul className="flex items-center justify-between">
                  <li className="text-sm">9123413214 - amangpt04@gmail.com</li>
                  <li className="text-sm underline text-[#1B72B1]">Edit</li>
                </ul>
              </ul>
            </div>
          </div>
          <div>
            <div class="w-[720px] rounded-md border-[#7DB1D1] border">
              <div class="p-6">
                <h1 class="text-xl font-semibold text-[#0B2C4B]">Payments</h1>
                <ul className="flex items-center justify-between gap-5 py-4">
                  <li>
                    <button className={` ${isCreditCardOpen ? "bg-[#F8F8F8]" : " "} flex items-center whitespace-nowrap gap-3 py-3 px-5 border border-[#1B72B1]`} onClick={() => {
                      setIsCreditCardOpen(!isCreditCardOpen)
                      setIsDebitCardOpen(false)
                      setIsNetbankingOpen(false)
                      setIsUpiOpen(false)
                    }}>
                      <Image src="/vectors/card.png" width={25} height={25} />
                      Credit Card
                    </button>
                  </li>
                  <li>
                    <button className={` ${isDebitCardOpen ? "bg-[#F8F8F8]" : " "} flex items-center whitespace-nowrap gap-3 py-3 px-5 border border-[#1B72B1]`} onClick={() => {
                      setIsCreditCardOpen(false)
                      setIsDebitCardOpen(!isDebitCardOpen)
                      setIsNetbankingOpen(false)
                      setIsUpiOpen(false)
                    }}>
                      <Image src="/vectors/card.png" width={25} height={25} />
                      Debit Card
                    </button>
                  </li>
                  <li>
                    <button className={` ${isNetbankingOpen ? "bg-[#F8F8F8]" : " "} flex items-center whitespace-nowrap gap-3 py-3 px-5 border border-[#1B72B1]`} onClick={() => {
                      setIsCreditCardOpen(false)
                      setIsDebitCardOpen(false)
                      setIsNetbankingOpen(!isNetbankingOpen)
                      setIsUpiOpen(false)
                    }}>
                      <Image src="/vectors/bank.png" width={25} height={25} />
                      Netbanking
                    </button>
                  </li>
                  <li>
                    <button className={` ${isUpiOpen ? "bg-[#F8F8F8]" : " "} flex items-center whitespace-nowrap gap-3 py-3 px-5 border border-[#1B72B1]`} onClick={() => {
                      setIsCreditCardOpen(false)
                      setIsDebitCardOpen(false)
                      setIsNetbankingOpen(false)
                      setIsUpiOpen(!isUpiOpen)
                    }}>
                      <div className="relative">
                        <Image src="/vectors/bhimo.png" width={12} height={20} className="absolute" />
                        <Image src="/vectors/bhimg.png" width={12} height={20} className="ml-1" />
                      </div>
                      UPI
                    </button>
                  </li>
                </ul>
                <p className={`${isCreditCardOpen || isDebitCardOpen || isNetbankingOpen || isUpiOpen ? "hidden" : "block"}`}>Select your method of payment.</p>

                {/* Dhyan Rakhna */}

                {(isCreditCardOpen || isDebitCardOpen) &&
                  <div className='flex flex-col gap-3 my-2'>
                    <div className="relative flex border-[#1B72B1] border">
                      <span className="inline-flex items-center p-4 text-gray-900 border">
                        <Image src="/vectors/card.png" width={25} height={25} />
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="bg-transparent block flex-1 min-w-0 text-sm border-l-[#1B72B1] border p-3"
                        placeholder="Card Number"
                        required
                      />
                      <span className="text-red-500 absolute right-[495px] top-1/2 transform -translate-y-1/2">*</span>
                    </div>

                    <div className="relative flex border-[#1B72B1] border">
                      <input
                        type="text"
                        inputMode='numeric'
                        className="rounded-none bg-transparent block flex-1 min-w-0 w-full text-sm p-4" placeholder="Expiry Date"
                        required
                      />
                      <span className="text-red-500 absolute right-[565px] top-1/2 transform -translate-y-1/2">*</span>
                      <input
                        type="text"
                        inputMode='numeric'
                        className="rounded-none bg-transparent block flex-1 min-w-0 w-full text-sm border-l-[#1B72B1] border p-4"
                        placeholder="CVV"
                        required
                      />
                      <span className="text-red-500 absolute right-[275px] top-1/2 transform -translate-y-1/2">*</span>
                    </div>
                    <div className='flex items-center justify-around gap-5'>
                      <button className='bg-[#7DB1D1] w-1/2 py-3 border border-[#1B72B1] text-white'>Save Payment</button>
                      <button className='bg-[#F8F8F8] w-1/2 py-3 border border-[#1B72B1] text-[#7DB1D1]'>Cancel</button>
                    </div>
                    <p className='text-center'>
                      By clicking "Save Payment" you agree to have your payment instrument secured in compliance with RBI regulations, if supported, and the tokenized payment details saved as your default method of payment for future purchases and/or subscription renewals. You can always change your preferences later.
                    </p>
                  </div>
                }
                {isNetbankingOpen &&
                  <div className='flex flex-col gap-3 my-2'>
                    <div className="flex relative border-[#1B72B1] border">
                      <span className="inline-flex items-center p-4 border border-r-[#1B72B1]">
                        <Image src="/vectors/card.png" width={25} height={25} />
                      </span>
                      <input
                        type="text"
                        inputMode='numeric'
                        className="bg-transparent block flex-1 min-w-0 text-sm p-3"
                        placeholder="Select your Bank"
                        required
                      />
                      <span className="text-red-500 absolute right-[475px] top-1/2 transform -translate-y-1/2">*</span>
                      <div className='p-2 m-auto'>
                        <Image src="/vectors/drop.png" width={25} height={10} />
                      </div>
                    </div>
                    <div className='flex items-center justify-around gap-5'>
                      <button className='bg-[#7DB1D1] w-1/2 py-3 border border-[#1B72B1] text-white'>Save Payment</button>
                      <button className='bg-[#F8F8F8] w-1/2 py-3 border border-[#1B72B1] text-[#7DB1D1]'>Cancel</button>
                    </div>
                    <p className='text-center'>
                      By clicking "Save Payment" you agree to have your payment instrument secured in compliance with RBI regulations, if supported, and the tokenized payment details saved as your default method of payment for future purchases and/or subscription renewals. You can always change your preferences later.
                    </p>
                  </div>
                }
                {isUpiOpen &&
                  <div className='flex flex-col gap-3 my-2'>
                    <div className="flex relative border-[#1B72B1] border">
                      <input 
                      type="text" 
                      inputMode='numeric' 
                      className="bg-transparent block flex-1 min-w-0 text-sm border-[#1B72B1] border p-3" 
                      placeholder="Enter your UPI ID" 
                      required
                      />
                      <span className="text-red-500 absolute right-[535px] top-1/2 transform -translate-y-1/2">*</span>
                    </div>
                    <div className='flex items-center justify-around gap-5 py-3'>
                      <button className='bg-[#7DB1D1] w-1/2 py-3 border border-[#1B72B1] text-white'>Save Payment</button>
                      <button className='bg-[#F8F8F8] w-1/2 py-3 border border-[#1B72B1] text-[#7DB1D1]'>Cancel</button>
                    </div>
                    <p className='text-center'>
                      By clicking "Save Payment" you agree to have your payment instrument secured in compliance with RBI regulations, if supported, and the tokenized payment details saved as your default method of payment for future purchases and/or subscription renewals. You can always change your preferences later.
                    </p>
                  </div>
                }
              </div>
            </div>

          </div>
        </div>
        <div className="pb-10 mb-10">
          <div class="w-[460px] rounded-md border bg-white">
            <div class="p-4">
              <div className="flex justify-between px-2 py-1">
                <h1 class="text-lg font-semibold">Order Summary</h1>
                <h2>( 3 items )</h2>
              </div>
              <div className="flex flex-row justify-between px-2 py-4">
                <ul className="space-y-3">
                  <li>Total Prices</li>
                  <li>Discount</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-1">
                    <Image src="/vectors/rupiblack.png" height={10} width={10} />
                    4437.00
                  </li>
                  <li className="flex items-center gap-1 text-[#2CA92A]">
                    <Image src="/vectors/rupi.png" height={10} width={10} />
                    1500.00
                  </li>
                </ul>
              </div>
              <hr className="border-black mx-2" />
              <div className="flex justify-between font-bold px-2 py-4">
                <h1>Total Amount</h1>
                <h2 className="flex items-center gap-1">
                  <Image src="/vectors/rupiblack.png" height={10} width={10} />
                  2997.00
                </h2>
              </div>
              <p className="text-center py-3">Prices are inclusive of applicable taxes</p>
              <p className="text-center font-semibold underline py-3">Have a Promo Code ?</p>
              <div className="px-3 py-4">
                <button className="bg-[#1B72B1] w-full rounded py-2 text-white">
                  Place Order
                </button>
              </div>
              <div className="flex justify-between font-bold px-4 py-1">
                <h1 className="flex items-center gap-1">
                  <Image src="/vectors/lock.png" height={10} width={15} />
                  Secure Payments
                </h1>
                <ul className="flex items-center gap-1">
                  <li>
                    <Image src="/vectors/upi.png" height={15} width={40} />
                  </li>
                  <li>
                    <Image src="/vectors/mastercard.png" height={10} width={25} />
                  </li>
                  <li>
                    <Image src="/vectors/visa.png" height={10} width={35} />
                  </li>
                  <li>
                    <Image src="/vectors/gpay.png" height={10} width={35} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="flex items-center gap-2 justify-center py-3 mt-5">
            <Image src="/vectors/blacktick.png" height={10} width={20} />
            Satisfaction Guaranteed
          </p>
          <p className="text-center max-w-sm m-auto text-sm">
            If you're not completely happy with your purchase,
            contact us, and we'll make it right.
          </p>
        </div>
      </div>
    </div>
  )
}
