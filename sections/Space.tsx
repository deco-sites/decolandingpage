import Stars from "../islands/Stars.tsx";

export interface props {
  spaceText: string;
}

export default function Space({ spaceText }: props) {
  return (
    <div>
      <Stars />
      <div
        className={"flex items-center flex-col min-h-[262px] lg:min-h-[652px] mb-[60px]"}
        id="space"
      >
        <h2
          className={"text-white text-[32px] font-semibold lg:text-[73px] text-center  absolute"}
          dangerouslySetInnerHTML={{ __html: spaceText }}
        >
        </h2>
      </div>
    </div>
  );
}
