// Helper functions to prevent crashes if IDs are missing
function safeSet(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
}
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
    return el;
}

(function() {
    emailjs.init("SE67PfF6urnha7Oom");
})();

// ==================== TRADUCTIONS (FR/EN/AR) ====================
const translations = {
    fr: {
        headerTitle: "Cabinet Dentaire Dr Rtimi Mossaab", headerSubtitle: "L'excellence des soins dentaires modernes à El Hamma.", skipLink: "Accéder au contenu principal",
        navAbout: "À propos", navServices: "Services", navTestimonials: "Avis", navGallery: "Galerie", navVideos: "Vidéos", navBlog: "Actualités", navKb: "Guides", navFaq: "FAQ", navRdv: "Rendez-vous", navContact: "Contact",
        ctaBook: "📅 RDV", aboutTitle: "Présentation | تقديم", aboutText1: "Bienvenue sur <strong>rtimidental.tn</strong>. Le cabinet du Dr Mossaab Rtimi vous accueille pour des soins de haute qualité.", aboutText2: "نرحب بكم في عيادتنا حيث نوفر أرقى خدمات طب الأسنان باستخدام تقنيات حديثة.", aboutText3: "Situé à El Hamma (Gabès), notre cabinet allie expertise, technologie de pointe (CAD/CAM, PRF, implants premium) et accueil chaleureux.",
        servicesTitle: "Services | خدماتنا", services: [ { icon: "🦷", title: "Implantologie", desc: "Pose d'implants dentaires de marques internationales." }, { icon: "💻", title: "CAD/CAM exocad", desc: "Conception numérique ultra-précise de vos couronnes." }, { icon: "✨", title: "Esthétique", desc: "Facettes E-max et blanchiment pour un sourire parfait." }, { icon: "📏", title: "Orthodontie", desc: "Alignement dentaire pour enfants et adultes." }, { icon: "🛡️", title: "Parodontologie", desc: "Traitement des gencives et utilisation du PRF." }, { icon: "🏥", title: "Urgences", desc: "Prise en charge rapide des douleurs dentaires." } ],
        testimonialsTitle: "Avis Patients | آراء المرضى", googleRatingLabel: "Note Google", reviewsCountLabel: "Avis Vérifiés", satisfactionLabel: "Satisfaction", gmbLink: "📍 Voir tous les avis sur Google Maps",
        testimonials: [ { stars: "⭐⭐⭐⭐⭐", text: "Excellent accueil et travail de très haute qualité.", author: "Thana R.", role: "Patiente depuis 11 ans" }, { stars: "⭐⭐⭐⭐⭐", text: "Très satisfait des implants dentaires. Explications claires et technologie CAD/CAM.", author: "Mohamed K.", role: "Patient implantatologie" }, { stars: "⭐⭐⭐⭐⭐", text: "Cabinet moderne et professionnel.", author: "Aïda M.", role: "Traitement esthétique" } ],
        galleryTitle: "Galerie Avant/Après | معرض الصور", sliderBefore: "AVANT", sliderAfter: "APRÈS", galleryTitles: ["Implants Dentaires", "Facettes Esthétiques", "Orthodontie Invisible", "Blanchiment Dentaire"],
        videosTitle: "Vidéos | فيديوهات", blogTitle: "Actualités & Conseils | أخبار ونصائح",
        blogPosts: [ 
            { id: "p1", date: "31 Mars 2026", title: "Pourquoi choisir les implants dentaires ?", desc: "Les avantages des implants par rapport aux prothèses classiques.", content: "<p>Perdre une dent peut être une expérience difficile, mais les implants dentaires offrent aujourd'hui une solution durable, esthétique et très confortable. Contrairement aux appareils amovibles (souvent appelés dentiers), l'implant est une petite racine artificielle en titane recouverte d'une couronne, ancrée de manière fixe.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Pourquoi les choisir ?</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Confort naturel :</strong> Ils se comportent comme de vraies dents. Vous pouvez manger, croquer et parler sans aucune gêne.</li><li><strong>Préservation de l'os :</strong> En remplaçant la racine naturelle, l'implant stimule la mâchoire et empêche la perte osseuse.</li><li><strong>Protection des autres dents :</strong> Contrairement au bridge classique, il n'est pas nécessaire de limer les dents saines voisines.</li><li><strong>Longévité :</strong> Avec une bonne hygiène professionnelle et un brossage quotidien, un implant peut durer toute une vie.</li></ul><p>N'hésitez pas à en parler au Dr Rtimi lors de votre prochaine consultation pour un bilan personnalisé.</p>" }, 
            { id: "p2", date: "25 Mars 2026", title: "Le blanchiment dentaire : mythes et réalités", desc: "Tout ce qu'il faut savoir avant de faire un blanchiment.", content: "<p>Le blanchiment dentaire est devenu une demande très courante pour retrouver un sourire éclatant. Cependant, de nombreuses fausses idées circulent sur Internet. Faisons le point pour vous.</p><div style='margin-top:15px;'><strong style='color:var(--primary);'>Mythe 1 : Le blanchiment abîme l'émail de vos dents.</strong><br><em>Faux.</em> Lorsqu'il est réalisé par un professionnel avec des produits adaptés, il n'altère absolument pas la surface de la dent. Le risque n'existe qu'avec l'achat de produits inadaptés en ligne.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>Mythe 2 : Les résultats durent pour toujours.</strong><br><em>Faux.</em> Nos dents continuent de vieillir, et notre alimentation (thé, café, épices) ainsi que le tabac les tachent à nouveau. L'effet dure généralement entre 1 et 3 ans. Une courte séance d'entretien est ensuite possible.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>Réalité : Le charbon actif est dangereux.</strong><br><em>Vrai !</em> S'il donne l'illusion de blanchir en polissant les taches, il est surtout extrêmement abrasif. Il use prématurément votre émail, qui ne repousse jamais, rendant les dents plus jaunes et fragiles à la longue.</div><p style='margin-top:20px;'>Pour un sourire lumineux et <strong>en toute sécurité</strong>, privilégiez le blanchiment médical au cabinet.</p>" },
            { id: "p3", date: "10 Avril 2026", title: "Facettes dentaires E-max : le secret d'un sourire parfait", desc: "Comment les facettes en céramique transforment votre sourire sans douleur.", content: "<p>Les facettes dentaires sont l'une des solutions esthétiques les plus appréciées pour retrouver un sourire éclatant et régulier, sans traitements longs.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Qu'est-ce qu'une facette ?</h4><p>Il s'agit d'une très fine pellicule de céramique (souvent de l'E-max, ultra-résistante) collée sur la face visible de vos dents.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Que corrigent-elles ?</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>La couleur :</strong> Dents très tachetées qui ne répondent pas au blanchiment.</li><li><strong>La forme :</strong> Dents abîmées, usées ou mal proportionnées.</li><li><strong>L'alignement :</strong> Légers chevauchements ou espaces (diastèmes).</li></ul><p>Grâce au système numérique CAD/CAM de notre cabinet, la conception est très précise et préserve au maximum votre dent naturelle.</p>" },
            { id: "p4", date: "5 Avril 2026", title: "Saignement des gencives : faut-il s'inquiéter ?", desc: "Comprendre les maladies parodontales et savoir comment réagir.", content: "<p>Il est fréquent de voir du sang en se brossant les dents. Beaucoup pensent avoir brossé trop fort. Pourtant, <strong>des gencives saines ne saignent pas !</strong></p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>L'évolution de la maladie</h4><p>Ce saignement est le premier signe d'une <strong>gingivite</strong> (inflammation due à la plaque dentaire). Non traitée par un professionnel, elle devient une <strong>parodontite</strong>. L'os de la dent est attaqué, menant à terme à la perte de la dent.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Nos solutions au cabinet</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Nettoyage profond :</strong> Élimination des bactéries accumulées sous la gencive.</li><li><strong>Régénération :</strong> Soins spécifiques (comme le PRF) pour aider la cicatrisation naturelle des tissus.</li><li><strong>Prévention :</strong> Conseils sur l'utilisation du fil dentaire et des brossettes.</li></ul><p>Au moindre saignement persistant ou mauvaise haleine, prenez directement rendez-vous au cabinet.</p>" },
            { id: "p5", date: "2 Avril 2026", title: "Peur du dentiste (Stomatophobie) ? Nos solutions", desc: "Comment nous transformons votre appréhension en une visite sereine.", content: "<p>La peur du dentiste est un sentiment très répandu. Que ce soit dû à une mauvaise expérience passée ou à l'appréhension de la douleur, l'anxiété pousse souvent à repousser les soins jusqu'à l'urgence.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Notre approche douceur</h4><p>Dans notre cabinet, votre confort est notre priorité absolue. Nous prenons le temps de vous écouter, de vous expliquer chaque étape et de répondre à toutes vos questions avant de commencer.</p><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Anesthésie maîtrisée :</strong> Nous utilisons des techniques d'anesthésie modernes pour garantir des soins 100% indolores.</li><li><strong>Environnement apaisant :</strong> Un cadre chaleureux et une équipe à l'écoute pour vous détendre.</li><li><strong>Contrôle total :</strong> Si vous ressentez le moindre inconfort, il suffit de lever la main pour que le docteur fasse une pause immédiatement.</li></ul><p>Ne laissez plus la peur dicter votre santé dentaire. Venez nous rencontrer simplement pour discuter de vos besoins en toute confiance.</p>" },
            { id: "p6", date: "28 Mars 2026", title: "Orthodontie invisible : redressez vos dents en toute discrétion", desc: "La révolution des gouttières transparentes pour adultes et adolescents.", content: "<p>Avoir des dents bien alignées n'est pas seulement une question d'esthétique, c'est aussi essentiel pour une bonne mastication et pour faciliter le brossage. Mais beaucoup d'adultes hésitent à porter des bagues métalliques.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>La solution : les aligneurs invisibles</h4><p>Il s'agit d'une série de gouttières transparentes sur mesure qui déplacent progressivement vos dents vers la position idéale.</p><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Invisibilité :</strong> Presque indétectables, elles vous permettent de sourire et de parler naturellement au travail ou en société.</li><li><strong>Confort :</strong> Pas de blessure due aux fils ou aux bagues qui frottent contre les joues.</li><li><strong>Hygiène :</strong> Amovibles, vous les retirez pour manger et pour vous brosser les dents normalement.</li></ul><p>Prenez rendez-vous pour savoir si votre cas peut être traité par cette méthode moderne, rapide et confortable.</p>" },
            { id: "p7", date: "20 Mars 2026", title: "Le détartrage : pourquoi le brossage ne suffit pas ?", desc: "L'étape indispensable pour protéger vos gencives et éviter la mauvaise haleine.", content: "<p>Même avec un brossage irréprochable (deux fois par jour pendant deux minutes), il y a toujours des zones difficiles d'accès où la plaque dentaire s'accumule. Avec le temps, cette plaque durcit et se transforme en tartre.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Pourquoi faut-il l'enlever ?</h4><p>Contrairement à la plaque, le tartre ne s'enlève plus au brossage. C'est un véritable \"nid à bactéries\" qui provoque l'inflammation des gencives (rougeurs, saignements) et est souvent le responsable de la mauvaise haleine.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Le soin au cabinet</h4><p>Le détartrage est un soin rapide, non douloureux (effectué sous ultrasons), qui redonne un aspect propre et lisse à vos dents. Il est fortement recommandé de le réaliser tous les 6 à 12 mois selon votre salive et vos habitudes (tabac, café).</p><p>Offrez un coup de propre à votre sourire dès aujourd'hui !</p>" },
            { id: "p8", date: "15 Mars 2026", title: "Urgence dentaire : Que faire en cas de douleur ou de choc ?", desc: "Les premiers gestes à adopter avant de consulter.", content: "<p>Les douleurs dentaires surviennent souvent sans prévenir. Savoir comment réagir peut sauver une dent ou atténuer la douleur.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>La rage de dent (Pulpite)</h4><p>C'est une douleur intense, souvent pulsatile, qui empire en position allongée. Prenez un antidouleur (comme le paracétamol), évitez le chaud/froid, et contactez-nous en urgence pour calmer le nerf irrité.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Dent expulsée (Traumatisme)</h4><p>Si vous perdez une dent suite à un choc : ne la lavez surtout pas (vous détruiriez les cellules vitales de la racine). Placez-la dans du lait ou dans votre bouche sous la langue, et venez au cabinet dans l'heure qui suit ! Une réimplantation est souvent possible.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Dent cassée ou couronne descellée</h4><p>Conservez le morceau ou la couronne et prenez rendez-vous. Évitez de mâcher du côté blessé. Notre équipe vous prendra en charge rapidement pour restaurer votre dent de manière esthétique.</p>" }
        ],
        kbTitle: "Guides Patients | دليل المرضى", kbItems: [ 
            { icon: "🪥", title: "Hygiène bucco-dentaire", desc: "Conseils quotidiens pour garder un sourire sain.", content: "<p>Une bonne hygiène bucco-dentaire est la base pour prévenir les caries et les inflammations des gencives.</p><ul><li><strong>Brossage :</strong> 2 fois par jour pendant 2 minutes. Privilégiez une brosse à poils souples pour ne pas agresser vos gencives.</li><li><strong>Espaces interdentaires :</strong> La brosse ne passe pas entre les dents. Utilisez du fil dentaire ou des brossettes au moins une fois par jour (le soir).</li><li><strong>Alimentation :</strong> Limitez le grignotage et les boissons sucrées ou acides entre les repas.</li><li><strong>Hydratation :</strong> Boire de l'eau favorise la production de salive, qui protège naturellement vos dents.</li></ul><p>Une visite de contrôle et un détartrage annuel au cabinet restent indispensables.</p>" }, 
            { icon: "📅", title: "Après une extraction", desc: "Ce qu'il faut faire les premiers jours.", content: "<p>Après l'extraction d'une dent, la formation d'un caillot de sang est cruciale pour la guérison.</p><ul><li><strong>Les premières 24h :</strong> Ne pas se rincer la bouche (pas de bain de bouche). Mangez tiède ou froid (évitez le chaud) et optez pour une alimentation molle.</li><li><strong>Saignement :</strong> Il est normal d'avoir un léger saignement. Si cela persiste, mordez sur une compresse stérile pendant 30 minutes.</li><li><strong>À éviter absolument :</strong> Ne pas fumer (le tabac ralentit la cicatrisation et augmente le risque d'infection), ne pas boire avec une paille, ne pas cracher violemment.</li><li><strong>Douleur :</strong> Prenez les médicaments prescrits par le Dr Rtimi en respectant les doses.</li></ul>" }, 
            { icon: "🦷", title: "Soins des implants", desc: "Comment entretenir vos implants à long terme.", content: "<p>Un implant ne peut pas avoir de carie, mais l'os et la gencive autour peuvent s'enflammer (péri-implantite) si l'hygiène n'est pas parfaite.</p><ul><li><strong>Brossage rigoureux :</strong> Brossez la couronne sur l'implant comme une vraie dent.</li><li><strong>Jet dentaire ou hydropulseur :</strong> Extrêmement utile pour déloger les résidus alimentaires coincés autour de la base de l'implant.</li><li><strong>Brossettes interdentaires :</strong> Elles sont essentielles pour nettoyer les espaces entre l'implant et la dent voisine.</li><li><strong>Contrôles réguliers :</strong> Une radio et un contrôle clinique annuel nous permettent de vérifier la stabilité de l'os autour de votre implant.</li></ul>" },
            { icon: "🗂️", title: "Gouttières / Appareils", desc: "L'entretien d'un traitement orthodontique", content: "<p>Pour un traitement efficace et une bonne hygiène, votre appareil doit être entretenu quotidiennement.</p><ul><li><strong>Nettoyage :</strong> Brossez votre appareil/gouttière hors de votre bouche avec de l'eau tiède (jamais chaude) et un peu de savon ou du produit vaisselle, pas de dentifrice car il est abrasif !</li><li><strong>Conservation :</strong> Lorsque vous ne les portez pas pour manger, mettez-les toujours dans leur boîte, jamais dans un mouchoir (risque de perte).</li><li><strong>Boissons :</strong> Avec des gouttières transparentes, ne buvez que de l'eau. Retirez-les pour boire du café, du thé ou des sodas afin d'éviter de les tacher ou de les déformer.</li></ul>" },
            { icon: "🦷", title: "Sensibilité dentaire", desc: "Causes et solutions pour ne plus souffrir en mangeant.", content: "<p>La sensibilité dentaire se manifeste par une douleur brève mais vive au contact du froid, du chaud, du sucré ou de l'acide. Elle est souvent due à une usure de l'émail ou à un déchaussement des gencives qui expose la dentine.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Causes fréquentes :</h4><ul><li><strong>Brossage trop vigoureux</strong> avec une brosse dure.</li><li><strong>Bruxisme</strong> (grincement des dents la nuit).</li><li><strong>Consommation excessive</strong> d'aliments acides (agrumes, sodas).</li><li><strong>Récession gingivale</strong> liée à l'âge ou à une maladie parodontale.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Solutions au cabinet :</h4><ul><li><strong>Vernis fluoré</strong> ou application de résine protectrice.</li><li><strong>Gouttière occlusale</strong> si le bruxisme est en cause.</li><li><strong>Greffe de gencive</strong> en cas de déchaussement important.</li></ul><p>N'attendez pas que la gêne devienne insupportable. Une consultation permet de trouver la cause exacte et le traitement adapté.</p>" },
            { icon: "👶", title: "Première visite chez l'enfant", desc: "À quel âge venir et comment préparer votre enfant.", content: "<p>La première visite chez le dentiste est une étape importante pour instaurer une relation de confiance et prévenir les caries précoces. L'idéal est de consulter <strong>dès l'apparition des premières dents</strong>, ou au plus tard vers l'âge de 2-3 ans.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Pourquoi si tôt ?</h4><ul><li>Dépister précocement les caries du biberon ou les anomalies de croissance.</li><li>Habituer l'enfant à l'environnement du cabinet sans stress.</li><li>Conseiller les parents sur l'hygiène bucco-dentaire adaptée à chaque âge.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Comment préparer la visite ?</h4><ul><li>Utiliser un vocabulaire positif : \"Le dentiste compte tes dents et vérifie qu'elles sont bien propres.\"</li><li>Éviter les mots qui font peur comme \"piqûre\", \"mal\", \"arracher\".</li><li>Lire un livre ou regarder un dessin animé sur la visite chez le dentiste.</li></ul><p>Dans notre cabinet, nous prenons le temps de mettre l'enfant en confiance, avec une approche ludique et douce. La première séance est souvent un simple \"tour en fauteuil\" et un comptage des dents.</p>" },
            { icon: "😴", title: "Ronflement et apnée du sommeil", desc: "Le rôle du dentiste dans les troubles respiratoires nocturnes.", content: "<p>Le ronflement n'est pas seulement une gêne sociale. Il peut être le signe d'un <strong>syndrome d'apnée obstructive du sommeil</strong>, une pathologie sérieuse qui augmente le risque de problèmes cardiovasculaires et de fatigue chronique.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Quel est le rôle du dentiste ?</h4><p>Le dentiste peut dépister des signes bucco-dentaires évocateurs : usure anormale des dents (bruxisme nocturne), mâchoire étroite, langue volumineuse. Il peut également proposer un traitement par <strong>orthèse d'avancée mandibulaire</strong>.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>L'orthèse d'avancée mandibulaire :</h4><ul><li>C'est une gouttière sur mesure portée la nuit.</li><li>Elle avance légèrement la mâchoire inférieure pour libérer le passage de l'air dans la gorge.</li><li>Efficace dans les cas d'apnée légère à modérée ou en cas d'intolérance au masque CPAP.</li></ul><p>Si vous ronflez bruyamment ou si votre conjoint remarque des pauses respiratoires pendant votre sommeil, parlez-en lors de votre prochaine visite. Nous pourrons vous orienter vers un médecin spécialiste du sommeil si nécessaire.</p>" },
            { icon: "🧪", title: "Tout savoir sur le PRF", desc: "La médecine régénérative au service de la cicatrisation dentaire.", content: "<p>Le PRF (Platelet-Rich Fibrin ou Fibrine Riche en Plaquettes) est une technologie de pointe qui utilise vos propres cellules pour <strong>accélérer et améliorer la cicatrisation</strong> après une chirurgie buccale.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Comment ça marche ?</h4><ul><li>Un petit échantillon de votre sang est prélevé (comme une prise de sang classique).</li><li>Il est immédiatement centrifugé pour concentrer les plaquettes et les facteurs de croissance naturels.</li><li>La membrane de fibrine obtenue est placée directement dans la zone opérée (extraction, implant, greffe).</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Quels sont les bénéfices ?</h4><ul><li><strong>Réduction significative</strong> des douleurs et de l'inflammation post-opératoires.</li><li><strong>Cicatrisation plus rapide</strong> des tissus mous (gencive) et durs (os).</li><li><strong>Diminution des risques d'infection</strong> grâce aux propriétés antibactériennes naturelles.</li><li><strong>Technique 100% autologue</strong> : aucun risque de rejet ou d'allergie.</li></ul><p>Le PRF est particulièrement utile lors de la pose d'implants, des greffes osseuses ou des extractions complexes. Demandez au Dr Rtimi si cette technique peut vous bénéficier.</p>" }
        ],
        faqTitle: "FAQ",
        faqCategories: { all: "Tous", implants: "Implants", esthetique: "Esthétique", general: "Général", orthodontie: "Orthodontie", pediatrie: "Pédiatrie" },
        faqs: [
            { q: "Combien de temps dure la pose d'un implant ?", a: "La pose chirurgicale dure environ 30 à 60 minutes par implant. La cicatrisation complète prend 3 à 6 mois.", category: "implants" },
            { q: "Les facettes sont-elles douloureuses ?", a: "Non, la procédure est réalisée sous anesthésie locale. Une légère sensibilité peut apparaître pendant 24-48h.", category: "esthetique" },
            { q: "Quels sont les tarifs des implants dentaires ?", a: "Le tarif dépend du nombre d'implants et de la complexité du cas. Nous vous proposons un devis gratuit lors de la consultation. Des facilités de paiement sont possibles.", category: "implants" },
            { q: "Combien de temps dure une consultation ?", a: "Une consultation classique dure environ 20 à 30 minutes. Pour un bilan complet ou un traitement plus complexe, comptez 45 minutes à 1 heure.", category: "general" },
            { q: "Proposez-vous des facilités de paiement ?", a: "Oui, nous acceptons les paiements en plusieurs fois sans frais pour les traitements importants. N'hésitez pas à nous en parler lors du rendez-vous.", category: "general" },
            { q: "Comment se déroule une séance de blanchiment dentaire ?", a: "Nous utilisons la technique de blanchiment ambulatoire avec gouttières sur mesure ou la technique au cabinet avec lampe activatrice. La séance dure environ 1h30, avec des résultats visibles immédiatement.", category: "esthetique" },
            { q: "Quelles sont les contre-indications des implants ?", a: "Les contre-indications principales sont une maladie non contrôlée (diabète sévère, troubles immunitaires), un tabagisme excessif, une radiothérapie récente au niveau maxillo-facial, ou une mauvaise hygiène bucco-dentaire. Une évaluation préalable est nécessaire.", category: "implants" },
            { q: "Acceptez-vous la sécurité sociale et les mutuelles ?", a: "Oui, nous prenons en charge la CNSS (sécurité sociale tunisienne) ainsi que la plupart des mutuelles. Nous vous aidons à constituer votre dossier de prise en charge.", category: "general" },
            { q: "Quels sont les délais pour un traitement orthodontique ?", a: "La durée moyenne d'un traitement orthodontique est de 12 à 24 mois selon la complexité. Pour les enfants, un traitement précoce peut être envisagé dès 7-8 ans.", category: "orthodontie" },
            { q: "Faut-il être à jeun avant une intervention ?", a: "Pour les interventions simples (extraction, soins), il n'est pas nécessaire d'être à jeun. Pour les interventions plus lourdes sous anesthésie générale ou sédation, une consigne spécifique vous sera donnée.", category: "general" },
            { q: "Proposez-vous des traitements pour les enfants ?", a: "Oui, nous accueillons les enfants dès le plus jeune âge pour des soins adaptés (dentisterie pédiatrique, orthodontie précoce). Nous mettons tout en œuvre pour que la visite soit agréable.", category: "pediatrie" }
        ],
        rdvTitle: "Prendre Rendez-vous | حجز موعد", nameLabel: "Nom complet *", phoneLabel: "Téléphone *", typeLabel: "Type de consultation *", selectDefault: "Choisir...", optImplant: "Implantologie", optEsthetique: "Esthétique", optOrtho: "Orthodontie", optUrgence: "Urgence", optAutre: "Autre", dateLabel: "Date souhaitée *", messageLabel: "Message / Motif", submitBtn: "Envoyer la demande de RDV",
        contactTitle: "Contact | اتصل بنا", addressLabel: "📍 Adresse :", phoneContactLabel: "📞 Téléphone :", emailLabel: "✉️ Email :", hoursLabel: "🕒 Horaires :", hoursText: "Lundi – Vendredi : 08h00 – 18h00, Samedi : 08h00 – 13h00", quickMsgTitle: "Nous écrire directement", quickMsgLabel: "Votre message", quickSendBtn: "Envoyer",
        modalTitle: "✅ Rendez-vous confirmé", modalSub: "Nous vous contacterons sous 24h.",
        footerTitle: "Cabinet Dentaire Dr Rtimi Mossaab", footerAddress: "Immeuble Bouchlaka<br>El Hamma, Gabès 6020<br>Tunisie", quickLinksTitle: "Liens rapides", footerServices: "Services", footerGallery: "Galerie", footerRdv: "Prendre RDV", footerFaq: "FAQ", legalTitle: "Informations légales", copyright: "© 2026 Cabinet Dentaire Dr Rtimi Mossaab - Tous droits réservés.", credits: "Conception & développement : site web professionnel.", footerBottomText: "Site web optimisé pour mobile • Accessibilité • Confidentialité",
        searchPlaceholder: "Rechercher...", datePlaceholder: "Choisir une date", blogReadMore: "Lire l'article →", kbReadMore: "Voir le guide →",
        errName: "Veuillez saisir votre nom complet.", errPhone: "Numéro de téléphone invalide (8 chiffres min).", errType: "Veuillez choisir le type de consultation.", errDate: "Veuillez choisir une date future.", errGeneric: "Une erreur est survenue. Veuillez réessayer.",
        txtSending: "Envoi en cours...", alertNoMsg: "Veuillez écrire un message.", alertSent: "Message envoyé ! (démo)", alertNoRes: "Aucun résultat trouvé pour : ", badgeOpen: "🟢 Ouvert", badgeClosed: "🔴 Fermé", 
        consentLabel: "J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande de rendez-vous.",
        waFallback: "Si WhatsApp ne s'est pas ouvert automatiquement, <a href='#' id='emailFallback' style='text-decoration:underline; color:var(--primary); font-weight:bold;'>cliquez ici pour nous envoyer un email</a>.",
        waTemplate: (name, phone, type, date, msg) => `Bonjour Dr Rtimi,\n\nNom: ${name}\nTéléphone: ${phone}\nType: ${type}\nDate souhaitée: ${date}\nMessage: ${msg}`, successMsg: (name, date) => `Merci ${name}, votre demande de RDV pour le ${date} a été envoyée sur WhatsApp ✅`,
        techTitle: "Technologie & Précision", techBadge: "Innovation", techCards: [
            { icon: "🖥️", title: "CAD/CAM exocad", shortDesc: "Conception et fabrication assistée par ordinateur pour des prothèses d'une précision micrométrique en une seule séance.", fullDesc: "Grâce au logiciel de pointe <strong>exocad</strong>, nous créons vos couronnes et facettes sur mesure directement au cabinet. Cette technologie élimine les délais d'attente et garantit une adaptation parfaite à votre dentition naturelle. C'est l'assurance d'un résultat esthétique durable et d'un confort immédiat." },
            { icon: "🔬", title: "Scanner Intra-oral", shortDesc: "Finies les empreintes pâteuses. Nous utilisons des scanners 3D pour une réplique numérique parfaite de votre dentition.", fullDesc: "Dites adieu au réflexe nauséeux des pâtes traditionnelles. Notre caméra optique 3D capture chaque détail de votre bouche en quelques secondes. Ce procédé est non seulement plus confortable pour vous, mais il permet aussi une communication instantanée avec nos laboratoires pour une précision chirurgicale." },
            { icon: "🩸", title: "Technologie PRF", shortDesc: "Utilisation de vos propres facteurs de croissance pour accélérer considérablement la cicatrisation après une chirurgie.", fullDesc: "La Fibrine Riche en Plaquettes (PRF) est une solution 100% naturelle issue de votre propre organisme. En concentrant vos facteurs de croissance, nous accélérons la régénération des tissus et de l'os. Cela réduit significativement les douleurs post-opératoires et les risques d'infection après la pose d'implants." }
        ]
    },
    en: {
        headerTitle: "Dr Rtimi Mossaab Dental Clinic", headerSubtitle: "Excellence in modern dental care in El Hamma.", skipLink: "Skip to main content",
        navAbout: "About Us", navServices: "Services", navTestimonials: "Reviews", navGallery: "Gallery", navVideos: "Videos", navBlog: "News", navKb: "Guides", navFaq: "FAQ", navRdv: "Appointment", navContact: "Contact",
        ctaBook: "📅 Book", aboutTitle: "About Us", aboutText1: "Welcome to <strong>rtimidental.tn</strong>. Dr Mossaab Rtimi's clinic welcomes you for high-quality dental care.", aboutText2: "", aboutText3: "Located in El Hamma (Gabès), our clinic combines expertise, cutting-edge technology and a warm welcome.",
        servicesTitle: "Our Services", services: [ { icon: "🦷", title: "Implantology", desc: "Placement of international brand dental implants." }, { icon: "💻", title: "CAD/CAM exocad", desc: "Ultra-precise digital design of your crowns." }, { icon: "✨", title: "Cosmetics", desc: "E-max veneers and whitening for a perfect smile." }, { icon: "📏", title: "Orthodontics", desc: "Dental alignment for children and adults." }, { icon: "🛡️", title: "Periodontics", desc: "Gum treatment and use of PRF." }, { icon: "🏥", title: "Emergencies", desc: "Fast management of dental pain." } ],
        testimonialsTitle: "Patient Reviews", googleRatingLabel: "Google Rating", reviewsCountLabel: "Verified Reviews", satisfactionLabel: "Satisfaction", gmbLink: "📍 See all reviews on Google Maps",
        testimonials: [ { stars: "⭐⭐⭐⭐⭐", text: "Excellent reception and very high quality work.", author: "Thana R.", role: "Patient for 11 years" }, { stars: "⭐⭐⭐⭐⭐", text: "Very satisfied with the dental implants. Clear explanations.", author: "Mohamed K.", role: "Implantology patient" }, { stars: "⭐⭐⭐⭐⭐", text: "Modern and professional clinic.", author: "Aïda M.", role: "Cosmetic treatment" } ],
        galleryTitle: "Before/After Gallery", sliderBefore: "BEFORE", sliderAfter: "AFTER", galleryTitles: ["Dental Implants", "Cosmetic Veneers", "Invisible Orthodontics", "Teeth Whitening"],
        videosTitle: "Videos", blogTitle: "News & Tips",
        blogPosts: [ 
            { id: "p1", date: "March 31, 2026", title: "Why choose dental implants?", desc: "The advantages of implants over traditional dentures.", content: "<p>Losing a tooth can be a difficult experience, but dental implants offer a durable, aesthetic, and highly comfortable solution today. Unlike removable appliances (often called dentures), an implant is a small titanium artificial root anchored directly into your jaw.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Why choose them?</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Natural comfort:</strong> They feel exactly like real teeth. You can eat, bite, and speak without any discomfort or slipping fear.</li><li><strong>Bone preservation:</strong> By replacing the natural root, the implant stimulates the jaw and prevents bone loss.</li><li><strong>Protects neighboring teeth:</strong> Unlike a traditional bridge, there is no need to file down healthy adjacent teeth.</li><li><strong>Exceptional longevity:</strong> With good oral hygiene and regular visits, an implant can last a lifetime!</li></ul><p>Feel free to discuss it with Dr. Rtimi during your next consultation for a personalized assessment.</p>" }, 
            { id: "p2", date: "March 25, 2026", title: "Teeth whitening: myths and realities", desc: "Everything you need to know before getting a whitening.", content: "<p>Teeth whitening has become a very common request for a brighter smile. However, many misconceptions circulate on the internet. Let's clarify things for you.</p><div style='margin-top:15px;'><strong style='color:var(--primary);'>Myth 1: Whitening inevitably damages your tooth enamel.</strong><br><em>False.</em> When performed or supervised by a dentist using strictly dosed professional products, it does not alter the tooth surface at all.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>Myth 2: The results last forever.</strong><br><em>False.</em> Our diet (tea, coffee, spices) as well as tobacco tend to stain them again. Whitening effects generally last between 1 and 3 years depending on your lifestyle.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>Reality: Activated charcoal is dangerous.</strong><br><em>True!</em> While it gives the illusion of whitening by removing superficial stains, it is extremely abrasive. It prematurely wears down your enamel, which never grows back!</div><p style='margin-top:20px;'>For a bright and <strong>safe</strong> smile, always choose the medical whitening provided at our clinic.</p>" },
            { id: "p3", date: "April 10, 2026", title: "E-max Dental Veneers: the secret to a perfect smile", desc: "How ceramic veneers can transform your smile painlessly.", content: "<p>Dental veneers are one of the most popular aesthetic solutions to restore a perfectly harmonious smile without long treatments.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>What is a veneer?</h4><p>It is a very thin shell of ceramic (often E-max, known for its extreme strength) bonded to the visible surface of your teeth.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>What do they fix?</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Color:</strong> Highly stained teeth that do not respond to whitening.</li><li><strong>Shape:</strong> Damaged, worn, or poorly proportioned teeth.</li><li><strong>Alignment:</strong> Slight overlaps or spaces (diastemas).</li></ul><p>Thanks to our clinic's digital CAD/CAM system, the design is highly precise and preserves your natural tooth as much as possible.</p>" },
            { id: "p4", date: "April 5, 2026", title: "Bleeding gums: should you be worried?", desc: "Understanding periodontal disease and knowing what to do.", content: "<p>It is common to see blood when brushing your teeth. Many think they brushed too hard. However, <strong>healthy gums do not bleed!</strong></p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Disease progression</h4><p>Bleeding is the first sign of <strong>gingivitis</strong> (inflammation caused by plaque). Untreated, it becomes <strong>periodontitis</strong>. The bone supporting the tooth is attacked, eventually leading to tooth loss.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Our clinic solutions</h4><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Deep cleaning:</strong> Removing bacteria accumulated under the gums.</li><li><strong>Regeneration:</strong> Specific care (like PRF) to help natural tissue healing.</li><li><strong>Prevention:</strong> Advice on using dental floss and interdental brushes.</li></ul><p>If you notice persistent bleeding or bad breath, do not wait and book an appointment with our clinic immediately.</p>" },
            { id: "p5", date: "April 2, 2026", title: "Scared of the dentist? Our stress-free solutions", desc: "How we turn your apprehension into a calm and serene visit.", content: "<p>Dental fear is a very common feeling. Whether due to a past bad experience or the fear of pain, anxiety often pushes people to delay care until it becomes an emergency.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Our gentle approach</h4><p>In our clinic, your comfort is our absolute priority. We take the time to listen to you, explain every step, and answer all your questions before starting.</p><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Controlled anesthesia:</strong> We use modern anesthetic techniques to guarantee 100% painless care.</li><li><strong>Soothing environment:</strong> A warm setting and an attentive team to help you relax.</li><li><strong>Total control:</strong> If you feel any discomfort, simply raise your hand, and the doctor will pause immediately.</li></ul><p>Do not let fear dictate your dental health. Come meet us just to discuss your needs with complete confidence.</p>" },
            { id: "p6", date: "March 28, 2026", title: "Invisible orthodontics: align your teeth discreetly", desc: "The revolution of clear aligners for adults and teens.", content: "<p>Having well-aligned teeth isn't just about aesthetics; it's also essential for proper chewing and easier brushing. However, many adults hesitate to wear metal braces.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>The solution: clear aligners</h4><p>This is a series of custom-made transparent trays that progressively move your teeth into the ideal position.</p><ul style='margin-left:20px; margin-bottom:20px;'><li><strong>Invisibility:</strong> Almost undetectable, they allow you to smile and speak naturally at work or socially.</li><li><strong>Comfort:</strong> No injuries from wires or brackets rubbing against your cheeks.</li><li><strong>Hygiene:</strong> Removable, you take them out to eat and brush your teeth normally.</li></ul><p>Book an appointment to see if your case can be treated with this modern, fast, and comfortable method.</p>" },
            { id: "p7", date: "March 20, 2026", title: "Scaling: why brushing isn't enough?", desc: "The essential step to protect your gums and avoid bad breath.", content: "<p>Even with flawless brushing (twice a day for two minutes), there are always hard-to-reach areas where dental plaque accumulates. Over time, this plaque hardens and turns into tartar.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Why must it be removed?</h4><p>Unlike plaque, tartar cannot be removed by brushing. It acts as a genuine \"bacteria nest\" that causes gum inflammation (redness, bleeding) and is often the main cause of bad breath.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Professional care</h4><p>Scaling is a quick, painless procedure (done with ultrasound) that restores a clean, smooth feeling to your teeth. It is highly recommended to do it every 6 to 12 months depending on your habits (smoking, coffee).</p><p>Treat your smile to a fresh clean today!</p>" },
            { id: "p8", date: "March 15, 2026", title: "Dental emergencies: toothache or trauma guide", desc: "The first steps to take before consulting.", content: "<p>Dental pain often strikes without warning. Knowing how to react can save a tooth or ease the pain.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Severe toothache (Pulpitis)</h4><p>An intense, throbbing pain that usually worsens when lying down. Take a painkiller (like paracetamol), avoid hot/cold foods, and contact us urgently to calm the irritated nerve.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Knocked-out tooth (Trauma)</h4><p>If you lose a tooth from an impact: do NOT wash it (you would destroy the vital root cells). Place it in milk or in your mouth under your tongue, and come to the clinic within an hour! Re-implantation is often possible.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Chipped tooth or loose crown</h4><p>Keep the piece or the crown and book an appointment. Avoid chewing on the injured side. Our team will take care of you quickly to seamlessly restore your tooth.</p>" }
        ],
        kbTitle: "Patient Guides", kbItems: [ 
            { icon: "🪥", title: "Oral Hygiene", desc: "Daily tips to keep a healthy smile.", content: "<p>Good oral hygiene is the foundation for preventing cavities and gum inflammation.</p><ul><li><strong>Brushing:</strong> Twice a day for 2 minutes. Prefer a soft-bristled brush to avoid irritating your gums.</li><li><strong>Interdental spaces:</strong> The brush doesn't go between teeth. Use dental floss or interdental brushes at least once a day (in the evening).</li><li><strong>Diet:</strong> Limit snacking and sugary or acidic drinks between meals.</li><li><strong>Hydration:</strong> Drinking water promotes saliva production, which naturally protects your teeth.</li></ul><p>An annual check-up and scaling at the clinic remain essential.</p>" }, 
            { icon: "📅", title: "After an Extraction", desc: "What to do in the first few days.", content: "<p>After a tooth extraction, the formation of a blood clot is crucial for healing.</p><ul><li><strong>The first 24h:</strong> Do not rinse your mouth (no mouthwash). Eat lukewarm or cold food (avoid hot food) and opt for a soft diet.</li><li><strong>Bleeding:</strong> Slight bleeding is normal. If it persists, bite down on a sterile gauze pad for 30 minutes.</li><li><strong>Avoid at all costs:</strong> Do not smoke (tobacco slows healing and increases infection risk), do not drink with a straw, do not spit violently.</li><li><strong>Pain:</strong> Take the medications prescribed by Dr. Rtimi, following the dosages.</li></ul>" }, 
            { icon: "🦷", title: "Implant Care", desc: "How to maintain your implants long-term.", content: "<p>An implant cannot get cavities, but the bone and gum around it can become inflamed (peri-implantitis) if hygiene is not perfect.</p><ul><li><strong>Rigorous brushing:</strong> Brush the crown on the implant just like a real tooth.</li><li><strong>Water flosser:</strong> Extremely useful for dislodging food particles stuck around the base of the implant.</li><li><strong>Interdental brushes:</strong> Essential to clean the spaces between the implant and neighboring teeth.</li><li><strong>Regular check-ups:</strong> An annual X-ray and clinical check-up allow us to monitor the bone stability around your implant.</li></ul>" },
            { icon: "🗂️", title: "Aligners & Appliances", desc: "How to care for your clear aligners or retainers.", content: "<p>For effective treatment and good hygiene, your appliance must be maintained daily.</p><ul><li><strong>Cleaning:</strong> Brush your appliance outside your mouth with lukewarm water (never hot) and soap. Do not use toothpaste as it is abrasive.</li><li><strong>Storage:</strong> When not wearing them to eat, always store them in their case, never in a napkin (risk of throwing them away).</li><li><strong>Drinking:</strong> With clear aligners, drink only water. Remove them to drink coffee, tea, or sodas to prevent staining or warping.</li></ul>" },
            { icon: "🦷", title: "Tooth Sensitivity", desc: "Causes and solutions to stop suffering while eating.", content: "<p>Tooth sensitivity is a brief but sharp pain triggered by cold, hot, sweet, or acidic foods. It often results from enamel wear or gum recession exposing the dentin.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Common causes:</h4><ul><li><strong>Aggressive brushing</strong> with a hard toothbrush.</li><li><strong>Bruxism</strong> (nighttime teeth grinding).</li><li><strong>Excessive consumption</strong> of acidic foods and drinks (citrus, sodas).</li><li><strong>Gingival recession</strong> due to aging or periodontal disease.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>In-office solutions:</h4><ul><li><strong>Fluoride varnish</strong> or application of a protective resin.</li><li><strong>Occlusal splint</strong> if bruxism is the underlying cause.</li><li><strong>Gum graft</strong> in cases of significant recession.</li></ul><p>Don't wait until the discomfort becomes unbearable. A consultation will identify the exact cause and the appropriate treatment.</p>" },
            { icon: "👶", title: "Child's First Dental Visit", desc: "When to come and how to prepare your child.", content: "<p>The first dental visit is an important milestone to build trust and prevent early childhood caries. Ideally, schedule an appointment <strong>as soon as the first teeth appear</strong>, or no later than age 2-3.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Why so early?</h4><ul><li>Early detection of baby bottle tooth decay or growth abnormalities.</li><li>Familiarize the child with the dental environment without stress.</li><li>Provide parents with age-appropriate oral hygiene guidance.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>How to prepare for the visit?</h4><ul><li>Use positive language: \"The dentist will count your teeth and check they are nice and clean.\"</li><li>Avoid scary words like \"shot,\" \"pain,\" or \"pull.\"</li><li>Read a book or watch a cartoon about going to the dentist.</li></ul><p>In our clinic, we take the time to put children at ease with a playful and gentle approach. The first appointment often consists of a simple \"ride in the chair\" and counting teeth.</p>" },
            { icon: "😴", title: "Snoring and Sleep Apnea", desc: "The dentist's role in nighttime breathing disorders.", content: "<p>Snoring is not just a social nuisance. It may indicate <strong>obstructive sleep apnea syndrome</strong>, a serious condition that increases the risk of cardiovascular problems and chronic fatigue.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>What is the dentist's role?</h4><p>The dentist can detect oral signs suggestive of sleep apnea: abnormal tooth wear (nocturnal bruxism), narrow jaw, large tongue. They may also offer treatment with a <strong>mandibular advancement device</strong>.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>Mandibular advancement device:</h4><ul><li>A custom-made oral appliance worn at night.</li><li>It gently advances the lower jaw to open the airway in the throat.</li><li>Effective for mild to moderate sleep apnea or in cases of CPAP intolerance.</li></ul><p>If you snore loudly or your partner notices pauses in your breathing during sleep, mention it at your next visit. We can refer you to a sleep specialist if necessary.</p>" },
            { icon: "🧪", title: "All About PRF", desc: "Regenerative medicine for dental healing.", content: "<p>PRF (Platelet-Rich Fibrin) is an advanced technology that uses your own cells to <strong>accelerate and improve healing</strong> after oral surgery.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>How does it work?</h4><ul><li>A small sample of your blood is drawn (like a routine blood test).</li><li>It is immediately centrifuged to concentrate platelets and natural growth factors.</li><li>The resulting fibrin membrane is placed directly into the surgical site (extraction, implant, graft).</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>What are the benefits?</h4><ul><li><strong>Significant reduction</strong> in post-operative pain and inflammation.</li><li><strong>Faster healing</strong> of soft tissues (gums) and hard tissues (bone).</li><li><strong>Reduced risk of infection</strong> thanks to natural antibacterial properties.</li><li><strong>100% autologous technique</strong>: no risk of rejection or allergy.</li></ul><p>PRF is particularly useful for implant placement, bone grafting, or complex extractions. Ask Dr. Rtimi if this technique can benefit you.</p>" }
        ],
        faqTitle: "FAQ",
        faqCategories: { all: "All", implants: "Implants", esthetique: "Cosmetics", general: "General", orthodontie: "Orthodontics", pediatrie: "Pediatrics" },
        faqs: [
            { q: "How long does a dental implant procedure take?", a: "The surgical placement takes about 30 to 60 minutes per implant. Complete healing takes 3 to 6 months.", category: "implants" },
            { q: "Are veneers painful?", a: "No, the procedure is performed under local anesthesia. Slight sensitivity may appear for 24-48 hours.", category: "esthetique" },
            { q: "What are the prices for dental implants?", a: "The price depends on the number of implants and the complexity of the case. We offer a free estimate during the consultation. Payment facilities are available.", category: "implants" },
            { q: "How long does a consultation last?", a: "A standard consultation takes about 20 to 30 minutes. For a complete check-up or a more complex treatment, expect 45 minutes to 1 hour.", category: "general" },
            { q: "Do you offer payment facilities?", a: "Yes, we accept payment in multiple installments with no fees for major treatments. Don't hesitate to ask us during your appointment.", category: "general" },
            { q: "How does a teeth whitening session work?", a: "We use ambulatory whitening with custom trays or in-office whitening with an activating lamp. The session lasts about 1.5 hours with immediate results.", category: "esthetique" },
            { q: "What are the contraindications for implants?", a: "Main contraindications are uncontrolled diseases (severe diabetes, immune disorders), excessive smoking, recent maxillofacial radiotherapy, or poor oral hygiene. A prior evaluation is necessary.", category: "implants" },
            { q: "Do you accept health insurance?", a: "Yes, we handle CNSS (Tunisian social security) and most mutual insurances. We help you build your coverage file.", category: "general" },
            { q: "What are the delays for orthodontic treatment?", a: "The average duration is 12 to 24 months, depending on complexity. Early treatment for children can be considered around 7-8 years old.", category: "orthodontie" },
            { q: "Do I need to fast before a procedure?", a: "For simple procedures (extractions, care), fasting is not needed. Specific instructions will be given for heavier procedures under general anesthesia or sedation.", category: "general" },
            { q: "Do you offer treatments for children?", a: "Yes, we welcome children from a young age for adapted care (pediatric dentistry, early orthodontics). We make sure the visit is pleasant.", category: "pediatrie" }
        ],
        rdvTitle: "Book an Appointment", nameLabel: "Full Name *", phoneLabel: "Phone *", typeLabel: "Consultation Type *", selectDefault: "Choose...", optImplant: "Implantology", optEsthetique: "Cosmetics", optOrtho: "Orthodontics", optUrgence: "Emergency", optAutre: "Other", dateLabel: "Desired Date *", messageLabel: "Message / Reason", submitBtn: "Send Request",
        contactTitle: "Contact Us", addressLabel: "📍 Address :", phoneContactLabel: "📞 Phone :", emailLabel: "✉️ Email :", hoursLabel: "🕒 Hours :", hoursText: "Monday – Friday: 08:00 – 18:00, Saturday: 08:00 – 13:00", quickMsgTitle: "Write to us directly", quickMsgLabel: "Your message", quickSendBtn: "Send",
        modalTitle: "✅ Appointment Confirmed", modalSub: "We will contact you within 24 hours.",
        footerTitle: "Dr Rtimi Mossaab Dental Clinic", footerAddress: "Bouchlaka Building<br>El Hamma, Gabès 6020<br>Tunisia", quickLinksTitle: "Quick Links", footerServices: "Services", footerGallery: "Gallery", footerRdv: "Book Appt", footerFaq: "FAQ", legalTitle: "Legal Information", copyright: "© 2026 Dr Rtimi Mossaab Dental Clinic - All rights reserved.", credits: "Design & development: professional website.", footerBottomText: "Mobile optimized website • Accessibility • Privacy",
        searchPlaceholder: "Search...", datePlaceholder: "Choose a date", blogReadMore: "Read article →", kbReadMore: "Read guide →",
        errName: "Please enter your full name.", errPhone: "Invalid phone number (min 8 digits).", errType: "Please select a consultation type.", errDate: "Please choose a future date.", errGeneric: "An error occurred. Please try again.",
        txtSending: "Sending...", alertNoMsg: "Please write a message.", alertSent: "Message sent! (demo)", alertNoRes: "No results found for: ", badgeOpen: "🟢 Open", badgeClosed: "🔴 Closed",
        consentLabel: "I agree that my data may be used to contact me regarding my appointment request.",
        waFallback: "If WhatsApp didn't open automatically, <a href='#' id='emailFallback' style='text-decoration:underline; color:var(--primary); font-weight:bold;'>click here to email us</a>.",
        waTemplate: (name, phone, type, date, msg) => `Hello Dr Rtimi,\n\nName: ${name}\nPhone: ${phone}\nType: ${type}\nDesired Date: ${date}\nMessage: ${msg}`, successMsg: (name, date) => `Thank you ${name}, your appointment request for ${date} has been sent via WhatsApp ✅`,
        techTitle: "Technology & Precision", techBadge: "Innovation", techCards: [
            { icon: "🖥️", title: "CAD/CAM exocad", shortDesc: "Computer-aided design and manufacturing for prostheses with micrometric precision in a single session.", fullDesc: "Thanks to the cutting-edge <strong>exocad</strong> software, we create your custom crowns and veneers directly in the office. This technology eliminates waiting times and ensures a perfect fit with your natural teeth. It guarantees a lasting aesthetic result and immediate comfort." },
            { icon: "🔬", title: "Intraoral Scanner", shortDesc: "No more gooey impressions. We use 3D scanners for a perfect digital replica of your teeth.", fullDesc: "Say goodbye to the gag reflex of traditional pastes. Our 3D optical camera captures every detail of your mouth in seconds. This process is not only more comfortable for you, but also allows instant communication with our labs for surgical precision." },
            { icon: "🩸", title: "PRF Technology", shortDesc: "Using your own growth factors to significantly accelerate healing after surgery.", fullDesc: "Platelet-Rich Fibrin (PRF) is a 100% natural solution derived from your own body. By concentrating your growth factors, we accelerate tissue and bone regeneration. This significantly reduces post-operative pain and the risk of infection after implant placement." }
        ]
    },
    ar: {
        headerTitle: "عيادة الدكتور مصعب رتيمي لطب و جراحة الأسنان", headerSubtitle: "تميز الرعاية الحديثة لطب الأسنان في الحامة.", skipLink: "الانتقال إلى المحتوى الرئيسي",
        navAbout: "حول", navServices: "الخدمات", navTestimonials: "آراء", navGallery: "معرض الصور", navVideos: "فيديوهات", navBlog: "أخبار", navKb: "دليل", navFaq: "أسئلة شائعة", navRdv: "موعد", navContact: "اتصل بنا",
        ctaBook: "📅 موعد", aboutTitle: "تقديم | Présentation", aboutText1: "مرحبًا بكم في <strong>rtimidental.tn</strong>. عيادة الدكتور مصعب رتيمي ترحب بكم لتقديم رعاية عالية الجودة.", aboutText2: "نرحب بكم في عيادتنا حيث نوفر أرقى خدمات طب الأسنان باستخدام تقنيات حديثة.", aboutText3: "تقع عيادتنا في الحامة (قابس)، وتجمع بين الخبرة والتكنولوجيا المتطورة والاستقبال الحار.",
        servicesTitle: "خدماتنا | Services", services: [ { icon: "🦷", title: "زراعة الأسنان", desc: "زراعة أسنان من علامات تجارية عالمية." }, { icon: "💻", title: "CAD/CAM exocad", desc: "تصميم رقمي فائق الدقة لتيجان الأسنان." }, { icon: "✨", title: "طب الأسنان التجميلي", desc: "قشور إيماكس وتقوية الأسنان لابتسامة مثالية." }, { icon: "📏", title: "تقويم الأسنان", desc: "محاذاة الأسنان للأطفال والبالغين." }, { icon: "🛡️", title: "علاج اللثة", desc: "علاج اللثة واستخدام PRF." }, { icon: "🏥", title: "حالات الطوارئ", desc: "معالجة سريعة لآلام الأسنان." } ],
        testimonialsTitle: "آراء المرضى | Avis Patients", googleRatingLabel: "تقييم جوجل", reviewsCountLabel: "آراء موثقة", satisfactionLabel: "رضا", gmbLink: "📍 عرض جميع الآراء على خرائط جوجل",
        testimonials: [ { stars: "⭐⭐⭐⭐⭐", text: "استقبال ممتاز وعمل بجودة عالية جدًا.", author: "فاطمة ب.", role: "مريضة منذ 3 سنوات" }, { stars: "⭐⭐⭐⭐⭐", text: "راضٍ جدًا عن زراعة الأسنان. شروحات واضحة وتقنية CAD/CAM.", author: "محمد ك.", role: "مريض زراعة أسنان" }, { stars: "⭐⭐⭐⭐⭐", text: "عيادة حديثة ومهنية.", author: "عائشة م.", role: "علاج تجميلي" } ],
        galleryTitle: "معرض الصور قبل/بعد", sliderBefore: "قبل", sliderAfter: "بعد", galleryTitles: ["زراعة الأسنان", "القشور التجميلية", "تقويم الأسنان الشفاف", "تبييض الأسنان"],
        videosTitle: "فيديوهات | Vidéos", blogTitle: "أخبار ونصائح | Actualités",
        blogPosts: [ 
            { id: "p1", date: "31 مارس 2026", title: "لماذا تختار زراعة الأسنان؟", desc: "مزايا الزراعة مقارنة بالأطراف الاصطناعية التقليدية.", content: "<p>فقدان السن يمكن أن يكون تجربة صعبة، ولكن زراعة الأسنان تقدم اليوم حلاً دائمًا وجماليًا ومريحًا للغاية. على عكس الأجهزة القابلة للإزالة (أطقم الأسنان)، فإن الزرعة عبارة عن جذر صناعي صغير من التيتانيوم يتم تثبيته مباشرة في عظم الفك وتغطيته بتاج.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>لماذا تختارها؟</h4><ul style='margin-right:20px; margin-bottom:20px;'><li><strong>راحة طبيعية:</strong> تعمل تمامًا مثل الأسنان الحقيقية. يمكنك الأكل والمضغ والتحدث دون أي إزعاج.</li><li><strong>الحفاظ على العظم:</strong> من خلال استبدال الجذر الطبيعي، تقوم الزرعة بتحفيز الفك وتمنع فقدان العظام.</li><li><strong>حماية الأسنان المجاورة:</strong> على عكس الجسر التقليدي، ليست هناك حاجة لنحت الأسنان السليمة المجاورة لتركيب زرعة.</li><li><strong>طول العمر:</strong> مع نظافة الفم الجيدة والزيارات المنتظمة للعيادة، يمكن أن تدوم الزرعة مدى الحياة.</li></ul><p>لا تتردد في التحدث مع الدكتور رتيمي خلال استشارتك القادمة للحصول على تقييم شخصي.</p>" }, 
            { id: "p2", date: "25 مارس 2026", title: "تبييض الأسنان: خرافات وحقائق", desc: "كل ما يجب معرفته قبل إجراء التبييض.", content: "<p>أصبح تبييض الأسنان طلبًا شائعًا جدًا للحصول على ابتسامة أكثر إشراقًا. ومع ذلك، هناك العديد من المفاهيم الخاطئة المتداولة. دعونا نوضح لك الأمور.</p><div style='margin-top:15px;'><strong style='color:var(--primary);'>خرافة 1: التبييض يدمر حتما مينا الأسنان.</strong><br><em>خطأ.</em> عندما يتم إجراؤه من قبل طبيب أسنان باستخدام منتجات احترافية ذات مقادير دقيقة، فإنه لا يؤثر أبدًا على سطح السن.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>خرافة 2: النتائج تدوم إلى الأبد.</strong><br><em>خطأ.</em> تستمر أسناننا في التقدم في العمر، كما أن نظامنا الغذائي (الشاي والقهوة) والتبغ يميل إلى تصبغها مرة أخرى. تدوم الآثار عمومًا بين سنة إلى 3 سنوات. يمكن بعد ذلك إجراء جلسة صيانة قصيرة.</div><div style='margin-top:15px;'><strong style='color:var(--primary);'>حقيقة: الفحم النشط خطير.</strong><br><em>صحيح!</em> في حين أنه يعطي وهم التبييض عن طريق إزالة البقع السطحية، إلا أنه كاشط للغاية. إنه يؤدي إلى تآكل المينا قبل الأوان، والذي لا ينمو أبدًا.</div><p style='margin-top:20px;'>للحصول على ابتسامة مشرقة و<strong>آمنة</strong>، اختر دائمًا التبييض الطبي المقدم في عيادتنا.</p>" },
            { id: "p3", date: "10 أبريل 2026", title: "قشور الأسنان إيماكس: سر الابتسامة المثالية", desc: "كيف تغير القشور الخزفية ابتسامتك دون ألم.", content: "<p>تعتبر قشور الأسنان (الفينير) من أفضل الحلول التجميلية لاستعادة ابتسامة متناسقة ومثالية، دون الحاجة لعلاجات طويلة.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>ما هي القشور؟</h4><p>هي قشرة خزفية رقيقة جدًا (غالبًا ما تكون E-max، معروفة بصلابتها القصوى) يتم تثبيتها على السطح المرئي لأسنانك.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>ماذا تصلح؟</h4><ul style='margin-right:20px; margin-bottom:20px;'><li><strong>اللون:</strong> الأسنان المصبوغة التي لا تستجيب للتبييض العادي.</li><li><strong>الشكل:</strong> الأسنان التالفة، المتآكلة أو غير المتناسبة.</li><li><strong>المحاذاة:</strong> التداخلات الطفيفة أو الفراغات.</li></ul><p>بفضل تقنية التصميم الرقمي CAD/CAM المتوفرة في عيادتنا، يتم التصميم بدقة بالغة وبطريقة تحافظ على السن الطبيعي قدر الإمكان.</p>" },
            { id: "p4", date: "5 أبريل 2026", title: "نزيف اللثة: هل يستدعي القلق؟", desc: "فهم أمراض اللثة ومعرفة كيفية التعامل معها.", content: "<p>من الشائع رؤية دماء عند تفريش الأسنان، ويعتقد الكثيرون أن السبب هو التفريش بقوة. لكن، <strong>اللثة الصحية لا تنزف أبدًا!</strong></p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>تطور المرض</h4><p>النزيف هو أول علامة على <strong>التهاب اللثة</strong> (بسبب تراكم البلاك). إذا لم يعالج من قبل طبيب محترف، يتطور إلى <strong>التهاب دواعم السن</strong>. حينها يتأثر العظم الداعم للسن مما يؤدي في النهاية لفقدان الأسنان.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>حلولنا في العيادة</h4><ul style='margin-right:20px; margin-bottom:20px;'><li><strong>التنظيف العميق:</strong> إزالة البكتيريا المتراكمة تحت اللثة.</li><li><strong>التجديد:</strong> استخدام تقنيات مثل (PRF) لمساعدة الأنسجة على الشفاء الطبيعي.</li><li><strong>الوقاية:</strong> توجيهات حول الاستخدام الصحيح لخيط الأسنان والفرش بين السنية.</li></ul><p>في حال لاحظت نزيفاً مستمراً أو رائحة فم كريهة، بادر بحجز موعد للفحص فوراً.</p>" },
            { id: "p5", date: "2 أبريل 2026", title: "هل تخاف من طبيب الأسنان؟ حلولنا لزيارة بدون توتر", desc: "كيف نحول قلقك وتوترك إلى زيارة هادئة ومريحة.", content: "<p>الخوف من طبيب الأسنان شعور شائع جدًا. سواء كان ذلك بسبب تجربة سيئة سابقة أو الخوف من الألم، فإن القلق غالبًا ما يدفع الناس لتأجيل العلاج حتى يصبح الأمر طارئًا.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>نهجنا اللطيف والآمن</h4><p>في عيادتنا، راحتك هي أولويتنا المطلقة. نحن نأخذ الوقت الكافي للاستماع إليك وشرح كل خطوة والإجابة على جميع أسئلتك قبل البدء.</p><ul style='margin-right:20px; margin-bottom:20px;'><li><strong>التخدير المتقدم:</strong> نستخدم تقنيات التخدير الحديثة لضمان رعاية خالية من الألم بنسبة 100٪.</li><li><strong>بيئة مهدئة:</strong> جو دافئ وفريق مستعد لمساعدتك على الاسترخاء.</li><li><strong>تحكم كامل:</strong> إذا شعرت بأي انزعاج، ببساطة ارفع يدك وسيتوقف الطبيب فورًا.</li></ul><p>لا تدع الخوف يسيطر على صحة أسنانك. تعال لزيارتنا فقط لمناقشة احتياجاتك بكل ثقة وطمأنينة.</p>" },
            { id: "p6", date: "28 مارس 2026", title: "تقويم الأسنان الشفاف: ابتسامة مثالية بكل سرية", desc: "ثورة التقويم الشفاف للبالغين والمراهقين بدون أسلاك معدنية.", content: "<p>الحصول على أسنان مستقيمة ليس فقط مسألة جمالية، بل هو ضروري أيضًا للمضغ الجيد وتسهيل تنظيف الأسنان بالفرشاة. لكن العديد من البالغين يترددون في ارتداء التقويم المعدني.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>الحل: التقويم الشفاف (ألاينرز)</h4><p>عبارة عن سلسلة من القوالب الشفافة المصنوعة خصيصًا والتي تحرك أسنانك تدريجيًا إلى الموضع المثالي.</p><ul style='margin-right:20px; margin-bottom:20px;'><li><strong>غير مرئي:</strong> لا يمكن ملاحظته تقريبًا، مما يسمح لك بالابتسام والتحدث بشكل طبيعي في العمل وفي المجتمع.</li><li><strong>مريح:</strong> لا يوجد ألم ناتج عن احتكاك الأسلاك المعدنية بالخدين.</li><li><strong>نظافة أفضل:</strong> قابلة للإزالة، يمكنك نزعها لتناول الطعام وتنظيف أسنانك بشكل طبيعي.</li></ul><p>حدد موعدًا لمعرفة ما إذا كان من الممكن علاج حالتك بهذه الطريقة الحديثة والسريعة والمريحة.</p>" },
            { id: "p7", date: "20 مارس 2026", title: "إزالة الجير: لماذا لا يكفي تنظيف الأسنان بالفرشاة؟", desc: "الخطوة الأساسية لحماية لثتك وتجنب رائحة الفم الكريهة.", content: "<p>حتى مع التنظيف الجيد (مرتين في اليوم لمدة دقيقتين)، لا تزال هناك دائمًا مناطق يصعب الوصول إليها حيث تتراكم البلاك. بمرور الوقت، تتصلب هذه الطبقة وتتحول إلى جير.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>لماذا يجب إزالته؟</h4><p>على عكس البلاك، لا يمكن إزالة الجير بالفرشاة. إنه يعمل كـ \"عش بكتيري\" حقيقي يسبب التهاب اللثة (احمرار ونزيف) وغالبًا ما يكون السبب الرئيسي لرائحة الفم الكريهة.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>العناية الاحترافية</h4><p>إزالة الجير هو إجراء سريع وغير مؤلم (يتم باستخدام الموجات فوق الصوتية) يعيد الشعور بالنظافة والنعومة لأسنانك. يوصى بشدة بإجراء ذلك كل 6 إلى 12 شهرًا حسب عاداتك (التدخين، القهوة).</p><p>امنح ابتسامتك نظافة منعشة اليوم!</p>" },
            { id: "p8", date: "15 مارس 2026", title: "طوارئ الأسنان: كيف تتصرف عند الألم أو الصدمة؟", desc: "الخطوات الأولى التي يجب اتخاذها قبل زيارة العيادة.", content: "<p>غالبًا ما يحدث ألم الأسنان دون سابق إنذار. معرفة كيفية التصرف يمكن أن ينقذ السن أو يخفف الألم بشكل كبير.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>ألم الأسنان الشديد (التهاب العصب)</h4><p>ألم شديد ونابض يزداد سوءًا عند الاستلقاء. تناول مسكنًا (مثل الباراسيتامول)، وتجنب الأطعمة الباردة/الساخنة، واتصل بنا فوراً لتهدئة العصب الملتهب.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>سقوط السن (بسبب صدمة)</h4><p>إذا فقدت سنًا نتيجة لصدمة: لا تغسله إطلاقًا (لأن ذلك سيدمر خلايا الجذر الحيوية). ضعه في كوب من الحليب أو في فمك تحت لسانك، وتعال إلى العيادة في غضون ساعة! إعادة الزرع ممكنة في كثير من الأحيان.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>سن مكسور أو سقوط التاج</h4><p>احتفظ بالقطعة المكسورة أو التاج وحدد موعداً. تجنب المضغ على الجانب المصاب. سيعتني بك فريقنا بسرعة لاستعادة سنك بشكل جمالي.</p>" }
        ],
        kbTitle: "دليل المرضى | Guides", kbItems: [ 
            { icon: "🪥", title: "نظافة الفم والأسنان", desc: "نصائح يومية للحفاظ على ابتسامة صحية.", content: "<p>النظافة الجيدة للفم والأسنان هي الأساس للوقاية من التسوس والتهابات اللثة.</p><ul style='margin-right:20px'><li><strong>التفريش:</strong> مرتين يومياً لمدة دقيقتين. يفضل استخدام فرشاة ذات شعيرات ناعمة لتجنب إيذاء لثتك.</li><li><strong>الفراغات بين الأسنان:</strong> الفرشاة لا تصل بين الأسنان. استخدم خيط الأسنان أو الفرش بين السنية مرة واحدة على الأقل يومياً (في المساء).</li><li><strong>طبيعة الأكل:</strong> قلل من تناول الوجبات الخفيفة والمشروبات السكرية أو الحمضية بين الوجبات.</li><li><strong>شرب الماء:</strong> الإكثار من الماء يعزز إنتاج اللعاب الذي يحمي أسنانك بشكل طبيعي.</li></ul><p>يبقى الفحص السنوي وإزالة الجير في العيادة أمراً ضرورياً.</p>" }, 
            { icon: "📅", title: "بعد الخلع", desc: "ما يجب فعله في الأيام الأولى.", content: "<p>بعد خلع السن، يعتبر تكون جلطة دموية في المكان أمراً بالغ الأهمية للشفاء.</p><ul style='margin-right:20px'><li><strong>أول 24 ساعة:</strong> لا تقم بالمضمضة. تناول أطعمة فاترة أو باردة (تجنب الساخنة) واختر نظاماً غذائياً طرياً.</li><li><strong>النزيف:</strong> النزيف الخفيف أمر طبيعي. إذا استمر، عض على قطعة شاش معقمة لمدة 30 دقيقة.</li><li><strong>ممنوع منعاً باتاً:</strong> التدخين (التبغ يبطئ الشفاء ويزيد من خطر العدوى)، الشرب باستخدام المصاصة، والبصق بقوة.</li><li><strong>الألم:</strong> تناول الأدوية التي وصفها الدكتور رتيمي مع الالتزام بالجرعات.</li></ul>" }, 
            { icon: "🦷", title: "العناية بالزرعات", desc: "كيفية الحفاظ على زرعاتك على المدى الطويل.", content: "<p>الزرعة لا يمكن أن تُصاب بالتسوس، ولكن العظم واللثة المحيطة بها يمكن أن تلتهب إذا لم تكن النظافة مثالية.</p><ul style='margin-right:20px'><li><strong>تنظيف دقيق:</strong> نظف التاج الموجود على الزرعة تماماً كالسن الطبيعي.</li><li><strong>خيط الأسنان المائي:</strong> مفيد للغاية في إزالة بقايا الطعام العالقة حول قاعدة الزرعة.</li><li><strong>الفرش بين السنية:</strong> ضرورية لتنظيف الفراغات بين الزرعة والأسنان المجاورة.</li><li><strong>الفحوصات الدورية:</strong> تسمح لنا الأشعة والفحص السريري السنوي بالتأكد من استقرار العظم حول الزرعة.</li></ul>" },
            { icon: "🗂️", title: "التقويم الشفاف والأجهزة المعدنية", desc: "كيفية العناية بجهاز التقويم الخاص بك.", content: "<p>للحصول على علاج فعال ونظافة جيدة، يجب العناية بجهازك يومياً.</p><ul style='margin-right:20px'><li><strong>التنظيف:</strong> نظف جهازك/القوالب خارج فمك بماء فاتر (ليس ساخناً أبداً) والقليل من الصابون. لا تستخدم معجون الأسنان لأنه كاشط!</li><li><strong>الحفظ:</strong> عند نزعها لتناول الطعام، ضعها دائمًا في علبتها الخاصة، ولا تضعها أبدًا في منديل (خطر الضياع).</li><li><strong>المشروبات:</strong> مع التقويم الشفاف، اشرب الماء فقط. قم بنزع القوالب لشرب القهوة أو الشاي أو المشروبات الغازية لتجنب تلطيخها أو تغيير شكلها.</li></ul>" },
            { icon: "🦷", title: "حساسية الأسنان", desc: "الأسباب والحلول لتجنب الألم أثناء الأكل.", content: "<p>حساسية الأسنان هي ألم حاد وقصير يحدث عند التعرض للبارد، الساخن، الحلو أو الحامض. غالبًا ما يكون سببها تآكل المينا أو انحسار اللثة مما يكشف طبقة العاج.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>الأسباب الشائعة:</h4><ul style='margin-right:20px;'><li><strong>التفريش بقوة</strong> باستخدام فرشاة خشنة.</li><li><strong>صرير الأسنان</strong> (الطحن الليلي).</li><li><strong>الإفراط في تناول</strong> الأطعمة والمشروبات الحمضية (الحمضيات، المشروبات الغازية).</li><li><strong>انحسار اللثة</strong> المرتبط بالتقدم في العمر أو أمراض اللثة.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>الحلول في العيادة:</h4><ul style='margin-right:20px;'><li><strong>ورنيش الفلورايد</strong> أو تطبيق مادة راتنجية واقية.</li><li><strong>واقي ليلي</strong> إذا كان صرير الأسنان هو السبب.</li><li><strong>ترقيع اللثة</strong> في حالات الانحسار الكبير.</li></ul><p>لا تنتظر حتى يصبح الانزعاج غير محتمل. استشارة واحدة تسمح بتحديد السبب الدقيق والعلاج المناسب.</p>" },
            { icon: "👶", title: "أول زيارة لطبيب الأسنان للطفل", desc: "في أي عمر يجب الحضور وكيفية تحضير طفلك.", content: "<p>أول زيارة لطبيب الأسنان هي خطوة مهمة لبناء الثقة والوقاية من تسوس الطفولة المبكر. من المثالي استشارة الطبيب <strong>منذ ظهور الأسنان الأولى</strong>، أو على أقصى تقدير في عمر 2-3 سنوات.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>لماذا مبكرًا جدًا؟</h4><ul style='margin-right:20px;'><li>الكشف المبكر عن تسوس الرضاعة أو تشوهات النمو.</li><li>تعويد الطفل على بيئة العيادة دون توتر.</li><li>تقديم نصائح للآباء حول نظافة الفم المناسبة لكل عمر.</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>كيف نحضر الزيارة؟</h4><ul style='margin-right:20px;'><li>استخدام مفردات إيجابية: \"الطبيب سيعد أسنانك ويتأكد من أنها نظيفة.\"</li><li>تجنب الكلمات المخيفة مثل \"إبرة\"، \"ألم\"، \"خلع\".</li><li>قراءة كتاب أو مشاهدة فيلم كرتون عن زيارة طبيب الأسنان.</li></ul><p>في عيادتنا، نأخذ الوقت الكافي لطمأنة الطفل، بأسلوب مرح ولطيف. غالبًا ما تكون الجلسة الأولى مجرد \"جولة على الكرسي\" وعد الأسنان.</p>" },
            { icon: "😴", title: "الشخير وانقطاع النفس أثناء النوم", desc: "دور طبيب الأسنان في اضطرابات التنفس الليلية.", content: "<p>الشخير ليس مجرد إزعاج اجتماعي. قد يكون علامة على <strong>متلازمة انقطاع النفس الانسدادي أثناء النوم</strong>، وهي حالة خطيرة تزيد من خطر المشاكل القلبية الوعائية والإرهاق المزمن.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>ما هو دور طبيب الأسنان؟</h4><p>يمكن لطبيب الأسنان اكتشاف علامات فموية دالة: تآكل غير طبيعي للأسنان (صرير ليلي)، فك ضيق، لسان كبير الحجم. كما يمكنه تقديم علاج عن طريق <strong>جهاز تقدم الفك السفلي</strong>.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>جهاز تقدم الفك السفلي:</h4><ul style='margin-right:20px;'><li>جهاز فموي مصنوع حسب المقاس يُلبس ليلاً.</li><li>يقدم الفك السفلي قليلاً لتحرير مجرى الهواء في الحلق.</li><li>فعّال في حالات انقطاع النفس الخفيف إلى المتوسط أو عند عدم تحمل جهاز الضغط الإيجابي.</li></ul><p>إذا كنت تشخر بصوت عالٍ أو لاحظ شريكك توقفًا في التنفس أثناء نومك، تحدث عن ذلك في زيارتك القادمة. يمكننا توجيهك إلى طبيب متخصص في النوم إذا لزم الأمر.</p>" },
            { icon: "🧪", title: "كل شيء عن تقنية PRF", desc: "الطب التجديدي في خدمة التئام الأسنان.", content: "<p>تقنية PRF (الفيبرين الغني بالصفائح الدموية) هي تقنية متقدمة تستخدم خلاياك الخاصة <strong>لتسريع وتحسين الالتئام</strong> بعد جراحة الفم.</p><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>كيف تعمل؟</h4><ul style='margin-right:20px;'><li>يتم سحب عينة صغيرة من دمك (مثل تحليل دم عادي).</li><li>يتم طردها مباشرة في جهاز الطرد المركزي لتركيز الصفائح الدموية وعوامل النمو الطبيعية.</li><li>يوضع غشاء الفيبرين الناتج مباشرة في منطقة الجراحة (قلع، زرع، طعم).</li></ul><h4 style='margin-top:20px;margin-bottom:10px;font-size:1.1rem;'>ما هي الفوائد؟</h4><ul style='margin-right:20px;'><li><strong>تقليل كبير</strong> للألم والالتهاب بعد الجراحة.</li><li><strong>التئام أسرع</strong> للأنسجة الرخوة (اللثة) والصلبة (العظم).</li><li><strong>تقليل خطر العدوى</strong> بفضل الخصائص الطبيعية المضادة للبكتيريا.</li><li><strong>تقنية ذاتية 100%</strong>: لا خطر من الرفض أو الحساسية.</li></ul><p>تقنية PRF مفيدة بشكل خاص أثناء زراعة الأسنان، والطعوم العظمية، والقلع المعقد. اسأل الدكتور رتيمي إذا كانت هذه التقنية مناسبة لك.</p>" }
        ],
        faqTitle: "أسئلة شائعة",
        faqCategories: { all: "الكل", implants: "زراعة الأسنان", esthetique: "تجميل", general: "عام", orthodontie: "تقويم الأسنان", pediatrie: "طب أسنان الأطفال" },
        faqs: [
            { q: "كم تستغرق عملية زراعة الأسنان؟", a: "تستغرق الجراحة حوالي 30 إلى 60 دقيقة لكل زرعة. يستغرق الشفاء التام من 3 إلى 6 أشهر.", category: "implants" },
            { q: "هل القشور (الفينير) مؤلمة؟", a: "لا، يتم الإجراء تحت تأثير التخدير الموضعي. قد تظهر حساسية طفيفة لمدة 24-48 ساعة.", category: "esthetique" },
            { q: "ما هي أسعار زراعة الأسنان؟", a: "يعتمد السعر على عدد الزرعات وتعقيد الحالة. نقدم تقديرًا مجانيًا أثناء الاستشارة. وتتوفر تسهيلات في الدفع.", category: "implants" },
            { q: "كم تستغرق الاستشارة؟", a: "تستغرق الاستشارة العادية حوالي 20 إلى 30 دقيقة. بالنسبة للفحص الشامل أو العلاج الأكثر تعقيدًا، توقع أن يستغرق الأمر من 45 دقيقة إلى ساعة.", category: "general" },
            { q: "هل تقدمون تسهيلات في الدفع؟", a: "نعم، نقبل الدفع على أقساط متعددة بدون رسوم للعلاجات الكبيرة. لا تتردد في التحدث إلينا بشأن ذلك خلال الموعد.", category: "general" },
            { q: "كيف يتم إجراء جلسة تبييض الأسنان؟", a: "نستخدم التبييض المنزلي باستخدام قوالب مخصصة أو التبييض في العيادة بواسطة مصباح تفاعلي. تستغرق الجلسة حوالي ساعة ونصف مع نتائج فورية.", category: "esthetique" },
            { q: "ما هي موانع زراعة الأسنان؟", a: "الموانع الرئيسية هي الأمراض غير المتحكم فيها (مرض السكري الحاد، اضطرابات المناعة)، التدخين المفرط، العلاج الإشعاعي الأخير للوجه والفكين، أو سوء نظافة الفم. من الضروري إجراء تقييم مسبق.", category: "implants" },
            { q: "هل تقبلون الضمان الاجتماعي والتأمين والكنام؟", a: "نعم، نقبل التغطية من الصندوق الوطني للضمان الاجتماعي (CNSS) التونسي ومعظم التأمينات. نحن نساعدك في تكوين ملف التغطية الخاص بك.", category: "general" },
            { q: "ما هي مدة علاج تقويم الأسنان؟", a: "متوسط ​​المدة هو 12 إلى 24 شهرًا حسب التعقيد. يمكن النظر في العلاج المبكر للأطفال في سن 7-8 سنوات.", category: "orthodontie" },
            { q: "هل أحتاج إلى الصيام قبل العملية؟", a: "بالنسبة للعمليات البسيطة (الخلع، العناية)، ليس من الضروري الصيام. سيتم إعطاء تعليمات خاصة للعمليات الأكبر تحت التخدير العام أو التهدئة.", category: "general" },
            { q: "هل تقدمون علاجات للأطفال؟", a: "نعم، نرحب بالأطفال منذ سن مبكرة لتقديم رعاية تناسبهم (طب أسنان الأطفال، تقويم الأسنان المبكر). نبذل قصارى جهدنا لنجعل الزيارة ممتعة.", category: "pediatrie" }
        ],
        rdvTitle: "حجز موعد | Prendre Rendez-vous", nameLabel: "الاسم الكامل *", phoneLabel: "الهاتف *", typeLabel: "نوع الاستشارة *", selectDefault: "اختر...", optImplant: "زراعة الأسنان", optEsthetique: "طب تجميلي", optOrtho: "تقويم الأسنان", optUrgence: "طوارئ", optAutre: "أخرى", dateLabel: "التاريخ المطلوب *", messageLabel: "رسالة / الغرض", submitBtn: "إرسال طلب الموعد",
        contactTitle: "اتصل بنا | Contact", addressLabel: "📍 العنوان:", phoneContactLabel: "📞 الهاتف:", emailLabel: "✉️ البريد الإلكتروني:", hoursLabel: "🕒 ساعات العمل:", hoursText: "الاثنين – الجمعة: 08:00 – 18:00، السبت: 08:00 – 13:00", quickMsgTitle: "راسلنا مباشرة", quickMsgLabel: "رسالتك", quickSendBtn: "إرسال",
        modalTitle: "✅ تم تأكيد الموعد", modalSub: "سنتواصل معك خلال 24 ساعة.",
        footerTitle: "عيادة الدكتور رتيمي مصعب لطب الأسنان", footerAddress: "عمارة بوشلاكة الحامة<br>الحامة، قابس 6020<br>تونس", quickLinksTitle: "روابط سريعة", footerServices: "الخدمات", footerGallery: "معرض الصور", footerRdv: "حجز موعد", footerFaq: "أسئلة شائعة", legalTitle: "معلومات قانونية", copyright: "© 2026 عيادة الدكتور رتيمي مصعب - جميع الحقوق محفوظة.", credits: "تصميم وتطوير: موقع احترافي.", footerBottomText: "موقع محسّن للجوال • إمكانية الوصول • الخصوصية",
        searchPlaceholder: "البحث...", datePlaceholder: "اختر تاريخًا", blogReadMore: "اقرأ المقال →", kbReadMore: "اقرأ الدليل →",
        errName: "الرجاء إدخال اسمك الكامل.", errPhone: "رقم هاتف غير صالح (8 أرقام على الأقل).", errType: "الرجاء اختيار نوع الاستشارة.", errDate: "الرجاء اختيار تاريخ مستقبلي.", errGeneric: "حدث خطأ. الرجاء المحاولة مرة أخرى.",
        txtSending: "جاري الإرسال...", alertNoMsg: "الرجاء كتابة رسالة.", alertSent: "تم إرسال الرسالة! (تجريبي)", alertNoRes: "لم يتم العثور على نتيجة لـ: ", badgeOpen: "🟢 مفتوح", badgeClosed: "🔴 مغلق",
        consentLabel: "أوافق على استخدام بياناتي للاتصال بي بخصوص طلب الموعد الخاص بي.",
        waFallback: "إذا لم يفتح الواتساب، <a href='#' id='emailFallback' style='text-decoration:underline; color:var(--primary); font-weight:bold;'>انقر هنا لمراسلتنا عبر البريد الإلكتروني</a>.",
        waTemplate: (name, phone, type, date, msg) => `مرحبًا دكتور رتيمي،\n\nالاسم: ${name}\nالهاتف: ${phone}\nنوع الاستشارة: ${type}\nالتاريخ: ${date}\nرسالة: ${msg}`, successMsg: (name, date) => `شكرًا ${name}، تم إرسال طلب موعدك عبر واتساب ✅`,
        techTitle: "التكنولوجيا والدقة", techBadge: "ابتكار", techCards: [
            { icon: "🖥️", title: "CAD/CAM exocad", shortDesc: "تصميم وتصنيع بمساعدة الكمبيوتر لتركيبات بدقة ميكرومترية في جلسة واحدة.", fullDesc: "بفضل برنامج <strong>exocad</strong> المتطور، نقوم بإنشاء التيجان والقشور الخاصة بك حسب الطلب مباشرة في العيادة. هذه التقنية تلغي أوقات الانتظار وتضمن تكيفًا مثاليًا مع أسنانك الطبيعية. إنها ضمان لنتيجة جمالية دائمة وراحة فورية." },
            { icon: "🔬", title: "الماسح الضوئي داخل الفم", shortDesc: "لا مزيد من العجائن المزعجة. نستخدم ماسحات ثلاثية الأبعاد للحصول على نسخة رقمية مثالية لأسنانك.", fullDesc: "وداعًا لرد الفعل المنعكس للعجائن التقليدية. تلتقط الكاميرا البصرية ثلاثية الأبعاد كل تفاصيل فمك في ثوانٍ. هذه العملية ليست فقط أكثر راحة لك، ولكنها تسمح أيضًا بالتواصل الفوري مع مختبراتنا للحصول على دقة فائقة." },
            { icon: "🩸", title: "تقنية PRF", shortDesc: "استخدام عوامل النمو الخاصة بك لتسريع الشفاء بشكل كبير بعد الجراحة.", fullDesc: "الفيبرين الغني بالصفائح الدموية (PRF) هو محلول طبيعي 100% مشتق من جسمك. من خلال تركيز عوامل النمو الخاصة بك، نسرع تجديد الأنسجة والعظام. هذا يقلل بشكل كبير من آلام ما بعد الجراحة وخطر العدوى بعد زراعة الأسنان." }
        ]
    }
};

