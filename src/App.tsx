import {useForm} from 'react-hook-form';

import Button from './components/atoms/button'
import Input from './components/atoms/input'
import FormComponent from './components/molecules/Form'
import './App.css'

function App() {
  const form =useForm();
  console.log(form);
  return (
    <>
      <h1>Hello React with Code Catty</h1>
      <Button />
      <Input />
      <FormComponent />
    </>
  )
}

export default App
