import React, { useState } from "react";

export default () => {
  const [state, setState] = useState(0);

  return <><button onClick={() => setState(state + 1)}>Increment</button><div>{state}</div></>;
}