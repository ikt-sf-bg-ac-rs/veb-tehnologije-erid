let predmetiPrvaGodina = document.querySelector('.predmetiPrvaGodina');
let predmetiDrugaGodina = document.querySelector('.predmetiDrugaGodina');

let tasterPrvaGodina = document.querySelector('#tasterPrvaGodina');
let tasterDrugaGodina = document.querySelector('#tasterDrugaGodina');
let tasterNoviUnos = document.querySelector('#tasterNoviUnos');

function podrazumevaniPrikaz(){

    predmetiPrvaGodina.style.display = 'none';
    predmetiDrugaGodina.style.display = 'none';
}

function prikazPredmetaIzPrveGodine(){

    predmetiPrvaGodina.style.display = 'flex';
    predmetiPrvaGodina.style.display.flexDirection = 'column';
    predmetiDrugaGodina.style.display = 'none';

}

function prikazPredmetaIzDrugeGodine(){

    predmetiPrvaGodina.style.display = 'none';
    predmetiDrugaGodina.style.display = 'flex';
    predmetiDrugaGodina.style.display.flexDirection = 'column';

}

podrazumevaniPrikaz();

tasterPrvaGodina.addEventListener('click', prikazPredmetaIzPrveGodine);
tasterDrugaGodina.addEventListener('click', prikazPredmetaIzDrugeGodine);
tasterNoviUnos.addEventListener('click', podrazumevaniPrikaz);


