/*import {useState} from 'react';

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
    return {id: objEl.id, val: 20.9, type: "double"};
	}
  return objEl;
} );

const handleClick = () => {
  setObjArr(updateArr);
  console.log(objArr);
}

return(
  <div>
    <button onClick={handleClick}>{objArr[2].val}</button>
  </div>
);

}*/


import CreateBooks from './CreateBooks';
import {useState} from 'react';

export default function App() {

  const [books, setBooks] = useState([
    { id: 1, title: "Sense and Sensibility" },
    { id: 2, title: "Oliver Twist" }
  ]);

  const changeTitleById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  console.log(books);

  return(
    <div>
    <CreateBooks onCreate={changeTitleById} />
    </div>
  );
}
