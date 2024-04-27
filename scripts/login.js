const button = document.querySelector('#btn');
const usuarioInput = document.querySelector('#user');
const senhaInput = document.querySelector('#password');

button.addEventListener('click', () => {

    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    if (usuario === '1234' && senha === '1234') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Usuário ou senha inválidos.');
    }
});