import { useUsers } from "../hooks/useUsers";  
import { UserRow } from "./UserRow";


export const UserPage = () => {

const {users, nextPage, prevPage} = useUsers(); 



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


<div>
    <button onClick={prevPage}>Prev</button>
    <button onClick={nextPage}>Next</button>
</div>

  </>
  );
};