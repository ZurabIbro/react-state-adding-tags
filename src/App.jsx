import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [tags, setTags] = useState([])
  const [error, setError] = useState('Поле ввода не может быть пустым')
  const [dirty, setDirty] = useState(false)

  const inputChange = (e) => {
    setText(e.target.value)
    e.target.value !== '' ? setError('') :  setError('Поле ввода не может быть пустым')
  }
  const addTag = (e) => {
    e.preventDefault()
    if(text === ''){
      return setError('Поле ввода не может быть пустым')
    }
    setTags([...tags, text])
    setText('')
  }
  const deleteTag = (id) => {
    setTags(tags.filter((tag, index) => id !== index))
  }
  const blur = () => {
    setDirty(true)
  }
  return (
    <div className='container'>
      <form>   
        <input 
        onBlur={blur}
        value={text} 
        onChange={(e) => inputChange(e)} 
        type="text" />
        <button onClick={(e) => addTag(e)}>Отправить</button>
        {(error && dirty) && <p style={{color: 'red'}}>{error}</p>} 
      </form>
      <ul className='list'>
        {tags.map((tag, index) => <li key={index}>{`${tag}`} <button onClick={() => deleteTag(index)}>x</button></li> )}
      </ul>
    </div>
  )
}
 
export default App
