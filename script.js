const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event



                      const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const data = document.querySelector('#data').value;
  const hora = document.querySelector('#hora').value;

  const agendamento = {
    nome,
    email,
    data,
    hora
  };

  try {
    const response = await fetch('/api/agendamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(agendamento)
    });

    if (response.ok) {
      alert('Agendamento realizado com sucesso!');
      form.reset();
    } else {
      alert('Erro ao agendar. Tente novamente mais tarde.');
    }
  } catch (error) {
    alert('Erro ao agendar. Tente novamente mais tarde.');
  }
});
