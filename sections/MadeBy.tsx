import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  text: string;
  devsCircle: {
    image: Image;
    name: string;
    link: string;
  }[];
}

export interface Image {
  src: LiveImage;
  alt: string;
  width: number;
  height: number;
}

export default function MadeBy({ text, devsCircle }: props) {
  return (
    <div id="MadeBy">
      <div className={"flex items-center flex-col"}>
        <h2
          className={"text-white text-[32px] mb-[50px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[100px] lg:mb-[100px] flex-col flex lg:leading-[77px] leading-[38px]"}
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </h2>
      </div>

      <div
        className={"flex flex-col items-center justify-center w-[100vw] lg:w-[auto] overflow-auto"}
      >
        <div
          className={"flex w-[100vw] lg:w-[auto] lg:flex-wrap lg:justify-center gap-y-[20px] mb-[45px] lg:mb-[120px]"}
        >
          {devsCircle.map((dev, index) => (
            <div
              key={index}
              className={"flex flex-col items-center justify-center px-[50px] min-h-[144px]"}
            >
              <a href={dev.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={dev.image.src}
                  alt={dev.image.alt}
                  className={"rounded-full min-w-[98px]"}
                  width={dev.image.width}
                  height={dev.image.height}
                />
              </a>
              <p
                className={"text-white text-[16px] font-[400] mt-[20px] min-h-[48px]"}
              >
                {dev.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
