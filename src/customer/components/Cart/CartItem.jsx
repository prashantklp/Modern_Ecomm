import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md mt-7">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
            alt="Kurta" />
        </div>

        <div className='ml-5 space-y-1'>

          <p className='font-semibold'>Mens slim Mid rise black jeans</p>
          <p className='opacity-70'>Size: L,White</p>
          <p className='opacity-70 mt-2'>Seller: Cristaliyo 2fashion</p>
          <div className='flex space-x-5 items-center text-gray-900 pt-6'>

            <p className='font-semibold '>
              ₹199
            </p>
            <p className='opacity-50 line-through'>
              ₹211
            </p>
            <p className='text-green-600 font-semibold'>
              5% Off
            </p>
          </div> 
        </div> 
      </div>

      <div className='lg:flex items-center lg:spaxe-x-10 pt-4 '>

            <div className='flex items-center space-x-2'>

              <IconButton>
              <RemoveCircleOutlineIcon/>
              </IconButton>
              <span className='py-1 px-7 border rounded-sm'>3</span>
              <IconButton sx={{color:"RGB(145 8 253)"}}>
              <AddCircleOutlineIcon/>
              </IconButton>
            </div>
            <div className='ml-5'>
              <Button sx={{color:"RGB(145 8 253)"}}>Remove</Button>
            </div>
          </div>

    </div>
  );
}

export default CartItem;
