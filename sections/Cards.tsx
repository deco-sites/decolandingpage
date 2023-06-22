import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  textUnder: string;
  card: {
    image: Image;
    title: string;
    description: string;
  }[];
}

export interface Image {
  src: LiveImage;
  alt: string;
  width: number;
  height: number;
}

export default function Card({ textUnder, card }: Props) {
  return (
    <div id="Cards">
      <div className={"flex items-center flex-col w-[90%] mx-auto"}>
        <p
          id={"TitleCards"}
          className={"flex flex-col lg:flex-row items-center lg:text-[64px] text-[32px] text-center max-w-[250px] lg:max-w-[100%] lg:leading-[125%] leading-[120%] gap-1 lg:gap-[0.2em]"}
        >
          <svg class="h-[40px] w-[88px] lg:h-[46px] lg:w-[156px]">
            <use href="/icons.svg#Logo" />
          </svg>
          <strong>is the platform of choice for</strong>
        </p>
        <p
          className={"text-[#F3FFF9] text-[32px] mb-[60px] lg:mb-[90px] max-w-[80%] flex text-center flex-col lg:text-[64px] font-[600] lg:leading-[125%] leading-[120%]"}
        >
          next generation digital experiences
        </p>
      </div>
      <div
        className={"flex items-center flex-col mx-auto w-[90%] lg:max-w-[90%] lg:flex-row lg:items-stretch lg:justify-around lg:gap-10 text-center"}
      >
        {card.map((item, index) => (
          <div
            className={"flex flex-col mb-[40px] bg-[#ffffff17] w-[90%] py-[32px] px-[12px] rounded-[12px] lg:items-center lg:w-[fit-content] lg:px-[20px]"}
            key={index}
          >
            <div className={"flex flex-col items-center lg:items-center"}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                className={"mb-[20px] lg:mb-[40px] lg:w-[309px]"}
                width={item.image.width}
                height={item.image.height}
              />
              <h2
                className={"text-white text-[32px] mb-[20px] font-semibold lg:text-[43px] leading-[120%]"}
              >
                {item.title}
              </h2>
              <p
                className={"text-white max-w-[284px] text-[20px] lg:text-[24px] text-center lg:max-w-[275px] lg:min-h-[144px] leading-[130%]"}
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
