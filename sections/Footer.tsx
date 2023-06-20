export interface props {
    spaceText: string;
  }
  
  export default function Space({ spaceText }: props) {
    return (
      <div>
        <div className={"flex items-center flex-col"} id="space">
          <h2
            className={"text-white text-[32px] mb-[50px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[165px] lg:mb-[165px]"}
            dangerouslySetInnerHTML={{ __html: spaceText }}
          >
          </h2>
        </div>
      </div>
    );
  }
  