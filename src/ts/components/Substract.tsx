import React from "react";
import { useStoreActions } from "../store/hooks";

const Subtract = () => {
  const subtractOne = useStoreActions((actions) => actions.count.subtractOne);

  return (
    <div>
      <button onClick={() => subtractOne(undefined)}>subtract</button>
    </div>
  );
};

export default Subtract;
