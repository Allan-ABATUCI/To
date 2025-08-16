import { useState } from "react";
type Priority= "Urgente" | "Moyenne" | "Basse"

type todo={
  id:number;
  text:string;
  priority:Priority;
}

function App() {
  const [input,setInput]= useState("")
  const [priority, setPriority] = useState<Priority>("Moyenne")
  const [todos,setTodos] = useState<todo[]>([])

function addTodo(){
  if(input.trim()==""){return}
  const newtodo:todo={
    id:Date.now(),
    text:input.trim(),
    priority:priority
  }
}
  return (
  <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2x1">
        <div className="flex gap-4">
          <input type="text" 
          className="input w-full" 
          placeholder="Ajouter une tâche..."
          onChange={(e)=>setInput(e.target.value)}
           />
            <select className="select w-full"
             value={priority}
             onChange={(e)=>setPriority(e.target.value as Priority)}
             >
                <option value="Basse"> Basse</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Urgente">Urgente</option>
            </select>
          <button 
          className="btn btn-primary"
          onClick={()=>addTodo}
           >  Ajouter
           </button>
        </div>

      </div>
  </div>
  )
}

export default App