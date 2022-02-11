import React from "react";
import { useStoreState } from "../store/hooks";
import Subtract from "../components/Substract";

const Home = () => {
  const count = useStoreState((state) => state.count.count);
  const machin = process.env.TEST;
  return (
    <>
      <h1>Home</h1>
      <h2>{count}</h2>
      <h3>{machin}</h3>
      <Subtract />
    </>
  );
};

export default Home;
