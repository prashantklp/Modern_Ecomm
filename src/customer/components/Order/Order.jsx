import React from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "On the way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
];

function Order() {
    return (
        <div className="px-10 py-6 mx-auto"> {/* Wider container with padding */}
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {/* Left Filter Panel */}
                <Grid item xs={12} md={3}>
                    <div className="h-auto shadow-lg bg-white p-6 sticky top-5 rounded-md">
                        <h1 className="font-bold text-lg mb-6">Filter</h1>

                        <div className="space-y-5">
                            <h2 className="font-semibold text-md mb-2">ORDER STATUS</h2>

                            {orderStatus.map((option, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        id={option.value}
                                        value={option.value}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        htmlFor={option.value}
                                        className="ml-3 text-sm text-gray-600"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    <OrderCard/>    

                </Grid>
            </Grid>
        </div>
    );
}

export default Order;
