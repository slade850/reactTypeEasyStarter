import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "./type";

export const { useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<StoreModel>();
