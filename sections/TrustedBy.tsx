import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  title: string;
  trustedByImg: Image[];
}

export interface Image {
  src: LiveImage;
  alt: string;
  width: number;
  height: number;
}

export default function TrustedBy({ title, trustedByImg }: props) {
  return (
    <div id="TrustedBy">
      <div
        className={"flex items-center flex-col mb-[44px] lg:mb-[120px] w-[95%] mx-auto"}
      >
        <h2
          className={"text-[#f3fff9] font-[600] text-[32px] mb-[40px] lg:text-[64px] lg:mb-[88px] text-center leading-[38px] lg:leading-[77px]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <div
          className={"flex flex-row justify-center gap-x-[40px] gap-y-[30px] flex-wrap lg:gap-x-[88px] lg:gap-y-[60px]"}
        >
          {trustedByImg.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              className={"w-[69px] h-[24px] lg:w-[92px] lg:h-[32px] grayscale opacity-40"}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
