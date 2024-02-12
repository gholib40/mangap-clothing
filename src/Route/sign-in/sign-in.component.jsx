import
    { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    } 
    from "../../utils/firebase/firebase.utils"
    import SignUp from "../../sign-up/sign-up.component"
   

const SignIn = ()=> {
    const logResponse = async()=> {
        const {user} = await signInWithGooglePopUp()
        const response =  await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1> Sign In Page</h1>
            <button onClick={logResponse}>
                Sign in with google pop up
            </button>
            <SignUp />
        </div>
    )
}

export default SignIn