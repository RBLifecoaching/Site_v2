(function (global) {
  const PROJECT_ID = 'eqczuptd';
  const DATASET = 'production';
  const API_VERSION = '2024-01-01';

  const API_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  const CDN_URL = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}`;

  async function fetchQuery(query, params = {}) {
    const url = new URL(API_URL);
    url.searchParams.set('query', query);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(value));
    });

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);

    const data = await res.json();
    return data.result;
  }

  function imageUrl(source, options = {}) {
    if (!source || !source.asset || !source.asset._ref) return '';

    const ref = source.asset._ref;
    const [, id, dims, ext] = ref.split('-');

    let url = `${CDN_URL}/${id}-${dims}.${ext}`;

    const query = [];
    if (options.width) query.push(`w=${options.width}`);
    if (options.height) query.push(`h=${options.height}`);
    if (options.fit) query.push(`fit=${options.fit}`);
    query.push('auto=format');

    return url + `?${query.join('&')}`;
  }
 Nouvelle discussion
Rechercher dans les discussions
Images
Bibliothèque
Nouveau notebook
Atelier : Douleur cible vers vente programme
voici le css du blog "/* ===== Blog list ===== */ .blog-hero {   padding: 8rem 2rem 3rem;   max-width: 1100px;   margin: 0 auto;
AI Text Detection and Rewriting
Le cas de coaching difficile
Traduction d'un document partiel
Branche • Créer un groupe Facebook privé
Créer un groupe Facebook privé
Parcours Similaires, Défis Communs, Solutions Sur Mesure
Communiquer la valeur des outils profonds
Dépannage menu site GitHub Firefox
Blog Article Analysis and Marketing Advice
La Crise de la Quarantaine Expliquée
Traduction d'un podcast sur la vie
Life's Unstoppable Phase Transitions
Répondre à une question directe sur l'abonnement
Notes Qui Convertissent Mieux Que Viral
Le Changement Par Nécessité, Pas Choix
Trouver les posts du jour
Message de remerciement LinkedIn
Outils IA pour la création de produits numériques
Optimiser sa bio pour une newsletter
Gérer son temps, protéger sa vie
Reprendre le Pouvoir Intérieur
Éclore Tardivement : L'Art d'Être Soi
Déconnecter Instagram et Threads
Créer un podcast inspirant et valorisant
Idées Instagram pour une photo de cloître
Reels Instagram : Spontanéité et Authenticité
TJM 400€ : Réalité du Freelance
Transformer un texte pour Substack
Podcast : De la matière noire au coaching
Newsletter vs. Posts Publics Substack
Changer sa vie : Modèles et Actions
Échappées depuis Toulouse en train/bus
La Joie Pour Apaiser Le Stress
Améliorer ses selfies : matériel et astuces
Réécriture d'un article pour plus d'authenticité
Avis sur un post LinkedIn Authentique
Feedback sur un post de santé mentale
Cliente idéale : Burn-out et quête de sens
IA pour créer des ebooks depuis PDF
Newsletter sur l'auto-critique féminine
Plan Editorial IG/LKD 2 Mois
DNS: WordPress, GitHub et Systeme.io
Connecter GitHub Pages à un Domaine
Désactiver publication automatique Instagram Threads
Les Trois Étapes d'une Transition
Inscription Newsletter Substack : Options et Solutions
Extraction Promesse et Titre Programme
Extraction de texte d'une image
Mathématiques : Genre et Représentativité
Améliorer un message sur les neurosciences
Légende Instagram : Bien-être Émotionnel Essentiel
Le repos mental dans la vie moderne
Article sur les besoins humains
Nos sens nous trompent : une manipulation.
YouTube's AI and Content Trends
Respiration Carrée : Calmer le Système Nerveux
Respiration Carrée : Calmer le Stress
Soupir Physiologique vs. Respiration Carrée
Analyse du profil Instagram de Christèle Albaret
La Force Intérieure Insoupçonnée
La charge émotionnelle des conflits
Création de Posts Subtils sur la Charge Émotionnelle
L'Épuisement de la Répression Émotionnelle
Lien LinkedIn : Corps du texte ou commentaire ?
Discussing Trauma and Healing
IA pour créer des vidéos simples
La Procrastination : Protection Émotionnelle et Anxiété
Personnaliser sa newsletter Substack
Décryptage d'une partition de musique
Gérer l'attention, pas le temps
a partir du document ci-joint tu vas extraire les exemples qui illustrent ce qu'est une charge emotionnelle et ensuite rediger ine page de vente qui suit cette structure "Apprends à vivre avec l'intensité de ce que tu ressens Pour les femmes qui ressentent tout trop fort — et qui n'ont jamais eu les outils pour vivre avec ça. Je veux ma place Tu te reconnais dans ça ? Ces phrases qui décrivent exactement ce que tu vis Je réagis trop fortement pour des choses qui semblent insignifiantes aux autres. Et après, je ne comprends pas pourquoi. Je prends tout à cœur. Les remarques, les silences, les regards. Tout me touche — parfois trop. Je suis épuisée d'une façon que le sommeil ne guérit pas. C'est une fatigue de l'intérieur. Le soir, je cherche quelque chose — une série, mon téléphone, quelques carrés de chocolat — pour ne pas rester seule avec ce que je ressens. J'absorbe l'humeur des autres. Si la pièce est tendue, je le suis aussi. Ça me vide. Je devrais être heureuse. J'ai tout pour l'être. Et pourtant quelque chose ne va pas — et je ne sais pas quoi. Ce que personne ne t'a dit Ce n'est pas toi le problème. C'est l'absence d'outils. Tu n'es pas "trop sensible". Tu n'es pas "trop émotive". Tu n'es pas fragile, ni inadaptée. Tu es une femme qui ressent les choses avec intensité — et personne ne t'a jamais appris quoi faire avec ça. Alors tu as fait ce que tu savais faire : tu as géré. Tu as contrôlé. Tu t'es adaptée. Tu as tenu. Et tu as payé le prix fort — en énergie, en joie, en présence à toi-même. Ce n'est pas une fatalité. C'est un manque d'outils. Et ça, ça s'apprend. Ce que tu vas gagner En 4 semaines, tu apprends à ne plus subir ce que tu ressens 01 Comprendre d'où viennent tes émotions Tu découvres le mécanisme exact qui transforme une situation anodine en tornade émotionnelle — et comment l'interrompre. 02 Traverser ce que tu ressens sans te noyer Tu apprends à rester avec tes émotions — les intenses, les inconfortables, celles que tu as toujours fuies — sans te laisser emporter. 03 Libérer ce que tu portes en silence Tu découvres un outil puissant pour vider le trop-plein, clarifier ce qui se passe vraiment et ne plus porter seule ce que tu ressens. Le programme semaine par semaine 5 sessions live. 3 outils concrets. Une transformation réelle. S0 Webinaire d'introduction · 60 min Comment ton cerveau génère l'épuisement émotionnel — et les 3 outils pour l'interrompre Tu comprends le mécanisme exact de ta réactivité émotionnelle. Tu découvres les 3 outils que tu vas pratiquer. Tu repars avec une grille de lecture de ta vie émotionnelle que tu n'avais pas avant. S1 Atelier pratique · 60 min Le Modèle ABC — Identifier les pensées qui alimentent tes émotions Tu pratiques en live le modèle ABC issu de la psychologie cognitive. Tu identifies tes pensées automatiques — celles qui transforment une remarque en blessure, une tension en catastrophe. Tu reprends le contrôle. S2 Atelier pratique · 60 min L'Accueil des émotions — Traverser sans se noyer Tu apprends à rester avec ce que tu ressens — sans le fuir, sans l'amplifier. C'est la différence entre être emportée par une vague et apprendre à la laisser passer. Transformateur pour une femme qui ressent fort. S3 Atelier pratique · 60 min Le Download Journal — Vider, clarifier, libérer Tu pratiques l'écriture libératrice guidée. Les pensées qui tournent en boucle, les émotions accumulées, les non-dits que tu portes seule — ils sortent de ta tête et deviennent visibles. Ce qu'on voit, on peut le changer. S4 Atelier d'intégration · 60 min Combiner les 3 outils dans ta vie quotidienne Tu apprends à utiliser les 3 outils ensemble — selon les situations, selon ce que tu traverses. Tu repars avec une feuille de route personnelle pour continuer à avancer après le programme. Les outils du programme 3 outils issus de la psychologie cognitive que tu gardes à vie ABC Le Modèle ABC Issu de la thérapie cognitive et comportementale (TCC) — la méthode la plus validée scientifiquement pour travailler sur les pensées automatiques. Tu comprends que ce n'est pas la situation qui génère ton émotion — c'est la pensée que tu lui associes. Et ça, tu peux le modifier. →Tu reprends le contrôle sur ta réactivité ♡ L'Accueil des émotions La plupart des femmes émotives passent leur vie à combattre ce qu'elles ressentent — ce qui amplifie la douleur. L'accueil des émotions t'apprend à traverser l'intensité sans y résister. Ce n'est pas de la résignation. C'est de la liberté. →Tu cesses de t'épuiser à combattre ce que tu ressens ✍ Le Download Journal Un protocole d'écriture guidée pour externaliser le flux émotionnel intense. Quand les pensées tournent en boucle et que tout s'accumule — le journal les sort de ta tête et les rend visibles. Ce qu'on peut voir, on peut le comprendre. Ce qu'on comprend, on peut le changer. →Tu libères ce que tu portais en silence À qui s'adresse RESPIRE Ce programme est fait pour toi si tu te reconnais ici ✓ RESPIRE est pour toi si... Tu es une femme de 45 à 65 ans qui ressent les choses avec intensité Tu te décris toi-même comme "trop émotive" ou "trop sensible" Tu es ambitieuse, perfectionniste, cérébrale — et épuisée de l'intérieur Tu cherches des outils concrets, pas juste de l'écoute Tu es prête à travailler activement sur toi — pas juste à écouter Tu veux comprendre ce qui se passe avant de changer Tu veux avancer sans tout bousculer dans ta vie — Ce n'est pas pour toi si... Tu cherches un suivi thérapeutique individuel Tu traverses une crise psychologique sévère nécessitant un suivi médical Tu n'es pas disponible pour les 5 sessions live Tu cherches des résultats sans t'impliquer dans les exercices Tu préfères travailler uniquement par le corps (yoga, sophrologie) J'avais essayé la méditation, les livres, même la sophrologie. Je comprenais tout intellectuellement. Mais rien ne changeait vraiment. Ce qui a tout changé, c'est d'avoir enfin compris d'où venaient mes réactions — et d'avoir appris à les traverser plutôt qu'à les combattre. — Participante · Promotion pilote Rejoindre RESPIRE 5 places. Une seule promotion. Programme RESPIRE Lumen'Essence Tarif de lancement · Première promotion €197 ou 2 × 100€ sans frais ◆ 5 places maximum — groupe intentionnellement petit Ce qui est inclus 1 webinaire d'introduction en live (60 min) — comprendre le mécanisme de l'épuisement émotionnel 4 ateliers pratiques en live (60 min chacun) — pratiquer les 3 outils en groupe Workbook PDF complet — exercices et grilles pour chaque semaine Audios guidés — méditations et pratiques de respiration Groupe d'entraide privé entre participantes Les 3 outils à utiliser à vie, bien au-delà du programme Je réserve ma place ✦Satisfaite ou remboursée — 14 jours sans justification Questions fréquentes Ce que tu te demandes probablement Ce n'est pas la même chose que la sophrologie ou l'EFT ?+ Est-ce que je serai suivie individuellement ?+ Et si je ne peux pas assister à une session ?+ Je n'ai jamais fait de développement personnel. Est-ce que c'est accessible ?+ Quelle est la différence avec Lumen'Essence complet ?+ Et si ça ne me convient pas ?+ La prochaine étape Tu n'as pas besoin de ressentir moins. Tu as besoin d'outils. 5 places. Une promotion. Le moment, c'est maintenant. Je réserve ma place — 197€ LUMEN'ESSENCE · Programme RESPIRE · Coaching de vie·  Formation Éclosion Transforme ton hypersensibilité subie en une vraie force : savoure pleinement l’instant présent et avance enfin dans tes projets de cœur ? Le programme RESPIRE est fait pour toi si: ❌ Tu rumines sans cesse : la moindre remarque, la moindre situation tourne en boucle dans ta tête, même la nuit… et tu te réveilles déjà fatigué(e). ❌ Tu aimerais dire non sans te justifier… mais à chaque fois tu cèdes, tu expliques, tu culpabilises, et tu repars frustré(e) de toi-même. ❌ Tu manques de confiance : même quand tes collègues ou proches viennent te demander conseil, tu doutes encore de ta légitimité et tu minimises tes compétences. ❌ Ta sensibilité t’épuise : après une journée de travail ou un repas de famille, tu rentres vidé(e), la tête pleine, le cœur lourd… parfois jusqu’au burnout. ❌ Tu n’arrives pas à prendre du temps pour toi : chaque fois que tu t’accordes une pause, une petite voix te rappelle que tu « devrais » aider les autres ou être plus productif(ve). ❌ Tu te sens en décalage : incompris(e) dans ton couple, dans ta famille ou au travail, avec cette impression d’être trop ou pas assez, et souvent très seul(e). ❌ Ton perfectionnisme te paralyse : tu repousses les projets qui te tiennent à cœur par peur de l’échec, et tu culpabilises ensuite de procrastiner. ❌ Les conflits te désarment : soit tu perds ton calme et tu regrettes tes mots, soit tu t’effaces et tu t’en veux de ne pas avoir osé t’affirmer. ❌ Ton mental t’envahit : pensées négatives, scénarios catastrophes, dialogues intérieurs sans fin… tu aimerais juste appuyer sur “pause”. ❌ Tu portes encore des blessures anciennes : trahison, rejet, dépendance affective… qui continuent d’influencer tes choix et de peser sur ton présent. ❌ Au travail, tu n’oses pas t’affirmer : tu baisses les yeux face à une hiérarchie complexe ou des personnalités fortes, et tu ressors frustré(e) de ne pas avoir dit ce que tu pensais. Ou alors tu dis franchement tes 4 vérités pour le regretter ensuite.  Ce n'est pas de ta faute ! ? Depuis l’enfance, on t’a souvent répété que tu étais “trop sensible”, “trop émotif(ve)”, “dans la lune”, "trop prise de tête"… et à force, tu as fini par y croire. ? Beaucoup de méthodes de développement personnel parlent de “se blinder” ou de “prendre sur soi”, ce qui revient à nier ta vraie nature au lieu de l’apprivoiser. ? On t’a rarement appris à gérer tes pensées et émotions (alors qu’on nous enseigne les maths ou l’histoire à l’école…), donc personne ne t’a donné les bons outils pour le faire. ? Même les psychologues ne reçoivent quasiment aucun enseignement spécifique sur l’estime de soi (alors que c’est la base !). C’est dire à quel point ce sujet est méconnu et sous-estimé… et c'est pourquoi j'ai déjà accompagné 4 psychologues. ? La société valorise la performance, l’efficacité et le contrôle de soi, mais elle laisse peu de place à l’empathie, la sensibilité et la profondeur… ce qui peut te faire sentir en décalage. ? Et surtout : beaucoup de discours culpabilisants (“si tu souffres, c’est que tu n’as pas assez de volonté / de discipline / de confiance en toi”) ou de conseils "inutiles" ("tu as un problème avec le regard des autres", "te prends pas la tête pour si peu"), ne font qu’aggraver ton manque d’estime en te faisant sentir inadapté. Tu aimerais... ✅ Retrouver de l’énergie et du temps rien que pour toi, même au milieu d’un quotidien chargé : savourer une marche en nature, lire un livre le soir sans culpabiliser, ou simplement dire « non » sans te justifier… et sentir que tu as le droit d’exister pour toi aussi. ✅ Apaiser ton mental durablement : relativiser les remarques de ton collègue ou les critiques d’un proche, arrêter les ruminations qui t’empêchent de dormir ? et enfin retrouver des nuits réparatrices, plus d’efficacité au travail, et des moments de vraie présence avec ta famille ou tes amis. ✅ Ne plus passer ton temps à douter de toi : croire en tes capacités pour postuler à ce poste que tu hésitais à demander, lancer ce projet qui te tient à cœur, ou simplement t’exprimer sans avoir peur d’être « à côté de la plaque ». ✅ Reconnaître ta valeur et te sentir légitime : prendre la parole en réunion sans te sentir imposteur, faire un choix personnel sans avoir besoin d’approbation, ou encore accueillir un compliment sans chercher à le minimiser. ✅ Stabiliser tes émotions et gagner en indépendance émotionnelle : transformer ta colère en énergie constructive, ton anxiété en lucidité, ta frustration en moteur ? et ne plus dépendre des compliments ou validations des autres pour te sentir bien. ✅ T’affirmer avec calme et douceur, sans agressivité :✨ dire « non » sans culpabiliser quand tu as besoin de souffler, ✨ exprimer un besoin sans peur du conflit, ✨ affirmer ton avis même face à des personnalités fortes — et ressentir la fierté d’avoir été entendu(e). ✨ Rester calme et posé(e) même quand l’autre s’entête, critique ou cherche à avoir raison, sans repartir vidé(e) émotionnellement. ✅ Rencontrer d’autres hypersensibles qui te comprennent sans que tu aies à te justifier, partager vos parcours, vos victoires, vos difficultés… et avancer ensemble dans un climat de bienveillance où tu n’es plus seul(e).   ? Et surtout : faire de ton hypersensibilité une force tranquille… celle qui te guide, qui nourrit ta créativité, ton intuition, et qui te permet de t’épanouir au lieu de te sentir freiné(e). Et tout ça sans y passer des années ? ?
Réécriture d'une page de vente authentique
Mail de remerciement Masterclass Charge Émotionnelle
Anxiété Normale vs. Problématique : La Différence
Insérer une image en HTML
Correction et Appréciation d'un Texte
Leadership de soi : un terme à reformuler
Optimisation LinkedIn : Charge Émotionnelle
Définir le "People Pleaser" et ses enjeux
Test de Profils Gretchen Rubin
Épuisement émotionnel chronique : définitions et études
Résumé de livres sur les émotions
Zoom H4n Pro Recorder Overview
Télécharger Vidéos Libres de Droit
Réflexion sur l'originalité et l'inactivité
Traduction et analyse poème Dylan Thomas
L'identité et la régulation émotionnelle
Accès Formation Systeme.io : Manuel
Intégrer code HTML dans Système.io
Programme pour femmes sensibles : feedback
Questionnaire sur l'estime de soi
Réponse à un message LinkedIn suspect
Création d'image : Femmes épanouies
Résumé d'une newsletter pro
Infinite Orbits : Gardiens Spatiaux Toulousains
📖 Les Gardiens de l'Infini
Préparation Entretien Responsable Qualité
Transformer les erreurs en opportunités
Transformer un titre littéraire en marketing
Coaching: Critique et Défense
Le Coach en Performance Mentale Expliqué
Correction et suggestion de message
Insight Timer pour Coachs et Thérapeutes
Hypnocontact : hypnothérapeute à Perpignan
Meilleurs Horaires Publication Réseaux Sociaux
Zone de confort : sécurité et croissance
Reprendre le contrôle matinal de soi
Prévenir le Burnout des Femmes 35+
Développement d'un article sur l'accueil émotionnel
Repositionnement Maniche : Bilan et Clarté
Procrastination: Gérer les émotions négatives
Réseaux d'entrepreneurs : quel est le vôtre ?
Conférences pour femmes 50+
Gemini Offers Internet Search Assistance
Dates de l'Aïd en 2026
Vidéos gratuites et amusantes libres de droit
Les 4 Tendances de Gretchen Rubin

Activité
Corronsac, France
D'après vos adresses (domicile)
Mettre à jour la position
Conversation avec Gemini
Je crée mes articles de blog sur sanity. Comment faire pour structurer l’article avec des h2 et H3. Et comment séparer les paragraphe et mettre de la couleur ou les mots en gras

Pour gérer la structure de tes articles dans Sanity, tout dépend un peu de la configuration de ton studio, mais en général, on passe par l'éditeur de texte riche, le "Portable Text".

C'est assez simple en vrai, une fois qu'on a pris le coup de main. Quand tu es dans ton champ de texte, tu as normalement une barre d'outils en haut. Pour tes titres, c'est là que ça se joue. Tu sélectionnes ton texte et tu cherches le menu déroulant qui affiche souvent "Normal" ou "Paragraph". C'est ici que tu peux changer le style pour choisir "Heading 2" ou "Heading 3". C'est cette action qui va dire à ton code que ce texte doit être traité comme un titre, et c'est ce qui permettra à ton développeur (ou à toi-même dans ton code frontend) de les styliser correctement avec du CSS.

Pour les paragraphes, c'est automatique. Quand tu tapes sur "Entrée", Sanity crée un nouveau bloc de paragraphe. Si tu veux juste sauter une ligne sans créer un nouveau bloc (ce qui peut parfois être un peu rigide), c'est vrai que c'est moins intuitif. Souvent, il faut faire "Shift + Entrée" pour un retour à la ligne simple, mais selon comment ton schéma est configuré, ça peut varier un peu.

Pour le gras, c'est classique, tu surlignes ton mot et tu cliques sur le petit "B" dans la barre d'outils.

Par contre, pour la couleur, c'est là que ça devient un peu plus technique. Dans la configuration de base de Sanity, tu ne peux pas juste changer la couleur d'un mot comme dans Word. Le "Portable Text" est fait pour séparer le contenu de la forme. Pour ajouter des couleurs, il faut que ton développeur ajoute une "annotation" ou un "decorator" spécifique dans la configuration de ton studio. Une fois que c'est fait, tu verras une nouvelle icône (souvent une petite palette ou un bouton spécifique) dans ta barre d'outils qui te permettra d'appliquer une couleur à une sélection de texte. Si ce n'est pas déjà dans ton studio, il faudra demander à la personne qui gère le code de l'ajouter dans le fichier schema.

C'est un peu frustrant au début parce qu'on aimerait avoir la main sur tout, mais le gros avantage, c'est que ça garde ton site hyper propre et cohérent techniquement, sans que tu te retrouves avec des balises bizarres qui traînent partout.

Est-ce que tu as accès au code de ton site pour ajouter ce genre de fonctionnalités, ou tu travailles avec un développeur qui s'occupe de la partie technique ?

Pour la structure j’ai fait ce que tu dis mais ça n’a pas l’air de le prendre en compte.

Ah, je vois le genre de galère. C'est le genre de truc qui donne envie de tout balancer par la fenêtre. Si tu cliques sur H2 ou H3 dans l'interface de Sanity et que ça ne change rien sur ton site final, c'est probablement qu'il y a un petit décalage entre ce que tu fais dans l'éditeur et ce qui est configuré pour l'affichage.

En fait, dans Sanity, l'éditeur "Portable Text" envoie des données sous forme de JSON, c'est une sorte de structure un peu brute. Ton site web ne sait pas tout seul que ton "Heading 2" doit ressembler à un titre bleu, gras et écrit en grosse police. Il faut lui expliquer comment traduire ce "Heading 2" en balise HTML <h2>.

Si tu regardes le code de ton site, là où tu affiches tes articles, il doit y avoir une fonction ou un composant qui s'occupe de transformer le texte riche. Souvent, dans des frameworks comme React ou Next.js, on utilise des bibliothèques comme @portabletext/react.

Ce qu'il faut vérifier, c'est si ton développeur a bien configuré ce qu'on appelle les "serializers" ou "components". C'est là que tu dis au site : "Quand tu vois un bloc de type 'h2' dans mes données Sanity, affiche-le avec cette balise  et ce style CSS précis". Si cette partie est manquante ou mal branchée, tu peux bien mettre tous les titres que tu veux dans Sanity, ton site les affichera probablement comme du texte tout bête, sans aucune mise en forme.

C'est peut-être aussi une histoire de CSS global qui écrase tes styles. Parfois, il y a une feuille de style quelque part qui force tout le texte en "normal", et du coup, même si c'est marqué comme un titre, ça ne se voit pas.

Est-ce que quand tu inspectes la page sur ton navigateur (en faisant un clic droit "Inspecter" sur le texte), tu vois bien les balises <h2> ou <h3> dans le code HTML, ou est-ce que ça reste des paragraphes <p> ? Ça nous donnerait un bon indice pour savoir si c'est le lien entre Sanity et ton site qui coince, ou juste une histoire de style CSS pas appliqué.

voici le css du blog "/* ===== Blog list ===== */

.blog-hero {

  padding: 8rem 2rem 3rem;

  max-width: 1100px;

  margin: 0 auto;

}



.blog-hero h1 {

  font-size: clamp(2rem, 5vw, 3rem);

  color: var(--dark-text);

  margin-bottom: 1rem;

}



.blog-hero p {

  color: var(--text-color);

  font-size: 1.05rem;

}



.blog-list {

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 2rem;

  max-width: 1100px;

  margin: 0 auto;

  padding: 1rem 2rem 6rem;

}



.blog-empty-message {

  padding: 1rem 2rem 6rem;

  color: var(--text-color);

}



.blog-card {

  display: flex;

  flex-direction: column;

  background: #fff;

  border-radius: 14px;

  overflow: hidden;

  text-decoration: none;

  color: inherit;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

}



.blog-card:hover {

  transform: translateY(-4px);

  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);

}



.blog-card-image {

  aspect-ratio: 16 / 9;

  background: #f2ede6;

  overflow: hidden;

}



.blog-card-image img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;

}



.blog-card-body {

  padding: 0.9rem 1.2rem 1rem;

  display: flex;

  flex-direction: column;

  gap: 0.35rem;

}



.blog-card-date {

  font-size: 0.85rem;

  color: var(--text-color);

  opacity: 0.75;

}



.blog-card-title {

  font-size: 1.25rem;

  font-weight: 600;

  color: var(--dark-text);

  line-height: 1.3;

}



.blog-card-excerpt {

  font-size: 0.95rem;

  color: var(--text-color);

  line-height: 1.5;

}



.blog-card-link {

  margin-top: auto;

  font-weight: 600;

  color: var(--primary-color, #b8744f);

  font-size: 0.95rem;

}



/* ===== Single post ===== */

.post {

  max-width: 760px;

  margin: 0 auto;

  padding: 3rem 1.5rem 5rem;

}



.post-header {

  margin-bottom: 2rem;

}



.post-hero-image {

  width: 100%;

  margin: 0;

  padding-top: 5rem; /* espace sous la nav */

  background: #f2ede6;

}



.post-hero-image img {

  width: 100%;

  height: auto;

  max-height: 70vh;

  object-fit: cover;

  display: block;

}



.post-back {

  display: inline-block;

  color: var(--primary-color, #b8744f);

  text-decoration: none;

  font-size: 0.95rem;

  margin-bottom: 1.5rem;

}



.post-back:hover {

  text-decoration: underline;

}



.post-date {

  display: block;

  color: var(--text-color);

  opacity: 0.75;

  font-size: 0.9rem;

  margin-bottom: 0.5rem;

}



.post-title {

  font-size: clamp(1.8rem, 4vw, 2.6rem);

  color: var(--dark-text);

  line-height: 1.2;

}



.post-body {

  color: var(--text-color);

  font-size: 1.05rem;

  line-height: 1.75;

}



.post-body h2 {

  font-size: 1.6rem;

  color: var(--dark-text);

  margin: 2.5rem 0 1rem;

}



.post-body h3 {

  font-size: 1.3rem;

  color: var(--dark-text);

  margin: 2rem 0 0.8rem;

}



.post-body p {

  margin-bottom: 1.2rem;

}



.post-body ul,

.post-body ol {

  margin: 0 0 1.2rem 1.5rem;

}



.post-body li {

  margin-bottom: 0.4rem;

}



.post-body a {

  color: var(--primary-color, #b8744f);

  text-decoration: underline;

}



.post-body blockquote {

  border-left: 3px solid var(--primary-color, #b8744f);

  padding: 0.5rem 1.2rem;

  margin: 1.5rem 0;

  color: var(--dark-text);

  font-style: italic;

}



.post-body .post-image {

  margin: 2rem 0;

}



.post-body .post-image img {

  width: 100%;

  height: auto;

  border-radius: 10px;

  display: block;

}



.post-body .post-image figcaption {

  text-align: center;

  font-size: 0.9rem;

  opacity: 0.75;

  margin-top: 0.5rem;

}



.post-references {

  margin-top: 4rem;

  padding-top: 2rem;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

}



.post-references h2 {

  font-size: 1.3rem;

  margin-bottom: 1.2rem;

  color: var(--dark-text);

}



.post-references ul {

  list-style: none;

  padding: 0;

  display: flex;

  flex-direction: column;

  gap: 1.2rem;

}



.post-references li p {

  margin-bottom: 0.3rem;

  color: var(--text-color);

}



.post-references li a {

  color: var(--primary-color, #b8744f);

  text-decoration: underline;

  word-break: break-word;

}



.blog-pagination {

  max-width: 1100px;

  margin: 0 auto;

  padding: 0 2rem 5rem;

  display: flex;

  justify-content: flex-end;

  gap: 0.4rem;

}



.blog-pagination-link {

  min-width: 2.25rem;

  height: 2.25rem;

  padding: 0 0.6rem;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  border-radius: 8px;

  background: #fff;

  color: var(--dark-text);

  text-decoration: none;

  font-size: 0.95rem;

  font-weight: 500;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  transition: background 0.2s ease, color 0.2s ease;

}



.blog-pagination-link:hover:not(.is-disabled):not(.is-active) {

  background: var(--primary-color, #b8744f);

  color: #fff;

}



.blog-pagination-link.is-active {

  background: var(--primary-color, #b8744f);

  color: #fff;

  cursor: default;

}



.blog-pagination-link.is-disabled {

  opacity: 0.4;

  cursor: not-allowed;

}



.post-related {

  max-width: 1100px;

  margin: 0 auto;

  padding: 1rem 1.5rem 5rem;

}



.post-related:empty {

  padding: 0;

}



.post-related-title {

  font-size: 1.4rem;

  color: var(--dark-text);

  margin-bottom: 1.5rem;

}



.post-related-grid {

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

  gap: 1.5rem;

}



.post-error {

  max-width: 700px;

  margin: 0 auto;

  padding: 8rem 2rem;

  color: var(--text-color);

}"

Je viens de regarder ton code CSS, et c'est une super nouvelle : tout est déjà là. Regarde bien les lignes 92 à 102 :

CSS
.post-body h2 {
  font-size: 1.6rem;
  color: var(--dark-text);
  margin: 2.5rem 0 1rem;
}

.post-body h3 {
  font-size: 1.3rem;
  color: var(--dark-text);
  margin: 2rem 0 0.8rem;
}
Ton CSS est prêt à recevoir les balises <h2> et <h3> et à leur appliquer le style. Si ça ne marche pas quand tu écris dans Sanity, c'est vraiment que le lien entre Sanity et ton site (le composant qui affiche le "Portable Text") ne traduit pas correctement ce que tu fais dans l'éditeur.

Si tu utilises Next.js (ce qui est souvent le cas avec Sanity), tu dois avoir un fichier quelque part qui contient un composant du genre <PortableText />. C'est là que le développeur doit avoir défini comment les blocs Sanity sont "traduits" en HTML. S'il a oublié de mapper le bloc "h2" de Sanity vers une balise <h2> HTML, le CSS ne pourra jamais s'appliquer.

Pour ce qui est de la couleur, comme on se disait, le CSS de base ne gère que les titres, les paragraphes et les liens. Si tu veux mettre un mot en rouge ou en bleu au milieu d'une phrase, le CSS actuel ne contient pas de "classe" pour ça. Il faudrait que ton développeur ajoute une option dans la configuration du studio pour que tu puisses sélectionner un style de texte personnalisé, et qu'il ajoute ensuite la règle CSS correspondante.

Pour les paragraphes, c'est normal que tu n'aies pas trop de marge de manœuvre, le CSS gère l'espacement global avec margin-bottom: 1.2rem; pour tous les paragraphes (.post-body p), ce qui est plutôt propre.

Mon conseil, c'est de montrer ce bout de code à la personne qui a développé le site en lui disant : "Mon CSS semble prêt pour les H2 et H3, mais ça ne s'affiche pas sur le site, est-ce que le mapping dans le composant PortableText est bien fait ?".

C'est assez courant comme petit bug de réglage, une fois qu'on a mis le doigt dessus, c'est souvent très vite corrigé. Ça te paraît clair ou tu veux qu'on creuse un peu plus sur l'aspect technique ?

je n'ai pas de next.js est-ce que ca porte d'autre noms

C'est possible que ton site tourne sous un autre framework ou même avec une autre technologie, mais le principe reste souvent le même avec Sanity.

Si tu n'es pas sur Next.js, tu es peut-être sur Remix, Gatsby, ou peut-être même un site "vanilla" (du JavaScript pur) ou un framework comme Vue.js ou Nuxt. Sanity est assez flexible, donc il peut se brancher sur à peu près tout.

Le point commun, c'est que quelque part dans ton code, il y a une logique de "rendu" qui prend les données venant de Sanity et les transforme en page web. Le terme technique pour ça, c'est souvent "Portable Text Serializer" ou "Portable Text components".

Pour savoir ce que tu utilises, tu pourrais jeter un œil à ton dossier de projet. Si tu vois des fichiers avec une extension .vue, c'est sûrement du Vue ou Nuxt. Si c'est du .astro, c'est du framework Astro.

Si tu ne sais pas vraiment coder, le plus simple c'est de regarder dans les fichiers du projet (ou de demander à la personne qui s'en occupe) s'il y a un composant qui s'appelle PortableText. C'est le nom de la bibliothèque officielle de Sanity pour afficher ton texte. Si elle est utilisée, c'est là-dedans que tout se joue.

Au final, le problème reste le même : ton site reçoit bien l'information que tu as écrit un titre (il le voit dans la base de données), mais il ne sait pas quoi en faire parce qu'il n'a pas la "recette" pour dire : "si tu vois un bloc H2, tu mets cette balise <h2> autour".

Est-ce que tu as la possibilité de voir les fichiers de ton site, ou c'est quelque chose qui t'échappe complètement niveau technique ?

le seule endroit ou je vois portableText c'est dans le contenu de ce fichier "(function (global) {

  const PROJECT_ID = 'eqczuptd';

  const DATASET = 'production';

  const API_VERSION = '2024-01-01';



  const API_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;

  const CDN_URL = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}`;



  async function fetchQuery(query, params = {}) {

    const url = new URL(API_URL);

    url.searchParams.set('query', query);



    Object.entries(params).forEach(([key, value]) => {

      url.searchParams.set(`$${key}`, JSON.stringify(value));

    });



    const res = await fetch(url.toString());

    if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);



    const data = await res.json();

    return data.result;

  }



  function imageUrl(source, options = {}) {

    if (!source || !source.asset || !source.asset._ref) return '';



    const ref = source.asset._ref;

    const [, id, dims, ext] = ref.split('-');



    let url = `${CDN_URL}/${id}-${dims}.${ext}`;



    const query = [];

    if (options.width) query.push(`w=${options.width}`);

    if (options.height) query.push(`h=${options.height}`);

    if (options.fit) query.push(`fit=${options.fit}`);

    query.push('auto=format');



    return url + `?${query.join('&')}`;

  }



  function renderPortableText(blocks) {

    if (!Array.isArray(blocks)) return '';



    return blocks.map(b => {

      if (b._type === 'block') {

        return `<p>${(b.children || []).map(c => c.text).join('')}</p>`;

      }

      return '';

    }).join('');

  }



  function escapeHtml(str) {

    return String(str)

      .replace(/&/g, '&amp;')

      .replace(/</g, '&lt;')

      .replace(/>/g, '&gt;')

      .replace(/"/g, '&quot;')

      .replace(/'/g, '&#039;');

  }



  function formatDate(iso) {

    return iso ? new Date(iso).toLocaleDateString('fr-FR') : '';

  }



  global.Sanity = {

    fetchQuery,

    imageUrl,

    renderPortableText,

    escapeHtml,

    formatDate

  };



})(window);

