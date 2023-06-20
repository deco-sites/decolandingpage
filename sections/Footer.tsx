export interface props {
  footerTitle: string;
  descriptionTitle: string;
  imageDescription: string;
  seedText: string;
  linkLinkedin?: string;
  linkGithub?: string;
  linkInstagram?: string;
  linkDiscord?: string;
  linkWhatsapp?: string;
}

export default function Footer(
  {
    footerTitle,
    descriptionTitle,
    imageDescription,
    seedText,
    linkLinkedin,
    linkGithub,
    linkInstagram,
    linkDiscord,
    linkWhatsapp,
  }: props,
) {
  return (
    <div id="Footer">
      <div
        className={"flex items-center flex-col justify-center w-[90%] mx-auto"}
      >
        <h2
          className={"text-[#f3fff9] font-[600] text-[32px] mt-[44px] mb-[12px] lg:text-[80px] lg:mt-[120px] lg:mb-[24px] lg:max-w-[1000px] text-center lg:leading-[82px] leading-[35px]"}
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
          <a href={linkLinkedin}>
            <svg className={"w-[20px] h-[20px]"}>
              <use href="/symbols.svg#linkedinIcon" />
            </svg>
          </a>
          <a href={linkGithub}>
            <svg className={"w-[20px] h-[20px]"}>
              <use href="/symbols.svg#githubIcon" />
            </svg>
          </a>
          <a href={linkInstagram}>
            <svg className={"w-[20px] h-[20px]"}>
              <use href="/symbols.svg#instagramIcon" />
            </svg>
          </a>
          <a href={linkDiscord}>
            <svg className={"w-[20px] h-[20px]"}>
              <use href="/symbols.svg#discordIcon" />
            </svg>
          </a>
          <a href={linkWhatsapp}>
            <svg className={"w-[20px] h-[20px]"}>
              <use href="/symbols.svg#whatsappIcon" />
            </svg>
          </a>
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
