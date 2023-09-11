function Display({currentMood}) {
    return(
        <h2 className="display">
            {
                currentMood === null ? "선택된 내용이 없습니다" : `기분이 ${currentMood}`
            }
        </h2>
    )

    // if () {
    //   return <h2 className="display">선택된 내용이 없습니다</h2>; 
    // }
    // return <h2 className="display">기분이 {currentMood}</h2>;
  }

export default Display