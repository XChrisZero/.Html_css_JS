function horaAtual()
{
    document.getElementById('date').innerHTML = Date()
}

function mudarCorl1()
{
    document.getElementById('linhaVasco').style.backgroundColor='pink'
    document.getElementById('linhaPalmeiras').style.backgroundColor='black'
    document.getElementById('linhaFlamengo').style.backgroundColor='pink'
}

function mudarCor()
{
    document.getElementById('linhaVasco').style.backgroundColor='white'
    document.getElementById('linhaPalmeiras').style.backgroundColor='black'
    document.getElementById('linhaFlamengo').style.backgroundColor='white'
}

function voltarCor()
{
    document.getElementById('linhaVasco').style.backgroundColor=''
    document.getElementById('linhaPalmeiras').style.backgroundColor=''
    document.getElementById('linhaFlamengo').style.backgroundColor=''
}

function letraGrande()
{
    
    document.getElementById('linhaVasco').style.fontSize  ='32'
    document.getElementById('linhaPalmeiras').style.fontSize  ='32'
    document.getElementById('linhaFlamengo').style.fontSize  ='32'

}

function letraNormal()
{
    
    document.getElementById('linhaVasco').style.fontSize  =''
    document.getElementById('linhaPalmeiras').style.fontSize  =''
    document.getElementById('linhaFlamengo').style.fontSize  =''

}

function passarEmCima()
{
    document.getElementById('linhaVasco').style.backgroundColor='black'
    document.getElementById('linhaPalmeiras').style.backgroundColor='white'
    document.getElementById('linhaFlamengo').style.backgroundColor='black'
    
}

function tirarMouse()
{
    document.getElementById('linhaVasco').style.backgroundColor=''   
    document.getElementById('linhaPalmeiras').style.backgroundColor=''
    document.getElementById('linhaFlamengo').style.backgroundColor=''
}

function alertaP()
{
    alert("cuidado porco!");
}

function alertaF()
{
    alert("Urubu a vista!");
}

function alertaV()
{
    alert("Tenho dó só por torcer pra isso");
}

alert("Vasco em primeiro!");
