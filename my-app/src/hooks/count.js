import React, {useState} from "react";

const useCounter = ({startPoint}) => {
    const[count,setCounter] = useState(startPoint);

    const oddIncreaseCount = () => {
        setCounter((prev) => (count % 2 === 0 ? count + 1 : count + 2));
    }

    const evenIncreaseCount = () => {
        setCounter((prev) => (count % 2 === 0 ? count + 2 : count + 1));
    }

    return [count,oddIncreaseCount,evenIncreaseCount];
}

export default useCounter;