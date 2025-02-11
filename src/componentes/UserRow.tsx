//podemos recibir ls properties como sea pero lo mejor es mediante una interfaz
import { User } from "../interfaces";
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
