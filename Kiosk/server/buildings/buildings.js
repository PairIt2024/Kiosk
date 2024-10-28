const buildings = [
  { name: "duncan hall", coords: [-121.8818255533243, 37.332565121910314] },
  {
    name: "department of geology",
    coords: [-121.8818255533243, 37.332565121910314],
  },
  { name: "mlk library", coords: [-121.88499652448878, 37.33552180970677] },
  {
    name: "natural science building",
    coords: [-121.88438149380002, 37.334178987824636],
  },
  {
    name: "washington square hall",
    coords: [-121.8842158585074, 37.33424627711701],
  },
  {
    name: "yoshihiro uchida hall",
    coords: [-121.88386648811228, 37.3336903616767],
  },
  {
    name: "interdisciplinary science building",
    coords: [-121.88291591610741, 37.33316737668067],
  },
  {
    name: "west parking garage",
    coords: [-121.8830224743657, 37.332441668976834],
  },
  {
    name: "sjsu police department",
    coords: [-121.88021017568653, 37.33354513205914],
  },
  {
    name: "south parking garage",
    coords: [-121.88078475070907, 37.33321158198863],
  },
  { name: "macquarrie hall", coords: [-121.88156772232327, 37.33346207829525] },
  {
    name: "division of health professions",
    coords: [-121.88156772232327, 37.33346207829525],
  },
  {
    name: "department of mathematics and statistics",
    coords: [-121.88156772232327, 37.33346207829525],
  },
  {
    name: "spartan recreation and aquatic center",
    coords: [-121.8796605123649, 37.3344763498138],
  },
  {
    name: "campus village 2",
    coords: [-121.87863384563545, 37.33485760090997],
  },
  {
    name: "campus village a",
    coords: [-121.87758828194968, 37.33459801440525],
  },
  { name: "cva", coords: [-121.87758828194968, 37.33459801440525] },
  {
    name: "campus village c",
    coords: [-121.87815445674114, 37.33528476662583],
  },
  { name: "cvc", coords: [-121.87815445674114, 37.33528476662583] },
  {
    name: "campus village b",
    coords: [-121.87758828194968, 37.335038325163694],
  },
  { name: "cvb", coords: [-121.87758828194968, 37.335038325163694] },
  { name: "village market", coords: [-121.87752624107412, 37.33486825830804] },
  { name: "dinning commmons", coords: [-121.8785007384459, 37.33381283706024] },
  { name: "cv2", coords: [-121.87863384563545, 37.33485760090997] },
  { name: "sweeney hall", coords: [-121.88109979254199, 37.33400727325159] },
  { name: "joe west hall", coords: [-121.8781089974711, 37.33432199738888] },
  {
    name: "department of child and adolescent development",
    coords: [-121.88109979254199, 37.33400727325159],
  },
  {
    name: "department of communicative disorders and sciences",
    coords: [-121.88109979254199, 37.33400727325159],
  },
  { name: "washburn hall", coords: [-121.8793388593726, 37.33366594660015] },
  {
    name: "spartan complex building",
    coords: [-121.8826518369015, 37.33423566456807],
  },
  {
    name: "department of philosophy",
    coords: [-121.88243408738677, 37.33481400720072],
  },
  {
    name: "science building",
    coords: [-121.88491058389316, 37.33485042173474],
  },
  {
    name: "sjsu department of physics and astronomy",
    coords: [-121.88491058389316, 37.33485757874259],
  },
  {
    name: "sjsu writing center",
    coords: [-121.88527187736781, 37.3355951551024],
  },
  {
    name: "department of environmental studies",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "department of urban and regional planning",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "school of social work",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "spartan memorial",
    coords: [-121.88331179646298, 37.334258067128545],
  },
  {
    name: "faculty office building",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "department of english and comparative literature",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "department of philosophy",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "department of health science and recreation",
    coords: [-121.88243395918957, 37.33422720644325],
  },
  {
    name: "department of hospitality, recreation and tourism management",
    coords: [-121.88243395918957, 37.33422720644325],
  },
  { name: "ginger market", coords: [-121.88175064607279, 37.33373025572077] },
  {
    name: "dwight bentel hall",
    coords: [-121.88265069653993, 37.33505720549657],
  },
  {
    name: "department of chemical and materials engineering",
    coords: [-121.88137372646491, 37.33475685196342],
  },
  {
    name: "historic tower hall",
    coords: [-121.8834620471925, 37.33533566628259],
  },
  {
    name: "morris dailey auditorium",
    coords: [-121.88323751530874, 37.335329290381786],
  },
  {
    name: "student wellness center",
    coords: [-121.88118866184455, 37.334812840609985],
  },
  {
    name: "spartan rose garden",
    coords: [-121.88321612200305, 37.33578239361085],
  },
  {
    name: "hugh gillis hall",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "department of film and theatre",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "department of communication studies",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "dudley moorhead hall",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "department of history",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "department of economics",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "photographic services",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "instructional resource center",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  { name: "tower lawn", coords: [-121.8834620471925, 37.33533566628259] },
  { name: "clark hall", coords: [-121.8827348442323, 37.335919599294044] },
  {
    name: "department of political science",
    coords: [-121.8827348442323, 37.335919599294044],
  },
  {
    name: "department of linguistics and language development",
    coords: [-121.8827348442323, 37.335919599294044],
  },
  {
    name: "department of occupational therapy",
    coords: [-121.88186747661544, 37.33565789276442],
  },
  {
    name: "central classroom building",
    coords: [-121.88186747661544, 37.33565789276442],
  },
  {
    name: "international gateways",
    coords: [-121.88150317944182, 37.33527124219226],
  },
  { name: "human resources", coords: [-121.88281644418646, 37.33693619599707] },
  { name: "career center", coords: [-121.88281644418646, 37.33693619599707] },
  {
    name: "administration building",
    coords: [-121.88281644418646, 37.33693619599707],
  },
  {
    name: "accessible education center",
    coords: [-121.88281644418646, 37.33693619599707],
  },
  {
    name: "olympic black power statue",
    coords: [-121.88257875538504, 37.33551086588288],
  },
  { name: "spartan racing", coords: [-121.88239166593566, 37.33724467044404] },
  {
    name: "department of civil engineering",
    coords: [-121.88234417298241, 37.33713828150115],
  },
  {
    name: "department of aerospace engineering",
    coords: [-121.88212376202684, 37.336945208032425],
  },
  {
    name: "department of computer and software engineering",
    coords: [-121.88214004522553, 37.336839046758776],
  },
  {
    name: "department of industrial and systems engineering",
    coords: [-121.88196961440646, 37.33657148515517],
  },
  {
    name: "general engineering",
    coords: [-121.88164395043279, 37.33664571201692],
  },
  {
    name: "engineering central shop",
    coords: [-121.88172319533304, 37.33670095056413],
  },
  { name: "deans office", coords: [-121.88139101807992, 37.33673979014329] },
  {
    name: "software and computer engineering society",
    coords: [-121.88151911256591, 37.33684767775798],
  },
  { name: "sce", coords: [-121.88151911256591, 37.33684767775798] },
  {
    name: "charles w. davidson college of engineering",
    coords: [-121.8811367325608, 37.33681229246387],
  },
  {
    name: "department of mechanical engineering",
    coords: [-121.88141597146007, 37.33729049810564],
  },
  {
    name: "engineering building",
    coords: [-121.88154404693977, 37.337357140821375],
  },
  {
    name: "engineering student success center",
    coords: [-121.88152258927126, 37.33745257308651],
  },
  {
    name: "department of electrical engineering",
    coords: [-121.88204592980475, 37.33749342461822],
  },
  {
    name: "engineering computing services",
    coords: [-121.88202246047679, 37.33739585984263],
  },
  { name: "airforce rotc", coords: [-121.88035303352103, 37.33724640970495] },
  {
    name: "department of aviation and technology",
    coords: [-121.88035303352103, 37.33724640970495],
  },
  {
    name: "industrial studies",
    coords: [-121.88091210328612, 37.3380421879369],
  },
  {
    name: "sjsu associated students house",
    coords: [-121.87904130587677, 37.337485111307046],
  },
  { name: "atms", coords: [-121.87975235807448, 37.337351916075754] },
  {
    name: "facilities development and operations",
    coords: [-121.88037463723724, 37.33833292261692],
  },
  {
    name: "sjsu shipping and receiving",
    coords: [-121.87948731798255, 37.33833129521643],
  },
  {
    name: "north parking garage",
    coords: [-121.88072432308032, 37.339366344970166],
  },
  {
    name: "sjsu student services center",
    coords: [-121.8811560159107, 37.33909242819827],
  },
  {
    name: "department of management information systems",
    coords: [-121.87875853222342, 37.33720351368666],
  },
  {
    name: "lucas college and graduate school of business",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  {
    name: "financial management association",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  {
    name: "department of accounting & finance",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  { name: "bbc", coords: [-121.87886454097791, 37.33645751464365] },
  {
    name: "boccardo business center",
    coords: [-121.87886454097791, 37.33645751464365],
  },
  {
    name: "jack holland student success center",
    coords: [-121.87851590978933, 37.3365232250713],
  },
  { name: "student union", coords: [-121.88147436328568, 37.33613633077899] },
  {
    name: "professional and global education (pge)",
    coords: [-121.88160557833862, 37.336339368699946],
  },
  {
    name: "sjsu jamba juice",
    coords: [-121.88109252829642, 37.33625545100825],
  },
  {
    name: "japanese kitchen by wild blue",
    coords: [-121.88143216939291, 37.3363829591447],
  },
  { name: "halal shack", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "paseo fresh", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "taco bell", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "panda express", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "tea degree", coords: [-121.88132756324553, 37.336412282300216] },
  {
    name: "spartan food pantry",
    coords: [-121.88101104217095, 37.33665293387501],
  },
  {
    name: "department of sociology & interdisciplinary social sciences",
    coords: [-121.88071997577676, 37.33655044660033],
  },
  {
    name: "chicanx/latinx student success center",
    coords: [-121.88080131007412, 37.33674213160714],
  },
  {
    name: "sjsu welcome center",
    coords: [-121.88080131007412, 37.33674213160714],
  },
  {
    name: "sjsu pride center",
    coords: [-121.88062629594289, 37.33674266475299],
  },
  {
    name: "gender equity center",
    coords: [-121.88041736334485, 37.33671824362847],
  },
  { name: "sjsu starbucks", coords: [-121.88036511764446, 37.33664568746533] },
  {
    name: "san jose state university spartan bookstore",
    coords: [-121.88027107539021, 37.33661079401753],
  },
  { name: "as print shop", coords: [-121.88007045192339, 37.33658365465926] },
  {
    name: "student union ballroom",
    coords: [-121.88080636992238, 37.33662336739396],
  },
  {
    name: "student union meeting rooms",
    coords: [-121.8805453799128, 37.33668397194508],
  },
  { name: "mosaic center", coords: [-121.88008228728191, 37.33654497833622] },
  {
    name: "student union bowling center",
    coords: [-121.88014376336825, 37.33646799414607],
  },
  {
    name: "student union billiards room",
    coords: [-121.88010380390114, 37.33671666501863],
  },
  {
    name: "as general service center",
    coords: [-121.87963576152005, 37.33670880758881],
  },
  {
    name: "student union theater",
    coords: [-121.87990264130693, 37.33693166232043],
  },
  {
    name: "ceasar chavez monument",
    coords: [-121.88133134879642, 37.33584632427244],
  },
  { name: "school of music", coords: [-121.8808696598461, 37.33565022269918] },
  { name: "music building", coords: [-121.8808696598461, 37.33565022269918] },
  {
    name: "the concert hall of sjsu",
    coords: [-121.8808696598461, 37.33565022269918],
  },
  {
    name: "art and design building",
    coords: [-121.8797913057731, 37.335963201235764],
  },
  {
    name: "animation and illustration building",
    coords: [-121.8797913057731, 37.335963201235764],
  },
  {
    name: "natalie and james thompson art gallery",
    coords: [-121.8793121907879, 37.336058663704975],
  },
  {
    name: "the valley foundation school of nursing",
    coords: [-121.87916255602978, 37.33570597049444],
  },
  { name: "health building", coords: [-121.87916255602978, 37.33570597049444] },
  {
    name: "provident credit union event center",
    coords: [-121.88057804339259, 37.33506790329542],
  },
  {
    name: "provident credit union atm",
    coords: [-121.88057804339259, 37.33506790329542],
  },
  { name: "boccardo gate", coords: [-121.88384742038768, 37.33316180666836] },
  { name: "swenson gate", coords: [-121.88439374422605, 37.333890305993584] },
];

export default buildings;