// ==================== AUTO-DETECT & INIT LANG ====================
const urlParams = new URLSearchParams(window.location.search);
let urlLang = urlParams.get('lang');
let currentLang = urlLang || localStorage.getItem('lang');

// ==================== FOCUS TRAP (VARIABLES GLOBALES) ====================
let previousActiveElement = null;
let currentModal = null;
if (!currentLang) {
    const browserLang = navigator.language.slice(0, 2);
    currentLang = (browserLang === 'ar' || browserLang === 'en') ? browserLang : 'fr';
}

// Anti-spam : timestamp de chargement de la page
const pageLoadTime = Date.now();

function isSpamSubmission(form) {
    // 1. Vérification du honeypot (doit être vide)
    const honeypot = form.querySelector('input[name="website"], input[name="website2"]');
    if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Soumission bloquée : honeypot rempli');
        return true;
    }
    
    // 2. Vérification du délai minimum (3 secondes)
    const timeSinceLoad = Date.now() - pageLoadTime;
    if (timeSinceLoad < 3000) {
        console.warn('Soumission bloquée : trop rapide');
        return true;
    }
    
    return false;
}
// ==================== SÉCURITÉ RENFORCÉE ====================
const SUBMISSION_LIMIT = 5;
const LIMIT_WINDOW_HOURS = 24;

