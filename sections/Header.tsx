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
      className={'bg-[url("/image_3.webp")] bg-no-repeat min-h-[936px] bg-[center_right_-19rem] lg:bg-cover lg:bg-top lg:bg-[unset] lg:h-[1124px]'}
    >
      <div className={"flex items-center flex-col gap-[21px] pt-[134px]"}>
        <svg class="h-[46px]">
          <use href="/icons.svg#Logo" />
        </svg>
        <p className={"text-[#F3FFF9] text-[20px] mb-[60px] lg:mb-[108px]"}>
          {imageDescription}
        </p>
      </div>
      <div
        className={"flex flex-col  mx-auto w-[90%] lg:max-w-[900px]"}
      >
        <h1
          className={"text-white text-[32px] mb-[28px] font-semibold lg:text-[73px] w-[367px] lg:w-[840px] leading-[35px] lg:leading-[80px]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h1>
        <p
          className={"text-white text-[20px] lg:text-[24px] w-[327px] lg:w-[790px]"}
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </p>
      </div>
    </header>
  );
}
