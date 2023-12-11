const symbols = {
    "IRT1AHRM0001": "BRS001195",
    "IRO1PAKS0001": "BRS001",
    "IRO1PKER0001": "BRS002",
    "IRO1ABAD0001": "BRS003",
    "IRO1ABDI0001": "BRS004",
    "IRO1ABIK0001": "BRS005",
    "IRO1ALBZ0001": "BRS006",
    "IRO1ALIR0001": "BRS007",
    "IRO1ALMR0001": "BRS008",
    "IRO1ALVN0001": "BRS009",
    "IRO1AMIN0001": "BRS0010",
    "IRO1AMLH0001": "BRS0011",
    "IRO1ARDK0001": "BRS0012",
    "IRO1ASAL0001": "BRS0013",
    "IRO1ASIA0001": "BRS0014",
    "IRO1ATDM0001": "BRS0015",
    "IRO1ATIR0001": "BRS0016",
    "IRO1AYEG0001": "BRS0017",
    "IRO1AZAB0001": "BRS0018",
    "IRO1AZIN0001": "BRS0019",
    "IRO1BAFG0001": "BRS0020",
    "IRO1BAHN0001": "BRS0021",
    "IRO1BALB0001": "BRS0022",
    "IRO1BALI0001": "BRS0023",
    "IRO1BAMA0001": "BRS0024",
    "IRO1BANK0001": "BRS0025",
    "IRO1BARZ0001": "BRS0027",
    "IRO1BDAN0001": "BRS0028",
    "IRO1BENN0001": "BRS0029",
    "IRO1BIME0001": "BRS0030",
    "IRO1BMLT0001": "BRS0031",
    "IRO1BMPS0001": "BRS0032",
    "IRO1BOTA0001": "BRS0033",
    "IRO1BPAR0001": "BRS0034",
    "IRO1BPAS0001": "BRS0035",
    "IRO1BPST0001": "BRS0036",
    "IRO1BSDR0001": "BRS0037",
    "IRO1BSTE0001": "BRS0038",
    "IRO1BTEJ0001": "BRS0039",
    "IRO1CHML0001": "BRS0040",
    "IRO1COMB0001": "BRS0041",
    "IRO1CRBN0001": "BRS0043",
    "IRO1DABO0001": "BRS0044",
    "IRO1DADE0001": "BRS0045",
    "IRO1DAML0001": "BRS0046",
    "IRO1DALZ0001": "BRS0047",
    "IRO1DDPK0001": "BRS0048",
    "IRO1DARO0001": "BRS0049",
    "IRO1DFRB0001": "BRS0050",
    "IRO1DJBR0001": "BRS0051",
    "IRO1DKSR0001": "BRS0052",
    "IRO1DLGM0001": "BRS0053",
    "IRO1DMOR0001": "BRS0054",
    "IRO1DMVN0001": "BRS0055",
    "IRO1DODE0001": "BRS0056",
    "IRO1DOSE0001": "BRS0057",
    "IRO1DPAK0001": "BRS0058",
    "IRO1DRKH0001": "BRS0059",
    "IRO1DRZK0001": "BRS0060",
    "IRO1DSIN0001": "BRS0061",
    "IRO1DSOB0001": "BRS0062",
    "IRO1DZAH0001": "BRS0063",
    "IRO1EPRS0001": "BRS0064",
    "IRO1EXIR0001": "BRS0065",
    "IRO1FAIR0001": "BRS0066",
    "IRO1FAJR0001": "BRS0067",
    "IRO1FIBR0001": "BRS0068",
    "IRO1FKAS0001": "BRS0069",
    "IRO1FKHZ0001": "BRS0070",
    "IRO1FNAR0001": "BRS0071",
    "IRO1FOLD0001": "BRS0072",
    "IRO1FRIS0001": "BRS0073",
    "IRO1FRVR0001": "BRS0074",
    "IRO1FTIR0001": "BRS0075",
    "IRO1GBEH0001": "BRS0076",
    "IRO1GCOZ0001": "BRS0077",
    "IRO1GESF0001": "BRS0078",
    "IRO1GDIR0001": "BRS0079",
    "IRO1GGAZ0001": "BRS0080",
    "IRO1GHAT0001": "BRS0081",
    "IRO1GHEG0001": "BRS0082",
    "IRO1GLOR0001": "BRS0083",
    "IRO1GNBO0001": "BRS0084",
    "IRO1GOST0001": "BRS0085",
    "IRO1GPSH0001": "BRS0086",
    "IRO1GSBE0001": "BRS0087",
    "IRO1GSKE0001": "BRS0088",
    "IRO1GTSH0001": "BRS0089",
    "IRO1HFRS0001": "BRS0090",
    "IRO1HJPT0001": "BRS0091",
    "IRO1HMRZ0001": "BRS0092",
    "IRO1HSHM0001": "BRS0093",
    "IRO1HTOK0001": "BRS0094",
    "IRO1IDOC0001": "BRS0095",
    "IRO7IAGM0001": "BRS0096",
    "IRO1IKCO0001": "BRS0097",
    "IRO1IKHR0001": "BRS0098",
    "IRO1INDM0001": "BRS0099",
    "IRO1INFO0001": "BRS00100",
    "IRO1IPAR0001": "BRS00101",
    "IRO1IRDR0001": "BRS00102",
    "IRO1JAMD0001": "BRS00103",
    "IRO1JOSH0001": "BRS00104",
    "IRO1KALZ0001": "BRS00105",
    "IRO1KCHI0001": "BRS00106",
    "IRO1KDPS0001": "BRS00107",
    "IRO1KFAN0001": "BRS00108",
    "IRO1KGND0001": "BRS00109",
    "IRO1KHAZ0001": "BRS00110",
    "IRO1KHFZ0001": "BRS00111",
    "IRO1KHSH0001": "BRS00112",
    "IRO1KLBR0001": "BRS00113",
    "IRO1KIMI0001": "BRS00114",
    "IRO1KPRS0001": "BRS00115",
    "IRO1KRAF0001": "BRS00116",
    "IRO1KRIR0001": "BRS00117",
    "IRO1KRTI0001": "BRS00118",
    "IRO1KSAD0001": "BRS00119",
    "IRO1KSHJ0001": "BRS00120",
    "IRO1KSIM0001": "BRS00121",
    "IRO1KSKA0001": "BRS00122",
    "IRO1LAMI0001": "BRS00123",
    "IRO1LEAB0001": "BRS00124",
    "IRO1LAPS0001": "BRS00125",
    "IRO1LENT0001": "BRS00126",
    "IRO1LMIR0001": "BRS00127",
    "IRO1LPAK0001": "BRS00128",
    "IRO7LZIN0001": "BRS00129",
    "IRO1MADN0001": "BRS00130",
    "IRO1MAGS0001": "BRS00131",
    "IRO1MAPN0001": "BRS00132",
    "IRO1MARK0001": "BRS00133",
    "IRO1MESI0001": "BRS00134",
    "IRO1MHKM0001": "BRS00135",
    "IRO1MINO0001": "BRS00136",
    "IRO1MKBT0001": "BRS00137",
    "IRO1MNGZ0001": "BRS00138",
    "IRO1MNSR0001": "BRS00139",
    "IRO1MRAM0001": "BRS00140",
    "IRO7MRGN0001": "BRS00141",
    "IRO1MRIN0001": "BRS00142",
    "IRO1MSKN0001": "BRS00143",
    "IRO1MSMI0001": "BRS00144",
    "IRO1MSTI0001": "BRS00145",
    "IRO1NAFT0001": "BRS00146",
    "IRO1NALM0001": "BRS00147",
    "IRO1NASI0001": "BRS00148",
    "IRO1NGFO0001": "BRS00149",
    "IRO1NBEH0001": "BRS00150",
    "IRO1NIKI0001": "BRS00151",
    "IRO1NIRO0001": "BRS00152",
    "IRO1NOSH0001": "BRS00153",
    "IRO1NOVN0001": "BRS00154",
    "IRO1NPRS0001": "BRS00155",
    "IRO1NSAZ0001": "BRS00156",
    "IRO1NSPS0001": "BRS00157",
    "IRO1NSTH0001": "BRS00158",
    "IRO1OFRS0001": "BRS00159",
    "IRO1OFST0001": "BRS00160",
    "IRO1OIMC0001": "BRS00161",
    "IRO1PARK0001": "BRS00162",
    "IRO1PASN0001": "BRS00163",
    "IRO1PDRO0001": "BRS00164",
    "IRO1PELC0001": "BRS00165",
    "IRO1PETR0001": "BRS00166",
    "IRO1PFAN0001": "BRS00167",
    "IRO1PIAZ0001": "BRS00168",
    "IRO1PIRN0001": "BRS00169",
    "IRO1PKHA0001": "BRS00170",
    "IRO7PKOD0001": "BRS00171",
    "IRO1PKLJ0001": "BRS00172",
    "IRO1PLKK0001": "BRS00173",
    "IRO1PNBA0001": "BRS00174",
    "IRO1PNES0001": "BRS00175",
    "IRO1PNTB0001": "BRS00176",
    "IRO1PSER0001": "BRS00177",
    "IRO1PSHZ0001": "BRS00178",
    "IRO1PSIR0001": "BRS00179",
    "IRO1PTAP0001": "BRS00180",
    "IRO1RADI0001": "BRS00181",
    "IRO1RENA0001": "BRS00182",
    "IRO1RIIR0001": "BRS00183",
    "IRO1RINM0001": "BRS00184",
    "IRO1RKSH0001": "BRS00185",
    "IRO1ROOI0001": "BRS00186",
    "IRO1ROZD0001": "BRS00187",
    "IRO1RSAP0001": "BRS00188",
    "IRO1RTIR0001": "BRS00189",
    "IRO1SADB0001": "BRS00190",
    "IRO1SAHD0001": "BRS00191",
    "IRO1SAKH0001": "BRS00192",
    "IRO1SAMA0001": "BRS00193",
    "IRO1SAND0001": "BRS00194",
    "IRO1SBAH0001": "BRS00195",
    "IRO1SBHN0001": "BRS00196",
    "IRO1SBOJ0001": "BRS00197",
    "IRO1SDAB0001": "BRS00198",
    "IRO1SDOR0001": "BRS00199",
    "IRO1SDST0001": "BRS00200",
    "IRO1SEFH0001": "BRS00201",
    "IRO1SEIL0001": "BRS00202",
    "IRO1SEPA0001": "BRS00203",
    "IRO1SFKZ0001": "BRS00204",
    "IRO1SFNO0001": "BRS00205",
    "IRO1SFRS0001": "BRS00206",
    "IRO1SGAZ0001": "BRS00207",
    "IRO1SGEN0001": "BRS00208",
    "IRO1SGRB0001": "BRS00209",
    "IRO1SGOS0001": "BRS00210",
    "IRO1SHAD0001": "BRS00211",
    "IRO1SHFS0001": "BRS00212",
    "IRO1SHGN0001": "BRS00213",
    "IRO1SHKR0001": "BRS00214",
    "IRO1SHMD0001": "BRS00215",
    "IRO1SHND0001": "BRS00216",
    "IRO1SHPZ0001": "BRS00217",
    "IRO1SHSI0001": "BRS00218",
    "IRO1SHZG0001": "BRS00219",
    "IRO1SIMS0001": "BRS00220",
    "IRO1SINA0001": "BRS00221",
    "IRO1SIPA0001": "BRS00222",
    "IRO1SISH0001": "BRS00223",
    "IRO1SKAZ0001": "BRS00224",
    "IRO1SKBV0001": "BRS00225",
    "IRO1SKER0001": "BRS00226",
    "IRO1SKHS0001": "BRS00227",
    "IRO1SKOR0001": "BRS00228",
    "IRO1SLMN0001": "BRS00229",
    "IRO1SMAZ0001": "BRS00230",
    "IRO1SNMA0001": "BRS00231",
    "IRO1SNRO0001": "BRS00232",
    "IRO1SORB0001": "BRS00233",
    "IRO1SPAH0001": "BRS00234",
    "IRO1SPKH0001": "BRS00235",
    "IRO1SPPE0001": "BRS00236",
    "IRO1SPTA0001": "BRS00237",
    "IRO1SRMA0001": "BRS00238",
    "IRO1SROD0001": "BRS00239",
    "IRO1SSAP0001": "BRS00240",
    "IRO1SSEP0001": "BRS00241",
    "IRO1SSHR0001": "BRS00242",
    "IRO1SSIN0001": "BRS00243",
    "IRO1SSOF0001": "BRS00244",
    "IRO1SSNR0001": "BRS00245",
    "IRO1STEH0001": "BRS00246",
    "IRO1SURO0001": "BRS00247",
    "IRO1SWIC0001": "BRS00248",
    "IRO1SZPO0001": "BRS00249",
    "IRO1TAIR0001": "BRS00250",
    "IRO1TAMI0001": "BRS00251",
    "IRO1TAYD0001": "BRS00252",
    "IRO1TAZB0001": "BRS00253",
    "IRO1TBAS0001": "BRS00254",
    "IRO1TKNO0001": "BRS00255",
    "IRO1TKSM0001": "BRS00256",
    "IRO1TMEL0001": "BRS00257",
    "IRO1TMVD0001": "BRS00258",
    "IRO1TOKA0001": "BRS00259",
    "IRO1TOSA0001": "BRS00260",
    "IRO1TRIR0001": "BRS00261",
    "IRO1TRNS0001": "BRS00262",
    "IRO1TSBE0001": "BRS00263",
    "IRO1TSHE0001": "BRS00264",
    "IRO1TSRZ0001": "BRS00265",
    "IRO1VSIN0001": "BRS00266",
    "IRO1YASA0001": "BRS00267",
    "IRO1ZMYD0001": "BRS00268",
    "IRO1LIRZ0001": "BRS00269",
    "IRO1DTIP0001": "BRS00270",
    "IRO1SEPP0001": "BRS00271",
    "IRO1PASH0001": "BRS00272",
    "IRO1KHOC0001": "BRS00273",
    "IRO1KNRZ0001": "BRS00274",
    "IRO1PMSZ0001": "BRS00275",
    "IRO1KVEH0001": "BRS00276",
    "IRO1CIDC0001": "BRS00277",
    "IRO3GHIZ0001": "BRS00278",
    "IRO1MOBN0001": "BRS00279",
    "IRO1KVRZ0001": "BRS00280",
    "IRO1BKHZ0001": "BRS00281",
    "IRO1BVMA0001": "BRS00282",
    "IRO1BFJR0001": "BRS00284",
    "IRO1VLMT0001": "BRS00285",
    "IRO1DSBH0001": "BRS00286",
    "IRO1IPTR0001": "BRS00287",
    "IRO1APPE0001": "BRS00288",
    "IRO1BORS0001": "BRS00290",
    "IRO1PTEH0001": "BRS00291",
    "IRO1KBRS0001": "BRS00292",
    "IRO1NBRS0001": "BRS00293",
    "IRO1SYSM0001": "BRS00294",
    "IRO1BRKT0001": "BRS00295",
    "IRO1OMID0001": "BRS00296",
    "IRO1PRKT0001": "BRS00297",
    "IRO1CHDN0001": "BRS00299",
    "IRO1HWEB0001": "BRS00302",
    "IRO1SHFA0001": "BRS00303",
    "IRO1LPRS0001": "BRS00304",
    "IRO1ASTC0001": "BRS00305",
    "IRO1SEPK0001": "BRS00306",
    "IRO1ZPRS0001": "BRS00307",
    "IRO1PARS0001": "BRS00308",
    "IRO1TNOV0001": "BRS00309",
    "IRO1OFOG0001": "BRS00310",
    "IRO1LTOS0001": "BRS00312",
    "IRO1BKLA0001": "BRS00313",
    "IRO1KALA0001": "BRS00314",
    "IRO1NKLA0001": "BRS00315",
    "IRO1TKLA0001": "BRS00316",
    "IRO1KRSN0001": "BRS00317",
    "IRO1FSAZ0001": "BRS00318",
    "IRO1SADR0001": "BRS00319",
    "IRO1KVIR0001": "BRS00320",
    "IRO1TMLT0001": "BRS00321",
    "IRO1KOSR0001": "BRS00322",
    "IRO1TAMN0001": "BRS00323",
    "IRO1ZARM0001": "BRS00324",
    "IRO1BENA0001": "BRS00325",
    "IRO1BENC0002": "BRS00326",
    "IRO1BENC0001": "BRS00327",
    "IRO1SITA0001": "BRS00328",
    "IRO1NBAB0001": "BRS00329",
    "IRO1KAPA0011": "BRS00330",
    "IRO1BEKA0001": "BRS00331",
    "IRO1TSAN0001": "BRS00332",
    "IRO1OS020001": "BRS00333",
    "IRO1OS060001": "BRS00334",
    "IRO1OS240001": "BRS00335",
    "IRO1OS230001": "BRS00336",
    "IRO1OS280001": "BRS00337",
    "IRO1OS050001": "BRS00338",
    "IRO1OS300001": "BRS00339",
    "IRO1OS040001": "BRS00340",
    "IRO1OS150001": "BRS00341",
    "IRO1KRSH0001": "BRS00343",
    "IRO1OS190001": "BRS00344",
    "IRO1OS030001": "BRS00345",
    "IRO1OS160001": "BRS00346",
    "IRO1OS210001": "BRS00347",
    "IRO1OS100001": "BRS00348",
    "IRO1OS090001": "BRS00351",
    "IRO1OS180001": "BRS00352",
    "IRO1OS200001": "BRS00353",
    "IRO1OS120001": "BRS00354",
    "IRO1OS110001": "BRS00355",
    "IRO1OS130001": "BRS00356",
    "IRO1OS250001": "BRS00358",
    "IRO1OS220001": "BRS00359",
    "IRO1OS290001": "BRS00360",
    "IRO1OS260001": "BRS00361",
    "IRO1OS270001": "BRS00362",
    "IRO1OS010001": "BRS00363",
    "IRO1TOOM0001": "BRS00364",
    "IRO1SPID0001": "BRS00366",
    "IRO1OPAL0001": "BRS00367",
    "IRO3ZKPZ0001": "BRS00368",
    "IRO3AFRZ0001": "BRS00369",
    "IRO3BDYZ0001": "BRS00371",
    "IRO3BGHZ0001": "BRS00372",
    "IRO3BIPZ0001": "BRS00373",
    "IRO3BLSZ0001": "BRS00374",
    "IRO3BMAZ0001": "BRS00375",
    "IRO3BSMZ0001": "BRS00376",
    "IRO3CGRZ0001": "BRS00377",
    "IRO3DBRZ0001": "BRS00378",
    "IRO3CHRZ0001": "BRS00379",
    "IRO3DTDZ0001": "BRS00380",
    "IRO3FAYZ0001": "BRS00381",
    "IRO3GHSZ0001": "BRS00382",
    "IRO3IMFZ0001": "BRS00383",
    "IRO3IRNZ0001": "BRS00384",
    "IRO3KARZ0001": "BRS00385",
    "IRO3KRMZ0001": "BRS00387",
    "IRO3KSGZ0001": "BRS00388",
    "IRO3KZIZ0001": "BRS00389",
    "IRO3MNOZ0001": "BRS00390",
    "IRO3MRJZ0001": "BRS00391",
    "IRO3NOLZ0001": "BRS00392",
    "IRO3NPSZ0001": "BRS00393",
    "IRO3OSHZ0001": "BRS00394",
    "IRO3PKSH0001": "BRS00395",
    "IRO3PMRZ0001": "BRS00396",
    "IRO3PMTZ0001": "BRS00397",
    "IRO3PNLZ0001": "BRS00398",
    "IRO1PRZZ0001": "BRS00399",
    "IRO3PZGZ0001": "BRS00400",
    "IRO3SBZZ0001": "BRS00402",
    "IRO3SMBZ0001": "BRS00403",
    "IRO3TORZ0001": "BRS00404",
    "IRO3ZAGZ0001": "BRS00405",
    "IRO1ZOBI0001": "BRS00478",
    "IRO3FOHZ0001": "BRS00479",
    "IRO3KHZZ0001": "BRS00482",
    "IRO3BSRZ0001": "BRS00485",
    "IRO3ETLZ0001": "BRS00486",
    "IRO3ARFZ0001": "BRS00488",
    "IRO3MPRZ0001": "BRS00495",
    "IRO3ZNDZ0001": "BRS00496",
    "IRO3KSPZ0001": "BRS00497",
    "IRO3GASZ0001": "BRS00509",
    // "IRO3GFRZ0001": "BRS00512",
    // "IRO3BLKZ0001": "BRS00513",
    // "IRO3ETKZ0001": "BRS00524",
    // "IRO3TBSZ0001": "BRS00526",
    // "IRO1KZGZ0001": "BRS00531",
    // "IRO3TUKZ0001": "BRS00534",
    // "IRO3HORZ0001": "BRS00536",
    // "IRO3GHPZ0001": "BRS00537",
    // "IRO3SOBZ0001": "BRS00539",
    // "IRO3SYNZ0001": "BRS00540",
    // "IRO3TPSZ0001": "BRS00541",
    // "IRO3BDMZ0001": "BRS00543",
    // "IRO1ETKA0001": "BRS00545",
    // "IRO1BONA0001": "BRS00546",
    // "IRO3TLIZ0001": "BRS00547",
    // "IRO3PKDZ0001": "BRS00548",
    // "IRO3DSNZ0001": "BRS00549",
    // "IRO3GOMZ0001": "BRS00550",
    // "IRO3SLVZ0001": "BRS00551",
    // "IRO3HRLZ0001": "BRS00554",
    // "IRO3KAHZ0001": "BRS00556",
    // "IRO3HPRZ0001": "BRS00558",
    // "IRO3APDZ0001": "BRS00560",
    // "IRO3GDSZ0001": "BRS00562",
    // "IRO3PGLZ0001": "BRS00563",
    // "IRO3PGPZ0001": "BRS00566",
    // "IRO3MOBZ0001": "BRS00568",
    // "IRO3PIVZ0001": "BRS00569",
    // "IRO5PSGS0001": "BRS00570",
    // "IRO3SHHZ0001": "BRS00573",
    // "IRO3ZMMZ0001": "BRS00574",
    // "IRO3ASKZ0001": "BRS00580",
    // "IRO3BHPZ0001": "BRS00584",
    // "IRO3SARZ0001": "BRS00585",
    // "IRO3PKHZ0001": "BRS00587",
    // "IRO3ASAZ0001": "BRS00588",
    // "IRO3RPEZ0001": "BRS00591",
    // "IRO3ISLZ0001": "BRS00592",
    // "IRO5NSKS0001": "BRS00596",
    // "IRO3BAHZ0001": "BRS00601",
    // "IRO3GAHZ0001": "BRS00602",
    // "IRO3TIGZ0001": "BRS00605",
    // "IRO3KPEZ0001": "BRS00607",
    // "IRO5MSCS0001": "BRS00609",
    // "IRO3GEDZ0001": "BRS00612",
    // "IRO3IOMZ0001": "BRS00613",
    // "IRO3IKAZ0001": "BRS00615",
    // "IRO3AVLZ0001": "BRS00618",
    // "IRO3MACZ0001": "BRS00622",
    // "IRO3FAAZ0001": "BRS00625",
    // "IRO3SAAZ0001": "BRS00626",
    // "IRO3IGCZ0001": "BRS00627",
    // "IRO3RAPZ0001": "BRS00630",
    // "IRO3GEMZ0001": "BRS00631",
    // "IRO3JPPZ0001": "BRS00632",
    // "IRO3VITZ0001": "BRS00634",
    // "IRO3DPDZ0001": "BRS00636",
    // "IRO3FRBZ0001": "BRS00637",
    // "IRO3SDFZ0001": "BRS00638",
    // "IRO3ANIZ0001": "BRS00639",
    // "IRO3IZSZ0001": "BRS00640",
    // "IRO1MEAZ0001": "BRS00641",
    // "IRO3YZTZ0001": "BRS00644",
    // "IRO3CHPZ0001": "BRS00645",
    // "IRO3SACZ0001": "BRS00646",
    // "IRO3PEGZ0001": "BRS00647",
    // "IRO3TPEZ0001": "BRS00648",
    // "IRO3RYHZ0001": "BRS00649",
    // "IRO3APOZ0001": "BRS00650",
    // "IRO3STIZ0001": "BRS00651",
    // "IRO3MLIZ0001": "BRS00653",
    // "IRO5KLSS0001": "BRS00654",
    // "IRO3DCAZ0001": "BRS00655",
    // "IRO3URPZ0001": "BRS00656",
    // "IRO3MAHZ0001": "BRS00657",
    // "IRO3KBIZ0001": "BRS00658",
    // "IRO3TNIZ0001": "BRS00659",
    // "IRO3PGRZ0001": "BRS00660",
    // "IRO3SAIZ0001": "BRS00661",
    // "IRO3CAWZ0001": "BRS00662",
    // "IRO7SHLP0001": "BRS00663",
    // "IRO7ABGP0001": "BRS00664",
    // "IRO7AFRP0001": "BRS00665",
    // "IRO7ALTP0001": "BRS00666",
    // "IRO7ARAP0001": "BRS00667",
    // "IRO7ARMP0001": "BRS00668",
    // "IRO7ARNP0001": "BRS00669",
    // "IRO3ARTZ0001": "BRS00670",
    // "IRO7AYNP0001": "BRS00671",
    // "IRO7AZRP0001": "BRS00672",
    // "IRO7AZMP0001": "BRS00673",
    // "IRO7BHEP0001": "BRS00674",
    // "IRO7BIRP0001": "BRS00675",
    // "IRO7BNDP0001": "BRS00676",
    // "IRO3BSAP0001": "BRS00678",
    // "IRO7BSHP0001": "BRS00679",
    // "IRO7CBBP0001": "BRS00680",
    // "IRO7CMKP0001": "BRS00681",
    // "IRO7CNAP0001": "BRS00682",
    // "IRO7DANP0001": "BRS00683",
    // "IRO7DSHP0001": "BRS00684",
    // "IRO7DHVP0001": "BRS00685",
    // "IRO7ESHP0001": "BRS00686",
    // "IRO7ETMP0001": "BRS00687",
    // "IRO7FANP0001": "BRS00688",
    // "IRO7FLTP0001": "BRS00689",
    // "IRO7GAZP0001": "BRS00690",
    // "IRO7GSIP0001": "BRS00692",
    // "IRO7HPKP0001": "BRS00693",
    // "IRO7GTOP0001": "BRS00694",
    // "IRO7IENP0001": "BRS00695",
    // "IRO7IFMP0001": "BRS00696",
    // "IRO7IRNP0001": "BRS00697",
    // "IRO7ISTP0001": "BRS00698",
    // "IRO7ITLP0001": "BRS00699",
    // "IRO7JSHP0001": "BRS00700",
    // "IRO7KBDP0001": "BRS00701",
    // "IRO1KARP0001": "BRS00702",
    // "IRO7KBLP0001": "BRS00703",
    // "IRO7KIVP0001": "BRS00704",
    // "IRO7KMOP0001": "BRS00706",
    // "IRO7KSDP0001": "BRS00707",
    // "IRO7KTAP0001": "BRS00708",
    // "IRO7LKPP0001": "BRS00709",
    // "IRO7LARP0001": "BRS00710",
    // "IRO7LSDP0001": "BRS00711",
    // "IRO7MILP0001": "BRS00712",
    // "IRO7NARP0001": "BRS00714",
    // "IRO7NEOP0001": "BRS00715",
    // "IRO7NZMP0001": "BRS00716",
    // "IRO7NIRP0001": "BRS00717",
    // "IRO7NORP0001": "BRS00718",
    // "IRO7PAIP0001": "BRS00719",
    // "IRO7PDRP0001": "BRS00720",
    // "IRO7PDHP0001": "BRS00721",
    // "IRO7PFSP0001": "BRS00722",
    // "IRO7PKBP0001": "BRS00723",
    // "IRO7PKZP0001": "BRS00724",
    // "IRO7PLSP0001": "BRS00725",
    // "IRO7PSMP0001": "BRS00726",
    // "IRO7PYAP0001": "BRS00727",
    // "IRO7QAZP0001": "BRS00728",
    // "IRO7RAHP0001": "BRS00729",
    // "IRO7RAZP0001": "BRS00730",
    // "IRO7RNAP0001": "BRS00731",
    // "IRO7RZIP0001": "BRS00732",
    // "IRO7SALP0001": "BRS00733",
    // "IRO3SASP0001": "BRS00734",
}