function checkSubmissionLimit() {
    const now = Date.now();
    const stored = localStorage.getItem('submissionTracker');
    let tracker = stored ? JSON.parse(stored) : { count: 0, firstAttempt: now };
    
    if (now - tracker.firstAttempt > LIMIT_WINDOW_HOURS * 60 * 60 * 1000) {
        tracker = { count: 0, firstAttempt: now };
    }
    
    return tracker.count < SUBMISSION_LIMIT;
}

function incrementSubmissionCounter() {
    const now = Date.now();
    const stored = localStorage.getItem('submissionTracker');
    let tracker = stored ? JSON.parse(stored) : { count: 0, firstAttempt: now };
    
    if (now - tracker.firstAttempt > LIMIT_WINDOW_HOURS * 60 * 60 * 1000) {
        tracker = { count: 0, firstAttempt: now };
    }
    
    tracker.count += 1;
    localStorage.setItem('submissionTracker', JSON.stringify(tracker));
}

function sanitizeInput(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function containsSuspiciousPattern(str) {
    const suspicious = /<script|javascript:|on\w+\s*=|data:text\/html/i;
    return suspicious.test(str);
}

// ==================== SYSTÈME DE NOTIFICATIONS TOAST ====================
function showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');

    let icon = '';
    if (type === 'success') icon = '✅';
    else if (type === 'error') icon = '❌';
    else if (type === 'warning') icon = '⚠️';
    else icon = 'ℹ️';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-content">${message}</span>
        <button class="toast-close" aria-label="Fermer">×</button>
    `;

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    container.appendChild(toast);

    const timeout = setTimeout(() => removeToast(toast), duration);
    toast.dataset.timeout = timeout;
}

function removeToast(toast) {
    if (!toast) return;
    clearTimeout(parseInt(toast.dataset.timeout));
    toast.classList.add('hiding');
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 300);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    if (!t) return;

    // Mise à jour de l'URL sans rechargement
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);

    // Direction et balise HTML
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');

    // Textes basiques
    document.title = t.headerTitle;
    safeSetText('headerTitle', t.headerTitle);
    safeSetText('headerSubtitle', t.headerSubtitle);
    safeSetText('skipLink', t.skipLink);
    safeSet('ctaBookBtn', t.ctaBook);

    // Navigation
    safeSetText('navAbout', t.navAbout);
    safeSetText('navServices', t.navServices);
    safeSetText('navTestimonials', t.navTestimonials);
    safeSetText('navGallery', t.navGallery);
    safeSetText('navVideos', t.navVideos);
    safeSetText('navBlog', t.navBlog);
    safeSetText('navKb', t.navKb);
    safeSetText('navFaq', t.navFaq);
    safeSetText('navRdv', t.navRdv);
    safeSetText('navContact', t.navContact);

    // Sections principales
    safeSet('aboutTitle', t.aboutTitle);
    safeSet('aboutText1', t.aboutText1);
    const about2 = document.getElementById('aboutText2');
    if (about2) {
        about2.innerText = t.aboutText2;
        about2.style.display = lang === 'ar' ? 'block' : 'none';
    }
    safeSetText('aboutText3', t.aboutText3);

    safeSet('servicesTitle', t.servicesTitle);
    safeSet('servicesList', t.services.map(s => `<div class="card"><span class="icon">${s.icon}</span><h3>${s.title}</h3><p>${s.desc}</p></div>`).join(''));

    safeSet('testimonialsTitle', t.testimonialsTitle);
    safeSetText('googleRatingLabel', t.googleRatingLabel);
    safeSetText('reviewsCountLabel', t.reviewsCountLabel);
    safeSetText('satisfactionLabel', t.satisfactionLabel);
    safeSet('gmbLink', t.gmbLink);
    safeSet('testimonialsGrid', t.testimonials.map(tm => {
    const starCount = (tm.stars.match(/⭐/g) || []).length;
    return `<div class="testimonial-card">
        <div class="stars" aria-label="Note de ${starCount} étoiles sur 5">
            <span aria-hidden="true">${tm.stars}</span>
        </div>
        <p class="testimonial-text">"${tm.text}"</p>
        <div class="testimonial-author">${tm.author}</div>
        <div class="testimonial-role">${tm.role}</div>
    </div>`;
    }).join(''));

    // Sliders labels
    document.querySelectorAll('.slider-label.before').forEach(l => l.innerText = t.sliderBefore);
    document.querySelectorAll('.slider-label.after').forEach(l => l.innerText = t.sliderAfter);
    const galleryTitles = document.querySelectorAll('.gallery-title');
    t.galleryTitles.forEach((title, i) => { if (galleryTitles[i]) galleryTitles[i].innerText = title; });

    // Vidéos, Blog, Guides, FAQ
    const vTitle = document.getElementById('videosTitle');
    if (vTitle) vTitle.innerHTML = t.videosTitle;
    safeSet('blogTitle', t.blogTitle);
    safeSet('blogGrid', t.blogPosts.map((p, index) => `
        <div class="blog-card">
            <div class="blog-image">${p.title.includes('implant') || p.title.includes('زرع') ? '🦷' : '✨'}</div>
            <div class="blog-content">
                <div class="blog-date">${p.date}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <button type="button" class="blog-link" onclick="openArticleModal(${index})" style="background:none; border:none; color:var(--primary); font-family:inherit; font-weight:600; font-size:0.95rem; cursor:pointer; padding:0;">${t.blogReadMore}</button>
            </div>
        </div>
    `).join(''));

    safeSet('kbTitle', t.kbTitle);
    safeSet('kbGrid', t.kbItems.map((k, index) => `
        <div class="kb-card">
            <span class="icon">${k.icon}</span>
            <h3>${k.title}</h3>
            <p>${k.desc}</p>
            <button type="button" class="kb-link" onclick="openGuideModal(${index})" style="background:none; border:none; color:var(--primary); font-family:inherit; font-weight:600; font-size:0.95rem; cursor:pointer; padding:0; margin-top:10px;">${t.kbReadMore}</button>
        </div>
    `).join(''));

    // FAQ
    safeSet('faqTitle', t.faqTitle);
    const faqContainer = document.getElementById('faqContainer');
    if (faqContainer) {
        const categoriesHTML = `<div class="faq-filters">
            ${Object.entries(t.faqCategories).map(([k, v]) => `<button class="faq-filter-btn ${k === 'all' ? 'active' : ''}" data-cat="${k}">${v}</button>`).join('')}
        </div>`;
        const faqsHTML = `<div class="faq-list">` + t.faqs.map(faq => `<div class="faq-item reveal" data-cat="${faq.category}"><div class="faq-header"><div class="faq-title">${faq.q}</div><span class="faq-icon">▼</span></div><div class="faq-answer">${faq.a}</div></div>`).join('') + `</div>`;
        faqContainer.innerHTML = categoriesHTML + faqsHTML;

        // Réattacher les écouteurs FAQ
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });

        const filterBtns = document.querySelectorAll('.faq-filter-btn');
        filterBtns.forEach(btn => btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-cat');
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                if (cat === 'all' || item.getAttribute('data-cat') === cat) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('visible'), 50);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('visible');
                }
            });
        }));

        // Afficher toutes les FAQ par défaut
        const defaultFilter = document.querySelector('.faq-filter-btn.active');
        if (defaultFilter) defaultFilter.click();
    }

    // Section Technologie
    const tTech = t.techCards;
    if (tTech) {
        safeSetText('techTitle', t.techTitle);
        safeSetText('techBadge', t.techBadge);
        const techGrid = document.getElementById('techGrid');
        if (techGrid) {
            techGrid.innerHTML = tTech.map(card => `
                <div class="card tech-card">
                    <span class="icon">${card.icon}</span>
                    <h3>${card.title}</h3>
                    <p><strong>${card.shortDesc}</strong></p>
                    <div class="article-text">${card.fullDesc}</div>
                </div>
            `).join('');
            document.querySelectorAll('.tech-card').forEach(card => {
                card.addEventListener('click', function() { this.classList.toggle('expanded'); });
            });
        }
    }

    // Formulaire RDV et Contact
    safeSet('rdvTitle', t.rdvTitle);
    safeSetText('nameLabel', t.nameLabel);
    safeSetText('phoneLabel', t.phoneLabel);
    safeSetText('typeLabel', t.typeLabel);
    safeSetText('selectDefault', t.selectDefault);
    safeSetText('optImplant', t.optImplant);
    safeSetText('optEsthetique', t.optEsthetique);
    safeSetText('optOrtho', t.optOrtho);
    safeSetText('optUrgence', t.optUrgence);
    safeSetText('optAutre', t.optAutre);
    safeSetText('dateLabel', t.dateLabel);
    safeSetText('messageLabel', t.messageLabel);
    safeSetText('consentLabel', t.consentLabel);
    safeSet('waFallbackText', t.waFallback);
    safeSetText('submitBtn', t.submitBtn);

    safeSet('contactTitle', t.contactTitle);
    safeSet('addressLabel', t.addressLabel);
    safeSet('phoneContactLabel', t.phoneContactLabel);
    safeSet('emailLabel', t.emailLabel);
    safeSet('hoursLabel', t.hoursLabel);
    safeSetText('hoursText', t.hoursText);
    safeSetText('quickMsgTitle', t.quickMsgTitle);
    safeSetText('quickMsgLabel', t.quickMsgLabel);
    safeSetText('quickSendBtn', t.quickSendBtn);

    safeSetText('modalTitle', t.modalTitle);
    safeSetText('modalSub', t.modalSub);

    // Footer
    safeSetText('footerTitle', t.footerTitle);
    safeSet('footerAddress', t.footerAddress);
    safeSetText('quickLinksTitle', t.quickLinksTitle);
    safeSetText('footerServices', t.footerServices);
    safeSetText('footerGallery', t.footerGallery);
    safeSetText('footerRdv', t.footerRdv);
    safeSetText('footerFaq', t.footerFaq);
    safeSetText('legalTitle', t.legalTitle);
    safeSetText('copyright', t.copyright);
    safeSetText('credits', t.credits);
    safeSetText('footerBottomText', t.footerBottomText);

   

    // Placeholders
    const searchInput = document.getElementById('siteSearch');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.placeholder = t.datePlaceholder;
        if (dateInput._flatpickr) {
            let fpLocale = flatpickr.l10ns[lang] || flatpickr.l10ns.default;
            dateInput._flatpickr.set('locale', fpLocale);
            dateInput._flatpickr.set('placeholder', t.datePlaceholder);
        }
    }

    // Boutons de langue actifs
    document.getElementById('langFr').classList.toggle('active', lang === 'fr');
    document.getElementById('langEn').classList.toggle('active', lang === 'en');
    document.getElementById('langAr').classList.toggle('active', lang === 'ar');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    updateHours();
}

// Écouteurs de langue
document.getElementById('langFr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
document.getElementById('langAr').addEventListener('click', () => setLanguage('ar'));

// ==================== SLIDERS AVANT/APRES ====================
function initSlider(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const slider = document.getElementById(containerId + '-slider');
    const handle = document.getElementById(containerId + '-handle');
    if (!slider || !handle) return;

    let isDragging = false;
    let currentPercentage = 50;

    function moveSlider(percentage) {
        percentage = Math.max(0, Math.min(100, percentage));
        currentPercentage = percentage;
        slider.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
        handle.style.left = `${percentage}%`;
        handle.setAttribute('aria-valuenow', percentage);
        handle.setAttribute('aria-valuetext', `${Math.round(100 - percentage)}% avant, ${Math.round(percentage)}% après`);
    }

    function onMove(clientX) {
        const rect = container.getBoundingClientRect();
        let percentage = ((clientX - rect.left) / rect.width) * 100;
        moveSlider(percentage);
    }

    function onMouseMove(e) { if (isDragging) onMove(e.clientX); }
    function onTouchMove(e) { if (isDragging && e.touches.length) onMove(e.touches[0].clientX); }

    handle.addEventListener('mousedown', (e) => { isDragging = true; onMove(e.clientX); e.preventDefault(); });
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => { isDragging = false; });

    handle.addEventListener('touchstart', (e) => { isDragging = true; onMove(e.touches[0].clientX); });
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', () => { isDragging = false; });

    handle.setAttribute('tabindex', '0');
    handle.setAttribute('aria-label', handle.getAttribute('aria-label') || 'Comparer les photos avant et après');
    handle.addEventListener('keydown', (e) => {
        let step = document.body.classList.contains('rtl') ? -5 : 5;
        if (e.key === 'ArrowRight') moveSlider(currentPercentage + step);
        if (e.key === 'ArrowLeft') moveSlider(currentPercentage - step);
    });

    window.addEventListener('resize', () => moveSlider(currentPercentage));
    moveSlider(50);

    const decreaseBtn = container.parentElement.querySelector('.slider-decrease');
    const increaseBtn = container.parentElement.querySelector('.slider-increase');
    if (decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener('click', () => moveSlider(currentPercentage - (document.body.classList.contains('rtl') ? -10 : 10)));
        increaseBtn.addEventListener('click', () => moveSlider(currentPercentage + (document.body.classList.contains('rtl') ? -10 : 10)));
    }
}

window.addEventListener('load', () => {
    initSlider('slider1'); initSlider('slider2'); initSlider('slider3'); initSlider('slider4');
    setLanguage(currentLang);
});

// ==================== FORMULAIRE DE RENDEZ-VOUS (SÉCURISÉ) ====================
const form = document.getElementById('appointmentForm');
const submitBtn = document.getElementById('submitBtn');
const phoneInput = document.getElementById('phone');
const phoneValidation = document.getElementById('phone-validation');
const dateInput = document.getElementById('date');
const errorDiv = document.getElementById('formError');
const confirmationModal = document.getElementById('confirmationModal');
const modalMessage = document.getElementById('modalMessage');
const modalClose = confirmationModal.querySelector('.modal-close');

flatpickr(dateInput, { locale: flatpickr.l10ns.default, minDate: 'today', dateFormat: 'd/m/Y', allowInput: true });

function validatePhone() {
    const phone = phoneInput.value.trim();
    const isValid = /^\d{8,}$/.test(phone);
    if (phoneValidation) {
        phoneValidation.textContent = isValid ? '✅' : '❌';
        phoneValidation.style.color = isValid ? '#10b981' : '#dc2626';
    }
    return isValid;
}
phoneInput.addEventListener('input', validatePhone);

function validateDate() {
    let val = dateInput.value.trim();
    if (!val) return false;

    if (dateInput._flatpickr && dateInput._flatpickr.selectedDates.length > 0) {
        const fpDate = new Date(dateInput._flatpickr.selectedDates[0].getTime());
        fpDate.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return fpDate >= today;
    }

    // Fallback parsing
    let year, month, day;
    if (val.includes('/')) {
        const parts = val.split('/');
        if (parts.length === 3) { day = parseInt(parts[0], 10); month = parseInt(parts[1], 10) - 1; year = parseInt(parts[2], 10); }
    } else if (val.includes('-')) {
        const parts = val.split('-');
        if (parts.length === 3) { year = parseInt(parts[0], 10); month = parseInt(parts[1], 10) - 1; day = parseInt(parts[2], 10); }
    }

    if (year !== undefined && month !== undefined && day !== undefined) {
        const selectedDate = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !isNaN(selectedDate.getTime()) && selectedDate >= today;
    }
    return false;
}

dateInput.addEventListener('change', () => {
    const t = translations[currentLang];
    if (!validateDate()) {
        errorDiv.textContent = t.errDate;
        errorDiv.classList.add('show');
    } else {
        errorDiv.classList.remove('show');
    }
});

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // 1. Anti-spam (honeypot + délai)
    if (isSpamSubmission(e.target)) {
        errorDiv.textContent = "Soumission suspecte détectée. Si vous êtes humain, veuillez réessayer dans quelques secondes.";
        errorDiv.classList.add('show');
        return;
    }
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';

    // 2. Limite de soumissions
    if (!checkSubmissionLimit()) {
        showToast("Vous avez dépassé le nombre de demandes autorisées. Veuillez réessayer plus tard.", "error");
        return;
    }

    const t = translations[currentLang];

    // 3. Récupération et nettoyage des champs
    let name = document.getElementById('name').value.trim();
    let phone = phoneInput.value.trim();
    const typeSelect = document.getElementById('type');
    const type = typeSelect.options[typeSelect.selectedIndex].text;
    const date = dateInput.value;
    let msgBody = document.getElementById('message').value.trim() || '-';
    const consent = document.getElementById('consent').checked;

    // 4. Détection de motifs suspects
    if (containsSuspiciousPattern(name) || containsSuspiciousPattern(msgBody)) {
        showToast("Caractères non autorisés détectés.", "error");
        return;
    }

    // 5. Nettoyage (sanitization)
    name = sanitizeInput(name);
    phone = sanitizeInput(phone);
    msgBody = sanitizeInput(msgBody);

    // 6. Validations classiques
    if (!name) {
        errorDiv.textContent = t.errName;
        errorDiv.classList.add('show');
        return;
    }
    if (!validatePhone()) {
        errorDiv.textContent = t.errPhone;
        errorDiv.classList.add('show');
        return;
    }
    if (typeSelect.value === "") {
        errorDiv.textContent = t.errType;
        errorDiv.classList.add('show');
        return;
    }
    if (!dateInput.value.trim()) {
        errorDiv.textContent = "Veuillez entrer une date.";
        errorDiv.classList.add('show');
        return;
    }
    if (!validateDate()) {
        errorDiv.textContent = t.errDate;
        errorDiv.classList.add('show');
        return;
    }
    if (!consent) return;

    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span> ' + t.txtSending;

    const waWindow = window.open('', '_blank', 'noopener,noreferrer');

    try {
        // 7. Envoi via EmailJS avec données nettoyées
        await emailjs.send('Dental website', 'template_z7asu16', {
            name: name,
            phone: phone,
            type: type,
            date: date,
            message: msgBody
        }, 'SE67PfF6urnha7Oom');

        // 8. Incrémentation du compteur après succès
        incrementSubmissionCounter();

        await new Promise(resolve => setTimeout(resolve, 800));

        const emailMsg = t.waTemplate(name, phone, type, date, msgBody);
        if (waWindow) {
            waWindow.location.href = `https://wa.me/21623221454?text=${encodeURIComponent(emailMsg)}`;
        } else {
            console.warn("Pop-up bloqué, WhatsApp ne s'est pas ouvert.");
        }

        const mailtoLink = `mailto:contact@rtimidental.tn?subject=Demande de RDV - ${encodeURIComponent(name)}&body=${encodeURIComponent(emailMsg)}`;
        const emailFallbackTag = document.getElementById('emailFallback');
        if (emailFallbackTag) emailFallbackTag.href = mailtoLink;

        modalMessage.innerHTML = t.successMsg(name, date);
        confirmationModal.classList.add('active');
        confirmationModal.setAttribute('aria-hidden', 'false');
        trapFocus(confirmationModal);

        form.reset();
        if (phoneValidation) phoneValidation.textContent = '';
        dateInput._flatpickr.clear();

        setTimeout(() => {
            confirmationModal.classList.remove('active');
            confirmationModal.setAttribute('aria-hidden', 'true');
        }, 8000);

    } catch (err) {
        console.error("Erreur lors de la soumission :", err);
        if (waWindow) waWindow.close();
        errorDiv.textContent = t.errGeneric;
        errorDiv.classList.add('show');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
    confirmationModal.setAttribute('aria-hidden', 'true');
    removeTrapFocus();
}

