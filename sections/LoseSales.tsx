import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  principalText: string;
  bullets?: {
    icon?: LiveImage;
    text?: string;
  }[]
}

export default function LoseSales({ principalText, bullets }: props) {
  return (
    <div
      id="LoseSales"
      style={{
        "background":
          "linear-gradient(180deg, rgba(94, 61, 232, 0.2) 0%, rgba(247, 25, 99, 0.2) 100%)",
      }}
    >
      <div className={"flex items-center flex-col gap-8 lg:gap-16 mx-auto w-[90%]"}>
        <h2
          className={"text-white text-[32px] mb-[20px] lg:mb-[40px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[154px] leading-[125%]"}
        >
          {principalText}
        </h2>
        <div
          className={"text-center flex flex-col lg:flex-row lg:flex lg:mb-[165px] gap-12 mb-[40px]"}
        >
          {bullets?.map((item, index) => (
            <div key={index} class="flex flex-col items-center gap-4 text-[#F3FFF9] text-[22px] text-center lg:text-[40px] max-w-[300px]">
              <Image
                src={item?.icon}
                alt={item?.text}
                width={60}
                height={60}
                class="lg:w-[80px] lg:h-[80px]"
              />
              <p>
                {item?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
