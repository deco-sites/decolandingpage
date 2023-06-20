export interface props {
  principalText: string;
  description: string[];
}

export default function LoseSales({ principalText, description }: props) {
  return (
    <div
      id="LoseSales"
      style={{
        "background":
          "linear-gradient(180deg, rgba(94, 61, 232, 0.2) 0%, rgba(247, 25, 99, 0.2) 100%)",
      }}
    >
      <div className={"flex items-center flex-col  mx-auto w-[90%]"}>
        <h2
          className={"text-white text-[32px] mb-[20px] lg:mb-[40px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[154px]"}
        >
          {principalText}
        </h2>
        <div
          className={"text-center flex flex-col lg:flex-row lg:flex lg:mb-[165px] gap-y-[36px] gap-x-[36px] mb-[40px]"}
        >
          {description.map((item, index) => (
            <p
              className={"text-[#F3FFF9] text-[22px] text-center lg:text-[40px] max-w-[300px]"}
              key={index}
            >
              {item}
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
