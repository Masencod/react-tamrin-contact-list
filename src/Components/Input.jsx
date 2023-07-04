import { useState } from "react"


const Input = ({ onSubmit,list }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault()
        const isNameValid = name.trim() !== "";
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPhoneValid = /^[+\d\s-]+$/.test(phone);
        if (isNameValid && isEmailValid && isPhoneValid) {
          const newData = {id: list.length+1, name, email, phone };
          onSubmit(newData)
          setName('')
          setEmail('')
          setPhone('')
          setNameError(!isNameValid);
          setEmailError(!isEmailValid);
          setPhoneError(!isPhoneValid);
        } else {
          setNameError(!isNameValid);
          setEmailError(!isEmailValid);
          setPhoneError(!isPhoneValid);
        }
    }
  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col sm:flex-row sm:justify-start gap-2 w-full">
        <input value={name} onChange={({ target }) => {setName(target.value)}} className={`bg-black outline-none rounded-md p-2 sm:w-3/12 border-2 ${nameError ? 'border-red-500' : 'border-fuchsia-400'}`} placeholder="Your name"  type="text" />
        <input value={phone} onChange={({ target }) => {setPhone(target.value)}} className={`bg-black outline-none rounded-md p-2 sm:w-3/12 border-2 ${phoneError ? 'border-red-500' : 'border-fuchsia-400'}`} placeholder="Your number" type="text" />
        <input value={email} onChange={({ target }) => {setEmail(target.value)}} className={`bg-black outline-none rounded-md p-2 sm:w-3/12 border-2 ${emailError ? 'border-red-500' : 'border-fuchsia-400'}`} placeholder="Your email" type="text" />
        <input value="+ ADD" type="submit" className="bg-gray-700 rounded-md border-2 border-fuchsia-400 p-2 cursor-pointer transition duration-500 hover:bg-fuchsia-950 focus:bg-fuchsia-700"/>
    </form>
  )
}

export default Input