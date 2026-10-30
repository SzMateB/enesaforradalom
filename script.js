// A történet csomópontjait tartalmazó objektum
const story = {
    start: {
        hatter: "url(/kepek/haterek/sokember.jpg)",
        szoveg: "Épp a történelem dolgozat felett izzadsz a tanteremben, amikor a padod mélyén egy furcsa, tekerőgombokkal teli fémszerkezetre bukkansz. Ahogy kíváncsian megérinted, a világ forgani kezd veled, a terem eltűnik, és a következő pillanatban a hűvös, őszi budapesti utcán találod magad. A tömeg zúg, az emberek zászlókat lengetnek: 1956. október 23-a van, a Magyar Rádió épülete előtt állsz, és a hangulat pattanásig feszült. Hirtelen dörrenés hallatszik. Mit teszel?",
        gombok: [
            { szoveg: "Megpróbálod felidézni a töri órán tanultakat", kovetkezo: "opcio1_1" },
            { szoveg: "Menedéket keresel a kaotikus utcákon.", kovetkezo: "opcio2_1" },
            { szoveg: "A lövések hallatán a tömeg élére állsz", kovetkezo: "opcio3_1" },
            { szoveg: "Megpróbálod megváltoztatni az események kimenetelét.", kovetkezo: "opcio4_1" }
        ]
    },

    // ==========================================
    // 1. OPCIÓ: Tanító / Ismeretterjesztő ág (Történelmi hitelesség)
    // ==========================================
    opcio1_1: {
        hatter: "url(/kepek/haterek/magyarradio.jpg)",
        szoveg: "Emlékszel a tankönyvből: a Rádió épületénél dördültek el az első lövések. A tömeg a 16 pont beolvasását követeli. Mit teszel, hogy információhoz juss?",
        gombok: [
            { szoveg: "A tüntetőkhöz mész és kikérdezed őket a MEFESZ pontjairól.", kovetkezo: "opcio1_2" },
            { szoveg: "Nem érdekel az egész és hazamész.", kovetkezo: "opcio1_1fail" },
            { szoveg: "A Bem-szobor felé veszed az irányt, ahol a diákfelvonulás kezdődött.", kovetkezo: "opcio1_2" }
        ]
    },

    opcio1_1fail: {
        hatter: "url(/kepek/haterek/osztalyterem.jpg)",
        szoveg: "Elmész a tömegtől és az időgéped segítségével vissza jutsz a jelenbe. A dolgozat még mindig előtted van, de téged ez se érdekel, és beadod a lapot üresen. 1-es",
        gombok: [
            {szoveg: "Újrakezdés", kovetkezo: "start"},
        ]
    },

    opcio1_2: {
        hatter: "url(/kepek/haterek/bemszobor.jpg)",
        szoveg: "Megtudod, hogy a nép a szovjet csapatok kivonását és Nagy Imre kormányfővé nevezését akarja. Október 24-re virradóan megszerveződnek az első ellenálló csoportok. Hova csatlakozol megfigyelőként?",
        gombok: [
            { szoveg: "Emlékszel, hogy volt egy ilyen kérdés, és visszamész a jelenbe.", kovetkezo: "opcio1_2fail" },
            { szoveg: "A Corvin közbe, a pesti srácok legfőbb ellenállási központjába.", kovetkezo: "opcio1_3" },
            { szoveg: "A Széna térre, Bammel 'Szabó Bácsi' független csoportjához.", kovetkezo: "opcio1_3" }
        ]
    },
    
    opcio1_2fail: {
        hatter: "url(/kepek/haterek/osztalyterem.jpg)",
        szoveg: "A feladatot helyesen megoldod, de rájössz, hogy ennyi nem lesz elég. 2-es",
        gombok: [
            {szoveg: "Újrakezdés", kovetkezo: "start"},
        ]
    },
    
    opcio1_3: {
        hatter: "url(/kepek/haterek/harc.jpg)",
    szoveg: "A harcok egyre hevesebbé válnak, a szovjet páncélosok Budapest utcáin haladnak. A felkelők ellenállnak, miközben a környék lakói igyekeznek biztonságba húzódni. Te megfigyelőként hogyan reagálsz a kialakult helyzetre?",
    gombok: [
        { szoveg: "Biztonságos helyre húzódsz, és feljegyzed az eseményeket.", kovetkezo: "opcio1_4" },
        { szoveg: "A környék lakóinak segítesz biztonságos helyre jutni.", kovetkezo: "opcio1_3fail" }
    ]
    },

    opcio1_3fail: {
        hatter: "url(/kepek/haterek/osztalyterem.jpg)",
        szoveg: "Megpróbálsz segíteni a környék lakóinak, hogy biztonságos helyre jussanak. Miközben útba igazítod őket, szovjet katonák állítanak meg és őrizetbe vesznek. Az időgéped segítségével vissza jutsz a jelenbe. Az így meg szerzett tudással megírod a dolgozatot. 4-es",
        gombok: [
            {szoveg: "Újrakezdés", kovetkezo: "start"},
        ]
    },

    opcio1_4: {
        hatter: "url(/kepek/haterek/nagyimre.webp)",
        szoveg: "November 4-én hajnalban a szovjet hadsereg nagyszabású támadást indít Magyarország ellen. Nagy Imre rádióban jelenti be az intervenciót. Budapest több pontján ismét heves harcok kezdődnek. A forradalom új, tragikus szakaszba lép. Hogyan folytatod a történet megfigyelését?",
        gombok: [
            { szoveg: "Gyorsan eltekered a gombokat, hogy visszatérj a történelem dolgozathoz", kovetkezo: "opcio1_5ending" },
            { szoveg: "Maradsz hogy feljegyezd az eseményeket", kovetkezo: "opcio1_5fail" }
        ]
    },
    opcio1_5ending: {
        hatter: "url(/kepek/haterek/osztalyterem.jpg)",
        szoveg: "A megszerzett tudásoddal megírod a dolgozatot. hibátlan 5-ös a legjobb az osztályban",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },
    opcio1_5fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "Úgy döntesz, hogy maradsz, és tovább figyeled az eseményeket. Feljegyzed a szovjet támadás hírét, a budapesti harcokat és az emberek reakcióit. Ám a városban egyre veszélyesebbé válik a helyzet. A zűrzavarban elveszíted az időgépedet. A múltban ragadtál és elfogtak a szovjet katonák.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    // ==========================================
    // 2. OPCIÓ: Riasztó / Menekülős ág (Több ending, nagy döntés)
    // ==========================================
opcio2_1: {
        hatter: "url(/kepek/haterek/tomegpanik.jpg)",
        szoveg: "A lövések zajára a pánikba esett tömeg eltapossa egymást. Megpróbálsz bemenekülni egy közeli bérház kapuja alá, de a kapu zárva van. Merre indulsz?",
        gombok: [
            { szoveg: "Befordulsz egy sötét mellékutcába a Múzeum körút felé.", kovetkezo: "opcio2_2" },
            { szoveg: "Beugrasz egy elhagyatott villamos mögé fedezékért.", kovetkezo: "opcio2_2_1" }
        ]
    },
    opcio2_2: {
        hatter: "url(/kepek/haterek/pince.webp)",
        szoveg: "A mellékutcában egy helyi család behúz az óvóhelyre. A pincében nők és gyerekek szoronganak a becsapódó lövedékek zajában. Napokig itt bujkálsz, de az élelem fogytán van.",
        gombok: [
            { szoveg: "Megpróbálsz élelmet szerezni a vöröskeresztes osztópontról.", kovetkezo: "opcio2_2fail" },
            { szoveg: "A pincében maradsz és várod, hogy csendesedjen a harc.", kovetkezo: "opcio2_3" }
        ]
    },

    opcio2_2fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "Elindulsz élelmet szerezni, de út közben eltévedsz, elfognak és elveszik a kütyüt.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    opcio2_2_1: {
        hatter: "url(/kepek/haterek/villamos.jpg)",
        szoveg: "A villamos mellett golyók süvítenek el. Egy idegen férfi megragadja a karodat, és behúz egy nyitott kapualjba. Megmenekültél a közvetlen veszélytől.",
        gombok: [
            { szoveg: "Nem követed a férfit.", kovetkezo: "opcio2_2_1fail" },
            { szoveg: "Követed a férfit.", kovetkezo: "opcio2_3" }
        ]
    },

    opcio2_2_1fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "Saját utadon indulsz el, csak hogy a tapasztalat hiányában elfognak és el veszik a kütyüt. A múltban ragadtál",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },
    
    opcio2_3: {
        hatter: "url(/kepek/haterek/tankok.webp)",
        szoveg: "A novemberi szovjet invázió eléri a várost. A szerkezet a zsebedben felizzik: lehetőséged van aktiválni és visszatérni a jelenedbe, vagy itt maradni és megpróbálni átlépni a nyugati határt (disszidálni).",
        gombok: [
            { szoveg: "Visszatérsz a jelenedbe.", kovetkezo: "opcio2_ending_present" },
            { szoveg: "A múltban maradsz és menekülsz.", kovetkezo: "opcio2_ending_past" }
        ]
    },
    opcio2_ending_present: {
        hatter: "url(/kepek/haterek/osztalyterem.jpg)",
        szoveg: "Egy szempillantás alatt visszatérsz az iskolapadba. Zihálva ébredsz a dolgozat felett: rájössz, hogy milyen szerencsés vagy hogy békében élhetsz. A tapasztalataid alapján megírod a dogát és 5-öst írsz.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },
    opcio2_ending_past: {
        hatter: "url(/kepek/haterek/menekult.jpg)",
        szoveg: "A szerkezet elromlik. Több százezer emberrel együtt átjutsz az osztrák határon, és új életet kezdesz 1956 után. Soha többé nem térsz vissza a 21. századba.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    // ==========================================
    // 3. OPCIÓ: Hősies / Brutális ág (Tragikus végzet, megemlékezés)
    // ==========================================
    opcio3_1: {
        hatter: "url(/kepek/haterek/fegyver.jpg)",
        szoveg: "Fegyvert ragadsz a felkelőktől kapott zsákmányból, és a Corvin közben vállalod a harcot a harckocsik ellen. A napok múlnak, a küzdelem egyre kilátástalanabb.",
        gombok: [
            { szoveg: "A páncélosok elé futsz egy Molotov-koktéllal.", kovetkezo: "opcio3_1fail" },
            { szoveg: "A sebesült társaidat próbálod kimenteni a kereszttűzből.", kovetkezo: "opcio3_2" }
        ]
    },

    opcio3_1fail: {
        hatter: "url(/kepek/haterek/tank.webp)",
        szoveg: "A páncélosok felé rohansz, elszántan, abban a reményben, hogy megállíthatod az előrenyomulásukat. A harcok zűrzavarában azonban nem jársz sikerrel. Az utolsó pillanatban még figyelmezteted a társaidat, hogy húzódjanak fedezékbe, így nekik lehetőségük nyílik a menekülésre. Te elesel a szabadságért vívott küzdelemben, de bátorságod örökre emlékezetes marad.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    opcio3_2: {
        hatter: "url(/kepek/haterek/tankok.webp)",
        szoveg: "A szovjet túlerő felmorzsolja az ellenállást. November 4-én a várost ágyúzzák. A társaid egymás után esnek el. Mit teszel?",
        gombok: [
            { szoveg: "Az utolsó töltényig véded a barikádot.", kovetkezo: "opcio3_ending1" },
            { szoveg: "Segíted a pesti srácok menekülését.", kovetkezo: "opcio3_ending2" }
        ]
    },

    
    opcio3_ending1: {
        hatter: "url(/kepek/haterek/barikad.webp)",
        szoveg: "Úgy döntesz, hogy az utolsó pillanatig véded a barikádot. Tudod, hogy a túlerővel szemben kevés az esélyed, mégsem hátrálsz meg. Miközben a szovjet csapatok előrenyomulnak, társaidnak időt nyersz a visszavonulásra. Végül te is elesel a harcokban, de az önfeláldozásodnak köszönhetően több társad megmenekül.Bár a forradalom elbukik, a bátorságod és az áldozatod emléke örökké fennmarad.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    opcio3_ending2: {
        hatter: "url(/kepek/haterek/pesti.jpg)",
        szoveg: "A harcokban hősi halált halsz a szabadságért. Rád is úgy emlékeznek mint azokra akik az életüket adták a független Magyarországért 1956-ban.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    // ==========================================
    // 4. OPCIÓ: Alternatív történelem / "What If" ág (Leghosszabb, gőzelemre törekvés)
    // ==========================================
    opcio4_1: {
        hatter: "url(/kepek/haterek/parlament.jpg)",
        szoveg: "Tudod a jövőből, hogy a nyugati hatalmak nem fognak segíteni a Szuezi válság miatt, és hogy a szovjetek november 4-én támadnak. Megpróbálod figyelmeztetni a forradalom vezetését!",
        gombok: [
            { szoveg: "Megkeresed Maléter Pál honvédelmi minisztert a Tököli tárgyalások előtt.", kovetkezo: "opcio4_2" },
            { szoveg: "Nagy Imre közvetlen környezetébe próbálsz bejutni a Parlamentben.", kovetkezo: "opcio4_1fail" }
        ]
    },

    
    opcio4_1fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "Megpróbálsz kapcsolatba lépni Nagy Imre környezetével, de senki sem hisz neked. Gyanús idegennek néznek, és mielőtt eljuthatnál a vezetőkhöz, őrizetbe vesznek. Hiába próbálod elmagyarázni, hogy a jövőből érkeztél, senki sem hallgat rád. November 4-én hajnalban a szovjet csapatok megindítják a támadást. Tehetetlenül kell végignézned, ahogy a forradalom elbukik. A menekülés közben az időgéped megsérül, és többé nem tudod működésbe hozni. A múltban ragadsz, miközben minden reményed szertefoszlik. A történelem menetét nem sikerült megváltoztatnod.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    opcio4_2: {
        hatter: "url(/kepek/haterek/maleterpal.webp)",
        szoveg: "Sikerül figyelmeztetned őket: 'Tökölön csapda várja a küldöttséget, Serov tábornok le fogja tartóztatni önöket!'. Maléter hitt neked és lemondta a személyes találkozót, elkerülve a lefejezést.",
        gombok: [
            { szoveg: "Javaslod a honvédség teljes stratégiai riadókészültségbe helyezését.", kovetkezo: "opcio4_3" },
            { szoveg: "A nemzetközi sajtón keresztül küldesz sürgős segélykiáltást.", kovetkezo: "opcio4_2fail" }
        ]
    },

    opcio4_2fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "A nemzetközi sajtón keresztül próbálsz segítséget kérni Magyarország számára. Sürgős üzeneteket küldesz külföldi újságíróknak, és abban reménykedsz, hogy a nyugati hatalmak végre közbelépnek. A hírek eljutnak a világba, de a Szuezi-válság és a nemzetközi politikai érdekek miatt senki sem siet a segítségetekre. November 4-én hajnalban a szovjet hadsereg megindítja a támadást. A káoszban az időgéped eltűnik a romok között. Bár mindent megtettél, nem sikerült megváltoztatnod a történelem menetét. Magyarország szabadságharca elbukik, te pedig a múltban ragadsz.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },

    opcio4_3: {
        hatter: "url(/kepek/haterek/feszult.jpg)",
        szoveg: "A szervezett katonai ellenállás miatt a szovjet csapatok megtorpannak. Az ENSZ rendkívüli békefenntartó csapatokat küld a térségbe. Vajon sikerül megtartani a függetlenséget?",
        gombok: [
            { szoveg: "Tárgyalóasztalhoz kényszerítitek a Szovjetuniót diplomáciai úton.", kovetkezo: "opcio4_win" },
            { szoveg: "Katonai szövetséget köttök a szomszédos semleges államokkal.", kovetkezo: "opcio4_3fail" }
        ]
    },

    
    opcio4_3fail: {
        hatter: "url(/kepek/haterek/borton.jpg)",
        szoveg: "Úgy döntötök, hogy katonai szövetséget köttök a szomszédos semleges államokkal. A terv azonban kudarcba fullad: a környező országok nem mernek nyíltan szembeszállni a Szovjetunióval. A szovjet vezetés újabb csapatokat vezényel Magyarországra, és az ellenállás hamarosan összeomlik. Hiába próbáltad felhasználni a jövőből hozott tudásodat, a túlerővel szemben tehetetlennek bizonyultok. Az időgéped meghibásodik, miközben menekülni próbálsz. Magyarország nem nyeri vissza függetlenségét, te pedig örökre 1956-ban ragadsz. A történelem megváltoztatására tett kísérleted elbukott.",
        gombok: [
            { szoveg: "Újrakezdés", kovetkezo: "start" }
        ]
    },


    opcio4_win: {
        hatter: "url(/kepek/haterek/lyukaszaszlo.jpg)",
        szoveg: "Az alternatív idővonalon Magyarország már 1956-ban elnyerte a teljes függetlenségét és semlegességét! A jövőből hozott tudásod megváltoztatta a világtörténelmet.",
        gombok: [
            { szoveg: "Újrajátszás", kovetkezo: "start" }
        ]
    }
};

// DOM elemek kijelölése
const szovegElem = document.getElementById("szoveg");
const gombokElemek = [
    document.getElementById("elso"),
    document.getElementById("masodik"),
    document.getElementById("harmadik"),
    document.getElementById("negyedik")
];

// Játék állapotának frissítése
function mutasdCsomopontot(csomopontKulcs) {
    const csomopont = story[csomopontKulcs];

    // Szöveg kiírása
    szovegElem.innerText = csomopont.szoveg;

    if (csomopont.hatter) {
        document.body.style.backgroundImage = csomopont.hatter;
        document.body.style.backgroundSize = "cover"; // Opcionális: szépen kitöltse a képernyőt
        document.body.style.backgroundPosition = "center"; // Opcionális: középre igazítás
    }
    // Gombok beállítása
    gombokElemek.forEach((gomb, index) => {
        if (csomopont.gombok[index]) {
            gomb.innerText = csomopont.gombok[index].szoveg;
            gomb.style.display = "block";

            // Eseménykezelő felvétele
            gomb.onclick = () => mutasdCsomopontot(csomopont.gombok[index].kovetkezo);
        } else {
            // Ha kevesebb opció van az adott lépésnél, elrejtjük a felesleges gombokat
            gomb.style.display = "none";
        }
    });
    szovegElem.classList.add("elhalvanyul");

    gombokElemek.forEach(gomb => {
        gomb.classList.add("elhalvanyul");
    });
    setTimeout(() => {

        szovegElem.innerText = csomopont.szoveg;
        if (csomopont.hatter) {
            document.body.style.backgroundImage =
                csomopont.hatter;
        }

        gombokElemek.forEach((gomb, index) => {
            if (csomopont.gombok[index]) {
                gomb.innerText = csomopont.gombok[index].szoveg;
                gomb.style.display = "block";

                gomb.onclick = () => {
                    mutasdCsomopontot(
                        csomopont.gombok[index].kovetkezo
                    );
                };
            } else {
                gomb.style.display = "none";
            }
        });
        
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                szovegElem.classList.remove("elhalvanyul");

                gombokElemek.forEach(gomb => {
                    gomb.classList.remove("elhalvanyul");
                });
            });
        });

    }, 350);
}


// Játék indítása
mutasdCsomopontot("start");