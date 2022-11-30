import matchedLogo from "../../../public/asset/merryMatchIMG/matchedLogo.png";

const MatchedLogo = ({swipe ,index,clickCountinueCount,currentIndex}) => {
  console.log(index)
  return (
  <>
  {index === currentIndex ? <div className=" absolute flex flex-col items-center">
    <img className="hover:opacity-50" src={matchedLogo}></img>
    <button
      className="bg-[#FFE1EA] py-[12px] px-[24px] rounded-[99px] w-[188px] text-[20px] text-[#95002B] font-[900] mt-[10%] hover:bg-[#95002B] hover:text-[#FFE1EA]"
      onClick={() => {
        swipe("right", index);
        clickCountinueCount();
      }}
    >
      CONTINUE
    </button>
  </div> :null}
  </>
    
    
  );
};

export default MatchedLogo;
