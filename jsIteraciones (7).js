function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta !="no")
	{
		numero=prompt("ingrese numero");
		respuesta=prompt("quiere seguir")
		numero=parseInt(numero);

		contador=contador+1;
		acumulador=acumulador+numero;
	} 

		promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN