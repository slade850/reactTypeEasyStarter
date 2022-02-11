import { Action } from "easy-peasy";

export interface StoreModel {
  count: CountModel;
}

export interface CountModel {
  count: number;
  addOne: Action<CountModel, number | undefined>;
  subtractOne: Action<CountModel, number | undefined>;
}
