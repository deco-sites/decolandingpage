export interface props {
  text: string;
  devsCircle: {
    image: string;
    name: string;
    link: string;
  }[];
}

export default function MadeBy({ text, devsCircle }: props) {
  return (
    <div id="MadeBy">
      <div className={"flex items-center flex-col"}>
        <h2
          className={"text-white text-[32px] mb-[50px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[100px] lg:mb-[100px] flex-col flex"}
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </h2>
      </div>

      <div
        className={"flex flex-col items-center justify-center w-[100vw] lg:w-[auto] overflow-auto"}
      >
        <div
          className={"flex w-[100vw] lg:w-[auto] lg:flex-wrap lg:justify-center lg:gap-x-[100px] gap-y-[20px] mb-[45px] lg:mb-[120px]"}
        >
          {devsCircle.map((dev, index) => (
            <div
              key={index}
              className={"flex flex-col items-center justify-center m-[20px]"}
            >
              <a href={dev.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className={"w-[76px] min-w-[76px] h-[76px] rounded-full lg:min-w-[95px] lg:min-h-[95px] lg:w-[95px]"}
                />
              </a>
              <p className={"text-white text-[16px] font-[400] mt-[20px]"}>
                {dev.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
