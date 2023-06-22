import Stars from "../islands/Stars.tsx";

export interface props {
  spaceText: string;
}

export default function Space({ spaceText }: props) {
  return (
    <div class="relative">
      <Stars />
      <div
        class="flex items-center flex-col min-h-[262px] lg:min-h-[652px] mb-[60px]"
        id="space"
      >
        <h2
          class="text-white text-[32px] font-semibold lg:text-[73px] text-center absolute z-50 leading-[125%]"
          dangerouslySetInnerHTML={{ __html: spaceText }}
        >
        </h2>
      </div>
      <div
        class="absolute top-0 w-full h-28"
        style={{
          "background":
            "linear-gradient(180deg, #0A2121 0%, rgba(10, 33, 33, 0) 100%)",
        }}
      />
      <div
        class="absolute bottom-0 w-full h-28"
        style={{
          "background":
            "linear-gradient(180deg, rgba(10, 33, 33, 0) 0%, #0A2121 100%)",
        }}
      />
    </div>
  );
}

