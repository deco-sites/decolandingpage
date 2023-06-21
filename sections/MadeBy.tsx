import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  text: string;
  imageSize: number;
  devsCircle: {
    label: string;
    linkedin: string;
    image?: LiveImage;
  }[];
}

export default function MadeBy({ text, imageSize, devsCircle }: props) {
  return (
    <div id="MadeBy" class="lg:px-10">
      <div className={"flex items-center flex-col"}>
        <h2
          className={"text-white text-[32px] mb-[50px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[100px] lg:mb-[100px] flex-col flex lg:leading-[125%] leading-[120%]"}
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </h2>
      </div>

      <div
        className={"flex flex-col items-center justify-center w-[100vw] lg:w-[auto] overflow-auto lg:overflow-visible"}
      >
        <div
          className={"flex w-[100vw] lg:w-[auto] lg:flex-wrap lg:justify-center gap-y-10 mb-[45px] lg:mb-[120px]"}
        >
          {devsCircle.map((dev, index) => (
            <a key={index} href={dev.linkedin} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center px-4 w-44 gap-4 text-center group">
              <Image
                src={dev.image || "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1493/ff1f2e56-d896-484b-b3bf-f411c0df4c3b"}
                alt={dev.label}
                class="rounded-full min-w-[98px] group-hover:scale-110 duration-200"
                width={imageSize}
                height={imageSize}
              />
              <p
                className={"text-white text-[16px] font-[400]"}
              >
                {dev.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
