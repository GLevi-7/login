const nomeTutorInput = document.getElementById("nome_tutor");
const nomePetInput = document.getElementById("nome_pet");
const racaInput = document.getElementById("raca");
const generoInput = document.getElementById("genero");
const pesoInput = document.getElementById("peso");
const idadeInput = document.getElementById("idade");
const btn = document.getElementById("botao");

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const nomeTutor = nomeTutorInput.value.trim();
    const nomePet = nomePetInput.value.trim();
    const raca = racaInput.value.trim();
    const genero = generoInput.value;
    const peso = pesoInput.value.trim();
    const idade = idadeInput.value.trim();

    if (!nomeTutor || !nomePet || !raca || !genero || !peso || !idade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                nomeTutor, 
                nomePet, 
                raca, 
                genero, 
                peso: Number(peso), 
                idade: Number(idade)
            })
        });

        const data = await response.json();

        if (response.ok) {
            
            alert(data.message || 'Cadastro realizado com sucesso!');
            
            
            localStorage.setItem('ultimoPetCadastrado', JSON.stringify(data));

            
            window.location.href = 'dashboard.html';
        } else {
            
            alert(data.message || 'Erro ao realizar o cadastro.');
        }

    } catch (error) {
        
        console.error('Erro na requisição:', error);
        alert('Não foi possível conectar ao servidor.');
    }
});