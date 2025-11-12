function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value)
    .then(Response => {
        hideLoading();
        window.location.href = "pages/Home/Home.html";
    }).catch(error => {
        hideLoading();
        console.error('Erro ao logar usuário:', error);
        alert(getErrorMsg(error));
        });
    };

function getErrorMsg(error) {
    if (error.code == "auth/invalid-credential") {
        return "Login falhou. Verifique seu E-mail e Senha.";
    }
    return error.message;
}

function register() {
    showLoading();
    window.location.href = "pages/Register/Register.html";
}

function recPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert("Email de recuperação de senha enviado! Caso não tenha recebido, verifique se o email está correto ou se está na caixa de spam.");
    }).catch(error => {
        hideLoading();
        alert(getErrorMsg(error));
    });
}
function isEmailValid() {
    const email = form.email().value;
    if (!email) {
       return false; 
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    
}

function togglePasswordErrors(){
    const senha = form.password().value;
    form.passwordRequiredError().style.display = senha ? "none" : "block";
    
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recSenha().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.entrar().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const senha = form.password().value;
    if (!senha) {
       return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("senha"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    entrar: () => document.getElementById("entrar"),
    recSenha: () => document.getElementById('rec-senha'),
}