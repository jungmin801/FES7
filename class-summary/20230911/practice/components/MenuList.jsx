import Buttons from "./Buttons";

function MenuList({setCurrentMood}){
    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];
    return(
        <ul>
            {
            menus.map((moodEl, index) => {
                return <Buttons key={index} mood={moodEl} setCurrentMood={setCurrentMood}/>
            })
            }
        </ul>
    );
}

export default MenuList