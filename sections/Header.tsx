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
      className={'bg-[url("/image_3.png")] bg-no-repeat min-h-[936px] bg-[center_right_-19rem] lg:bg-cover lg:bg-top lg:bg-[unset] lg:h-[1124px]'}
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
        className={"flex items-center flex-col  mx-auto w-[90%] lg:max-w-[900px]"}
      >
        <h1
          className={"text-white text-[32px] mb-[28px] font-semibold lg:text-[73px] leading-[81px]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h1>
        <p
          className={"text-white text-[18px] lg:text-[24px]"}
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </p>
      </div>
    </header>
  );
}
