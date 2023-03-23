// Signup //

const login = document.querySelector('.login'),
create = document.querySelector('.create'),
container = document.querySelector('.container'),
btn = document.querySelector('.signup .inputBox #st');

login.addEventListener(("click"), ()  => {
    container.classList.add('signinform');
});

create.onclick = function () {
    container.classList.remove('signinform');
};

function f2() {
    eye = document.getElementById("eye");
    e2 = document.getElementById("eye2");
    password = document.getElementById("password");
    if (password.type === 'password') {
        password.type = 'text';
        e2.style.display = "block";
        eye.style.display = "none";
    }
}

function f3() {
    e2 = document.getElementById("eye2");
    eye = document.getElementById("eye");
    password = document.getElementById("password");
    if (password.type === 'text') {
        password.type = 'password';
        e2.style.display = 'none';
        eye.style.display = 'block';
    }
}

function f1() {
    eye = document.getElementById("eye3");
    e2 = document.getElementById("eye4");
    password = document.getElementById("ent");
    if (password.type === 'password') {
        password.type = 'text';
        e2.style.display = "block";
        eye.style.display = "none";
    }
}

function f4() {
    eye = document.getElementById("eye3");
    e2 = document.getElementById("eye4");
    password = document.getElementById("ent");
    if (password.type === 'text') {
        password.type = 'password';
        e2.style.display = 'none';
        eye.style.display = 'block';
    }
}



// Login //

function fi2(){
    eye = document.getElementById("eye11");
    e2 = document.getElementById("eye22");
    if (password.type === 'password') {
        password.type = 'text';
        e2.style.display = "block";
        eye.style.display = "none";
    }
}

function fi3() {
    eye = document.getElementById("eye11");
    e2 = document.getElementById("eye22");
    password = document.getElementById("snppass");
    if (password.type === 'text') {
        password.type = 'password';
        e2.style.display = 'none';
        eye.style.display = 'block';
    }
}

function Login() {
    usrname = document.getElementById("snpusrname").value;
    password = document.getElementById("snppass").value;
    username = localStorage.getItem("userName");
    pasword = localStorage.getItem("password");
    if (usrname == username && password == pasword) {
        console.log("Ok done!!");
    } else {
        alert("Not Valid the username or password!!");
    }
}


  
  // Initialize Firebase

function he(){
    const firebaseConfig = {
        apiKey: "AIzaSyDZ8X0zSB0ykXgUx9_NfHFg97Idjjcc_Nk",
        authDomain: "registration-applicatoion.firebaseapp.com",
        projectId: "registration-applicatoion",
        storageBucket: "registration-applicatoion.appspot.com",
        messagingSenderId: "939866281035",
        appId: "1:939866281035:web:45bc2af07451ea924429ce",
        measurementId: "G-QLMG2HBQ6Y"
    };
    
    firebase = initializeApp(firebaseConfig);

    phone_number = document.getElementById("number").value;
    password = document.getElementById("password").value;
    ent = document.getElementById("ent").value;
    usrname = document.getElementById("usrname").value;
    if (ent == password) {
        localStorage.setItem("userName", usrname);
        localStorage.setItem("password", ent);
        firebase.database().ref("/").child(usrname, phone_number, ent).update({
            purpose: "adding users id's"
        })
    } else {
        alert("Your password is entered wrongly!!");
    };
}