modalClose.addEventListener('click', closeConfirmationModal);
confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) closeConfirmationModal();
});


               // Formulaire de contact rapide (avec sécurité renforcée)
const quickForm = document.getElementById('quickContactForm');
if (quickForm) {
    quickForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. Vérification anti-spam (honeypot + délai)
        if (isSpamSubmission(e.target)) {
            showToast("Soumission suspecte détectée. Veuillez patienter quelques secondes.", "warning");
            return;
        }

        // 2. Vérification de la limite de soumissions
        if (!checkSubmissionLimit()) {
            showToast("Vous avez dépassé le nombre de messages autorisés. Veuillez réessayer plus tard.", "error");
            return;
        }

        const t = translations[currentLang];
        let msg = document.getElementById('quickMessage').value.trim();

        // 3. Vérification champ vide
        if (!msg) {
            showToast(t.alertNoMsg, "warning");
            return;
        }

        // 4. Détection de motifs suspects
        if (containsSuspiciousPattern(msg)) {
            showToast("Caractères non autorisés détectés dans votre message.", "error");
            return;
        }

        // 5. Nettoyage de la chaîne
        msg = sanitizeInput(msg);

        const btn = document.getElementById('quickSendBtn');
        const prevText = btn.innerText;
        btn.innerText = t.txtSending || "Envoi...";
        btn.disabled = true;

        try {
            // 6. Envoi avec les données nettoyées
            await emailjs.send('Dental website', 'template_z7asu16', {
                message: msg
            }, 'SE67PfF6urnha7Oom');

            // 7. Incrémentation du compteur après succès
            incrementSubmissionCounter();

            showToast(t.alertSent.replace('(démo)', '').trim() || "Message envoyé avec succès !", "success");
            quickForm.reset();
        } catch (err) {
            console.error("Erreur envoi contact rapide:", err);
            showToast(t.errGeneric || "Erreur d'envoi", "error");
        } finally {
            btn.innerText = prevText;
            btn.disabled = false;
        }
    });
}