const db = require('./db'); // Adjust the path as needed
const Redis = require('ioredis');
const port = 3000;

const redis = new Redis({
    host: 'localhost',
    port: '6379',
    password: 'D@n!@l12098',
    enableCompression: true,
});

var pipeline = redis.pipeline();
const jalalimoment = require('jalali-moment');
const moment = require('moment');


const WebSocket = require('ws');

const redisTimeFrames = {
    "1m": "1",
    "5m": "5",
    "15m": "15",
    "30m": "30",
    "1h": "60",
    "4h": "240",
    "1d": "1D",
    "1w": "1W",
    "1M": "1M",
}

const headers = {
    Origin: 'https://www.nahayatnegar.com',
};


const symbolConfigs = {
    0: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    1: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    2: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    3: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    4: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    5: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    6: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    isHalf: false
}


function getFirstDayInfo() {
    const currentDate = jalalimoment();
    const firstDay = jalalimoment(currentDate).startOf('jMonth');
    const firstDayOfWeek = jalalimoment(currentDate).startOf('jWeek');
    const isoString = firstDay.toISOString();
    const isoStringWeek = firstDayOfWeek.toISOString();

    // Parse the ISO string using the Date object
    const parsedDate = new Date(isoString);
    const parsedDateWeek = new Date(isoStringWeek);

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = parsedDateWeek.getUTCDate() + 1;

    // Get the day of the month
    const dayOfMonth = parsedDate.getUTCDate() + 1;
    const Month = parsedDate.getUTCMonth();

    return { dayOfWeek, dayOfMonth, Month };
}

const tableMap = {
    "1M": "one_month_stock_candles",
    "1w": "one_week_stock_candles",
    "1d": "one_day_stock_candles",
    "4h": "four_hour_stock_candles",
    "1h": "one_hour_stock_candles",
    "30m": "thirty_minute_stock_candles",
    "15m": "fifteen_minute_stock_candles",
    "5m": "five_minute_stock_candles",
    "1m": "one_minute_stock_candles",
    "1s": "one_second_stock_candles",
};

async function getSymbolIdByName(name) {
    try {
        const query = 'SELECT id FROM stock_symbols WHERE name = $1';
        const symbol = await db.oneOrNone(query, name);
        return symbol ? symbol.id : null;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

async function makeMyOpenTime(symbolConfig, timeFrame) {
    const candleTime = new Date();
    candleTime.setUTCHours(candleTime.getUTCHours() + 3);
    candleTime.setUTCMinutes(candleTime.getUTCMinutes() + 30);
    var dayOfMonth = candleTime.getUTCDate();
    const candleHour = candleTime.getUTCHours();
    const candleMinute = candleTime.getUTCMinutes();
    const candleYear = candleTime.getUTCFullYear();
    var candleMonth = candleTime.getUTCMonth();
    const dayOfWeek = candleTime.getUTCDay(); // 0 is Sunday
    if (timeFrame == "5m" || timeFrame == "15m" || timeFrame == "30m") {

        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleMinute);

        // Remove numbers less than candleMinute
        const biggerTime = Math.min(...filteredArray);

        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger < candleMinute < biggerTime) {

            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, candleHour - 3, oneBeforBigger - 30)).getTime() / 1000;
        } else {
            // yani candle jadid bayad baz beshe

            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, candleHour - 3, biggerTime - 30)).getTime() / 1000;

        }

    } else {
        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleHour);

        const shouldAdd = symbolConfig.isHalf ? 30 : 0;
        // Remove numbers less than candleHour

        const shouldRemoveHour = symbolConfig.isHalf ? 1 : 0;
        // Remove numbers less than candleHour

        if (timeFrame == "1w") {

            dayOfMonth = getFirstDayInfo().dayOfWeek;
        }

        if (timeFrame == "1M") {
            dayOfMonth = getFirstDayInfo().dayOfMonth;
            candleMonth = getFirstDayInfo().Month
        }

        var biggerTime = Math.min(...filteredArray);
        if (biggerTime == undefined || biggerTime == Infinity || biggerTime == AllArray[0]) {
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, AllArray[AllArray.length - 1] - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;
        }
        // Find the index of the biggerTime Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = (minIndex != 0 && minIndex != Infinity) ? AllArray[minIndex - 1] : AllArray[0];


        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger < candleHour < biggerTime) {
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, oneBeforBigger - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;
        } else {
            // yani candle jadid bayad baz beshe
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, biggerTime - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;

        }

    }

}



