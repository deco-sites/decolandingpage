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
        <div class="w-full text-center items-center">
          {images.map((element) => (
            <div class="w-36 lg:w-40 h-17 lg:h-20 px-4 lg:px-6 py-6 lg:py-4 inline-block align-middle">
              <div class="flex w-full h-full items-center justify-center">
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