// ==================== RECHERCHE AMÉLIORÉE ====================
function performSearch(e) {
    if (e) e.preventDefault();
    
    const searchInput = document.getElementById('siteSearch');
    const query = searchInput.value.trim();
    const t = translations[currentLang];
    
    // Gestion champ vide
    if (!query) {
        searchInput.focus();
        searchInput.setAttribute('aria-invalid', 'true');
        showToast("Veuillez saisir un terme de recherche.", "warning");
        return;
    }
    
    searchInput.setAttribute('aria-invalid', 'false');
    
    const sections = document.querySelectorAll('section');
    let foundElement = null;
    const lowerQuery = query.toLowerCase();
    
    for (let section of sections) {
        if (section.innerText.toLowerCase().includes(lowerQuery)) {
            foundElement = section;
            break;
        }
    }
    
    if (foundElement) {
        foundElement.scrollIntoView({ behavior: 'smooth' });
        
        // Surbrillance temporaire
        foundElement.style.transition = 'box-shadow 0.3s';
        foundElement.style.boxShadow = '0 0 0 4px var(--primary-light)';
        setTimeout(() => foundElement.style.boxShadow = '', 1500);
        
        // Annonce pour lecteurs d'écran
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'sr-only';
        const sectionTitle = foundElement.querySelector('h2')?.textContent || '';
        liveRegion.textContent = `Résultat trouvé dans la section ${sectionTitle}`;
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 2000);
    } else {
        showToast(t.alertNoRes + query, 'warning');
    }
}

