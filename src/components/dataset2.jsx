//In this dataset file dataset were be stored manualluy. the data is **not fetch from API**.
import React from 'react';
import './NewsItem.css';
const articles= [
  {
    "source": {
      "id": null,
      "name": "Berliner Morgenpost"
    },
    "author": "FUNKE Mediengruppe",
    "title": "Lollapalooza in Berlin: Termin und wichtige Infos im Überblick",
    "description": "Auch 2024 findet rund um das Berliner Olympiastadion das Lollapalooza Festival statt. Erfahren Sie hier alles zu Line-up und Tickets.",
    "url": "https://www.morgenpost.de/berlin/article405949086/lollapalooza-berlin-2024-termin-infos-ueberblick.html",
    "urlToImage": "https://img.sparknews.funkemedien.de/405949208/405949208_1710419832_v16_9_1600.jpeg",
    "publishedAt": "2024-08-26T11:37:00Z",
    "content": "Berlin. Auch 2024 findet rund um das Berliner Olympiastadion das Lollapalooza Festival statt. Erfahren Sie hier alles zu Line-up und Tickets.\r\nEs ist die achte Ausgabe: Am 7. und 8. September 2024 fi… [+5569 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Variety"
    },
    "author": "Leo Barraclough",
    "title": "Films Boutique Picks Up Venice Entries ‘January 2’ by Zsofia Szilagyi, ‘Wishing on a Star’ by Peter Kerekes (EXCLUSIVE)",
    "description": "Berlin-based sales agency Films Boutique has picked up international rights to “January 2” by Zsófia Szilágyi and “Wishing on a Star” by Peter Kerekes ahead of their premieres at the Venice Film Festival. “January 2” marks Szilágyi’s return to the festival ci…",
    "url": "https://variety.com/2024/film/global/venice-films-boutique-january-2-zsofia-szilagyi-wishing-on-a-star-peter-kerekes-1236118027/",
    "urlToImage": "https://variety.com/wp-content/uploads/2024/08/January-2.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2024-08-26T11:23:05Z",
    "content": "Berlin-based sales agency Films Boutique has picked up international rights to “January 2” by Zsófia Szilágyi and “Wishing on a Star” by Peter Kerekes ahead of their premieres at the Venice Film Fest… [+2884 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Business Standard"
    },
    "author": "Vasudha Mukherjee",
    "title": "IMD issues heavy rainfall warning for Gujarat as floods displace hundreds",
    "description": "IMD issues red alert for parts of Gujarat, Heavy Rain Fall: The India Meteorological Department (IMD) has also issued a 'high risk' alert for flash floods in the met subdivisions of east Rajasthan, West Madhya Pradesh, and Gujarat in the next 24 hours",
    "url": "https://www.business-standard.com/india-news/imd-issues-heavy-rainfall-warning-for-gujarat-as-floods-displace-hundreds-124082600445_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/misc/2020-08/02/thumb/fitandfill/400X400/20200801150L.jpg",
    "publishedAt": "2024-08-26T10:45:04Z",
    "content": "The India Meteorological Department (IMD) has also issued a 'high risk' alert for flash floods in the met subdivisions of east Rajasthan, West Madhya Pradesh, and Gujarat in the next 24 hours\r\nNavsar… [+3677 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BBC News"
    },
    "author": null,
    "title": "Artists call for funding as Edinburgh festivals close",
    "description": "Creative Scotland has closed a major fund for artists to create new work amid budget concerns.",
    "url": "https://www.bbc.com/news/articles/cqxjq4ddy3jo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cd3f/live/f3965d60-6386-11ef-b05a-6bfaccfcd4cc.jpg",
    "publishedAt": "2024-08-26T10:35:08Z",
    "content": "Performers have called for a major grant for artists to be reinstated as the Edinburgh Fringe Festival came to a close over the weekend.\r\nLast week Creative Scotland confirmed it had closed its Open … [+4024 chars]"
  },
  {
    "source": {
      "id": "bild",
      "name": "Bild"
    },
    "author": "Mandy Kynast",
    "title": "Drei Menschen in Solingen tot - Kretschmer nach Messer-Terror: „Jetzt ist Schluss!“",
    "description": "Sachsens Ministerpräsident Michael Kretschmer kritisiert nach dem Terror in Solingen die Bundesregierung und fordert eine Obergrenze von Flüchtlingen.",
    "url": "https://www.bild.de/regional/dresden/kretschmer-nach-messer-terror-in-solingen-jetzt-ist-schluss-66cc18d52e96240be0bb9cbb",
    "urlToImage": "https://images.bild.de/66cc18d52e96240be0bb9cbb/63313bc227329e5ba7c8284f3df97efe,bd17782a?w=1280",
    "publishedAt": "2024-08-26T10:30:18Z",
    "content": "Dresden Sachsens Ministerpräsident Michael Kretschmer (49, CDU) fordert nach dem Terrorangriff in Solingen mit drei Toten und acht Schwerverletzten die Bundesregierung auf, endlich zu handeln.\r\nAm Mo… [+1910 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Konbini France"
    },
    "author": "Adrien Delage",
    "title": "Quinze ans après leur séparation, les frères Gallagher teasent un énième possible retour d’Oasis",
    "description": "C’est sûrement la plus longue querelle fraternelle de l’histoire du rock, au grand dam des fans d’Oasis : les sempiternelles altercations entre Liam et Noel Gallagher, leaders et membres emblématiques du groupe britannique. Leur dernière séparation...",
    "url": "https://www.konbini.com/popculture/quinze-ans-apres-leur-separation-les-freres-gallagher-teasent-un-enieme-possible-retour-doasis/",
    "urlToImage": "https://cdn-www.konbini.com/files/2024/08/oasis-feat.jpg",
    "publishedAt": "2024-08-26T10:13:16Z",
    "content": "Cest sûrement la plus longue querelle fraternelle de lhistoire du rock, au grand dam des fans dOasis : les sempiternelles altercations entre Liam et Noel Gallagher, leaders et membres emblématiques d… [+1539 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Giga"
    },
    "author": "Coline Simoncelli",
    "title": "Oasis Reunion: Konzerte auch in Deutschland?",
    "description": "Nach über einem Jahrzehnt soll es eine Oasis Reunion geben. Ob das Gallagher-Duo dabei auch Konzerte in Deutschland spielt und was zu der Versöhnung geführt hat, erfahrt ihr hier.",
    "url": "https://www.giga.de/entertainment/oasis-reunion-konzerte-auch-in-deutschland--01J672JTGXD1H3JDZC6MXEFM14",
    "urlToImage": "https://static.giga.de/7d/f2/e0/4739c45f4c2ae41716dd33cae3_cmUgMTIwMCAwIGMgbQM3MjQ5NWNlN2QzZQ==.png",
    "publishedAt": "2024-08-26T10:09:24Z",
    "content": "Nach über einem Jahrzehnt soll es eine Oasis Reunion geben. Ob das Gallagher-Duo dabei auch Konzerte in Deutschland spielt und was zu der Versöhnung geführt hat, erfahrt ihr hier.\r\nWerden sie es oder… [+2856 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Htrnews.com"
    },
    "author": "Patti Zarling, Manitowoc Herald Times Reporter",
    "title": "Organizer Chow Chong says goodbye to Kites Over Lake Michigan in Two Rivers",
    "description": "Chow Chong started the kite festival in 2005 as a way to attract people to Two Rivers downtown businesses.",
    "url": "https://www.htrnews.com/story/life/events/2024/08/26/chow-chong-talks-about-kites-over-lake-michigan-ending-in-two-rivers/74923661007/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/v1e0DUgqZxQsA0MdNByIkg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjE-/https://media.zenfs.com/en/herald-times-reporter/63d37bdf992b2e50a085749aa929f6b6",
    "publishedAt": "2024-08-26T10:02:30Z",
    "content": "TWO RIVERS Nearly 20 years ago, Chow Chong who owned a kite-selling business in the citys downtown came up with an idea to bring folks to town.\r\nI went to kite-flying festivals in other areas, and I … [+7845 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Thelineofbestfit.com"
    },
    "author": "Tyler Damara Kelly",
    "title": "Liam and Noel Gallagher are fuelling rumours of an Oasis reunion",
    "description": "Liam and Noel Gallagher have shared a post on their socials alluding to rumours of an Oasis reunion.",
    "url": "https://www.thelineofbestfit.com/news/liam-and-noel-gallagher-are-fuelling-rumours-of-an-oasis-reunion",
    "urlToImage": "https://best-fit.transforms.svdcdn.com/production/images/oasis-reissue.jpg?w=1200&h=1177&q=100&auto=format&fit=crop&dm=1716454891&s=8643fd6a018b58cd9616a2f2826ecc1a",
    "publishedAt": "2024-08-26T10:00:00Z",
    "content": "Following Liam Gallagher's headline set at Reading and Leeds Festivals, a clip dated \"27.08.24\" was shared to his and Noel's respective social media accounts, as well as the official Oasis one. \r\nRum… [+774 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "Ouest-France"
    },
    "author": "Pascale VERGEREAU",
    "title": "ENTRETIEN. François Busnel, juré du Festival d’Angoulême : « Le cinéma français est très en forme »",
    "description": "Membre du jury du 17e Festival du film francophone d’Angoulême (27 août-1er septembre), François Busnel, l’ex-animateur de La grande librairie à la télé, laisse parler son amour du 7e art.",
    "url": "https://www.ouest-france.fr/cinema/festival/entretien-francois-busnel-jure-du-festival-dangouleme-le-cinema-francais-est-tres-en-forme-c6d45560-61f2-11ef-9def-0ffd2dc3a11f",
    "urlToImage": "https://media.ouest-france.fr/v1/pictures/MjAyNDA4YmQ2MGY2NmYzNWFkYzY0YzEwMTc3MGEzNWZkNTNkODY?width=1260&height=708&focuspoint=54%2C39&cropresize=1&client_id=bpeditorial&sign=4f45a2072f161f40e5984d1f9dc7759836a4109cfe1bb8495c62c9c96950b29a",
    "publishedAt": "2024-08-26T09:41:59Z",
    "content": "À combien de vies a-t-on droit, dans la vie ? Le journaliste et réalisateur François Busnel revendique le choix den avoir au moins deux. Après quinze ans à la présentation de lémission littéraire La … [+4875 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Laut.de"
    },
    "author": "Rinko Heidrich",
    "title": "Rock En Seine: Bei Netanjahu buht die Menge laut",
    "description": "Beim tollen Rock En Seine-Festival nahe Paris spielen Fred Again, The Kills, Jungle, PJ Harvey und viele andere. Und leider auch Massive Attack.",
    "url": "https://feed.laut.de/News/Rock-En-Seine-Bei-Netanjahu-buht-die-Menge-laut-26-08-2024-20581",
    "urlToImage": "https://www.laut.de/News/Rock-En-Seine-Bei-Netanjahu-buht-die-Menge-laut-26-08-2024-20581/rock-en-seine-bei-netanjahu-buht-menge-laut-237984.jpg",
    "publishedAt": "2024-08-26T09:40:05Z",
    "content": "Beim tollen Rock En Seine-Festival nahe Paris spielen Fred Again, The Kills, Jungle, PJ Harvey und viele andere. Und leider auch Massive Attack.\r\nParis (rnk) - Rock En Seine Tag 1\r\nDie Anfahrt im Eur… [+15621 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Dubaichronicle.com"
    },
    "author": "Dubai Chronicle",
    "title": "Dubai Summer Surprises Unveils Final Sale: Up to 90% Off",
    "description": "More than 550 brands at over 2,500 outlets are offering exclusive bargains and spectacular savings from 30 August to 1 September For one weekend only, DSS Final Sale brings major markdowns on big name brands across fashion, beauty, lifestyle, homeware, electr…",
    "url": "https://www.dubaichronicle.com/2024/08/26/dubai-summer-surprises-unveils-final-sale-up-to-90-off/",
    "urlToImage": "https://www.dubaichronicle.com/wp-content/uploads/2024/08/DSS-1.jpg",
    "publishedAt": "2024-08-26T09:34:25Z",
    "content": "<ul><li>More than 550 brands at over 2,500 outlets are offering exclusive bargains and spectacular savings from 30 August to 1 September</li><li>For one weekend only, DSS Final Sale brings major mark… [+6571 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Richmond.com"
    },
    "author": "SAMUEL B. PARKER Richmond Times-Dispatch",
    "title": "See the confidentiality agreement some Richmond restaurants signed in meals tax settlements",
    "description": "The Times-Dispatch obtained a copy of the meals tax settlement agreement form signed by two Richmond restaurants as part of the resolution to disputes over the city’s meals tax collection.",
    "url": "https://richmond.com/news/local/government-politics/meals-tax-nda-settlements-finance-department/article_8258b750-6193-11ef-be02-f701d7ffb262.html",
    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/8/25/8258b750-6193-11ef-be02-f701d7ffb262/66c8fd7aa553c.preview.png?crop=826%2C434%2C0%2C30&resize=826%2C434&order=crop%2Cresize",
    "publishedAt": "2024-08-26T09:30:00Z",
    "content": "The Richmond Times-Dispatch has obtained a copy of the meals tax settlement agreement form signed by some Richmond restaurants as part of the resolution to disputes over the citys meals tax collectio… [+23104 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Sudinfo.be"
    },
    "author": "Par Françoise De Halleux",
    "title": "Les agents de sécurité arrivent sur la voie publique : voici les zones Vigilis",
    "description": "Autoriser des agents de sécurité privés à intervenir dans le domaine public : c’est exceptionnel ! La ville de Charleroi est l’une des premières communes à franchir le pas.",
    "url": "https://www.sudinfo.be/id872575/article/2024-08-26/les-agents-de-securite-arrivent-sur-la-voie-publique-voici-les-zones-vigilis",
    "urlToImage": "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/FirstImageUrl/2024/08/26/node_872575/55817414/public/2024/08/26/24512820.jpeg?itok=O4pS342X1724662833",
    "publishedAt": "2024-08-26T09:00:00Z",
    "content": "Les agents de sécurité privés sont des acteurs importants de notre sécurité et on en voit de plus en plus : dans les galeries commerçantes, dans les supermarchés, à lentrée des boîtes de nuit, dans l… [+3258 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Sudinfo.be"
    },
    "author": "Par Françoise De Halleux",
    "title": "Les agents de sécurité arrivent sur la voie publique : voici ce qu’ils sont autorisés à faire dans les zones Vigilis",
    "description": "Autoriser des agents de sécurité privés à intervenir dans le domaine public : c’est exceptionnel ! La ville de Charleroi est l’une des premières communes à franchir le pas.",
    "url": "https://www.sudinfo.be/id872575/article/2024-08-26/les-agents-de-securite-arrivent-sur-la-voie-publique-voici-ce-quils-sont",
    "urlToImage": "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/FirstImageUrl/2024/08/26/node_872575/55817414/public/2024/08/26/24512820.jpeg?itok=O4pS342X1724666981",
    "publishedAt": "2024-08-26T09:00:00Z",
    "content": "Les agents de sécurité privés sont des acteurs importants de notre sécurité et on en voit de plus en plus : dans les galeries commerçantes, dans les supermarchés, à lentrée des boîtes de nuit, dans l… [+3258 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Khabarhub.com"
    },
    "author": "Khabarhub",
    "title": "PM Oli offers best wishes on Krishna Janmastami, Gaura Parba",
    "description": "KATHMANDU: Prime Minister (PM) KP Sharma Oli has extended best wishes to all on the occasion of Krishna Janmastami and Gaura Parba festivals today. The Prime Minister took to a social media to extend to all the festival best wishes, remembering Shree Krishna,…",
    "url": "https://english.khabarhub.com/2024/26/389423/",
    "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2024/08/kp_oli-.jpg",
    "publishedAt": "2024-08-26T08:45:10Z",
    "content": "KATHMANDU: Prime Minister (PM) KP Sharma Oli has extended best wishes to all on the occasion of Krishna Janmastami and Gaura Parba festivals today.\r\nThe Prime Minister took to a social media to exten… [+444 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "PC Games"
    },
    "author": "Simon Hoffmann",
    "title": "Es ist nicht Henry Cavill: Der vielleicht beste Superman aller Zeiten kehrt ins Kino zurück",
    "description": "Statt Henry Cavill oder David Corenswet ist ein alter Bekannter bald wieder im Kino zu sehen.",
    "url": "https://www.pcgames.de/Superman-Brands-63720/News/Kino-Release-2025-1454442/",
    "urlToImage": "https://www.pcgames.de/screenshots/original/2024/01/superman-christopherreeve-pc-games_artwork2.jpg",
    "publishedAt": "2024-08-26T08:41:00Z",
    "content": "Nächstes Jahr kehrt Superman zurück ins Kino. Henry Cavill, der einstige Darsteller von Geralt in der Witcher-Serie, wird es im neuen Projekt aus dem DC-Kosmos aber nicht zu sehen geben. Stattdessen … [+2379 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Marianne.net"
    },
    "author": "Iness Khalid",
    "title": "Cécile, ex-programmatrice : \"Aujourd'hui, on blinde les festivals de têtes d'affiche, il n'y a plus le goût du risque\"",
    "description": "Cécile, 47 ans, devenue programmatrice de concert par un concours de circonstances entre ses études et son ancien job étudiant. Avant de se reconvertir comme institutrice, elle a travaillé dans le domaine de l’évènementiel durant presque 15 ans. Elle estime a…",
    "url": "https://www.marianne.net/societe/cecile-ex-programmatrice-aujourd-hui-on-blinde-les-festivals-de-tetes-d-affiche-il-n-y-a-plus-le-gout-du-risque",
    "urlToImage": "https://media.marianne.net/assets/as3s88kNNowvXvTg6.jpg?w=1540&h=924&r=fill",
    "publishedAt": "2024-08-26T08:30:00Z",
    "content": "Cest un peu la vie qui ma amené ici, je ne me suis jamais dit « Ah, tiens ! Jai envie de faire programmatrice dans un lieu ». Jétais étudiante en ethnomusicologie, et en même temps, jai travaillé pou… [+827 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "Investing.com"
    },
    "author": "Investing.com",
    "title": "iQIYI's New VR Location-Based Entertainment Well-Received in Macao",
    "description": "iQIYI's New VR Location-Based Entertainment Well-Received in Macao",
    "url": "https://www.investing.com/news/press-releases/iqiyis-new-vr-locationbased-entertainment-wellreceived-in-macao-93CH-3586326",
    "urlToImage": "https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png",
    "publishedAt": "2024-08-26T07:56:10Z",
    "content": "Expanding Successful VR Adaptations of iQIYI's Popular IP from 'Love Between Fairy and Devil'\r\nBEIJING\r\n, Aug. 26, 2024\r\n /PRNewswire/ -- On August 23\r\n, iQIYI, China's\r\n leading online entertainment… [+3723 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Lavenir.net"
    },
    "author": "Pierre Jadot",
    "title": "Classement(s) : | 25.08.24 | Le Challenge De La Province Du Hainaut à Thuillies - 6.20 km",
    "description": "| Tchalou Des Ruelles - 6.20 km | ...",
    "url": "https://www.lavenir.net/sports/running/2024/08/26/classements-250824-le-challenge-de-la-province-du-hainaut-a-thuillies-620-km-2OEG233MRFFPRAOVEPROTFI3M4/",
    "urlToImage": "https://www.lavenir.net/resizer/v2/GHNARXKCF5CYFG6BZXBOL77IW4.png?auth=97a34a21463136b271bbaa2378e952c1a2e8e2918d282563c4fbac398176ef21&width=1200&height=630&quality=85&focal=1500%2C1000&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FUVYY255VT5BDBHOGCTGBCGI364.png%3A100%3A0%2C558",
    "publishedAt": "2024-08-26T07:56:03Z",
    "content": "09:28Les Solidarités avec 60 000 spectateurs en trois jours et des shows de feu, une clôture quatre étoiles de l'été des festivals"
  },
  {
    "source": {
      "id": null,
      "name": "Lavenir.net"
    },
    "author": "Pierre Jadot",
    "title": "Classement(s) : | 25.08.24 | Le Challenge De La Province Du Hainaut à Thuillies - 11.50 km",
    "description": "| Tchalou Des Ruelles - 11.50 km | ...",
    "url": "https://www.lavenir.net/sports/running/2024/08/26/classements-250824-le-challenge-de-la-province-du-hainaut-a-thuillies-1150-km-LYXCTUY67NC3RCWZCY454U4L7M/",
    "urlToImage": "https://www.lavenir.net/resizer/v2/GHNARXKCF5CYFG6BZXBOL77IW4.png?auth=97a34a21463136b271bbaa2378e952c1a2e8e2918d282563c4fbac398176ef21&width=1200&height=630&quality=85&focal=1500%2C1000&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FUVYY255VT5BDBHOGCTGBCGI364.png%3A100%3A0%2C558",
    "publishedAt": "2024-08-26T07:54:48Z",
    "content": "09:28Les Solidarités avec 60 000 spectateurs en trois jours et des shows de feu, une clôture quatre étoiles de l'été des festivals"
  },
  {
    "source": {
      "id": null,
      "name": "Starobserver.com.au"
    },
    "author": "Gemini",
    "title": "Kween Kong Wearing the Aboriginal Flag Upside Down on Drag Race Didn’t Advocate For Us – It Harmed Us",
    "description": "Like many around the world, I declared my fandom for RuPaul’s Drag Race from the first episode in 2009. Particularly as a young queer country kid, it was a game changer.  ...\nThe post Kween Kong Wearing the Aboriginal Flag Upside Down on Drag Race Didn’t Advo…",
    "url": "https://www.starobserver.com.au/opinion/opinion-kween-kong-aboriginal-flag-upside-down-harmful/232667",
    "urlToImage": "https://www.starobserver.com.au/wp-content/uploads/2024/08/FeliciaFoxxKweenKongGemini.png",
    "publishedAt": "2024-08-26T07:53:06Z",
    "content": "Like many around the world, I declared my fandom for RuPauls Drag Race from the first episode in 2009. Particularly as a young queer country kid, it was a game changer. \r\nCut to 2024 its almost been … [+8147 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Nieuwsblad.be"
    },
    "author": "jvdv",
    "title": "‘Pomp It Festival’ wordt allereerste tuinfestival in Bunt",
    "description": "Het is niet de bedoeling om uit te groeien tot een tweede Fantasia Festival, maar zaterdag 31 augustus willen Timmy Callaerts en Amelie Seghers met hun allereerste Pomp It Festival wel een traditie opstarten in de tuin van taverne De Pomp in de Bunt.",
    "url": "https://www.nieuwsblad.be/cnt/dmf20240826_92869011",
    "urlToImage": "https://static.nieuwsblad.be/Assets/Images_Upload/2024/08/26/850b8258-eb73-4a68-a04b-3b726b36afea.jpg?maxheight=460&maxwidth=638",
    "publishedAt": "2024-08-26T07:53:00Z",
    "content": "Het duo runt in de Museumstraat ook het populaire jeugdcafé De Janeiro. We koesteren al enkele jaren het idee om dit evenement te organiseren, lichten Amelie en Timmy toe. Dit jaar hebben we daar ein… [+1460 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Khabarhub.com"
    },
    "author": "Khabarhub",
    "title": "Protection of multiculturalism strengthens social unity: Madhav Nepal",
    "description": "KATHMANDU: Unified Socialist chairman Madhav Kumar Nepal has said that the traditional culture of all communities in the country should be protected. Conveying best wishes on the occasion of Krishna Janmashtami and Gaura Parva (festival), on Monday he said th…",
    "url": "https://english.khabarhub.com/2024/26/389388/",
    "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2021/09/Madhav-Kumar-Nepal.jpg",
    "publishedAt": "2024-08-26T07:45:03Z",
    "content": "KATHMANDU: Unified Socialist chairman Madhav Kumar Nepal has said that the traditional culture of all communities in the country should be protected.\r\nConveying best wishes on the occasion of Krishna… [+915 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "PC Games"
    },
    "author": "Simon Hoffmann",
    "title": "Erste Bilder: Nicht Episode 10, sondern jede Menge Zombies - so habt ihr \"Rey\" noch nie gesehen",
    "description": "Statt im nächsten Star Wars-Film ist Daisy Ridley Ende des Jahres in einem brandneuen Zombie-Streifen zu sehen.",
    "url": "https://www.pcgames.de/Star-Wars-Brands-25101/News/Star-Wars-Daisy-Ridley-1454435/",
    "urlToImage": "https://www.pcgames.de/screenshots/original/2023/04/star-wars-rey-pcgh_artwork3.jpg",
    "publishedAt": "2024-08-26T07:45:00Z",
    "content": "Langsam aber sicher nähern wir uns der Rückkehr von Star Wars auf die große Leinwand. Lange war unklar, wann und wie man wieder im Kino auftauchen würde. Seit dem Ende der Skywalker-Saga hatte man de… [+2555 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Laut.de"
    },
    "author": "Michael Schuh",
    "title": "Oasis: Teaser kündigt Reunion an",
    "description": "15 Jahre sind genug: Morgen verkünden Liam und Noel Gallagher mit hoher Wahrscheinlichkeit die Termine der Oasis-Reunion-Tournee 2025.",
    "url": "https://feed.laut.de/News/Oasis-Teaser-kuendigt-Reunion-an-26-08-2024-20579",
    "urlToImage": "https://www.laut.de/News/Oasis-Teaser-kuendigt-Reunion-an-26-08-2024-20579/oasis-teaser-kuendigt-reunion-an-237979.jpg",
    "publishedAt": "2024-08-26T07:39:22Z",
    "content": "15 Jahre sind genug: Morgen verkünden Liam und Noel Gallagher mit hoher Wahrscheinlichkeit die Termine der Oasis-Reunion-Tournee 2025.\r\nManchester (mis) - Mit zeitgleich veröffentlichten Ankündigunge… [+4321 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Visions.de"
    },
    "author": "Nicola Drilling",
    "title": "Linkin Park: Comeback bei Rock am Ring?",
    "description": "Am Samstagabend haben Linkin Park einen Countdown auf ihren Social-Media-Kanälen geteilt. Die anhaltenden Spekulationen um ein Comeback der Band werden damit nochmal deutlich konkreter.\nDer Beitrag Comeback? erschien zuerst auf VISIONS.de.",
    "url": "https://www.visions.de/news/linkin-park-comeback-tour-in-aussicht/",
    "urlToImage": "https://www.visions.de/wp-content/uploads/Photo-Credit_-James-Minchin.jpg",
    "publishedAt": "2024-08-26T07:30:45Z",
    "content": "100 Stunden zählte der Countdown, den Linkin Park am Samstagabend verbreiteten – am Mittwochabend sollte es also Gewissheit über den Anlass geben. Bis dahin bleibt es bei zahlreichen Spekulationen zu… [+2439 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Lavenir.net"
    },
    "author": "Alexis Seny, Céline Colinet, Mathieu Golinvaux, Matthis Demoulin",
    "title": "Les Solidarités avec 60 000 spectateurs en trois jours et des shows de feu, une clôture quatre étoiles de l’été des festivals",
    "description": "De vendredi à dimanche, plus de 60 000 personnes ont participé aux 10es Solidarités à Suarlée, sur les hauteurs namuroises. La pluie n’a pas gâché une fête multicolore et électrique, grâce à des shows XXL de Mika, Étienne Daho, Noé Preszow ou Santa. ...",
    "url": "https://www.lavenir.net/actu/2024/08/26/les-solidarites-avec-60-000-spectateurs-en-trois-jours-et-des-shows-de-feu-une-cloture-quatre-etoiles-de-lete-des-festivals-EIV7S4CLNRD4VEMDAAXAJ7ZE5A/",
    "urlToImage": "https://www.lavenir.net/resizer/v2/G6XFKCQKFVGS3EERGMFYA4BUVQ.jpg?auth=eeb8ff119e86a71125c6b95004c61b92aa70b09b57529a3f10897ce9059398e1&width=1200&height=630&quality=85&focal=373%2C249&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FUVYY255VT5BDBHOGCTGBCGI364.png%3A100%3A0%2C558",
    "publishedAt": "2024-08-26T07:28:00Z",
    "content": "D'où vient le vent ?\r\nAprès les problèmes de trop longues files aux entrées, ainsi que dans et aux abords des parkings, vendredi, pour lesquels les organisateurs ont trouvé des solutions pour les deu… [+3120 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Dazed"
    },
    "author": "Solomon Pace-McCarrick",
    "title": "In pictures: Milkshake Festival, Amsterdam’s queer wonderland",
    "description": "Kicking off Amsterdam’s Pride weekend with an array of colourful and immersive stages, Szymon Stepniak’s photos of Milkshake Festival feel lifted straight out of a queer fairytale",
    "url": "https://www.dazeddigital.com/art-photography/article/64422/1/in-photos-milkshake-festival-amsterdams-queer-wonderland?utm_source=Link&utm_medium=Link&utm_campaign=RSSFeed&utm_term=in-pictures-milkshake-festival-amsterdam-s-queer-wonderland",
    "urlToImage": "https://images-prod.dazeddigital.com/1200/0-479-1365-910/azure/dazed-prod/1380/4/1384085.jpg",
    "publishedAt": "2024-08-26T07:15:00Z",
    "content": "I rolled in running a bit low on energy after barely four hours of sleep and an early train, but as soon as I hit the opening event, everything flipped, says photographer Szymon Stepniak. Two drag qu… [+2669 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Telerama.fr"
    },
    "author": null,
    "title": "Rock en Seine : PJ Harvey, The Offspring, Pixies… Les temps forts (et les temps faibles) de la cuvée 2024",
    "description": "Un marathon de 92 concerts en cinq jours ! Le festival parisien s’est achevé ce dimanche 25 août, alternant le très bon et les performances parfois un peu poussives. Notre résumé des moments les plus marquants.",
    "url": "https://www.telerama.fr/musique/rock-en-seine-pj-harvey-the-offspring-pixies-les-temps-forts-et-les-temps-faibles-de-la-cuvee-2024-7021838.php",
    "urlToImage": "https://focus.telerama.fr/2024/08/26/0/4/4992/3328/1200/800/60/0/2d9d934_1724657901399-sipa-01173087000006.jpg/webp",
    "publishedAt": "2024-08-26T06:54:58Z",
    "content": "PJ Harvey a une nouvelle fois ébloui le public parisien, notamment en interprétant son nouvel album. Photo Sadaka Edmond/SIPA \r\nPublié le 26 août 2024 à 10h54\r\n<ul><li>Partage</li><li>LinkedIn</li><l… [+7647 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BBC News"
    },
    "author": null,
    "title": "Musician to tour Europe with top Norwegian artist",
    "description": "Nieve Ella will perform in front of thousands on the 21 date tour around Europe.",
    "url": "https://www.bbc.com/news/articles/cz6x9e7dxd7o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/07ae/live/d5923580-6158-11ef-b970-9f202720b57a.jpg",
    "publishedAt": "2024-08-26T06:41:13Z",
    "content": "A BBC Music Introducing artist, who started making music in her bedroom during the Covid-19 pandemic, is heading on a six-week European tour with a top Norwegian artist.\r\nNieve Ella, from Albrighton,… [+1287 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "dh.be"
    },
    "author": "La Rédaction",
    "title": "Les Solidarités, une clôture quatre étoiles de l’été des festivals 2024 (vidéo)",
    "description": "De vendredi 23 à dimanche 25 août 2024, plus de 60.000 personnes ont participé aux 10es Solidarités à Suarlée, sur les hauteurs namuroises. La pluie n’a pas gâché une fête multicolore et électrique, grâce à des shows XXL de Mika, Étienne Daho, Noé Preszow ou …",
    "url": "https://www.dhnet.be/regions/namur/2024/08/26/les-solidarites-une-cloture-quatre-etoiles-de-lete-des-festivals-2024-video-XWOPVPQA4ZBFZFR4AYMC2F6OLU/",
    "urlToImage": "https://www.dhnet.be/resizer/v2/P4DQAPDQGNH2FEWUGELB57PPT4.jpg?auth=258362b19f8bdf3d4b5101f234ab6f279c88108e20d2fa8af1cbe121c1b77e2b&width=1200&height=630&quality=85&focal=549%2C367&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FDZNGDE46VVGXRGHD3TEI5RB3GM.png%3A100%3A0%2C559",
    "publishedAt": "2024-08-26T06:23:11Z",
    "content": "D'où vient le vent?\r\nAprès les problèmes de trop longues files aux entrées, ainsi que dans et aux abords des parkings, vendredi, pour lesquels les organisateurs ont trouvé des solutions pour les deux… [+3155 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Business Standard"
    },
    "author": "Press Trust of India",
    "title": "Tractor-trolley sweeps in flooded river in Gujarat; 10 rescued, 7 missing",
    "description": "A search operation by NDRF is underway in Gujarat's Morbi district to trace seven persons swept away along with their tractor trolley while crossing a flooded causeway on a river amid heavy rains, an official said on Monday.\nTen out of 17 persons on board the…",
    "url": "https://www.business-standard.com/india-news/tractor-trolley-sweeps-in-flooded-river-in-gujarat-10-rescued-7-missing-124082600149_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/misc/2020-08/02/thumb/fitandfill/400X400/20200801150L.jpg",
    "publishedAt": "2024-08-26T06:20:53Z",
    "content": "State Disaster Response Force (SDRF) and National Disaster Response Force (NDRF) personnel are conducting a search operation, he said\r\nState Disaster Response Force (SDRF) and National Disaster Respo… [+3696 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "India's gold duty cut likely to spark buying spree during festivals",
    "description": "India anticipated robust gold demand during the festive season, driven by a major cut in import duties. This reduction made prices more appealing and enhanced retail purchases. The duty cut was aimed at tackling smuggling, and demand was expected to remain hi…",
    "url": "https://economictimes.indiatimes.com/news/economy/policy/indias-gold-duty-cut-likely-to-spark-buying-spree-during-festivals/articleshow/112797352.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-112797381,width-1200,height-630,imgsize-69630,overlay-economictimes/photo.jpg",
    "publishedAt": "2024-08-26T06:07:00Z",
    "content": "Gold demand in India during the upcoming festive season is likely to remain robust, as the substantial reduction in import duty has made prices appealing, providing comfort to retail consumers and en… [+1689 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "taz.de"
    },
    "author": "Jonas Wahmkow",
    "title": "Sommerserie „Im Schatten“ (6): Kaum Schatten im Krankenbett",
    "description": "Hitzewellen fordern in Berlin jedes Jahr mehrere Hunderte Tote. Gefährdet sind vor allem Alte und Kranke. Das Hitzeschutzkonzept ist noch am Anfang.",
    "url": "https://taz.de/Sommerserie-Im-Schatten-6/!6031528/",
    "urlToImage": "https://taz.de/picture/7201741/948/36176854-1.jpeg",
    "publishedAt": "2024-08-26T06:00:00Z",
    "content": "Hitzewellen fordern in Berlin jedes Jahr mehrere Hunderte Tote. Gefährdet sind vor allem Alte und Kranke. Das Hitzeschutzkonzept ist noch am Anfang.\r\nGefährdet vor Hitze sind vor allem alte und krank… [+8522 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "India's gold duty cut likely to spark buying spree during festivals",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c2474588-15fe-4fdd-8611-4ebc38e7f228",
    "urlToImage": null,
    "publishedAt": "2024-08-26T05:56:33Z",
    "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Lavenir.net"
    },
    "author": "Alexis Seny, Céline Colinet",
    "title": "Les Solidarités, une clôture quatre étoiles de l’été des festivals 2024 (vidéo)",
    "description": "De vendredi 23 à dimanche 25 août 2024, plus de 60.000 personnes ont participé aux 10es Solidarités à Suarlée, sur les hauteurs namuroises. La pluie n’a pas gâché une fête multicolore et électrique, grâce à des shows XXL de Mika, Étienne Daho, Noé Preszow ou …",
    "url": "https://www.lavenir.net/culture/festival/2024/08/26/les-solidarites-une-cloture-quatre-etoiles-de-lete-des-festivals-2024-video-RFJ7VT4BZFCI3GIWMVDVFJWJYY/",
    "urlToImage": "https://www.lavenir.net/resizer/v2/P4DQAPDQGNH2FEWUGELB57PPT4.jpg?auth=258362b19f8bdf3d4b5101f234ab6f279c88108e20d2fa8af1cbe121c1b77e2b&width=1200&height=630&quality=85&focal=549%2C367&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FUVYY255VT5BDBHOGCTGBCGI364.png%3A100%3A0%2C558",
    "publishedAt": "2024-08-26T05:33:14Z",
    "content": "D'où vient le vent?\r\nAprès les problèmes de trop longues files aux entrées, ainsi que dans et aux abords des parkings, vendredi, pour lesquels les organisateurs ont trouvé des solutions pour les deux… [+3155 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": null,
    "title": "Janmashtami 2024: Unique Ways To Decorate Temple At Your Home",
    "description": "Krishna Janmashtami 2024:  Devotees organise kirtan, and chant the Lord's name. Many devotees decorate the deity of Lord Krishna. Here are some unique suggestions to decorate Lord Krishna's temple or jhula.",
    "url": "https://www.ndtv.com/offbeat/janmashtami-2024-unique-ways-to-decorate-temple-at-your-home-6419419",
    "urlToImage": "https://c.ndtvimg.com/2024-08/fg7kp2mg_krishna-janmashtami-2024_625x300_26_August_24.jpeg",
    "publishedAt": "2024-08-26T05:26:39Z",
    "content": "Janmashtami 2024 Decoration Idea: People can use artificial or natural flowers to decorate the jhula.\r\nKrishna Janmashtami is one of the most popular festivals celebrated across the country to mark t… [+2346 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "ETF Daily News"
    },
    "author": "MarketBeat News",
    "title": "Seaport Res Ptn Weighs in on Live Nation Entertainment, Inc.’s Q3 2024 Earnings (NYSE:LYV)",
    "description": "Live Nation Entertainment, Inc. (NYSE:LYV – Free Report) – Stock analysts at Seaport Res Ptn lowered their Q3 2024 earnings estimates for Live Nation Entertainment in a research report issued on Thursday, August 22nd. Seaport Res Ptn analyst D. Joyce now fore…",
    "url": "https://www.etfdailynews.com/2024/08/26/seaport-res-ptn-weighs-in-on-live-nation-entertainment-inc-s-q3-2024-earnings-nyselyv/",
    "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/live-nation-entertainment-inc-logo-1200x675.gif&w=240&h=240&zc=2",
    "publishedAt": "2024-08-26T05:24:44Z",
    "content": "Live Nation Entertainment, Inc. (NYSE:LYV – Free Report) – Stock analysts at Seaport Res Ptn lowered their Q3 2024 earnings estimates for Live Nation Entertainment in a research report issued on Thur… [+6679 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "ET Online",
    "title": "Happy Krishna Janmashtami 2024: Top 10 wishes images, messages, quotes, WhatsApp, Facebook, Insta status to share with family & friends",
    "description": "Happy Krishna Janmashtami 2024 images: Krishna Janmashtami, celebrated globally, honors the birth of Lord Krishna. Falling on August 26 this year, the article shared various wishes, messages, and quotes to help spread joy and unity. It emphasized the essence …",
    "url": "https://economictimes.indiatimes.com/news/new-updates/happy-krishna-janmashtami-2024-top-10-wishes-images-messages-quotes-whatsapp-facebook-insta-status-to-share-with-family-friends/articleshow/112795277.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-112795543,width-1200,height-630,imgsize-1742290,overlay-economictimes/photo.jpg",
    "publishedAt": "2024-08-26T05:17:16Z",
    "content": "Happy Krishna Janmashtami 2024 images: Krishna Janmashtami, one of India's most celebrated festivals, marks the birth of Lord Krishna, an incarnation of Lord Vishnu. This year, it will be observed on… [+6683 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "ScienceAlert"
    },
    "author": "Michelle Starr",
    "title": "Stunning Astronomical Observatory Unearthed in Ancient Egypt",
    "description": "A ruined building in Kafr El Sheikh was where ancient Egyptians once stood, gazing at the stars above.",
    "url": "https://www.sciencealert.com/stunning-astronomical-observatory-unearthed-in-ancient-egypt",
    "urlToImage": "https://www.sciencealert.com/images/2024/08/observatory.jpg",
    "publishedAt": "2024-08-26T05:12:16Z",
    "content": "A ruined building in Kafr El Sheikh was where ancient Egyptians once stood, gazing at the stars above.\r\nMore than 2,500 years ago, the building constituted the largest astronomical observatory known … [+4188 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Variety"
    },
    "author": "Alissasimon",
    "title": "‘Mother Mara’ Review: A Melodrama About a Grieving Matriarch Who Defies Convention and Rediscovers Her Mojo",
    "description": "Throughout her storied career as a screen and theater actress, Mirjana Karanović has never run away from a challenge. In the melodrama “Mother Mara,” her second feature as a director, co-writer and star, she gives herself challenges aplenty, including showing…",
    "url": "https://variety.com/2024/film/reviews/mother-mara-review-majka-mara-1236117740/",
    "urlToImage": "https://variety.com/wp-content/uploads/2024/07/Mother-Mara-4.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2024-08-26T05:10:00Z",
    "content": "Throughout her storied career as a screen and theater actress, Mirjana Karanović has never run away from a challenge. In the melodrama “Mother Mara,” her second feature as a director, co-writer and s… [+3019 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "Business Standard"
    },
    "author": "ANI",
    "title": "Amit Shah speaks with Gujarat CM in wake of heavy rainfall, assures aid",
    "description": "India Meteorological Department gave detailed information about the forecast of heavy to very heavy rains in Gujarat during the next week",
    "url": "https://www.business-standard.com/india-news/amit-shah-speaks-with-gujarat-cm-in-wake-of-heavy-rainfall-assures-aid-124082600083_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/18/thumb/featurecrop/400X400/1721300497-0751.jpg",
    "publishedAt": "2024-08-26T04:48:45Z",
    "content": "India Meteorological Department gave detailed information about the forecast of heavy to very heavy rains in Gujarat during the next week\r\nUnion Home Minister Amit Shah spoke with Gujarat Chief Minis… [+2397 chars]"
  },
  {
    "source": {
      "id": "abc-news",
      "name": "ABC News"
    },
    "author": "LINDSEY BAHR AP film writer",
    "title": "Venice Film Festival: From ‘Joker 2’ to ‘Queer,’ here are 10 movies to get excited about",
    "description": "Some of Hollywood’s biggest stars are getting ready to descend on the Venice Film Festival this week, from George Clooney and Angelina Jolie to Lady Gaga, Brad Pitt, Nicole Kidman and Joaquin Phoenix",
    "url": "https://abcnews.go.com/Entertainment/wireStory/venice-film-festival-joker-2-queer-10-movies-113143430",
    "urlToImage": "https://i.abcnewsfe.com/a/7d0aad2e-4059-4ac7-9897-5f430c91c455/wirestory_309c97d0d2a8cd103a8f79f3c5d36792_16x9.jpg?w=1600",
    "publishedAt": "2024-08-26T04:38:24Z",
    "content": "VENICE, Italy -- Some of Hollywoods biggest stars are getting ready to descend on the Venice Film Festival this week, from George Clooney and Angelina Jolie to Lady Gaga and Brad Pitt. \r\nBut while th… [+6582 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "TOI Astrology",
    "title": "Exploring the Cosmic Harmony of Janmashtami and Radha Ashtami in 2024 - A Guide to Divine Harmony",
    "description": "The article detailed the significance of Janmashtami and Radha Ashtami, celebrating the births of Lord Krishna and Goddess Radha respectively. These festivals are astrologically important for personal development and relationship harmony. Observed on Aug 26, …",
    "url": "https://timesofindia.indiatimes.com/astrology/zodiacs-astrology/exploring-the-cosmic-harmony-of-janmashtami-and-radha-ashtami-in-2024-a-guide-to-divine-harmony/articleshow/112794265.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-112794342,width-1070,height-580,imgsize-47092,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2024-08-26T04:23:31Z",
    "content": "Top 5 zodiac signs that are highly competitive"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "WFTV Orlando"
    },
    "author": "Susan Montoya Bryan",
    "title": "'We were expendable': Downwinders from world's 1st atomic test are on a mission to tell their story",
    "description": "'We were expendable': Downwinders from world's 1st atomic test are on a mission to tell their storywftv.com",
    "url": "https://www.wftv.com/entertainment/we-were-expendable/ZQIMQPJEQRG4LASXMHTITHJZNY/",
    "urlToImage": "https://cmg-cmg-tv-10070-prod.cdn.arcpublishing.com/resizer/bE0VIUcwsBneWNUt1cKVEvQaof4=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/XSVT6ORHPHFOS3AUJN2ALEI75Q.jpg",
    "publishedAt": "2024-08-26T04:13:38Z",
    "content": "LOS ALAMOS, N.M. — (AP) It was the summer of 1945 when the United States dropped atomic bombs on Japan, killing thousands of people as waves of destructive energy obliterated two cites. It was a deci… [+7254 chars]"
  },
  {
    "source": {
      "id": "the-irish-times",
      "name": "The Irish Times"
    },
    "author": "Una Mullally",
    "title": "Irish experimental film-making is booming. All it needs now is a home",
    "description": "What’s Next For?: Dissolutions moving-image festival will showcase work from across Ireland. A permanent base for its makers is long overdue",
    "url": "https://www.irishtimes.com/culture/film/2024/08/26/irish-experimental-film-making-is-booming-all-it-needs-now-is-a-home/",
    "urlToImage": "https://www.irishtimes.com/resizer/v2/66C5POE4XFDAFMIYUISRZKWUTQ.jpg?smart=true&auth=f2e88dbdb56699267b198a3b753b7fb4686a9441043dfe7b15507d3ddab69af8&width=1200&height=630",
    "publishedAt": "2024-08-26T04:00:00Z",
    "content": "Early next month the Complex arts centre, in the markets area of central Dublin, will be transformed into an experimental cinema. This is for Dissolutions, a new moving-image festival highlighting th… [+5317 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Kw.be"
    },
    "author": "Stefan Vankerkhoven",
    "title": "Brugge pakt uit met plan voor de open ruimte",
    "description": "Tijdens de gemeenteraad van maandag 26 augustus zal schepen Franky Demon een plan voor de open ruimte ter goedkeuring voorleggen. Brugge wil investeren in open ruimte en die ruimtes met elkaar verbinden.\nThe post Brugge pakt uit met plan voor de open ruimte a…",
    "url": "https://kw.be/nieuws/samenleving/brugge-pakt-uit-met-plan-voor-de-open-ruimte/",
    "urlToImage": "https://img.static-rmg.be/a/view/q75/w1600/h836/6472617/b823731376z-1-20240823152526-000gho4ahvk8-1-0-jpg.jpg",
    "publishedAt": "2024-08-26T03:30:00Z",
    "content": "Tijdens de gemeenteraad van maandag 26 augustus zal schepen Franky Demon een plan voor de open ruimte ter goedkeuring voorleggen. Brugge wil investeren in open ruimte en die ruimtes met elkaar verbin… [+2389 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
    },
    "author": "Ghazal Ahmed",
    "title": "12 Best Places to Retire in Finland",
    "description": "This article looks at the 12 best places to retire in Finland. If you wish to skip our detailed analysis of the retirement savings shortfall, you may go to 5...",
    "url": "https://finance.yahoo.com/news/12-best-places-retire-finland-030923716.html",
    "urlToImage": "https://media.zenfs.com/en/insidermonkey.com/f91206572ce49f551dbb84ea49d7e2e6",
    "publishedAt": "2024-08-26T03:09:23Z",
    "content": "This article looks at the 12 best places to retire in Finland. If you wish to skip our detailed analysis of the retirement savings shortfall, you may go to 5 Best Places to Retire in Finland.\r\nNaviga… [+14717 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Rpnradio.com"
    },
    "author": "RPN Social",
    "title": "Cebu City Acting Mayor Garcia nihulagway sa Pasigarbo sa Sugbo sa tinuod nga panaghiusa sa mga Sugbuanon",
    "description": "Atubangan sa duot sa katawhan sa Cebu City Sports Center (CCSC), gipamulong ni Acting Mayor Garcia kagabii, Agusto 25, 2024, nga ang Pasigarbo sa Sugbo kamatuoran sa kahiusahan sa Sugbo. Gani, ang dakbayan sa Sugbo nisalmot man isip guest contingent sa Pasiga…",
    "url": "https://rpnradio.com/cebu-city-acting-mayor-garcia-nihulagway-sa-pasigarbo-sa-sugbo-sa-tinuod-nga-panaghiusa-sa-mga-sugbuanon/",
    "urlToImage": "https://rpnradio.com/wp-content/uploads/2024/08/Cebu-City-Acting-Mayor-Garcia-nihulagway-sa-pasigarbo-sa-Sugbo-sa-tinuod-nga-panaghiusa-sa-mga-Sugbuanon.jpg",
    "publishedAt": "2024-08-26T03:01:19Z",
    "content": "Atubangan sa duot sa katawhan sa Cebu City Sports Center (CCSC), gipamulong ni Acting Mayor Garcia kagabii, Agusto 25, 2024, nga ang Pasigarbo sa Sugbo kamatuoran sa kahiusahan sa Sugbo.\r\nGani, ang d… [+1779 chars]"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "TNN",
    "title": "21 resolutions adopted at Global Muthamizh Conference in Palani to enhance Murugan devotion and siddha medicine",
    "description": "The two-day Global Muthamizh Conference in Palani concluded with the adoption of 21 resolutions aimed at revitalizing ancient Murugan temples, promoting siddha medicine, and enhancing devotees' experiences. Key resolutions included renovating 143 Murugan temp…",
    "url": "https://timesofindia.indiatimes.com/city/chennai/21-resolutions-adopted-at-global-muthamizh-conference-in-palani-to-enhance-murugan-devotion-and-siddha-medicine/articleshow/112791745.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-112791843,width-1070,height-580,imgsize-48194,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2024-08-26T02:09:44Z",
    "content": "8 protein-packed South-Indian breakfasts made with dal (lentils)"
  },
  {
    "source": {
      "id": "le-monde",
      "name": "Le Monde"
    },
    "author": "Franck Colombani, Pierre Gervasoni, Sylvain Siclier",
    "title": "Notre sélection de festivals et de concerts : jeunes talents à Buxy, jazz à La Villette, musique baroque à Celles-sur-Belle…",
    "description": "Le lundi, le service Culture du « Monde » propose aux lecteurs de La Matinale ses choix en matière de musique. Cette semaine, du jazz, de la musique classique ou encore baroque et un concert événement.",
    "url": "https://www.lemonde.fr/culture/article/2024/08/26/notre-selection-de-festivals-et-de-concerts-jeunes-talents-a-buxy-jazz-a-la-villette-musique-baroque-a-celles-sur-belle_6295028_3246.html",
    "urlToImage": "https://img.lemde.fr/2024/08/23/319/0/1410/940/1440/960/60/0/44b81b9_1724437963117-abbayeroyaumont-2017-drone-aerofilms-0228-1410x1536.jpg",
    "publishedAt": "2024-08-26T02:00:11Z",
    "content": "LA LISTE DE LA MATINALE\r\nCette semaine, à quelques jours de la rentrée des classes, nous vous présentons les programmes de quatre festivals et un concert parisien. La musique classique avec des virée… [+2531 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Khabarhub.com"
    },
    "author": "Khabarhub",
    "title": "Festivals promote religious tolerance and goodwill: President Paudel",
    "description": "KATHMANDU: President Ram Chandra Paudel has stated that Shree Krishna Janmastami inspires us to engage in virtuous actions by promoting religious tolerance and goodwill. In his message for Shree Krishna Janmastami, President Paudel wished that this festival e…",
    "url": "https://english.khabarhub.com/2024/26/389280/",
    "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2024/08/Ram-Chandra-Paudel--scaled.jpg",
    "publishedAt": "2024-08-26T01:40:34Z",
    "content": "KATHMANDU: President Ram Chandra Paudel has stated that Shree Krishna Janmastami inspires us to engage in virtuous actions by promoting religious tolerance and goodwill.\r\nIn his message for Shree Kri… [+1023 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Fm4.orf.at"
    },
    "author": null,
    "title": "„HOPE – who will turn the tide“",
    "description": "Große Fragen aus den Bereichen Kunst, Technologie und Gesellschaft verschmelzen bald wieder beim diesjährigen Ars Electronica Festival, das von 4. bis 8. September in Linz stattfindet. Hoffnung wird heuer das große Thema, und ihr könnt bei unserem Gewinnspiel…",
    "url": "https://fm4.orf.at/stories/3043122/",
    "urlToImage": "https://tubestatic.orf.at/static/images/site/tube/20240834/53874843342_28c4d31c81_k.6016747.jpg",
    "publishedAt": "2024-08-26T01:17:00Z",
    "content": "Große Fragen aus den Bereichen Kunst, Technologie und Gesellschaft verschmelzen bald wieder beim diesjährigen Ars Electronica Festival, das von 4. bis 8. September in Linz stattfindet. Hoffnung wird … [+3887 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Livemint"
    },
    "author": "Jocelyn Fernandes",
    "title": "Bank Holiday today: Are banks closed for Janmashtami 2024 on August 26? Check all details here",
    "description": "Bank Holiday today: All national and private banks in India will be closed for around nine days in August 2024, This includes the second and fourth Saturdays, all Sundays, and other regional and religious holidays.",
    "url": "https://www.livemint.com/industry/banking/bank-holidays-list-closed-today-august-26-janmashtami-2024-krishna-janmabhoomi-state-bank-of-india-rbi-check-all-details-11724633533983.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2024/08/26/1600x900/Bank_holiday_today_August_24_Janmashtami_2024_SBI_1724634992676_1724634992802.jpg",
    "publishedAt": "2024-08-26T01:04:02Z",
    "content": "Bank Holiday today: Are banks closed today, on August 26, on occasion of Janmashtami or Krishna Janmabhoomi? Yes, in many Indian states.\r\nJanmashtami 2024 is a bank holiday in states including Gujara… [+3507 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Standaard.be"
    },
    "author": "Stijn Decock",
    "title": "Zo drukbezocht, en toch zo kwetsbaar: welke lessen nemen we mee uit de festivalzomer?",
    "description": "Een drukke festivalzomer kan niet verhullen dat festivals toch voor uitdagingen staan. De Standaard dook acht weken achter de schermen, en rondt af met een lijst van tien werkpunten.",
    "url": "https://www.standaard.be/cnt/dmf20240825_95356765",
    "urlToImage": "https://static.standaard.be/Assets/Images_Upload/2024/08/25/f4e4e690-13d7-48ec-90cb-290009d53b62.jpg?maxheight=416&maxwidth=568",
    "publishedAt": "2024-08-26T01:00:00Z",
    "content": "Astoria, een Brussels luxehotel met een roemrijke geschiedenis, bleef zeventien jaar dicht. Eind"
  },
  {
    "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
    },
    "author": "Jessica Rajan and Soumyajit Saha",
    "title": "Gig worker demand set to rise 40% during festive season peak",
    "description": "As the festive season kicks in, the demand for gig work riders employed by quick commerce platforms may grow by as much as 40% on peak demand days from the current level of about three to four lakh riders, industry executives told ET. Ecommerce and food deliv…",
    "url": "https://economictimes.indiatimes.com/tech/technology/gig-worker-demand-set-to-rise-40-during-festive-season-peak/articleshow/112785820.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-112785827,width-1200,height-630,imgsize-2492645,overlay-ettech/photo.jpg",
    "publishedAt": "2024-08-26T00:31:00Z",
    "content": "The demand for gig delivery riders by quick commerce platforms like Blinkit, Swiggy Instamart and Zepto may grow 40% on peak-demand days this festive season when the overall home delivery ecosystem i… [+4284 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Independent.ie"
    },
    "author": "By Rachael Davis, PA Entertainment Features Writer",
    "title": "The Postal Service and Death Cab For Cutie ‘grateful’ to close festival",
    "description": "Alternative rock bands The Postal Service and Death Cab for Cutie closed out All Points East with an emotional and electric set, celebrating the 20th anniversaries of their respective albums Give Up and Transatlanticism.",
    "url": "https://www.independent.ie/style/celebrity/celebrity-news/the-postal-service-and-death-cab-for-cutie-grateful-to-close-festival/a1710800651.html",
    "urlToImage": "https://focus.independent.ie/thumbor/4lLkAHTj3nZUWEO18aUitT_dguQ=/629x460/smart/prod-mh-ireland/c448ca36-a84f-4486-a795-cc4fea077215/a2510ddc-fba8-4d92-a413-05a862a675a9/d25c16e6-f8de-419d-998f-6940fab1f402.jpg",
    "publishedAt": "2024-08-25T23:45:03Z",
    "content": "Alternative rock bands The Postal Service and Death Cab for Cutie closed out All Points East with an emotional and electric set, celebrating the 20th anniversaries of their respective albums Give Up … [+3205 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Japan Today"
    },
    "author": null,
    "title": "Flag bearer",
    "description": "Tens of thousands of dancers performed choreographed routines at various venues in Nagoya City over the weekend at the 26th Nippon Domannaka Matsuri, one of Japan's largest dance festivals.",
    "url": "https://japantoday.com/category/picture-of-the-day/Domannaka-Matsuri",
    "urlToImage": null,
    "publishedAt": "2024-08-25T23:33:30Z",
    "content": "Niseko Green Season\r\nEnjoy outdoor activities, beautiful scenery, exquisite food and family fun in perfectly mild summer weather. Presented by Hilton Niseko Village.\r\nWatch the special video here!"
  },
  {
    "source": {
      "id": null,
      "name": "Screen Rant"
    },
    "author": "Isabelle Dupr",
    "title": "Michael Fassbenders A24 Movie From 8 Years Ago Deserves Way More Respect",
    "description": "Michael Fassbender starred in an A24 film eight years ago, and while it’s not one of his most popular movies, it still holds up and is worth watching.",
    "url": "https://screenrant.com/michael-fassbender-a24-movie-trespass-against-us-movie-deserves-more/",
    "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/michael-fassbender-s-david-stares-in-prometheus.jpg",
    "publishedAt": "2024-08-25T23:00:11Z",
    "content": "Summary\r\n<ul><li> Michael Fassbender's best performances are often overlooked in lesser-known projects like A24's 2016 film. </li><li>Trespass Against Us \r\nshowcases Fassbender's emotional range thro… [+3359 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "VOA News"
    },
    "author": "webdesk@voanews.com (Associated Press)",
    "title": "Downwinders from world's 1st atomic test are on a mission to tell their story",
    "description": "While the US dropping atomic bombs on Japan in 1945 has been well documented, nuclear testing conducted in the US state of New Mexico weeks earlier is less known",
    "url": "https://www.voanews.com/a/downwinders-from-world-s-1st-atomic-test-are-on-a-mission-to-tell-their-story/7756527.html",
    "urlToImage": "https://gdb.voanews.com/1C94DCAF-F0C1-40AB-8189-3189F25DC770.jpg",
    "publishedAt": "2024-08-25T22:45:50Z",
    "content": "It was the summer of 1945 when the United States dropped atomic bombs on Japan, killing thousands of people as waves of destructive energy obliterated two cites. It was a decisive move that helped br… [+7097 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "PerthNow"
    },
    "author": "Perthnow",
    "title": "Colourful murals to be painted on bridge as part of Mandurah Arts Festival",
    "description": "Mandurah’s art festival beginning on September 6 includes large-scale mural painting, symphonies, immersive cultural experiences, children’s entertainment, exhibitions and epic performances.",
    "url": "https://www.perthnow.com.au/news/wa/colourful-murals-to-be-painted-on-bridge-as-part-of-mandurah-arts-festival--c-15805067",
    "urlToImage": "https://images.perthnow.com.au/publication/C-15805067/44c0f7e07fe6f2fe33b8eac6f16ff93698ec75ff-16x9-x42y0w1116h628.jpg?imwidth=1200",
    "publishedAt": "2024-08-25T22:36:03Z",
    "content": "Mandurahs iconic bridge will be painted as part of the citys upcoming arts festival this September.\r\nThe month of festivities kicks off on September 6 with the Headliners Comedy Gala at Peel Thunder … [+2624 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Japan Today"
    },
    "author": null,
    "title": "'We were expendable': Downwinders from world's 1st atomic test are on a mission to tell their story",
    "description": "It was the summer of 1945 when the United States dropped atomic bombs on Japan, killing thousands of people as waves of destructive energy obliterated two cites. It was a decisive move that helped bring about the end of World War II, but survivors and the gen…",
    "url": "https://japantoday.com/category/world/%27we-were-expendable%27-downwinders-from-world%27s-1st-atomic-test-are-on-a-mission-to-tell-their-story",
    "urlToImage": null,
    "publishedAt": "2024-08-25T21:39:42Z",
    "content": "It was the summer of 1945 when the United States dropped atomic bombs on Japan, killing thousands of people as waves of destructive energy obliterated two cites. It was a decisive move that helped br… [+7235 chars]"
  },
  {
    "source": {
      "id": "abc-news",
      "name": "ABC News"
    },
    "author": "MARIANA MARTÍNEZ BARBA Associated Press",
    "title": "At Mexico’s Hera music festival, women were both at the forefront and behind the scenes",
    "description": "Mexico City’s Hera HSBC music festival brought together an all-female lineup of both Latina and international talent including Kesha, Demi Lovato and Camila Cabello",
    "url": "https://abcnews.go.com/Entertainment/wireStory/mexicos-hera-music-festival-women-forefront-scenes-113140393",
    "urlToImage": "https://i.abcnewsfe.com/a/b973a87c-bc65-46ca-88ad-576b63ed8b62/wirestory_40d9b1c904a29d1cc76a90d92272daca_16x9.jpg?w=1600",
    "publishedAt": "2024-08-25T21:34:26Z",
    "content": "MEXICO CITY -- Mexico City's Hera HSBC music festival Saturday brought together an all-female lineup of both Latina and international talent, including Kesha, Demi Lovato and Camila Cabello. \r\nNamed … [+3182 chars]"
  },
  {
    "source": {
      "id": "abc-news",
      "name": "ABC News"
    },
    "author": "MARIANA MARTÍNEZ BARBA Associated Press",
    "title": "At Mexico’s Hera music festival, women were both at the forefront and behind the scenes",
    "description": "Mexico City’s Hera HSBC music festival brought together an all-female lineup of both Latina and international talent including Kesha, Demi Lovato and Camila Cabello",
    "url": "https://abcnews.go.com/International/wireStory/mexicos-hera-music-festival-women-forefront-scenes-113140392",
    "urlToImage": "https://i.abcnewsfe.com/a/b973a87c-bc65-46ca-88ad-576b63ed8b62/wirestory_40d9b1c904a29d1cc76a90d92272daca_16x9.jpg?w=1600",
    "publishedAt": "2024-08-25T21:34:25Z",
    "content": "MEXICO CITY -- Mexico City's Hera HSBC music festival Saturday brought together an all-female lineup of both Latina and international talent, including Kesha, Demi Lovato and Camila Cabello. \r\nNamed … [+3182 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
  },
  {
    "source": {
      "id": null,
      "name": "The Punch"
    },
    "author": "Agency Report",
    "title": "Syrian man kills three in German knife attack",
    "description": "A Syrian man suspected of belonging to a “terrorist group” has given himself up and confessed to killing three people and wounding eight others in a knife rampage at a German street festival, officials said on Sunday. The random attack as thousands of people …",
    "url": "https://punchng.com/syrian-man-kills-three-in-german-knife-attack/",
    "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2024/08/25220349/AFP__20240825__36EU2UD__v1__Mockup__GermanySyriaAttackFestival-1200x630.jpg",
    "publishedAt": "2024-08-25T21:07:26Z",
    "content": "A Syrian man suspected of belonging to a “terrorist group” has given himself up and confessed to killing three people and wounding eight others in a knife rampage at a German street festival, officia… [+3806 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "UPROXX"
    },
    "author": "Flisadam",
    "title": "The Reading Festival Has Issued A Public Apology To Lana Del Rey, Reneé Rapp, And Their Fans After Technical Hiccups",
    "description": "Getty Image\r\n\nThe area's weather certainly could have played a role in the chaos.",
    "url": "https://uproxx.com/pop/lana-del-rey-renee-rapp-public-apology-reading-leeds-festival-2024/",
    "urlToImage": "https://uproxx.com/wp-content/uploads/2024/08/lana-del-rey-renee-rapp-readin.png?w=1024",
    "publishedAt": "2024-08-25T20:31:10Z",
    "content": "The Reading and Leeds festivals continue to stake their claim as one of England’s largest events. This year’s festivities headlined by Lana Del Rey, Blink-182, Fred Again.., Liam Gallagher, and more … [+1582 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Variety"
    },
    "author": "John Hopewell",
    "title": "Sanfic 2024: More Festival and Industry Growth, Chile’s Film Prowess and This Year’s Highlights and Deals",
    "description": "SANTIAGO, Chile — Climaxing Saturday night with an awards, ceremony, where Santiago Maza and Diego Luna passion project “State of Siege” took top honors, Santiago de Chile’s Sanfic and industry arm Sanfic Industria delivered a vibrant edition, confirming the …",
    "url": "https://variety.com/2024/film/global/diego-luna-pablo-larrain-sebastian-lelio-maite-alberdi-1236117760/",
    "urlToImage": "https://variety.com/wp-content/uploads/2024/08/Carlos-Nunez-Gabriela-Sandoval-Bina-Daigeler-Sanfic-2024.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2024-08-25T20:17:34Z",
    "content": "SANTIAGO, Chile — Climaxing Saturday night with an awards, ceremony, where Santiago Maza and Diego Luna passion project “State of Siege” took top honors, Santiago de Chile’s Sanfic and industry arm S… [+9768 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "IndieWire"
    },
    "author": "Harrison Richlin",
    "title": "Isabelle Huppert Says with Theaters ‘Threatened,’ Festivals Are ‘Crucial for the Visibility of Movies’",
    "description": "With movie theaters 'threatened,' Huppert acknowledges the importance of seeing cinema on the big screen at festivals.",
    "url": "https://www.indiewire.com/news/general-news/isabelle-huppert-theaters-threatened-festivals-crucial-1235040055/",
    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/08/GettyImages-2153693324.jpg?w=650",
    "publishedAt": "2024-08-25T20:00:00Z",
    "content": "Having had a career that’s spanned over 50 years, Isabelle Huppert knows a thing or two about cinema. She’s done epic westerns like “Heaven’s Gate” and erotic dramas like “The Piano Teacher,” worked … [+2322 chars]"
  },
  {
    "source": {
      "id": "abc-news-au",
      "name": "ABC News (AU)"
    },
    "author": "Leisa Scott , Kirstin Murray, and Vanessa Gorman",
    "title": "Why comedian Michelle Brasier laughs about her dad's funeral and her brother's ashes",
    "description": "Michelle Brasier was told she had a 97 per cent chance of getting cancer. She chose to laugh about it.",
    "url": "https://www.abc.net.au/news/2024-08-26/comedian-michelle-brasier-why-comedy-is-a-good-friend-to-grief/103410430",
    "urlToImage": "https://live-production.wcms.abc-cdn.net.au/f79ab0d983d8b2079cb524f5de45d7d2?impolicy=wcms_watermark_news&cropH=1687&cropW=3000&xPos=0&yPos=101&width=862&height=485&imformat=generic",
    "publishedAt": "2024-08-25T19:57:26Z",
    "content": "It's scary doing comedy, says Michelle Brasier, but not as scary as dying young, so life on stage is kind of an apprenticeship in case she must face her ultimate fear.\r\n\"If I do have a fight ahead of… [+8305 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Stereogum"
    },
    "author": "Abby Jones",
    "title": "Not Her Fault: Reneé Rapp’s Reading Set Ends After Four Songs",
    "description": "Aside from the opportunity to make Drew Barrymore proud, inclement weather and outdoor festivals are not a good mix. Torrential downpour at Burning Man last year left tens of thousands of burners stranded. Reneé Rapp’s set at Leeds Festival on Friday was canc…",
    "url": "https://www.stereogum.com/2277637/not-her-fault-renee-rapps-reading-set-ends-after-four-songs/news/",
    "urlToImage": "https://static.stereogum.com/uploads/2024/08/Renee-Rapp-1724615328.jpg",
    "publishedAt": "2024-08-25T19:51:00Z",
    "content": "Aside from the opportunity to make Drew Barrymore proud, inclement weather and outdoor festivals are not a good mix. Torrential downpour at Burning Man last year left tens of thousands of burners str… [+2836 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Independent.ie"
    },
    "author": "By Naomi Clarke, PA Senior Entertainment Reporter",
    "title": "Oasis: Mancunian rockers who took on the world before their acrimonious split",
    "description": "Rumours of an Oasis reunion have picked up steam once again, with reports claiming the Gallagher brothers are going to unite next year for a series of gigs.",
    "url": "https://www.independent.ie/style/celebrity/celebrity-news/oasis-mancunian-rockers-who-took-on-the-world-before-their-acrimonious-split/a574161336.html",
    "urlToImage": "https://focus.independent.ie/thumbor/S7rqlpOhth1fyZdP5iM6QbiP58o=/67x0:1973x1271/629x0/prod-mh-ireland/179b2e46-1f1b-4a58-b852-33d447d596b3/f08a78c7-a2c8-4732-8ccc-3e8825bd4073/2.1068733.jpg",
    "publishedAt": "2024-08-25T19:10:19Z",
    "content": "Rumours of an Oasis reunion have picked up steam once again, with reports claiming the Gallagher brothers are going to unite next year for a series of gigs.Formed in Manchester in 1991, the rock band… [+5780 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Lavenir.net"
    },
    "author": "Romain Rixhon",
    "title": "Bilan de FiestaCity 2024 : Ykons, Olive et Boney M ont confirmé « la particularité de la programmation de notre festival »",
    "description": "Avec une affiche mêlant talents régionaux et artistes connus et reconnus de la scène musicale d’avant 2000, FiestaCity a attiré du monde à Verviers et confirmé que ce type de programmation sied bien au festival verviétois. ...",
    "url": "https://www.lavenir.net/regions/verviers/verviers/2024/08/25/bilan-de-fiestacity-2024-ykons-olive-et-boney-m-ont-confirme-la-particularite-de-la-programmation-de-notre-festival-XQ6NH6BZDBFZ5G6UDOVFMNECOU/",
    "urlToImage": "https://www.lavenir.net/resizer/v2/SQC4GLUDHZFOLOZGZUEQPSPB2I.jpg?auth=307fe1351ddf6688eeef1ecbe24b7ce31125f1a738e49ebdb2cb85128cfb80db&width=1200&height=630&quality=85&focal=810%2C540&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FUVYY255VT5BDBHOGCTGBCGI364.png%3A100%3A0%2C558",
    "publishedAt": "2024-08-25T18:17:12Z",
    "content": "Car certains voudraient peut-être voir un changement \"comme le fait d'intégrer le Centre Culturel. Mais pour moi, on peut très bien avoir un partenariat sur une scène par exemple.Mais pour le reste, … [+3141 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "IndieWire"
    },
    "author": "Tom Brueggemann",
    "title": "‘Deadpool & Wolverine’ Revives, ‘Alien: Romulus’ Plunges, and We Lose the $100 Million Weekend",
    "description": "'Blink Twice' from director Zoe Kravitz opened to $7.3 million and audiences loved faith-genre film 'The Forge,' but it's no $100-million weekend.",
    "url": "https://www.indiewire.com/news/box-office/weekend-box-office-deadpool-wolverine-up-alien-romulus-down-1235039975/",
    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/08/MCDBLTW_MG025.jpg?w=650",
    "publishedAt": "2024-08-25T18:12:27Z",
    "content": "With $92 million this weekend, domestic gross for August should equal 2023 or come close for the first time since March. Holdovers get the credit: Three new wide releases grossed $19 million total, f… [+6399 chars]"
  },
  {
    "source": {
      "id": "the-irish-times",
      "name": "The Irish Times"
    },
    "author": "Jade Wilson",
    "title": "Voluntary body appeals for promoters to prioritise festivalgoers’ welfare",
    "description": "Psycare needs funding to continue taking the burden off medics at festivals by providing its welfare service",
    "url": "https://www.irishtimes.com/ireland/social-affairs/2024/08/25/voluntary-body-appeals-for-promoters-to-prioritise-festivalgoers-welfare/",
    "urlToImage": "https://www.irishtimes.com/resizer/v2/SIKVHTO2GVFTXL2UH4T6TFSDMA.jpeg?smart=true&auth=41a8ba2a445189747a98d0c931032e0c6c682fd1224596842c4724f1a1858157&width=1200&height=630",
    "publishedAt": "2024-08-25T18:00:00Z",
    "content": "A voluntary organisation that provides psychological care to festivalgoers across the country has issued an appeal for funding and for event promoters to make attendees welfare a priority.\r\nUsing a c… [+2625 chars]"
  }
];

// Function to sort articles by date, newest first
const sortedArticles = articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

function Dataset2() {
  return (
    <div id="newscontainer">
      {sortedArticles.map((article, index) => (
        <div id="newsItem" key={index}>
          <div id="img">
            {article.urlToImage ? (
              <img id="image" src={article.urlToImage} alt="No available" />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div id="box">
            <div id="box_heading">
              {article.title}
              <p id="date">{article.publishedAt.replace('T', ' | ').replace('Z', '')}</p>
            </div>
            <div id="box_des">{article.description}</div>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dataset2;