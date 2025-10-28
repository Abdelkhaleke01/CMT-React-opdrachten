import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  console.log(currentTime);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalid)
    }
  }, []);

  return (
    <h2>{currentTime.toLocaleTimeString()}</h2>
  );
}

export default Clock;