// ==================== LIGHTBOX ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');
let currentGalleryImages = [];
let currentIndex = 0;

function updateGalleryImages() {
    currentGalleryImages = Array.from(document.querySelectorAll('.before-after-container img, .gallery-item img, .blog-card img, .kb-card img'));
}

function attachLightboxToImages() {
    updateGalleryImages();
    currentGalleryImages.forEach((img, idx) => {
        img.removeEventListener('click', handleLightboxClick);
        img.addEventListener('click', handleLightboxClick);
        img.dataset.lightboxIndex = idx;
    });
}

function handleLightboxClick(e) {
    e.stopPropagation();
    const img = e.currentTarget;
    const index = Array.from(currentGalleryImages).indexOf(img);
    if (index !== -1) openLightbox(index);
}

function openLightbox(index) {
    if (!currentGalleryImages.length) updateGalleryImages();
    if (index < 0) index = 0;
    if (index >= currentGalleryImages.length) index = currentGalleryImages.length - 1;
    currentIndex = index;
    lightboxImg.src = currentGalleryImages[currentIndex].src;
    lightboxImg.alt = currentGalleryImages[currentIndex].alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxClose.focus();
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
}

function showPrev() { openLightbox(currentIndex - 1); }
function showNext() { openLightbox(currentIndex + 1); }

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
});

