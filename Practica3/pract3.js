 // ejercio 1
 function Multiplicacion()
 {
     var numero1 = parseFloat(document.getElementById('num1').value);
     var numero2 =parseFloat(document.getElementById('num2').value);
     var numero3 =parseFloat(document.getElementById('num3').value);
     
     var resultado = numero1*numero2*numero3;
 
     document.getElementById('res').value = resultado
     //return resultado;
 }
 
 // Ejercicio 2
 function clima()
 {
     var Clima = parseFloat(document.getElementById('grados').value);

     var a=1;
     var b;
     
     if( Clima == -10 || Clima <=15)
     {
         b='Frio'
     }
     else
     {
         if(Clima == 16 || Clima <=25)
         {
             b='Templado'
         }
         else
         {
             if(Clima == 26 || Clima <= 40)
             {
                 b='Calor'
             }
             else
             {
                 b='Me derrito'
             }
         }
     }
     document.getElementById('Resultado').value=b;
 }
 // Ejercicio 3
 function factorial(numero1)
        {
            var num1=parseFloat(document.getElementById('numero1').value);
            var resultado=1
            for (var i=num1; i>0; i--)
            {
                resultado*=i;       
            }
            document.getElementById('resultado').value=resultado;
        }  
 // Ejercicio 4
 function fecha()
 {
     var f = new Date();
     var diaSemana = f.getDay();
     var dia = f.getDate();
     var mes = f.getMonth();
     var year =f.getFullYear();

     var pDiaSemana = document.getElementById('mostrar');
            var pDia = document.getElementById('mostrar');
            var pMes = document.getElementById('mostrar');
            var pYear = document.getElementById('mostrar');
   
            var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            pDiaSemana = semana[diaSemana];
            pDia = dia;  
            var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            pMes = meses[mes];
            pYear = year; 
            var res= pDiaSemana+" "+pDia+" de "+pMes+" "+" del "+ pYear;
   
     document.getElementById('mostrar').value= res;

 }
 
 