//tipos basivos de typescript


export const BasicTypescript = () => {

const name: string = 'Fernando';
const age: number = 35;
const isACtive: boolean = true;
const powers: string[] = ['react', 'ReactNative', 'Angular'];



  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {age} {isACtive ? 'true' : 'false'}
      <br />
      {powers}
    </>
  )
}
