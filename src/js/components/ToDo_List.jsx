import React, {useState} from 'react'

const ToDo_List = () => {

    const [texto, setTexto] = useState("")
    const [lista, setLista] = useState([])
  
    const handleEnter = (e) =>{

       if(e.key === 'Enter' && texto != ""){
        setLista([...lista,texto]);
         setTexto("");
       }
    }

    const handleDelete = (indx) => {
      const newTexto = lista.filter((elem,i) => i!== indx);
      setLista(newTexto);
    }

  return (

    <div>

    <h1 className='text-secondary text-center titulo'>Todos</h1>

    <div className='container card bg-white d-flex flex-column justify-content-center w-50 tarjeta'>
          
      <div className='card-header bg-white'>
        <input type="text" onChange={(e)=> setTexto(e.target.value)} onKeyDown={handleEnter} value={texto} placeholder='Que tenemos por hacer?'/>
      </div>
      
      
       <ul className='list-group list-group-flush'>
         {lista.map((task,index) => {
          return (
          <li className='list-group-item bg-white d-flex flex-row justify-content-between' key={index}>

              <p className='my-1 m-1 text-secondary' >{task}</p> 
              
             <button type='button' className='bg-white' onClick={()=> handleDelete(index)} > <i className="fa-solid fa-x"></i> </button>
             
          </li>
          
        )
        })} 
      </ul> 

      <p className='text-secondary my-2 abajo'>{lista.length > 0 ?  `Quedan ${lista.length} tareas ` : 'No hay tareas, añadir tareas' } </p>
    </div>

    </div>

  )
}

export default ToDo_List