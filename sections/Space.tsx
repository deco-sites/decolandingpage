export interface props {
    spaceText: string;
    description: string[];
  }
  
  export default function Header({ spaceText }: props,
    
  ) {
    return (
        <div>
            <script>
                {`
                    
                `}
            </script>
            <div className={'flex items-center flex-col'} id="space">
                <h2 className={'text-white text-[32px] mb-[20px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[165px]'}>{spaceText}</h2>
            </div>
        </div>
    );
  }
  