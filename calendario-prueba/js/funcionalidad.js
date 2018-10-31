var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var dia_text = ["Dom", "Lun", "Mar", "Mie", "Juv", "Vie", "Sab"];


function datos(){
  var fecha = document.getElementById("fecha-inicio").value;
  var dias = Number(document.getElementById("cantidad-dias").value);
  if(fecha == "" || dias == "" || dias<1){
    alert("Ingrese una fecha y numeros mayores a cero");
  }else{
    //Obteniendo los valore ingresados (Fecha y Días)
    /*var fecha = document.getElementById("fecha-inicio").value;
    var dias = Number(document.getElementById("cantidad-dias").value);*/
    dias = dias + 1;

    //console.log(dias);

    //Creando una instancia de la fecha recibida para sumarle los días y obtener la fecha final
    var mifecha = new Date(fecha);
    var diaDelMes = mifecha.getDate();
    mifecha.setDate(diaDelMes + dias); //Fecha Final

    /*console.log("Fecha inicial: " + fecha);
    console.log("Fecha final: " + mifecha);
    console.log("Día: " + mifecha.getDay() + " Mes: " + mifecha.getMonth() + " Año: " + mifecha.getFullYear());*/

    //Creando instancia de la fecha obtenida para encontrar la diferencia de años
    var fechaInicial = new Date(fecha);
    var diferenciaAnios = (mifecha.getFullYear() - fechaInicial.getFullYear());
    //console.log("Diferencia de años: " + diferenciaAnios);

    //Obteniendo la cantidad de mese a mostrar
    var contarMeses = 0;
    if(diferenciaAnios > 0){
      var inicial = fechaInicial.getMonth();
      var final = mifecha.getMonth();
      for(var j = fechaInicial.getFullYear(); j<=mifecha.getFullYear(); j++){
        for(var i = inicial; i<=final; i++){
          contarMeses++;
        }
        inicial = 0;
      }
    }else{
      var inicial = fechaInicial.getMonth();
      var final = mifecha.getMonth();
      for(var i = inicial; i<=final; i++){
        contarMeses++;
      }
    }

    //console.log("Meses " + contarMeses);

    //Llamado de los metodos que haran los calendarios
    estructurar(fechaInicial, diferenciaAnios);
    numerar(dias, fechaInicial, mifecha);
  }
}

function estructurar(fecha, diferenciaAnios) {
  var mesInicial = fecha.getMonth();
  console.log(mesInicial);
  for(var j = 0; j<= diferenciaAnios; j++){
    for (m = mesInicial; m <= 11; m++) {
      //Mes
      let mes = document.createElement("DIV");
      mes.className = "mes";
      document.body.appendChild(mes);
      //Tabla
      let tabla_mes = document.createElement("TABLE");
      tabla_mes.className = "tabla_mes";
      mes.appendChild(tabla_mes);
      //Título
      let titulo = document.createElement("CAPTION");
      titulo.className = "titulo";
      titulo.innerText = mes_text[m];
      tabla_mes.appendChild(titulo);
      //Cabecera
      let cabecera = document.createElement("THEAD");
      tabla_mes.appendChild(cabecera);
      let fila = document.createElement("TR");
      cabecera.appendChild(fila);
      for (d = 0; d < 7; d++) {
        let dia = document.createElement("TH");
        dia.innerText = dia_text[d];
        tabla_mes.className = "tabla_mes";
        fila.appendChild(dia);
      }
      //Cuerpo
      let cuerpo = document.createElement("TBODY");
      tabla_mes.appendChild(cuerpo);
      for (f = 0; f < 6; f++) {
        let fila = document.createElement("TR");
        cuerpo.appendChild(fila);
        for (d = 0; d < 7; d++) {
          let dia = document.createElement("TD");
          dia.innerText = "";
          fila.appendChild(dia);
        }     
      }    
    }
    m = 0;
  }
}

function numerar(dias, fechaRecibida, mifecha) {
  var anioInicial = fechaRecibida.getFullYear();
  var anioFinal = mifecha.getFullYear();
  for(j = anioInicial; j<=anioFinal; j++){
    for (i = 1; i <= dias; i++) {
      let fecha = fechaPorDia(j, i);
      let mes = fecha.getMonth();
      let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
      let dia = fecha.getDate()
      let dia_semana = fecha.getDay();
      if (dia == 1) {var sem = 0;}
      select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
      if (dia_semana == 6) { sem = sem + 1; }
    }
  }
}

function fechaPorDia(año, dia) {
  var date = new Date(año, 0);
  return new Date(date.setDate(dia));
}



/*var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

estructurar();

function estructurar() {
  for (m = 0; m <= 11; m++) {
    //Mes
    let mes = document.createElement("DIV");
    mes.className = "mes";
    document.body.appendChild(mes);
    //Tabla
    let tabla_mes = document.createElement("TABLE");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);
    //Título
    let titulo = document.createElement("CAPTION");
    titulo.className = "titulo";
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);
  }
}*/