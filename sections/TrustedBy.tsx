import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface props {
  title: string;
  trustedByImg: {
    image: string;
    width: number;
  }[];
}

export default function TrustedBy({ title, trustedByImg }: props) {
  return (
    <div id="TrustedBy">
      <div
        className={"flex items-center flex-col mb-[44px] lg:mb-[120px] w-[95%] mx-auto"}
      >
        <h2
          className={"text-[#f3fff9] font-[600] text-[32px] mb-[40px] lg:text-[64px] lg:mb-[88px] text-center"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <div
          className={"flex flex-row justify-center gap-x-[40px] gap-y-[30px] flex-wrap lg:gap-x-[88px] lg:gap-y-[60px]"}
        >
          {trustedByImg.map((img, index) => (
            <Image width={img.width} key={index} src={img.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
