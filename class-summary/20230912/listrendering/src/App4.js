import { useEffect, useState } from "react";

function InputAnimal({data, setData}){

    let [name, setName] = useState('');
    let [species, setSpecies] = useState('');
    let [age, setAge] = useState(0);

    function addAnimal(){
        let newAnimal = {
            name : name,
            species: species,
            age: age,
            id: 110+(data.length+1)
        }
        // let copy = [...data]
        // copy.push(newAnimal);
        // setData(copy);

        setData((prev)=>[...prev, newAnimal]);
    }

    return(
        <form>
            <fieldset>
                <legend>새로운 애완동몰을 추가해주세요!</legend>
                <label>
                    이름 : 
                    <input type="text" value={name} placeholder="이름" onChange={(event)=>{setName(event.target.value)}}></input>
                </label>
                <label>
                    종류:
                    <input type="text" value={species} placeholder="species" onChange={(event)=>{setSpecies(event.target.value)}}/>
                </label>
                <label>
                    나이:
                    <input type="number" value={age} placeholder="나이" onChange={(event)=>{setAge(event.target.value)}}></input>
                </label>
                
                <button type="button" onClick={addAnimal}>추가하기</button>
            </fieldset>
        </form>
    )
}


function AnimalEl({data}){
    return(
        <>
        {
            data.map((el)=>{
                return(
                    <li key={el.id}>
                        {el.name}는 {el.species}입니다 그리고 {el.age}살입니다.
                    </li>
                )
            })
        }
        </>
    )
}


function AnimalList({data}){
    return(
        <ul>
            <AnimalEl data={data}/>
        </ul>
    )
}



function App() {
    
     const [data, setData] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
      ])

    return(
      <div>
        <h1>애완동물 정보 리스트</h1>
        <InputAnimal data={data} setData={setData}/>
        <AnimalList data={data}/>
      </div>
    )
  }
  
  export default App;