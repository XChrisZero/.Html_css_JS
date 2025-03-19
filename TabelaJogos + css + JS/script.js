// Variáveis para armazenar o estado original
const coresOriginais = {};
const tamanhosOriginais = {};

function mostrarDataHora() 
{
    document.getElementById('demo').innerHTML = Date();
}

function mudarCorTabela() 
{
    const elementosTab = document.querySelectorAll('.tab');
    elementosTab.forEach(elemento => 
    {
        elemento.style.backgroundColor = 'red';
    });
}

function mudarTamanhoLetra() 
{
    const elementosPrimeiro = document.querySelectorAll('.primeiro');
    elementosPrimeiro.forEach(elemento => 
    {
        const id = elemento.id;

        if (!tamanhosOriginais[id]) 
        {
            // Armazena o tamanho original 
            tamanhosOriginais[id] = elemento.style.fontSize = '25px';
        }

        if (elemento.style.fontSize === '50px') 
        {
            // Retorna ao tamanho original
            elemento.style.fontSize = tamanhosOriginais[id];
        } else 
            {
                // Muda para 100px
                elemento.style.fontSize = '50px';
            }
    });
}