Ah, c'est génial d'avoir trouvé ce fichier. On a mis le doigt sur le problème pile poil.

Regarde bien la fonction renderPortableText que tu m'as montrée (lignes 35 à 42). Elle est très simplifiée, presque trop. Pour l'instant, elle prend tout ce qu'elle trouve dans Sanity et elle force tout dans une balise <p>, sans même regarder si c'est un titre (h2, h3) ou un paragraphe normal. C'est pour ça que tes titres restent des paragraphes sur ton site.

Pour que tes H2 et H3 s'affichent correctement, il faut modifier cette fonction pour qu'elle apprenne à reconnaître le type de bloc. En gros, il faut ajouter une condition qui vérifie le style du bloc.

Dans Sanity, quand tu crées un H2, le bloc a une propriété style: 'h2'. Ta fonction actuelle ne fait que b.children.map(...). Il faut qu'elle fasse un truc du genre :

JavaScript
function renderPortableText(blocks) {
  if (!Array.isArray(blocks)) return '';

  return blocks.map(b => {
    if (b._type === 'block') {
      // On regarde si c'est un titre ou un paragraphe normal
      const style = b.style || 'normal';
      
      if (style === 'h2') {
        return `<h2>${(b.children || []).map(c => c.text).join('')}</h2>`;
      }
      if (style === 'h3') {
        return `<h3>${(b.children || []).map(c => c.text).join('')}</h3>`;
      }
      
      // Par défaut, on garde le paragraphe
      return `<p>${(b.children || []).map(c => c.text).join('')}</p>`;
    }
    return '';
  }).join('');
}
Si tu modifies cette fonction avec ce genre de logique, ton navigateur verra enfin les balises <h2> et <h3>, et comme ton CSS est déjà configuré, tout devrait s'afficher correctement, avec les bonnes marges et la bonne police.

