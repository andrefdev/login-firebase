import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signInModal'))
        modal.hide()

        showMessage('welcome ' + credentials.user.DisplayName , 'success')
    } catch (error) {
        console.log(error)
        if (error.code === 'auth/network-request-failed') {
            showMessage("wrong password or error", "danger")
        }
        else if (error.code === "auth/user-not-found") {
            showMessage("wrong email or error", "danger")
        }
        else {
            showMessage("error", "danger")
        }
    }

})