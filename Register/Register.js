function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function onChangeSenha() {
    const senha = form.senha().value;
    form.passwordRequiredError().style.display = senha ? "none" : "block";
    form.passwordMinLengthError().style.display = senha.length >= 6 ? "none" : "block";
}

function onChangeComfirmarSenha() {
    const senha = form.senha().value;
    const confirmarSenha = form.confirmarSenha().value;
    form.passwordMatchError().style.display = senha === confirmarSenha ? "none" : "block";
}

const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha'),
    confirmarSenha: () => document.getElementById('conf-senha'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordMatchError: () => document.getElementById('password-match-error'),
}