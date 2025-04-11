import React from 'react';
import { Grid } from '@mui/material';
// import AdjustIcon from '@mui/icons-material/Adjust';

function OrderCard() {
  return (
    <div className="w-full bg-white p-6 rounded-md shadow-md mb-6">
      <Grid container className="w-full" alignItems="center" justifyContent={'space-evenly'}>
        
        {/* LEFT: Product Image + Info */}
        <Grid item xs={12} md={8}>
          <div className="flex items-center">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/jsj90280/kurta/j/z/g/l-mtmkos0004-326-manthan-original-imafe35wha5ry36p.jpeg?q=70"
              alt="product"
            />
            <div className="ml-4 space-y-1">
              <p className="font-medium">Mens slim body black jeans</p>
              <p className="text-xs text-gray-500 font-semibold">Size: M</p>
              <p className="text-xs text-gray-500 font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        {/* RIGHT: Price + Delivery Status */}
        <Grid item xs={12} md={4}>
          <div className="flex flex-col items-end space-y-2">
            <p className="font-semibold text-lg">₹1827</p>
            <div className="flex items-center">
              {/* <AdjustIcon sx={{ width: 16, height: 16 }} className="text-green-600 mr-2" /> */}
              <span className="text-sm text-gray-700">Delivered on March 03</span>
            </div>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default OrderCard;
