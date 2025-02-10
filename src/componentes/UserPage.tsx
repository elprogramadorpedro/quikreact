import { useEffect, useState } from "react";
import axios from "axios";
import  { ReqResUserListResponse, User } from "../interfaces/reques.interface";

//para que solo las importe como un tipo : import type { ReqResUserListResponse, User } from "../interfaces/reques.interface";

  // duncion asincrona que evidentemente retornara una promesa

  //const loadUsers = async()=>{
  //ahora tenemos una constante const y podemos desstructurar algo del await de la peticion http que sera la data,
  //usualmente como algo puede salir mal dentro de la peticion http lo envolvemos dentro de un try y catch
  //si algo sale mal colocamos un arreglo vacio y colocamos un consolo del error y en el try regresamos la data.data que serian nuestros usuarios
  /// axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
  //.then(resp=>console.log(resp.data.data[0]))
  //}

  //si todo sale bien va a retornar un promisse user tap : Promise<User[]>
  const loadUser = async (): Promise<User[]> => {
    try {
      const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
      return data.data;
    } catch (error) {
      console.log("error");
      return [];
    }
  };


export const UserPage = () => {
    //users como un arreglo: <User[]>([])
const [users, setUsers] = useState<User[]>([]); 



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

    loadUser().then(setUsers)
  }, []);


  //vamos a mostrar usuarios en pantalla usando una piesa de estado 
  // usando use state , pude ser con sustan pero mejor con usestate



  return (
  <>
<table>
    <thead>
        <tr>
        <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>   
        </tr>
    </thead>

    {/*crearemos un componente especializado nos ayuda a memorizar los datos */}

    <tbody>
        {
        users.map(user => (
            <UserRow key={user.id} user={user} />
        ))
        }
    </tbody>
</table>

  </>
  );
};


//podemos recibir ls properties como sea pero lo mejor es mediante una interfaz

interface Props{
    user: User;
}

export const UserRow = ({user}: Props) => {
  const {avatar, first_name, last_name, email} = user;
  return (
    <tr key={user.id}>  
    <td><img style={{width:'50px'}} src={avatar} alt="avatar" /></td>
    <td>{first_name} {last_name}</td>
    <td>{email}</td>
</tr>
  )
}
