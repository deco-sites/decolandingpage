export interface props {
    text: string;
    devsCircle: {
        image: string;
        name: string;
        link: string;
    }[];
  }
  
  export default function MadeBy({ text, devsCircle }: props) {
    return (
      <div>
        <div className={"flex items-center flex-col"} id="space">
          <h2
            className={"text-white text-[32px] mb-[50px] font-semibold lg:text-[73px] text-center mt-[50px] lg:mt-[165px] lg:mb-[165px]"}
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </h2>
        </div>

        <div className={"flex flex-col items-center justify-center"}>
            <div className={"flex flex-wrap justify-center"}>
                {devsCircle.map((dev, index) => (
                    <div key={index} className={"flex flex-col items-center justify-center m-[20px]"}>
                        <a href={dev.link} target="_blank" rel="noopener noreferrer">
                            <img src={dev.image} alt={dev.name} className={"w-[100px] h-[100px] rounded-full"} />
                        </a>
                        <p className={"text-white text-[16px] font-semibold mt-[10px]"}>{dev.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }
  