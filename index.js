let ataglobal = "";
let stdglobal = "";
let staglobal = "";
let atdglobal = "";

function TimeInterinario() {
  let std = document.getElementById("std").value.split(':');
  let sta = document.getElementById("sta").value.split(':');

  if (std[0] != "" && sta[0] != "") {

    let segundosStd = convertHoursToSeconds(std[0], std[1]);
    let segundosSta = convertHoursToSeconds(sta[0], sta[1]);

    stdglobal = segundosStd;
    staglobal = segundosSta;

    let resultado = segundosStd - segundosSta;
    ///console.log({resultado});

    if (resultado <= 0) {
      document.querySelector('#intinerario').innerHTML = "0 Hrs : 00 Mins";
    }
    else {

      let segundos = convertSecondsToHoursWhithoutMinutes(resultado);
      document.querySelector('#intinerario').innerHTML = segundos;

    }

  }

}

function TimePlatform() {
  let ata = document.getElementById("ata").value.split(':');
  let atd = document.getElementById("atd").value.split(':');

  if (ata[0] != "" && atd[0] != "") {

    let segundosAta = convertHoursToSeconds(ata[0], ata[1]);
    let segundosAtd = convertHoursToSeconds(atd[0], atd[1]);

    ataglobal = segundosAta;
    atdglobal = segundosAtd;

    let resultado = segundosAtd - segundosAta;
    //console.log({resultado});

    if (resultado <= 0) {
      document.querySelector('#plataforma').innerHTML = "0 Hrs : 00 Mins";
    }
    else {
      // let resta = segundosAtd - segundosStd
      let segundos = convertSecondsToHoursWhithoutMinutes(resultado);
      document.querySelector('#plataforma').innerHTML = segundos;

    }

  }

}

function DemorTotal() {

  let std = document.getElementById("std").value.split(':');
  let atd = document.getElementById("atd").value.split(':');

  if (std[0] != "" && atd[0] != "") {
    let segundosStd = convertHoursToSeconds(std[0], std[1]);
    let segundosAtd = convertHoursToSeconds(atd[0], atd[1]);

    if (segundosAtd <= segundosStd) {
      document.querySelector('.demora').innerHTML = "SIN DEMORA";
    }
    else {
      let resta = segundosAtd - segundosStd
      let segundos = convertSecondsToHoursWhithoutMinutes(resta);
      document.querySelector('.demora').innerHTML = segundos;

    }

  }

}

function valor(result) {
  let tiempoviv = document.getElementById("valor").value.split(':');

  let segundoTviv = convertHoursToSeconds(0, tiempoviv[0]);
  let tiempoplataforma = atdglobal - ataglobal;

  console.log({ tiempoplataforma });

  if ((ataglobal + segundoTviv) <= stdglobal) 
  {
    if (atdglobal <= stdglobal) 
    {
      result = "SIN DEMORA";
      document.querySelector('#local').innerHTML = result;
    }
    else 
    {
      result = atdglobal - stdglobal
      let segundos = convertSecondsToHoursWhithoutMinutes(result);
      document.querySelector('#local').innerHTML = segundos;
    }

    return result;
  }
  else if (tiempoplataforma <= segundoTviv)
  {
    result = "Sin Demora";
    document.querySelector('#local').innerHTML = result;
    return result;
  }
  else {
    result = tiempoplataforma - segundoTviv;
    let resta = convertSecondsToHoursWhithoutMinutes(result);
    document.querySelector('#local').innerHTML = resta;
    return result;
  }
}

function valores(){
  let g15 = ataglobal - staglobal;
  let g17 = "";
  let g19 = "";

  //Sacamos el tiempo VIV
  let tiempoviv = document.getElementById("valor").value.split(':');
  let segundoTviv = convertHoursToSeconds(0, tiempoviv[0]);

  //Sacamos el tiempo en plataforma
  let plataforma = atdglobal - ataglobal;

  let demora = atdglobal - stdglobal;
  let local = valor();
 
  console.log({demora}, {local});
 
  if (plataforma <= segundoTviv){
    //Sacamos la demora total
    if (atdglobal <= stdglobal) {
      g19 = "Sin Demora";
    }
    else {
      let resta = atdglobal - stdglobal;
      g19 = resta;
    }
  }

  else if (demora <= local){
    g19 = "Sin repercusion";

  }
  else {
    g19 = demora - local;
  }
  
  
  if (g19 != "Sin repercusion" && g19 > g15){
    g17 = g19 - g15;
  }
  else {
    g17 = "00";
  }

  //console.log({g19}, {g17}, {g15});

  if (g19 != "Sin repercusion"){
    let repercusion = g19 - g17;
    
    document.querySelector('#repercusion').innerHTML = convertSecondsToHoursWhithoutMinutes(repercusion);
  }
  else {
    document.querySelector('#repercusion').innerHTML = "Sin repercusion";
  }

  if (g19 != "Sin repercusion" && g19 > g15){
    let TiempoMenor = g19 - g15;
    document.querySelector('#menor').innerHTML = convertSecondsToHoursWhithoutMinutes(TiempoMenor);
  }
  else {
    document.querySelector('#menor').innerHTML = g17;
  }
}



function convertHoursToSeconds(horas, minutos) {
  let horasSegundos = horas * 3600;
  let minutosSegundos = minutos * 60;
  let segundosTotales = horasSegundos + minutosSegundos;
  return segundosTotales;
}

function convertSecondsToHoursWhithoutMinutes(segundos) {
  let horas = segundos / 3600;
  let horasRedondeadas = Math.floor(horas);
  let minutos = (horas - horasRedondeadas) * 60;
  let minutosRedondeados = Math.round(minutos);
  if (minutosRedondeados < 10) {
    return horasRedondeadas + " Hrs : " + " 0" + minutosRedondeados + " Min";
  }
  else {
    return horasRedondeadas + " Hrs : " + minutosRedondeados + " Min";
  }

}
