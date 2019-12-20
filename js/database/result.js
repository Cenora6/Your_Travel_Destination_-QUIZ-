const resultPlaces = [
    {
        id: 1,
        name: "Korea Południowa",
        description: "Korea Południowa znana jest przede wszystkim jako jeden z azjatyckich tygrysów, a Seul - jedna ze stolic nowoczesnej technologii. Kraj ten ma jednak do zaoferowania nie tylko fantastyczny rozwój technologiczny, ale również przepiękne krajobrazy, wspaniałe zabytki i bogatą kulturę. ",
        tags: ["morze", "góry", "miasto", "zwiedzać"],
        photos: ["https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4", "https://s8.dziennik.pl/pliki/12135000/12135180-korea-poludniowa-900-555.jpg"],
        score: 0,
    },
    {
        id: 2,
        name: "Japonia",
        description: "Piękna i nastrojowa Japonia pobudza wyobraźnię i chwyta za serce, naprawdę łatwo się w niej zakochać i chcieć wracać jak najczęściej. To kraj, który nie boi się innowacji i postępu, a jednocześnie jest niezwykle przywiązany do swojej kultury i tradycji, z których jest dumny. Świątynie, sanktuaria, przytulne ogrody i tradycyjne obyczaje współistnieją tu obok nowoczesnych drapaczy chmur, futurystycznej architektury, ultraszybkich pociągów i ekscentrycznej popkultury. Japonia jest pełna sprzeczności, a jednocześnie harmonijna; przytłaczająca, a jednak uspokajająca. Japonia to kraj kontrastów.",
        tags: ["morze", "gorący", "góry", "miasto", "zwiedzać"],
        photos: ["https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://www.trafalgar.com/-/media/Project/Trafalgar/Product/hero-images/Splendours-of-Japan-w.jpg?smartCrop=1&centreCrop=1&w=1000&h=600"],
        score: 0,
    },
    {
        id: 3,
        name: "Brazylia",
        description: "razylia to największy kraj w Ameryce Południowej, a zarazem jedno z największych państw świata. Często nazywana jest krajem „miłości, korupcji i słońca”, choć według wielu osób zdecydowanie należałoby jeszcze dodać, że także piłki nożnej, ponieważ ten sport kochają tam wszyscy miłością bezwarunkową. Turystów przyciągają nieziemskie widoki, takie jak ciągnąca się kilometrami puszcza Amazońska czy bajeczne wodospady Iguazu. Na miejscu kuszą nas rozmaite gatunki owoców tropikalnych o niewiele mówiących nam nazwach, ale także doskonale nam znane mango i pomarańcze, których smak jest tutaj jednak nie do podrobienia.",
        tags: ["natura", "gorący", "lasy", "natura", "zwiedzać"],
        photos: ["http://www.inkas.com/tours/jpg_files/jpg_photos/brazil/new%20brazil%20jpgs/49f52d24635593.17038566frogview-gallery.jpg", "https://www.travelinglifestyle.net/wp-content/uploads/2018/07/brasil-759x500.jpg"],
        score: 0,
    },
    {
        id: 4,
        name: "Hiszpania",
        description: "Hiszpania slynie z wyjatkowego wybrzeza, pieknych plaz, goscinnych mieszkanców, wielu slynnych zabytków i przepysznej kuchni. To goracy kraj, gdzie atmosfera wakacyjna udziela sie kazdemu, a tetniace zyciem miasto gwarantuja niezapomniane atrakcje. Duzym atutem hiszpanskich kurortów sa piaszczyste plaze oraz lagodny klimat sprawiajacy, ze sezon turystyczny trwa tu bardzo dlugo, slonce swieci niemal przez caly rok, a temperatury sa zawsze dodatnie. Hiszpania to kraj z charakterem, którego sile mozna poznac wybierajac sie na pokaz barwnego tanca flamenco.",
        tags: ["miasto", "gorący", "plaże", "morze", "opalać"],
        photos: ["https://s10206.pcdn.co/wp-content/uploads/2016/04/Dollarphotoclub_spain-1920x1280.jpg", "https://handluggageonly.co.uk/wp-content/uploads/2016/03/Unique-Towns-To-Visit-In-Spain_-5.jpg"],
        score: 0,
    },
    {
        id: 5,
        name: "Antarktyda",
        description: "Antarktyda: To do tej pory w gruncie rzeczy niezbadany kontynent. Jest to jedyny kontynent, który jest stuprocentową anekumeną, czyli obszarem nie zamieszkanym przez człowieka. Mało kto zdaje sobie sprawę z tego, że Antarktyda jest prawie dwa razy większa od Australii! Około 98% Antarktydy pokrywa polarna czapa lodowa o średniej grubości 1,9 km. Kontynent ten zachwyca każdego, a jego fauna i flora jest iście niepowtarzalna. Podczas wyprawy spotkamy na swojej drodze wieloryby, wiele gatunków pingwinów, fok oraz ptaków. Niezmierzona Antarktyda to miejsce dla prawdziwych podróżników.",
        tags: ["natura", "zimny", "zwiedzać"],
        photos: ["https://www.traveller.com.au/content/dam/images/g/x/4/s/b/j/image.related.articleLeadwide.620x349.gx4s0h.png/1499313063335.jpg", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1492803580%2Fglacier-boat-ANTLANDS0417.jpg%3Fitok%3DCcq2JOfh&q=85https://www.azamaraclubcruises.com/sites/default/files/heros/antarctica-facts-hero-image.jpg"],
        score: 0,
    },
    {
        id: 6,
        name: "Islandia",
        description: "Islandia to wyspa marzeń dla pasjonatów natury: krystalicznie czyste powietrze, 10 tys. dudniących wodospadów, lodowce, rzeki, jeziora, zatoki, fiordy, wulkany i niebiańskie gejzery. To również raj dla miłośników zwierząt: na klifach i wysepkach gromadzą się kolorowe maskonury, głuptaki i rybitwy. Porośnięte mchem, trawą i porostami wielkie połacie kraju to miejsce wypasu owiec i długowłosych koni islandzkich, a w okalających wyspę wodach żyje wiele gatunków ssaków morskich: wieloryby, orki, delfiny i foki. ",
        tags: ["natura", "zimny", "góry", "zwiedzać"],
        photos: ["https://www.eccotravel.eu/images/galeria/Islandia/islandia_18.jpg", "https://i.iplsc.com/zorza-polarna-oswietla-wrak-amerykanskiego-samolotu-na-islan/0004YR9WNDWE9643-C122-F4.jpg"],
        score: 0,
    },
    {
        id: 7,
        name: "Egipt",
        description: "LamborEgipt to kraj jednej z najstarszych cywilizacji świata, pełen wspaniałych budowli, przepięknych dzieł kultury i sztuki oraz fascynujących wierzeń. Jednakże oprócz swych nieporównywalnych walorów kulturalno-historycznych, którymi zachwyca się cały świat, jest pełen różnorodnych krajobrazów oraz oferuje bogata paletę form wypoczynku. Od zwiedzania muzeów i starożytnych świątyń, poprzez forty kultury koptyjskiej i islamu, aż do kolorowych bazarów arabskich i nurkowania w Morzu Czerwonym. ",
        tags: ["miasto", "gorący", "plaże", "opalać"],
        photos: ["https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Egypt-Giza-Sphynx-178375366-pius99-copy.jpg", "https://www.havanatravelegypt.com/public_html/front/images/4.jpg/"],
        score: 0,
    },
    {
        id: 8,
        name: "Hawaje",
        description: " Hawaje to niebo na ziemi otoczone Pacyfikiem i oddalone o około 4 tysiące kilometrów od kontynentu amerykańskiego. Znajdziesz tu słoneczne plaże, światowej klasy sporty wodne i jedne z najpiękniejszych krajobrazów na świecie, a to tylko początek! Dodaj jeszcze bogate dziedzictwo kulturowe i maksymalnie wyluzowany styl życia i zrozumiesz, dlaczego wszyscy uwielbiamy Hawaje. ",
        tags: ["natura", "gorący", "plaże", "opalać"],
        photos: ["http://www.myhawaiitraveler.com/images/cache/cache_4/cache_a/cache_d/HK_Dyer_PropertyHero_6893-web-16aafda4.jpeg?ver=1468594472&aspectratio=1.5009380863039", "https://www.nationalgeographic.com/content/dam/adventure/photos/2017/stories/eric-sterman-aerial-surfing/aerial-seven-mile-miracle-north-shore-hawaii-aerial.adapt.1900.1.jpg"],
        score: 0,
    },
    {
        id: 9,
        name: "Indie",
        description: "Indie to jeden z najbardziej fascynujących krajów na świecie – jak żadne inne miejsce na Ziemi zmusza do podróży wgłąb siebie, składnia do refleksji, zmienia punkt widzenia. Łatwiej je kochać lub nienawidzić, niż zrozumieć.",
        tags: ["miasto", "gorący", "zwiedzać"],
        photos: ["https://www.peregrineadventures.com/sites/peregrine/files/styles/low-quality/public/pd/highlight/image/india_varanasi_highlight.jpg", "https://cdn.tourradar.com/s3/content-pages/46/1024x768/vshnmb.jpg"],
        score: 0,
    },
    {
        id: 10,
        name: "Nowa Zelandia",
        description: "Po przeciwnej stronie globu znajdują się dwie wyspy, których naturalne piękno nie ma sobie równych na całym świecie. Nowa Zelandia ocalona od masowej turystyki zachwyca niekończącymi się plażami, fiordami pełnymi delfinów i fok, gejzerami tryskającymi turkusową wodą. Połacie zielonych łąk, lodowce i góry, przy których Alpy wyglądają jak Babia Góra czynią to miejsce naprawdę wyjątkowym. Zapraszamy do Nowej Zelandii, gdzie liczba owiec wciąż czterokrotnie przekracza liczbę ludności!",
        tags: ["natura", "gorący", "lasy", "natura", "zwiedzać"],
        photos: ["https://www.worldtravelguide.net/wp-content/uploads/2017/04/shu-NewZealand-155246192-Olga-Danylenko-copy.jpg", "https://nz.ambafrance.org/local/cache-vignettes/L945xH531/2f810c5f814ea3d6-e7a79.jpg?1569856132"],
        score: 0,
    }
];

export default resultPlaces;