// Initialisation et observation globale
attachLightboxToImages();

const lightboxObserver = new MutationObserver((mutations) => {
    let needsUpdate = false;
    for (let mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            for (let node of mutation.addedNodes) {
                if (node.nodeType === 1) {
                    if (node.matches && (node.matches('img') || node.querySelector('img'))) {
                        needsUpdate = true;
                        break;
                    }
                }
            }
        }
        if (needsUpdate) break;
    }
    if (needsUpdate) attachLightboxToImages();
});

lightboxObserver.observe(document.body, { childList: true, subtree: true });

// ==================== THEME DARK/LIGHT ====================
const themeToggle = document.getElementById('themeToggle');
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', document.body.classList.contains('dark-mode') ? 'true' : 'false');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}
themeToggle.addEventListener('click', toggleTheme);
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'true');
}

// ==================== PROGRESS BAR & HAMBURGER ====================
const progressBar = document.getElementById('readingProgress');
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    const st = window.scrollY, dh = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (st / dh * 100) + '%';
    backToTopBtn.style.display = st > 400 ? 'flex' : 'none';
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('active');
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    hamburger.setAttribute('aria-label', open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== SCROLL REVEAL & COMPTEURS ANIMÉS ====================
document.querySelectorAll('section, .gmb-reviews-container, .card, .testimonial-card, .blog-card, .kb-card').forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 70);
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

