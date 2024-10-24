const buildings = [
  { name: "Duncan Hall", coords: [-121.8818255533243, 37.332565121910314] },
  {
    name: "Department of Geology",
    coords: [-121.8818255533243, 37.332565121910314],
  },
  { name: "MLK Library", coords: [-121.88499652448878, 37.33552180970677] },
  {
    name: "Natural Science Building",
    coords: [-121.88438149380002, 37.334178987824636],
  },
  {
    name: "Washington Square Hall",
    coords: [-121.8842158585074, 37.33424627711701],
  },
  {
    name: "Yoshihiro Uchida Hall",
    coords: [-121.88386648811228, 37.3336903616767],
  },
  {
    name: "Interdisciplinary Science Building",
    coords: [-121.88291591610741, 37.33316737668067],
  },
  {
    name: "West Parking Garage",
    coords: [-121.8830224743657, 37.332441668976834],
  },
  {
    name: "SJSU Police Department",
    coords: [-121.88021017568653, 37.33354513205914],
  },
  {
    name: "South Parking Garage",
    coords: [-121.88078475070907, 37.33321158198863],
  },
  { name: "MacQuarrie Hall", coords: [-121.88156772232327, 37.33346207829525] },
  {
    name: "Division of Health Professions",
    coords: [-121.88156772232327, 37.33346207829525],
  },
  {
    name: "Department of Mathematics and Statistics",
    coords: [-121.88156772232327, 37.33346207829525],
  },
  {
    name: "Spartan Recreation and Aquatic Center",
    coords: [-121.8796605123649, 37.3344763498138],
  },
  {
    name: "Campus Village 2",
    coords: [-121.87863384563545, 37.33485760090997],
  },
  {
    name: "Campus Village A",
    coords: [-121.87758828194968, 37.33459801440525],
  },
  {
    name: "CVA",
    coords: [-121.87758828194968, 37.33459801440525],
  },
  {
    name: "Campus Village C",
    coords: [-121.87815445674114, 37.33528476662583],
  },
  {
    name: "CVC",
    coords: [-121.87815445674114, 37.33528476662583],
  },
  {
    name: "Campus Village B",
    coords: [-121.87758828194968, 37.335038325163694],
  },
  {
    name: "CVB",
    coords: [-121.87758828194968, 37.335038325163694],
  },
  {
    name: "Village Market",
    coords: [-121.87752624107412, 37.33486825830804],
  },
  { name: "Dinning Commmons", coords: [-121.8785007384459, 37.33381283706024] },

  { name: "CV2", coords: [-121.87863384563545, 37.33485760090997] },
  { name: "Sweeney Hall", coords: [-121.88109979254199, 37.33400727325159] },
  { name: "Joe West Hall", coords: [-121.8781089974711, 37.33432199738888] },
  {
    name: "Department of Child and Adolescent Development",
    coords: [-121.88109979254199, 37.33400727325159],
  },
  {
    name: "Department of Communicative Disorders and Sciences",
    coords: [-121.88109979254199, 37.33400727325159],
  },
  { name: "Washburn Hall", coords: [-121.8793388593726, 37.33366594660015] },
  {
    name: "Spartan Complex Building",
    coords: [-121.8826518369015, 37.33423566456807],
  },
  {
    name: "Department of Philosophy",
    coords: [-121.88243408738677, 37.33481400720072],
  },
  {
    name: "Science Building",
    coords: [-121.88491058389316, 37.33485042173474],
  },
  {
    name: "SJSU Department of Physics and Astronomy",
    coords: [-121.88491058389316, 37.33485757874259],
  },
  {
    name: "SJSU Writing Center",
    coords: [-121.88527187736781, 37.3355951551024],
  },
  {
    name: "Department of Environmental Studies",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "Department of Urban and Regional Planning",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "School of Social Work",
    coords: [-121.88428529210455, 37.33430201479643],
  },
  {
    name: "Spartan Memorial",
    coords: [-121.88331179646298, 37.334258067128545],
  },
  {
    name: "Faculty Office Building",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "Department of English and Comparative Literature",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "Department of Philosophy",
    coords: [-121.88265117329071, 37.33460869278154],
  },
  {
    name: "Department of Health Science and Recreation",
    coords: [-121.88243395918957, 37.33422720644325],
  },
  {
    name: "Department of Hospitality, Recreation and Tourism Management",
    coords: [-121.88243395918957, 37.33422720644325],
  },
  { name: "Ginger Market", coords: [-121.88175064607279, 37.33373025572077] },
  {
    name: "Dwight Bentel Hall",
    coords: [-121.88265069653993, 37.33505720549657],
  },
  {
    name: "Department of Chemical and Materials Engineering",
    coords: [-121.88137372646491, 37.33475685196342],
  },
  {
    name: "Historic Tower Hall",
    coords: [-121.8834620471925, 37.33533566628259],
  },
  {
    name: "Morris Dailey Auditorium",
    coords: [-121.88323751530874, 37.335329290381786],
  },
  {
    name: "Student Wellness Center",
    coords: [-121.88118866184455, 37.334812840609985],
  },
  {
    name: "Spartan Rose Garden",
    coords: [-121.88321612200305, 37.33578239361085],
  },
  {
    name: "Hugh Gillis Hall",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "Department of Film and Theatre",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "Department of Communication Studies",
    coords: [-121.8845365926944, 37.336419561572654],
  },
  {
    name: "Dudley Moorhead Hall",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "Department of History",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "Department of Economics",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "Photographic Services",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  {
    name: "Instructional Resource Center",
    coords: [-121.88395486432607, 37.3363057094993],
  },
  { name: "Tower Lawn", coords: [-121.8834620471925, 37.33533566628259] },
  { name: "Clark Hall", coords: [-121.8827348442323, 37.335919599294044] },
  {
    name: "Department of Political Science",
    coords: [-121.8827348442323, 37.335919599294044],
  },
  {
    name: "Department of Linguistics and Language Development",
    coords: [-121.8827348442323, 37.335919599294044],
  },
  {
    name: "Department of Occupational Therapy",
    coords: [-121.88186747661544, 37.33565789276442],
  },
  {
    name: "Central Classroom Building",
    coords: [-121.88186747661544, 37.33565789276442],
  },
  {
    name: "International Gateways",
    coords: [-121.88150317944182, 37.33527124219226],
  },
  { name: "Human Resources", coords: [-121.88281644418646, 37.33693619599707] },
  { name: "Career Center", coords: [-121.88281644418646, 37.33693619599707] },
  {
    name: "Administration Building",
    coords: [-121.88281644418646, 37.33693619599707],
  },
  {
    name: "Accessible Education Center",
    coords: [-121.88281644418646, 37.33693619599707],
  },
  {
    name: "Olympic Black Power Statue",
    coords: [-121.88257875538504, 37.33551086588288],
  },
  { name: "Spartan Racing", coords: [-121.88239166593566, 37.33724467044404] },
  {
    name: "Department of Civil Engineering",
    coords: [-121.88234417298241, 37.33713828150115],
  },
  {
    name: "Department of Aerospace Engineering",
    coords: [-121.88212376202684, 37.336945208032425],
  },
  {
    name: "Department of Computer and Software Engineering",
    coords: [-121.88214004522553, -37.336839046758776],
  },
  {
    name: "Department of Industrial and Systems Engineering",
    coords: [-121.88196961440646, 37.33657148515517],
  },
  {
    name: "General Engineering",
    coords: [-121.88164395043279, 37.33664571201692],
  },
  {
    name: "Engineering Central Shop",
    coords: [-121.88172319533304, 37.33670095056413],
  },
  { name: "Dean's Office", coords: [-121.88139101807992, 37.33673979014329] },
  {
    name: "Software and Computer Engineering Society",
    coords: [-121.88151911256591, 37.33684767775798],
  },
  { name: "SCE", coords: [-121.88151911256591, 37.33684767775798] },
  {
    name: "Charles W. Davidson College of Engineering",
    coords: [-121.8811367325608, 37.33681229246387],
  },
  {
    name: "Department of Mechanical Engineering",
    coords: [-121.88141597146007, 37.33729049810564],
  },
  {
    name: "Engineering Building",
    coords: [-121.88154404693977, 37.337357140821375],
  },
  {
    name: "Engineering Student Success Center",
    coords: [-121.88152258927126, 37.33745257308651],
  },
  {
    name: "Department of Electrical Engineering",
    coords: [-121.88204592980475, 37.33749342461822],
  },
  {
    name: "Engineering Computing Services",
    coords: [-121.88202246047679, 37.33739585984263],
  },
  { name: "Airforce ROTC", coords: [-121.88035303352103, 37.33724640970495] },
  {
    name: "Department of Aviation and Technology",
    coords: [-121.88035303352103, 37.33724640970495],
  },
  {
    name: "Industrial Studies",
    coords: [-121.88091210328612, 37.3380421879369],
  },
  {
    name: "SJSU Associated Students House",
    coords: [-121.87904130587677, 37.337485111307046],
  },
  { name: "ATMS", coords: [-121.87975235807448, 37.337351916075754] },
  {
    name: "Facilities Development and Operations",
    coords: [-121.88037463723724, 37.33833292261692],
  },
  {
    name: "SJSU Shipping and Receiving",
    coords: [-121.87948731798255, 37.33833129521643],
  },
  {
    name: "North Parking Garage",
    coords: [-121.88072432308032, 37.339366344970166],
  },
  {
    name: "SJSU Student Services Center",
    coords: [-121.8811560159107, 37.33909242819827],
  },
  {
    name: "Department of Management Information Systems",
    coords: [-121.87875853222342, 37.33720351368666],
  },
  {
    name: "Lucas College and Graduate School of Business",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  {
    name: "Financial Management Association",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  {
    name: "Department of Accounting & Finance",
    coords: [-121.87875853222342, 37.337030603855254],
  },
  { name: "BBC", coords: [-121.87886454097791, 37.33645751464365] },
  {
    name: "Boccardo Business Center",
    coords: [-121.87886454097791, 37.33645751464365],
  },
  {
    name: "Jack Holland Student Success Center",
    coords: [-121.87851590978933, 37.3365232250713],
  },
  { name: "Student Union", coords: [-121.88147436328568, 37.33613633077899] },
  {
    name: "Professional and Global Education (PGE)",
    coords: [-121.88160557833862, 37.336339368699946],
  },
  {
    name: "SJSU Jamba Juice",
    coords: [-121.88109252829642, 37.33625545100825],
  },
  {
    name: "Japanese Kitchen by Wild Blue",
    coords: [-121.88143216939291, 37.3363829591447],
  },
  { name: "Halal Shack", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "Paseo Fresh", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "Taco Bell", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "Panda Express", coords: [-121.88132756324553, 37.336412282300216] },
  { name: "Tea Degree", coords: [-121.88132756324553, 37.336412282300216] },
  {
    name: "Spartan Food Pantry",
    coords: [-121.88101104217095, 37.33665293387501],
  },
  {
    name: "Department of Sociology & Interdisciplinary Social Sciences",
    coords: [-121.88071997577676, 37.33655044660033],
  },
  {
    name: "Chicanx/Latinx Student Success Center",
    coords: [-121.88080131007412, 37.33674213160714],
  },
  {
    name: "SJSU Welcome Center",
    coords: [-121.88080131007412, 37.33674213160714],
  },
  {
    name: "SJSU Pride Center",
    coords: [-121.88062629594289, 37.33674266475299],
  },
  {
    name: "Gender Equity Center",
    coords: [-121.88041736334485, 37.33671824362847],
  },
  { name: "SJSU Starbucks", coords: [-121.88036511764446, 37.33664568746533] },
  {
    name: "San Jose State University Spartan Bookstore",
    coords: [-121.88027107539021, 37.33661079401753],
  },
  { name: "AS Print Shop", coords: [-121.88007045192339, 37.33658365465926] },
  {
    name: "Student Union Ballroom",
    coords: [-121.88080636992238, 37.33662336739396],
  },
  {
    name: "Student Union Meeting Rooms",
    coords: [-121.8805453799128, 37.33668397194508],
  },
  { name: "MOSAIC Center", coords: [-121.88008228728191, 37.33654497833622] },
  {
    name: "Student Union Bowling Center",
    coords: [-121.88014376336825, 37.33646799414607],
  },
  {
    name: "Student Union Billiards Room",
    coords: [-121.88010380390114, 37.33671666501863],
  },
  {
    name: "AS General Service Center",
    coords: [-121.87963576152005, 37.33670880758881],
  },
  {
    name: "Student Union Theater",
    coords: [-121.87990264130693, 37.33693166232043],
  },
  {
    name: "Ceasar Chavez Monument",
    coords: [-121.88133134879642, 37.33584632427244],
  },
  { name: "School of Music", coords: [-121.8808696598461, 37.33565022269918] },
  { name: "Music Building", coords: [-121.8808696598461, 37.33565022269918] },
  {
    name: "The Concert Hall of SJSU",
    coords: [-121.8808696598461, 37.33565022269918],
  },
  {
    name: "Art and Design Building",
    coords: [-121.8797913057731, 37.335963201235764],
  },
  {
    name: "Animation and Illustration Building",
    coords: [-121.8797913057731, 37.335963201235764],
  },
  {
    name: "Natalie and James Thompson Art Gallery",
    coords: [-121.8793121907879, 37.336058663704975],
  },
  {
    name: "The Valley Foundation School of Nursing",
    coords: [-121.87916255602978, 37.33570597049444],
  },
  {
    name: "Health Building",
    coords: [-121.87916255602978, 37.33570597049444],
  },
  {
    name: "Provident Credit Union Event Center",
    coords: [-121.88057804339259, 37.33506790329542],
  },
  {
    name: "Provident Credit Union ATM",
    coords: [-121.88057804339259, 37.33506790329542],
  },
  { name: "Boccardo Gate", coords: [-121.88384742038768, 37.33316180666836] },
  { name: "Swenson Gate", coords: [-121.88439374422605, 37.333890305993584] },
];

export default buildings;
