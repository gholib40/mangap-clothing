import { useContext, useState } from "react"
import './sign-in.from.styles.scss'
import Button from "../button/button.component"
import { UserContext } from "../../context/user.context"
import
    { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signUserAuthWithEmailAndPassword
    } 
    from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/formInput.component"

const defaultForm = {
    email : '',
    password : '',
}

const SignInForm = ()=> {
    const [formFields,setFormFields] = useState(defaultForm)
    const {email,password} = formFields
    const {setCurrentUser} = useContext(UserContext)

    const signInWithGoogle = async()=> {
        const {user} = await signInWithGooglePopUp()
          await createUserDocumentFromAuth(user)
    }

    const resetFormFields = ()=> {
        setFormFields(defaultForm)
    }


 const handleSubmit = async(event)=> {
       event.preventDefault()
       try {
        const {user} = await signUserAuthWithEmailAndPassword(email,password)
        setCurrentUser(user)
        resetFormFields()
       } catch (error) {
        if(error.code === 'auth/invalid-credential'){
            return alert('Cek kembali email/password anda atau registrasi')
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
        <h2>Sudah Mempunyai Akun</h2>
            <span>Sign In With Your Email And Password</span>
            <form onSubmit={handleSubmit}>
               <FormInput label='Email' type='email' name= 'email' onChange={onChange} value={email} />
               <FormInput label='Password' type='password' name= 'password' onChange={onChange} value={password} />
               <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type ='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
               </div>               
            </form>
        </div>
    )
}

export default SignInForm