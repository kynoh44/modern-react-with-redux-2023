import {useState} from 'react';

export default function App() {
  const [objArr, setObjArr] = useState([
		{ id: 0,		val: 1,				type: "int" },
		{ id: 193,	val: 2 ,			type: "int" },
		{ id: 43,		val: 10.93,		type: "float" },
		{ id: 2,		val: "test",	type: "string" }
	]);

const updateArr = objArr.map( (objEl) => {
	if (objEl.id === 43) {
		//return { id: objEl.id, val: 11, type: "int" };
    //return {id: objEl.id, val: 20.9, type: "double"};
    return { ...objEl, val: 9323 };
	}
  return objEl;
});

///* single object에 대한 modify & Add */
//const [obj, setObj] = useState(
//  { id: 43,		val: 10.93,		type: "float", size: 12 }
//);

//const updateObj = { ...obj, val: 9323, type: "void" };

  const handleClick = () => {
    setObjArr(updateArr);
    console.log(objArr);
  }

  return(
    <div>
      <button onClick={handleClick}>{objArr[2].val}</button>
    </div>
  );
}