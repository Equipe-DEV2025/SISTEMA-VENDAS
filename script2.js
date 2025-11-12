 const form = document.getElementById('login-form');
    const togglePassword = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        if(passwordField.type === 'password'){
            passwordField.type = 'text';
            togglePassword.style.color = '#2563eb';
        } else {
            passwordField.type = 'password';
            togglePassword.style.color = '#9ca3af';
        }
    });
    togglePassword.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            togglePassword.click();
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if(username === ''){
            alert('Por favor, digite seu nome.');
            form.username.focus();
            return;
        }
        if(password === ''){
            alert('Por favor, digite sua senha.');
            form.password.focus();
            return;
        }
        // Aqui poderia ter uma validação de senha real

        // Salvar usuário no localStorage para usar na tela principal
        localStorage.setItem('usuarioSistemaAgenda', username);

        // Redirecionar para a tela principal (index.html)
        window.location.href = 'index.html';
    });