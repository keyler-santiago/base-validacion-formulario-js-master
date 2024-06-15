// Formulario con FireBase
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBcntDH01s6Khkaa0W6OjQLtazY9lUywRI",
    authDomain: "datos-de-formulario-7acd6.firebaseapp.com",
    projectId: "datos-de-formulario-7acd6",
    storageBucket: "datos-de-formulario-7acd6.appspot.com",
    messagingSenderId: "102205087871",
    appId: "1:102205087871:web:ae99a83147c6287678df4a",
    measurementId: "G-EQ673HPCZC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

        // ? Validar nombre

    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'por favor, introduce tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

        // ? Validar correo eléctronico
    
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPettern = /^[^\s@]+@[^/s@]+\.[^\s@]+$/; // ? Patrón de validación básico

    if (!emailPettern.test(emailEntrada.value)) {
        emailError.textContent = 'por favor, introduce un email válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

        // ? Validar la contraseña
    
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 carácteres, números, mayúsculas, minúsculas y carácteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    // ? Si todos los campos son válidos enviar formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        // agregando el usuario

        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }

})






























// ! Formulario Validado

// document.getElementById('formulario').addEventListener('submit', (event) => {
//     event.preventDefault()

//     // ? Validar nombre

//     let entradaNombre = document.getElementById('name')
//     let errorNombre = document.getElementById('nameError')

//     if (entradaNombre.value.trim() === '') {
//         errorNombre.textContent = 'por favor, introduce tu nombre'
//         errorNombre.classList.add('error-message')
//     } else {
//         errorNombre.textContent = ''
//         errorNombre.classList.remove('error-message')
//     }

//     // ? Validar correo eléctronico
    
//     let emailEntrada = document.getElementById('email')
//     let emailError = document.getElementById('emailError')
//     let emailPettern = /^[^\s@]+@[^/s@]+\.[^\s@]+$/; // ? Patrón de validación básico

//     if (!emailPettern.test(emailEntrada.value)) {
//         emailError.textContent = 'por favor, introduce un email válido'
//         emailError.classList.add('error-message')
//     } else {
//         emailError.textContent = ''
//         emailError.classList.remove('error-message')
//     }
    
//     // ? Validar la contraseña
    
//     let contrasenaEntrada = document.getElementById('password')
//     let contrasenaError = document.getElementById('passwordError')
//     let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    

//     if (!contrasenaPattern.test(contrasenaEntrada.value)) {
//         contrasenaError.textContent = 'La contraseña debe tener al menos 8 carácteres, números, mayúsculas, minúsculas y carácteres especiales'
//         contrasenaError.classList.add('error-message')
//     } else {
//         contrasenaError.textContent = ''
//         contrasenaError.classList.remove('error-message')
//     }
    
//     // ? Si todos los campos son válidos enviar formulario

//     if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
//         alert('El formulario se ha enviado con éxito')
//         document.getElementById('formulario').reset();
//     }

// })