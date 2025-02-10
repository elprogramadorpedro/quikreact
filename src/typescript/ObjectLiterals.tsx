
//objetos literales e interfaces

interface Person{
    firstName:string;
    lastName:string;
    age:number;
    address:address;

    //isAlive?:boolean; //opcional el simbolo se interrogacion significa que es opcional
}

interface address{
    country:string;
    houseNo:number;
}





export const ObjectLiterals = () => {

    const person: Person ={
        age:97,
        firstName:'fernando',
        lastName:'Herrera,',


        address:{
            country:'canada',
            houseNo:615
        }
 };




 //en react los objetios literales no se pueden imprimir directamente 

  return (

    <>
    
    <div>ObjectLiterals</div>

    <h1>Objetos literales</h1>
<pre>
<h1>Objetos literales</h1>
   {JSON.stringify(person, null, 2)} 
</pre>
    
    </>

    
 


  )
}