function animateCount(el) {
    const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', dec = parseInt(el.dataset.decimals || 0);
    let start = null;
    const run = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1600, 1), v = p * target;
        el.textContent = (dec ? v.toFixed(dec) : Math.floor(v)) + suffix;
        if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
}
const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.gmb-stat-number[data-count]').forEach(el => countObs.observe(el));

// ==================== HORAIRES EN DIRECT ====================
const TUNISIA_TIMEZONE = 'Africa/Tunis';

function getTunisiaTimeParts() {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: TUNISIA_TIMEZONE,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(new Date());

    const weekday = parts.find(part => part.type === 'weekday')?.value;
    const hour = parseInt(parts.find(part => part.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(part => part.type === 'minute')?.value || '0', 10);
    const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    return {
        day: weekdayMap[weekday] ?? 0,
        minutes: (hour * 60) + minute
    };
}

function updateHours() {
    const { day, minutes } = getTunisiaTimeParts();
    const open = (day >= 1 && day <= 5 && minutes >= 480 && minutes < 1080) || (day === 6 && minutes >= 480 && minutes < 780);
    const badge = document.getElementById('hoursStatus');
    if (!badge) return;
    badge.className = 'hours-badge ' + (open ? 'open' : 'closed');
    const tr = translations[currentLang];
    badge.textContent = open ? tr.badgeOpen : tr.badgeClosed;
}
updateHours();
setInterval(updateHours, 60000);

// ==================== CHATBOT STATE HELPER ====================
function setChatbotState(open) {
    const chatbotBox = document.getElementById('chatbot-box');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    if (!chatbotBox || !chatbotToggle) return;
    
    if (open) {
        chatbotBox.classList.add('open');
        chatbotBox.setAttribute('aria-hidden', 'false');
        chatbotToggle.setAttribute('aria-expanded', 'true');
    } else {
        chatbotBox.classList.remove('open');
        chatbotBox.setAttribute('aria-hidden', 'true');
        chatbotToggle.setAttribute('aria-expanded', 'false');
    }
}

// ==================== FOCUS TRAP (FONCTIONS) ====================
function trapFocus(element) {
    if (!element) return;
    currentModal = element;
    previousActiveElement = document.activeElement;

    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ];
    const focusableElements = element.querySelectorAll(focusableSelectors.join(','));
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (firstFocusable) firstFocusable.focus();

    function handleTabKey(e) {
        if (e.key !== 'Tab') return;

        if (!focusableElements.length) {
            e.preventDefault();
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }

    element._handleTabKey = handleTabKey;
    document.addEventListener('keydown', handleTabKey);
}

function removeTrapFocus() {
    if (currentModal && currentModal._handleTabKey) {
        document.removeEventListener('keydown', currentModal._handleTabKey);
        delete currentModal._handleTabKey;
    }
    if (previousActiveElement) {
        previousActiveElement.focus();
        previousActiveElement = null;
    }
    currentModal = null;
}

// ==================== CHATBOT ====================
const chatFlows = {
    fr: {
        title: '🦷 Assistant Dr Rtimi', welcome: '👋 Bonjour ! Comment puis-je vous aider ?',
        options: [ { label: '📅 Prendre RDV', key: 'rdv' }, { label: '🦷 Nos services', key: 'services' }, { label: '🕒 Horaires', key: 'hours' }, { label: '📞 Contact', key: 'contact' } ],
        rdv: { msg: 'Je vous redirige vers notre formulaire de rendez-vous !', fn: () => { setChatbotState(false);document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},     
        services: { msg: 'Nous proposons : Implants, CAD/CAM exocad, Facettes E-max, Orthodontie, Parodontologie (PRF) et Urgences.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 Lun–Ven : 08h00–18h00\n🕒 Samedi : 08h00–13h00\n📅 Dimanche : Fermé', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 Immeuble Bouchlaka, El Hamma', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    },
    en: {
        title: '🦷 Dr Rtimi Assistant', welcome: '👋 Hello! How can I help you?',
        options: [ { label: '📅 Book Appt', key: 'rdv' }, { label: '🦷 Services', key: 'services' }, { label: '🕒 Hours', key: 'hours' }, { label: '📞 Contact', key: 'contact' } ],
        rdv: {msg: 'I am redirecting you to our appointment form!',fn: () => { setChatbotState(false);  document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},
        services: { msg: 'We offer: Implants, CAD/CAM, E-max Veneers, Orthodontics, Periodontics (PRF) and Emergencies.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 Mon–Fri: 08:00–18:00\n🕒 Saturday: 08:00–13:00\n📅 Sunday: Closed', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 Bouchlaka Building, El Hamma', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    },
    ar: {
        title: '🦷 مساعد د. رتيمي', welcome: '👋 مرحبًا، كيف يمكنني مساعدتك؟',
        options: [ { label: '📅 حجز موعد', key: 'rdv' }, { label: '🦷 خدماتنا', key: 'services' }, { label: '🕒 ساعات العمل', key: 'hours' }, { label: '📞 اتصل بنا', key: 'contact' } ],
        rdv: { msg: 'سأوجهك إلى نموذج حجز الموعد!', fn: () => {  setChatbotState(false);  document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},
        services: { msg: 'خدماتنا : زراعة الأسنان، CAD/CAM، طب تجميلي، تقويم الأسنان، علاج اللثة، طوارئ.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 الاثنين–الجمعة : 08:00–18:00\n🕒 السبت : 08:00–13:00\n📅 الأحد : مغلق', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 عمارة بوشلاكة الحامة', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    }
};

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const chatMsgs = document.getElementById('chatbot-messages');
const chatOpts = document.getElementById('chatbot-options');

function addMsg(text, type) {
    const el = document.createElement('div');
    el.className = type;
    el.textContent = text;
    chatMsgs.appendChild(el);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

// ==================== CHATBOT AVEC ACCESSIBILITÉ CLAVIER ====================
function renderChatOptions(flow) {
    chatOpts.innerHTML = '';
    flow.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'chatbot-opt';
        btn.textContent = opt.label;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('role', 'button');
        
        const handleAction = () => {
            addMsg(opt.label, 'user-msg');
            const r = flow[opt.key];
            setTimeout(() => {
                addMsg(r.msg, 'bot-msg');
                if (r.fn) setTimeout(r.fn, 600);
                setTimeout(() => renderChatOptions(flow), 400);
            }, 350);
        };
        
        btn.addEventListener('click', handleAction);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAction();
            }
        });
        
        chatOpts.appendChild(btn);
    });
    
    if (chatOpts.firstChild) {
        setTimeout(() => chatOpts.firstChild.focus(), 100);
    }
}

function trapChatbotFocus(e) {
    if (!chatbotBox.classList.contains('open')) return;
    if (e.key !== 'Tab') return;
    
    const focusable = Array.from(chatOpts.querySelectorAll('.chatbot-opt'));
    if (focusable.length === 0) return;
    
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

document.addEventListener('keydown', trapChatbotFocus);

// Modification du toggle pour le focus
chatbotToggle.addEventListener('click', () => {
    const open = chatbotBox.classList.toggle('open');
    chatbotBox.setAttribute('aria-hidden', open ? 'false' : 'true');
    chatbotToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
        if (!chatMsgs.children.length) {
            initChat();
        } else {
            const firstBtn = chatOpts.querySelector('.chatbot-opt');
            if (firstBtn) firstBtn.focus();
        }
    }
});

function initChat() {
    const flow = chatFlows[currentLang] || chatFlows.fr;
    document.getElementById('chatbot-title').textContent = flow.title;
    chatMsgs.innerHTML = '';
    chatOpts.innerHTML = '';
    setTimeout(() => { addMsg(flow.welcome, 'bot-msg'); renderChatOptions(flow); }, 200);
}


document.getElementById('chatbot-close').addEventListener('click', () => {
    chatbotBox.classList.remove('open');
    chatbotBox.setAttribute('aria-hidden', 'true');
    chatbotToggle.setAttribute('aria-expanded', 'false');
});

['langFr', 'langEn', 'langAr'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        if (chatbotBox.classList.contains('open')) { chatMsgs.innerHTML = ''; initChat(); }
    });
});

// ==================== MODALES ARTICLES / GUIDES ====================
window.openArticleModal = function(index) {
    const t = translations[currentLang];
    const p = t.blogPosts[index];
    if (!p) return;
    document.getElementById('articleModalTitle').innerHTML = p.title;
    document.getElementById('articleModalDate').innerHTML = p.date;
    document.getElementById('articleModalDate').style.display = 'block';
    document.getElementById('articleModalBody').innerHTML = p.content;
    document.getElementById('articleModalTitle').style.textAlign = currentLang === 'ar' ? 'right' : 'left';
   const modal = document.getElementById('articleModal');
   modal.classList.add('active');
   modal.setAttribute('aria-hidden', 'false');
   trapFocus(modal);  // ← Active le piège
};

window.openGuideModal = function(index) {
    const t = translations[currentLang];
    const g = t.kbItems[index];
    if (!g) return;
    document.getElementById('articleModalTitle').innerHTML = g.title + ' ' + g.icon;
    document.getElementById('articleModalDate').style.display = 'none';
    document.getElementById('articleModalBody').innerHTML = g.content;
    document.getElementById('articleModalTitle').style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    const modal = document.getElementById('articleModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    trapFocus(modal);  // ← Active le piège
};

const articleModal = document.getElementById('articleModal');

function closeArticleModal() {
    articleModal.classList.remove('active');
    articleModal.setAttribute('aria-hidden', 'true');
    removeTrapFocus();  // ← Libère le focus
}

articleModal.addEventListener('click', function(e) {
    if (e.target === this) closeArticleModal();
});
document.getElementById('articleModalClose').addEventListener('click', closeArticleModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleModal.classList.contains('active')) {
        closeArticleModal();
    }
});
