import React from "react";
import { useStoreActions } from "../store/hooks";

const Add = () => {
  const addOne = useStoreActions((actions) => actions.count.addOne);

  return (
    <div>
      <button onClick={() => addOne(undefined)}>add</button>
    </div>
  );
};

export default Add;
