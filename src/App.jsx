import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  // const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      return savedTodos || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }

  const handleAdd = (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return;

    if (todo.length > 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo(""); // clear input
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }


  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-primaryBg to-baseBg px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brandText mb-4 font-poppins">
          KARYAM: TaskMaster
        </h1>
        <p className="text-xl md:text-2xl italic text-terra mb-8">
          To do is to become
        </p>
        <p className="text-action max-w-xl mb-8 font-poppins font-semibold">
          Manage your todos in one place with clarity and focus.
          Minimal design, powerful productivity.
        </p>
        <button onClick={() => document.getElementById("app").scrollIntoView({ behavior: "smooth" })} className="bg-accentBg hover:bg-hoverAccent text-baseBg font-bold px-8 py-3 rounded-full text-lg transform transition duration-300 ease-in-out hover:scale-105">
          Get Started
        </button>
      </section>

      <section id="app" className="py-12 bg-baseBg">
        <div className="mx-3 md:container md:mx-auto rounded-xl p-5 bg-containerBg min-h-[80vh] w-full max-w-lg shadow-lg">
          <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-baseBg min-h-[80vh] md:w-[35%] mx-auto shadow-lg">
            <h1 className="font-bold text-center text-3xl mb-2 text-textMain font-poppins">
              KARYAM: TaskMaster
            </h1>
            <p className="text-center italic text-action mb-6">
              To do is to become
            </p>
            <div className="addTodo my-5 flex flex-col gap-4">
              <h2 className='text-xl font-bold text-textMain font-poppins'>Manage your todos at one place</h2>
              <div className="flex">
                <input onChange={handleChange} onKeyDown={handleAdd} value={todo} type="text" placeholder='Add a todo...' className='font-poppins w-full rounded-full px-5 py-1  border-textMain shadow-lg' />
                <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-danger hover:bg-hoverAccent disabled:bg-accentBg text-white p-4 py-2 text-sm font-bold rounded-full mx-2 transform transition duration-300 ease-in-out hover:scale-105'>Save</button>
              </div>
            </div>
            <input id="show" onChange={toggleFinished} type="checkbox" checked={showFinished} className='my-4 accent-textMain' />
            <label className='mx-2 text-hoverAccent font-poppins' htmlFor="show">Show Finished</label>
            <div className="h-[1px] bg-action opacity-15 w-[90%] mx-auto my-2"></div>
            <h2 className='text-2xl font-bold text-textMain font-poppins'>Your Todos</h2>
            <div className="todos">
              {todos.length === 0 && <div className='m-5 text-action font-poppins'>No todos to display</div>}
              {todos.map(item => {

                return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
                  <div className='flex gap-5 items-start w-[80%]'>
                    <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" className='accent-textMain' />
                    <div className={item.isCompleted ? "line-through text-action opacity-70 break-words" : "text-hoverAccent break-words font-inter"}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button onClick={(e) => handleEdit(e, item.id)} className='bg-action p-2 py-1 text-sm font-bold text-white rounded-md mx-1 transform transition duration-300 ease-in-out hover:scale-105'><FaEdit /></button>
                    <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-textMain hover:bg-danger p-2 py-1 text-sm font-bold text-white rounded-md mx-1 transform transition duration-300 ease-in-out hover:scale-105'><MdDelete /></button>
                  </div>

                </div>
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
