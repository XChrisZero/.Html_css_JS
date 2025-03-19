function horaAtual()
{
    document.getElementById('date').innerHTML = Date()
}

function mudarCor(  )
{
    document.getElementById('primeiro').style.backgroundColor='white'
    document.getElementById('segundo').style.backgroundColor='black'
    document.getElementById('terceiro').style.backgroundColor='white'
}

function voltarCor(  )
{
    document.getElementById('primeiro').style.backgroundColor=''
    document.getElementById('segundo').style.backgroundColor=''
    document.getElementById('terceiro').style.backgroundColor=''
}

function letraGrande()
{
    
    document.getElementById('primeiro').style.fontSize  ='32'
    document.getElementById('segundo').style.fontSize  ='32'
    document.getElementById('terceiro').style.fontSize  ='32'

}

function letraNormal()
{
    
    document.getElementById('primeiro').style.fontSize  =''
    document.getElementById('segundo').style.fontSize  =''
    document.getElementById('terceiro').style.fontSize  =''

}

function passarEmCima()
{
    document.getElementById('primeiro').style.backgroundColor='black'
    document.getElementById('segundo').style.backgroundColor='white'
    document.getElementById('terceiro').style.backgroundColor='black'
    
}

function tirarMouse()
{
    document.getElementById('primeiro').style.backgroundColor=''   
    document.getElementById('segundo').style.backgroundColor=''
    document.getElementById('terceiro').style.backgroundColor=''
}

function alerta1()
{

}

alert("Vasco em primeiro!");
