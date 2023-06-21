import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface props {
  imageDescription: string;
  title: string;
  description: string;
  bgImage: LiveImage;
}

export default function Header(
  { title, description, imageDescription, bgImage }: props,
) {
  return (
    <header class="relative min-h-[936px] lg:h-[1124px]">
      <div
        class="absolute w-full opacity-60 bg-no-repeat min-h-[936px] bg-center bg-cover lg:h-[1124px]"
        style={`
          background-image: url("${bgImage}");
        `}
      />
      <div
        class="relative flex items-center flex-col gap-[21px] pt-[89px] lg:pt-[143px]"
      >
        <svg class="h-[46px]">
          <use href="/icons.svg#Logo" />
        </svg>
        <p className={"text-[#F3FFF9] text-[20px] mb-[60px] lg:mb-[108px]"}>
          {imageDescription}
        </p>
      </div>
      <div
        className={"relative flex flex-col mx-8 lg:mx-auto lg:w-[90%] lg:max-w-[1000px] items-center lg:items-start"}
      >
        <h1
          className={"text-white text-[32px] mb-[28px] font-semibold lg:text-[73px] leading-[120%] lg:leading-[110%]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h1>
        <p
          id={"Description"}
          className={"text-white text-[20px] lg:text-[24px] leading-[30px] lg:leading-[35px]"}
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </p>
      </div>
      <div
        class="absolute bottom-0 w-full h-28"
        style={{
          "background":
            "linear-gradient(180deg, rgba(10, 33, 33, 0) 0%, #0A2121 100%)",
        }}
      />
    </header>
  );
}
