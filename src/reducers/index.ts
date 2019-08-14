// Need to match data structures, but should interfaces here JUST be for components????
// How would that even look???

import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { pokeReducer } from "./poke.reducer";
import { User, Rental, Car } from "../models/AppModels";
import { user0Reducer } from "./user.reducer";
import { userReducer } from "./user-reducer";

export interface IUserState { // state of user profile component
    thisUser: User, //user's info
    rentals: Rental[], //list of user's rentals
    page: number //current page of rental list we're on, maybe should just be a state to the component alone
}

//general rental search state... list of current 10 available rentals and page the user is on???
//managers should have something similar to user, except their state will include data of the current user
//they are editing, basically inheriting a new IUserState but for their target. A list of users. And a list of all rentals
import { getAllCarsReducer } from "./car-reducer";
import { getAllRentalsReducer } from "./rental-reducer";


export interface IManageCarState {
    cars: Car[],
    page: number
}
export interface IManagerUserState {
    users: User[],
    page: number
}

export interface IManageRentalState {
    rentals: Rental[],
    page: number
}
export interface IClickerState { // set state interface of clicker
    clicks: number
};

export interface IPokeState { // set state interface of poke
    name: string;
    id: number;
    spriteUrl: string;
    types: string[];
    inputValue: string; // Do we consider the current state of input as application state?
    loadingNewPoke: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    clicker: IClickerState,
    poke: IPokeState,
    userProfile: IUserState,
    carComponent: IManageCarState,
    userComponent: IManagerUserState,
    rentalComponent: IManageRentalState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    poke: pokeReducer,
    userProfile: user0Reducer,
    carComponent: getAllCarsReducer,
    userComponent: userReducer,
    rentalComponent: getAllRentalsReducer
})