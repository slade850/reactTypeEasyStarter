import { action } from "easy-peasy";
import { CountModel } from "./type";

const countModel: CountModel = {
  count: 0,
  addOne: action((state) => {
    state.count++;
  }),
  subtractOne: action((state) => {
    state.count--;
  }),
};

export default countModel;
