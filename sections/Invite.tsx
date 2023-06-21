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
          className={" text-[32px] mb-[24px] font-semibold lg:text-[73px] text-center mt-[40px] lg:mt-[80px] text-[#0A2121] lg:mb-[40px] lg:leading-[125%] leading-[120%]"}
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
          class="flex items-center justify-center text-[20px] font-[500] px-[46px] py-[24px] text-[#f3fff9] bg-[#0A2121] rounded-[8px] my-[40px] lg:text-[48px] lg:font-[400] lg:px-[64px] lg:py-[30px] lg:mt-[76px] lg:mb-[80px] lg:hover:scale-110 duration-150 overflow-hidden group relative   hover:bg-gradient-to-r hover:from-[#0A2121] hover:to-gray-800"

        >
          <span class="absolute -right-10 w-20 h-60 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-5 rotate-12 group-hover:-translate-x-[800px] ease"></span>
          <span class="relative">{buttonText}</span>
        </a>
      </div>
    </div>
  );
}

