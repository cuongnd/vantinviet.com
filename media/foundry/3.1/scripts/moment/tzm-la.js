(function(){

// module factory: start

var moduleFactory = function($) {
// module body: start

var module = this; 
var exports = function() { 

// moment.js language configuration
// language : Morocco Central Atlas Tamaziɣt in Latin (tzm-la)
// author : Abdel Said : https://github.com/abdelsaid

$.moment.lang('tzm-la', {
    months : "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
    monthsShort : "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
    weekdays : "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    weekdaysShort : "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    weekdaysMin : "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[asdkh g] LT",
        nextDay: '[aska g] LT',
        nextWeek: 'dddd [g] LT',
        lastDay: '[assant g] LT',
        lastWeek: 'dddd [g] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dadkh s yan %s",
        past : "yan %s",
        s : "imik",
        m : "minuḍ",
        mm : "%d minuḍ",
        h : "saɛa",
        hh : "%d tassaɛin",
        d : "ass",
        dd : "%d ossan",
        M : "ayowr",
        MM : "%d iyyirn",
        y : "asgas",
        yy : "%d isgasn"
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

}; 

exports(); 
module.resolveWith(exports); 

// module body: end

}; 
// module factory: end

FD31.module("moment/tzm-la", moduleFactory);

}());