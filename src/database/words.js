const words = [
    {
      "word": "Adão",
      "forbidden_words": ["Eva", "Éden", "fruto proibido", "pecado", "Gênesis"]
    },
    {
      "word": "Eva",
      "forbidden_words": ["Adão", "serpente", "Éden", "fruto proibido", "pecado"]
    },
    {
      "word": "Noé",
      "forbidden_words": ["Arca", "dilúvio", "animais", "alicerce", "aliança"]
    },
    {
      "word": "Abraão",
      "forbidden_words": ["Sara", "promessa", "Isaque", "aliança", "Terra Prometida"]
    },
    {
      "word": "Sara",
      "forbidden_words": ["Abraão", "Isaque", "promessa", "mulher estéril", "aliança"]
    },
    {
      "word": "Isaque",
      "forbidden_words": ["Abraão", "Sara", "promessa", "cativeiro", "aliança"]
    },
    {
      "word": "Jacó",
      "forbidden_words": ["Esaú", "Israel", "escada de Jacó", "Labão", "aliança"]
    },
    {
      "word": "José",
      "forbidden_words": ["Faraó", "egípcio", "sonhos", "prisão", "interpretar"]
    },
    {
      "word": "Moisés",
      "forbidden_words": ["Egito", "Tábua da Lei", "deserto", "libertação", "farol"]
    },
    {
      "word": "Arão",
      "forbidden_words": ["Moisés", "sumo sacerdote", "êxodo", "canaã", "vara"]
    },
    {
      "word": "Miriam",
      "forbidden_words": ["Moisés", "profetisa", "cântico", "águas amargas", "lepra"]
    },
    {
      "word": "Josué",
      "forbidden_words": ["Canaã", "terra prometida", "exército", "muralhas de Jericó", "sucessor"]
    },
    {
      "word": "Débora",
      "forbidden_words": ["juíza", "Israel", "Baraque", "cântico de Débora", "Sísera"]
    },
    {
      "word": "Gideão",
      "forbidden_words": ["Midianitas", "trombetas", "exército", "Efraimitas", "estátua de ouro"]
    },
    {
      "word": "Sansão",
      "forbidden_words": ["Filisteus", "Dalila", "força", "raposa", "templo de Dagom"]
    },
    {
      "word": "Rute",
      "forbidden_words": ["Moabe", "Boaz", "nora", "ceifando", "avozinha"]
    },
    {
      "word": "Samuel",
      "forbidden_words": ["Rei Saul", "profeta", "unção", "Israel", "filhos"]
    },
    {
      "word": "Saul",
      "forbidden_words": ["Rei Samuel", "Davi", "perseguição", "feiticeira de Endor", "armadura"]
    },
    {
      "word": "Davi",
      "forbidden_words": ["Golias", "Salomão", "Israel", "ungido", "slingshot"]
    },
    {
      "word": "Salomão",
      "forbidden_words": ["sabedoria", "Rainha de Sabá", "construção", "reino", "divisão"]
    },
    {
      "word": "Elias",
      "forbidden_words": ["Jezebel", "Monte Carmelo", "fogo do céu", "viúva de Sarepta", "Eliseu"]
    },
    {
      "word": "Eliseu",
      "forbidden_words": ["Elias", "Geazi", "milagres", "poço de Jericó", "pequeno e grande"]
    },
    {
      "word": "Isaías",
      "forbidden_words": ["profeta", "messias", "Jerusalém", "voz que clama no deserto", "Immanuel"]
    },
    {
      "word": "Jeremias",
      "forbidden_words": ["profeta", "poço de lodo", "rol de Baruque", "Caldeus", "cinto de linho"]
    },
    {
      "word": "Ezequiel",
      "forbidden_words": ["visão dos querubins", "vale de ossos secos", "roda dentro de roda", "profeta", "rolo do livro"]
    },
    {
      "word": "Daniel",
      "forbidden_words": ["leão na cova", "Nabucodonosor", "escrita na parede", "interpretação de sonhos", "três amigos"]
    },
    {
      "word": "Jonas",
      "forbidden_words": ["baleia", "Nínive", "profeta", "tempestade", "oração"]
    },
    {
      "word": "Miquéias",
      "forbidden_words": ["profeta", "justiça", "montanhas testemunharão", "pastores", "micróbio"]
    },
    {
      "word": "Naum",
      "forbidden_words": ["Nínive", "destruição", "visão", "paciência", "montanhas"]
    },
    {
      "word": "Ageu",
      "forbidden_words": ["profeta", "templo", "desprezado", "prata e ouro", "bênção"]
    },
    {
      "word": "Zacarias",
      "forbidden_words": ["anjos", "Macedônia", "pêndulo", "quatro chifres", "óleo de unção"]
    },
    {
      "word": "Malaquias",
      "forbidden_words": ["mensageiro", "sacerdote", "maldição", "corações dos pais", "Monte Tabor"]
    },
    {
      "word": "João Batista",
      "forbidden_words": ["batismo", "voz que clama no deserto", "Jesus", "pecado", "Herodes"]
    },
    {
      "word": "Jesus",
      "forbidden_words": ["Cruz", "ressurreição", "milagres", "discípulos", "salvação"]
    },
    {
      "word": "Maria",
      "forbidden_words": ["Virgem", "concepção", "José", "Magnificat", "Mãe de Deus"]
    },
    {
      "word": "José de Nazaré",
      "forbidden_words": ["carpinteiro", "Maria", "sonhos", "Belém", "família de Jesus"]
    },
    {
      "word": "João Evangelista",
      "forbidden_words": ["discípulo amado", "Ilha de Patmos", "revelação", "Apocalipse", "irmão de Tiago"]
    },
    {
      "word": "Pedro",
      "forbidden_words": ["rocha", "negou Jesus", "discípulo", "pesca milagrosa", "primeira pregação"]
    },
    {
      "word": "Paulo",
      "forbidden_words": ["apóstolo", "epístolas", "Damasco", "viagem missionária", "Antigo Testamento"]
    },
    {
      "word": "Barnabé",
      "forbidden_words": ["Filho da consolação", "Atos dos Apóstolos", "Viagem missionária", "Helenistas", "Açores"]
    },
    {
      "word": "Estêvão",
      "forbidden_words": ["diácono", "mártir", "pedras", "visão do céu aberto", "Saulo de Tarso"]
    },
    {
      "word": "Filipe",
      "forbidden_words": ["diácono", "etíope eunuco", "Samaria", "Espírito Santo", "Atos dos Apóstolos"]
    },
    {
      "word": "Cornélio",
      "forbidden_words": ["centurião", "Atos dos Apóstolos", "visão de anjo", "Pedro", "primeiro gentio convertido"]
    },
    {
      "word": "Timóteo",
      "forbidden_words": ["jovem", "cartas de Paulo", "Efésios", "cuidado com o rebanho", "circuncisão"]
    },
    {
      "word": "Tito",
      "forbidden_words": ["companheiro de Paulo", "crentes em Creta", "circuncisão", "Boas obras", "Carta a Tito"]
    },
    {
      "word": "Hebreus",
      "forbidden_words": ["carta", "fé", "melhor aliança", "sacerdote eterno", "resto do Sábado"]
    },
    {
      "word": "Tiago",
      "forbidden_words": ["irmão de Jesus", "fé sem obras", "pobreza", "paciência", "tentações"]
    },
    {
      "word": "Judas",
      "forbidden_words": ["Epístola de Judas", "falsos mestres", "anjos que não guardaram sua posição", "Edomitas", "inveja"]
    },
    {
      "word": "Apocalipse",
      "forbidden_words": ["visão de João", "Sete selos", "besta do mar", "Nova Jerusalém", "julgamento final"]
    },
    {
      "word": "Abel",
      "forbidden_words": ["Caim", "sacrifício", "pastor de ovelhas", "primeira morte", "justiça"]
    },
    {
      "word": "Ló",
      "forbidden_words": ["Sodoma", "esposas", "mulher de Lot", "sal da terra", "fuga da cidade"]
    },
    {
      "word": "Raabe",
      "forbidden_words": ["harlot", "espiões", "corda escarlate", "paredes de Jericó", "terra prometida"]
    },
    {
      "word": "Rute",
      "forbidden_words": ["Moabe", "Boaz", "nora", "ceifando", "avozinha"]
    },
    {
      "word": "Ester",
      "forbidden_words": ["Rainha", "Mardoqueu", "Hamã", "decreto real", "coragem"]
    },
    {
      "word": "Débora",
      "forbidden_words": ["juíza", "Israel", "Baraque", "cântico de Débora", "Sísera"]
    },
    {
      "word": "Gideão",
      "forbidden_words": ["Midianitas", "trombetas", "exército", "Efraimitas", "estátua de ouro"]
    },
    {
      "word": "Sansão",
      "forbidden_words": ["Filisteus", "Dalila", "força", "raposa", "templo de Dagom"]
    },
    {
      "word": "Ana",
      "forbidden_words": ["Elcana", "Samuel", "oração", "promessa", "Filhos de Eli"]
    },
    {
      "word": "Samuel",
      "forbidden_words": ["Rei Saul", "profeta", "unção", "Israel", "filhos"]
    },
    {
      "word": "Saul",
      "forbidden_words": ["Rei Samuel", "Davi", "perseguição", "feiticeira de Endor", "armadura"]
    },
    {
      "word": "Davi",
      "forbidden_words": ["Golias", "Salomão", "Israel", "ungido", "slingshot"]
    },
    {
      "word": "Salomão",
      "forbidden_words": ["sabedoria", "Rainha de Sabá", "construção", "reino", "divisão"]
    },
    {
      "word": "Elias",
      "forbidden_words": ["Jezebel", "Monte Carmelo", "fogo do céu", "viúva de Sarepta", "Eliseu"]
    },
    {
      "word": "Eliseu",
      "forbidden_words": ["Elias", "Geazi", "milagres", "poço de Jericó", "pequeno e grande"]
    },
    {
      "word": "Isaías",
      "forbidden_words": ["profeta", "messias", "Jerusalém", "voz que clama no deserto", "Immanuel"]
    },
    {
      "word": "Jeremias",
      "forbidden_words": ["profeta", "poço de lodo", "rol de Baruque", "Caldeus", "cinto de linho"]
    }
  ]

  export default words;