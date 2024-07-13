import { useState } from "react";

const useCounter = () => { 
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };

  return {increase, decrease, count}
} 
 export default useCounter