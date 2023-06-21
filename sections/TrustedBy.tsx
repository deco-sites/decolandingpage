import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  title: string;
  images?: Image[]
}

export interface Image {
  /** @title Alt text */
  label: string;
  src: LiveImage;
}

export default function TrustedBy({ title, images }: props) {
  return (
    <div id="TrustedBy">
      <div
        className={"flex items-center flex-col mb-[44px] lg:mb-[120px] w-[95%] mx-auto"}
      >
        <h2
          className={"text-[#f3fff9] font-[600] text-[32px] mb-[40px] lg:text-[64px] lg:mb-[88px] text-center lg:leading-[125%] leading-[120%]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <div class="w-full flex flex-wrap justify-center gap-8 lg:gap-12">
          {images?.map((element) => (
            <div class="w-32 lg:w-40 h-12 lg:h-16">
              <div class="flex w-full h-full">
                <Image
                  width={300}
                  height={300}
                  src={element.src}
                  alt={element.label || ""}
                  class="max-w-full max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