function getFirstDayOfMonthNotFridayOrThursday() {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    while (firstDay.getDay() === 6 || firstDay.getDay() === 5 || firstDay.getDay() === 4) {
        firstDay.setDate(firstDay.getDate() + 1);
    }

    return firstDay;
}

const checkConfigTime = async (candleTimeStamp, symbolConfig, timeFrame, oneMinuteTime) => {
    const oneMinuteCandleTime = new Date(oneMinuteTime * 1000);
    const dayOfWeek = oneMinuteCandleTime.getUTCDay(); //0 is sunday
    const dayOfMonth = oneMinuteCandleTime.getUTCDate();  //0 is sunday
    const candleHour = oneMinuteCandleTime.getUTCHours();
    const candleMinute = oneMinuteCandleTime.getUTCMinutes();

    const myCandleTime = new Date(candleTimeStamp * 1000);
    const myCandleHour = myCandleTime.getUTCHours();
    const myCandleMinute = myCandleTime.getUTCMinutes();
    const dayOfCandle = myCandleTime.getUTCDate();

    if (timeFrame == "5m" || timeFrame == "15m" || timeFrame == "30m") {
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleMinute);
        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);

        const biggerTime = Math.min(...filteredArray);

        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger <= myCandleMinute && myCandleMinute < biggerTime) {
            return true;
        } else {
            return false;

        }


    } else {
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleHour);
        var AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);


        var biggerTime = Math.min(...filteredArray);



        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        var oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        if (biggerTime == undefined || biggerTime == Infinity || biggerTime == AllArray[0]) {


            biggerTime = AllArray[AllArray.length - 1];
            oneBeforBigger = AllArray[0];



            // inja miaym shart haye estesnaye rooz o maho hafte ro mizarim 
            if (timeFrame == "1d") {
                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle)) {
                    // yani candle jadid bayad baz beshe
                    return false;
                } else {
                    return true;
                }
            }

            // inja miaym shart haye estesnaye rooz o maho hafte ro mizarim 
            if (timeFrame == "1w") {
                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle) && dayOfWeek == 0) {
                    return false;
                } else {
                    return true;
                }
            }

            if (timeFrame == "1M") {
                const thisMonth = getFirstDayOfMonthNotFridayOrThursday().getDate();

                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle) && dayOfMonth == thisMonth) {
                    return false;
                } else {
                    // yani candle jadid bayad baz beshe
                    return true;
                }
            }

            // this will work for 4h 
            if (biggerTime <= myCandleHour && myCandleHour >= oneBeforBigger) {
                // sat 22 23
                return true;
            } else {
                // for 0 1 
                if (myCandleHour <= oneBeforBigger) {
                    return true
                } else {
                    return false;

                }


            }
        }



        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger <= myCandleHour && myCandleHour < biggerTime) {
            return true;
        } else {
            // yani candle jadid bayad baz beshe
            return false;
        }

    }
}


