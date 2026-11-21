/* EN/FR toggle for Mirna Ashri's site. Usage: add <script src="i18n.js"></script> just before </body>.
   Strings missing from FR stay in English. To translate more, add "English text": "French text" below. */
(function(){
var norm=function(s){return s.replace(/\u2019/g,"'").replace(/\s+/g,' ').trim()};
var FR_RAW={
/* hero + tabs */
"Erasmus Mundus M.Sc. student in Chemoinformatics+":"Étudiante en master Erasmus Mundus en Chémoinformatique+",
"NOVA University Lisbon & University of Strasbourg":"Université NOVA de Lisbonne et Université de Strasbourg",
"Email":"E-mail",
"About":"À propos","Education":"Formation","Research":"Recherche","Laboratory training":"Formation en laboratoire",
"Research interests":"Intérêts de recherche","Projects":"Projets","Work experience":"Expérience professionnelle",
"Volunteering":"Bénévolat","Languages":"Langues","Software":"Logiciels","Conferences":"Conférences",
"Scholarships":"Bourses","Awards":"Distinctions","Trainings & Workshops":"Formations et ateliers",
"Favorite quotes":"Citations préférées",
/* about */
"Multicultural environments are my oxygen, multilingualism is my native language, and continuous learning is my source of nutrition. I am a hyperpolyglot who speaks nine languages, from my native Arabic to English, French and German at an advanced level, and I have been shaped by every place and culture those languages opened up to me.":"Les environnements multiculturels sont mon oxygène, le multilinguisme est ma langue maternelle et l'apprentissage continu est ma nourriture. Je suis hyperpolyglotte et je parle neuf langues, de l'arabe, ma langue maternelle, à l'anglais, au français et à l'allemand à un niveau avancé, et chaque lieu et chaque culture que ces langues m'ont ouverts m'a façonnée.",
"That path took me from studying pharmaceutical sciences in Egypt to a joint master's across Lisbon and Strasbourg, with a thesis planned in Münster.":"Ce parcours m'a menée des sciences pharmaceutiques en Égypte à un master conjoint entre Lisbonne et Strasbourg, avec un mémoire prévu à Münster.",
"My curiosity is broad but connected. I am deeply interested in science, coding, chemistry, neuroscience, bioinformatics and pharmaceutical drug development. What draws me to these fields is the places where they overlap, such as quantum chemistry, laboratory work and a well-written Python script all helping to answer the same question.":"Ma curiosité est vaste mais cohérente. Je m'intéresse profondément à la science, à la programmation, à la chimie, aux neurosciences, à la bioinformatique et au développement de médicaments. Ce qui m'attire dans ces domaines, ce sont leurs points de rencontre : la chimie quantique, le travail en laboratoire et un script Python bien écrit contribuent tous à répondre à la même question.",
"Outside the lab, I have worked on many youth projects, from leading international volunteer teams in European associations to organising events and hosting podcasts. These experiences taught me to collaborate across countries and time zones and to explain science to people who did not expect to find it interesting. I bring the same mix of curiosity, teamwork and openness to everything I do.":"En dehors du laboratoire, j'ai mené de nombreux projets pour la jeunesse, de la direction d'équipes internationales de bénévoles dans des associations européennes à l'organisation d'événements et à l'animation de podcasts. Ces expériences m'ont appris à collaborer entre pays et fuseaux horaires, et à expliquer la science à des personnes qui ne s'attendaient pas à la trouver passionnante. J'apporte le même mélange de curiosité, d'esprit d'équipe et d'ouverture à tout ce que j'entreprends.",
"Academic Summary":"Résumé académique",
"I am an Erasmus Mundus Joint Master's student in Chemoinformatics+ at NOVA University Lisbon and the University of Strasbourg, specialising in organic chemistry. I hold a BSc in Pharmaceutical Sciences from Mansoura University (GPA 3.96/4.00, ranked 7th among 850 students), and my training combines quantum chemistry, DFT calculations and physical organic chemistry with applied machine learning.":"Je suis étudiante en master conjoint Erasmus Mundus en Chémoinformatique+ à l'Université NOVA de Lisbonne et à l'Université de Strasbourg, avec une spécialisation en chimie organique. Je suis titulaire d'une licence en sciences pharmaceutiques de l'Université de Mansoura (moyenne de 3,96/4,00, 7e sur 850 étudiants) et ma formation associe chimie quantique, calculs DFT et chimie organique physique à l'apprentissage automatique appliqué.",
"My research centres on QSAR/QSPR modelling and the question of how molecular representation shapes what a model can learn. At LAQV-REQUIMTE (NOVA FCT) I develop machine-learning models for molecular activity, compare descriptors and fingerprints, analyse chemical space, and use validation and applicability-domain analysis to establish where predictions can be trusted. I complement this with virtual screening, molecular docking and reproducible Python/RDKit workflows. In parallel, I synthesised and characterised pharmaceutical ionic liquids (NMR, ATR-FTIR, DSC), which grounds my computational work in measurable physicochemical behaviour.":"Mes recherches portent sur la modélisation QSAR/QSPR et sur la façon dont la représentation moléculaire détermine ce qu'un modèle peut apprendre. Au LAQV-REQUIMTE (NOVA FCT), je développe des modèles d'apprentissage automatique de l'activité moléculaire, je compare descripteurs et empreintes moléculaires, j'analyse l'espace chimique et j'utilise la validation et l'analyse du domaine d'applicabilité pour déterminer dans quels cas les prédictions sont fiables. J'y ajoute le criblage virtuel, l'amarrage moléculaire et des workflows Python/RDKit reproductibles. Parallèlement, j'ai synthétisé et caractérisé des liquides ioniques pharmaceutiques (RMN, ATR-FTIR, DSC), ce qui ancre mon travail computationnel dans des comportements physico-chimiques mesurables.",
"I have applied these skills in independent projects, including a solubility-prediction study on roughly 9,980 compounds, presented as a poster at the 2026 Strasbourg Summer School on Chemoinformatics, and in Kaggle competitions on photostability and mass-spectra-based structure prediction. I also work as a teaching and research assistant in analytical chemistry at Mansoura University and have led international volunteer teams in European associations. My master's thesis on computational fragment screening is planned at the University of Münster, and I aim to pursue a PhD in data-efficient machine learning and DFT for the design of sustainable catalytic materials.":"J'ai mis ces compétences en pratique dans des projets indépendants, dont une étude de prédiction de la solubilité sur environ 9 980 composés, présentée sous forme de poster à l'École d'été de chémoinformatique de Strasbourg 2026, ainsi que dans des compétitions Kaggle sur la photostabilité et la prédiction de structures à partir de spectres de masse. Je suis également assistante d'enseignement et de recherche en chimie analytique à l'Université de Mansoura et j'ai dirigé des équipes internationales de bénévoles dans des associations européennes. Mon mémoire de master sur le criblage computationnel de fragments est prévu à l'Université de Münster, et je souhaite poursuivre par un doctorat en apprentissage automatique économe en données et DFT pour la conception de matériaux catalytiques durables.",
"At a Glance":"En un coup d'œil",
"BSc GPA":"moyenne de licence","class rank, Pharmaceutical Sciences":"rang de promotion, sciences pharmaceutiques",
"languages, from native Arabic to HSK1 Mandarin":"langues, de l'arabe natif au mandarin HSK1",
"computational projects":"projets computationnels","research internships at LAQV-REQUIMTE":"stages de recherche au LAQV-REQUIMTE",
"compounds in my solubility-prediction project":"composés dans mon projet de prédiction de la solubilité",
"Rhine sampling sites analysed by LC-HRMS/MS":"sites d'échantillonnage du Rhin analysés par LC-HRMS/MS",
"suspect compounds screened in RhineScan":"composés suspects criblés dans RhineScan",
"features with significant downstream trends":"variables avec des tendances significatives vers l'aval",
"molecular features modelled in a Kaggle challenge":"variables moléculaires modélisées dans un défi Kaggle",
"podcast shows":"émissions de podcast","volunteering and leadership roles":"rôles de bénévolat et de leadership",
"raised through fundraising and grant management":"levés grâce à la collecte de fonds et à la gestion de subventions",
"potential stakeholders engaged as partners":"partenaires potentiels mobilisés",
/* education */
"Education & Fellowships":"Formation et bourses",
"Master's in Chemoinformatics":"Master en chémoinformatique",
"Sep 2026 – Present":"sept. 2026 – aujourd'hui",
"Erasmus Mundus Chemoinformatics+ Joint Master's (M2) · Université de Strasbourg · Strasbourg, France":"Master conjoint Erasmus Mundus Chemoinformatics+ (M2) · Université de Strasbourg · Strasbourg, France",
"Erasmus Mundus Joint Master Scholarship.":"Bourse Erasmus Mundus de master conjoint.",
"Relevant coursework":"Enseignements pertinents",
"Advanced Quantum Chemistry":"Chimie quantique avancée","Chemoinformatics":"Chémoinformatique","Molecular Dynamics":"Dynamique moléculaire",
"Data Mining":"Fouille de données","Drug Discovery":"Découverte de médicaments","Structural Biology and modelling":"Biologie structurale et modélisation",
"Structure-Based Computer-Aided Drug Design":"Conception de médicaments assistée par ordinateur basée sur la structure",
"EQF Level 7":"Niveau 7 du CEC","Website ↗":"Site web ↗",
"Master's in Bioorganic Chemistry":"Master en chimie bioorganique",
"Erasmus Mundus Chemoinformatics+ Joint Master's (M1) · NOVA School of Science and Technology (NOVA FCT) · Lisbon, Portugal":"Master conjoint Erasmus Mundus Chemoinformatics+ (M1) · NOVA School of Science and Technology (NOVA FCT) · Lisbonne, Portugal",
"Interdisciplinary training in Chemoinformatics, Computational Chemistry, Molecular Modelling, Quantum Chemistry, Machine Learning and Molecular Design.":"Formation interdisciplinaire en chémoinformatique, chimie computationnelle, modélisation moléculaire, chimie quantique, apprentissage automatique et conception moléculaire.",
"Analytical Bio-organic Chemistry":"Chimie bioorganique analytique","Advanced Programming":"Programmation avancée","Medicinal Chemistry":"Chimie médicinale",
"Physical Organic Chemistry":"Chimie organique physique","Asymmetric Organic Chemistry":"Chimie organique asymétrique","Quantum Chemistry":"Chimie quantique",
"Computational Chemistry":"Chimie computationnelle","Structural Bioorganic Chemistry":"Chimie bioorganique structurale","Applied Organic Synthesis":"Synthèse organique appliquée",
"BSc in Pharmaceutical Sciences":"Licence en sciences pharmaceutiques","Aug 2018 – Jul 2023":"août 2018 – juil. 2023",
"Mansoura University · Mansoura, Egypt":"Université de Mansoura · Mansoura, Égypte",
"Full tuition waiver during the final three years.":"Exonération totale des frais de scolarité pendant les trois dernières années.",
"Training in pharmaceutical chemistry, microbiology, immunology, biochemistry, molecular biology, pharmacology, analytical chemistry, drug-related molecular characterisation and biomedical sciences.":"Formation en chimie pharmaceutique, microbiologie, immunologie, biochimie, biologie moléculaire, pharmacologie, chimie analytique, caractérisation moléculaire des médicaments et sciences biomédicales.",
"Field: Pharmacy":"Domaine : pharmacie","Final grade: 3.96":"Note finale : 3,96","146 credits":"146 crédits","Ranked 7th of 850":"7e sur 850",
"Digital Transformation Course":"Cours de transformation numérique","Oct 2021":"oct. 2021",
"Instituto Tecnológico de Canarias · Remote, Spain":"Instituto Tecnológico de Canarias · À distance, Espagne",
"Scholarship from La Fundación Mujeres por África, with an introduction to Digital Transformation and related fields such as Machine Learning and the Internet of Things.":"Bourse de la Fundación Mujeres por África, avec une introduction à la transformation numérique et à des domaines connexes comme l'apprentissage automatique et l'Internet des objets.",
"Field: Information and Communication Technologies":"Domaine : technologies de l'information et de la communication","Final grade: Excellent":"Note finale : excellent",
/* research */
"Research Experience":"Expérience de recherche",
"Research Intern, Computer-Aided Drug Design (CADD)":"Stagiaire de recherche, conception de médicaments assistée par ordinateur (CADD)",
"May 2026 – Present":"mai 2026 – aujourd'hui",
"Develop QSAR and machine-learning models to predict molecular activity within a computer-aided molecular design project.":"Développement de modèles QSAR et d'apprentissage automatique pour prédire l'activité moléculaire dans un projet de conception moléculaire assistée par ordinateur.",
"Compare molecular descriptors, fingerprints and representations, and analyse chemical space to understand how representation shapes what a model can learn.":"Comparaison de descripteurs, d'empreintes et de représentations moléculaires, et analyse de l'espace chimique pour comprendre comment la représentation détermine ce qu'un modèle peut apprendre.",
"Assess model reliability through validation and applicability-domain analysis, identifying where predictions can and cannot be trusted.":"Évaluation de la fiabilité des modèles par la validation et l'analyse du domaine d'applicabilité, afin d'identifier les cas où les prédictions sont fiables ou non.",
"Run virtual screening and molecular docking to study molecular interactions and prioritise candidate compounds.":"Criblage virtuel et amarrage moléculaire pour étudier les interactions moléculaires et prioriser les composés candidats.",
"Build reproducible Python/RDKit workflows for data preparation, modelling, validation and analysis.":"Construction de workflows Python/RDKit reproductibles pour la préparation des données, la modélisation, la validation et l'analyse.",
"Research Intern, Pharmaceutical Ionic Liquids":"Stagiaire de recherche, liquides ioniques pharmaceutiques","Jun 2026 – Jul 2026":"juin 2026 – juil. 2026",
"Synthesised and characterised pharmaceutical ionic liquids based on ammonium/morpholinium cations and carboxylate/amino-acid anions.":"Synthèse et caractérisation de liquides ioniques pharmaceutiques à base de cations ammonium/morpholinium et d'anions carboxylate/acides aminés.",
"Applied NMR, ATR-FTIR and DSC to characterise molecular structure and physicochemical properties.":"Utilisation de la RMN, de l'ATR-FTIR et de la DSC pour caractériser la structure moléculaire et les propriétés physico-chimiques.",
"Investigated molecular systems designed to modify the solubility and transport behaviour of poorly water-soluble compounds.":"Étude de systèmes moléculaires conçus pour modifier la solubilité et le comportement de transport de composés peu solubles dans l'eau.",
"Connected experimental characterisation with molecular structure and physicochemical behaviour.":"Mise en relation de la caractérisation expérimentale avec la structure moléculaire et le comportement physico-chimique.",
"Master's Thesis: Computational Fragment Screening":"Mémoire de master : criblage computationnel de fragments","Planned":"Prévu",
"Jan 2027 – Jun 2027":"janv. 2027 – juin 2027","University of Münster, Germany":"Université de Münster, Allemagne",
"Computational and analytical investigation of a fragment library developed for affinity-mass-spectrometry applications.":"Étude computationnelle et analytique d'une bibliothèque de fragments développée pour des applications de spectrométrie de masse d'affinité.",
"Planned work includes screening molecular fragments and analysing their interactions with target systems.":"Le travail prévu comprend le criblage de fragments moléculaires et l'analyse de leurs interactions avec des systèmes cibles.",
"The direction combines analytical chemistry, molecular structure analysis, computational screening and mechanistic interpretation.":"Cette orientation combine chimie analytique, analyse de structures moléculaires, criblage computationnel et interprétation mécanistique.",
"Photos ↗":"Photos ↗","Certificate ↗":"Certificat ↗","Poster ↗":"Poster ↗",
/* lab */
"Laboratory Training":"Formation en laboratoire",
"Practical training from my Master's in Bioorganic Chemistry at NOVA FCT, covering organic synthesis, chromatography and mass spectrometry.":"Formation pratique de mon master en chimie bioorganique à NOVA FCT, couvrant la synthèse organique, la chromatographie et la spectrométrie de masse.",
"Applied Organic Synthesis Laboratory":"Laboratoire de synthèse organique appliquée","Mar – Apr 2026":"mars – avr. 2026",
"Asymmetric Organic Chemistry I Laboratory":"Laboratoire de chimie organique asymétrique I","Bioorganic Analytic Laboratory":"Laboratoire d'analyse bioorganique",
"Biomolecular Mass Spectrometry Laboratory":"Laboratoire de spectrométrie de masse biomoléculaire",
"Master's in Bioorganic Chemistry · NOVA School of Science and Technology (NOVA FCT)":"Master en chimie bioorganique · NOVA School of Science and Technology (NOVA FCT)",
"Multi-step synthesis":"Synthèse multi-étapes","Chiral resolution":"Résolution chirale","Polarimetry":"Polarimétrie","Organocatalysis":"Organocatalyse",
"Stereoselective reduction":"Réduction stéréosélective","Protecting groups":"Groupes protecteurs","Column chromatography":"Chromatographie sur colonne",
"Recrystallisation":"Recristallisation","Proteomics":"Protéomique","Tryptic digestion":"Digestion trypsique","Column evaluation":"Évaluation de colonne",
/* interests */
"Research Interests":"Intérêts de recherche",
"Computational drug discovery & CADD":"Découverte de médicaments computationnelle et CADD","Docking, virtual screening, structure-based design":"Amarrage, criblage virtuel, conception basée sur la structure",
"Applying computer-aided drug design to identify and optimise bioactive compounds, including candidates for neurological diseases.":"Application de la conception de médicaments assistée par ordinateur pour identifier et optimiser des composés bioactifs, y compris des candidats pour les maladies neurologiques.",
"Environmental cheminformatics":"Chémoinformatique environnementale","Contaminants, fate, toxicity prediction":"Contaminants, devenir, prédiction de toxicité",
"Applying predictive modelling to characterise the occurrence, fate and toxicity of environmental contaminants and their transformation products.":"Application de la modélisation prédictive pour caractériser la présence, le devenir et la toxicité des contaminants environnementaux et de leurs produits de transformation.",
"Analytical chemistry & mass spectrometry":"Chimie analytique et spectrométrie de masse","Non-targeted analysis, compound identification":"Analyse non ciblée, identification de composés",
"Combining analytical measurements with computational tools to detect, annotate and identify compounds in complex samples.":"Association de mesures analytiques et d'outils computationnels pour détecter, annoter et identifier des composés dans des échantillons complexes.",
"Metabolomics & multi-omics":"Métabolomique et multi-omique","Metabolomics, proteomics, systems-level data":"Métabolomique, protéomique, données à l'échelle des systèmes",
"Integrating omics data with statistical and machine learning methods to uncover molecular signatures and biological mechanisms.":"Intégration de données omiques avec des méthodes statistiques et d'apprentissage automatique pour révéler des signatures moléculaires et des mécanismes biologiques.",
"AI & machine learning for molecular design":"IA et apprentissage automatique pour la conception moléculaire","QSAR/QSPR, representations, interpretability":"QSAR/QSPR, représentations, interprétabilité",
"Developing interpretable and physics-informed predictive models that combine chemical knowledge with experimental data.":"Développement de modèles prédictifs interprétables et informés par la physique, qui combinent connaissances chimiques et données expérimentales.",
"Medicinal chemistry & neuropharmacology":"Chimie médicinale et neuropharmacologie","Structure–activity relationships, optimisation":"Relations structure–activité, optimisation",
"Relating molecular properties to biological activity to guide the rational design of therapeutics for neurological disease.":"Mise en relation des propriétés moléculaires et de l'activité biologique pour guider la conception rationnelle de traitements des maladies neurologiques.",
"Cheminformatics & molecular modelling":"Chémoinformatique et modélisation moléculaire","Descriptors, fingerprints, computational methods":"Descripteurs, empreintes moléculaires, méthodes computationnelles",
"Integrating chemical descriptors, molecular fingerprints and computational methods to investigate molecular behaviour.":"Intégration de descripteurs chimiques, d'empreintes moléculaires et de méthodes computationnelles pour étudier le comportement moléculaire.",
"Quantum chemistry & computational catalysis":"Chimie quantique et catalyse computationnelle","Reactivity, binding, activity and selectivity":"Réactivité, liaison, activité et sélectivité",
"Using electronic-structure calculations and molecular simulation to understand the atomic-scale origins of reactivity, binding and catalytic performance.":"Utilisation de calculs de structure électronique et de simulations moléculaires pour comprendre les origines à l'échelle atomique de la réactivité, de la liaison et des performances catalytiques.",
"Machine learning for materials & catalysis":"Apprentissage automatique pour les matériaux et la catalyse","Interatomic potentials, transfer learning, CO₂ hydrogenation":"Potentiels interatomiques, apprentissage par transfert, hydrogénation du CO₂",
"Applying data-efficient machine learning and transfer learning to oxide–metal interfaces, reducing DFT data requirements while preserving physical accuracy.":"Application de l'apprentissage automatique économe en données et de l'apprentissage par transfert aux interfaces oxyde–métal, afin de réduire les besoins en données DFT tout en préservant la précision physique.",
/* projects */
"Click a project to see the details.":"Cliquez sur un projet pour voir les détails.",
"Resources:":"Ressources :","GitHub repository":"Dépôt GitHub","Methodological limitations":"Limites méthodologiques","In progress":"En cours",
"Prioritised Non-Target Screening as an Early-Warning Proxy (RhineScan)":"Criblage non ciblé priorisé comme indicateur d'alerte précoce (RhineScan)",
"MolCurator: an AI Agent for Curating Molecular Benchmark Sets":"MolCurator : un agent d'IA pour constituer des jeux de référence moléculaires",
"Built at Open Scientific Intelligence (OSI) Hackathon · 20–22 Oct 2026":"Réalisé lors du hackathon Open Scientific Intelligence (OSI) · 20–22 oct. 2026",
"LinkedIn post ↗":"Publication LinkedIn ↗","Watch the demo on LinkedIn ↗":"Voir la démo sur LinkedIn ↗",
"Molecular Data Machine Learning: Kaggle competition (MMLI / UIUC)":"Apprentissage automatique sur données moléculaires : compétition Kaggle (MMLI / UIUC)",
"Aqueous Solubility Prediction Using Hybrid Molecular Representations":"Prédiction de la solubilité aqueuse à l'aide de représentations moléculaires hybrides",
"Enveda CASMI 2026: Molecule ID from Mass Spectra (Kaggle)":"Enveda CASMI 2026 : identification de molécules à partir de spectres de masse (Kaggle)",
"Built machine-learning models for aqueous solubility using approximately 9,980 compounds.":"Construction de modèles d'apprentissage automatique de la solubilité aqueuse sur environ 9 980 composés.",
"Combined Morgan fingerprints with physicochemical descriptors to study the effect of molecular representation on prediction.":"Combinaison d'empreintes de Morgan et de descripteurs physico-chimiques pour étudier l'effet de la représentation moléculaire sur la prédiction.",
"Trained and evaluated Random Forest and XGBoost models and analysed structure–property relationships.":"Entraînement et évaluation de modèles Random Forest et XGBoost, et analyse des relations structure–propriété.",
"Developed a Streamlit app for molecular property prediction from SMILES input.":"Développement d'une application Streamlit pour prédire des propriétés moléculaires à partir de SMILES.",
"Presented as a poster at the 2026 Strasbourg Summer School on Chemoinformatics.":"Présenté sous forme de poster à l'École d'été de chémoinformatique de Strasbourg 2026.",
"Machine-learning models for predicting molecular structures from tandem mass spectra.":"Modèles d'apprentissage automatique pour prédire des structures moléculaires à partir de spectres de masse en tandem.",
/* publications */
"Poster presentation":"Présentation de poster","Poster presentation:":"Présentation de poster :",
"2026 Strasbourg Summer School on Chemoinformatics":"École d'été de chémoinformatique de Strasbourg 2026",
"Aqueous solubility prediction using hybrid molecular representations.":"Prédiction de la solubilité aqueuse à l'aide de représentations moléculaires hybrides.",
"Manuscripts in preparation":"Manuscrits en préparation","I am currently working on two manuscripts.":"Je travaille actuellement sur deux manuscrits.",
"Titles and journals will be added once the manuscripts are submitted.":"Les titres et les revues seront ajoutés une fois les manuscrits soumis.",
/* work */
"Professional and Teaching Experience":"Expérience professionnelle et d'enseignement",
"Teaching and Research Assistant of Analytical Chemistry":"Assistante d'enseignement et de recherche en chimie analytique","Jan 2025 – Present":"janv. 2025 – aujourd'hui",
"Faculty of Pharmaceutical Sciences, Mansoura University, Egypt":"Faculté des sciences pharmaceutiques, Université de Mansoura, Égypte",
"Contributed to research in pharmaceutical and analytical chemistry, supporting experimental design, data analysis and interpretation of findings.":"Contribution à la recherche en chimie pharmaceutique et analytique : appui à la conception expérimentale, à l'analyse des données et à l'interprétation des résultats.",
"Applied analytical methods for the characterisation of pharmaceutical and biologically relevant compounds.":"Application de méthodes analytiques à la caractérisation de composés pharmaceutiques et d'intérêt biologique.",
"Supported undergraduate teaching and mentoring, fostering interdisciplinary scientific thinking and problem-solving.":"Appui à l'enseignement et au tutorat en licence, en favorisant la pensée scientifique interdisciplinaire et la résolution de problèmes.",
"French Instructor":"Professeure de français","Coucou de France · Remote, Egypt":"Coucou de France · À distance, Égypte",
"Delivered engaging and interactive online French lessons to learners of various proficiency levels, fostering language acquisition through dynamic teaching methods.":"Cours de français en ligne interactifs et motivants pour des apprenants de différents niveaux, favorisant l'acquisition de la langue par des méthodes dynamiques.",
"Developed and adapted instructional materials to suit diverse learning needs, ensuring an immersive and effective language-learning experience.":"Conception et adaptation de supports pédagogiques selon les besoins variés des apprenants, pour une expérience d'apprentissage immersive et efficace.",
"IGCSE ESL Teacher":"Enseignante d'ESL (IGCSE)","Mansoura College British International School · Remote, Egypt":"Mansoura College British International School · À distance, Égypte",
"Designed and delivered engaging, curriculum-aligned lessons in Environmental Management for IGCSE students, fostering critical thinking and real-world application of concepts.":"Conception et animation de cours conformes au programme en gestion de l'environnement pour des élèves d'IGCSE, favorisant l'esprit critique et l'application concrète des concepts.",
"Provided tailored ESL (English as a Second Language) support, enhancing students' language proficiency and academic success across subjects.":"Soutien personnalisé en ESL (anglais langue seconde), améliorant la maîtrise de la langue et la réussite scolaire des élèves dans toutes les matières.",
"English Instructor":"Professeure d'anglais","Upedia · Remote, Egypt":"Upedia · À distance, Égypte",
"Created a warm, interactive atmosphere in every virtual class, tailoring my approach to individual learning styles so that each student felt valued and supported.":"Création d'une atmosphère chaleureuse et interactive dans chaque classe virtuelle, avec une approche adaptée au style d'apprentissage de chacun pour que chaque élève se sente valorisé et soutenu.",
"Taught more than 50 students, aged 12 to 65, from a wide range of national and cultural backgrounds.":"Enseignement à plus de 50 élèves, âgés de 12 à 65 ans, de nombreuses origines nationales et culturelles.",
/* volunteering */
"Volunteering, Youth Associations & Leadership":"Bénévolat, associations de jeunesse et leadership",
"Vice-President":"Vice-présidente","Bringing Europeans Together Association (BETA Europe) · Remote, Belgium":"Bringing Europeans Together Association (BETA Europe) · À distance, Belgique",
"Oversaw outreach initiatives for marginalised youth, particularly girls and individuals with disabilities, ensuring equitable participation in civic programmes.":"Supervision d'initiatives de sensibilisation auprès de jeunes marginalisés, en particulier les filles et les personnes en situation de handicap, afin de garantir une participation équitable aux programmes citoyens.",
"Coordinated with operational teams to align activities with strategic objectives, building inclusive, high-performing teams across countries.":"Coordination avec les équipes opérationnelles pour aligner les activités sur les objectifs stratégiques, en constituant des équipes inclusives et performantes dans plusieurs pays.",
"Diversity Coordinator, Ex-Secretary-General and Ex-Partnerships Manager":"Coordinatrice de la diversité, ex-secrétaire générale et ex-responsable des partenariats",
"Remote, France":"À distance, France","Model European Union Strasbourg (MEUS), BETA France · Remote, France":"Model European Union Strasbourg (MEUS), BETA France · À distance, France",
"Secured €80,000+ for initiatives through strategic fundraising and grant management.":"Obtention de plus de 80 000 € pour des initiatives grâce à une stratégie de collecte de fonds et à la gestion de subventions.",
"Built strong partnerships with over 200 potential stakeholders, enhancing collaboration.":"Construction de partenariats solides avec plus de 200 parties prenantes potentielles, renforçant la collaboration.",
"Conducted in-depth research to identify key decision-makers and maintained updated contact databases.":"Recherches approfondies pour identifier les décideurs clés et tenue à jour des bases de contacts.",
"Content Team Member":"Membre de l'équipe contenu","MEU Côte d'Azur · Remote, France":"MEU Côte d'Azur · À distance, France",
"Created and simplified educational content in French on greenhouse gas emissions, equipping youth participants with the knowledge needed for informed climate debates.":"Création et simplification de contenus pédagogiques en français sur les émissions de gaz à effet de serre, pour donner aux jeunes participants les connaissances nécessaires à des débats éclairés sur le climat.",
"Head of Languages and Translation Office & Cultural-Exchange Office Member":"Responsable du bureau des langues et de la traduction et membre du bureau des échanges culturels",
"Mediterranean Youth Foundation · Remote, Egypt":"Mediterranean Youth Foundation · À distance, Égypte",
"Supported youth-led climate resilience campaigns and intercultural programmes across the Mediterranean.":"Soutien à des campagnes de résilience climatique menées par des jeunes et à des programmes interculturels dans toute la Méditerranée.",
"Designed educational materials, training youth on climate justice, equality and psychosocial support.":"Conception de supports pédagogiques et formation de jeunes à la justice climatique, à l'égalité et au soutien psychosocial.",
"Development Officer and Program Coordinator":"Chargée de développement et coordinatrice de programme","Intercultural Discussions, Mediterranean Youth Foundation · Remote, Egypt":"Intercultural Discussions, Mediterranean Youth Foundation · À distance, Égypte",
"Facilitated planning, implementation and evaluation of virtual climate resilience dialogues, bringing together participants from diverse socioeconomic backgrounds.":"Animation de la planification, de la mise en œuvre et de l'évaluation de dialogues virtuels sur la résilience climatique, réunissant des participants de milieux socio-économiques variés.",
"Research Fellow":"Chercheuse associée","Oath for Sustainability Network, Climate and Health Research Lab · Remote, Africa":"Oath for Sustainability Network, Climate and Health Research Lab · À distance, Afrique",
"Conducted research on the psychosocial effects of climate change on vulnerable populations.":"Recherches sur les effets psychosociaux du changement climatique sur les populations vulnérables.",
"Collaborated across diverse teams to co-develop community-informed solutions and policy recommendations.":"Collaboration au sein d'équipes diverses pour coélaborer des solutions et des recommandations politiques informées par les communautés.",
/* podcasts */
"Host":"Animatrice","Guest":"Invitée",
"Podcasting with Members of the European Parliament. Insights from MEP Tiemo Wölken.":"Podcast avec des députés du Parlement européen. Éclairages du député européen Tiemo Wölken.",
"Podcasting with Members of the European Parliament. Insights from MEP Niklas Nienaß.":"Podcast avec des députés du Parlement européen. Éclairages du député européen Niklas Nienaß.",
"My Journey with the French Language, Episode II.":"Mon parcours avec la langue française, épisode II.",
"Tolkien Course, Episode XIX. Featured on Apple Podcasts.":"Cours sur Tolkien, épisode XIX. Disponible sur Apple Podcasts.",
"Listen on Spotify":"Écouter sur Spotify","Listen on Facebook":"Écouter sur Facebook","Listen on Apple Podcasts":"Écouter sur Apple Podcasts",
/* languages */
"Arabic":"Arabe","English":"Anglais","French":"Français","German":"Allemand","Spanish":"Espagnol","Italian":"Italien","Turkish":"Turc","Portuguese":"Portugais","Chinese (Mandarin)":"Chinois (mandarin)",
"Native":"Langue maternelle","Advanced - C1":"Avancé - C1","Intermediate - B2":"Intermédiaire - B2","Basic - A2":"Élémentaire - A2","Basic - HSK1":"Élémentaire - HSK1",
/* software */
"Software Proficiency":"Maîtrise des logiciels","Computational chemistry software":"Logiciels de chimie computationnelle",
"Computational chemistry and chemoinformatics methods":"Méthodes de chimie computationnelle et de chémoinformatique",
"Molecular modelling":"Modélisation moléculaire","Docking":"Amarrage moléculaire","Molecular dynamics":"Dynamique moléculaire","Descriptors & fingerprints":"Descripteurs et empreintes",
"Molecular similarity":"Similarité moléculaire","Chemical-space analysis":"Analyse de l'espace chimique","Applicability domain":"Domaine d'applicabilité","Virtual screening":"Criblage virtuel",
"Programming & data science":"Programmation et science des données","Experimental chemistry":"Chimie expérimentale","Multi-step organic synthesis":"Synthèse organique multi-étapes",
"Reflux & work-up":"Reflux et traitement","Crystallisation":"Cristallisation","Ionic liquid synthesis & purification":"Synthèse et purification de liquides ioniques","Pharmaceutical analysis":"Analyse pharmaceutique",
"Coursework knowledge: HRMS, HPLC, X-ray crystallography.":"Connaissances acquises en cours : HRMS, HPLC, cristallographie aux rayons X.","Tools & development":"Outils et développement",
/* conferences */
"Conferences & Seminars":"Conférences et séminaires","1 – 21 Oct 2026":"1 – 21 oct. 2026","Online":"En ligne",
"E-Poster Session of the Symposium, featuring 69 posters selected by the international scientific committee.":"Session d'e-posters du symposium, avec 69 posters sélectionnés par le comité scientifique international.",
"The Strasbourg Summer School in Chemoinformatics (CS3)":"École d'été de chémoinformatique de Strasbourg (CS3)","Strasbourg, France":"Strasbourg, France",
"Seventh Hybrid Scientific Conference of Pharmaceutical Analytical Chemistry":"Septième conférence scientifique hybride de chimie analytique pharmaceutique","Mansoura University, Egypt":"Université de Mansoura, Égypte",
"Aqueous Solubility Prediction Using Hybrid Molecular Representations.":"Prédiction de la solubilité aqueuse à l'aide de représentations moléculaires hybrides.",
/* scholarships, awards, trainings */
"Erasmus Mundus Joint Master in Chemoinformatics+":"Master conjoint Erasmus Mundus en Chémoinformatique+","Sep 2025 – Present":"sept. 2025 – aujourd'hui",
"UI/UX and Graphic Design":"Design UI/UX et graphisme","Front-End Software Development":"Développement logiciel front-end",
"UN Women, Egyptian Council, and the National Council for Women":"ONU Femmes, Conseil égyptien et Conseil national des femmes",
"Awards & Recognitions":"Distinctions et reconnaissances","Ideal Student Competition, All Egyptian Universities":"Concours de l'étudiant idéal, toutes les universités égyptiennes",
"Third place":"Troisième place","Al-Abakera Families Program Show, Season 2":"Émission Al-Abakera Families, saison 2","First place":"Première place","Poster presenter":"Présentatrice de poster",
"Strasbourg Summer School on Chemoinformatics":"École d'été de chémoinformatique de Strasbourg",
"Trainings & Workshops ":"Formations et ateliers","Sustainable NGOs Academy":"Académie des ONG durables",
"Erasmus+ KA2 Project (Slovenia, Romania, Spain) · 30h online course":"Projet Erasmus+ KA2 (Slovénie, Roumanie, Espagne) · cours en ligne de 30 h",
"Covered modules on green competencies, youth engagement in environmental action and sustainable NGO practices, developed within the framework of EU sustainability strategies to empower youth workers and leaders for climate resilience and behavioural change.":"Modules sur les compétences vertes, l'engagement des jeunes dans l'action environnementale et les pratiques durables des ONG, conçus dans le cadre des stratégies de durabilité de l'UE pour donner aux animateurs et responsables jeunesse les moyens d'agir pour la résilience climatique et le changement de comportement.",
"Virtual Exchange Program":"Programme d'échange virtuel","Mar 2025":"mars 2025",
"Participated in a globally recognised intercultural dialogue programme fostering cross-cultural collaboration, empathy and conflict-resolution skills among youth from diverse socio-political contexts.":"Participation à un programme de dialogue interculturel reconnu mondialement, favorisant la collaboration interculturelle, l'empathie et la résolution de conflits chez des jeunes de contextes sociopolitiques variés.",
"Women Empowerment in Entrepreneurship":"Autonomisation des femmes dans l'entrepreneuriat","20 – 26 Mar 2024":"20 – 26 mars 2024","American Corner & Aspire Training":"American Corner et Aspire Training",
"Practical training focused on empowering women through entrepreneurial thinking, leadership development and social impact strategy.":"Formation pratique visant à autonomiser les femmes par la pensée entrepreneuriale, le développement du leadership et la stratégie d'impact social.",
/* quotes, blog, contact */
"Favorite Quotes":"Citations préférées","Commonly attributed; wording varies.":"Attribution courante ; la formulation varie.",
"Adapted from Meditations.":"Adapté des Pensées.","Adapted from":"Adapté des","Meditations":"Pensées",
"Handbüchlein der Moral, §5 (German rendering).":"Handbüchlein der Moral, §5 (traduction allemande).","Handbüchlein der Moral":"Handbüchlein der Moral",
"Conquer yourself.":"Triomphe de toi-même.","A traditional Latin maxim, not a uniquely Stoic quotation.":"Maxime latine traditionnelle, pas une citation exclusivement stoïcienne.",
"Bear and forbear.":"Supporte et abstiens-toi.","A maxim associated with Epictetus and Stoic practice.":"Maxime associée à Épictète et à la pratique stoïcienne.",
"Personal Blog":"Blog personnel","Notes on chemoinformatics, DFT, machine learning and life across Lisbon and Strasbourg are on the way.":"Des notes sur la chémoinformatique, la DFT, l'apprentissage automatique et la vie entre Lisbonne et Strasbourg arrivent bientôt.",
"Elsewhere":"Ailleurs","Download CV (PDF)":"Télécharger le CV (PDF)","Phone":"Téléphone"
};
var FR={};for(var k in FR_RAW)FR[norm(k)]=FR_RAW[k];
var M={Jan:'janv.',Feb:'févr.',Mar:'mars',Apr:'avr.',May:'mai',Jun:'juin',Jul:'juil.',Aug:'août',Sep:'sept.',Oct:'oct.',Nov:'nov.',Dec:'déc.'};
function dates(s){return s.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g,function(m){return M[m]}).replace(/\bPresent\b/,"aujourd'hui").replace(/\bHost\b/,'Animatrice').replace(/\bGuest\b/,'Invitée')}
var orig=new WeakMap(),root=document.documentElement,btn=document.createElement('button');
var enTitle=document.title,frTitle="Mirna Ashri - Chémoinformatique / Chimie computationnelle / Chimie organique médicinale";
function tr(node,fr){
  if(!orig.has(node))orig.set(node,node.nodeValue);
  var o=orig.get(node);
  if(!fr){node.nodeValue=o;return}
  var t=norm(o);if(!t)return;
  var par=node.parentNode,out=FR[t];
  if(out===undefined&&par&&par.closest&&par.closest('.date,.pod .role'))out=dates(t);
  if(out===undefined)return;
  node.nodeValue=o.replace(o.trim(),out);
}
function apply(fr){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,list=[];
  while(n=w.nextNode()){var p=n.parentNode.nodeName;if(p!=='SCRIPT'&&p!=='STYLE')list.push(n)}
  list.forEach(function(x){tr(x,fr)});
  root.lang=fr?'fr':'en';document.title=fr?frTitle:enTitle;
  btn.textContent=fr?'EN':'FR';btn.setAttribute('aria-label',fr?'Switch to English':'Passer en français');
  var th=document.getElementById('theme');if(th)th.setAttribute('aria-label',fr?'Mode sombre':'Dark mode');
  try{localStorage.setItem('lang',fr?'fr':'en')}catch(e){}
}
btn.id='lang';btn.style.fontWeight='600';
var ctrl=document.querySelector('.ctrl');ctrl.insertBefore(btn,ctrl.firstChild);
btn.addEventListener('click',function(){apply(root.lang!=='fr')});
var saved='en';try{saved=localStorage.getItem('lang')||'en'}catch(e){}
apply(saved==='fr');
})();
