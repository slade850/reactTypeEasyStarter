import { createStore } from "easy-peasy";
import { StoreModel } from "./type";
import countModel from "./count";

export const store = createStore<StoreModel>({ count: countModel });
