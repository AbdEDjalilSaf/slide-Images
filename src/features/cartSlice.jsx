import { createSlice } from "@reduxjs/toolkit";

let intialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading:true
}


let cartSlice  = createSlice({
    name:'cart',
    intialState
})

console.log(cartSlice);




















