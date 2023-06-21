import { asset } from "$fresh/runtime.ts";

export interface props {
  imageDescription: string;
  title: string;
  description: string;
}

export default function Header(
  { title, description, imageDescription }: props,
) {
  return (
    <header
      id="Header"
      className={`bg-no-repeat min-h-[936px] bg-[center_right_-19rem] lg:bg-cover lg:bg-top lg:bg-[unset] lg:h-[1124px]`}
    >
      <div
        className={"flex items-center flex-col gap-[21px] pt-[89px] lg:pt-[143px]"}
      >
        <svg class="h-[46px]">
          <use href="/icons.svg#Logo" />
        </svg>
        <p className={"text-[#F3FFF9] text-[20px] mb-[60px] lg:mb-[108px]"}>
          {imageDescription}
        </p>
      </div>
      <div
        className={"flex flex-col mx-8 lg:mx-auto lg:w-[90%] lg:max-w-[1000px] items-center lg:items-start"}
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
    </header>
  );
}
