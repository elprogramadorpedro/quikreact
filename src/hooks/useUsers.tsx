import axios from "axios";
import { useState, useRef, useEffect } from "react";
import type{ User, ReqResUserListResponse } from "../interfaces";

const loadUser = async (page:number=1): Promise<User[]> => {
    try {
      const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
        params: {
          page: page
        }
      });
      return data.data;
    } catch (error) {
      console.log("error");
      return [];
    }
  };

export const useUsers = () => {
      //users como un arreglo: <User[]>([])
  const [users, setUsers] = useState<User[]>([]); 
  const currentPageRef = useRef(1);
  
  //paginacion en esta area necesito saber en que pagina estoy
  
    //fecht api
    /*
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));
  },[])
  */
  
    //axios nos permite cancelar peticiones.
  
    //useEffect(()=>{
  
    //peticion de tipo get
    //axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
    //obtenemos la respuesta
    // como hacer que la respuesta tenga un tipado estricto
    //.then(resp=>console.log(resp.data.data[0]))
    //.then(resp=>console.log(resp.data.data.at(1)))//posicion 1
    //.then(resp=>console.log(resp.data.total_page))//seria 2
    //.then(resp=>console.log(resp.data.data.[0])) //posicion
    //ReqResUserListResponse esto nos ayudara a entender que info fluye en nuestra aplicacion
  
    //por utimo exportaremos unuestra peticion http a otro archivo, o por lo menos fuera del funcional component
  
    //},[])
  
    useEffect(() => {
      //aqui hacemos la llamada de los users si todo sale bien then
      //loadUser().then((users) => console.log(users));
  
      /*loadUser()
      .then((users) => setUsers(users));*/
  
  
      //lo que sea que loadUser retorne imediatamente se lo va a establecer al setUsers
  
      loadUser(currentPageRef.current)
      .then(setUsers)
  
    }, []);
  
  
    //vamos a mostrar usuarios en pantalla usando una piesa de estado 
    // usando use state , pude ser con sustan pero mejor con usestate
  
  //cuando toco el boton next quiero la siguiente pagina
  
  const nextPage = async()=>{    
      currentPageRef.current++;
      const users = await loadUser(currentPageRef.current);
      if(users.length>0){
          setUsers(users)
      }else{
          currentPageRef.current--;
      }
  }
  
  const prevPage = async()=>{
      if(currentPageRef.current <= 1) return;
  
      currentPageRef.current--;
      const users: User[] = await loadUser(currentPageRef.current);
      setUsers(users);
  }

  return{
    //propertys
    users,
  



    //metodos
    nextPage,
    prevPage,

  }
  
}