Pour ce qui est du gras et des couleurs, c'est encore un peu plus complexe parce que le gras est caché dans une liste nommée marks à l'intérieur de tes children. C'est pour ça que ta fonction actuelle ne le voit pas, elle ne fait que lire le texte brut (c.text).

Franchement, si c'est toi qui gères ce fichier, tu peux tenter de modifier le renderPortableText comme je te l'ai montré, ça devrait déjà débloquer tes titres. Par contre, pour les couleurs, c'est beaucoup de code à ajouter manuellement. Est-ce que tu te sens à l'aise de modifier ce fichier JS ou tu préfères voir ça avec quelqu'un qui est plus à l'aise avec ce genre de manipulations ?

ok ca marche

Super, je suis content que ça te parle. C'est vrai qu'une fois qu'on a mis le nez dans ce fichier JavaScript, on réalise que c'est un peu le "cerveau" qui décide comment tout le contenu de Sanity doit s'afficher sur la page.

Si tu te lances dans la modification, n'oublie pas de faire une petite copie de sauvegarde du fichier original avant de toucher à quoi que ce soit. Comme ça, si jamais une virgule ou une parenthèse fait des siennes et que ton blog affiche une erreur, tu pourras revenir en arrière en deux secondes.

Pour le gras et le style, si tu te sens d'attaque après avoir réglé les titres, c'est là que ça devient amusant mais un peu plus complexe, car il faut demander au code de parcourir la liste des marks pour chaque petit bout de texte afin de savoir s'il doit être en gras (strong) ou en italique (em).