const candleChecker = async (timeFrame, allCandles, symbolConfig, candleStamp) => {
    // aval check mikonim candle az ghabl vojood darad ya na
    if (allCandles[timeFrame][0] != undefined) {
        // check mishavad ke aya bayad edame dade shavad ya kheir
        // bayad check konim ke data ke alan oomade az lahaze zamani ba config set hast ya na?
        const checker = await checkConfigTime(allCandles[timeFrame][0].t, symbolConfig, timeFrame, candleStamp)
        return checker;
    }

    // agar vojood nadarad barash yeki baz mikonim dar zamane moshakhas
    else {
        return false;
    }

}


async function saveCandleDataToPostgreSQL(symbol, timeFrame, newCandle) {
    const fetchedSymbolId = await getSymbolIdByName(symbol.toUpperCase());
    const timestampMilliseconds = newCandle.t * 1000; // Unix timestamp in milliseconds
    const modifiedFormattedDateTime = moment(timestampMilliseconds).utc().format('YYYY-MM-DD HH:mm:ss');

    try {
        await db.none(
            `INSERT INTO ${tableMap[timeFrame]} (symbol_id, symbol_name, open_time, open_price, high_price, low_price, close_price, volumn, close_time, created_at) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            ON CONFLICT (symbol_name, created_at) DO UPDATE
            SET 
                open_price = excluded.open_price,
                high_price = excluded.high_price,
                low_price = excluded.low_price,
                close_price = excluded.close_price,
                volumn = excluded.volumn,
                close_time = excluded.close_time,
                created_at = excluded.created_at`,
            [
                fetchedSymbolId,
                symbol.toUpperCase(),
                newCandle.t,
                newCandle.o,
                newCandle.h,
                newCandle.l,
                newCandle.c,
                newCandle.v != null ? newCandle.v : 0,
                newCandle.T,
                modifiedFormattedDateTime,
            ]
        );

        // console.log(`data saved to ${timeFrame} for ${symbol}`)
    } catch (error) {
        console.error('Error saving candle data to PostgreSQL:', error);
    }
}


