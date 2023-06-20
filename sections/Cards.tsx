export interface props {
  textUnder: string;
  card: {
    image: string;
    title: string;
    description: string;
  }[];
}

export default function Card({ textUnder, card }: props) {
  return (
    <div id="Cards">
      <div className={"flex items-center flex-col w-[90%] mx-auto"}>
        <p id={"TitleCards"} className={"flex flex-col lg:flex-row items-center lg:text-[64px] text-[32px] text-center max-w-[250px] lg:max-w-[100%]"}>
          <svg class="h-[46px] w-[156px]">
            <use href="/icons.svg#Logo" />
          </svg>
          <strong>is the platform of choice for</strong>
        </p>
        <p
          className={"text-[#F3FFF9] text-[32px] mb-[60px] lg:mb-[90px] max-w-[80%] flex text-center flex-col lg:text-[64px]"}
        >
          next generation digital experiences
        </p>
      </div>
      <div
        className={"flex items-center flex-col mx-auto w-[90%] lg:max-w-[90%] lg:flex-row lg:items-center lg:justify-around"}
      >
        {card.map((item, index) => (
          <div
            className={"flex flex-col mb-[40px] bg-[#ffffff17] w-[90%] py-[20px] rounded-[12px] lg:items-center lg:w-[fit-content] lg:px-[20px]"}
            key={index}
          >
            <div className={"flex flex-col items-center lg:items-center"}>
              <img
                src={item.image}
                alt=""
                className={"mb-[20px] lg:mb-[40px] lg:w-[309px]"}
              />
              <h2
                className={"text-white text-[32px] mb-[20px] font-semibold lg:text-[43px]"}
              >
                {item.title}
              </h2>
              <p
                className={"text-white max-w-[284px] text-[20px] lg:text-[24px] text-center lg:max-w-[332px]"}
                dangerouslySetInnerHTML={{ __html: item.description }}
              >
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
