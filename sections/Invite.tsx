export interface props {
  title: string;
  inviteText: string;
  buttonText: string;
  buttonLink: string;
}

export default function Invite(
  { title, inviteText, buttonLink, buttonText }: props,
) {
  return (
    <div id="Invite" className={"bg-[#06E474]"}>
      <div
        className={"flex items-center flex-col justify-center w-[90%] mx-auto"}
      >
        <h2
          className={" text-[32px] mb-[24px] font-semibold lg:text-[73px] text-center mt-[40px] lg:mt-[80px] text-[#0A2121] lg:mb-[40px] lg:leading-[77px] leading-[38px]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <p
          id="InviteText"
          className={"text-center text-[20px] text-[#0A2121] font-[400] lg:max-w-[909px] lg:text-[28px] leading-[28px] lg:leading-[40px]"}
          dangerouslySetInnerHTML={{ __html: inviteText }}
        >
        </p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={"flex items-center justify-center text-[20px] font-[500] px-[46px] py-[24px] text-[#f3fff9] bg-[#0A2121] rounded-[8px] my-[40px] lg:text-[48px] lg:font-[400] lg:px-[64px] lg:py-[30px] lg:mt-[76px] lg:mb-[80px]"}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