const shouldMakeAllTimeFrames = ['1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w', '1M'];


const makeOtherCandles = async (allCandles, smallestTimeFrame, lastVolume, username, name) => {

    // now we will make other candles from 1 minute last candle
    const indexToKeep = shouldMakeAllTimeFrames.indexOf(smallestTimeFrame);
    var resultArray = null

    if (indexToKeep !== -1) {
        resultArray = shouldMakeAllTimeFrames.slice(indexToKeep + 1);
    } else {
        console.log(`The element ${smallestTimeFrame} was not found in the array.`);
    }


    const lastOneMinuteCandle = allCandles[smallestTimeFrame][0];
    const candleStamp = allCandles[smallestTimeFrame][0].t;


    const symbolConfig = symbolConfigs;

    if (lastOneMinuteCandle != undefined) {
        for (const timeframe of resultArray) {
            var shouldContinueCandle = false;
            var addedTime = 0;
            var startTime = 0;
            var newV = false
            var checker = await candleChecker(timeframe, allCandles, symbolConfig, candleStamp);
            switch (timeframe) {
                case '5m':
                    addedTime = 300;
                    break;

                case '15m':
                    addedTime = 1500;
                    break;

                case '30m':
                    addedTime = 3000;
                    break;

                case '1h':
                    addedTime = 6000;
                    break;

                case '4h':
                    addedTime = 24000;
                    break;

                case '1d':
                    addedTime = 86400;
                    break;

                case '1w':
                    addedTime = 604800;
                    break;

                case '1M':
                    addedTime = 2629743;
                    break;

                default:
                    addedTime = 0;
                    break;
            }


            if (checker) {
                shouldContinueCandle = true;
                startTime = allCandles[timeframe][0].t;
                timestamp = startTime; // Unix timestamp in seconds
            } else {
                const madeOpenTime = await makeMyOpenTime(symbolConfig, timeframe);
                startTime = madeOpenTime
            }

            var shouldBe = 0;
            var openPrice, high, low, closeTime;


            // this is for v
            if (shouldContinueCandle) {

                if (lastOneMinuteCandle.v - lastVolume > 0) {
                    shouldBe = allCandles[timeframe][0].v + (lastOneMinuteCandle.v - lastVolume)
                } else {
                    if (lastVolume != lastOneMinuteCandle.v) {
                        shouldBe = allCandles[timeframe][0].v + lastOneMinuteCandle.v
                    } else {
                        shouldBe = allCandles[timeframe][0].v
                    }
                }

                openPrice = allCandles[timeframe][0].o;
                closeTime = allCandles[timeframe][0].t + addedTime


                if (allCandles[timeframe][0].h < lastOneMinuteCandle.h) {
                    high = lastOneMinuteCandle.h
                } else {
                    high = allCandles[timeframe][0].h
                }

                if (allCandles[timeframe][0].l > lastOneMinuteCandle.l) {
                    low = lastOneMinuteCandle.l
                } else {
                    low = allCandles[timeframe][0].l
                }
            } else {
                // console.log("####################################")
                shouldBe = lastOneMinuteCandle.v;
                openPrice = lastOneMinuteCandle.o;
                high = lastOneMinuteCandle.h
                low = lastOneMinuteCandle.l
                closeTime = lastOneMinuteCandle.t + addedTime
            }




            const newCandle = {
                t: startTime,
                T: closeTime,
                o: formatNumberWithTwoDecimals(openPrice),
                h: formatNumberWithTwoDecimals(high),
                l: formatNumberWithTwoDecimals(low),
                c: formatNumberWithTwoDecimals(lastOneMinuteCandle.c),
                v: shouldBe,
            };


            // now we will add to each time Frame
            const existingCandleIndex = allCandles[timeframe].findIndex((candle) => candle.t == newCandle.t);

            if (existingCandleIndex >= 0) {
                // Update existing candle
                allCandles[timeframe][existingCandleIndex] = newCandle;
            } else {

                // Add new candle at the beginning
                allCandles[timeframe].unshift(newCandle);

                if (allCandles[timeframe].length >= 3) {
                    // Remove excess candles
                    allCandles[timeframe].pop();

                    if (allCandles[timeframe][1] != undefined) {
                        const shouldSaveCandle = {
                            t: allCandles[timeframe][1].t,
                            T: allCandles[timeframe][1].T,
                            c: allCandles[timeframe][1].c,
                            h: allCandles[timeframe][1].h,
                            l: allCandles[timeframe][1].l,
                            o: allCandles[timeframe][1].o,
                            v: allCandles[timeframe][1].v,
                        };

                        await saveCandleDataToPostgreSQL(name, timeframe, shouldSaveCandle);
                    }
                }


            }
        }
        redis.pipeline().set(`${name.toLowerCase()}`, JSON.stringify(allCandles)).expire(`${name.toLowerCase()}`, 259200).exec();

    }
}



