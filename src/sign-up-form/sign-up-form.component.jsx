import { useState } from "react"
import { createUserAuthWithEmailAndPassword,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"
import FormInput from "../Component/form-input/formInput.component"
import './sign-up.from.styles.scss'
import Button from "../Component/button/button.component"

const defaultForm = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = ()=> {
    const [formFields,setFormFields] = useState(defaultForm)
    const {displayName,email,password,confirmPassword} = formFields

    
    
    const resetFormFields = ()=> {
        setFormFields(defaultForm)
    }


 const handleSubmit = async(event)=> {
       event.preventDefault()

       if(password !== confirmPassword){
        return alert('password tidak sama')
       }
       try {
        const {user} = await createUserAuthWithEmailAndPassword(email,password)
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFields()
       } catch (error) {
       if(error.code === 'auth/email-already-in-use'){
        return alert('Email Sudah Terdaftar')
       }
       console.log(error)
       }
    }

    const onChange = (event)=> {
        const{name,value} = event.target
        setFormFields({...formFields,[name] : value})
    }

   
    return (
        <div className="sign-up-container">
        <h2>Tidak Mempunyai Akun</h2>
            <span>Sign Up With Your Email And Password</span>
            <form onSubmit={handleSubmit}>
               <FormInput label='Display Name' type='text' name= 'displayName' onChange={onChange} value={displayName} />
               <FormInput label='Email' type='email' name= 'email' onChange={onChange} value={email} />
               <FormInput label='Password' type='password' name= 'password' onChange={onChange} value={password} />
               <FormInput label='Confirm Password' type='password' name= 'confirmPassword' onChange={onChange} value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm