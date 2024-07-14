import { useEffect, useState } from "react";

function CounterPage({ countersData, speed }) {
  const [counters, setCounters] = useState(countersData.map(() => 0));

  useEffect(() => {
    const intervals = countersData.map((data, index) =>
      setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index] < data.target) {
            newCounters[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounters;
        });
      }, speed)
    );

    return () => intervals.forEach(clearInterval);
  }, [countersData, speed]);
  return (
    <>
      <div className=" py-[96px] h-fit flex justify-center items-center w-full">
        <section className=" rounded-[16px] gap-[32px] 100:flex-col md:flex-row flex justify-between items-center 100:w-[85%] h-fit bg-[#EEFFFC] 100:py-[24px] 100:px-[16px] lg:p-[64px]  xl:w-[1200px] ">
          {countersData.map((data, index) => (
            <div key={index} className=" flex justify-center gap-[12px] w-full items-center flex-col">
              <h2 className=" font-semibold tracking-[-2%] leading-[72px] 100:text-[40px] lg:text-[60px] text-[#9C19FF]">
                {data.prefix}
                {counters[index]}
                {data.suffix}
              </h2>
              <p className=" whitespace-nowrap leading-[28px] text-[18px] font-medium text-[#101828] ">{data.label}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default CounterPage;
