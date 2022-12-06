import axios from "axios";
import {useEffect, useState} from "react";

const Dashboard = () => {
    //const [allMovies, setAllMovies] = useState([{"original_title": "loading", "overview": "loading"}]);
    const [allMovies, setAllMovies] = useState([
        {
            "id": 830784,
            "original_title": "Lyle, Lyle, Crocodile",
            "overview": "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
            "tweets": [
                {
                    "id": 1600131230447849500,
                    "text": "原題「Lyle, Lyle, Crocodile」、日本題「シング・フォー・ミー、ライル」\n日本に来るのは来年3月らしいけど、めっちゃ面白そうだから観に行きたいね"
                },
                {
                    "id": 1600131086616449000,
                    "text": "@Corrycountry1 @MFOnline He has love for his fan definitely he will want to have it  and I feel like I am himself 🤣… https://t.co/lBAMqxL6Fa"
                },
                {
                    "id": 1600127935201124400,
                    "text": "Lyle Lyle Crocodile - Frame 1724 of 147141 https://t.co/UrdwLr8IXG"
                },
                {
                    "id": 1600127932210479000,
                    "text": "Lyle Lyle Crocodile - Frame 1723 of 147141 https://t.co/MDslLd2rtp"
                },
                {
                    "id": 1600127929622708200,
                    "text": "Lyle Lyle Crocodile - Frame 1722 of 147141 https://t.co/4ueOrKwTuT"
                },
                {
                    "id": 1600126613894877200,
                    "text": "RT @kiddocaremy: Filem Lyle, Lyle, Crocodile ni filem paling best untuk tengok dengan your children tauuu. \n\nKalau nak tahu kenapa, haaa bo…"
                },
                {
                    "id": 1600125670645866500,
                    "text": "@OOGWAYPRIME LYLE LYLE CROCODILE.\n2022.\n\n058/100. https://t.co/KsjEYpv7bV"
                },
                {
                    "id": 1600125234996445200,
                    "text": "Lyle and the Birthday Party (Lyle the Crocodile) ZDTWV6N\n\nhttps://t.co/2RmH7f9XWb https://t.co/5oTu21gKZi"
                },
                {
                    "id": 1600124273477111800,
                    "text": "@kimak He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocodile 🐊 tr… https://t.co/sT9UmOIXw4"
                },
                {
                    "id": 1600124171211587600,
                    "text": "@tayshigh He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocodile 🐊… https://t.co/4eTJpUFcfh"
                },
                {
                    "id": 1600124060020617200,
                    "text": "@sheree_chinn8 He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocod… https://t.co/yKkaQWfh0l"
                },
                {
                    "id": 1600123846262083600,
                    "text": "@strrysatellite He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle croco… https://t.co/43w7cQwRYJ"
                },
                {
                    "id": 1600123058156511200,
                    "text": "@perryolaa He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocodile… https://t.co/wzvucGJsiy"
                },
                {
                    "id": 1600122890195652600,
                    "text": "@hrrysliterati He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocod… https://t.co/LFXxyE2kMD"
                },
                {
                    "id": 1600121410210304000,
                    "text": "@manonrosess He has love for his fan and I feel like I am himself 🤣🤣🤣 have you watched the movie Lyle Lyle crocodil… https://t.co/I5rKyuGzuP"
                },
                {
                    "id": 1600120387706167300,
                    "text": "Lyle Lyle Crocodile - Frame 1721 of 147141 https://t.co/EI49Jxa58s"
                },
                {
                    "id": 1600120385269268500,
                    "text": "Lyle Lyle Crocodile - Frame 1720 of 147141 https://t.co/tMB7dOiCas"
                },
                {
                    "id": 1600120382576627700,
                    "text": "Lyle Lyle Crocodile - Frame 1719 of 147141 https://t.co/bWeKmzo36b"
                },
                {
                    "id": 1600114559679107000,
                    "text": "RT @kiddocaremy: Filem Lyle, Lyle, Crocodile ni filem paling best untuk tengok dengan your children tauuu. \n\nKalau nak tahu kenapa, haaa bo…"
                },
                {
                    "id": 1600112839716487200,
                    "text": "Lyle Lyle Crocodile - Frame 1718 of 147141 https://t.co/fFeWYzB52E"
                },
                {
                    "id": 1600112836725940200,
                    "text": "Lyle Lyle Crocodile - Frame 1717 of 147141 https://t.co/UiNw6khmTq"
                },
                {
                    "id": 1600112833638940700,
                    "text": "Lyle Lyle Crocodile - Frame 1716 of 147141 https://t.co/Y2lyLnAUPt"
                },
                {
                    "id": 1600110937637150700,
                    "text": "Introducing the newest Adam Henderson Productions member, Lyle the singing crocodile! https://t.co/n8pYKB3bej"
                },
                {
                    "id": 1600110702701604900,
                    "text": "RT @kiddocaremy: Filem Lyle, Lyle, Crocodile ni filem paling best untuk tengok dengan your children tauuu. \n\nKalau nak tahu kenapa, haaa bo…"
                },
                {
                    "id": 1600110288912932900,
                    "text": "RT @PlayGamesMovies: Lyle, Lyle, Crocodile\nShawn Mendes\nApple TV https://t.co/HiEk7ld86x #ad https://t.co/jmMDPpZnDZ"
                },
                {
                    "id": 1600105286492213200,
                    "text": "Lyle Lyle Crocodile - Frame 1715 of 147141 https://t.co/cOKwSRE4k4"
                },
                {
                    "id": 1600105283543597000,
                    "text": "Lyle Lyle Crocodile - Frame 1714 of 147141 https://t.co/uAMGAKp88w"
                },
                {
                    "id": 1600105280972390400,
                    "text": "Lyle Lyle Crocodile - Frame 1713 of 147141 https://t.co/WabA9vqcXg"
                },
                {
                    "id": 1600104183268782000,
                    "text": "Watch Lyle, Lyle, Crocodile (2022) : Full Movie Online Free \n\nWatch &amp; Download Here&gt;&gt;https://t.co/xGBWlIlVEC… https://t.co/mEmHayue1J"
                },
                {
                    "id": 1600098873149599700,
                    "text": "@DavidPoland Does Sony even know they have a potential awards movie?\nThey sent out last-minute digital links of \"Ly… https://t.co/05NLV9Uxqb"
                },
                {
                    "id": 1600097738456170500,
                    "text": "Lyle Lyle Crocodile - Frame 1712 of 147141 https://t.co/GzCMSbmQiq"
                },
                {
                    "id": 1600097735771832300,
                    "text": "Lyle Lyle Crocodile - Frame 1711 of 147141 https://t.co/eHlbmEsrsS"
                },
                {
                    "id": 1600097733112627200,
                    "text": "Lyle Lyle Crocodile - Frame 1710 of 147141 https://t.co/ZRyG8Ryv2y"
                },
                {
                    "id": 1600097076330877000,
                    "text": "This is one of the worst movies I’ve ever seen lol\n\nZero effort.\n\nI rated Lyle, Lyle, Crocodile (2022) 1/10 #IMDb https://t.co/IyV33U5OCt"
                },
                {
                    "id": 1600090198670549000,
                    "text": "Lyle Lyle Crocodile - Frame 1709 of 147141 https://t.co/aOXwHPcQH0"
                },
                {
                    "id": 1600090193335394300,
                    "text": "Lyle Lyle Crocodile - Frame 1708 of 147141 https://t.co/WInipqw897"
                },
                {
                    "id": 1600090184913223700,
                    "text": "Lyle Lyle Crocodile - Frame 1707 of 147141 https://t.co/XNr3AxwYiX"
                },
                {
                    "id": 1600082640601759700,
                    "text": "Lyle Lyle Crocodile - Frame 1706 of 147141 https://t.co/99bJdYYkjN"
                },
                {
                    "id": 1600082638051709000,
                    "text": "Lyle Lyle Crocodile - Frame 1705 of 147141 https://t.co/8ZAxt0u86R"
                },
                {
                    "id": 1600082634897514500,
                    "text": "Lyle Lyle Crocodile - Frame 1704 of 147141 https://t.co/YOZidj07BD"
                },
                {
                    "id": 1600078510587904000,
                    "text": "Just watched Lyle, Lyle, crocodile.. can we talk about how versatile Javier Bardem is?!!!!"
                },
                {
                    "id": 1600076885156720600,
                    "text": "Happening today \n\nPeter Feed My Sheep Ministries-giving away plates of food 2 PM next to Edd’s Package Store\n\nBarga… https://t.co/yI5hKWZXBv"
                },
                {
                    "id": 1600075088317091800,
                    "text": "Lyle Lyle Crocodile - Frame 1703 of 147141 https://t.co/iuI7j2pRB8"
                },
                {
                    "id": 1600075085825691600,
                    "text": "Lyle Lyle Crocodile - Frame 1702 of 147141 https://t.co/QskmseTMfY"
                },
                {
                    "id": 1600075083292221400,
                    "text": "Lyle Lyle Crocodile - Frame 1701 of 147141 https://t.co/vcZwVXjkaS"
                },
                {
                    "id": 1600073811420143600,
                    "text": "We're in Jura today and tomorrow:\n\nTue 6 Dec\n5.30pm - Lyle, Lyle, Crocodile (PG)\n8.30pm - Black Panther: Wakanda Fo… https://t.co/3SKyKL45lS"
                },
                {
                    "id": 1600072293669109800,
                    "text": "@Crocodile_Lyle Same because I'm typically too tired to hate stuff at that hour. \n\nAs opposed to right now because… https://t.co/PpAppdEQGf"
                },
                {
                    "id": 1600067540306231300,
                    "text": "Lyle Lyle Crocodile - Frame 1700 of 147141 https://t.co/zGueqA1HkM"
                },
                {
                    "id": 1600067537638670300,
                    "text": "Lyle Lyle Crocodile - Frame 1699 of 147141 https://t.co/Rof1Hd1VY1"
                },
                {
                    "id": 1600067534648115200,
                    "text": "Lyle Lyle Crocodile - Frame 1698 of 147141 https://t.co/rBNiJQojop"
                }
            ]
        },
        {
            "id": 663712,
            "original_title": "Terrifier 2",
            "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
            "tweets": [
                {
                    "id": 1600132151076348000,
                    "text": "RT @ArtTheClownBr: 📰| Terrifier 2 é submetido ao Oscar e produtor zoa possibilidade de indicação\n\n A distribuidora @BDisgusting decidiu sub…"
                },
                {
                    "id": 1600132038215934000,
                    "text": "Terrifier 2 (2022) https://t.co/ZdjJ4P3zoC"
                },
                {
                    "id": 1600131776256483300,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600131530738741200,
                    "text": "RT @ArtTheClownBr: 📰| Terrifier 2 é submetido ao Oscar e produtor zoa possibilidade de indicação\n\n A distribuidora @BDisgusting decidiu sub…"
                },
                {
                    "id": 1600130905615478800,
                    "text": "RT @ArtTheClownBr: 📰| Terrifier 2 é submetido ao Oscar e produtor zoa possibilidade de indicação\n\n A distribuidora @BDisgusting decidiu sub…"
                },
                {
                    "id": 1600129616919687200,
                    "text": "RT @ArtTheClownBr: 📰| Terrifier 2 é submetido ao Oscar e produtor zoa possibilidade de indicação\n\n A distribuidora @BDisgusting decidiu sub…"
                },
                {
                    "id": 1600128594713645000,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600128326957666300,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600127628123418600,
                    "text": "@dontletmeruinme \"terrifier 2 a história é um lixo mas tem cena de gore, 4 estrelas\""
                },
                {
                    "id": 1600125517180862500,
                    "text": "https://t.co/jRCx7Vllke"
                },
                {
                    "id": 1600124389852209200,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600122194813587500,
                    "text": "Man, Terrifier 2 was a ton of fun. Seriously can't wait for the off the wall ideas they come up with for the next one"
                },
                {
                    "id": 1600121422747246600,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600120716841652200,
                    "text": "Terrifier 2 (2022) - Leer 24 Críticas de Películas \nEnlace: https://t.co/KKMI6AQAE3 \n#Terrifier2 #PeliCritica"
                },
                {
                    "id": 1600120656913436700,
                    "text": "Terrifier 2 (2022) - Read 24 Movie Reviews \nLink: https://t.co/70b8s13fFY \n#Terrifier2 #MovieReviews"
                },
                {
                    "id": 1600118978218963000,
                    "text": "CARTELERA DE LA SEMANA\nViernes 9: PINOCHO\nSábado 10: TERRIFIER 2\nDomingo 11: PINOCHO\nInformes y Reservas: 76903597… https://t.co/4VHzgzzT7D"
                },
                {
                    "id": 1600117693843050500,
                    "text": "@catturd2 Terrifier 2"
                },
                {
                    "id": 1600116009511268400,
                    "text": "terrifier 2 me traumatizou e nem foi pelo terror e sim de TÃO RUIM que é"
                },
                {
                    "id": 1600113477804138500,
                    "text": "@catturd2 Uh...A Quiet Place 2, Terrifier 2, Evil Dead 2... I'm just saying."
                },
                {
                    "id": 1600112338773811200,
                    "text": "Starting Terrifier 2. https://t.co/JcWl3gRtGN"
                },
                {
                    "id": 1600107358004203500,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600107197106569200,
                    "text": "#primevideo\n\nTerrifier\nGarota do mal\nVizinho sinistro\nOs escolhidos\n1408(indisponível)\nFragmentado\nA fúria do dragã… https://t.co/tK7ZigD4i0"
                },
                {
                    "id": 1600107170636275700,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600103260228132900,
                    "text": "@wordswithjonny Terrifier 2 might finishe me off 😂"
                },
                {
                    "id": 1600103220533133300,
                    "text": "QUINTA VOU VER OS TERRIFIER 2 NO GRANDE ECRÃ NA COMIC CON https://t.co/w2ldLpbsTD"
                },
                {
                    "id": 1600102963283783700,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600102132539019300,
                    "text": "RT @unpluggednewsmx: #Cine\n#ArtTheClown arribará a la pantalla grande en México aún más violento, sanguinario y más sádico que nunca en la…"
                },
                {
                    "id": 1600101207544332300,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600101100282970000,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600100407673589800,
                    "text": "Estoy viendo terrifier 2 y no mamen, esta súper cruda, muy gore weyyyyy, si me puso la piel chinita 😨"
                },
                {
                    "id": 1600100291386278000,
                    "text": "@rickv1deo Deadstream, Torn Hearts, Terrifier 2"
                },
                {
                    "id": 1600100087236993000,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600099413443371000,
                    "text": "@metaldude69 @TerrifierFilm @_LaurenLaVera_ Oh dude, Terrifier and ESPECIALLY Terrifier 2 are probably my favourite… https://t.co/IsL9jnXq3L"
                },
                {
                    "id": 1600098589316812800,
                    "text": "@catturd2 terrifier 2"
                },
                {
                    "id": 1600095730081104000,
                    "text": "i watched Something In The Dirt (2022) and it was ok\n\ni also watched Terrifier 2 (2022) and i need a fucking break… https://t.co/LJcmanRxny"
                },
                {
                    "id": 1600093540947722200,
                    "text": "@WeaponizedRage @Lover_of_puns “Terrifier 2” was made for pocket change, under a million.  It brought in like $10 m… https://t.co/vI1zq3wjoM"
                },
                {
                    "id": 1600088862549692400,
                    "text": "@loutrard De la grosse bourrinade bien énervée comme rarement. Project Wolf Hunting est quasiment du niveau de The Sadness et Terrifier 2"
                },
                {
                    "id": 1600088734921158700,
                    "text": "@catturd2 Terrifier 2"
                },
                {
                    "id": 1600085737864585200,
                    "text": "@tonyaguirreche Tienes que ver terrifier 2"
                },
                {
                    "id": 1600085300973568000,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                },
                {
                    "id": 1600085074463969300,
                    "text": "RT @BDisgusting: Kevin Smith Hosting 'Terrifier' and 'Terrifier 2' Double Feature in New Jersey on December 10! https://t.co/n7IgRfDd01 @da…"
                },
                {
                    "id": 1600073913119035400,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600073056311025700,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600072754732015600,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600072378260029400,
                    "text": "RT @UncleCreepy: This is how it is done. #thisisart #terrifier #terrifier2 #artheclown\n\nBravo @UmbrellaEnt \n\nComing to Blu-ray 2/8/2023 fro…"
                },
                {
                    "id": 1600069649827516400,
                    "text": "@mwversager @HomeIander_ Terrifier 2 Safe"
                },
                {
                    "id": 1600065569499267000,
                    "text": "Terrifier 2  https://t.co/J1GbInmEE7"
                },
                {
                    "id": 1600065059778023400,
                    "text": "In seinem ambitionierten Sequel lässt Damien Leone seinen Horrorclown auf ein Geschwisterpaar los, das sich mit Hän… https://t.co/4TfyKqr6np"
                },
                {
                    "id": 1600063317070196700,
                    "text": "@catturd2 terrifier 2"
                },
                {
                    "id": 1600063024206782500,
                    "text": "RT @1carolinagirl: Terrifier 2 (2022) #ArtTheClown #LittlePaleGirl🩸🎬 https://t.co/JKok6b10wR"
                }
            ]
        },
        {
            "id": 76600,
            "original_title": "Avatar: The Way of Water",
            "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            "tweets": [
                {
                    "id": 1600132628862365700,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132600118489000,
                    "text": "RT @TheMoviesRain: กิเยร์โม เดล โตโร่ รีวิว Avatar: The Way of Water\n\n\"ความสำเร็จอันน่าทึ่ง Avatar: The Way of Water เต็มไปด้วยทิวทัศน์และ…"
                },
                {
                    "id": 1600132587271655400,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132563346935800,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132561485070300,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132556292169700,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132528610087000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132520729010200,
                    "text": "ปล่อย/ส่งต่อตั๋วหนัง ระบบ 4dx #AvatarTheWayOfWater  \nจัดส่งโดย qr code 3 ที่นั่ง\nAvatar The Way of Water อวตาร วิถี… https://t.co/01PeHX2wTa"
                },
                {
                    "id": 1600132497936769000,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1600132466916102100,
                    "text": "RT @filmfanthailand: 13 ปีที่รอคอย กับภาคต่อหนังทำเงินสูงสุดตลอดกาล เจมส์ คาเมรอน พร้อมยกระดับวงการภาพยนตร์อีกขั้นด้วยเทคนิคซีจีล่าสุดใน #อ…"
                },
                {
                    "id": 1600132448787931100,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132413450920000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132399152922600,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132398725095400,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132336779088000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132317162352600,
                    "text": "RT @PratyushBarik3: Kate Winslet's Outfit for Avatar The Way Of Water looks amazing.\n#KateWinslet #AvatarTheWayOfWater #Avatar https://t.co…"
                },
                {
                    "id": 1600132304097071000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132301559836700,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132295545217000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132273101160400,
                    "text": "RT @20thCenturyID: Desember ini, rasakan pengalaman menonton film dari generasi ke generasi. Tonton trailer terbaru dan rasakan pengalaman…"
                },
                {
                    "id": 1600132225303212000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132221934805000,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1600132213177475000,
                    "text": "RT @WeLoveSF: 🌊13 ปีที่รอคอย กับภาคต่อหนังทำเงินสูงสุดตลอดกาล เจมส์ คาเมรอน พร้อมยกระดับวงการภาพยนตร์อีกขั้น\nด้วยเทคนิคซีจีล่าสุดใน #อวตาร2…"
                },
                {
                    "id": 1600132178918404000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132174803439600,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132174350405600,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132087914193000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132073792376800,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132059758198800,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132040896413700,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132040472813600,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600132006536704000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131999720607700,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1600131997678334000,
                    "text": "#ขายตั๋วหนัง AVATAR the way of water ครับ พอดีว่าจองผิดสถานที่ ลดจากราคาตั๋ว 2 ใบเหลือ 600 ครับ สนใจทักได้เลยครับ… https://t.co/xsl4viZyKn"
                },
                {
                    "id": 1600131920897409000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131853134237700,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131849388687400,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1600131840589070300,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131833379033000,
                    "text": "RT @WeLoveSF: 🌊13 ปีที่รอคอย กับภาคต่อหนังทำเงินสูงสุดตลอดกาล เจมส์ คาเมรอน พร้อมยกระดับวงการภาพยนตร์อีกขั้น\nด้วยเทคนิคซีจีล่าสุดใน #อวตาร2…"
                },
                {
                    "id": 1600131812876906500,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131810541076500,
                    "text": "RT @20thCenturyTH: การต่อสู้ครั้งใหม่ใกล้เริ่มขึ้นแล้ว ฟังเรื่องย่อสั้นๆ ก่อนเตรียมไปผจญภัยด้วยกันใน Avatar: The Way of Water อวตาร: วิถีแ…"
                },
                {
                    "id": 1600131738696822800,
                    "text": "RT @20thCenturyID: Desember ini, rasakan pengalaman menonton film dari generasi ke generasi. Tonton trailer terbaru dan rasakan pengalaman…"
                },
                {
                    "id": 1600131724088049700,
                    "text": "RT @filmfanthailand: 13 ปีที่รอคอย กับภาคต่อหนังทำเงินสูงสุดตลอดกาล เจมส์ คาเมรอน พร้อมยกระดับวงการภาพยนตร์อีกขั้นด้วยเทคนิคซีจีล่าสุดใน #อ…"
                },
                {
                    "id": 1600131695503888400,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131693356064800,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131668546683000,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1600131631469457400,
                    "text": "RT @moviesmusic_th_: The Weeknd จะปล่อยเพลงประกอบหนัง Avatar: The Way of Water ในวันที่ 16 ธันวานี้ค่ะ ส่วนที่บ้านเราหนังจะเข้าโรงวันที่ 14…"
                },
                {
                    "id": 1600131628411412500,
                    "text": "RT @HKSurrey: Before we learn about The Way of Water, how about a James Cameron ranking: \n\n7. True Lies\n6. Avatar\n5. Titanic\n4. The Termina…"
                },
                {
                    "id": 1600131612423118800,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                },
                {
                    "id": 1600131570379391000,
                    "text": "RT @TheMoviesRain: ศิลปิน VFX ประเมินว่าแค่ซีจีฉากนี้ฉากเดียวของ Avatar: The Way of Water มีราคาสูงถึง $100,000 (3.4 ล้านบาท) ซึ่งเป็นเหตุผ…"
                }
            ]
        },
        {
            "id": 676701,
            "original_title": "Tadeo Jones 3: La Tabla Esmeralda",
            "overview": "Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.",
            "tweets": [
                {
                    "id": 1600111825265336300,
                    "text": "Tadeo Jones 3: La Tabla esmeralda (DVD) https://t.co/jrjff2vHKB"
                },
                {
                    "id": 1600111164062457900,
                    "text": "RT @AccionCine: Publicados los ganadores del concurso TADEO JONES 3: LA TABLA ESMERALDA\nEnhorabuena a los agraciados\nhttps://t.co/vmPSIVdvE…"
                },
                {
                    "id": 1600085966743404500,
                    "text": "RT @AccionCine: Publicados los ganadores del concurso TADEO JONES 3: LA TABLA ESMERALDA\nEnhorabuena a los agraciados\nhttps://t.co/vmPSIVdvE…"
                },
                {
                    "id": 1600085328831910000,
                    "text": "***CINE DE NAVIDAD: TADEO JONES 3 “LA TABLA ESMERALDA”***\nMañana miércoles 7 de diciembre, se proyectará gratuitame… https://t.co/px0bsHMBEo"
                },
                {
                    "id": 1600083751697936400,
                    "text": "RT @AccionCine: Publicados los ganadores del concurso TADEO JONES 3: LA TABLA ESMERALDA\nEnhorabuena a los agraciados\nhttps://t.co/vmPSIVdvE…"
                },
                {
                    "id": 1600078404757454800,
                    "text": "Publicados los ganadores del concurso TADEO JONES 3: LA TABLA ESMERALDA\nEnhorabuena a los agraciados… https://t.co/KkKbxnK0u5"
                },
                {
                    "id": 1600066110568558600,
                    "text": "RT @ruedaconrueda: Nos llena de felicidad contaros que:\n\nLaura Galán, jurado de #RuedaConRueda, está nominada al Goya a Mejor Actriz Revela…"
                },
                {
                    "id": 1600053063158571000,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599892494581264400,
                    "text": "RT @thewinnertrends: Tadeo Jones 3: La Tabla esmeralda (DVD) \n#TadeoJones3 #EnriqueGato\n\nhttps://t.co/Y5ex38w3Kz via @amazon"
                },
                {
                    "id": 1599892412800737300,
                    "text": "RT @thewinnertrends: Tadeo Jones 3: La Tabla esmeralda (DVD) \n#TadeoJones3 #EnriqueGato\n\nhttps://t.co/Y5ex38w3Kz via @amazon"
                },
                {
                    "id": 1599842002765377500,
                    "text": "– Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda negra, Los demo… https://t.co/SuMnymmOgM"
                },
                {
                    "id": 1599827661437780000,
                    "text": "🍿🍿🍿 TADEO JONES 3. LA TABLA ESMERALDA 🍿🍿🍿\n\n🗓 05/12/2022 🗓\n\n⏰ 18:00 ➡ https://t.co/KlvKtrerr0 https://t.co/gEEylxwDnR"
                },
                {
                    "id": 1599815118149353500,
                    "text": "Tadeo Jones 3: La Tabla esmeralda (DVD) https://t.co/jrjff2vHKB"
                },
                {
                    "id": 1599763017901613000,
                    "text": "🎞Dios mío, ¿pero qué nos has hecho?\n🎞La bestia\n🎞Por los pelos. Una historia de autoestima.\n🎞Los perdonados.\n🎞Thor:… https://t.co/6RmZQB7S4e"
                },
                {
                    "id": 1599740925315801000,
                    "text": "RT @entupantalla_: ¡#TadeoJones3 llega en formato Blu-ray! Os hablamos un poco de esta edición. @divisahomevideo https://t.co/udnDjqxVGF"
                },
                {
                    "id": 1599739231076769800,
                    "text": "¡#TadeoJones3 llega en formato Blu-ray! Os hablamos un poco de esta edición. @divisahomevideo https://t.co/udnDjqxVGF"
                },
                {
                    "id": 1599720320490840000,
                    "text": "Mejor película de animación\nBlack Is Beltza II: Ainhoa (Fermín Muguruza)\nInspector Sun y la maldición de la viuda n… https://t.co/oVpkUOn7ZK"
                },
                {
                    "id": 1599709424867844000,
                    "text": "Tadeo Jones 3: La Tabla esmeralda (Blu-ray) https://t.co/GnPQrvGlQ3"
                },
                {
                    "id": 1599569709627715600,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599535776085467100,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599523895442256000,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599522868584292400,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599493431520215000,
                    "text": "@orange_es @GoogleES Tadeo Jones 3: La Tabla Esmeralda #GoogleChromecastOrange porque mi hijo es mega fan de la sag… https://t.co/PW5jNwWuiS"
                },
                {
                    "id": 1599492205332529200,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599468687248932900,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599468589664604200,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599452207950475300,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599448762275221500,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599443847217553400,
                    "text": "🍿🍿🍿 TADEO JONES 3. LA TABLA ESMERALDA 🍿🍿🍿\n\n🗓 04/12/2022 🗓\n\n⏰ 18:00 ➡ https://t.co/qU0QWvuCSP https://t.co/esBdLGofN4"
                },
                {
                    "id": 1599422532645523500,
                    "text": "Tadeo Jones 3: La Tabla esmeralda (DVD) https://t.co/jrjff2vHKB"
                },
                {
                    "id": 1599407432811298800,
                    "text": "Tadeo Jones 3: La Tabla esmeralda (Blu-ray) https://t.co/GnPQrvGlQ3"
                },
                {
                    "id": 1599394143058333700,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599393259868258300,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599359581905653800,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599347540112994300,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599317203886936000,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599233215423602700,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599228658732130300,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599197720022896600,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599195185103396900,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599193319166263300,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Película de Animación: Black is Beltza II: Ainhoa, Inspector Sun y la maldición de la viuda ne…"
                },
                {
                    "id": 1599179375379107800,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599178759990493200,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599177515917987800,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599165088958587000,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599140428300722200,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599138404460990500,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599133070883688400,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599119438350930000,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                },
                {
                    "id": 1599100948852244500,
                    "text": "RT @MoobysEs: #SORTEO #CONCURSO \n\nLlévate uno de los 3 packs (película en Blu-ray + Juego #PS5) que sorteamos de #TadeoJones3 #LaTablaEsmer…"
                }
            ]
        },
        {
            "id": 361743,
            "original_title": "Top Gun: Maverick",
            "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
            "tweets": [
                {
                    "id": 1600132608473460700,
                    "text": "RT @topgunarchive: Joseph Kosinski and Jerry Bruckheimer on the set of Top Gun: Maverick https://t.co/vJt7gdf6dP"
                },
                {
                    "id": 1600132532321779700,
                    "text": "It needs to be said … Top Gun: Maverick is an average movie"
                },
                {
                    "id": 1600132511992262700,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600132434686750700,
                    "text": "@greeneggs187 The same people who counted out Top Gun: Maverick are doing it again for Indy.\n\nWhen are they going t… https://t.co/3TZs5TI9X1"
                },
                {
                    "id": 1600132418387644400,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600132399534248000,
                    "text": "RT @perfechemical: ทำไมนสด top gun maverick มีโมเม้นกับทอม ครูซ ฮาๆทั้งนั้นเลย5555555\n\nเกลน : เต้นแบทเทิลกับทอมในงานวันเกิดครบ60ปี ทอมเต้น…"
                },
                {
                    "id": 1600132385718141000,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600132324968042500,
                    "text": "@Sophia_Nyx Top Gun Maverick"
                },
                {
                    "id": 1600132294953816000,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600132175948484600,
                    "text": "@catturd2 Top Gun: Maverick"
                },
                {
                    "id": 1600132057258029000,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600132046579732500,
                    "text": "RT @The__Samaritan: A True Star that arrived to revive Hollywood Cinemaaa !!\nTop Gun Maverick 🍻 https://t.co/FDTvyLI9xG"
                },
                {
                    "id": 1600132015839678500,
                    "text": "Top gun maverickは、一作目ほどの衝撃はなかったけど、それは私が年をとってしまったからだと信じたい。"
                },
                {
                    "id": 1600131838839730200,
                    "text": "RT @jeremyndavis: @catturd2 Top Gun: Maverick."
                },
                {
                    "id": 1600131459615891500,
                    "text": "@IGN Unfortunately all the DC fans will pick The Batman. Top Gun Maverick was by far the most enjoyable film this year."
                },
                {
                    "id": 1600131419665072000,
                    "text": "Top Gun: Maverick ( Amazon 5.99USD ) JAJJZYR\n\nhttps://t.co/MVfZhOW6us\n\n#example #accepting #fall #wynnewood #vibe… https://t.co/Q7bvCWCgx9"
                },
                {
                    "id": 1600131385523863600,
                    "text": "RT @The__Samaritan: A True Star that arrived to revive Hollywood Cinemaaa !!\nTop Gun Maverick 🍻 https://t.co/FDTvyLI9xG"
                },
                {
                    "id": 1600131244112896000,
                    "text": "@moviemenfes 1. Doctor Strange in the Multiverse of Madness \n2. Fantastic Beasts: The Secrets of Dumbledore \n3. Top… https://t.co/jHcFnr18Nc"
                },
                {
                    "id": 1600131223505903600,
                    "text": "@Sophia_Nyx Top Gun Maverick.  I thought she looked stunning."
                },
                {
                    "id": 1600131174319341600,
                    "text": "@catturd2 Top Gun Maverick is realllllly close tho"
                },
                {
                    "id": 1600130856701505500,
                    "text": "RT @The__Samaritan: A True Star that arrived to revive Hollywood Cinemaaa !!\nTop Gun Maverick 🍻 https://t.co/FDTvyLI9xG"
                },
                {
                    "id": 1600130816574488600,
                    "text": "RT @StunninShow: Selon Variety Top Cruise est l’acteur le mieux payé de l’année 2022, il aurait touché 100 Millions de dollars notamment gr…"
                },
                {
                    "id": 1600130496742461400,
                    "text": "RT @The__Samaritan: A True Star that arrived to revive Hollywood Cinemaaa !!\nTop Gun Maverick 🍻 https://t.co/FDTvyLI9xG"
                },
                {
                    "id": 1600130401141510100,
                    "text": "RT @StunninShow: Selon Variety Top Cruise est l’acteur le mieux payé de l’année 2022, il aurait touché 100 Millions de dollars notamment gr…"
                },
                {
                    "id": 1600130359290523600,
                    "text": "A True Star that arrived to revive Hollywood Cinemaaa !!\nTop Gun Maverick 🍻 https://t.co/G5HvC7tJ5Q https://t.co/FDTvyLI9xG"
                },
                {
                    "id": 1600130322884075500,
                    "text": "Estrenos de Star+ en diciembre: “Mira cómo corren”, “Top Gun: Maverick” y “Amsterdam” entre los más destacados https://t.co/b1q9oqddWU"
                },
                {
                    "id": 1600130322464579600,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600130296518627300,
                    "text": "El jueves 22 se estrena en Star+ el film \"Top Gun Maverick\".\nHay otros 3 estrenos en Star+ que me interesan (no sé… https://t.co/dXnW4976Xy"
                },
                {
                    "id": 1600130295595868200,
                    "text": "@theBurk3nator Top 5 favs for me\n-- Everything Everywhere All At Once\n-- Bullet Train\n-- The Northman\n-- Top Gun: Maverick\n-- RRR"
                },
                {
                    "id": 1600130095951200300,
                    "text": "@catturd2 Top Gun Maverick is better than the original ."
                },
                {
                    "id": 1600129872906449000,
                    "text": "RT @topgunarchive: Joseph Kosinski and Jerry Bruckheimer on the set of Top Gun: Maverick https://t.co/vJt7gdf6dP"
                },
                {
                    "id": 1600129804275449900,
                    "text": "RT @Skydance: \"Top Gun: Maverick restores your faith in the magic of movies.\" Experience it again – In theatres December 2. Get #TopGun: Ma…"
                },
                {
                    "id": 1600129726797910000,
                    "text": "RT @IGN: With Top Gun Maverick and Glass Onion hitting streaming this month, there's a lot of great shows and movies to watch soon! https:/…"
                },
                {
                    "id": 1600129697085476900,
                    "text": "@catturd2 Top Gun: Maverick? Not only is it a richer sequel, but can stand on its own as a movie. It’s the best movie of 2022!"
                },
                {
                    "id": 1600129679339421700,
                    "text": "@catturd2 Top gun maverick would slap your face"
                },
                {
                    "id": 1600129659609313300,
                    "text": "@catturd2 Godfather II, Dark Knight, Terminator 2, Rocky II, and Top Gun: Maverick come to mind. But I do understand your point."
                },
                {
                    "id": 1600129605914198000,
                    "text": "Top Gun : Maverick https://t.co/bKTVXI7yPt https://t.co/YuuJngp8Qq"
                },
                {
                    "id": 1600129432437821400,
                    "text": "RT @llilitia11: 🔔ชาวด้อม TGM เตรียมรับเควส วันที่ 8-13 ธันวานี้กับการรีเทิร์นของ Top Gun Maverick (อีกแล้ว) ในระบบ Screen X ที่พารากอน และ…"
                },
                {
                    "id": 1600129181194469400,
                    "text": "RT @IGN: From The Batman to Top Gun: Maverick, to RRR, Nope, and Everything Everywhere All At Once, these films scored nominations for IGN’…"
                },
                {
                    "id": 1600129174231883800,
                    "text": "@catturd2 Not \"Top Gun: Maverick?\""
                },
                {
                    "id": 1600129141763809300,
                    "text": "@MaldiniNaty Top gun Maverick, Tom cruise salva el cine de acción cada año https://t.co/4OGNgBDY2c"
                },
                {
                    "id": 1600129128266535000,
                    "text": "RT @ATLFilmCritics: The 2022 Atlanta Film Critics Circle Awards   \n\nBest Stunt Work:\nTOP GUN: MAVERICK \n\n#AFCC  #AFCC2022Awards  #TopGun #T…"
                },
                {
                    "id": 1600129114228363300,
                    "text": "Estrenos de Star+ en diciembre: “Mira cómo corren”, “Top Gun: Maverick” y “Amsterdam” entre los más destacados https://t.co/6saRReLUEy"
                },
                {
                    "id": 1600129094103941000,
                    "text": "RT @CINEMA505: Os melhores filmes do ano, segundo a Empire Magazine:\n\n#1. Everything Everywhere All at Once\n#2. Top Gun: Maverick\n#3. The B…"
                },
                {
                    "id": 1600129089255313400,
                    "text": "RT @ATLFilmCritics: The 2022 Atlanta Film Critics Circle Awards  \n\nBest Cinematography:\nClaudio Miranda - TOP GUN: MAVERICK   \n\n#AFCC  #AFC…"
                },
                {
                    "id": 1600129007009165300,
                    "text": "Selon Variety Top Cruise est l’acteur le mieux payé de l’année 2022, il aurait touché 100 Millions de dollars notam… https://t.co/JQkgYtdL7t"
                },
                {
                    "id": 1600128912457011200,
                    "text": "@catturd2 Top gun Maverick"
                },
                {
                    "id": 1600128778633625600,
                    "text": "RT @ATLFilmCritics: The 2022 Atlanta Film Critics Circle Awards   \n\nBest Stunt Work:\nTOP GUN: MAVERICK \n\n#AFCC  #AFCC2022Awards  #TopGun #T…"
                },
                {
                    "id": 1600128777342058500,
                    "text": "https://t.co/mjvgaBDeuC @elonmusk @muskQu0tes @EvasTeslaSPlaid @mayemusk @MuskUniversity @MuskKnowledge @VishnuNDTV… https://t.co/efBRIFqakk"
                },
                {
                    "id": 1600128735205736400,
                    "text": "RT @topgunarchive: Joseph Kosinski and Jerry Bruckheimer on the set of Top Gun: Maverick https://t.co/vJt7gdf6dP"
                }
            ]
        },
        {
            "id": 593643,
            "original_title": "The Menu",
            "overview": "A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
            "tweets": [
                {
                    "id": 1600132612491595800,
                    "text": "This is great. What’s on the menu tonight Chef? https://t.co/3eIreRJ755"
                },
                {
                    "id": 1600132596754657300,
                    "text": "UPDATED: Dining Cars reintroduced on CNR Sleeper Trains to Chiang Mai, Ubon Ratchathani, Hat Yai and Nong Khai. Her… https://t.co/ONxu79rSoj"
                },
                {
                    "id": 1600132596637216800,
                    "text": "Spaghetti was on the menu for tonight but the weather is screaming gumbo. 🫠"
                },
                {
                    "id": 1600132591985664000,
                    "text": "RT @berkeleygfx: Look ma, no hamburger menu in mobile layout. Just show the whole thing. All the time. It's really useful &amp; there is absolu…"
                },
                {
                    "id": 1600132530241343500,
                    "text": "@BungieHelp why would you start maintenance 15 minutes early? I won my flawless game and didn't get to go to the li… https://t.co/4DsOoI44j5"
                },
                {
                    "id": 1600132482484998100,
                    "text": "RT @DavidScottEvan1: Homemade meatballs garlic mashed potatoes and turnip, gravy. Rice pudding homemade ginger cookies. That was the menu f…"
                },
                {
                    "id": 1600132414294184000,
                    "text": "@Mawra_shah1 Hello!We are sorry for driver's unprofessional behavior. Feedback or complaints can be left in the tri… https://t.co/omkkdLzZef"
                },
                {
                    "id": 1600132368647409700,
                    "text": "RT @HaitianDvorce: looks like meat’s back on the menu boys! https://t.co/JBfXP5lZrE"
                },
                {
                    "id": 1600132334531268600,
                    "text": "@azizah_uwu I did. They did not make it to the menu this Oct i was sad"
                },
                {
                    "id": 1600132256328204300,
                    "text": "Busia Greater Lions set to continue their recent good form while title contenders KCCA and Prisons will hope to bru… https://t.co/n3OKTCPEoB"
                },
                {
                    "id": 1600132251299086300,
                    "text": "queria tanto assistir the menu logo"
                },
                {
                    "id": 1600132249474764800,
                    "text": "The holiday season doesn't have to break the bank. Follow these budget-friendly tips from #AmericaSaves.\n\nOur favor… https://t.co/fDuwYdM8RG"
                },
                {
                    "id": 1600132237617266700,
                    "text": "@Chuck_Paone Lots of people saying this. But if it's so good, why's it never on the menu of any good restaurants?"
                },
                {
                    "id": 1600132236657176600,
                    "text": "@SpacewaysTravel @StevenR58211262 @thewoman1211 @washingtonpost Thats not true.\n\nMany burger and bbq joints have ve… https://t.co/O2ZGXHw4Tc"
                },
                {
                    "id": 1600132150828769300,
                    "text": "RT @TaylorFreezerMI: Every season is fried chicken season!  There is nothing better than the smell and that crispy crunch!  If you’re looki…"
                },
                {
                    "id": 1600132125738442800,
                    "text": "@LatchamGinger Nice I have one it’s very good, lean the menu there’s a couple of settings that need to change. I fo… https://t.co/XdlqYX4I3D"
                },
                {
                    "id": 1600132113575313400,
                    "text": "RT @POWERofICU: We are in the final weeks of the semester. Now more than ever, students need to finish strong. What does your menu of suppo…"
                },
                {
                    "id": 1600132046978179000,
                    "text": "RT @ULuIQ12: Another thing you might have missed : the seed changes the tagline you get in the menu.\nLots off weird capitalization, ellipsi…"
                },
                {
                    "id": 1600131998575513600,
                    "text": "@jordibruin I was able to right click and copy/paste but using the keyboard as I would normally wasn't working.\n\nTh… https://t.co/Wg53dCfOZo"
                },
                {
                    "id": 1600131992498032600,
                    "text": "This Taurus Moon is particularly laced with the need for food by like x100 😂 I walked into my kitchen with a whole… https://t.co/4seLP3FBxw"
                },
                {
                    "id": 1600131953029615600,
                    "text": "RT @gurtgd: GEOMETRY DASH GD UPDATE 2.2 THE MAP MENU LEAKS LEAKED NEW AREAS SECRET HIDDEN https://t.co/AJ8ZN2NYT4"
                },
                {
                    "id": 1600131929147252700,
                    "text": "@Lonelywriterx1 Why's it never on the menu of any good restaurant?"
                },
                {
                    "id": 1600131799732347000,
                    "text": "GEOMETRY DASH GD UPDATE 2.2 THE MAP MENU LEAKS LEAKED NEW AREAS SECRET HIDDEN https://t.co/AJ8ZN2NYT4"
                },
                {
                    "id": 1600131735836299300,
                    "text": "@kylie_crc *gives a big smile*\nGlad you liked it...that was actually my idea for the secret menu...I am...really happy right now"
                },
                {
                    "id": 1600131711710376000,
                    "text": "RT @hamhada_: the menu - most “wtf did i just watch” movie ever. loved it."
                },
                {
                    "id": 1600131698020130800,
                    "text": "Having a holiday party? Try one of our assorted mini &amp; macaron trays! Special holiday menu online,… https://t.co/coPfBeosHN"
                },
                {
                    "id": 1600131697495793700,
                    "text": "Juice by the Sea is offering a holiday menu - order by December 16th for pickup on the 23rd. Call 508-338-2920 to o… https://t.co/2jEVmwmA9u"
                },
                {
                    "id": 1600131583289090000,
                    "text": "RT @TastyBonesNFT: 👨‍🍳 Tasty Bones Cookbook Round 5! \nTasty Chefs must select a minimum of 2 food traits from the menu to create a unique d…"
                },
                {
                    "id": 1600131544080842800,
                    "text": "RT @HoneyIShrunkJG2: \"Ghostbusters\" was one of the first blockbusters issued on DVD and by demonstrating the full capabilities of the inter…"
                },
                {
                    "id": 1600131495557222400,
                    "text": "RT @rykelongest: ⁦@DukeELPC⁩’s Michelle Nowlin went to Pocosin Lakes over the past weekend to view wildlife. This picture was captured over…"
                },
                {
                    "id": 1600131490821480400,
                    "text": "RT @FinesseEness: I hate going to restaurants with no pictures on their menu. Am I supposed to imagine what the plate supposed to look like…"
                },
                {
                    "id": 1600131487697105000,
                    "text": "RT @D_Kumii: Fujimoto likes The Menu https://t.co/SIZ4enBE9E"
                },
                {
                    "id": 1600131445275562000,
                    "text": "RT @HoneyIShrunkJG2: \"Ghostbusters\" was one of the first blockbusters issued on DVD and by demonstrating the full capabilities of the inter…"
                },
                {
                    "id": 1600131367584440300,
                    "text": "RT @minoc2: @gowacab @the_nerd_skull I guess \"swerf and terf\" is back on the menu, I see."
                },
                {
                    "id": 1600131350333227000,
                    "text": "RT @SonySantaMonica: ⚒️ Patch Notes [v 03.00] now live! ⚒️\n\n#GodofWarRagnarok now has Photo Mode! \n\nYou can access it by pressing the Squar…"
                },
                {
                    "id": 1600131263653814300,
                    "text": "@DennisLeviticus Why is it never on the menu at any decent restaurant?"
                },
                {
                    "id": 1600131251679002600,
                    "text": "142 - The Menu\n\no final meio meh não apaga a tensão que o filme te passa, é muito boa sensação de não saber o que p… https://t.co/wQLCQVOnyF"
                },
                {
                    "id": 1600131217210445800,
                    "text": "Our menu for the kaduna market trade fair 😋 \nDo stop by our stall and patronize us😁\nSee you guys there ❤️ https://t.co/gelS38B3Sd"
                },
                {
                    "id": 1600131121089486800,
                    "text": "6️⃣ - Store Set Up Conclusion 🏬\n\nBy this point, we should have the following:\n\n👉 A clean, complete-looking home pag… https://t.co/lkYdPEipaf"
                },
                {
                    "id": 1600131086574837800,
                    "text": "@2sinkz @Inferno986retur @DirtDisrespect @NoContextBrits @AldiUK I can't speak Spanish so would probably just point… https://t.co/dusbRvOj7E"
                },
                {
                    "id": 1600131041204703200,
                    "text": "RT @HideoutCafeByo: Mushroom - melt Beefburger... The best in town.. Call or app us on 0778142838 for bookings and menu.\nFREE PARKING AVAIL…"
                },
                {
                    "id": 1600130993876107300,
                    "text": "RT @876DANIELLE: With lash extensions, ur makeup routine is quick &amp; easy! You’re out the door in no time. My client did her makeup in under…"
                },
                {
                    "id": 1600130985009459200,
                    "text": "RT @876DANIELLE: Book here: https://t.co/cJMhAgIeTu https://t.co/ewi3KB8wAv"
                },
                {
                    "id": 1600130945931088000,
                    "text": "Gila film the menu, film thriler terbaik menurut gue"
                },
                {
                    "id": 1600130924372701200,
                    "text": "@KevinTober94 Maybe the restaurant doesn’t serve Mac and Cheese to adults because it’s on the kids menu, or they do… https://t.co/aNcn9tqzOD"
                },
                {
                    "id": 1600130898396971000,
                    "text": "RT @OPENPhysEd: OPEN is the worldwide leader in #physicaleducation professional development! Check out our PD menu at https://t.co/5br7siln…"
                },
                {
                    "id": 1600130855975809000,
                    "text": "RT @876DANIELLE: Book “Megavolume Set” w/ The Céleste Studio\n\nBook here: https://t.co/cJMhAgq5Fm https://t.co/1ZhNGbwAUG"
                },
                {
                    "id": 1600130846673211400,
                    "text": "RT @TastyBonesNFT: 👨‍🍳 Tasty Bones Cookbook Round 5! \nTasty Chefs must select a minimum of 2 food traits from the menu to create a unique d…"
                },
                {
                    "id": 1600130811067437000,
                    "text": "@tjbierschbach To make turkey as moist as other meats takes a lot more prep and time.\n\nI've never seen turkey on th… https://t.co/If23xajD0i"
                },
                {
                    "id": 1600130795049406500,
                    "text": "RT @876DANIELLE: With lash extensions, ur makeup routine is quick &amp; easy! You’re out the door in no time. My client did her makeup in under…"
                }
            ]
        },
        {
            "id": 848058,
            "original_title": "Cerdita",
            "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
            "tweets": [
                {
                    "id": 1600128771222212600,
                    "text": "@mylifejdd @vivianajd_ La ridícula es viviana que ayer anduvo acosando a una amiga, que ahora se aguante la cerdita… https://t.co/AmQsmhlVzl"
                },
                {
                    "id": 1600128734257766400,
                    "text": "Vu CERDITA (2022) et c'était très bon.\nChronique à venir sur le site. https://t.co/ibhC1NNrIS"
                },
                {
                    "id": 1600127946999894000,
                    "text": "@MaldiniNaty Cerdita"
                },
                {
                    "id": 1600126678256087000,
                    "text": "RT @cristinaenr_: ¿Podemos hablar del enorme año de Carmen Machi? \n\n• La voluntaria\n• Cerdita\n• Llenos de gracia\n• Mañana es hoy\n• Rainbow…"
                },
                {
                    "id": 1600112830254022700,
                    "text": "#NovedadNavideña   \nUn robo en la cocina del los Watson da origen a una nueva aventura de la cerdita Wendy en la qu… https://t.co/nOYcNZSCxs"
                },
                {
                    "id": 1600103816904380400,
                    "text": "RT @cdelamor_: Nominaciones de los @PremiosGoya : \n\n17 “As bestas”\n16 “Modelo 77”\n11 “Alcarràs”5 Lobitos”\n6 “Cerdita”\n5 “En los márgenes”"
                },
                {
                    "id": 1600093290761572400,
                    "text": "lo del cine español este año es magia:\nCerdita, As bestas, Cinco lobitos, Alcarras, Los márgenes, Un año una noche…"
                },
                {
                    "id": 1600090386508103700,
                    "text": "Linda cerdita que me encontré paseando por Gondomar\nhttps://t.co/EmW4HmA8Us \n.\n.\n#barbierika #barbierikab #Portugal… https://t.co/ox3Z8808LY"
                },
                {
                    "id": 1600088244967702500,
                    "text": "RT @9aflam: Piggy (Cerdita) 2022\nتتعرض مراهقة تعاني من زيادة الوزن للتنمر من قبل زمرة من الفتيات الحسناوات بجانب حمام السباحة أثناء قضاء ال…"
                },
                {
                    "id": 1600085443562811400,
                    "text": "@maariadess 🇪🇸2-1🇲🇦"
                },
                {
                    "id": 1600081146116599800,
                    "text": "RT @Burgos_CF: ¡Claro que sí! ✌️\n\n#EstoVaEnSerio https://t.co/yh1LqJKlra"
                },
                {
                    "id": 1600081074041651200,
                    "text": "RT @LevanteUD: Al habla 🗣 @jonimonty10 2️⃣0️⃣\n\n“Hay que darle valor a lo que está haciendo el equipo. Es importante reforzarse con victoria…"
                },
                {
                    "id": 1600078735322931200,
                    "text": "138. Cerdita\nThriller de terror cañí, donde el eje principal es el bullying tratándolo de una manera bastante atípi… https://t.co/ipsuThX1nA"
                },
                {
                    "id": 1600070490718015500,
                    "text": "A 5h de que mi salud mental dependa de 11 tios dándole a una pelota"
                },
                {
                    "id": 1600070306495746000,
                    "text": "QUE HOY JUEGA ESPAÑAA MI GENTE 🇪🇸🇪🇸🇪🇸"
                },
                {
                    "id": 1600053375147470800,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Actriz Revelación:  Ana Otín (Alcarràs) Laura Galán (Cerdita), Luna Pamies (El agua), Valèria…"
                },
                {
                    "id": 1600053347792330800,
                    "text": "RT @PremiosGoya: #Goya2023 Nominaciones Mejor Dirección de Producción: Alcarràs, As bestas, Cerdita, Cinco lobitos, Modelo 77."
                },
                {
                    "id": 1600053338069942300,
                    "text": "RT @PremiosGoya: #Goya2023 Nominaciones a Mejor Maquillaje y Peluquería: As bestas, Cerdita, La piedad, Los renglones torcidos de Dios y Mo…"
                },
                {
                    "id": 1600053196268789800,
                    "text": "RT @PremiosGoya: #Goya2023 Nominadas a Mejor Actriz de Reparto: Marie Colomb (As bestas), Carmen Machi (Cerdita), Susi Sánchez (Cinco Lobit…"
                },
                {
                    "id": 1600053140245467100,
                    "text": "RT @PremiosGoya: #Goya2023 Nominaciones Mejor Guion Adaptado: Carlota Pereda (Cerdita), Paul Urkijo Alijo (Irati), Guillem Clua y Oriol Pau…"
                },
                {
                    "id": 1600052952496230400,
                    "text": "RT @PremiosGoya: #Goya2023 Nominaciones Mejor Dirección Novel: Carlota Pereda (Cerdita), Alauda Ruiz de Azúa (Cinco lobitos), Elena López R…"
                },
                {
                    "id": 1600036059185700900,
                    "text": "Cerdita (Piggy) https://t.co/C0Yx5hZBT1 via @LuciaPatrizi"
                },
                {
                    "id": 1600019026658345000,
                    "text": "Mi cerdita pensara que me mori?"
                },
                {
                    "id": 1600011414529544200,
                    "text": "@Norberto_ll12 junior h esta mas guapo, no lo compares con esa cerdita"
                },
                {
                    "id": 1599972232616214500,
                    "text": "Hahaha. Se le va el ojo a la buchona. La Pegui tan cerdita cómo siempre !!! https://t.co/KE6w6TLK3A"
                },
                {
                    "id": 1599957075559215000,
                    "text": "@sanemaydin18 Una rata que se parece a la cerdita peggy y se cree aquí yoqse"
                },
                {
                    "id": 1599946838194663400,
                    "text": "Mi hija es fans de la pepa \nHoy me dijo que me parezco a la mamá cerdita por la pancita JAJA\nLo dijo con tanto amor… https://t.co/OXvST4vxhM"
                },
                {
                    "id": 1599944336610730000,
                    "text": "@Im_Gyusitouwu Cómo peppa La cerdita pero en masculino 😍"
                }
            ]
        },
        {
            "id": 820067,
            "original_title": "映画 五等分の花嫁",
            "overview": "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?",
            "tweets": [
                {
                    "id": 1600132093823983600,
                    "text": "RT @gotoubun_goods: eStrean storeにて販売中です！\n\n映画「五等分の花嫁」チップス\n\n◎価格：242円(税込)\n\n▼詳しくはこちら↓\nhttps://t.co/2o0yBUFoYe https://t.co/mqndPS69IK"
                },
                {
                    "id": 1600128378023067600,
                    "text": "映画「五等分の花嫁」の円盤\n\n発売日2022年12月21日\n\n購入先で特典が違うよ～\n\n楽天\n⇒https://t.co/3Crwj9OFer\n\nアマゾン\n⇒https://t.co/ayKcH7Pu5C\n\n #五等分の花嫁… https://t.co/J7NEtA4vr6"
                },
                {
                    "id": 1600127795849748500,
                    "text": "映画五等分の花嫁発売まであと3週間切ってる！！"
                },
                {
                    "id": 1600127729965285400,
                    "text": "https://t.co/D2zsfzVC98\n一番くじ 映画 五等分の花嫁 ~幸せの結び~ フィギュア イラストボード ちょこのっこ フィギュア フレームスタンド ラバーストラップ フルコンプリート 30点＋ラストワン賞⛄⛄… https://t.co/WOY45I7iti"
                },
                {
                    "id": 1600126383094923300,
                    "text": "RT @yamada091126: 交換探しています！\n映画 五等分の花嫁 一番くじ 祝福の門出  アクスタ\n\n譲\n描き下ろしフレームスタンド 三玖、四葉、五月\nK賞 キャンバスボード 一花、二乃、三玖、四葉\nブロマイド 三玖\n缶バッジ 一花、二乃、三玖、五月\nきゃらっとくじ…"
                },
                {
                    "id": 1600125580136968200,
                    "text": "ホビーストックで取扱中！\n\n映画 五等分の花嫁 神獣 アクリルスタンド 中野五月                     ホビーストックで2023年1月発売\nhttps://t.co/IvOtYDMk0q\n\n#五等分の花嫁 https://t.co/G5vNoieC3s"
                },
                {
                    "id": 1600122917513490400,
                    "text": "5月\n友人と映画五等分の花嫁を見に行った時の写真。\n5人分の等身大パネルが設置してあり、映画始まる前からテンション上がりまくりでした(*^^*) https://t.co/K47InapG7c"
                },
                {
                    "id": 1600122869530316800,
                    "text": "RT @gotoubun_goods: 映画「五等分の花嫁」\n\"Blu-ray&amp;DVD\"\n各店舗特典デザインが公開！✨\n\n2022年12月21日発売です♪\n\n▼予約はこちら↓\nhttps://t.co/dNWh98F8WE\n\n#五等分の花嫁 https://t.co/GW90a…"
                },
                {
                    "id": 1600122842196021200,
                    "text": "RT @gotoubun_goods: ／\n　映画「五等分の花嫁」Blu-ray&amp;DVD\n　\"12/21(水)\"に発売決定です✨\n＼\n\n【購入特典】\n・コミックス「第0巻」フルカラー版\n・春場ねぎ先生描き下ろしミニ色紙\n・スペシャルイベントチケット優先販売申込券など\n\n特装版に…"
                },
                {
                    "id": 1600121472273461200,
                    "text": "＜【Amazon限定】映画「五等分の花嫁」特装版Blu-ray(三方背収納ケース(描き下ろし絵柄)+メガジャケ(描き下ろし絵柄)+早期予約特典:オリジナルポストカード付) [Blu-ray]/￥10,450 /神保昌登 監督  ＞… https://t.co/zfIhIG2viQ"
                },
                {
                    "id": 1600120015352606700,
                    "text": "やっぱり五等分の花嫁は最強。よくまとまった映画だった…"
                },
                {
                    "id": 1600119778915803100,
                    "text": "RT @yamada091126: 求\n新宿マルイアネックス kawaii 特典ブロマイド（ハートを付けている物）\nSNS風クリアスナップ、ポストカード 地雷系\n\n交換or買取にて（1枚150-200円）\n映画 五等分の花嫁 渋谷 ポップアップストア スノーメイド ポストカード…"
                },
                {
                    "id": 1600119604512141300,
                    "text": "RT @TV10006342: 【映画五等分の花嫁】\n神獣デザイン登場！！\n最新グッズ情報！！ 変わったデザインなので好き好みが別れそうだね😋\n動画➡️https://t.co/NeBXVLzPHD @YouTubeより https://t.co/18beBayzDo"
                },
                {
                    "id": 1600119025564254200,
                    "text": "交換探しています！\n映画 五等分の花嫁 一番くじ 祝福の門出  アクスタ\n\n譲\n描き下ろしフレームスタンド 三玖、四葉、五月\nK賞 キャンバスボード 一花、二乃、三玖、四葉\nブロマイド 三玖\n缶バッジ 一花、二乃、三玖、五月\nきゃ… https://t.co/3LmfzjRFFO"
                },
                {
                    "id": 1600118519793754000,
                    "text": "【限定商品】\n\n映画「五等分の花嫁」特装版【Blu-ray】\n\n価格： 8046円\n\n#春場ねぎ\n\n12/6 22:00現在https://t.co/HsnnJbEPr4"
                },
                {
                    "id": 1600118518711996400,
                    "text": "【限定商品】\n\n【楽天ブックス限定先着特典+早期予約特典】映画「五等分の花嫁」特装版【Blu-ray】(B1布ポスター＋76mm缶バッジ5個セット+オリジナルポストカード)\n\n価格： 10450円\n\n12/6 22:00現在https://t.co/zHCFfn0IOt"
                },
                {
                    "id": 1600118236707975200,
                    "text": "RT @gotoubun_goods: セブンネットショッピングにて販売中！\n\n映画「五等分の花嫁」 \n描き下ろしグッズ\n\n・A4クリアファイル5枚セット\n・アクリルスタンド\n\n▼詳細はこちら↓\nhttps://t.co/P6KuAmwwh8 https://t.co/GdQp…"
                },
                {
                    "id": 1600118224846262300,
                    "text": "ヴァイスシュヴァルツ ブースターパック 映画「五等分の花嫁」 BOX https://t.co/qTAgg7qFsm"
                },
                {
                    "id": 1600117358642991000,
                    "text": "楽天市場\nRakuten\nCD DVD\nオリジナル特典 アニメ 映画 五等分の花嫁 Blu-ray ［Z-13583］20221221\nhttps://t.co/oW3OoH1pgR"
                },
                {
                    "id": 1600115800333246500,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600115669458378800,
                    "text": "オタクの為の通信販売〜映画 五等分の花嫁 グッズ紹介編〜 https://t.co/rpPWpTxnhK @YouTubeより\n\n生配信ありがとうございました😭\n五等分の花嫁アイテムに着いてたっぷり語っています。\nアーカイブはこち… https://t.co/tseDZMpcvs"
                },
                {
                    "id": 1600115648406831000,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600115468190089200,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600115220718186500,
                    "text": "RT @TV10006342: 【映画五等分の花嫁】\n神獣デザイン登場！！\n最新グッズ情報！！ 変わったデザインなので好き好みが別れそうだね😋\n動画➡️https://t.co/NeBXVLzPHD @YouTubeより https://t.co/18beBayzDo"
                },
                {
                    "id": 1600114667581362200,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600114586644254700,
                    "text": "RT @RinRin12724823: 【映画記念MAD】五等分の花嫁×Pale Blue【あなたを待っています】 https://t.co/T7D1HfQT2z @YouTubeより\n\n新しくフォロワーさんになってれた方が作った\n素晴らしいMAD動画✨\n\n皆様も是非ご視聴して…"
                },
                {
                    "id": 1600114331194392600,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600113975018270700,
                    "text": "RT @TV10006342: 【映画五等分の花嫁】\n神獣デザイン登場！！\n最新グッズ情報！！ 変わったデザインなので好き好みが別れそうだね😋\n動画➡️https://t.co/NeBXVLzPHD @YouTubeより https://t.co/18beBayzDo"
                },
                {
                    "id": 1600113696176767000,
                    "text": "6月  五等分の花嫁の映画見に行った🎥\n\n二乃が1番好きです二乃エンドどこ"
                },
                {
                    "id": 1600113648672075800,
                    "text": "RT @gotoubun_goods: 2023年4月上旬発売予定\n\nAMNIBUSにて予約受付中！！\n\n映画「五等分の花嫁」描き下ろしイラスト スノーメイドver. トレーディング缶バッジ\n\n▼詳しくはこちら↓\nhttps://t.co/VtFADVm7tc https://…"
                },
                {
                    "id": 1600113302956568600,
                    "text": "RT @gotoubun_goods: eStrean storeにて販売中です！\n\n映画「五等分の花嫁」チップス\n\n◎価格：242円(税込)\n\n▼詳しくはこちら↓\nhttps://t.co/2o0yBUFoYe https://t.co/mqndPS69IK"
                },
                {
                    "id": 1600113181934112800,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600112997707710500,
                    "text": "えっ アニメ化するんだ……\n\nやっぱり前作にヒット作品があると\n話が決まるの早いよね。\n\n戦隊大失格\n原作コミックはこちら↓↓↓\nhttps://t.co/m2KOufK9He\n\n五等分の花嫁の映画\nBlu-Ray(早期予約特典/… https://t.co/bRNlFvOIar"
                },
                {
                    "id": 1600112985569116200,
                    "text": "映画「五等分の花嫁」の円盤\n\n発売日2022年12月21日\n\n購入先で特典が違うよ～\n\n楽天\n⇒https://t.co/3Crwj9OFer\n\nアマゾン\n⇒https://t.co/ayKcH7Pu5C\n\n #五等分の花嫁… https://t.co/xuH8NZ08RD"
                },
                {
                    "id": 1600112805486919700,
                    "text": "RT @gotoubun_goods: 2023年4月下旬発売予定\n\nAMNIBUSにて予約受付中です！\n\n映画「五等分の花嫁」描き下ろしイラスト 集合 制服エプロンver. プレイマット\n\n▼詳しくはこちら↓\nhttps://t.co/rLnowkd2j3 https://t…"
                },
                {
                    "id": 1600112768002437000,
                    "text": "RT @gotoubun_goods: 2023年1月下旬発売予定\n\n各種サイトにて予約受付開始！\n\n映画「五等分の花嫁」 \n神獣 クリアファイル\n\n▼詳しくはこちら↓\nhttps://t.co/E4vsbkinSv https://t.co/jH1dJ1Ynys"
                },
                {
                    "id": 1600112727912956000,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600112443661123600,
                    "text": "RT @gotoubun_goods: 2023年1月下旬発売予定\n\n各種サイトにて予約受付開始！！\n\n映画「五等分の花嫁」 \n神獣 アクリルキーホルダー\n\n▼詳しくはこちら↓\nhttps://t.co/Vb0HCKy5qU https://t.co/DULkl7Lu94"
                },
                {
                    "id": 1600112385121226800,
                    "text": "RT @gotoubun_goods: 2023年4月下旬発売予定\n\nAMNIBUSにて予約受付中です！\n\n映画「五等分の花嫁」描き下ろしイラスト 集合 制服エプロンver. プレイマット\n\n▼詳しくはこちら↓\nhttps://t.co/rLnowkd2j3 https://t…"
                },
                {
                    "id": 1600112250043392000,
                    "text": "＼ 30日間無料 ／\n\n✨#Amazon 売れ筋ランキング✨\n👑Prime Video部門5位👑\n\n映画「五等分の花嫁」\n\n#アニメ好きと繋がりたい\n#アニメ好きな人RT・いいね\n#映画好きな人と繋がりたい\n\n▼PrimeVide… https://t.co/StgWiLJuVz"
                },
                {
                    "id": 1600111774732152800,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600110505384812500,
                    "text": "アニメイトで取扱中！\n\n映画 五等分の花嫁 アクリルスタンド/中野 五月 ショッピングデートver.\n アニメイトで\n2023年02月発売\nhttps://t.co/faPkHpgbTo\n\n#五等分の花嫁 https://t.co/WW5j72vh5j"
                },
                {
                    "id": 1600110488406237200,
                    "text": "アニメイトで取扱中！\n\n映画 五等分の花嫁 ミニスタンド/中野 五月 ショッピングデートver.\n アニメイトで\n2023年02月発売\nhttps://t.co/4ALgWsTaYU\n\n#五等分の花嫁 https://t.co/vmnaKlVles"
                },
                {
                    "id": 1600109673054875600,
                    "text": "1、観た映画まとめ\n呪術廻戦0︰今年は2回観て去年は１回観た。呪術廻戦最高!!\nトップガン︰１回。面白い\nジュラシックパーク︰１回。流石です。恐竜かっこいいなぁ。˙Ⱉ˙ｶﾞｫ\n五等分の花嫁︰１回だけ。特典最高\nワンピース︰2回。また観たい"
                },
                {
                    "id": 1600107946100555800,
                    "text": "RT @gotoubun_goods: eStrean storeにて販売中です！\n\n映画「五等分の花嫁」チップス\n\n◎価格：242円(税込)\n\n▼詳しくはこちら↓\nhttps://t.co/2o0yBUFoYe https://t.co/mqndPS69IK"
                },
                {
                    "id": 1600107900256411600,
                    "text": "RT @gotoubun_goods: eStrean storeにて販売中です！\n\n映画「五等分の花嫁」チップス\n\n◎価格：242円(税込)\n\n▼詳しくはこちら↓\nhttps://t.co/2o0yBUFoYe https://t.co/mqndPS69IK"
                },
                {
                    "id": 1600107854081294300,
                    "text": "RT @gotoubun_goods: セブンネットショッピングにて販売中！\n\n映画「五等分の花嫁」 \n描き下ろしグッズ\n\n・A4クリアファイル5枚セット\n・アクリルスタンド\n\n▼詳細はこちら↓\nhttps://t.co/P6KuAmwwh8 https://t.co/GdQp…"
                },
                {
                    "id": 1600107091087495200,
                    "text": "RT @CharaON_tweet: 【映画「五等分の花嫁」】グッズ情報\n\n「クリアファイル」\n「アクリルコースター」\n\n発売です！（アズメーカー）\n\n▼商品情報はこちら\nhttps://t.co/C4HidliWMD\n\n#五等分の花嫁 https://t.co/IrttBvO…"
                },
                {
                    "id": 1600105101993345000,
                    "text": "RT @lepton_itukaiti: くじ値下情報！③\n映画 五等分の花嫁 ﾄﾞﾘｰﾑ缶ﾊﾞｯｼﾞ ﾊﾟｲﾚｰﾂ＆Letter→250円\n新ﾃﾆｽの王子様 20th Anniversary ちょこっとくじ→200円\n東京ﾘﾍﾞﾝｼﾞｬｰｽﾞ ﾄﾞﾘｰﾑ缶ﾊﾞｯｼﾞ ﾌｧｲﾄ…"
                },
                {
                    "id": 1600105035417124900,
                    "text": "RT @gotoubun_goods: セブンネットショッピングにて販売中！\n\n映画「五等分の花嫁」 \n描き下ろしグッズ\n\n・A4クリアファイル5枚セット\n・アクリルスタンド\n\n▼詳細はこちら↓\nhttps://t.co/P6KuAmwwh8 https://t.co/GdQp…"
                }
            ]
        },
        {
            "id": 791155,
            "original_title": "Secret Headquarters",
            "overview": "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
            "tweets": [
                {
                    "id": 1600068135133929500,
                    "text": "@JustSomeLady_ I keep asking but no one is manning the phones at Secret Service headquarters anymore."
                },
                {
                    "id": 1600020962199896000,
                    "text": "RT @Josieamycashman: But did you know that in 2012 King Charles III became the inaugural patron of all 3 British intelligence agencies incl…"
                },
                {
                    "id": 1599993370495287300,
                    "text": "• Who would have had access to remove every panic button from Rep Ayanna Pressley’s office ahead of the Jan 6th att… https://t.co/DlRsFhcf2p"
                },
                {
                    "id": 1599965115897778200,
                    "text": "RT @Josieamycashman: But did you know that in 2012 King Charles III became the inaugural patron of all 3 British intelligence agencies incl…"
                },
                {
                    "id": 1599952486751932400,
                    "text": "RT @Josieamycashman: But did you know that in 2012 King Charles III became the inaugural patron of all 3 British intelligence agencies incl…"
                },
                {
                    "id": 1599942668284756000,
                    "text": "RT @Josieamycashman: But did you know that in 2012 King Charles III became the inaugural patron of all 3 British intelligence agencies incl…"
                },
                {
                    "id": 1599942594464972800,
                    "text": "But did you know that in 2012 King Charles III became the inaugural patron of all 3 British intelligence agencies i… https://t.co/SetOi1EAvu"
                },
                {
                    "id": 1599942123154915300,
                    "text": "Clerks III, Nope and Bullet Train are solid airplane options for movies. Thor Love and Thunder is a pass.\n\nHow have… https://t.co/9u1lMg0onn"
                },
                {
                    "id": 1599902873164603400,
                    "text": "RT @jeff_kaye: “The decision to use germ bombs [in Korean War], of course, is top secret, but due to the serious nature of this decision it…"
                },
                {
                    "id": 1599902260259004400,
                    "text": "“The decision to use germ bombs [in Korean War], of course, is top secret, but due to the serious nature of this de… https://t.co/n3qNirvFMA"
                },
                {
                    "id": 1599854788266467300,
                    "text": "tacky gold hat from the secret musty headquarters"
                },
                {
                    "id": 1599810951838154800,
                    "text": "🎞 Secret Headquarters\n👥 Owen Wilson - Michael Peña - Walker Scobell\n💻 Paramount Plus\n🎥 Science Fiction - Family - A… https://t.co/7U7nmpyNtY"
                },
                {
                    "id": 1599785912485163000,
                    "text": "@TheMekon_Venus The Freedom for Animals Association on Second Avenue is the secret headquarters of the Army of the… https://t.co/qGLON13ZhC"
                },
                {
                    "id": 1599762727698051000,
                    "text": "@ProudElephantUS Because a lot of Democrat top donors ARE secret pedos. But also, the entire 5 billion a year porno… https://t.co/XQh8PEUNHa"
                },
                {
                    "id": 1599756384408465400,
                    "text": "@tmntstruggles You have a secret headquarters don’t you?"
                },
                {
                    "id": 1599711030015578000,
                    "text": "7/ \n- Top NTx holders are invited to visit game developer headquarters; flights and accommodation are covered.\n- Mo… https://t.co/PJolN0qwSx"
                },
                {
                    "id": 1599661223120842800,
                    "text": "passing by a secret headquarters I hear a waltz"
                },
                {
                    "id": 1599650059381248000,
                    "text": "RT @Xaul_Zan65: Feel free to conduct an investigation at second avenue at the secret headquarters of the twelve monkeys. There the ones who…"
                },
                {
                    "id": 1599584481387901000,
                    "text": "https://t.co/K5GKATOWvn"
                },
                {
                    "id": 1599556879335792600,
                    "text": "Just posted a photo @ Secret Headquarters https://t.co/HOoiO2rzdZ"
                },
                {
                    "id": 1599552812073259000,
                    "text": "@ImSpeaking13 REMINDER: no one mention the new ANTIFA headquarters secret lair underneath Mich McConnell's house. T… https://t.co/ALdN3nSXHD"
                },
                {
                    "id": 1599542886906753000,
                    "text": "@BetterFNnews 100% that centre island spot is important. Whether it's a secret underground headquarters, or the Zer… https://t.co/a61roYTXxu"
                },
                {
                    "id": 1599534009637142500,
                    "text": "Feel free to conduct an investigation at second avenue at the secret headquarters of the twelve monkeys. There the… https://t.co/6MZUVPKUQu"
                },
                {
                    "id": 1599500396762108000,
                    "text": "RT @vanguardngrnews: Defence Headquarters (DHQ) is jolted by a publication  it called “demonic journalism”, expressing rage over an allegat…"
                },
                {
                    "id": 1599445938061267000,
                    "text": "@elonmusk I say Kernel musk will keep them in their place. After all secret recipe is locked away at headquarters. https://t.co/QlxMrC1GYB"
                },
                {
                    "id": 1599439593798934500,
                    "text": "@kamiiiplus Yeah it’s just… why??? Naix doesn’t need to be real, and Ryuki just… goes to their headquarters??? Like… https://t.co/YaXgSxFOVG"
                },
                {
                    "id": 1599410674954039300,
                    "text": "@LeftySalami Thor: Love &amp; Thunder.\nBlack Panther: Wakanda Forever.\nBlack Adam.\nThe Batman.\nMorbius.\nDoctor Strange… https://t.co/YtHFKwK9Kf"
                },
                {
                    "id": 1599398113642311700,
                    "text": "Could we try to just keep our secret headquarters a little bit secret? Keep bringing people in, they're gonna see e… https://t.co/PsagSBV83n"
                },
                {
                    "id": 1599396346607255600,
                    "text": "Here is summary of my French book entitled “Le Secret des Esséniens de Qumrân”:\nhttps://t.co/yjvVZjwTQM\n\nThe Dead S… https://t.co/9S59FdEqb3"
                },
                {
                    "id": 1599394587969089500,
                    "text": "Itaru: I don't understand why we turned our room into the headquarters.\nCitron: Because this place feels the most like a secret base!"
                },
                {
                    "id": 1599338201994662000,
                    "text": "1. Jana Gana Mana ★★★★\n2. Elvis ★★★★\n3. Honor Society ★★★½\n4. American Underdog ★★★\n5. Orphan: First Kill ★★★\n6. Ri… https://t.co/jMUMNu3CND"
                },
                {
                    "id": 1599330413700432000,
                    "text": "RT @vanguardngrnews: Defence Headquarters (DHQ) is jolted by a publication  it called “demonic journalism”, expressing rage over an allegat…"
                },
                {
                    "id": 1599329658859929600,
                    "text": "A pigsty is forced by secret headquarters of 1959"
                },
                {
                    "id": 1599294875190849500,
                    "text": "RT @MeghanCherry25: I feel like not enough people understand that when they set a fictional 'secret Witch headquarters' in Salem, MA - they…"
                },
                {
                    "id": 1599289279930196000,
                    "text": "RT @vanguardngrnews: Defence Headquarters (DHQ) is jolted by a publication  it called “demonic journalism”, expressing rage over an allegat…"
                },
                {
                    "id": 1599288410354880500,
                    "text": "RT @vanguardngrnews: Defence Headquarters (DHQ) is jolted by a publication  it called “demonic journalism”, expressing rage over an allegat…"
                },
                {
                    "id": 1599287372235030500,
                    "text": "Defence Headquarters (DHQ) is jolted by a publication  it called “demonic journalism”, expressing rage over an alle… https://t.co/3DzOX8qTlO"
                },
                {
                    "id": 1599242640633237500,
                    "text": "I feel like not enough people understand that when they set a fictional 'secret Witch headquarters' in Salem, MA -… https://t.co/Ds1i527tgc"
                },
                {
                    "id": 1599195145542697000,
                    "text": "Just posted a photo @ Secret Headquarters https://t.co/Ek4x0IBSpV"
                },
                {
                    "id": 1599195107625877500,
                    "text": "RT @PeskyLiberals: 19.On 01/06 why was VP elect Kamala Harris allowed to enter the DNC headquarters by Trump’s Secret Service before it was…"
                },
                {
                    "id": 1599167900161450000,
                    "text": "Itaru: I don't understand why we turned our room into the headquarters.\nCitron: Because this place feels the most like a secret base!"
                },
                {
                    "id": 1599134914971984000,
                    "text": "operational headquarters in Miami, Florida for the Cuban Project also known as Operation Mongoose, a project to ove… https://t.co/gx8aSJmxMy"
                },
                {
                    "id": 1599114128379252700,
                    "text": "RT @JamesTate121: On January 6th, why was VP elect Kamala Harris allowed to enter the DNC headquarters by Trump’s Secret Service before it…"
                },
                {
                    "id": 1599030019883692000,
                    "text": "@oXo_Coco_oXx Secret Headquarters is one think ya littleman will like i (Netflix),Lightyear is a good film if not s… https://t.co/l9beU6ewDE"
                },
                {
                    "id": 1599029716035375000,
                    "text": "RT @gameparic_com: For #screenshotsaturday  📷 we have today \nProject Wunderwaffe with how YOUR Headquarters can look like!👀\n\nIf you are one…"
                },
                {
                    "id": 1598999509777805300,
                    "text": "For #screenshotsaturday  📷 we have today \nProject Wunderwaffe with how YOUR Headquarters can look like!👀\n\nIf you ar… https://t.co/6oTU3UKdyD"
                },
                {
                    "id": 1598917278023778300,
                    "text": "Just posted a photo @ Secret Headquarters https://t.co/pL5NmPsc4r"
                },
                {
                    "id": 1598909712858333200,
                    "text": "https://t.co/OMc0rgZL2H #SecretHeadquarters #trakt"
                },
                {
                    "id": 1598891592391094300,
                    "text": "@hasudi @CBS_Herridge Well you can call the DC headquarters of the FBI cause they actually had it first and still d… https://t.co/aRQY1rT79y"
                },
                {
                    "id": 1598890383856976000,
                    "text": "@RealJamesWoods Because President Nixon's henchmen actually broke into DNC headquarters and committed a burglary in… https://t.co/XWD6V1yjzz"
                }
            ]
        },
        {
            "id": 635302,
            "original_title": "劇場版「鬼滅の刃」無限列車編",
            "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
            "tweets": [
                {
                    "id": 1600132592606490600,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600132589301686300,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600132560352608300,
                    "text": "#松永依織の歌配信 \n劇場版 鬼滅の刃 無限列車編 主題歌より\n9曲目『炎』LiSA\n【歌枠】寒さ吹っ飛ばせ！楽しく歌うよ～🎤✨Singing Stream / 松永依織【初見大歓迎】\nhttps://t.co/G9LyWE72WP"
                },
                {
                    "id": 1600132502387298300,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600132480698175500,
                    "text": "RT @fns_kayousai: 🚩\n💡#FNS歌謡祭 最新情報\n🚩\n\n第1夜\n12月7日(水)18:30〜放送📺\n\nご出演 #LiSA さんから\n歌唱楽曲のおはなしです📹\n\n『劇場版「鬼滅の刃」無限列車編』\n主題歌 ♪#炎 🔥\n\nそして\n♪ #一斉ノ喝采 を披露⚽️\n\n公式…"
                },
                {
                    "id": 1600132458854625300,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600132423928672300,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600132203010175000,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n放送の最後には、新シリーズ「刀鍛冶の里編」の最新情報を発表するPVを放送！\n\n詳細はこちら\nhttps:/…"
                },
                {
                    "id": 1600132003198029800,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131811891622000,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600131760557535200,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131733986635800,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131690684641300,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n放送の最後には、新シリーズ「刀鍛冶の里編」の最新情報を発表するPVを放送！\n\n詳細はこちら\nhttps:/…"
                },
                {
                    "id": 1600131513005142000,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600131497645977600,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131467971264500,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131349251522600,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131184750887000,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600131180627918800,
                    "text": "RT @fns_kayousai: 🚩\n💡#FNS歌謡祭 最新情報\n🚩\n\n第1夜\n12月7日(水)18:30〜放送📺\n\nご出演 #LiSA さんから\n歌唱楽曲のおはなしです📹\n\n『劇場版「鬼滅の刃」無限列車編』\n主題歌 ♪#炎 🔥\n\nそして\n♪ #一斉ノ喝采 を披露⚽️\n\n公式…"
                },
                {
                    "id": 1600131131680383000,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600131094765924400,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600130865321115600,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600130823193497600,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130818089058300,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600130695359500300,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130638044020700,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600130439196254200,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600130423325003800,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130416341823500,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130246644142000,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130166159646700,
                    "text": "RT @kimetsu_goods23: 12月10日(土)\n #鬼滅の刃 放送&amp;配信予定\n\n＜フジテレビ系列＞\n⏰18:30～19:00\nTVアニメ 無限列車編 第一話\n\n⏰19:00～21:24\n劇場版 ｢鬼滅の刃｣無限列車編\n放送後に刀鍛冶の里編の最新情報発表\n\n＜ABE…"
                },
                {
                    "id": 1600130142503698400,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129981367009300,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129858331611100,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129823904440300,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600129815038038000,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600129697626886100,
                    "text": "RT @fns_kayousai: 🚩\n💡#FNS歌謡祭 最新情報\n🚩\n\n第1夜\n12月7日(水)18:30〜放送📺\n\nご出演 #LiSA さんから\n歌唱楽曲のおはなしです📹\n\n『劇場版「鬼滅の刃」無限列車編』\n主題歌 ♪#炎 🔥\n\nそして\n♪ #一斉ノ喝采 を披露⚽️\n\n公式…"
                },
                {
                    "id": 1600129622393254000,
                    "text": "RT @fns_kayousai: 🚩\n💡#FNS歌謡祭 最新情報\n🚩\n\n第1夜\n12月7日(水)18:30〜放送📺\n\nご出演 #LiSA さんから\n歌唱楽曲のおはなしです📹\n\n『劇場版「鬼滅の刃」無限列車編』\n主題歌 ♪#炎 🔥\n\nそして\n♪ #一斉ノ喝采 を披露⚽️\n\n公式…"
                },
                {
                    "id": 1600129609760022500,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n放送の最後には、新シリーズ「刀鍛冶の里編」の最新情報を発表するPVを放送！\n\n詳細はこちら\nhttps:/…"
                },
                {
                    "id": 1600129534762045400,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129454713745400,
                    "text": "RT @ufotable: “放送まであと5日”\nアニメ「鬼滅の刃」無限列車編　特別放送版\n\n12月10日（土）\n18：30　テレビアニメ「鬼滅の刃」第一話「炎柱・煉獄杏寿郎」\n19：00　劇場版「鬼滅の刃」無限列車編\n\n一挙にお送りいたします。\nhttps://t.co/Re…"
                },
                {
                    "id": 1600129134721499100,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129122134814700,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600129057152462800,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600128949711167500,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600128764633288700,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600128759268806700,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600128633179631600,
                    "text": "RT @ufotable: 12/10（土）アニメ「鬼滅の刃」タイムスケジュールはこちら！\n18時30分　テレビアニメ「鬼滅の刃」無限列車編　第一話 (一部放送局は16時30分～)\n↓\n19時　劇場版「鬼滅の刃」無限列車編\n↓\n特別放送後　プロモーションリール2023\n↓\n21…"
                },
                {
                    "id": 1600128403029753900,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n「その刃で、悪夢を断ち切れ」\n\n詳細はこちら\nhttps://t.co/DGUh4YLQZ1 #鬼滅の刃…"
                },
                {
                    "id": 1600128357878083600,
                    "text": "RT @kimetsu_off: ＼12/10(土) 無限列車編 特別放送／\n『テレビアニメ「鬼滅の刃」無限列車編』第一話と、『劇場版「鬼滅の刃」無限列車編』をお届け✨\n\n放送の最後には、新シリーズ「刀鍛冶の里編」の最新情報を発表するPVを放送！\n\n詳細はこちら\nhttps:/…"
                }
            ]
        },
        {
            "id": 899112,
            "original_title": "Violent Night",
            "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
            "tweets": [
                {
                    "id": 1600132560176103400,
                    "text": "stop why was violent night sooooo good? it made me laugh, made me feel the christmas spirit, was giving action movi… https://t.co/7feL0JtqU9"
                },
                {
                    "id": 1600132250011828200,
                    "text": "RT @ChrisCoxCritic: https://t.co/oHujpyWk2J https://t.co/6KxtAflqgT"
                },
                {
                    "id": 1600132242147188700,
                    "text": "RT @ChrisCoxCritic: Highly Suspect Reviews: Violent Night\n\nWhat's a holiday season without a little violent Christmas mayhem? In a bit of i…"
                },
                {
                    "id": 1600132216096374800,
                    "text": "RT @Ivorbigyin11: @MayorofLondon @metpoliceuk It’s fast becoming a no go zone due to violent knife crime and unsafe for woman to walk aroun…"
                },
                {
                    "id": 1600131911703138300,
                    "text": "RT @domxhart: \"Violent Night could have just been a one-note 'Santa is an Action Badass' movie, and while, yes, there's a good amount of th…"
                },
                {
                    "id": 1600131772028682200,
                    "text": "my dreams just keep becoming more violent every night"
                },
                {
                    "id": 1600131606374543400,
                    "text": "I was very tired last night but Violent Night was awesome.  I love David Harbour"
                },
                {
                    "id": 1600131561898115000,
                    "text": "@neroIiker dont even know why my thoughts went here. i think its cause my mom was watching a trailer for violent night"
                },
                {
                    "id": 1600131344629014500,
                    "text": "RT @joycejhop: im just gonna enjoy life and watch violent night as much as i possibly can https://t.co/IlJRwMxdHJ"
                },
                {
                    "id": 1600131096511131600,
                    "text": "@RatzDog VIOLENT NIGHT BABY"
                },
                {
                    "id": 1600130502303760400,
                    "text": "RT @BDisgusting: ‘Violent Night’ Spreads Christmas Cheer at the Box Office With $20 Million Worldwide Opening https://t.co/IUNsfnBiBl"
                },
                {
                    "id": 1600130186573250600,
                    "text": "Violent Night really isn’t a great movie\n\nBut the gore factor is https://t.co/F0UYjVZPHe"
                },
                {
                    "id": 1600130088527310800,
                    "text": "@Krishnashasti @DiscussingFilm As of December 4, its $733 global https://t.co/VR5VflKbbB"
                },
                {
                    "id": 1600129971141214200,
                    "text": "@little_ditsy It's irrelevant now, Violent Night has replaced it as the Christmas action movie"
                },
                {
                    "id": 1600129768728379400,
                    "text": "RT @PaulMullenEdits: How to Tell A Secret review: \"These types of things usually work best on a stage, not in front of a camera. How wonder…"
                },
                {
                    "id": 1600129640919539700,
                    "text": "@28persenmanusia @nichecrushes @yaelahjul @arawinda2709 Pas nonton Violent Night, nonggol lagi trailer film si Ungu, untungnya sepi"
                },
                {
                    "id": 1600129626134544400,
                    "text": "RT @cineworld: There's a new kind of Christmas film in town. Check out how #ViolentNight flips the script on the Christmas clichés to deliv…"
                },
                {
                    "id": 1600129400296853500,
                    "text": "RT @domxhart: \"Violent Night could have just been a one-note 'Santa is an Action Badass' movie, and while, yes, there's a good amount of th…"
                },
                {
                    "id": 1600129275101073400,
                    "text": "RT @domxhart: \"Violent Night could have just been a one-note 'Santa is an Action Badass' movie, and while, yes, there's a good amount of th…"
                },
                {
                    "id": 1600128924897378300,
                    "text": "Writers Pat Casey &amp; Josh Miller explain the bloody fun origins behind David Harbour’s St. Nick smackdown.\nhttps://t.co/70fyEismcI"
                },
                {
                    "id": 1600128431336718300,
                    "text": "@FilmMomatic I don’t want to see VIOLENT NIGHT, do I?"
                },
                {
                    "id": 1600128354849415200,
                    "text": "Violent Night was insane Christmas movie ever. Go watch it!"
                },
                {
                    "id": 1600127968340312000,
                    "text": "“Black Panther: Wakanda Forever” kept the box-office crown for the fourth straight weekend, and the comic holiday t… https://t.co/RVt4I5loEI"
                },
                {
                    "id": 1600127960198959000,
                    "text": "RT @CinemaSalem: This week at the cinema! \n\nThursday\n\nBLACK FRIDAY • 7:00\nSILENT NIGHT, DEADLY NIGHT • 9:00\n\nFriday\n\nTHE BANSHEES OF INISHE…"
                },
                {
                    "id": 1600127934185906200,
                    "text": "UK #BoxOffice\n\n'Violent Night' makes its debut at 3, while #Disney animation 'Strange World' continues to stutter.… https://t.co/4E9Al1krFM"
                },
                {
                    "id": 1600127818171527200,
                    "text": "Monday • On-Screen Captions\n\nTRIANGLE OF SADNESS • 4:00\nSHE SAID • 4:15\nVIOLENT NIGHT • 4:45 • 7:30\nTHE MENU • 7:00… https://t.co/ti4lrsDAOr"
                },
                {
                    "id": 1600127815243792400,
                    "text": "Saturday\n\nTHE THIN MAN • 1:30 PM\nTRIANGLE OF SADNESS • 4:00\nSHE SAID • 4:15\nVIOLENT NIGHT• 4:45 • 7:30\nMENU • 7:00… https://t.co/GmYcM6fmEE"
                },
                {
                    "id": 1600127807870279700,
                    "text": "This week at the cinema! \n\nThursday\n\nBLACK FRIDAY • 7:00\nSILENT NIGHT, DEADLY NIGHT • 9:00\n\nFriday\n\nTHE BANSHEES OF… https://t.co/IOyWWhpZHV"
                },
                {
                    "id": 1600127253655920600,
                    "text": "We should reboot the whole xmas holiday and base it on VIOLENT NIGHT."
                },
                {
                    "id": 1600126915498549200,
                    "text": "@SelectShooting @farwell_WR I saw it last night and it's close... really close. \"Violent Night\" lost a few points f… https://t.co/djqMXiNm3d"
                },
                {
                    "id": 1600126809047453700,
                    "text": "After shooting towards Karmei Zour, settlement, a settlement adjacent to Beit Ummar last night. \n\nIsraeli forces in… https://t.co/JIj18VEO0o"
                },
                {
                    "id": 1600126566784151600,
                    "text": "RT @MACandGUpodcast: We discuss some of the HOTTEST 2022 Christmas movies!\n\nThe Guardians of the Galaxy Holiday Special\n\nViolent Night\n\nSpi…"
                },
                {
                    "id": 1600126556822974500,
                    "text": "RT @BMairitsch: Erster Weihnachtsfilms des Jahres: violent night.\nUnd der Name ist Programm. Super lustig, unterhaltsam und ultra-brutal ge…"
                },
                {
                    "id": 1600125609287499800,
                    "text": "things to talk about on a podcast this week\n⁉️🎬🏈📽️🪜🏟️🪓🆚💣🏀⚾️🧢\n-MLB free agency\n-review of Violent Night movie\n-colle… https://t.co/AN3YAvH3PO"
                },
                {
                    "id": 1600124962110521300,
                    "text": "RT @WendysRoom237: VIOLENT NIGHT All Clips &amp; Trailer (2022) https://t.co/2Rp27LePAc via @YouTube @ScrimFinder @wwwanpaus @SGH_RTs #TheShini…"
                },
                {
                    "id": 1600124483116753000,
                    "text": "*TUESDAY 6th12.22 🎄🎅*\n\n*THE NANNY*\n\n*12:30PM*\n\n*BLACK PANTHER*\n\n*2:20PM*\n\n*7:10PM*\n\n*BROTHERHOOD*\n\n*5:00PM*\n\n*PEREG… https://t.co/Kox3tAM2Y9"
                },
                {
                    "id": 1600124220448686000,
                    "text": "Yesss, voglio vederlo 😍\nhttps://t.co/Ts9vnjqOrQ"
                },
                {
                    "id": 1600124197048656000,
                    "text": "Investigators believe the 22-year-old began the crime rampage with a carjacking on Sunday night and ended with an a… https://t.co/LSA5Nou6LN"
                },
                {
                    "id": 1600124102596886500,
                    "text": "RT @WatchmenID: Oke berikut review kami untuk Violent Night (2022) https://t.co/CEP9maa8eE"
                },
                {
                    "id": 1600123544024666000,
                    "text": "@elizableu Eliza, would you be willing to use your voice to ask Twitter leadership and investors how they sleep at… https://t.co/ryJeHRHFwi"
                },
                {
                    "id": 1600123257276928000,
                    "text": "retweeting again after watching Violent Night https://t.co/dhmwMEpOad"
                },
                {
                    "id": 1600123160354902000,
                    "text": "RT @EW: #ViolentNight screenwriter on Macaulay Culkin's Kevin from 'Home Alone': \"All of his booby traps are so unbelievably brutal.\" https…"
                },
                {
                    "id": 1600122470219931600,
                    "text": "Unpopular opinion: Violent Night está DURÍSIMA. 10/10 👌🏻🔥"
                },
                {
                    "id": 1600122345930207200,
                    "text": "RT @BDisgusting: ‘Violent Night’ Spreads Christmas Cheer at the Box Office With $20 Million Worldwide Opening https://t.co/IUNsfnBiBl"
                },
                {
                    "id": 1600121430481305600,
                    "text": "حد شاف فلم violent night ؟"
                },
                {
                    "id": 1600121115518460000,
                    "text": "RT @2mainLaChapelle: 1/2\nAfter violent clashes last night and a restless night, the camp ⛺️ #VergersUrbains has resumed its slum #SaccagePa…"
                },
                {
                    "id": 1600120865546735600,
                    "text": "Better executed joke than the one in VIOLENT NIGHT. https://t.co/AdQZAE57Ba"
                },
                {
                    "id": 1600120855605891000,
                    "text": "RT @QuasarSniffer: On this @PureCinemaPod, filmmaker @joebegos and screenwriter Josh Miller join @Elrickane and @bobfreelander to discuss t…"
                },
                {
                    "id": 1600120781744537600,
                    "text": "Here's a sneak peek into the screening of #ViolentNight at #Cinépolis. The action drama received an overwhelming re… https://t.co/Hclo9B3JRI"
                },
                {
                    "id": 1600120546586292200,
                    "text": "RT @Ivorbigyin11: @MayorofLondon @metpoliceuk It’s fast becoming a no go zone due to violent knife crime and unsafe for woman to walk aroun…"
                }
            ]
        },
        {
            "id": 315162,
            "original_title": "Puss in Boots: The Last Wish",
            "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            "tweets": [
                {
                    "id": 1600130789777162200,
                    "text": "Well, it came out the same year as Guillermo del Toro’s Pinocchio, The Bad Guys, Puss in Boots: The Last Wish, The… https://t.co/10ANOXWjaR"
                },
                {
                    "id": 1600128160665829400,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600127799829794800,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600126764176400400,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600125486671151000,
                    "text": "RT @hollywoodhandle: ‘PUSS IN BOOTS: THE LAST WISH’ opens with a huge 98% on Rotten Tomatoes Audience Score 🍅\n\nWith many people saying it’s…"
                },
                {
                    "id": 1600122652038811600,
                    "text": "I absolutely loved Puss In Boots: The Last Wish! https://t.co/apWIqKLTf3"
                },
                {
                    "id": 1600122183602217000,
                    "text": "RT @ShrekHistory: Some brand new concept art for Puss in Boots: The Last Wish has been revealed (via @animag) https://t.co/7Z4l5WIH7K"
                },
                {
                    "id": 1600111006088581000,
                    "text": "do you guys think puss in boots: the last wish is worth it? it’s literally the only movie that fits on my free time tomorrow 😭😭"
                },
                {
                    "id": 1600109942035210200,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600109077043945500,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600102979217956900,
                    "text": "RT @antoniobanderas: Welcome to my FIESTA!!!\n\n#Repost @PussInBoots \n・・・\nA wish worth fighting for and a cast worth admiring. Catch #PussInB…"
                },
                {
                    "id": 1600098952841285600,
                    "text": "RT @ShrekHistory: Some brand new concept art for Puss in Boots: The Last Wish has been revealed (via @animag) https://t.co/7Z4l5WIH7K"
                },
                {
                    "id": 1600091215407583200,
                    "text": "RT @Fandango: The cast of 'Puss in Boots: The Last Wish' gave us a closer look at their action and comedy filled movie, in theaters Decembe…"
                },
                {
                    "id": 1600090435350839300,
                    "text": "Puss In Boots : The Last Wish\n\n👉 https://t.co/pDkvgZGUIS 😀✏️\n\n#PussInBootsTheLastWish #PussInBoots #TheLastWish… https://t.co/eql291ScPQ"
                },
                {
                    "id": 1600087222921089000,
                    "text": "2 posters film baru Florence udah ada di Bioskop, masih coming soon ✨👌 Puss in Boots: The Last Wish bentar lagi sih… https://t.co/PI46ez8BGu"
                },
                {
                    "id": 1600085935240007700,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600085774816358400,
                    "text": "RT @sinegangdotph: A story about trust and company, Puss in Boots: The Last Wish highlights chosen families, and although blood is thicker…"
                },
                {
                    "id": 1600084108855873500,
                    "text": "RT @sinegangdotph: A story about trust and company, Puss in Boots: The Last Wish highlights chosen families, and although blood is thicker…"
                },
                {
                    "id": 1600082841030623200,
                    "text": "RT @sinegangdotph: A story about trust and company, Puss in Boots: The Last Wish highlights chosen families, and although blood is thicker…"
                },
                {
                    "id": 1600082626345422800,
                    "text": "A story about trust and company, Puss in Boots: The Last Wish highlights chosen families, and although blood is thi… https://t.co/hrZIdeQQs9"
                },
                {
                    "id": 1600081037119443000,
                    "text": "RT @Borys_Kit: This review calls PUSS IN BOOTS: THE LAST WISH the  \"The Logan of the Shrek franchise.\" Yes, it's that good. Funny, scary, t…"
                },
                {
                    "id": 1600079532391686100,
                    "text": "RT @Borys_Kit: This review calls PUSS IN BOOTS: THE LAST WISH the  \"The Logan of the Shrek franchise.\" Yes, it's that good. Funny, scary, t…"
                },
                {
                    "id": 1600077539384299500,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600066372616491000,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600065172680298500,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600063354462404600,
                    "text": "RT @Fandango: Antonio Banderas wants YOU to watch this exclusive clip from his new movie #PussInBootsTheLastWish! \n\n'Puss In Boots: The Las…"
                },
                {
                    "id": 1600062794975522800,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600051740614791200,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600044650479222800,
                    "text": "RT @Fandango: Antonio Banderas wants YOU to watch this exclusive clip from his new movie #PussInBootsTheLastWish! \n\n'Puss In Boots: The Las…"
                },
                {
                    "id": 1600044614500552700,
                    "text": "RT @Fandango: The cast of 'Puss in Boots: The Last Wish' gave us a closer look at their action and comedy filled movie, in theaters Decembe…"
                },
                {
                    "id": 1600044087599431700,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600037325073006600,
                    "text": "راح تخلص الأرواح التسعة، تخيّل وش راح يصير في Puss in Boots!! 😏\n\nعيش معه المغامرة و كيف يستعيد الأرواح التسعة. 🤩🤩… https://t.co/XPBelUoWg1"
                },
                {
                    "id": 1600031095642554400,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600028848443252700,
                    "text": "9.   Puss in boots (the last wish) https://t.co/kNvjiGVMm4"
                },
                {
                    "id": 1600026447669624800,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600023858907447300,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600023093455503400,
                    "text": "RT @ShrekHistory: Puss in Boots: The Last Wish debuts with a 100% critics score from 6 reviews and a 98% audience score on Rotten Tomatoes!…"
                },
                {
                    "id": 1600020264258969600,
                    "text": "RT @ozbargain: frenzysales: [VIC] Free Tickets to Puss in Boots: The Last Wish @ Village Cinemas, Westfield Plenty Valley (Westfield Plus R…"
                },
                {
                    "id": 1600020263021576200,
                    "text": "frenzysales: [VIC] Free Tickets to Puss in Boots: The Last Wish @ Village Cinemas, Westfield Plenty Valley (Westfie… https://t.co/s70BsfsHaN"
                },
                {
                    "id": 1600019171995054000,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600018450918690800,
                    "text": "#Cine | Los invitados se llevaron una gran sorpresa cuando @EugenioDerbez les dio la bienvenida al presentar… https://t.co/fTYxjkoVlA"
                },
                {
                    "id": 1600017720044494800,
                    "text": "RT @KarolGUP: 🚨 Karol G is part of the soundtrack of the movie 'Puss in Boots: The Last Wish'. The song is called \"La Vida Es Una\" and seem…"
                },
                {
                    "id": 1600011538693116000,
                    "text": "RT @Fandango: Antonio Banderas wants YOU to watch this exclusive clip from his new movie #PussInBootsTheLastWish! \n\n'Puss In Boots: The Las…"
                },
                {
                    "id": 1600008327886315500,
                    "text": "RT @rachel_reviews: @disney__tasthic My glowing review https://t.co/vr5bKMVTfo"
                },
                {
                    "id": 1600007840118165500,
                    "text": "RT @rachel_reviews: @disney__tasthic My glowing review https://t.co/vr5bKMVTfo"
                },
                {
                    "id": 1600007820199350300,
                    "text": "@disney__tasthic My glowing review https://t.co/vr5bKMVTfo"
                },
                {
                    "id": 1600006000370536400,
                    "text": "RT @ShrekHistory: A brand new clip from Puss in Boots: The Last Wish has been released! (Via Peacock Kids on YT) https://t.co/HfGGjFSSVS"
                },
                {
                    "id": 1600003568207118300,
                    "text": "#WinWithKaboutjie @Kaboutjie \nRelease Of Puss In Boots: The Last Wish Plus Giveaway via @ @Kaboutjie https://t.co/3cPdqYsPbG"
                },
                {
                    "id": 1600003565937774600,
                    "text": "RT @Borys_Kit: This review calls PUSS IN BOOTS: THE LAST WISH the  \"The Logan of the Shrek franchise.\" Yes, it's that good. Funny, scary, t…"
                },
                {
                    "id": 1600003430541824000,
                    "text": "RT @Fandango: Antonio Banderas wants YOU to watch this exclusive clip from his new movie #PussInBootsTheLastWish! \n\n'Puss In Boots: The Las…"
                }
            ]
        },
        {
            "id": 929340,
            "original_title": "A Christmas Story Christmas",
            "overview": "Ralphie is now all grown up and must deal with Christmas and all that comes with it…as a dad.",
            "tweets": [
                {
                    "id": 1600132575426904000,
                    "text": "RT @DreamForDaniel: Silent Night isn’t a classic Christmas song for nothing — there’s no better season for a cozy music playlist!\n\n#Mossimo…"
                },
                {
                    "id": 1600132559114903600,
                    "text": "RT @lorraine_teuten: Department of Work and Pensions staff to take strike action for two weeks over Christmas | ITV News Granada https://t.…"
                },
                {
                    "id": 1600132482245894100,
                    "text": "RT @DawnLAuthor: @Bortkiewicz1982 🐴BACKSTRETCH GIRLS🐴\nA #story of #friendship, #family &amp; #love with #horses!\nWinner Best #HorseRacing #fict…"
                },
                {
                    "id": 1600132455637328000,
                    "text": "Christmas Classics by David McLaughlan: Christmas carols form the soundtrack of the holiday season. This book consi… https://t.co/Q7pr13wwxe"
                },
                {
                    "id": 1600132403036532700,
                    "text": "RT @EW: Watch an exclusive clip from David Krumholtz's upcoming return as the elf Bernard on 'The Santa Clauses' with Tim Allen. The actor…"
                },
                {
                    "id": 1600132388587290600,
                    "text": "A Christmas Prince - You will know the entire course of the plot before you've gotten fifteen minutes into the movi… https://t.co/bQ8qWKhSj2"
                },
                {
                    "id": 1600132286313156600,
                    "text": "@TomFitton @elonmusk @nytimes Once upon a time I would have liked to hear Mitch read A Christmas Story.  Now I'm co… https://t.co/TMOLgGpl1e"
                },
                {
                    "id": 1600132247314583600,
                    "text": "RT @DinosaurDracula: It's a shame that this story of a Ninja Turtle dressing like Santa to drop copies of The Secret of the Ooze under Chri…"
                },
                {
                    "id": 1600131951582744600,
                    "text": "RT @PatWahlerAuthor: And we're LIVE! The Christmas Keepsake is a dual timeline short story I wrote based on events my grandmother shared wi…"
                },
                {
                    "id": 1600131737668898800,
                    "text": "@AGramuglia My favorite park is they decided the best way to adapt Charles Dicken story was to add a funny dog sidk… https://t.co/Ec1SCkg0nu"
                },
                {
                    "id": 1600131697437073400,
                    "text": "And that's a wrap...\nI am on holiday from today until December 16 for a much needed break and to catch-up with fami… https://t.co/iyBHxMuxAg"
                },
                {
                    "id": 1600131588955590700,
                    "text": "RT @child_medway: 🎄FREE CHRISTMAS STORY TIME!🎄\n\n📚Bring your under-5s to hear Christmas stories in our pop-up book corner by Wilko at @penta…"
                },
                {
                    "id": 1600131429890859000,
                    "text": "RT @TheBrotographer: we're long overdue for some shitty cheesy gay christmas movies where everything is perfect and theres a sweet predicta…"
                },
                {
                    "id": 1600131252744773600,
                    "text": "RT @theocca: Why is Mary significant in the story of #Christmas? Apart from being at the centre of a miraculous birth, Mary's role points t…"
                },
                {
                    "id": 1600131151141675000,
                    "text": "Ks2 has a fantastic morning at @HFDCathedral for the Donkey Christmas Story. The children behaved impeccably and sa… https://t.co/trnSRG9bFS"
                },
                {
                    "id": 1600131110448468000,
                    "text": "I’m with @ShannonTheDude A Christmas Story Christmas was pretty good and had a lot of good nostalgia. @BillyRsports"
                },
                {
                    "id": 1600130994341761000,
                    "text": "RT @ladylusiphur: @bigfinish @MrJohnDorney @jameskettle @roy_gill @rafeski_ @jamiecomposer @realshanerichie @Nina_Wadia @HughRossActor @Jam…"
                },
                {
                    "id": 1600130806915047400,
                    "text": "RT @PatWahlerAuthor: And we're LIVE! The Christmas Keepsake is a dual timeline short story I wrote based on events my grandmother shared wi…"
                },
                {
                    "id": 1600130634806136800,
                    "text": "Why is Mary significant in the story of #Christmas? Apart from being at the centre of a miraculous birth, Mary's ro… https://t.co/bBBsznTEeR"
                },
                {
                    "id": 1600130535954604000,
                    "text": "@dustbobgod The timing. Just before Christmas makes me wonder if there is a story behind these actions. You never k… https://t.co/lfYhTU0HF7"
                },
                {
                    "id": 1600130534629204000,
                    "text": "DOWNLOAD IN JUST A MINUTE on https://t.co/UlPCc9uuLY\nAn awesome Christmas gift that will really be appreciated. The… https://t.co/Wf2J3qihEJ"
                },
                {
                    "id": 1600130389083050000,
                    "text": "@cansas @ZaackHunt I was going to say, \"A Christmas Carol\" is essentially a ghost story."
                },
                {
                    "id": 1600130385580413000,
                    "text": "RT @DHAchildrens: AP: As a young child I adored having The Beatrix Potter Treasury read to me at Christmas time. This particular story was…"
                },
                {
                    "id": 1600130340093276200,
                    "text": "RT @megbaynes: Soaring energy bills, a shortage of turkeys, and a tight shopping budget - there is no doubt this Christmas looks set to be…"
                },
                {
                    "id": 1600130290583683000,
                    "text": "RT @Jess__Red: 🎄#Educators! #Librarians! #Readers! I'm giving away 5 copies of SEASON OF LIGHT!\n\n\"A luminous #Christmas story about joy, gi…"
                },
                {
                    "id": 1600129953751703600,
                    "text": "RT @phone_museum: A nice piece by the team at @VodafoneUK about the development of text messaging to coincide with 30 years since the first…"
                },
                {
                    "id": 1600129831404195800,
                    "text": "RT @gracextwo: I’ve seen the incorrect ‘news’ story claiming QLD schools are banning Christmas. I believe there was a similar story last ye…"
                },
                {
                    "id": 1600129817315143700,
                    "text": "RT @USATODAY: Southern California Edison said costs can increase by as much as a few hundred dollars during the holiday season. https://t.c…"
                },
                {
                    "id": 1600129731193540600,
                    "text": "Good News of the Day: Bowman to present 'an old-fashioned Christmas' parade https://t.co/til67PQ2Rn Tweet me a good news story"
                },
                {
                    "id": 1600129343417557000,
                    "text": "RT @Geena36026661: A wonderful season of the year, but very chilly weather and #TubaBüyüküstün IG story playing one of my favourite Christm…"
                },
                {
                    "id": 1600129292339290000,
                    "text": "DOWNLOAD IN JUST A MINUTE on https://t.co/UlPCc9uuLY\nAn awesome Christmas gift that will really be appreciated. The… https://t.co/vg7mmcRvck"
                },
                {
                    "id": 1600129274643562500,
                    "text": "RT @BWH_NHS: Santa's coming! 🎅 A generous mum from Northfield donated 25 bottles of her breast milk to our Milk Banks and has been hand del…"
                },
                {
                    "id": 1600129194457022500,
                    "text": "Watch an exclusive clip from David Krumholtz's upcoming return as the elf Bernard on 'The Santa Clauses' with Tim A… https://t.co/Iy3dM1KVAZ"
                },
                {
                    "id": 1600129184629551000,
                    "text": "@absurdlymax A story from the perspective of a guy who is watching a group of Christmas carolers at a Dickensfair a… https://t.co/2fjiKAssys"
                },
                {
                    "id": 1600129181177639000,
                    "text": "Like the turkey, it just keeps hanging around… Unseasonally profane rambling about A Warning To The Curious / A Gho… https://t.co/ZtDMNjBdWi"
                },
                {
                    "id": 1600129118334759000,
                    "text": "RT @jaeyoungsgf: THIRD ENDING WILL BE BACK ON CHRISTMAS FOR A SIDE STORY! 🥺🫶🏻 https://t.co/iQjl94W4Fs"
                },
                {
                    "id": 1600129114781819000,
                    "text": "@thehaileemurphy I saw that in the theater on opening day back in 2000, and it’s the first Christmas movie that my… https://t.co/ck5MjqTs91"
                },
                {
                    "id": 1600129059870019600,
                    "text": "RT @bernardfoong: Christmas waves a magic ward over this world, and behold, everything is softer and more beautiful.\nUNBRIDLED https://t.co…"
                },
                {
                    "id": 1600129041062731800,
                    "text": "@Brian_MurrayGH I think of Gremlins every time \"Do You Hear What I Hear\" plays on the radio, lol. And let's not for… https://t.co/OioliGGVZC"
                },
                {
                    "id": 1600129029352624000,
                    "text": "RT @LucyENichol: Here’s a festive story of hope on @BigIssue from Peter da Silva, one of the team at @Rec_Connectio_n who I am lucky to wor…"
                },
                {
                    "id": 1600129009727045600,
                    "text": "Maeve Brennan was the daughter of Irish revolutionaries, eventually moved to the US, got a job at the #NewYorker, &amp;… https://t.co/AggN9GwgEA"
                },
                {
                    "id": 1600128965124817000,
                    "text": "DOWNLOAD IN JUST A MINUTE on https://t.co/UlPCc9uuLY\nAn awesome Christmas gift that will really be appreciated. The… https://t.co/wTQv1A5Rf9"
                },
                {
                    "id": 1600128889468375000,
                    "text": "RT @disorderlyswine: Oh, you want fair wages? How about we have you arrested. Merry Christmas!\n\nPretty sure Dickens wrote a story with such…"
                },
                {
                    "id": 1600128874972577800,
                    "text": "Santa's coming! 🎅 A generous mum from Northfield donated 25 bottles of her breast milk to our Milk Banks and has be… https://t.co/Y5qnGWCKRP"
                },
                {
                    "id": 1600128839467745300,
                    "text": "RT @bernardfoong: Christmas waves a magic ward over this world, and behold, everything is softer and more beautiful.\nUNBRIDLED https://t.co…"
                },
                {
                    "id": 1600128801391927300,
                    "text": "On day 6 of December, we have a more traditional offering for our #BooseyAdventCalendar! Bob Chilcott's \"On Christm… https://t.co/6w2IgAXpEU"
                },
                {
                    "id": 1600128654926921700,
                    "text": "RT @anne_stenhouse: AWAY FROM THE MANGER - A Christmas Story https://t.co/dYvYQzL3jR via @anne_stenhouse"
                },
                {
                    "id": 1600128618977378300,
                    "text": "@bigfinish @MrJohnDorney @jameskettle @roy_gill @rafeski_ @jamiecomposer @realshanerichie @Nina_Wadia… https://t.co/REQ6wLEeJn"
                },
                {
                    "id": 1600128498567291000,
                    "text": "RT @SalmingandMe: In my “21” days to Christmas, each day I will feature items of the great Borje Salming💙21. On Day 3, it’s “The Canadian”…"
                },
                {
                    "id": 1600128410394558500,
                    "text": "@gothsfilm wait is that ralphie from a christmas story I didnt know he was in that 😭 https://t.co/IKtSS55rZr"
                }
            ]
        },
        {
            "id": 615952,
            "original_title": "Armageddon Time",
            "overview": "In 1980, Queens, New York, a young Jewish boy befriends a rebellious African-American classmate to the disapproval of his privileged family and begins to reckon with growing up in a world of inequality and prejudice.",
            "tweets": [
                {
                    "id": 1600122631017345000,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600121691455225900,
                    "text": "Director James Gray (Ad Astra, The Lost City of Z) takes inspiration from his own childhood in this coming-of-age d… https://t.co/gRfAdUgVfw"
                },
                {
                    "id": 1600118664983810000,
                    "text": "@jerryasleep Saint Omer, Benediction, Both Sides of the Blade, Nope, Armageddon Time, so many great films."
                },
                {
                    "id": 1600116162645225500,
                    "text": "RT @QuidVacuo: \"Todos somos una comunidad. Hay suficiente espacio para todo y gracias a Dios por Top Gun: Maverick y Avatar: The Way of Wat…"
                },
                {
                    "id": 1600114807641776000,
                    "text": "Armageddon Time\n2022 ‧ Drama/Coming-of-age ‧ 1h 54m\nJames Gray https://t.co/I1iC1B1QaI"
                },
                {
                    "id": 1600114769255485400,
                    "text": "@JenC222 Yes\nIt could happen any time, tornado,\nearthquake, Armageddon. It could happen.\nOr sunshine, love, salvati… https://t.co/Ybbw57SFCI"
                },
                {
                    "id": 1600113703441293300,
                    "text": "아마겟돈 타임 (Armageddon Time) 한글자막 https://t.co/VEtoZ6RSAT"
                },
                {
                    "id": 1600106757556441000,
                    "text": "Armageddon Time (2022)\ndir. James Gray https://t.co/TZAOlrCr3a"
                },
                {
                    "id": 1600106414168371200,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600105698452738000,
                    "text": "RT @QuidVacuo: \"Todos somos una comunidad. Hay suficiente espacio para todo y gracias a Dios por Top Gun: Maverick y Avatar: The Way of Wat…"
                },
                {
                    "id": 1600104622751768600,
                    "text": "@dlandrasdlandra she said dropped today, the fablemens in a few days, call jane the other day and till, armageddon… https://t.co/dxe3nl4m37"
                },
                {
                    "id": 1600103258902917000,
                    "text": "RT @QuidVacuo: \"Todos somos una comunidad. Hay suficiente espacio para todo y gracias a Dios por Top Gun: Maverick y Avatar: The Way of Wat…"
                },
                {
                    "id": 1600102945206534100,
                    "text": "@GUnderground_TV I love all the Putin fanboys coming out on this thread 🤣. Mind the step!  Oops!  Time for a change… https://t.co/IPPjz2PRkH"
                },
                {
                    "id": 1600099186250113000,
                    "text": "Les films sorties en Novembre que j'ai vu:\n-X\n-Pacifiction\n-Armageddon Time\n-Bones and All\n-Inu-Oh\n\nBon Novembre 👌 https://t.co/h9qF8xffUa"
                },
                {
                    "id": 1600095028914704400,
                    "text": "Mis favoritas de Noviembre:\n\n- Trouble Every Day (2001, Claire Denis)\n- Profondo Rosso (1975, Darío Argento)\n- Clos… https://t.co/U8ge7FZalM"
                },
                {
                    "id": 1600092123436445700,
                    "text": "Robert Downey Jr. reacts to Quentin Tarantino's criticism of Marvel movies: 'It is a waste of time to be at war wit… https://t.co/VFfxED4e1h"
                },
                {
                    "id": 1600090238663250000,
                    "text": "Over de kracht van familiebanden en het najagen van de ‘American Dream’.\n\nArmageddon Time is vanaf donderdag  8 dec… https://t.co/AGbRFCSQSR"
                },
                {
                    "id": 1600086921039978500,
                    "text": "That time I compared a team of 8 Thames Water workers drilling through a concreteberg in a sewer to the cast of Arm… https://t.co/HXF2LcGzIG"
                },
                {
                    "id": 1600085627881500700,
                    "text": "Amsterdam and Don't Worry Darling are the major question marks as is making a list before Avatar 2, but otherwise t… https://t.co/R6ddlOotdZ"
                },
                {
                    "id": 1600082177797914600,
                    "text": "RT @WorldElitePod: NEW EPISODE! 🚨🎙️\n\nOn this brand new nostalgia episode, @MarcusElite337 welcomes @JustInTime211 and @JeremyInTime721 from…"
                },
                {
                    "id": 1600081632706584600,
                    "text": "RT @JesulinGonzalez: La mirada de James Gray a su infancia en ARMAGEDDON TIME (2022) no está guiada por la nostalgia ni el sentimentalismo.…"
                },
                {
                    "id": 1600079704580837400,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600078442027810800,
                    "text": "The New Yorker Dergisi 2022’nin en iyi filmlerini sıraladı,\n\n1. Benediction\n2. Nope\n3. Armageddon Time\n4. No Bears… https://t.co/iVNhzBAlcg"
                },
                {
                    "id": 1600076391294193700,
                    "text": "@Guiguiii94 Oh oui, moi aussi j'ai adoré Les Amandiers. Pas vu Le Lycéen, il y a des sujets trop insoutenables même… https://t.co/MG7NJVKytD"
                },
                {
                    "id": 1600075222396604400,
                    "text": "RT @WorldElitePod: NEW EPISODE! 🚨🎙️\n\nOn this brand new nostalgia episode, @MarcusElite337 welcomes @JustInTime211 and @JeremyInTime721 from…"
                },
                {
                    "id": 1600074489651413000,
                    "text": "RT @WorldElitePod: NEW EPISODE! 🚨🎙️\n\nOn this brand new nostalgia episode, @MarcusElite337 welcomes @JustInTime211 and @JeremyInTime721 from…"
                },
                {
                    "id": 1600068525288063000,
                    "text": "I will return in a few months time, looking like someone different, thank you, Armageddon"
                },
                {
                    "id": 1600067679360286700,
                    "text": "armageddon time top3????? sorry but no https://t.co/PZNPmnPPbq"
                },
                {
                    "id": 1600064191989252000,
                    "text": "@KristinaZA @AlbertVanden Me sorprenden estos primeros puestos de la lista: Benediction, Nope, Armageddon Time y Fuego 🤔."
                },
                {
                    "id": 1600062462220722200,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600061950590738400,
                    "text": "Benediction, Nope y Armageddon Time el Top3 de las 30 mejores películas del 2022 según el New Yorker.\nPersonalmente… https://t.co/Pwytoc3Ryh"
                },
                {
                    "id": 1600060866841694200,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600055721537679400,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600050820934164500,
                    "text": "@thesiriusreport For the 1st time the world will experience “ biblical default”😂🤣😂 and Armageddon at once."
                },
                {
                    "id": 1600049954483232800,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600049164091797500,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                },
                {
                    "id": 1600046819005694000,
                    "text": "RT @rickygervais: Tickets go on sale this Friday at 10am local time 🕰️ #Armageddon https://t.co/hgsuml7z2a"
                },
                {
                    "id": 1600044911159644200,
                    "text": "\"Armageddon Time (15)\", Gloucester Guildhall, Gloucester on Tue 6 Dec 2022 7.45PM, @glosguildhall  tickets: https://t.co/ymw138dduU"
                },
                {
                    "id": 1600041977696817200,
                    "text": "RT @QuidVacuo: \"Todos somos una comunidad. Hay suficiente espacio para todo y gracias a Dios por Top Gun: Maverick y Avatar: The Way of Wat…"
                },
                {
                    "id": 1600041725070049300,
                    "text": "@BernardoKastrup There is no 'moral choice' between nuclear armageddon and anything else. Nuclear is the 'winner' e… https://t.co/zO5mdyUHPG"
                },
                {
                    "id": 1600038420360810500,
                    "text": "@GeraldineKell16 I was the same as you growing up. It helped build my immune system. Now every time there’s a bit o… https://t.co/M0mkdjffvB"
                },
                {
                    "id": 1600038332234432500,
                    "text": "Anne Hathaway and Sir Anthony Hopkins star in Armageddon Time, a deeply personal coming-of-age story about the stre… https://t.co/bwPInbrMB6"
                },
                {
                    "id": 1600037932823371800,
                    "text": "RT @GlosGuildhall: Don't miss this complex coming-of-age story with a stellar cast of Anthony Hopkins (The Father), Anne Hatheway (Les Mise…"
                },
                {
                    "id": 1600037326318489600,
                    "text": "Don't miss this complex coming-of-age story with a stellar cast of Anthony Hopkins (The Father), Anne Hatheway (Les… https://t.co/XSP5H39BiB"
                },
                {
                    "id": 1600034086047068200,
                    "text": "RT @ronaldotrancoso: I respect James Gray for admitting how privileged and clueless he was but the way some issues are treated in ARMAGEDDO…"
                },
                {
                    "id": 1600032841718411300,
                    "text": "@engineers_feed If I could give it negative five stars I would have. Total waste of my intergalactic miles. Glad I… https://t.co/Q0w8xbxzuI"
                },
                {
                    "id": 1600030890914029600,
                    "text": "@Lia92n Pues si te gusta Jeremy Strong (cosa normal) mírate la de Armageddon Time! Se marca de un papelón 🤘🏼"
                },
                {
                    "id": 1600028672928338000,
                    "text": "RT @rickygervais: Tickets go on sale this Friday at 10am local time 🕰️ #Armageddon https://t.co/hgsuml7z2a"
                },
                {
                    "id": 1600028494947238000,
                    "text": "RT @QuidVacuo: \"Todos somos una comunidad. Hay suficiente espacio para todo y gracias a Dios por Top Gun: Maverick y Avatar: The Way of Wat…"
                },
                {
                    "id": 1600027197141442600,
                    "text": "RT @TheMoviesRain: “รู้อะไรไหม อย่าไปคิดถึงมันเลย มันมีพื้นที่พอให้กับทุกอย่างอยู่แล้ว ขอบคุณพระเจ้าสำหรับ Top Gun: Maverick และ Avatar: Th…"
                }
            ]
        },
        {
            "id": 497828,
            "original_title": "Triangle of Sadness",
            "overview": "A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged captain. What first appeared Instagrammable ends catastrophically, leaving the survivors stranded on a desert island and fighting for survival.",
            "tweets": [
                {
                    "id": 1600132465766506500,
                    "text": "RT @gmgeiko: I've seen so few films this year, I can't even do a proper end of year best list, but TRIANGLE OF SADNESS wins the top slot fo…"
                },
                {
                    "id": 1600132424536445000,
                    "text": "Sto guardando The Triangle of Sadness e tutte le recensioni delle mie mutual erano “OMMIODIO GUBBIO” e non capivo MA ADESSO… ADESSO SI."
                },
                {
                    "id": 1600131753682776000,
                    "text": "RT @notcapnamerica: So excited @THR has our client Dolly De Leon predicted as a frontrunner for Best Supporting Actress at the upcoming Osc…"
                },
                {
                    "id": 1600131136403144700,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600130731950358500,
                    "text": "I'm watching Triangle of Sadness (2022) https://t.co/K8OQXUu8dq #TriangleOfSadness #trakt"
                },
                {
                    "id": 1600129738538102800,
                    "text": "triangle of sadness 25 rebu aja, kaya balik ke tahun 2010"
                },
                {
                    "id": 1600129214417891300,
                    "text": "2022 en merak ettiğim filmler top 10\n-babylon \n-bones and all ✅\n-after sun\n-tar\n-triangle of sadness\n-burning days… https://t.co/7eG93TbNtP"
                },
                {
                    "id": 1600128353616687000,
                    "text": "RT @PHTVandFilmUPD: . @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance in…"
                },
                {
                    "id": 1600128003320619000,
                    "text": "RT @HabisNontonFilm: Kalo perlu tontonan satir berkualitas cobain Triangle of Sadness deh. Epic! 😂\n\nTentang perjalanan hubungan sepasang mo…"
                },
                {
                    "id": 1600127960198959000,
                    "text": "RT @CinemaSalem: This week at the cinema! \n\nThursday\n\nBLACK FRIDAY • 7:00\nSILENT NIGHT, DEADLY NIGHT • 9:00\n\nFriday\n\nTHE BANSHEES OF INISHE…"
                },
                {
                    "id": 1600127818171527200,
                    "text": "Monday • On-Screen Captions\n\nTRIANGLE OF SADNESS • 4:00\nSHE SAID • 4:15\nVIOLENT NIGHT • 4:45 • 7:30\nTHE MENU • 7:00… https://t.co/ti4lrsDAOr"
                },
                {
                    "id": 1600127815243792400,
                    "text": "Saturday\n\nTHE THIN MAN • 1:30 PM\nTRIANGLE OF SADNESS • 4:00\nSHE SAID • 4:15\nVIOLENT NIGHT• 4:45 • 7:30\nMENU • 7:00… https://t.co/GmYcM6fmEE"
                },
                {
                    "id": 1600127807870279700,
                    "text": "This week at the cinema! \n\nThursday\n\nBLACK FRIDAY • 7:00\nSILENT NIGHT, DEADLY NIGHT • 9:00\n\nFriday\n\nTHE BANSHEES OF… https://t.co/IOyWWhpZHV"
                },
                {
                    "id": 1600127695094190000,
                    "text": "May meeting ako ng 2AM sa kamakalawa kamusta yes babawiin yung igagala ko bukas. Kasi manonood po tayo ng Triangle of Sadness."
                },
                {
                    "id": 1600127257393377300,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600125945632825300,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600125790724624400,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600123199219728400,
                    "text": "RT @HabisNontonFilm: Kalo perlu tontonan satir berkualitas cobain Triangle of Sadness deh. Epic! 😂\n\nTentang perjalanan hubungan sepasang mo…"
                },
                {
                    "id": 1600123088678420500,
                    "text": "RT @notcapnamerica: So excited @THR has our client Dolly De Leon predicted as a frontrunner for Best Supporting Actress at the upcoming Osc…"
                },
                {
                    "id": 1600122976732876800,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600122571290050600,
                    "text": "@hannabossanova The triangle of sadness"
                },
                {
                    "id": 1600121676615733200,
                    "text": "RT @notcapnamerica: So excited @THR has our client Dolly De Leon predicted as a frontrunner for Best Supporting Actress at the upcoming Osc…"
                },
                {
                    "id": 1600120712131653600,
                    "text": "siya ba yung sa triangle of sadness https://t.co/WsYFc58mV0"
                },
                {
                    "id": 1600119577798901800,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600119492180263000,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600119348097872000,
                    "text": "meron pa kaya bukas sa sinehan ng triangle of sadness? 🥲"
                },
                {
                    "id": 1600118700283072500,
                    "text": "RT @lakinyajiu: Kekacauan #TriangleOfSadness meningkatkan kelucuan komedinya, tapi tidak dengan kekuatan pesannya\n\nReview: https://t.co/oFZ…"
                },
                {
                    "id": 1600118411169697800,
                    "text": "acordei pensando nele....ele mesmo o segundo ato de triangle of sadness https://t.co/oO9fJQP8Bm"
                },
                {
                    "id": 1600117232712831000,
                    "text": "Bat walang Triangle of Sadness sa Baguio???"
                },
                {
                    "id": 1600116980786217000,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600116849039282200,
                    "text": "RT @PHTVandFilmUPD: . @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance in…"
                },
                {
                    "id": 1600116228093116400,
                    "text": "RT @TheLexiCinema: What's on today?\n\nLIVING at 9:00pm \n\nTRIANGLE OF SADNESS at 7:00pm \n\nCheck for availability below:\nhttps://t.co/aJyLpffL…"
                },
                {
                    "id": 1600116000006951000,
                    "text": "GLASS ONION (charmless). TRIANGLE OF SADNESS (endless). THE WHITE LOTUS S2 (pointless). SUCCESSION, and media folks… https://t.co/xdZfjMwXzP"
                },
                {
                    "id": 1600115735770312700,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600115449043488800,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600115363756363800,
                    "text": "@vaaxla Have you seen Triangle of Sadness? Somehow, I think they are similar lol"
                },
                {
                    "id": 1600115279123529700,
                    "text": "@EsthervanFenema @xruisx Zie in dit verband de geniale film: triangle of sadness. Het past naadloos bij je boek,… https://t.co/8hnplBg1MG"
                },
                {
                    "id": 1600115267723735000,
                    "text": "RT @notcapnamerica: So excited @THR has our client Dolly De Leon predicted as a frontrunner for Best Supporting Actress at the upcoming Osc…"
                },
                {
                    "id": 1600114692181356500,
                    "text": "RT @PHTVandFilmUPD: . @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance in…"
                },
                {
                    "id": 1600114405521227800,
                    "text": "RT @PHTVandFilmUPD: . @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance in…"
                },
                {
                    "id": 1600114086016319500,
                    "text": "RT @HabisNontonFilm: Kalo perlu tontonan satir berkualitas cobain Triangle of Sadness deh. Epic! 😂\n\nTentang perjalanan hubungan sepasang mo…"
                },
                {
                    "id": 1600112883060203500,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600112859262111700,
                    "text": ". @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance… https://t.co/owbF393hIT"
                },
                {
                    "id": 1600112822549348400,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600112448840683500,
                    "text": "Now watch triangle of sadness https://t.co/YGhfU0DvyA"
                },
                {
                    "id": 1600112323204907000,
                    "text": "RT @djaycoholyc: Sama seperti judulnya: Triangle of Sadness ini menceritakan 3 babak yang berbeda.\n\nTiga-tiganya saling terhubung dengan be…"
                },
                {
                    "id": 1600111324402311200,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600110562037289000,
                    "text": "RT @TarizSolis: Pasangan influencer muda diundang menaiki kapal pesiar mewah khusus orang-orang kelebihan duit. Dari sini, kekacauan hebat…"
                },
                {
                    "id": 1600110423168229400,
                    "text": "Das war ein super Kinoabend gestern. Triangle Of Sadness ist ein etwas anderer Film. Lustig und ernst und abgedreht… https://t.co/KNHEyx8LPY"
                },
                {
                    "id": 1600110402494673000,
                    "text": "RT @Cinetariz: 'Triangle of Sadness' memang bukan karya terbaik Ruben Östlund. Tapi ini jelas yang paling menghibur. Seraya menyentil tingk…"
                }
            ]
        },
        {
            "id": 705996,
            "original_title": "헤어질 결심",
            "overview": "From a mountain peak in South Korea, a man plummets to his death. Did he jump, or was he pushed? When detective Hae-joon arrives on the scene, he begins to suspect the dead man’s wife Seo-rae. But as he digs deeper into the investigation, he finds himself trapped in a web of deception and desire.",
            "tweets": [
                {
                    "id": 1600132598046810000,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600132230705459200,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600132056755101700,
                    "text": "RT @l_AM_ONLY: ✨🌊RT+팔로우 추첨 뱃지 발송🌊)\n\n안녕하세요! @CnackOfficial 과 함께하는 헤어질 결심 장면 뱃지 2번째가 오픈되었습니다:)!💕\n\n영화의 기/승/전/결을 담아 받아보실 때 더욱 영화의 감동을 느끼도록 디자인…"
                },
                {
                    "id": 1600131814911512600,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131694002311200,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131676612755500,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131666898350000,
                    "text": "RT @black00725: &lt;헤어질결심&gt;\n\n나 너 때문에 고생 꽤나 했지만 \n사실 너 아니었으면 내 인생 공허했다\n요렇게 전해주세요 https://t.co/aocSyg7oJz"
                },
                {
                    "id": 1600131522258174000,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131368721481700,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131277843484700,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600131179780649000,
                    "text": "나 계속 희망고문중..헤어질결심 못하겠단말임 ㅠ https://t.co/pfoBBmm58C"
                },
                {
                    "id": 1600130758836113400,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130748404859000,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130623892750300,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130538224091100,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130434314039300,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130195889213400,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600130129560100900,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600129683429130200,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600129595613024300,
                    "text": "&lt;6. 가장 많이 본 영화&gt;\n박찬욱 - &lt;헤어질 결심&gt;\n4번 봤다. 더 보고 싶었는데, 상영기간에 극장에 갈 시간이 많이 안났다. 또 해주면 또 보러 가야지. 마음만은 10번도 넘게 본 과몰입자."
                },
                {
                    "id": 1600129457259700200,
                    "text": "RT @briller613_bts: 🐨 이거 다 먹어보셔야 돼 이거 진짜 \n🐨 기도수! 헤어질 결심 보신 분들은\n🐨 아 근데 아니에요! 드시지 마세요!\n🐨 제가 사야되거든요!\n\n아닠ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ…"
                },
                {
                    "id": 1600129390561865700,
                    "text": "RT @bangtan_abraxas: 이와중에 김남준 씹덕력봐. 지난번에 산 올라가면서 헤어질 결심 기도수 대사 외우더니 이번에는 기도수가 먹는 술 카발란 솔리스트 올로로소 셰리 캐스크 가지고 나옴... https://t.co/rjOg1W3LDl"
                },
                {
                    "id": 1600129248693403600,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600128776444448800,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600128146745221000,
                    "text": "RT @Tabkkugye_33: 🌊헤어질 결심 바다 티코스터🌊\n\n#RT 헤어질 결심의 마지막 장면 속 바다를 구현한 티코스터 입니다! 판매는 크낵(@CnackOfficial)과 함께합니다🥰 자세한 사항은 아래 링크를 참고해주세요٩(◕ᗜ◕)و\n\n🗓20…"
                },
                {
                    "id": 1600127959373082600,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600127873737973800,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600127522967937000,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600126850281656300,
                    "text": "RT @Marmal_0329: 🙅‍♂️헤어질 결심👊\n✒️수량조사📋\n\n🗓️2022-11-30 ~ 2022-12-12\n🏫캠퍼스물/💚당청❤️/ ⛏️삽질삽질눈물눈물🥲\n1월 아이소 현장 판매 예정(마감을 잘 한다면), 통판 예정\n\n수량조사폼\n▶ https:/…"
                },
                {
                    "id": 1600126805092229000,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600126549151604700,
                    "text": "1.올해 첫 영화\n22.01.08관람\n씽2게더(자막)\n2.올 한 해 최고의 영화\n해외 탑건 매버릭\n국내 헤어질 결심\n3.올 한해 최악의 영화\nUMMA\n4.올해 최고의 감독\n찬욱팍\n다니엘스\n5.올해 최고의 배… https://t.co/Pfd2HWYD1K"
                },
                {
                    "id": 1600126358885388300,
                    "text": "RT @Marmal_0329: 🙅‍♂️헤어질 결심👊\n✒️수량조사📋\n\n🗓️2022-11-30 ~ 2022-12-12\n🏫캠퍼스물/💚당청❤️/ ⛏️삽질삽질눈물눈물🥲\n1월 아이소 현장 판매 예정(마감을 잘 한다면), 통판 예정\n\n수량조사폼\n▶ https:/…"
                },
                {
                    "id": 1600126047613509600,
                    "text": "RT @LstGpg8R85NnDsy: 박찬욱 영화 한남 판타지라고 까일 때마다 정서경 들먹이면서 메일 게이즈 아니라고 방패로 써먹는 거 어이없네 ㅋㅋㅋ 헤어질 결심 빨아줄 때는 박찬욱 찬양하고 헤어질 결심 까일 때만 정서경 방패로 써먹음 ㅇㅇ 그럼…"
                },
                {
                    "id": 1600125916826701800,
                    "text": "RT @aesaebee: 여러분이 계속 사랑하고 함께 해주신다면\n한국영화는 때로는\n불도저에 탄 혜영처럼 강렬하게\n헌트의 정도처럼 소신있게\n범죄도시의 마석도처럼 통쾌하게\n헤어질 결심의 서래처럼 꼿꼿하게\n각자의 삶 속에 담긴 수많은 모습으로 항상\n여러분…"
                },
                {
                    "id": 1600125886380269600,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600125489368436700,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600125210233307100,
                    "text": "RT @Marmal_0329: 🙅‍♂️헤어질 결심👊\n✒️수량조사📋\n\n🗓️2022-11-30 ~ 2022-12-12\n🏫캠퍼스물/💚당청❤️/ ⛏️삽질삽질눈물눈물🥲\n1월 아이소 현장 판매 예정(마감을 잘 한다면), 통판 예정\n\n수량조사폼\n▶ https:/…"
                },
                {
                    "id": 1600125035251138600,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600124737849819100,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600124296697114600,
                    "text": "06. 가장 많이 본 영화\n헤어질 결심, 로그원, 테넷을 두 번씩 봤다 테넷은 또 보고 싶긴 해 ㅋㅋ 돌아와 아맥 재개봉"
                },
                {
                    "id": 1600123857679323100,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600123824401354800,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600123749344215000,
                    "text": "RT @swswswllllll: 또 말해줘야돼?\n램몬씨는 매일 씻고 운동 하며 자기계발을 위해 정진하고 취미생활로 헤어질 결심을 즐겨보는 181cm 상남자야.\n\n현실엔 안씻는170cm통스팸몸매에디씨하는남자들이 넘쳐나. 램몬 정도면 현실에서 우리가 만…"
                },
                {
                    "id": 1600123196023660500,
                    "text": "우리 엄마 내가 글케 헤어질 결심 엄마 취향이라고 보라고 보라고 할 때 안보더니 지난주에 보고 대본집 다읽고 지금 3차 중임"
                },
                {
                    "id": 1600123105577689000,
                    "text": "RT @briller613_bts: 🐨 이거 다 먹어보셔야 돼 이거 진짜 \n🐨 기도수! 헤어질 결심 보신 분들은\n🐨 아 근데 아니에요! 드시지 마세요!\n🐨 제가 사야되거든요!\n\n아닠ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ…"
                },
                {
                    "id": 1600122831731593200,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600122468295127000,
                    "text": "헤어질결심 보면서 자야지"
                },
                {
                    "id": 1600122459914526700,
                    "text": "RT @deeplovehalf: 참 허벌나게 잘한다 좋겠다 축구잘해서 우린 BTS 봉준호 기생충 박찬욱 헤어질결심의 나라야"
                },
                {
                    "id": 1600122250996646000,
                    "text": "RT @potsofbasil: 근데 사랑하는 여자가 남자를 위해 자살하는 게 유구한 남성판타지라고들 하는데요…? 나는 문학사에 나오는 여성 자살이 &lt;헤어질 결심&gt;과 얼마나 다른지만 떠오름"
                },
                {
                    "id": 1600122208361144300,
                    "text": "헤어질결심 뱃지 원가양도 구해요\n아래 뱃지를  우선으로구해요\n디엠주세요\n흑도금/금도금 상관없어요:)\n#헤어질결심\n#박해일\n#탕웨이 https://t.co/ShV6bB16ZJ"
                }
            ]
        },
        {
            "id": 676547,
            "original_title": "Prey for the Devil",
            "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
            "tweets": [
                {
                    "id": 1600121157021155300,
                    "text": "Alistair Begg--\"1 Peter 5:8-'your adversary the devil prowls around like a roaring lion, seeking someone to devour.… https://t.co/Rxt3oUtD3i"
                },
                {
                    "id": 1600113077222928400,
                    "text": "When you don't think for yourself, the devil will take hold of your mind through things such as lust, negative thou… https://t.co/uLCEkb6VWQ"
                },
                {
                    "id": 1600088969219227600,
                    "text": "People who are voting for Halloween Ends clearly haven’t seen Prey for the Devil because what the fuck was that mov… https://t.co/dQXWOK9xFc"
                },
                {
                    "id": 1599991041909993500,
                    "text": "RT @pinkn0kia: women in stem? more like women in the clergy, amirightladies? prey for the devil was pretty good, 10/10 best scary movie to…"
                },
                {
                    "id": 1599990990689140700,
                    "text": "RT @thesirenvenus: saw \"Prey for the Devil\" finally\n\nidk why but the line: \"be careful. now that you know the devil, the devil knows you\" s…"
                },
                {
                    "id": 1599964331927490600,
                    "text": "PRAY WITHOUT CEASING. PRAY IN INTERCESSION FOR OTHERS. LIFE IS A WARFARE NOT A FUNFARE. The devil is a wandering pr… https://t.co/1ouBQ8k2YC"
                },
                {
                    "id": 1599914902965334000,
                    "text": "Veamos que Tal ...\n\"Prey for the Devil\" https://t.co/MdaizV4G6N"
                },
                {
                    "id": 1599899851323736000,
                    "text": "RT @OCATCOfficial: On Cinema Season 13 is here! \nS13 Ep1 'Prey for the Devil' is free to watch for all (no HEI Wall!) and can be viewed exc…"
                },
                {
                    "id": 1599898427265282000,
                    "text": "Find out why #DoTheRiteThing is trending on Twitter as we kick off a new week of Top Pun Reviews...\n@Lionsgate… https://t.co/OVys2GLMG3"
                },
                {
                    "id": 1599896760738283500,
                    "text": "All the movies I saw in theaters this year 🫶🏾 idk my most fav but my least fav was def prey for the devil lolz https://t.co/gqNWgJmPKa"
                },
                {
                    "id": 1599893144761270300,
                    "text": "@NOFSpodcast Prey for the Devil - 4/10 and that's only because Colin Salmon was in it and I love his work."
                },
                {
                    "id": 1599877640307245000,
                    "text": "@WeWatchedAMovie Prey for the devil was so much worse than Halloween ends"
                },
                {
                    "id": 1599875381120860200,
                    "text": "RT @HorrorSociety: Prey for the Devil Arrives on Digital December 13 and 4K Ultra HD, Blu-ray Combo Pack, and DVD on January 3 https://t.co…"
                },
                {
                    "id": 1599874196875915300,
                    "text": "PREY FOR THE DEVIL: Experience the true horror of exorcism when PREY FOR THE DEVIL arrives on Digital December 13 a… https://t.co/bZx2InYdB3"
                },
                {
                    "id": 1599830990842925000,
                    "text": "@Electroazure Prey for the Devil"
                },
                {
                    "id": 1599765939188555800,
                    "text": "RT @HotZombieAction: Check out our review of Prey for the Devil! https://t.co/3XV05BLN3w https://t.co/sImEx2hZ5O"
                },
                {
                    "id": 1599751161573015600,
                    "text": "RT @HotZombieAction: Check out our review of Prey for the Devil! https://t.co/3XV05BLN3w https://t.co/sImEx2hZ5O"
                },
                {
                    "id": 1599742424620101600,
                    "text": "@BoostedJess @TheBabylonBee I am an American and a Combat Veteran, you don’t speak for me. I will prey for you as t… https://t.co/YpmoOJffSJ"
                },
                {
                    "id": 1599638400138518500,
                    "text": "I saw Tár alone and enjoyed the film by myself. \n\nI saw Prey for the Devil with a group of friends and we bonded ov… https://t.co/Ak6q9n2QK7"
                },
                {
                    "id": 1599625605074784300,
                    "text": "@GnarlyCactusDad during Prey for the Devil why 😭"
                },
                {
                    "id": 1599608378531401700,
                    "text": "RT @xxxHniar: PREY FOR THE DEVIL https://t.co/EmPcoszENR"
                },
                {
                    "id": 1599608088126161000,
                    "text": "PREY FOR THE DEVIL https://t.co/EmPcoszENR"
                },
                {
                    "id": 1599607796659806200,
                    "text": "I still haven’t seen Prey for the Devil smh"
                },
                {
                    "id": 1599605112120684500,
                    "text": "where tf can you watch Prey for the devil at"
                },
                {
                    "id": 1599595043714891800,
                    "text": "Prey for the Devil is probably the most Catholic movie I have ever seen"
                },
                {
                    "id": 1599569881187246000,
                    "text": "Check out our December 5-6, 2022 screening schedule at SM Cinema #SMCityManila. 🎬\n\nCinema 1 - Prey for the Devil\nCi… https://t.co/H1cZ2PQDwT"
                },
                {
                    "id": 1599520854941241300,
                    "text": "RT @Lionsgate: 🎬: PREY FOR THE DEVIL - NOW PLAYING in theaters."
                },
                {
                    "id": 1599513572396056600,
                    "text": "@WillSloanEsq Prey For The Devil making more money than most of these movies on the list is still very funny."
                },
                {
                    "id": 1599496208703070200,
                    "text": "RT @Guard_stephan: Be very careful who you serve, without realizing it you serve the devil and give your soul to him, you will be severely…"
                },
                {
                    "id": 1599437375435784200,
                    "text": "@talk2veee Plan of becoming a minister, the devil don't sleep he is always looking for prey and loopholes in Christ… https://t.co/GZgWLJRwg7"
                },
                {
                    "id": 1599325218106810400,
                    "text": "Be very careful who you serve, without realizing it you serve the devil and give your soul to him, you will be seve… https://t.co/n6Ebfeehzg"
                },
                {
                    "id": 1599283583742447600,
                    "text": "In this type of situation, you can’t lose. You can’t ‘ruin’ your life, because God won’t allow you to and you can’t… https://t.co/hRSuWaP9FN"
                },
                {
                    "id": 1599261100507218000,
                    "text": "Prey for the devil was suuuuuuch a good movie. I don’t know why it took me so long to see it."
                },
                {
                    "id": 1599255240402165800,
                    "text": "@Taeler_Hendrix Prey For The Devil https://t.co/wPGhuDi0lH"
                },
                {
                    "id": 1599177841924771800,
                    "text": "[doing double feature of Prey for the Devil and Bones &amp; All\n\ncurrently having food court intermission of pizza ziti… https://t.co/FddypxN3PA"
                },
                {
                    "id": 1599169299994022000,
                    "text": "I’ve seen Barbarian, Smile and now all I need to see now is Prey for the Devil."
                },
                {
                    "id": 1599167620598861800,
                    "text": "saw \"Prey for the Devil\" finally\n\nidk why but the line: \"be careful. now that you know the devil, the devil knows y… https://t.co/63T9L2WzPB"
                },
                {
                    "id": 1599144702791454700,
                    "text": "RT @HotZombieAction: Check out our review of Prey for the Devil! https://t.co/3XV05BLN3w https://t.co/sImEx2hZ5O"
                },
                {
                    "id": 1599143743814500400,
                    "text": "RT @HotZombieAction: Check out our review of Prey for the Devil! https://t.co/3XV05BLN3w https://t.co/sImEx2hZ5O"
                },
                {
                    "id": 1599107267462254600,
                    "text": "فيلم رعب Prey for the Devil مترجم - جديد سينما ma https://t.co/UkVLCazidT"
                },
                {
                    "id": 1599076156665630700,
                    "text": "RT @HotZombieAction: Check out our review of Prey for the Devil! https://t.co/3XV05BLN3w https://t.co/sImEx2hZ5O"
                },
                {
                    "id": 1599075117371658200,
                    "text": "@lotus__point I still can’t believe I went to Prey for the Devil instead of Tar. Happy you also really liked Bones and All"
                },
                {
                    "id": 1599065329971273700,
                    "text": "Welcome  to Mwindajis urban fantasy series: https://t.co/Z34MXBs0X0 Have you seen Prey for the Devil? Check out my… https://t.co/zqfr1wqDMR"
                },
                {
                    "id": 1599058227760713700,
                    "text": "[한글자막] 프레이 포 더 데블 Prey for the Devil .2022.KOR.2160p.mp4.torrent https://t.co/Y4znsfZFdr"
                },
                {
                    "id": 1598994613154762800,
                    "text": "Check out our December 4, 2022 screening schedule at SM Cinema #SMCityManila. 🎬\n \nCinema 1 - Prey for the Devil\nCin… https://t.co/NLMlgvCyFa"
                },
                {
                    "id": 1598910672468775000,
                    "text": "I pray 2 god the guys live for ever. I prey to the devil that all opps DIE!"
                },
                {
                    "id": 1598892579357073400,
                    "text": "HD – PREY FOR THE DEVIL 2022- HORROR MOVIE / Official Trailer – Virginia Madsen, Jacqueline Byers https://t.co/21oJp7CKcJ"
                },
                {
                    "id": 1598865998798499800,
                    "text": "1. Smile\n2. The Menu\n3. Bad Samaritan \n4. Prey for the Devil"
                },
                {
                    "id": 1598852918417166300,
                    "text": "Check out our December 3, 2022 screening schedule at SM Cinema #SMCityManila. 🎬\n \nCinema 1 - Prey for the Devil\nCin… https://t.co/CatWrhyoVv"
                },
                {
                    "id": 1598829369048199200,
                    "text": "Devil shrikes make their homes in caverns and dark forests where they create a spiked lair referred to as an \"abatt… https://t.co/qTVMlzV3Vv"
                }
            ]
        },
        {
            "id": 790867,
            "original_title": "The Eternal Daughter",
            "overview": "An artist and her elderly mother confront long-buried secrets when they return to a former family home, now a hotel haunted by its mysterious past.",
            "tweets": [
                {
                    "id": 1600131819940499500,
                    "text": "RT @NadricTvPlus: 🚨MARTIN SCORSESE FILM🚨\n\nPrésent à l’avant 1ère du film The Eternal Daughter, Martin Scorsese a répondu à quelques questio…"
                },
                {
                    "id": 1600125500554240000,
                    "text": "RT @Buffalo8Pro: The new Robert De Niro action thriller \"Savage Salvation\" with post-production by Buffalo 8 is now playing in select theat…"
                },
                {
                    "id": 1600120668552499200,
                    "text": "RT @korimakorima: 「私がアカデミー助演女優賞を貰った2007年は、他の受賞者も皆ノースアメリカ以外の演者で、記者陣はヨーロッパの皆さんにとってオスカーとはどのような意味を……と、私達に対して媚びると同時に少し見下した態度でいらしたのを覚えています」\n（ティルダ…"
                },
                {
                    "id": 1600120421604540400,
                    "text": "The Family Plot. https://t.co/JitxkuEW2x"
                },
                {
                    "id": 1600114380510634000,
                    "text": "RT @korimakorima: 「私がアカデミー助演女優賞を貰った2007年は、他の受賞者も皆ノースアメリカ以外の演者で、記者陣はヨーロッパの皆さんにとってオスカーとはどのような意味を……と、私達に対して媚びると同時に少し見下した態度でいらしたのを覚えています」\n（ティルダ…"
                },
                {
                    "id": 1600113049540911000,
                    "text": "RT @cwmoss7: #ベスト映画2022 📕New Yorker誌Richard Brody30撰📌\n１Benediction\n２NOPE\n３アルマゲドン・タイム\n４No Bears🇮🇷\n５愛と激しさをもって🇫🇷\n６砂利道🇮🇷\n７アムステルダム\n８Saint Omer\n９…"
                },
                {
                    "id": 1600110078480515000,
                    "text": "The Eternal Daughter - YouTube https://t.co/9nEnLjQked via @instapaper"
                },
                {
                    "id": 1600109550346023000,
                    "text": "The Eternal Daughter (2022/🇬🇧)\n• dir. Joanna Hogg https://t.co/Dk9vOBsqIC https://t.co/6McxpbXnaj"
                },
                {
                    "id": 1600109543706747000,
                    "text": "RT @akstanwyck: Tilda Swinton Explains the Mysterious Twist of ‘The Eternal Daughter’ and How Tony Gilroy Changed Her Life https://t.co/DQu…"
                },
                {
                    "id": 1600106624605032400,
                    "text": "The Eternal Daughter is a beautiful movie that plays like a BBC Play for Today, and you have to understand that this is not a diss."
                },
                {
                    "id": 1600106514890469400,
                    "text": "RT @NadricTvPlus: 🚨MARTIN SCORSESE FILM🚨\n\nPrésent à l’avant 1ère du film The Eternal Daughter, Martin Scorsese a répondu à quelques questio…"
                },
                {
                    "id": 1600106312180064300,
                    "text": "RT @terrordrivebr: » The Eternal Daughter (2022)\n• 𝐥𝐞𝐠𝐞𝐧𝐝𝐚𝐝𝐨\n\nhttps://t.co/YeJm31VF8b https://t.co/hf5C8mi08r"
                },
                {
                    "id": 1600105756657094700,
                    "text": "RT @NadricTvPlus: 🚨MARTIN SCORSESE FILM🚨\n\nPrésent à l’avant 1ère du film The Eternal Daughter, Martin Scorsese a répondu à quelques questio…"
                },
                {
                    "id": 1600104048568729600,
                    "text": "People are so obsessed over Don’t Worry Darling and Amsterdam being on the list they missed the great underrated fi… https://t.co/qXd7ZJSgW7"
                },
                {
                    "id": 1600099767631065000,
                    "text": "🚨MARTIN SCORSESE FILM🚨\n\nPrésent à l’avant 1ère du film The Eternal Daughter, Martin Scorsese a répondu à quelques q… https://t.co/faERk1sn6W"
                },
                {
                    "id": 1600098042907984000,
                    "text": "The Eternal Daughter movie review (2022) https://t.co/50GJHw0pSG"
                },
                {
                    "id": 1600092717366710300,
                    "text": "Watched the eternal daughter.\n\nCan anyone explain it please?"
                },
                {
                    "id": 1600091366972829700,
                    "text": "RT @erdemtatar: Ebeveynlerimizin asla tamamen öğrenemeyeceğimiz yaşamları, duyguları, sırları ve nihayetinde pişmanlıklarına dair kusursuza…"
                },
                {
                    "id": 1600090828650598400,
                    "text": "Ebeveynlerimizin asla tamamen öğrenemeyeceğimiz yaşamları, duyguları, sırları ve nihayetinde pişmanlıklarına dair k… https://t.co/OrPuKl7aWI"
                },
                {
                    "id": 1600089596414435300,
                    "text": "#wedding - Surgeons unite to tie knot. My daughter Prasamita with her life partner Anil on Dec 2nd 2022. Bless the… https://t.co/Z1qpWUluJU"
                },
                {
                    "id": 1600088334847672300,
                    "text": "RT @themellowing: #NowWatching 📽️\n\nThe Eternal Daughter\n\nReleased 2022\nDirected by Joanna Hogg\n\n#TildaSwinton #BritishFilm https://t.co/BXX…"
                },
                {
                    "id": 1600086599143932000,
                    "text": "Tilda Swinton plays two roles in a new haunting suspense, THE ETERNAL DAUGHTER. Free ELF and Member Event this week… https://t.co/ksEMyIE50S"
                },
                {
                    "id": 1600085164498952200,
                    "text": "RT @korimakorima: 「私がアカデミー助演女優賞を貰った2007年は、他の受賞者も皆ノースアメリカ以外の演者で、記者陣はヨーロッパの皆さんにとってオスカーとはどのような意味を……と、私達に対して媚びると同時に少し見下した態度でいらしたのを覚えています」\n（ティルダ…"
                },
                {
                    "id": 1600082936782815200,
                    "text": "「私がアカデミー助演女優賞を貰った2007年は、他の受賞者も皆ノースアメリカ以外の演者で、記者陣はヨーロッパの皆さんにとってオスカーとはどのような意味を……と、私達に対して媚びると同時に少し見下した態度でいらしたのを覚えています」… https://t.co/7ItUa1O5mt"
                },
                {
                    "id": 1600079999335268400,
                    "text": "RT @themellowing: #NowWatching 📽️\n\nThe Eternal Daughter\n\nReleased 2022\nDirected by Joanna Hogg\n\n#TildaSwinton #BritishFilm https://t.co/BXX…"
                },
                {
                    "id": 1600078442027810800,
                    "text": "The New Yorker Dergisi 2022’nin en iyi filmlerini sıraladı,\n\n1. Benediction\n2. Nope\n3. Armageddon Time\n4. No Bears… https://t.co/iVNhzBAlcg"
                },
                {
                    "id": 1600064813987639300,
                    "text": "RT @terrordrivebr: » The Eternal Daughter (2022)\n• 𝐥𝐞𝐠𝐞𝐧𝐝𝐚𝐝𝐨\n\nhttps://t.co/YeJm31VF8b https://t.co/hf5C8mi08r"
                },
                {
                    "id": 1600064135349170200,
                    "text": "Pearl, The Whale, Kurak Günler, Tár, Aftersun, The Eternal Daughter, Pinocchio, Mickey 17, Oppenheimer ve Safdie’le… https://t.co/iSSTkJSSBF"
                },
                {
                    "id": 1600054800019701800,
                    "text": "Just watched a movie “The eternal daughter “….cried 😞😞\nI miss you so much Mum!"
                },
                {
                    "id": 1600052708152574000,
                    "text": "Tilda Swinton Explains the Mysterious Twist of ‘The Eternal Daughter’ and How Tony Gilroy Changed Her Life - The ac… https://t.co/c3vrHq8u8X"
                },
                {
                    "id": 1600052385279197200,
                    "text": "The eternal daughter is alright"
                },
                {
                    "id": 1600052176037941200,
                    "text": "RT @dailyleodicapri: Some exciting news about #LeonardoDiCaprio’s new film #KillersOfTheFlowerMoon from director #Scorsese himself! Recentl…"
                },
                {
                    "id": 1600048519246540800,
                    "text": "RT @cwmoss7: #ベスト映画2022 📕New Yorker誌Richard Brody30撰📌\n１Benediction\n２NOPE\n３アルマゲドン・タイム\n４No Bears🇮🇷\n５愛と激しさをもって🇫🇷\n６砂利道🇮🇷\n７アムステルダム\n８Saint Omer\n９…"
                },
                {
                    "id": 1600047686165463000,
                    "text": "RT @cwmoss7: #ベスト映画2022 📕New Yorker誌Richard Brody30撰📌\n１Benediction\n２NOPE\n３アルマゲドン・タイム\n４No Bears🇮🇷\n５愛と激しさをもって🇫🇷\n６砂利道🇮🇷\n７アムステルダム\n８Saint Omer\n９…"
                },
                {
                    "id": 1600046732561109000,
                    "text": "RT @Buffalo8Pro: The new Robert De Niro action thriller \"Savage Salvation\" with post-production by Buffalo 8 is now playing in select theat…"
                },
                {
                    "id": 1600046550201180200,
                    "text": "Nuevo triunfo de Joanna Hogg con THE ETERNAL DAUGHTER, una historia de fantasmas legataria de la bruma y las memori… https://t.co/sVDVbvYjyP"
                },
                {
                    "id": 1600045661969604600,
                    "text": "#ベスト映画2022 📕New Yorker誌Richard Brody30撰📌\n１Benediction\n２NOPE\n３アルマゲドン・タイム\n４No Bears🇮🇷\n５愛と激しさをもって🇫🇷\n６砂利道🇮🇷\n７アムステルダム\n８S… https://t.co/JhdVNvOdLm"
                },
                {
                    "id": 1600043897627058200,
                    "text": "the best part is that these don’t even begin to capture the godliness I witnessed unfold before me this year. ke mo… https://t.co/OeslThPQHf"
                },
                {
                    "id": 1600042902515847200,
                    "text": "‘The Eternal Daughter’ Review: Two Glorious Sides of Tilda Swinton https://t.co/ga844AC5Be"
                },
                {
                    "id": 1600042708030070800,
                    "text": "the eternal daughter desde la perspectiva de la recepcionista"
                },
                {
                    "id": 1600038742701449200,
                    "text": "the eternal daughter (2022) starring tilda swinton and tilda swinton is the longest 90 minute movie I’ve ever endur… https://t.co/KIbbWj92El"
                },
                {
                    "id": 1600035791941513200,
                    "text": "RT @erickohn: Tilda Swinton on the Oscars\nhttps://t.co/xoVTwtFFik https://t.co/URYVQUL8i7"
                },
                {
                    "id": 1600031804701876200,
                    "text": "RT @IndieWire: Tilda Swinton explained how the audacious material in “The Eternal Daughter” tied into the bigger picture of her career to d…"
                },
                {
                    "id": 1600028888469495800,
                    "text": "Tilda Swinton,\nNardia, Suspiria gibi korku fantazi türünde ki filmlerinden sonra tarzını değiştirerek, diyaloglarda… https://t.co/iQjfGdrgpZ"
                },
                {
                    "id": 1600020256080031700,
                    "text": "@kosmistern bestie watch the eternal daughter"
                },
                {
                    "id": 1600014312562692000,
                    "text": "I was lucky enough to see THE ETERNAL DAUGHTER at @filmcenter tonight, and I am now asking that Tilda Swinton be no… https://t.co/KUvgPJwmPN"
                },
                {
                    "id": 1600013167823814700,
                    "text": "Joanna Hogg and Tilda Swinton reunite in a mystery that marks one of the year’s best films. https://t.co/o4La78Fznj"
                },
                {
                    "id": 1600001678689767400,
                    "text": "RT @IndieWire: Tilda Swinton explained how the audacious material in “The Eternal Daughter” tied into the bigger picture of her career to d…"
                },
                {
                    "id": 1599994149989625900,
                    "text": "(watched the eternal daughter tonight)"
                },
                {
                    "id": 1599993893457899500,
                    "text": "RT @hafilova: THE ETERNAL DAUGHTER mungkin bukan horor yg kamu cari meski ia punya set di hotel tua dan ada Tilda Swinton yg berperan ganda…"
                }
            ]
        },
        {
            "id": 736732,
            "original_title": "브로커",
            "overview": "Boxes are left out for people to anonymously drop off their unwanted babies.",
            "tweets": [
                {
                    "id": 1600126077476962300,
                    "text": "RT @iu_bluewing: 220612 브로커 영등포 무대인사 퇴근길👋🏻\n🐰? 🐥? 🐯?🐱?\n#아이유 #이지은 #IU #브로커 https://t.co/0RIdxwVqXZ"
                },
                {
                    "id": 1600125904893902800,
                    "text": "RT @iu_bluewing: 220624 ICN 출국✈️\n🐯  🐯  🐯  🐯 \n#아이유 #이지은 #IU #브로커 https://t.co/5UDO7D2ibC"
                },
                {
                    "id": 1600124697592893400,
                    "text": "#광대축소\n코코피 브로커무대인사 주원초 여주송어 \n오프 https://t.co/3afTVV34DU"
                },
                {
                    "id": 1600123422981619700,
                    "text": "래빈이의 능력은 무의식을 구축하는 것 신청려와 접촉만 할 수 있다면 구축 자체는 어렵지 않았음 문제는 어떻게 접촉 하느냐는 건데...\n브로커의 이름은 유진 붉은 고수머리 남자 그는 가이드 청려에 대해 알고… https://t.co/BtaioIGB63"
                },
                {
                    "id": 1600122035786522600,
                    "text": "RT @fourttwo_: 호디니 외계인인데\n지구최신유행 얼기설기 엮어 걸친거면 어캄...\n지구브로커 솜씨가 좋다했단 말이야...\n(지구브로커: 이창휸) https://t.co/EVROzAvHQi"
                },
                {
                    "id": 1600118851760709600,
                    "text": "RT @Jordan_Uaena: Go #Broker ! 🥳❤️\nSi vous êtes en France, allez le voir, un film touchant et un casting ⭐️⭐️⭐️⭐️⭐️\n#브로커"
                },
                {
                    "id": 1600116491914924000,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1600115470719684600,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600115109832949800,
                    "text": "홉이💌2 (브로커가 도시가 아닌 마을로 변경되었습니다🧐 영리한!😎 도시를 썼는데 맥락 때문에 인공지능도 알아차림😂😂😂)\n워!!!! 시간이 정말 빠르다!!!😱 인스타그램을 만든지 벌써 1년!!!!😱😍💘🥰 나의… https://t.co/kxezG11tre"
                },
                {
                    "id": 1600112434340995000,
                    "text": "면정학이라는데 제 생각엔 그 브로커를 없애버리면 이 점조직 중에 하나가 빠지니까 그 조선족 애가 잡히더라도..."
                },
                {
                    "id": 1600112138101850000,
                    "text": "물론 브로커나 포주를 잡는 건 존나 찬성인데 은근 슬쩍 섹스에 미친 성매수자들 지우기 하는 건 그 어떤 의미도 없음"
                },
                {
                    "id": 1600111627256627200,
                    "text": "수요없는 공급은 없음\n\n성매매가 돈이 안 되면 됨\n아무도 안 사면 된다고 한국 남자들아\n\n초중고 성교육 시간에 잠만 잤나본데 '가출청소년' 이 경제적 어려움으로 브로커를 만나 '성매도자' 가 되어 못 빠져나… https://t.co/GPjUzFmPth"
                },
                {
                    "id": 1600110094330790000,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600109993256456200,
                    "text": "신장 콩팥 장기 팔아요..  진짜 숨이 막힐 정도로 힘듭니다. 브로커나 업자분들 연락 부탁드려요\n\n혼자 찾아서는 답이 없어요  조금이라도 좋으니 정보 공유 부탁드립니다.\n같이 찾아보실분도 연락주세요\n텔레그램… https://t.co/AqsCuBVLbJ"
                },
                {
                    "id": 1600104402571776000,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600104004310425600,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600103028258111500,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600101800035565600,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1600099220765016000,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1600098027267846100,
                    "text": "검찰놈들도 마약 브로커랑 한패라는 합리적인 의심 밖에 안들죠 https://t.co/p0PRbuHMLX"
                },
                {
                    "id": 1600091910265536500,
                    "text": "RT @rjfjdqoddl: 2011년 당시 법조 출입기자였던 김만배는\n도이치모터스 주가조작 사건 김건희의 이름이\n등장하는 &lt;공범 진술서&gt;를 입수했음에도\n이걸 기사화 하지 않고 덮었어.\n\n윤석열은 대장동 불법대출 브로커\n조우형을 덮었고.\n\n김만배\n\"…"
                },
                {
                    "id": 1600089959305605000,
                    "text": "자기를 희생하면서 명예로운 삶을 선택한 사람들이 힘들다는 이야기에도 ‘돈만 밝히는 의사들’ ‘국민 생명을 볼모로’ 이따위 소리나 해대고 심평원은 삭감이나 할 줄알고 환자들은 브로커 변호사 끼고 ‘예정된’ 나… https://t.co/dpGUcs0ILf"
                },
                {
                    "id": 1600089771388600300,
                    "text": "한국엔 브로커가 없답니다"
                },
                {
                    "id": 1600087893761925000,
                    "text": "오랜만에 외국으로 한국 과자 보내려는데 뭐 보내야지…? 브로커 업무(?) 잘 해내야만…"
                },
                {
                    "id": 1600082219623927800,
                    "text": "이런일을 맡아 하는 브로커가 있답니다. 밀입국을 했다면 백프로 브로커랑 연관이 있을거랍니다."
                },
                {
                    "id": 1600082217866121200,
                    "text": "RT @happier0999: 유동규·남욱vs김만배·정영학\n“이재명 의지”\n“사실과 달라”\n&lt;김만배의 육성 녹취록을 공개&gt;\n김만배와 신학림 전 언론노조위원장과의 대화입니다.\n​&gt;김만배는 \"조우형(대장동 브로커)이 날 찾아와 살려달라고 했다. 내가 윤…"
                },
                {
                    "id": 1600074985170575400,
                    "text": "RT @trashfcku: 아니\n'아래로 흘러내리는 장식있는 귀걸이는 무중력 환경에선 거추장스러움=지구 출신이라는 디자인적 증거' 설 \n원래도 공식에서 공인되든 아니든 되게 매력적인 이야기라 생각했는데\n이 정황상 비밀조직같은거 하는 것 같은 지구행…"
                },
                {
                    "id": 1600074376778481700,
                    "text": "RT @trashfcku: 아니\n'아래로 흘러내리는 장식있는 귀걸이는 무중력 환경에선 거추장스러움=지구 출신이라는 디자인적 증거' 설 \n원래도 공식에서 공인되든 아니든 되게 매력적인 이야기라 생각했는데\n이 정황상 비밀조직같은거 하는 것 같은 지구행…"
                },
                {
                    "id": 1600071783796813800,
                    "text": "[기자수첩] 공공입찰 블법 브로커, 이제는 근절해야"
                },
                {
                    "id": 1600069255201886200,
                    "text": "우와~ 겐지팟지 먹었더염^^\n사실 나 아니고 .   .   .\n오늘 오버워티 못하능데\n데이터브로커까지 얼마 안남아서\n몽총이가 대신해주는즁 https://t.co/kJsupQQodX"
                },
                {
                    "id": 1600067047249313800,
                    "text": "RT @SoYoungYun9: @worrynet 실제로 브로커랑 결탁해서 커미션챙기고 이지랄하나요 종교장사꾼들 드러워죽것슴다 한국에 빽빽한 빨간 십자가만봐도 열받는데 으휴 ㅠㅠ"
                },
                {
                    "id": 1600063662257213400,
                    "text": "RT @area284: 사이좋은 미들브로커 https://t.co/Y3VhNP6KeC"
                },
                {
                    "id": 1600045700506538000,
                    "text": "코딩학원 = 있음\n논문 브로커 = 있음\n봉사활동 브로커 = 있음\n대외 활동  브로커 = 있음\n\n농어촌브로커 = 없음\n유공자 브로커 = 없음"
                },
                {
                    "id": 1600045113652101000,
                    "text": "RT @hutton_day: 농어촌 전형이 그렇게 개꿀이면 지금 부자들은 다 애들 태어나자마자 농어촌에 집사놓고 거기서 학교다니고 학원다니는 걸 전문적으로 컨설팅 해주는 브로커가 있었을거다 근데 현실은 다 대치동에 몰려있잖아?"
                },
                {
                    "id": 1600044140300902400,
                    "text": "농어촌 전형이 그렇게 개꿀이면 지금 부자들은 다 애들 태어나자마자 농어촌에 집사놓고 거기서 학교다니고 학원다니는 걸 전문적으로 컨설팅 해주는 브로커가 있었을거다 근데 현실은 다 대치동에 몰려있잖아?"
                },
                {
                    "id": 1600034955392061400,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1600028321655722000,
                    "text": "RT @rumbleliar: 가버나움에서 가장 좋아하는 장면은 자인이 가짜 여권을 만들어 떠날 불안한 여정에 앞서 어느나라로 갈지 고민하며 브로커에게 어디가 더 예뻐요? 묻는 것이었다 그렇지 그게 네가 맨발로 계속해서 걷는 이유지 너는 그이유가 뭔지…"
                },
                {
                    "id": 1600027126711083000,
                    "text": "RT @treti333: 정영학 데스노트 오른 사람들은 어떻게 됐을까?\n\n1. 용인 동천 개발사업을 함께한 'ㅋ' 업체의 대표 P씨\n\n2. 대장동 초기개발업자인 이강길 전 씨세븐 대표\n\n3. 남욱 변호사 + 부산저축은행 대출 브로커 조우형\n\n4. 대…"
                },
                {
                    "id": 1600023147889455000,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1600022439131771000,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1600022434735792000,
                    "text": "RT @filmscoreens: @ParisCinemaClub @forumdesimages 🇰🇷🎬🎟️🍿 Des @filmscoreens en salles :\n* Korean thriller @ParisCinemaClub : https://t.co/B…"
                },
                {
                    "id": 1600022227755204600,
                    "text": "@ParisCinemaClub @forumdesimages 🇰🇷🎬🎟️🍿 Des @filmscoreens en salles :\n* Korean thriller @ParisCinemaClub :… https://t.co/FasewN19Hy"
                },
                {
                    "id": 1600013338939121700,
                    "text": "RT @SoYoungYun9: @worrynet 실제로 브로커랑 결탁해서 커미션챙기고 이지랄하나요 종교장사꾼들 드러워죽것슴다 한국에 빽빽한 빨간 십자가만봐도 열받는데 으휴 ㅠㅠ"
                },
                {
                    "id": 1600012221073195000,
                    "text": "현재 제가주문한\n브로커 일본판 블루레이는 아직 일본에 있습니다 일본내 배대지입고지연..으로인해\n많이늦는다고하네요 너무늦어서 내년넘겨버리는거 아닐련지 걱정이"
                },
                {
                    "id": 1600008924526448600,
                    "text": "RT @rjfjdqoddl: 김만배가 뭘 믿고 저리 버티는걸까?\n\n\"내가 가진 카드면 윤석열은 죽어\"\n\n김만배는 김건희 이름이 등장하는\n도이치 주가조작 &lt;공범 진술서&gt;까지 확보하고도\n기사화 하지 않고 덮었고\n\n윤석열은 대장동 불법대출 브로커\n조우형을…"
                },
                {
                    "id": 1599996471587504000,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1599988474006089700,
                    "text": "#가성비마사지건\n핸드폰사진작가 브로커무대인사 당산오돌인덕원점 \n오프 https://t.co/PD8vUN265B"
                },
                {
                    "id": 1599988110292824000,
                    "text": "RT @_itsmerys: #Broker #브로커\n#LeeJieun #이지은 #IU #아이유 \n🔗 https://t.co/xsC80YyUrj https://t.co/cOZdUUWfvT"
                },
                {
                    "id": 1599971505957662700,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                },
                {
                    "id": 1599970641201229800,
                    "text": "RT @Termidor1973: @qww9609 정치탄압 프레임 만들려다 처참하게 실패.\n애초에 이재명 주변 무리가 전부 부동산 브로커고 정진상도 정치인이 아닌지라.\n애초에 이재명도 도지사는 정치인 아니기도 하고.\n시정잡배 같은 짓의 말로입니다."
                }
            ]
        },
        {
            "id": 517302,
            "original_title": "Pahanhautoja",
            "overview": "12 year old Tinja is desperate to please her mother, a woman obsessed with presenting the image of a perfect family. One night, Tinja finds a strange egg. What hatches is beyond belief.",
            "tweets": [
                {
                    "id": 1599777501286662100,
                    "text": "Una niña encuentra un huevo en el bosque y lo lleva a escondidas a su casa. El huevo va creciendo y lo que nace cam… https://t.co/G4XNuVf5EG"
                },
                {
                    "id": 1599704320575881200,
                    "text": "✅​EGO (HATCHING / PAHANHAUTOJA) (2022)🔴​🔴Trailer Oficial Español Subtitu... https://t.co/eLPFGe52lu via @YouTube"
                },
                {
                    "id": 1599523552394641400,
                    "text": "RT @UrbanAstroNYC: Hatching (2022, Finnish: Pahanhautoja) is a movie in which a gymnast daughter desperately seeking the approval of her de…"
                },
                {
                    "id": 1599504833978912800,
                    "text": "Hatching (2022, Finnish: Pahanhautoja) is a movie in which a gymnast daughter desperately seeking the approval of h… https://t.co/cC2gg0iHx7"
                },
                {
                    "id": 1599162028631167000,
                    "text": "Fui a ver #Hatching #Pahanhautoja y estuvo chidisima. El problema es que me fui en ayuno xq cené pesado a noche y n… https://t.co/3sjRACwn4g"
                },
                {
                    "id": 1598741125384220700,
                    "text": "Qué buena película es Pahanhautoja (aquí le pusieron Cría Siniestra 🙄) recién llegó a MX y volver a verla ahora en… https://t.co/g6dXRoY5CU"
                },
                {
                    "id": 1598171372500705300,
                    "text": "RT @aramlacayo: @AdictoTerror No.. y menos después de ver Hatching (Pahanhautoja, Finlandia 2022) https://t.co/OEoCStpZXn"
                },
                {
                    "id": 1597989862585806800,
                    "text": "282. Pahanhautoja (Hatching, 2022). Dir. Hanna Bergholm. 4/5.\n\nTiene mucho cliché y por eso puede que no sea tan me… https://t.co/YOwYnTXlCR"
                },
                {
                    "id": 1597903547412406300,
                    "text": "Torille!\n\nPahanhautoja on yksi parhaimmista elokuvista 2022 🐣\n\nhttps://t.co/hPqOzPOS0L"
                },
                {
                    "id": 1597780087780176000,
                    "text": "@AdictoTerror No.. y menos después de ver Hatching (Pahanhautoja, Finlandia 2022) https://t.co/OEoCStpZXn"
                },
                {
                    "id": 1597701783341895700,
                    "text": "RT @PaulConRO: Yesterday I watched my first Danish movie \"Speak no evil\". I'm still shocked. The first Nordic movie I ever saw was \"Pahanha…"
                },
                {
                    "id": 1597679942351065000,
                    "text": "@PaulConRO Goddamn I am Finnish and I have not even heard of the Pahanhautoja 😬 😁"
                },
                {
                    "id": 1597555929696047000,
                    "text": "Yesterday I watched my first Danish movie \"Speak no evil\". I'm still shocked. The first Nordic movie I ever saw was… https://t.co/rwTWw1NCOd"
                },
                {
                    "id": 1597182811290865700,
                    "text": "RT @Sirenstorm: Buzzfeedin parhaat 24 kansainvälistä elokuvaa -listalla ei pelkästään yksi vaan kaksi suomalaista: Hytti nro 6 ja Pahanhaut…"
                },
                {
                    "id": 1597156141368508400,
                    "text": "Buzzfeedin parhaat 24 kansainvälistä elokuvaa -listalla ei pelkästään yksi vaan kaksi suomalaista: Hytti nro 6 ja P… https://t.co/nYyz3GLQu4"
                }
            ]
        }
    ])
    const [currentDisplay, setCurrentDisplay] = useState(0);
    const fetchMovieList = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:3030/api/movielist',
            headers: { }
        };

        axios(config)
            .then(function (response) {
                setAllMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        //fetchMovieList();
        setCurrentDisplay(0);
    }, []);

    const handleLike = () => {
        setCurrentDisplay(prev => {
            if (prev === allMovies.length) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    const handlePass = () => {
        setCurrentDisplay(prev => {
            if (prev === allMovies.length - 1) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    return(
        <div className={"bg-gray-300 h-screen"}>
            <div className={"w-screen flex justify-center pt-32"}>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handleLike}>Like</button>
                <div className={"w-1/3 h-2/3 border-2 border-gray-700 rounded-xl my-auto flex flex-col justify-center font-quicksand font-bold text-[20px]"}>
                    <h1 className={"mb-8 text-center"}>{allMovies[currentDisplay].original_title}</h1>
                    <p className={"px-12"}>{allMovies[currentDisplay].overview}</p>
                </div>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handlePass}>Pass</button>
            </div>
            <h1 className={"mt-16 text-center text-xl"}>What's On twitter</h1>
            <div class="overflow-y-auto h-1/3 mx-8 mt-8 border-2 border-gray-700 p-4">
                {allMovies[currentDisplay].tweets.map(each => {
                    return <p key={each.id} className={"border-2 border-gray-700 rounded-lg m-4 px-8 py-6"}>{each.text}</p>
                })}
            </div>
        </div>
    )
}

export default Dashboard;