async function moveRedisToRam(name) {
    try {
        const result = await redis.get(name.toLowerCase());
        const parsedResult = JSON.parse(result);

        if (parsedResult !== null) {
            return parsedResult;
        } else {
            const shouldSendResult = { "1m": [], "5m": [], "15m": [], "30m": [], "1h": [], "4h": [], "1d": [], "1w": [], "1M": [] };

            await Promise.all(Object.keys(redisTimeFrames).map(async (redisTimeFrame) => {

                const rediResult = await redis.get(`${redisTimeFrames[redisTimeFrame]}-${name.toLowerCase()}`);

                const parsedRediResult = JSON.parse(rediResult);

                if (parsedRediResult !== null) {
                    shouldSendResult[redisTimeFrame][0] = {
                        t: parsedRediResult[0].open_time,
                        T: parsedRediResult[0].close_time,
                        o: formatNumberWithTwoDecimals(parsedRediResult[0].open_price),
                        h: formatNumberWithTwoDecimals(parsedRediResult[0].high_price),
                        l: formatNumberWithTwoDecimals(parsedRediResult[0].low_price),
                        c: formatNumberWithTwoDecimals(parsedRediResult[0].close_price),
                        v: parsedRediResult[0].volumn,
                    };
                }
            }));
            return shouldSendResult;
        }
    } catch (error) {
        console.error('Error fetching data from Redis:', error);
        // Handle the error or return an error indicator
        return null;
    }
}