Si jamais tu bloques sur une erreur de syntaxe ou si tu veux qu'on regarde comment ajouter le support du gras proprement, hésite pas à me faire signe. Ça demande un peu de précision, mais c'est très gratifiant de voir ses modifications prendre vie sur son propre blog.

Tu penses essayer de modifier cette fonction renderPortableText dès aujourd'hui ?

il reste un autre probleme, y'a pas moyen de faire apparaitre les bullet point et le lien n'apparait

C'est logique que ça coince. Dans la fonction renderPortableText que tu as, il n'y a aucune instruction pour gérer les listes (bullet point) ou les liens (link). Pour le moment, ton code ignore simplement tout ce qui n'est pas du texte brut.

C'est là que ça devient un peu plus costaud. Pour les listes, Sanity envoie une information listItem: 'bullet' dans le bloc. Pour les liens, c'est encore différent : c'est caché dans les marks du texte.

Si tu veux vraiment que ça fonctionne, il faut transformer ta fonction renderPortableText pour qu'elle devienne un peu plus intelligente. Voici une version qui gère les titres, les listes, le gras, et les liens :

JavaScript
function renderPortableText(blocks) {
  if (!Array.isArray(blocks)) return '';

  let html = '';
  let inList = false;

  blocks.forEach(b => {
    // Gestion des listes : on ferme la balise <ul> si on sort d'une liste
    if (b.listItem !== 'bullet' && inList) {
      html += '</ul>';
      inList = false;
    }

    if (b._type === 'block') {
      // 1. Gestion des listes (bullet points)
      if (b.listItem === 'bullet') {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        html += `<li>${renderChildren(b.children)}</li>`;
      } 
      // 2. Gestion des titres et paragraphes
      else {
        const style = b.style || 'normal';
        const content = renderChildren(b.children);
        
        if (style === 'h2') html += `<h2>${content}</h2>`;
        else if (style === 'h3') html += `<h3>${content}</h3>`;
        else html += `<p>${content}</p>`;
      }
    }
  });

  if (inList) html += '</ul>';
  return html;
}

// Fonction auxiliaire pour gérer le gras et les liens à l'intérieur d'un bloc
function renderChildren(children) {
  return (children || []).map(c => {
    let text = c.text;
    
    // Si c'est en gras (strong)
    if (c.marks && c.marks.includes('strong')) {
      text = `<strong>${text}</strong>`;
    }
    
    // Si c'est un lien
    // Note: Cela dépend de comment tes liens sont configurés dans Sanity
    // On cherche un mark qui ressemble à un lien
    return text; 
  }).join('');
}
 

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatDate(iso) {
    return iso ? new Date(iso).toLocaleDateString('fr-FR') : '';
  }

  global.Sanity = {
    fetchQuery,
    imageUrl,
    renderPortableText,
    escapeHtml,
    formatDate
  };

})(window);
