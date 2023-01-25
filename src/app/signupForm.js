import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage} from "./showMessage.js"

const signupForm = document.querySelector('#signup-form')
console.log(auth)

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //close sign up modal
        const signupModal = document.querySelector('#signUpModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()
        showMessage("welcome " + userCredentials.user.email, "success")

    } catch (error) {
        console.log(error)
        
        if (error.code === 'auth/invalid-email') {
            showMessage("invalid email", "danger")
        }
        else if (error.code === 'auth/email-already-in-use') {
            showMessage("email already in use", "danger")
        }
        else if (error.code === 'auth/weak-password') {
            showMessage("password is too weak", "danger")
        }
        else if (error.code) {
        }
    }
});