function formatNumberWithTwoDecimals(number) {
    // Check if the number has a fractional part
    if (Number.isInteger(number)) {
        return number + ".00"; // Add ".00" when there's no fractional part
    } else {
        return number; // Convert to a string without changes
    }
}


async function filterData(data, ws) {
    if (Number.isInteger(Number(data))) {
        ws.send(Number(data) + 1);
    }
    if (data.startsWith('42["tttv"')) {
        data = data.substring(10);
        data = data.slice(0, -1);
        var result = JSON.parse(data);
        return result;
    }
}


async function connectToWebSocket(username, name) {
    var allCandles = { "1m": [], "5m": [], "15m": [], "30m": [], "1h": [], "4h": [], "1d": [], "1w": [], "1M": [] };

    var redisData = await moveRedisToRam(name.toLowerCase());

    if (redisData != null) {
        // Update allCandles for the specific symbol
        allCandles = redisData;
    }



    return new Promise(resolve => {
        const ws = new WebSocket("wss://msg.nahayatnegar.com/socket.io/?EIO=4&transport=websocket", {
            headers: headers
        });

        ws.on('open', () => {
            console.log(`Connected to WebSocket server for ${username}`);

            const subscriptionMessage = '40';
            ws.send(subscriptionMessage);

            setTimeout(() => {
                const subscriptionMessage3 = `42["subscribe","${username + '0M'}"]`;
                ws.send(subscriptionMessage3);
                resolve(ws); // Resolve the promise after connecting
            }, 2000);
        });

        ws.on('message', async (data) => {
            let result = data.toString('utf-8');
            let candleData = await filterData(result, ws)
            if (candleData != undefined) {
                var lastVolume = 0;
                const newCandle = {
                    t: candleData.t,
                    T: 0,
                    o: formatNumberWithTwoDecimals(candleData.o),
                    h: formatNumberWithTwoDecimals(candleData.h),
                    l: formatNumberWithTwoDecimals(candleData.l),
                    c: formatNumberWithTwoDecimals(candleData.c),
                    v: candleData.v != undefined ? candleData.v : 1,
                };

                if (allCandles['1m'][0] != undefined) {
                    lastVolume = allCandles['1m'][0].v;
                }



                const existingCandleIndex = allCandles['1m'].findIndex((candle) => candle.t == newCandle.t);

                if (existingCandleIndex >= 0) {
                    // Update existing candle
                    allCandles['1m'][existingCandleIndex] = newCandle;
                } else {
                    // Add new candle at the beginning
                    allCandles['1m'].unshift(newCandle);

                    if (allCandles['1m'].length >= 3) {
                        // Remove excess candles
                        allCandles['1m'].pop();

                        if (allCandles['1m'][1] != undefined) {
                            const shouldSaveCandle = {
                                t: allCandles['1m'][1].t,
                                T: allCandles['1m'][1].T,
                                c: allCandles['1m'][1].c,
                                h: allCandles['1m'][1].h,
                                l: allCandles['1m'][1].l,
                                o: allCandles['1m'][1].o,
                                v: allCandles['1m'][1].v,
                            };

                            saveCandleDataToPostgreSQL(name, '1m', shouldSaveCandle);
                        }
                    }
                }


                await makeOtherCandles(allCandles, "1m", lastVolume, username, name)
                // console.log(allCandles)
                redis.pipeline().set(`${name.toLowerCase()}`, JSON.stringify(allCandles)).expire(`${name.toLowerCase()}`, 259200).exec();
            }
        });

        ws.on('close', (data) => {
            console.log(data);
            console.log(`restarting connection for ${name} `)
            connectToWebSocket(username, name)
        });

        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
            console.log(`restarting connection for ${name} `)
            connectToWebSocket(username, name)
        });
    });
}



async function startStreams() {
    const chunkSize = 100;
    const symbolsPerDelay = 400;
    const delayDuration = 60 * 1000; // 1 minute in milliseconds
    const symbolChunks = [];

    const symbolEntries = Object.entries(symbols);

    // Divide symbols into chunks
    for (let i = 0; i < symbolEntries.length; i += chunkSize) {
        symbolChunks.push(symbolEntries.slice(i, i + chunkSize));
    }

    // Connect to WebSocket for each chunk
    for (let i = 0; i < symbolChunks.length; i++) {
        const chunk = symbolChunks[i];
        const promises = chunk.map(async ([username, name]) => {

            // Connect to WebSocket
            await connectToWebSocket(username, name);
        });

        await Promise.all(promises);

        // Introduce a delay after every symbolsPerDelay symbols
        if ((i + 1) % (symbolsPerDelay / chunkSize) === 0 && i < symbolChunks.length - 1) {
            console.log(`Waiting for 1 minute...`);
            await new Promise(resolve => setTimeout(resolve, delayDuration));
        }
    }
}



startStreams();


