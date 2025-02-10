//funciones de retorno y algumento
export const FuncionesDeRetorno = () => {

    const addTwoNumber = (a:number, b:number): number =>{
        return a + b 
    }
  return (
  <>
    <h1>Funciones de retorno</h1>
    <span>el resultado de sumar: {addTwoNumber(2,8)}</span>
  </>   
  )
}




