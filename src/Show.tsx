import React, { useMemo, useState } from "react";
function Show() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState(1);
  let a = 1;
  const show = useMemo(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+{count}--counter</button>
      <button onClick={() => setVal(val + 1)}>+{val}--val</button>
    </div>
  );
}

export default Show;
