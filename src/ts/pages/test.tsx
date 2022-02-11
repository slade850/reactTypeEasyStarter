import React from "react";
import { useStoreState } from "../store/hooks";
import Add from "../components/Add";

const Test = () => {
  const count = useStoreState((state) => state.count.count);
  return (
    <>
      <h1>Test</h1>
      <h2>{count}</h2>
      <Add />
    </>
  );
};

export default Test;
