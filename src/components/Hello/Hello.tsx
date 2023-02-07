import style from './Hello.module.css'
export const Hello = () => {

  return (
    <div className={style.container}>
      <h1 className={style.welcome}>Have a nice work :)</h1>
    </div>
  )
}