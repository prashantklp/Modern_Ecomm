import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

function OrderSummary() {
  return (
    <div>
      

      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>

      <div>
      
            <div className='lg:grid grid-cols-3 relative'>
              <div className='col-span-2'>
              {[1,1,1,1].map((item)=> <CartItem/>)}
              </div>
              <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
      
              <div className='border mt-7'>
                <p className='uppercase font-bold opacity-60 pb-4 '>Price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
      
                  <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>₹8768</span>
                  </div>
                  <div className='flex justify-between pt-3'>
                    <span>Discount</span>
                    <span className='text-green-600'>-₹8768</span>
                  </div>
                  <div className='flex justify-between pt-3 '>
                    <span>Delivery charge</span>
                    <span className='text-green-600'>free</span>
                  </div>
                  <div className='flex justify-between pt-3 font-bold'>
                    <span>Total amount</span>
                    <span className='text-green-600'>₹3982</span>
                  </div>
      
                </div>
                <Button variant="contained" className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#915fd" }}>
                  Checkout
                </Button>
              </div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default OrderSummary
