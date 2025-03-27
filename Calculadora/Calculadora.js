
function op()
{
    var v1 = parseInt(document.getElementById("v1").value)
    var v2 = parseInt(document.getElementById("v2").value)
    var op = document.getElementById("op").value
    var total;

    switch (op)
    {
        case '+': 
            total =  v1 + v2

            break;
        
        case '-':
            total = v1 - v2
        
            break;
        
        case '*':
            total = v1 * v2
            break;
        
        case '/':
            total = v1 / v2
            break;

        default: 
        
            break;
        
    } 

    document.getElementById('resultado').innerHTML = total;
    

}
alert("Resultado:", total );
