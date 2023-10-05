//----------------------- 1- App -------------------------------
// import React from "react"
// // let redux = require('redux');
// import redux from 'redux'
// // let createStore = redux.createStore

// let CAKE_ORDERED = 'CAKE_ORDERED';

// //----------------------- 2- Action -------------------------------
// export default function Index(){

// let orderCake = ()=>{
//     return{
//         type:CAKE_ORDERED,
//         quintity:1,
//     }
// }

// let initialStore = {
//     numofCakes:10
// }
// //----------------------- 3- reducer -------------------------------
// let reducer =(state = initialStore,action)=>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 numofCakes:numofCakes - 1  
//             }
//             default:
//                 return state
//     }
// }
// //----------------------- 4- Store -------------------------------
// let store = createStore(reducer);
// console.log("initial state ", store.getState());

// let unsubscribe = store.subscribe(() =>{
//     return (
//         <h2>{store.getState()}</h2>
//     )
// })

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// unsubscribe();



// }











import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
reducer:{},
});












































