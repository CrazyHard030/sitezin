function calcular()
{
    var 
    cbotcafe = document.getElementById("tcafe");
    a=document.getElementById("quantidade").Value;
    
    if (a > 0 && cbotcafe > 0)
    {
    switch (cbotcafe)
        {
        case 0:
        document.getElementById("valor").Value = 0
        break;
        case 1:
        document.getElementById("valor").Value=Number(a) * 1.50
        break;
        case 2:
        document.getElementById("valor").Value=Number(a) * 2.30
        break;
        case 3:
        document.getElementById("valor").Value=Number(a) * 3.00
        break;
        case 4:
        document.getElementById("valor").Value=Number(a) *1.20
        break;
        case 5:
        document.getElementById("valor").Value=Number(a) * 2.00
        break;
        case 6:
        document.getElementById("valor").Value=Number(a) * 0.75
        break;
        case 7:
        document.getElementById("valor").Value=Number(a) * 1.00
        break;
        case 8:
        document.getElementById("valor").Value=Number(a) * 2.70
        break;
        case 9:
        document.getElementById("valor").Value=Number(a) * 3.20
        break;
        case 10:
        document.getElementById("valor").Value=Number(a) * 2.00
        break;
        }
    }
}