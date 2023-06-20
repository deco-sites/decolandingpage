export interface props {
  footerTitle: string;
  descriptionTitle: string;
  imageDescription: string;
  seedText: string;
}

export default function Footer(
  { footerTitle, descriptionTitle, imageDescription, seedText }: props,
) {
  return (
    <div id="Footer">
      <div
        className={"flex items-center flex-col justify-center w-[90%] mx-auto"}
      >
        <h2
          className={"text-[#f3fff9] font-[600] text-[32px] mt-[44px] mb-[12px] lg:text-[80px] lg:mt-[120px] lg:mb-[24px] lg:max-w-[1000px] text-center"}
          dangerouslySetInnerHTML={{ __html: footerTitle }}
        >
        </h2>
        <p
          className={"text-[#f3fff9] font-[400] text-[16px] mb-[60px] lg:text-[24px] lg:mb-[120px]"}
          dangerouslySetInnerHTML={{ __html: descriptionTitle }}
        >
        </p>
        <div className={"flex flex-col items-center"}>
          <svg className={"w-[80px] h-[28px] mb-[12px] lg:w-[132] lg:h-[45px]"}>
            <use href="/symbols.svg#decoIcon" />
          </svg>
          <p
            className={"text-[16px] text-[#f3fff9] font-[400] text-center mb-[30px] lg:mb-[46px]"}
          >
            {imageDescription}
          </p>
        </div>
        <div
          className={"flex flex-row justify-center mb-[10px] lg:mb-[14px] gap-[20px]"}
        >
          <svg className={"w-[20px] h-[20px]"}>
            <use href="/symbols.svg#linkedinIcon" />
          </svg>
          <svg className={"w-[20px] h-[20px]"}>
            <use href="/symbols.svg#githubIcon" />
          </svg>
          <svg className={"w-[20px] h-[20px]"}>
            <use href="/symbols.svg#instagramIcon" />
          </svg>
          <svg className={"w-[20px] h-[20px]"}>
            <use href="/symbols.svg#discordIcon" />
          </svg>
          <svg className={"w-[20px] h-[20px]"}>
            <use href="/symbols.svg#whatsappIcon" />
          </svg>
        </div>
        <p
          className={"text-[16px] text-[#f3fff9] font-[400] text-center mb-[40px] lg:mb-[64px]"}
        >
          {seedText}
        </p>
      </div>
    </div>
  );
}
