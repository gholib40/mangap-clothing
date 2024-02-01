import { signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
const SignIn = ()=> {
    const logResponse = async()=> {
        const {user} = await signInWithGooglePopUp()
       createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logResponse}>
                Sign in with google pop up
            </button>
        </div>
    )
}

export default SignIn