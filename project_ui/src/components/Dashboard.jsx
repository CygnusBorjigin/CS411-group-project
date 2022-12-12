import axios from "axios";
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [allMovies, setAllMovies] = useState([{"original_title": "loading", "overview": "loading"}]);
    const [currentDisplay, setCurrentDisplay] = useState(0);
    const [weather, setWeather] = useState([{"time": "loading", "temperature": "loading", "condition": "loading"}]);
    const tempMovie = [
        {
            "id": 505642,
            "original_title": "Black Panther: Wakanda Forever",
            "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
            "tweets": [
                {
                    "id": 1601251795304861700,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601251741160599600,
                    "text": "RT @HollywoodRecs: Listen to the song 𝗖𝗢𝗡 𝗟𝗔 𝗕𝗥𝗜𝗦𝗔 by @foud3qush x @LudwigGoransson from the Black Panther: #WakandaForever soundtrack. @pr…"
                },
                {
                    "id": 1601251718620401700,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601251470149841000,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601251299776901000,
                    "text": "https://t.co/yejZQawh2A"
                },
                {
                    "id": 1601250856468643800,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601250730173956000,
                    "text": "RT @Xbox: Join the fight for Wakanda!\n\nFollow &amp; RT with #XboxWakandaForeverSweepstakes for your chance to win a custom Black Panther: Wakan…"
                },
                {
                    "id": 1601250563026550800,
                    "text": "Este nuevo personaje de ‘Black Panther: Wakanda Forever’ cambia el futuro de Marvel por completo https://t.co/a2i8iVwCcI"
                },
                {
                    "id": 1601250408554729500,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601250340896379000,
                    "text": "RT @THR: A profound take on life and legacy. Critics are hailing Marvel Studios’ BLACK PANTHER: WAKANDA FOREVER as, “emotionally powerful,…"
                },
                {
                    "id": 1601250262336741400,
                    "text": "RT @THR: A profound take on life and legacy. Critics are hailing Marvel Studios’ BLACK PANTHER: WAKANDA FOREVER as, “emotionally powerful,…"
                },
                {
                    "id": 1601250146842353700,
                    "text": "1 The Quintessential Quintuplets Movie\n2 Roald Dahl's Matilda The Musical\n3 She Said\n4 The Menu\n5 Black Panther: Wa… https://t.co/Etc0j3d4V7"
                },
                {
                    "id": 1601249792163983400,
                    "text": "RT @TheMoviesRain: เตนอช ฮัวร์ตา ขณะถ่ายฉากใต้น้ำใน Black Panther: Wakanda Forever https://t.co/t3rMQHheA4"
                },
                {
                    "id": 1601249560155693000,
                    "text": "RT @GiveBloodNHS: The NHS needs blood donors of Black heritage.\nBlack Panther: Wakanda Forever star, Danai Gurira, urges more people to giv…"
                },
                {
                    "id": 1601249362684043300,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601249203736711200,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601249093027827700,
                    "text": "Screening at The Riverfront 🎞️ \n\n12 - 14 Dec - Living (12A): https://t.co/XrMWLfb3MP \n23 - 5 Jan - Matilda (PG):… https://t.co/GoTMzvhACH"
                },
                {
                    "id": 1601248925192626200,
                    "text": "RT @TheMoviesRain: เตนอช ฮัวร์ตา ขณะถ่ายฉากใต้น้ำใน Black Panther: Wakanda Forever https://t.co/t3rMQHheA4"
                },
                {
                    "id": 1601248778157101000,
                    "text": "the fact that Halle Bailey starts crying at the end of the movie just shows how not ready we are for this film, i c… https://t.co/JEvo1a41SA"
                },
                {
                    "id": 1601248734054322200,
                    "text": "RT @TheMoviesRain: เตนอช ฮัวร์ตา ขณะถ่ายฉากใต้น้ำใน Black Panther: Wakanda Forever https://t.co/t3rMQHheA4"
                },
                {
                    "id": 1601248165583208400,
                    "text": "Listening to Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna on… https://t.co/OzDLUG2DqE"
                },
                {
                    "id": 1601247870593953800,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601247748845555700,
                    "text": "RT @Xbox: Join the fight for Wakanda!\n\nFollow &amp; RT with #XboxWakandaForeverSweepstakes for your chance to win a custom Black Panther: Wakan…"
                },
                {
                    "id": 1601247623133859800,
                    "text": "RT @ThatBmanGuy: Shuri’s character arc is one of the strongest in all of the MCU. When we first meet her in Black Panther she’s a brilliant…"
                },
                {
                    "id": 1601247565835796500,
                    "text": "My Top 10 movies of 2022(in no actual order):\n-Everything Everywhere All At Once\n-The Batman\n-RRR\n-NOPE\n-Dr. Strang… https://t.co/yRoJpj2xzY"
                },
                {
                    "id": 1601247399464378400,
                    "text": "RT @LeQGdesSupers: 👑Tenoch Huerta a filmé son monologue à 3 mètres de profondeur dans un grand réservoir d’eau, sans respirer pendant quelq…"
                },
                {
                    "id": 1601247294342725600,
                    "text": "RT @mcucomfort: shuri in black panther: wakanda forever https://t.co/YvSh99iMwu"
                },
                {
                    "id": 1601246917907820500,
                    "text": "#michaelbjordan  habla de su regreso como #Killmonger, tuvo que mentir para que su presencia en… https://t.co/CicUbcfc5a"
                },
                {
                    "id": 1601246880490348500,
                    "text": "RT @TheMoviesRain: เตนอช ฮัวร์ตา ขณะถ่ายฉากใต้น้ำใน Black Panther: Wakanda Forever https://t.co/t3rMQHheA4"
                },
                {
                    "id": 1601246433214009300,
                    "text": "Where To Watch ‘Black Panther: Wakanda Forever’ (Free) Online Streaming Here’s at Home\n\nhttps://t.co/xgCHkkljyP… https://t.co/IIwFUJ89bs"
                },
                {
                    "id": 1601246130552987600,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601245941687648300,
                    "text": "RT @Movies_OnAdz: #movie \nWatch Black Panther : Wakanda Forever Free Online 🍿🍿🍺🍺\n\nClick Here :https://t.co/vg79Gx3wOq https://t.co/bKvvnasq…"
                },
                {
                    "id": 1601245677862125600,
                    "text": "RT @TheMoviesRain: เตนอช ฮัวร์ตา ขณะถ่ายฉากใต้น้ำใน Black Panther: Wakanda Forever https://t.co/t3rMQHheA4"
                },
                {
                    "id": 1601245659444936700,
                    "text": "RT @AgentedeMarvel_: Tenoch Huerta detrás de las cámaras de Black Panther: Wakanda Forever. https://t.co/VaGECOu19M"
                },
                {
                    "id": 1601245346486972400,
                    "text": "Next In Line\n\nGuillermo del Toro’s Pinocchio\nThe Woman King\nBlack Panther: Wakanda Forever\nShe Said\nTill"
                },
                {
                    "id": 1601245341218930700,
                    "text": "RT @THR: A profound take on life and legacy. Critics are hailing Marvel Studios’ BLACK PANTHER: WAKANDA FOREVER as, “emotionally powerful,…"
                },
                {
                    "id": 1601245279000617000,
                    "text": "https://t.co/6ePRBZfUIN"
                },
                {
                    "id": 1601245273409618000,
                    "text": "RT @Movies_OnAdz: #movie \nWatch Black Panther : Wakanda Forever Free Online 🍿🍿🍺🍺\n\nClick Here :https://t.co/vg79Gx3wOq https://t.co/bKvvnasq…"
                },
                {
                    "id": 1601245238785253400,
                    "text": "RT @Letter_to_Jack: Chris go and watch Black Panther: Wakanda Forever. \n\nStop making political narratives out of a movie quote."
                },
                {
                    "id": 1601245217931546600,
                    "text": "RT @cSMoviesSpain: Top 10 - 8 Diciembre\n1-A TODO TREN 2\n2-MUNDO EXTRAÑO\n3-BLACK PANTHER: WAKANDA FOREVER\n4-AS BESTAS\n5-EL MENU\n6-NOCHE DE P…"
                },
                {
                    "id": 1601244719895675000,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601244333260574700,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601244183859110000,
                    "text": "RT @cSMoviesSpain: Top 10 - 8 Diciembre\n1-A TODO TREN 2\n2-MUNDO EXTRAÑO\n3-BLACK PANTHER: WAKANDA FOREVER\n4-AS BESTAS\n5-EL MENU\n6-NOCHE DE P…"
                },
                {
                    "id": 1601244164536307700,
                    "text": "RT @GreatGeekRefuge: Black Panther: Wakanda Forever Discussion  https://t.co/Vgr8NAlc74  New #podcast time! Our hosts of \"At The Diner\" dis…"
                },
                {
                    "id": 1601244092050309000,
                    "text": "AFI Prediction:\n\nBabylon\nBlack Panther Wakanda Forever\nElvis \nEverything Everywhere All At Once \nThe Fabelmans\nShe… https://t.co/xhzYW37TPq"
                },
                {
                    "id": 1601244073003610000,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                },
                {
                    "id": 1601243876605689900,
                    "text": "RT @Xbox: Join the fight for Wakanda!\n\nFollow &amp; RT with #XboxWakandaForeverSweepstakes for your chance to win a custom Black Panther: Wakan…"
                },
                {
                    "id": 1601243669968715800,
                    "text": "RT @THR: A profound take on life and legacy. Critics are hailing Marvel Studios’ BLACK PANTHER: WAKANDA FOREVER as, “emotionally powerful,…"
                },
                {
                    "id": 1601243624150208500,
                    "text": "RT @ronancefilms: shuri letitia wright black panther 2 wakanda forever marvel mcu edit to low by sza https://t.co/iNHYKt2FA2"
                },
                {
                    "id": 1601243604256960500,
                    "text": "RT @spideyvariants: ภาพเบื้องหลัง wakanda forever มันพิเศษสำหรับเรามาก เพราะไม่รู้ว่ามาร์เวลมันจะเต็มที่กับงานสร้างแบบนี้อีกมั้ย 55555 คุณแ…"
                }
            ]
        },
        {
            "id": 76600,
            "original_title": "Avatar: The Way of Water",
            "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            "tweets": [
                {
                    "id": 1601251727994679300,
                    "text": "RT @WeLoveSF: 📸 ภาพงานแถลงข่าวเปิดตัวภาพยนตร์แห่งยุค #อวตาร2 ของประเทศไทย ก่อนมาพบความยิ่งใหญ่บนจอยักษ์ใน Avatar: The Way of Water อวตาร:…"
                },
                {
                    "id": 1601251721086349300,
                    "text": "RT @SuperstarnewsTH: #ซีนุนิว มาชวนดูกันนะครับ 14 ธันวาคมนี้ กับ #อวตาร2  Avatar: The Way of Water Press Conference \n\n#ZeeNuNew\n#Avatar2xZe…"
                },
                {
                    "id": 1601251596557426700,
                    "text": "RT @EM_Gossip: ใต้โลกทะเลก็ยังหวาน🫣\n#ซีนุนิว ควงคู่ สาดความน่ารักกระจัดกระจาย ✨ ภายในงาน Avatar : The Way of Water อตวตาร วิถีแห่งสายน้ำ”…"
                },
                {
                    "id": 1601251538206216200,
                    "text": "RT @SuperstarnewsTH: 2 หนุ่ม ตั้งใจดูปลามากๆ ที่งาน Avatar: The Way of Water Press Conference 💗\n#AvatarTheWayOfWaterTH \n#ZeeNuNew \n#ซีนุนิว…"
                },
                {
                    "id": 1601251349953360000,
                    "text": "RT @EM_Gossip: ใต้โลกทะเลก็ยังหวาน🫣\n#ซีนุนิว ควงคู่ สาดความน่ารักกระจัดกระจาย ✨ ภายในงาน Avatar : The Way of Water อตวตาร วิถีแห่งสายน้ำ”…"
                },
                {
                    "id": 1601251257280184300,
                    "text": "RT @Cinefoxxid: ⚠️ Flash Warning ⚠️\n\nSesuai yang diinfokan oleh @cinema21, Avatar: The Way of Water akan menampilkan adegan dengan flashing…"
                },
                {
                    "id": 1601251257033031700,
                    "text": "RT @ZNN_Intl: IG: majorgroup\n\nAvatar: The Way of Water Press Conference #อวตาร2 \n\n🔗https://t.co/oxKWUpu0wq\n⏫Like, Comment, Share, Repost\n\n#…"
                },
                {
                    "id": 1601251239739756500,
                    "text": "Don’t Miss: The way of water, first of four sequels to Avatar https://t.co/nu9Xtw1IxA"
                },
                {
                    "id": 1601251232693514200,
                    "text": "RT @ZNN_Intl: IG: majorgroup\n\nAvatar: The Way of Water Press Conference #อวตาร2 \n\n🔗https://t.co/EeccQD8qgg\n⏫Like, Comment, Share, Repost\n\n#…"
                },
                {
                    "id": 1601251215626498000,
                    "text": "RT @EM_Gossip: ใต้โลกทะเลก็ยังหวาน🫣\n#ซีนุนิว ควงคู่ สาดความน่ารักกระจัดกระจาย ✨ ภายในงาน Avatar : The Way of Water อตวตาร วิถีแห่งสายน้ำ”…"
                },
                {
                    "id": 1601251128393752600,
                    "text": "Sigourney Weaver “Kiri” On-set Interview for AVATAR: THE WAY OF WATER (2022) https://t.co/Isf0QuDoTy"
                },
                {
                    "id": 1601251000035090400,
                    "text": "RT @TalkinTrend: ซี-นุนิวควงคู่ร่วมงานเปิดตัวภาพยนตร์ฟอร์มยักษ์แห่งยุค Avatar: The Way of Water  อวตาร: วิถีแห่งสายน้ำ \n\n#อวตาร2 #AvatarThe…"
                },
                {
                    "id": 1601250977423630300,
                    "text": "RT @20thCenturyTH: 📸 ประมวลภาพงานแถลงข่าวเปิดตัวภาพยนตร์แห่งยุค #อวตาร2 ของประเทศไทย ก่อนมาพบความยิ่งใหญ่บนจอยักษ์ใน Avatar: The Way of Wat…"
                },
                {
                    "id": 1601250884809560000,
                    "text": "RT @Cinefoxxid: ⚠️ Flash Warning ⚠️\n\nSesuai yang diinfokan oleh @cinema21, Avatar: The Way of Water akan menampilkan adegan dengan flashing…"
                },
                {
                    "id": 1601250830203572200,
                    "text": "RT @WEED_ENT: “ซี-พฤกษ์” ในงานแถลงข่าวฉลองการกลับมาของภาพยนตร์ฟอร์มยักษ์แห่งยุค Avatar: The Way of Water อวตาร: วิถีแห่งสายน้ำ ที่ ซีไลฟ์ แ…"
                },
                {
                    "id": 1601250745550274600,
                    "text": "RT @20thCenturyCA: An epic adventure awaits. Avatar: The Way of Water, only in theatres December 16. Get Tickets Now."
                },
                {
                    "id": 1601250732594036700,
                    "text": "RT @WatchmenID: Avatar: The Way of Water tayang 14 Desember 2022 di bioskop,\nsiap siap bentar lagi bakalan ada Advance Ticket Sales-nya! 🌊…"
                },
                {
                    "id": 1601250675106537500,
                    "text": "RT @Sonkojohn1: Tell all the natives that the  premier of #AVATAR (the way of water) @NuMaxCinemas goona be Victoria mall Ebb come 16th Dec…"
                },
                {
                    "id": 1601250598577315800,
                    "text": "RT @Disney: Dive deeper into the world of Pandora with this exclusive artwork, and get ready for an experience unlike anything you've seen…"
                },
                {
                    "id": 1601250533590724600,
                    "text": "RT @webstarupdate: ใหม่ ดาวิกา ประกบ ตงตง กฤษกร พร้อมครอบครัว ดีน และ ซี-นุนิว เดินทางสู่แพนดอร่าที่ Sea Life Bangkok ฉลองภาพยนตร์แห่งยุค…"
                },
                {
                    "id": 1601250328493830100,
                    "text": "RT @SuperstarnewsTH: แมทธิว-ลิเดีย ใหม่ดาวิกา ซี นุนิว ตงตง ที่งานเปิดตัวภาพยนตร์ #อวตาร2 กับ Avatar: The Way of Water เริ่ม! 14 ธันวาคมนี้…"
                },
                {
                    "id": 1601250240778031000,
                    "text": "RT @allarea_ent: ซี-นุนิว ร่วมงาน “AVATAR THE WAY OF WATER อวตาร : วิถีแห่งสายน้ำ”\n#ZeePruk \n#NuNew \n#ZeeNunew\n#AvatarTheWayOfWater https:/…"
                },
                {
                    "id": 1601250159974764500,
                    "text": "RT @SeeTrueTH: โมเมนต์น่ารักๆ ของพี่ซี นู๋นุนิว และน้องเดมี่ ในงานฉลองการกลับมาของภาพยนตร์ฟอร์มยักษ์แห่งยุค Avatar: The Way of Water  อวตาร…"
                },
                {
                    "id": 1601250135421636600,
                    "text": "RT @Darren_Mooney: At @EscapistMag, I wrote about something bubbling on my mind about this year's movies.\n\nWith extended runtimes, director…"
                },
                {
                    "id": 1601250117595848700,
                    "text": "RT @staynewsth: โมเม้นท์สุดน่ารัก เมื่อ ซี - นุนิว ได้พบกับ น้องเดมี่ ลูกสาวคนสวยของ คุณแม่ลิเดีย ในงานฉลองการกลับมาของภาพยนตร์เรื่อง Avata…"
                },
                {
                    "id": 1601250038268989400,
                    "text": "RT @staynewsth: โมเม้นท์สุดน่ารัก เมื่อ ซี - นุนิว ได้พบกับ น้องเดมี่ ลูกสาวคนสวยของ คุณแม่ลิเดีย ในงานฉลองการกลับมาของภาพยนตร์เรื่อง Avata…"
                },
                {
                    "id": 1601250014277570600,
                    "text": "Plans to see Avatar The Way of Water next Friday have been cancelled. I have to work that night 😔"
                },
                {
                    "id": 1601249945713266700,
                    "text": "RT @allarea_ent: ซี-นุนิว ร่วมงาน “AVATAR THE WAY OF WATER อวตาร : วิถีแห่งสายน้ำ”\n#ZeePruk \n#NuNew \n#ZeeNunew\n#AvatarTheWayOfWater https:/…"
                },
                {
                    "id": 1601249896388251600,
                    "text": "RT @webstarupdate: ซี-นุนิว ร่วมงาน AVATAR THE WAY OF WATER อวตาร : วิถีแห่งสายน้ำ\n#ZeePruk \n#NuNew \n#ZeeNunew\n#AvatarTheWayOfWater https:/…"
                },
                {
                    "id": 1601249878499381200,
                    "text": "Published on YouTube: Avatar 2: The Way of Water | FINAL TRAILER - 20th Century Studios | Disney+ https://t.co/MOqILP5BbX  #movienews"
                },
                {
                    "id": 1601249874778865700,
                    "text": "RT @Giancarlo_Volpe: In 2004 we learned that we had to change the name of our show from “Avatar” to “Avatar the Last Airbender” because Jam…"
                },
                {
                    "id": 1601249724694401000,
                    "text": "RT @webstarupdate: ซี-นุนิว ร่วมงาน AVATAR THE WAY OF WATER อวตาร : วิถีแห่งสายน้ำ\n#ZeePruk \n#NuNew \n#ZeeNunew\n#AvatarTheWayOfWater https:/…"
                },
                {
                    "id": 1601249676552200200,
                    "text": "RT @staynewsth: โมเม้นท์สุดน่ารัก เมื่อ ซี - นุนิว ได้พบกับ น้องเดมี่ ลูกสาวคนสวยของ คุณแม่ลิเดีย ในงานฉลองการกลับมาของภาพยนตร์เรื่อง Avata…"
                },
                {
                    "id": 1601249663554060300,
                    "text": "@crisis_cores Welllll... That's kind of what I was planning to do. I wanted to go see Avatar: The Way of Water (yea… https://t.co/H0GNFQq5wR"
                },
                {
                    "id": 1601249626371170300,
                    "text": "RT @staynewsth: โมเม้นท์สุดน่ารัก เมื่อ ซี - นุนิว ได้พบกับ น้องเดมี่ ลูกสาวคนสวยของ คุณแม่ลิเดีย ในงานฉลองการกลับมาของภาพยนตร์เรื่อง Avata…"
                },
                {
                    "id": 1601249584680173600,
                    "text": "James Cameron dice que los efectos visuales de captura de movimiento para Thanos \"ni siquiera se acercan\" a lo que… https://t.co/OV3TDIKoVh"
                },
                {
                    "id": 1601249582050001000,
                    "text": "RT @webstarupdate: ซี-นุนิว ร่วมงาน AVATAR THE WAY OF WATER อวตาร : วิถีแห่งสายน้ำ\n#ZeePruk \n#NuNew \n#ZeeNunew\n#AvatarTheWayOfWater https:/…"
                },
                {
                    "id": 1601249469378748400,
                    "text": "RT @Cinefoxxid: ⚠️ Flash Warning ⚠️\n\nSesuai yang diinfokan oleh @cinema21, Avatar: The Way of Water akan menampilkan adegan dengan flashing…"
                },
                {
                    "id": 1601249456787112000,
                    "text": "RT @CurzonOxford: One week to go🌀 #AVATAR: THE WAY OF WATER, in cinemas Friday 16th! \n2D: https://t.co/sUDrs3AmU9 \n3D: https://t.co/DqdSoYl…"
                },
                {
                    "id": 1601249327867101200,
                    "text": "RT @gavinfeng97: Avatar: The Way of Water already make $7M from Chinese advance ticket sale and is about to outperformance The Battle at La…"
                },
                {
                    "id": 1601249260137504800,
                    "text": "RT @DUNiverse1998: \" เริ่มต้นวิถีแห่งความยิ่งใหญ่! กับภาพบรรยากาศงานเปิดตัวภาพยนตร์ที่คนทั้งโลกรอคอย Avatar: The Way of Water Press Confere…"
                },
                {
                    "id": 1601249134211911700,
                    "text": "Win Passes to See AVATAR: THE WAY OF WATER – CinemaNerdz https://t.co/qc7e5BoEkk via @CinemaNerdz"
                },
                {
                    "id": 1601249125546147800,
                    "text": "RT @wpTODAYPLAY: เก็บตกบรรยากาศงานแถลงข่าว ฉลองการกลับมาของภาพยนตร์ฟอร์มยักษ์แห่งยุค  Avatar: The Way of Water  อวตาร: วิถีแห่งสายน้ำ \n\n#ลิ…"
                },
                {
                    "id": 1601249113005523000,
                    "text": "From \"Top Gun: Maverick\" to \"Blonde\" to \"Babylon\" really does feel like the end of a wild party in cinema. Sun's co… https://t.co/i1rHDBTvEX"
                },
                {
                    "id": 1601249094562975700,
                    "text": "DC Readers: Attend A Free Early Screening of ‘Avatar: The Way Of Water’\nhttps://t.co/TOgME57dAj https://t.co/sgUa0TsM3P"
                },
                {
                    "id": 1601249048656195600,
                    "text": "RT @WeLoveSF: 📸 ภาพงานแถลงข่าวเปิดตัวภาพยนตร์แห่งยุค #อวตาร2 ของประเทศไทย ก่อนมาพบความยิ่งใหญ่บนจอยักษ์ใน Avatar: The Way of Water อวตาร:…"
                },
                {
                    "id": 1601249035846721500,
                    "text": "RT @20thCenturyTH: 📸 ประมวลภาพงานแถลงข่าวเปิดตัวภาพยนตร์แห่งยุค #อวตาร2 ของประเทศไทย ก่อนมาพบความยิ่งใหญ่บนจอยักษ์ใน Avatar: The Way of Wat…"
                },
                {
                    "id": 1601249027278123000,
                    "text": "@sinemori James Cameron'ın \nAvatar: The Way of Water'ı kadar heyecanlandırmıyor, üzgünüm.Frank Herbert'ün roman ser… https://t.co/KbBL7VinbY"
                },
                {
                    "id": 1601248961284538400,
                    "text": "RT @Darren_Mooney: At @EscapistMag, I wrote about something bubbling on my mind about this year's movies.\n\nWith extended runtimes, director…"
                },
                {
                    "id": 1601248926014746600,
                    "text": "RT @WeLoveSF: 📸 ภาพงานแถลงข่าวเปิดตัวภาพยนตร์แห่งยุค #อวตาร2 ของประเทศไทย ก่อนมาพบความยิ่งใหญ่บนจอยักษ์ใน Avatar: The Way of Water อวตาร:…"
                }
            ]
        },
        {
            "id": 830784,
            "original_title": "Lyle, Lyle, Crocodile",
            "overview": "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
            "tweets": [
                {
                    "id": 1601250146842353700,
                    "text": "1 The Quintessential Quintuplets Movie\n2 Roald Dahl's Matilda The Musical\n3 She Said\n4 The Menu\n5 Black Panther: Wa… https://t.co/Etc0j3d4V7"
                },
                {
                    "id": 1601248352523653000,
                    "text": "Lyle, Lyle, Crocodile, hallow be thy name"
                },
                {
                    "id": 1601245302102581200,
                    "text": "Lyle Lyle Crocodile - Frame 2168 of 147141 https://t.co/S6N33merqg"
                },
                {
                    "id": 1601245298533220400,
                    "text": "Lyle Lyle Crocodile - Frame 2167 of 147141 https://t.co/VU47Cx0nvs"
                },
                {
                    "id": 1601245294548631600,
                    "text": "Lyle Lyle Crocodile - Frame 2166 of 147141 https://t.co/FWkBmX4eWc"
                },
                {
                    "id": 1601243568122654700,
                    "text": "just watches lyle lyle crocodile 10/10 minus the few plotholes❤️❤️"
                },
                {
                    "id": 1601242638891376600,
                    "text": "RT @michaelcollado: ACTORS ON ACTORS \nSONIC THE HEDGEHOG + LYLE THE CROCODILE \nDEC. 17 https://t.co/BZ36dHj1i8"
                },
                {
                    "id": 1601240058337497000,
                    "text": "RT @zachraffio: Four tickets to Lyle Lyle Crocodile please https://t.co/mnYxaeXn0e"
                },
                {
                    "id": 1601239449094226000,
                    "text": "ACTORS ON ACTORS \nSONIC THE HEDGEHOG + LYLE THE CROCODILE \nDEC. 17 https://t.co/BZ36dHj1i8"
                },
                {
                    "id": 1601237936640778200,
                    "text": "RT @zachraffio: Four tickets to Lyle Lyle Crocodile please https://t.co/mnYxaeXn0e"
                },
                {
                    "id": 1601237751810166800,
                    "text": "Lyle Lyle Crocodile - Frame 2165 of 147141 https://t.co/gUOF2KLRhU"
                },
                {
                    "id": 1601237749255880700,
                    "text": "Lyle Lyle Crocodile - Frame 2164 of 147141 https://t.co/yvjV0VLpxf"
                },
                {
                    "id": 1601237745896247300,
                    "text": "Lyle Lyle Crocodile - Frame 2163 of 147141 https://t.co/KWGGQX5nl0"
                },
                {
                    "id": 1601230202469859300,
                    "text": "Lyle Lyle Crocodile - Frame 2162 of 147141 https://t.co/QiaWB35xMQ"
                },
                {
                    "id": 1601230199269597200,
                    "text": "Lyle Lyle Crocodile - Frame 2161 of 147141 https://t.co/CDsLbN5lPR"
                },
                {
                    "id": 1601230196526440400,
                    "text": "Lyle Lyle Crocodile - Frame 2160 of 147141 https://t.co/tk868fH10A"
                },
                {
                    "id": 1601228742168297500,
                    "text": "The top 12 Accelerated Reader Students went to the movies to see Lyle, Lyle the Crocodile and then enjoyed pizza an… https://t.co/K2HB7xjZKa"
                },
                {
                    "id": 1601222649421725700,
                    "text": "Lyle Lyle Crocodile - Frame 2159 of 147141 https://t.co/kAYcYFvyXO"
                },
                {
                    "id": 1601222646393442300,
                    "text": "Lyle Lyle Crocodile - Frame 2158 of 147141 https://t.co/fSvbRY1Y5K"
                },
                {
                    "id": 1601222643503464400,
                    "text": "Lyle Lyle Crocodile - Frame 2157 of 147141 https://t.co/EubEBfIqK4"
                },
                {
                    "id": 1601216969235386400,
                    "text": "RT @zachraffio: Four tickets to Lyle Lyle Crocodile please https://t.co/mnYxaeXn0e"
                },
                {
                    "id": 1601215104950960000,
                    "text": "Lyle Lyle Crocodile - Frame 2156 of 147141 https://t.co/sTNGRzhGiT"
                },
                {
                    "id": 1601215102048510000,
                    "text": "Lyle Lyle Crocodile - Frame 2155 of 147141 https://t.co/ErKm0y4O4b"
                },
                {
                    "id": 1601215098416242700,
                    "text": "Lyle Lyle Crocodile - Frame 2154 of 147141 https://t.co/oIF83pNZwD"
                },
                {
                    "id": 1601207550585835500,
                    "text": "Lyle Lyle Crocodile - Frame 2153 of 147141 https://t.co/CAlevWc6JM"
                },
                {
                    "id": 1601207547821801500,
                    "text": "Lyle Lyle Crocodile - Frame 2152 of 147141 https://t.co/76QD928K6h"
                },
                {
                    "id": 1601207544277524500,
                    "text": "Lyle Lyle Crocodile - Frame 2151 of 147141 https://t.co/z7sBJz8Am1"
                },
                {
                    "id": 1601200845349003300,
                    "text": "Me acordé de la película “Lyle, Lyle, Crocodile”. https://t.co/Iy8DwhZjD1"
                },
                {
                    "id": 1601200327868371000,
                    "text": "RT @screen_machine: Tomorrow we're in #Lochgilphead and stay until Tuesday:\n\nSat 10 Dec\n5.30pm - Lyle, Lyle, Crocodile (PG)\n8.30pm - The Ba…"
                },
                {
                    "id": 1601200020665290800,
                    "text": "Tomorrow we're in #Lochgilphead and stay until Tuesday:\n\nSat 10 Dec\n5.30pm - Lyle, Lyle, Crocodile (PG)\n8.30pm - Th… https://t.co/XJNfudSknJ"
                },
                {
                    "id": 1601200001434194000,
                    "text": "Lyle Lyle Crocodile - Frame 2150 of 147141 https://t.co/HZcxvj28NU"
                },
                {
                    "id": 1601199998208729000,
                    "text": "Lyle Lyle Crocodile - Frame 2149 of 147141 https://t.co/hZrxQnQoMa"
                },
                {
                    "id": 1601199995620933600,
                    "text": "Lyle Lyle Crocodile - Frame 2148 of 147141 https://t.co/GY0AGPzr9H"
                },
                {
                    "id": 1601196008998064000,
                    "text": "RT @zachraffio: Four tickets to Lyle Lyle Crocodile please https://t.co/mnYxaeXn0e"
                },
                {
                    "id": 1601192452047749000,
                    "text": "Lyle Lyle Crocodile - Frame 2147 of 147141 https://t.co/vP48aERWj2"
                },
                {
                    "id": 1601192449560514600,
                    "text": "Lyle Lyle Crocodile - Frame 2146 of 147141 https://t.co/JayMUDmDWb"
                },
                {
                    "id": 1601192446834233300,
                    "text": "Lyle Lyle Crocodile - Frame 2145 of 147141 https://t.co/k4UMABJUQP"
                },
                {
                    "id": 1601188939695460400,
                    "text": "9/12-15/12 cont'd:\n\nTHE MENU (15)\nSat &amp; Sun at 4:45pm\n\nBLACK PANTHER: WAKANDA FOREVER (12A)\nSat &amp; Sun at 3:45pm\n\nLY… https://t.co/cZJUB6RW4z"
                },
                {
                    "id": 1601184903558725600,
                    "text": "Lyle Lyle Crocodile - Frame 2144 of 147141 https://t.co/L3Sehup1IU"
                },
                {
                    "id": 1601184900463329300,
                    "text": "Lyle Lyle Crocodile - Frame 2143 of 147141 https://t.co/ukJNQbbvnv"
                },
                {
                    "id": 1601184897862869000,
                    "text": "Lyle Lyle Crocodile - Frame 2142 of 147141 https://t.co/dVn5M7z7OY"
                },
                {
                    "id": 1601177641238798300,
                    "text": "New blogpost: Movies to watch on Rakuten TV this December including Black Adam, Smile and Lyle, Lyle, Crocodile… https://t.co/19NarVoumk"
                },
                {
                    "id": 1601177354969161700,
                    "text": "Lyle Lyle Crocodile - Frame 2141 of 147141 https://t.co/fQsYUytEeQ"
                },
                {
                    "id": 1601177351404064800,
                    "text": "Lyle Lyle Crocodile - Frame 2140 of 147141 https://t.co/2glQ17qDK2"
                },
                {
                    "id": 1601177348321288200,
                    "text": "Lyle Lyle Crocodile - Frame 2139 of 147141 https://t.co/VDK5GAedrR"
                },
                {
                    "id": 1601171159391043600,
                    "text": "TruePursuit: [SA] Win Tickets to Lyle, Lyle, Crocodile from Play &amp; Go https://t.co/N35oIt0DnT"
                },
                {
                    "id": 1601169801262538800,
                    "text": "Lyle Lyle Crocodile - Frame 2138 of 147141 https://t.co/Ds3rn0JPmz"
                },
                {
                    "id": 1601169798657892400,
                    "text": "Lyle Lyle Crocodile - Frame 2137 of 147141 https://t.co/Xt0FIg42my"
                },
                {
                    "id": 1601169795638083600,
                    "text": "Lyle Lyle Crocodile - Frame 2136 of 147141 https://t.co/o9w1ttZdzt"
                },
                {
                    "id": 1601165659135938600,
                    "text": "Happening today \n\nMovies- Elf, The Polar Express, Devotion, Violent Night, Bones and All, Strange World, Black Pant… https://t.co/wusDPpYThI"
                }
            ]
        },
        {
            "id": 663712,
            "original_title": "Terrifier 2",
            "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
            "tweets": [
                {
                    "id": 1601249126238146600,
                    "text": "@damienleone @TerrifierFilm watched Terrifier 2 uncut in cinema in Germany. Watched it for the third time. 2 people… https://t.co/nmyHIOTCR1"
                },
                {
                    "id": 1601249099067854800,
                    "text": "@swaroop_4005 RRR\nHit2 \nBullet train\nTerrifier 2\nMasooda"
                },
                {
                    "id": 1601248944000041000,
                    "text": "Visto Terrifier 2 (2022)  https://t.co/hoADFwSN3i #Terrifier2 #trakt"
                },
                {
                    "id": 1601247457282662400,
                    "text": "@5soalol Terrifier 1 &amp; 2 \nI know what you did last summer \nPearl\nX\nSleepaway camp\nCarrie \nMidsomar \nSmile"
                },
                {
                    "id": 1601246153722712000,
                    "text": "Just watched Terrifier 2 ! Great movie but fucked up tho"
                },
                {
                    "id": 1601246090770415600,
                    "text": "@LittlePaleGirl6 😆😉 \nHabe übrigens gestern Terrifier 2 gesehen. Weiß nicht, ob Du meine Posts gesehen hast."
                },
                {
                    "id": 1601245636539854800,
                    "text": "@HorrorBRNews Nope, X, Pearl, terrifier 2, Barbarian, Smile\n#HorrorBrasilAwards"
                },
                {
                    "id": 1601240114109493200,
                    "text": "5 minutos de terrifier 2 y ya estoy asi https://t.co/ryFMiJ0PBE"
                },
                {
                    "id": 1601239878112448500,
                    "text": "terrível esse jogo viu tá pior que terrifier 2"
                },
                {
                    "id": 1601238516553613300,
                    "text": "Sorry yall but Terrifier 2 is a 4/10, appreciate the gore but nothing beats the original i guess https://t.co/RPBgA7Goke"
                },
                {
                    "id": 1601236578537377800,
                    "text": "just finished watching terrifier 2 and um… https://t.co/BxAQA4EDLH"
                },
                {
                    "id": 1601235612622692400,
                    "text": "RT @THorror_Lover_: MEJORES PELÍCULAS DE TERROR DE 2022\n\n— Scream\n— No Exit\n— Fresh\n— X\n— The Black Phone\n— Watcher\n— Men\n— Prey\n— Nope\n— S…"
                },
                {
                    "id": 1601234827180576800,
                    "text": "Bdan udh kek g ada tlang abis nonton terrifier 2.."
                },
                {
                    "id": 1601234209443438600,
                    "text": "Today we talked about Terrifier 2 and horror movies in my online seminar and I had SO much to say but couldn’t beca… https://t.co/nXSOTRUgmQ"
                },
                {
                    "id": 1601234191542206500,
                    "text": "RT @THorror_Lover_: MEJORES PELÍCULAS DE TERROR DE 2022\n\n— Scream\n— No Exit\n— Fresh\n— X\n— The Black Phone\n— Watcher\n— Men\n— Prey\n— Nope\n— S…"
                },
                {
                    "id": 1601233888306933800,
                    "text": "@BubbaSnickey Terrifier 2"
                },
                {
                    "id": 1601231728689184800,
                    "text": "RT @valnentiness: favorite first watches of november \n\n- black panther: wakanda forever (2022)\n- sri asih (2022)\n- terrifier (2016)\n- enola…"
                },
                {
                    "id": 1601228200532508700,
                    "text": "How to watch Terrifier 2 — if you dare! https://t.co/cEw71tjaIF"
                },
                {
                    "id": 1601226997706895400,
                    "text": "@APriiViana você vai me levar pra ver o Terrifier 2?"
                },
                {
                    "id": 1601225596171784200,
                    "text": "CARTELERA DE LA SEMANA\nViernes 9: PINOCHO\nSábado 10: TERRIFIER 2\nDomingo 11: PINOCHO\nInformes y Reservas: 76903597… https://t.co/OsHklNEqvu"
                },
                {
                    "id": 1601224788835696600,
                    "text": "Will wer mit in Terrifier 2"
                },
                {
                    "id": 1601224593095946200,
                    "text": "Älskar att leva i ett land där Terrifier 2 tas emot som en 3/5-film! Något jag själv bidrog till med min trea.… https://t.co/wL78wm0LMN"
                },
                {
                    "id": 1601223083389771800,
                    "text": "q filme bem ruim terrifier 2 tava com tanta expectativa pra ver aql e é uma merda"
                },
                {
                    "id": 1601222163280691200,
                    "text": "@bradmiska @Cinedigm that means a lot, by the way I managed to see Terrifier 2 in theaters. Made my Halloween lol"
                },
                {
                    "id": 1601221481953783800,
                    "text": "@misterandyd True, I get the “drag shows aren’t for kids” argument. I’m not taking my kids to one, but I’m also not… https://t.co/ylL7rZvitq"
                },
                {
                    "id": 1601220587808260000,
                    "text": "@HHKeegan @gorycoryhorror @Shudder Deadstream is one of the three BEST horror films I've seen this year (behind Ter… https://t.co/dJMH3rGAWt"
                },
                {
                    "id": 1601220172601331700,
                    "text": "Neues YouTube Video: \"Verliebt in Art\": Warum TERRIFIER 2 brutal und spaßig zugleich ist https://t.co/Z1PxDfWCxZ"
                },
                {
                    "id": 1601219401914663000,
                    "text": "Niemand in meinem Freundeskreis möchte mit mir ins Kino zu Terrifier 2 😭"
                },
                {
                    "id": 1601217220549701600,
                    "text": "RT @stupidxxz: TERRIFIER 1 E 2 COMPLETOS NO GOOGLE DRIVE!!!\nTERRIFIER: https://t.co/yY7qozauZX\nTERRIFIER 2: https://t.co/pXdafiuVt3 https:/…"
                },
                {
                    "id": 1601213578236739600,
                    "text": "RT @THorror_Lover_: MEJORES PELÍCULAS DE TERROR DE 2022\n\n— Scream\n— No Exit\n— Fresh\n— X\n— The Black Phone\n— Watcher\n— Men\n— Prey\n— Nope\n— S…"
                },
                {
                    "id": 1601212935183171600,
                    "text": "acabo de empezar a ver terrifier 2, deseenme suerte"
                },
                {
                    "id": 1601212891478118400,
                    "text": "https://t.co/8HubgvWYyo"
                },
                {
                    "id": 1601211686093869000,
                    "text": "parah sih terrifier 1 2 ini YA ALLAH yg gakuat nonton blood gore jangan nonton ini deh"
                },
                {
                    "id": 1601207556294447000,
                    "text": "RT @DRMovieReview: Top 10 Horror Films of 2022 🧟‍♂️🎬\n\n1. X\n\n2. Bones and All\n\n3. Pearl\n\n4. Nope\n\n5. Barbarian\n\n6. Werewolf By Night\n\n7. The…"
                },
                {
                    "id": 1601207512573022200,
                    "text": "RT @TheKazooHero: LAUREN LAVERA as SIENNA SHAW. \nTERRIFIER 2 (2022) dir. Damien Leone. https://t.co/R4B0DffVuI"
                },
                {
                    "id": 1601206353674272800,
                    "text": "RT @marchircles: @moviemenfes aku abis nonton terrifier 1&amp;2 kek parno sendiri anjir😭\n\ntapi jujur jalan cerita terrifier nih kurang banget,…"
                },
                {
                    "id": 1601204266253025300,
                    "text": "🐼2022🔞禁 超级極恐怖 殺人血腥电影《断魂小丑 2 Terrifier 2》🐼 Link👉 https://t.co/mQkdLvmmmU https://t.co/5NuP251zhv"
                },
                {
                    "id": 1601203282164125700,
                    "text": "🐼2022🔞 Super Horror Bloody Murder movie 《Terrifier 2 断魂小丑 2》🐼 Link👉 https://t.co/mQkdLvDpoU https://t.co/JDNifomJCF"
                },
                {
                    "id": 1601201004401524700,
                    "text": "@A_Train1983 Thanks atrain ...hope ye enjoyed terrifier 2 .....braver than me"
                },
                {
                    "id": 1601198574871580700,
                    "text": "terrifier 2 é uma bosta e ngm aceita isso"
                },
                {
                    "id": 1601196089176035300,
                    "text": "RT @Gibboanxious: Terrifier 2 ★★★\n#DamienLeone's second Art the Clown movie pushes the boundaries even further &amp; is superior to his origina…"
                }
            ]
        },
        {
            "id": 361743,
            "original_title": "Top Gun: Maverick",
            "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
            "tweets": [
                {
                    "id": 1601251624311484400,
                    "text": "RT @therealsupes: Top 4 Best Movies of 2022:\n\n1. Everything Everywhere All At Once\n2. The Fabelmans\n3. Top Gun Maverick\n4. The Batman https…"
                },
                {
                    "id": 1601251199122276400,
                    "text": "RT @Variety: ‘Top Gun: Maverick’ Named Best Picture by National Board of Review https://t.co/CqrmO7MIej"
                },
                {
                    "id": 1601251126321778700,
                    "text": "RT @mavericksmovies: If this awards season does end up going well for Top Gun: Maverick, Everything Everywhere All At Once, and Elvis then…"
                },
                {
                    "id": 1601250445636210700,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601250037673398300,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601249904361607200,
                    "text": "RT @HCAcritics: The #HCACreativeArtsAwards nominees for Best Stunts are: \n\nEverything Everywhere All At Once \n\nRRR \n\nThe Batman \n\nThe Woman…"
                },
                {
                    "id": 1601249715437596700,
                    "text": "RT @AmericanCine: Cinematographer Claudio Miranda, ASC is joined by Dave Perkal, ASC to discuss his work on Top Gun: Maverick — director Jo…"
                },
                {
                    "id": 1601249516954321000,
                    "text": "RT @FilmUpdates: The National Board of Review has named TOP GUN: MAVERICK as the Best Film of 2022. https://t.co/SiMTNjgjgY"
                },
                {
                    "id": 1601249362684043300,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601249203736711200,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601249113005523000,
                    "text": "From \"Top Gun: Maverick\" to \"Blonde\" to \"Babylon\" really does feel like the end of a wild party in cinema. Sun's co… https://t.co/i1rHDBTvEX"
                },
                {
                    "id": 1601249039181234200,
                    "text": "What are your AFI predictions?\n\nMine:\n\nTop Gun: Maverick \nEverything Everywhere All At Once\nThe Banshees of Inisher… https://t.co/yYPYKzcFY1"
                },
                {
                    "id": 1601248950345867300,
                    "text": "May Oppenheimer do for these hats what Top Gun Maverick did for mustaches https://t.co/Ne4AXvxIGB"
                },
                {
                    "id": 1601248888857694200,
                    "text": "Top Gun Maverick en el AVE. Ojiplática."
                },
                {
                    "id": 1601248645743247400,
                    "text": "RT @beingcarygrant: in alphabetical order:\n1. Avatar: The Way of Water\n2. Babylon\n3. Everything Everywhere All At Once\n4. The Fabelmans\n5.…"
                },
                {
                    "id": 1601248469330849800,
                    "text": "RT @MovieMantz: BIG CONGRATS to @TomCruise &amp; “TOP GUN MAVERICK,” named BEST PICTURE OF 2022 by the NATIONAL BOARD OF REVIEW! #TopGunMaveric…"
                },
                {
                    "id": 1601248363374059500,
                    "text": "Top Gun: Maverick has started the awards season with a bang, picking up Best movie and Outstanding Cinematography a… https://t.co/SwMNXGj6Ug"
                },
                {
                    "id": 1601248219090276400,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601248173154250800,
                    "text": "RT @toodamnbright: entering my seasonal disorder era (top gun maverick re-release isn’t playing at my theaters)"
                },
                {
                    "id": 1601248170759291000,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601248144104120300,
                    "text": "❗️ OJITO en Amazon Italia ❗️\n\nPack TOP GUN + MAVERICK - Edición Superfan Collector (de Reino Unido) que incluye amb… https://t.co/3VywDl5g16"
                },
                {
                    "id": 1601248003494248400,
                    "text": "Watched Top Gun Maverick again last night. Still incredible. The entire last act is exhilarating. \n\nI’ll still be a… https://t.co/JYr1TDhMcB"
                },
                {
                    "id": 1601247581887025200,
                    "text": "Top Gun Maverick is the it.🔥"
                },
                {
                    "id": 1601247551852023800,
                    "text": "RT @UPROXX: Could 'Top Gun: Maverick' be speeding towards an Oscar nomination for Best Picture? 🤭https://t.co/ygXFmPHBz3"
                },
                {
                    "id": 1601247425314066400,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601247019284443100,
                    "text": "RT @DiscussingFilm: ‘TOP GUN MAVERICK’ has been named Best Picture by the National Board of Review. https://t.co/EOQkeDVyhs"
                },
                {
                    "id": 1601246883451572200,
                    "text": "@SkyNews Ah here he is, Maverick from Top Gun 😆"
                },
                {
                    "id": 1601246778661417000,
                    "text": "Cruise levantando su primer Oscar como productor por Top Gun Maverick Mejor Película. \n\nMi madre, que orgasmo (aunq… https://t.co/CyWqlIMj4H"
                },
                {
                    "id": 1601246762957951000,
                    "text": "RT @gullbones: watching top gun (first time!!!) and i think it’s incredibly funny that he’s called maverick and all the commanding officers…"
                },
                {
                    "id": 1601246715864023000,
                    "text": "BIG NEWS! \n\nThe National Board of Review names two films screened at our festival in their Top 10 Independent Films… https://t.co/3glAll2B5N"
                },
                {
                    "id": 1601246374741553200,
                    "text": "RT @FilmUpdates: National Board of Review 2022:\n\nOutstanding Achievement in Cinematography:\n\nClaudio Miranda, Top Gun: Maverick https://t.c…"
                },
                {
                    "id": 1601246276137255000,
                    "text": "RT @HCAcritics: The #HCACreativeArtsAwards nominees for Best Stunts are: \n\nEverything Everywhere All At Once \n\nRRR \n\nThe Batman \n\nThe Woman…"
                },
                {
                    "id": 1601246130552987600,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST ORIGINAL SONG:\n\n“Lift Me Up”, Black Panther: Wakanda Forever\n“Vegas”, Elvis\n“Ci…"
                },
                {
                    "id": 1601245797840195600,
                    "text": "@RonStallworth78 @RottenTomatoes @ErikDavis @NBRfilm Top gun maverick is best movie of the year"
                },
                {
                    "id": 1601245753401303000,
                    "text": "National Board of Review eligió \"Top Gun: Maverick\" como la mejor película de 2022 #CooperativaContigo… https://t.co/w5jOQf7O1D"
                },
                {
                    "id": 1601245655724626000,
                    "text": "RT @gullbones: watching top gun (first time!!!) and i think it’s incredibly funny that he’s called maverick and all the commanding officers…"
                },
                {
                    "id": 1601245397657489400,
                    "text": "RT @FilmUpdates: The National Board of Review has named TOP GUN: MAVERICK as the Best Film of 2022. https://t.co/SiMTNjgjgY"
                },
                {
                    "id": 1601245344377233400,
                    "text": "AFI Guesses\n\nAvatar: The Way Of The Water\nBabylon\nElvis\nEverything Everywhere All At Once\nThe Fabelmans\nGlass Onion… https://t.co/1mWDXzzGSr"
                },
                {
                    "id": 1601245294322073600,
                    "text": "RT @ParamountUK: Fasten your seat belts. Top Gun: Maverick returns to the big screen tomorrow. https://t.co/pJ6aBgUmCh"
                },
                {
                    "id": 1601245243390558200,
                    "text": "watching top gun (first time!!!) and i think it’s incredibly funny that he’s called maverick and all the commanding… https://t.co/mZnkZ8NC23"
                },
                {
                    "id": 1601245174503379000,
                    "text": "RT @therealsupes: Top 4 Best Movies of 2022:\n\n1. Everything Everywhere All At Once\n2. The Fabelmans\n3. Top Gun Maverick\n4. The Batman https…"
                },
                {
                    "id": 1601245100582965200,
                    "text": "RT @FilmUpdates: #HCACreativeArtsAwards Nominations:\n\nBest Stunts:\n\nEverything Everywhere All At Once \nRRR \nThe Batman \nThe Woman King \nTop…"
                },
                {
                    "id": 1601244903152840700,
                    "text": "RT @blurayangel: My pitch for Man of Steel 2\n\nDirector: Joseph Kosinski (Top Gun Maverick)\n\nCast: Henry Cavill, Amy Adams, Sasha Calle\n\nVil…"
                },
                {
                    "id": 1601244413896056800,
                    "text": "My AFI Predictions:\n\nAVATAR: THE WAY OF WATER\nBABYLON\nELVIS\nEVERYTHING EVERYWHERE ALL AT ONCE\nTHE FABELMANS\nGLASS O… https://t.co/XEeKvtrLVg"
                },
                {
                    "id": 1601244092050309000,
                    "text": "AFI Prediction:\n\nBabylon\nBlack Panther Wakanda Forever\nElvis \nEverything Everywhere All At Once \nThe Fabelmans\nShe… https://t.co/xhzYW37TPq"
                },
                {
                    "id": 1601243969131712500,
                    "text": "RT @lag_anon: Top Gun: Maverick / 탑건: 매버릭 (2022)\n프리츠 &amp; 헤일로 Fritz &amp; Halo https://t.co/ctNrTYWg7d"
                },
                {
                    "id": 1601243828492456000,
                    "text": "@nofate1991 couldn’t agree more. only the “sure things” get made…and the usually suck, LOL… i guess Top Gun Maveric… https://t.co/Q5YQ0NAjfy"
                },
                {
                    "id": 1601243660661624800,
                    "text": "@ramosbrunow Top Gun - Maverick (disparado o melhor do ano)"
                },
                {
                    "id": 1601243541690544000,
                    "text": "RT @Variety: ‘Top Gun: Maverick’ Named Best Picture by National Board of Review https://t.co/CqrmO7MIej"
                },
                {
                    "id": 1601243530286207000,
                    "text": "Tom Cruise levanta el vuelo hacia el Óscar: 'Top Gun: Maverick' es la mejor película del año para los críticos de E… https://t.co/8v7Nr2qY4K"
                }
            ]
        },
        {
            "id": 315162,
            "original_title": "Puss in Boots: The Last Wish",
            "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            "tweets": [
                {
                    "id": 1601251780918411300,
                    "text": "RT @Telemundo: Saquen sus botas de baile👢🎼 porque la nueva canción de @karolg está aquí, “La Vida Es Una de #PussInBoots: The Last Wish” 🐱.…"
                },
                {
                    "id": 1601250889099976700,
                    "text": "RT @AMCTheatres: Bring the adventure home with the PUSS IN BOOTS: THE LAST WISH mobile game, activity pack, and coloring sheets. https://t.…"
                },
                {
                    "id": 1601249244844695600,
                    "text": "RT @KarolGSite: “La Vida Es Una\" de Karol G para “Puss in Boots 2: The Last Wish” Soundtrack se estrena hoy a las 8PM hora Colombia y Méxic…"
                },
                {
                    "id": 1601248760255766500,
                    "text": "RT @Telemundo: Saquen sus botas de baile👢🎼 porque la nueva canción de @karolg está aquí, “La Vida Es Una de #PussInBoots: The Last Wish” 🐱.…"
                },
                {
                    "id": 1601248672632676400,
                    "text": "Saquen sus botas de baile👢🎼 porque la nueva canción de @karolg está aquí, “La Vida Es Una de #PussInBoots: The Last… https://t.co/T3O5oDxrxh"
                },
                {
                    "id": 1601248190673883100,
                    "text": "RT @ChartsKarolG: 🚨 \"La Vida Es Una\" by @KAROLG for the 'Puss in Boots 2: The Last Wish' Soundtrack will be released TODAY! #PussInBoots\n\n—…"
                },
                {
                    "id": 1601245934939410400,
                    "text": "RT @Fandango: Let's talk about how 'Puss in Boots: The Last Wish' hits theaters December 21! \nGet your 🎟's here —&gt; https://t.co/i0my3rGezL…"
                },
                {
                    "id": 1601245689954336800,
                    "text": "RT @Fandango: Wagner Moura gave us a look at his character Wolf in #PussInBootsTheLastWish in theaters December 21! \nGet your 🎟's here —&gt; h…"
                },
                {
                    "id": 1601245368896856000,
                    "text": "Puss in Boots: The Last Wish Trailer #2 (2022) | Movieclips Trailers https://t.co/ztn92mRIUs"
                },
                {
                    "id": 1601245040558284800,
                    "text": "RT @KarolGSite: “La Vida Es Una” (From Puss in Boots: The Last Wish) de Karol G ya esta disponible en todas las plataformas digitales de st…"
                },
                {
                    "id": 1601244232391725000,
                    "text": "“La Vida Es Una” (From Puss in Boots: The Last Wish) de Karol G ya esta disponible en todas las plataformas digital… https://t.co/e4PXUzw4p6"
                },
                {
                    "id": 1601240130324660200,
                    "text": "RT @MaggieMa_LA: The designs of characters in Puss in Boots: The Last Wish . So cute 🥰🥹 ! #pussinboots in theater Dec 20th https://t.co/M8U…"
                },
                {
                    "id": 1601239857984327700,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601239266386145300,
                    "text": "RT @pughdaily: HQ | Florence Pugh behind the scenes of 'Puss in Boots: The Last Wish' https://t.co/Lovyq5OIuW"
                },
                {
                    "id": 1601237985558601700,
                    "text": "RT @KarolGChart: La Vida Es Una (From Puss in Boots: The Last Wish) de KAROL G es simplemente un himno 🌏❤️ \n\nYA DISPONIBLE: https://t.co/Rz…"
                },
                {
                    "id": 1601235287291887600,
                    "text": "RT @mikethemovieguy: Karol G Drops New Track “La Vida Es Una” (from Puss in Boots: The Last Wish)” https://t.co/tWjWRwKAbz"
                },
                {
                    "id": 1601233333966495700,
                    "text": "Puss in Boots: The Last Wish movie review – Antonio Banderas, Salma Hayek return for ... https://t.co/xkVGMNmxpy"
                },
                {
                    "id": 1601232641654595600,
                    "text": "just watched puss in boots: the last wish and i loved the animation!!!!!! it lowkey reminded me of a reason why i'm… https://t.co/J647MGr2RF"
                },
                {
                    "id": 1601231806048526300,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601230674408755200,
                    "text": "Karol G Drops New Track “La Vida Es Una” (from Puss in Boots: The Last Wish)” https://t.co/tWjWRwKAbz"
                },
                {
                    "id": 1601230465993621500,
                    "text": "La Vida Es Una (From Puss in Boots: The Last Wish) https://t.co/bEd4kdJaJ2"
                },
                {
                    "id": 1601229816124280800,
                    "text": "RT @KarolGChart: La Vida Es Una (From Puss in Boots: The Last Wish) de KAROL G es simplemente un himno 🌏❤️ \n\nYA DISPONIBLE: https://t.co/Rz…"
                },
                {
                    "id": 1601229425773006800,
                    "text": "RT @LukeHearfield: Puss in Boots: The Last Wish swashbuckled it’s way into my heart. A rip-roaring adventure about making the most out of l…"
                },
                {
                    "id": 1601228954542964700,
                    "text": "RT @ChartsKarolG: 🚨 \"La Vida Es Una\" by @KAROLG for the 'Puss in Boots 2: The Last Wish' Soundtrack will be released TODAY! #PussInBoots\n\n—…"
                },
                {
                    "id": 1601228897408127000,
                    "text": "RT @IGN: Puss in Boots: The Last Wish takes not only the Shrek franchise, but DreamWorks Animation, to exciting new places. Our review: htt…"
                },
                {
                    "id": 1601228614024003600,
                    "text": "Puss in Boots: The Last Wish &gt;&gt;&gt;&gt; Strange World"
                },
                {
                    "id": 1601228454263160800,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601228361954492400,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards\n\nBEST ANIMATED FEATURE:\n\nPinocchio\nMarcel The Shell with Shoes On\nPuss in Boots: The L…"
                },
                {
                    "id": 1601228120031465500,
                    "text": "RT @AgendaSchiedam: 🎦 Puss in Boots: The Last Wish\n📌 Pathé #Schiedam\n📅 Zaterdag 10 december om 17.45 uur\nℹ️ https://t.co/I0dDrm8oJl\n🎞️ http…"
                },
                {
                    "id": 1601228111949238300,
                    "text": "Aftersun\nElvis\nPuss in Boots: The Last Wish\nWednesday: S106 and S107\nإخر دور: S101, S102\nالنزوة: S105, S106\n\nProductive weekend so far 😊😊"
                },
                {
                    "id": 1601227707538608000,
                    "text": "Puss In Boots The Last Wish for the win! https://t.co/12zjl1yvmT"
                },
                {
                    "id": 1601227113277051000,
                    "text": "RT @KarolGSite: “La Vida Es Una\" de Karol G para “Puss in Boots 2: The Last Wish” Soundtrack se estrena hoy a las 8PM hora Colombia y Méxic…"
                },
                {
                    "id": 1601225292772581400,
                    "text": "RT @hollywoodhandle: ‘PUSS IN BOOTS: THE LAST WISH’ opens with a huge 98% on Rotten Tomatoes Audience Score 🍅\n\nWith many people saying it’s…"
                },
                {
                    "id": 1601224688184791000,
                    "text": "Puss in Boots: The Last Wish movie review – Antonio Banderas, Salma Hayek return for enchanting sequel to Shrek spi… https://t.co/DNKkxgk27w"
                },
                {
                    "id": 1601224341236355000,
                    "text": "Puss in Boots: The Last Wish Trailer, when He Shoves the Dog into the Unknown Void and Asks \"Dog Still Alive\"? Make… https://t.co/ZdkA0hK6fn"
                },
                {
                    "id": 1601224154866339800,
                    "text": "RT @FCGPOWERUSA: Get your dancing boots on because today at 5pm @karolg’s new song “La Vida Es Una” from Puss In Boots The Last Wish is dro…"
                },
                {
                    "id": 1601224111174594600,
                    "text": "RT @expressoshow: What movies are you excited to watch? The Good House, Puss in Boots: The Last Wish, Lamborghini: The man behind the lens…"
                },
                {
                    "id": 1601224101808447500,
                    "text": "Karol G lanza nueva canción “La Vida Es Una (de PUSS IN BOOTS: THE LAST WISH)” https://t.co/VcWYGQZPbk on @bloglovin"
                },
                {
                    "id": 1601222862588694500,
                    "text": "RT @KarolGAsia: Shazam Update Singapore:\n\n🇸🇬#72.\"La Vida Es Una\" by @KarolG [NEW]. https://t.co/LwRgwLVZ1U"
                },
                {
                    "id": 1601222607025877000,
                    "text": "RT @twitkalk: Ich bin die deutschen Synchronstimme vom\nOberbösewicht JACK HORNER ! @Dreamworks  \nDER GESTIEFELTE KATER: DER LETZTE WUNSCH😼…"
                },
                {
                    "id": 1601222221342523400,
                    "text": "RT @KarolGAsia: Shazam Update Singapore:\n\n🇸🇬#72.\"La Vida Es Una\" by @KarolG [NEW]. https://t.co/LwRgwLVZ1U"
                },
                {
                    "id": 1601222110193799200,
                    "text": "Shazam Update Singapore:\n\n🇸🇬#72.\"La Vida Es Una\" by @KarolG [NEW]. https://t.co/LwRgwLVZ1U"
                },
                {
                    "id": 1601221647616598000,
                    "text": "🎦 Puss in Boots: The Last Wish\n📌 Pathé #Schiedam\n📅 Zaterdag 10 december om 17.45 uur\nℹ️ https://t.co/I0dDrm8oJl\n🎞️… https://t.co/M2hWLyeLs7"
                },
                {
                    "id": 1601215093512994800,
                    "text": "فيلم #PussInBoots \nلاتفوتك مغامرة عجيبة بتعيش معها تفاصيل رهيبة , احجز الحين\n#موڤي_سينما. \nhttps://t.co/Aq3dvU4mEw https://t.co/JBVj4Z623k"
                },
                {
                    "id": 1601214680328200200,
                    "text": "RT @IGN: Florence Pugh, who plays Goldilocks in Puss in Boots: The Last Wish, intros this exclusive clip! https://t.co/36H4gq2qwZ https://t…"
                },
                {
                    "id": 1601214381886673000,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601212915138166800,
                    "text": "https://t.co/4NwpycRlo2"
                },
                {
                    "id": 1601211957268607000,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601211593500790800,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                },
                {
                    "id": 1601208636331942000,
                    "text": "RT @bestofpugh: florence pugh as goldilocks in a new clip from ‘puss in boots: the last wish’ https://t.co/GKl4Kov9Kv"
                }
            ]
        },
        {
            "id": 837881,
            "original_title": "She Said",
            "overview": "New York Times reporters Megan Twohey and Jodi Kantor break one of the most important stories in a generation — a story that helped launch the #MeToo movement and shattered decades of silence around the subject of sexual assault in Hollywood.",
            "tweets": [
                {
                    "id": 1601251852611616800,
                    "text": "@M_Elenore_ @RealCandaceO She didnt say trans or Democrat, she said mentally ill. Oh wait..."
                },
                {
                    "id": 1601251851558846500,
                    "text": "RT @mehdirhasan: Sinema owes her entire career to the Democratic Party, she’s been endlessly indulged by party leadership, but she waits ti…"
                },
                {
                    "id": 1601251851352932400,
                    "text": "@richardaeden @MailOnline Plus in the engagement interview she said she had been working hard and had binders and w… https://t.co/CkqXIeNWWR"
                },
                {
                    "id": 1601251850569019400,
                    "text": "RT @washingtonpost: Sen. Kyrsten Sinema (Ariz.) said in interviews published Friday that she is switching her party affiliation from Democr…"
                },
                {
                    "id": 1601251848639631400,
                    "text": "RT @shaTIRED: sza said she’d rather be in jail than alone and that’s some shit i really can’t identify with. everything else tho? 10/10 🫶🏾"
                },
                {
                    "id": 1601251848534782000,
                    "text": "@davidaxelrod Remember Russia said 1 or none. Should she have stayed because the other guy was not in the deal. Be… https://t.co/wNJWg9dfNU"
                },
                {
                    "id": 1601251847561707500,
                    "text": "RT @seuldywrites: When wendy said she recorded this part with the staff she didn't lie, she dragged those staff with her into the booth🤣 ht…"
                },
                {
                    "id": 1601251845342900200,
                    "text": "RT @tekaldas: .@lobna made a great point on the question “to what extent does Egypt’s regime care about its international human rights imag…"
                },
                {
                    "id": 1601251845003153400,
                    "text": "@jackryan212 @Z09752769 @The_Real_Fly Agree, but what does that have to do with this video. Everything is true she… https://t.co/RQNKe38EmU"
                },
                {
                    "id": 1601251843161849900,
                    "text": "@thedove43 @holyfvckbiebs @selskarmaa she never said pls she always says \"my entire family is from brazil\""
                },
                {
                    "id": 1601251842553688000,
                    "text": "@nojumper i said the same shit! but glad she free."
                },
                {
                    "id": 1601251840116461600,
                    "text": "@1markshumway @Opportunitweet @robinkath @eltonofficial Maybe read that again, slowly Mark. She didn't say he said… https://t.co/LBz6J0HQ58"
                },
                {
                    "id": 1601251835502682000,
                    "text": "@ClownWorld_ Yes let's give someone a medal for breaking international law and being imprisoned by said country. So… https://t.co/AHUiZGPfTc"
                },
                {
                    "id": 1601251834538385400,
                    "text": "RT @dprzygoda: Asked my co-worker if she could hop on something real quick but she said she’s busy ideating… https://t.co/b8nf0bDpfg"
                },
                {
                    "id": 1601251832390570000,
                    "text": "RT @dianejeffersonc: “I’m very proud of her” \n\nLove this: Hillary Clinton praised VP Kamala Harris in a new interview she did last week and…"
                },
                {
                    "id": 1601251830377648000,
                    "text": "RT @JDCocchiarella: If Republicans are furious Britney Griner kneeled during the National Anthem, wait until they hear what Donald Trump sa…"
                },
                {
                    "id": 1601251828179550200,
                    "text": "Gerry suddenly felt overwhelming arousal at the way he was taking care of her. No guy her age acted this way, none… https://t.co/g0S8ryLKTu"
                },
                {
                    "id": 1601251827970109400,
                    "text": "@KDabandz Ca said she ain’t up for yo shit today!"
                },
                {
                    "id": 1601251827009192000,
                    "text": "RT @DatEmpressEnerg: @itshamdaaaa She literally said this child threanted them at the end cause she said she can hit hard…as they stood at…"
                },
                {
                    "id": 1601251825730322400,
                    "text": "Hopefully today I will hear back... She said should be reviewing the applications today.\n\nPlease please please plea… https://t.co/2d0LJmemex"
                },
                {
                    "id": 1601251823150829600,
                    "text": "Remember when @jes_chastain said in an interview how her favourite song to sing was creep with her ukulele, &amp; we dr… https://t.co/DL8AH5qSpI"
                },
                {
                    "id": 1601251822903042000,
                    "text": "@unfaithfulmess \"No we didn't. Some are just ba hum bugs and like to ruin our fun.\" \n\nShe said, filling up the smal… https://t.co/ecwtcU2XWa"
                },
                {
                    "id": 1601251822685294600,
                    "text": "RT @BugluMaxu: @GAUAHAR_KHAN Chicken was shalin's priority too BB said it its your zimmedari \nSame goes out for Soundarya Tofu is her prior…"
                },
                {
                    "id": 1601251820223205400,
                    "text": "RT @ArtofTrek: Any Caithlin Dar fans on here? Unfortunately after a great setup her character seemed to go nowhere, but I thought she was a…"
                },
                {
                    "id": 1601251817530458000,
                    "text": "RT @duty2warn: When Kyrsten Sinema announced she would leave the Democratic Party to register as an Independent, we were not surprised. The…"
                },
                {
                    "id": 1601251816368660500,
                    "text": "RT @HousingExplorer: Got a call from #PortColborne today. A senior lady who’s been living out of her car for a month. Never imagined she’d…"
                },
                {
                    "id": 1601251813894000600,
                    "text": "RT @I_amMukhtar: Meghan Markle's dad is a wasteman and her sister doesn't even see her own daughter. These are the people who the media pla…"
                },
                {
                    "id": 1601251813826891800,
                    "text": "@ZAGAlliance @AlooSenzu @thejesshinds It's totally fine. I think it's also just very personal to me because the stu… https://t.co/QOPzdCTj9U"
                },
                {
                    "id": 1601251813315219500,
                    "text": "RT @havesomehumour: so true man!!!!! \nfc in mood😭😂😂😂\n\nalso few squids crying over here she said this in general sbke liye irrespective of f…"
                },
                {
                    "id": 1601251813285560300,
                    "text": "said: 'You poor little girl!' and then she said: 'Have you   #世界杯下注 #世界杯买球 #世界杯投注    https://t.co/VSTQ5IxtrX"
                },
                {
                    "id": 1601251810987380700,
                    "text": "orning, she did so. She said, 'Jonas, it ain't correc   https://t.co/L1XPbvea7N"
                },
                {
                    "id": 1601251805765447700,
                    "text": "@mateo588573 @Andrew94722910 She literally said nothing on her voting will change"
                },
                {
                    "id": 1601251805119512600,
                    "text": "RT @NationCymru: Welsh Labour Deputy Leader Carolyn Harris has said that she doesn’t want policing devolved to Wales, despite it being incl…"
                },
                {
                    "id": 1601251803844161500,
                    "text": "@smashburgh This. We had a Manager from another store fill in with me once. She just sat around and literally said… https://t.co/lu1CS18f73"
                },
                {
                    "id": 1601251803479572500,
                    "text": "RT @smc429: Everyone knows that the Supreme Court is a SHAM.\nThe right wing members are on the take. I saw what Alito said. He's a racist.…"
                },
                {
                    "id": 1601251803349205000,
                    "text": "RT @mindoongie01: Winter said eat 14 takoyaki bcs it will be released on the 14th, she's sooooo 😭😭😭 https://t.co/6Ojs9KKnwC"
                },
                {
                    "id": 1601251799679537200,
                    "text": "RT @shaTIRED: sza said she’d rather be in jail than alone and that’s some shit i really can’t identify with. everything else tho? 10/10 🫶🏾"
                },
                {
                    "id": 1601251795594268700,
                    "text": "RT @shaTIRED: sza said she’d rather be in jail than alone and that’s some shit i really can’t identify with. everything else tho? 10/10 🫶🏾"
                },
                {
                    "id": 1601251789881610200,
                    "text": "RT @karanteja66: Ankit has started taking stand for Pri,he spoke during the nomination task, he told Sree that she doesn’t stop him,while h…"
                },
                {
                    "id": 1601251789428654000,
                    "text": "RT @mindoongie01: Winter said eat 14 takoyaki bcs it will be released on the 14th, she's sooooo 😭😭😭 https://t.co/6Ojs9KKnwC"
                },
                {
                    "id": 1601251789319217200,
                    "text": "RT @bigguccicraigy: vin diesel said i need brittney griner home before christmas she came home the next week that nigga word is LAW don’t t…"
                },
                {
                    "id": 1601251789218943000,
                    "text": "o the drawing-room; there she said, eagerly:         https://t.co/gchS3IpaMw"
                },
                {
                    "id": 1601251785452097500,
                    "text": "Janet Yellen's Signature on U.S. Currency Marks First Time Bills Signed by 2 Women.The Treasury secretary said she… https://t.co/RElbZUwmDR"
                },
                {
                    "id": 1601251781144903700,
                    "text": "RT @wsyx6: After seeing our story on Wednesday, an Ohio mom reached out and said she had surgery the day before Dr. Roxy’s license was susp…"
                },
                {
                    "id": 1601251779030974500,
                    "text": "RT @GIRL0VESICK: i said to jisoo that we’re waiting for her solo, she was so happy 😭 https://t.co/p7yQEEvptP"
                },
                {
                    "id": 1601251778460536800,
                    "text": "When she said this a quick change flitted ov  SH1 #世界杯 https://t.co/2BZgjG96CT"
                },
                {
                    "id": 1601251775700291600,
                    "text": "RT @mehdirhasan: Sinema owes her entire career to the Democratic Party, she’s been endlessly indulged by party leadership, but she waits ti…"
                },
                {
                    "id": 1601251774341738500,
                    "text": "RT @uswerunknown: \"Good morning class. I got the result of your exam but sad to say only 3 of you passed,\" Ms. Kamille said, their teacher…"
                },
                {
                    "id": 1601251772869513200,
                    "text": "RT @Zaddy_Swag: @Mskelebogile Can’t believe yoll are out here standing for a woman who said under oath: “Maybe it wasn’t Mo himself that ra…"
                },
                {
                    "id": 1601251768775549000,
                    "text": "RT @smc429: Everyone knows that the Supreme Court is a SHAM.\nThe right wing members are on the take. I saw what Alito said. He's a racist.…"
                }
            ]
        },
        {
            "id": 785084,
            "original_title": "The Whale",
            "overview": "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
            "tweets": [
                {
                    "id": 1601251733652447200,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251730368630800,
                    "text": "RT @jenelleriley: At THE WHALE Q&amp;A last night, an audience member got up to talk about how he was working as an usher at the Geffen Theatre…"
                },
                {
                    "id": 1601251717735100400,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251689075736600,
                    "text": "RT @GeorgiaWild: THE FIRST RIGHT WHALE CALF OF THE SEASON HAS BEEN SPOTTED! https://t.co/ZxWGB2xHvq"
                },
                {
                    "id": 1601251687359860700,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251654330118100,
                    "text": "RT @LastRightWhales: Researchers from the @CMAquarium have spotted the 1st North Atlantic right whale mother and calf pair of the new seaso…"
                },
                {
                    "id": 1601251653138600000,
                    "text": "RT @Gabby_Hoffman: “If lobstermen are regulated out of existence, kiss both this 150-year industry &amp; the right whale goodbye…Let’s save the…"
                },
                {
                    "id": 1601251616761733000,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251605126729700,
                    "text": "@KojiPro2015_EN I have SO many questions. Mostly about every part of the trailer. Especially the entire trailer, sp… https://t.co/XvHYJyL0IA"
                },
                {
                    "id": 1601251595215593500,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251552035053600,
                    "text": "Is The Whale starring Brendan Fraser on Netflix? (where to watch) https://t.co/wfQ9C5CjRy"
                },
                {
                    "id": 1601251511233040400,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251503616163800,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251501535809500,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251480870080500,
                    "text": "@blockbustedpod I mean the whole story of Pinocchio has always been bonkers to begin with\n\nWooden boy thing is out… https://t.co/27RCW2kaUe"
                },
                {
                    "id": 1601251459818958800,
                    "text": "the whale showing in nyc the one weekend i can’t pack up &amp; go \n https://t.co/QsushB5U1F"
                },
                {
                    "id": 1601251447139889200,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251426499719200,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251402122113000,
                    "text": "What’s more fun than creating with legos @LEGO_Group @LEGOIdeas ? Well…creating with Legos on a Lego wall in the ST… https://t.co/LFucz8qLgL"
                },
                {
                    "id": 1601251339538813000,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251261596082200,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251182345072600,
                    "text": "@ACthecollector unfortunately no way to conclusively prove \"loss of ownership\"\n\nbut ofc as time passes, odds increa… https://t.co/MBxAAovQvA"
                },
                {
                    "id": 1601251177600909300,
                    "text": "@cardano_whale @frxresearch This guy @cryptomanran gives shit financial advice..he's bad for the ecosystem..."
                },
                {
                    "id": 1601251132256288800,
                    "text": "RT @oceana: #SPOTTED! The first North Atlantic right whale mom &amp; calf pair of the season has been spotted off the coast of GA. But they fac…"
                },
                {
                    "id": 1601251128133316600,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251041365721000,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601251036869853200,
                    "text": "Jackson at Head in The Clouds Manila\n#MAGICMANatHITCManila #HITCMANILA    \n\n#JacksonWang #MAGICMAN \n@JacksonWang852… https://t.co/07n00Q6MBy"
                },
                {
                    "id": 1601251002501341200,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250946470011000,
                    "text": "@ergo_whale @Ledger_Support @Ledger Did they answer your question? I just joined the space"
                },
                {
                    "id": 1601250946172223500,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250912323833900,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250910272983000,
                    "text": "otions of the whale in his gen\niherb_promocode_promo_rewards_voucher_code_discount_coupon_💪 https://t.co/dPR2sC2EzD"
                },
                {
                    "id": 1601250909144592400,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250875145871400,
                    "text": "RT @conraddit: One day in the near future these whale alerts will be for entire nation-states showing, with full transparency, the daily se…"
                },
                {
                    "id": 1601250868023943200,
                    "text": "@caltrops_press Idk seems like you’re overdue for a Skeleton Key To Why Eminem Sucks Balls, featuring extensive ref… https://t.co/3Mgb5Rqw22"
                },
                {
                    "id": 1601250842899873800,
                    "text": "ations. The White Whale swam\nb\niherb_promocode_promo_rewards_voucher_code_discount_coupon_💪 https://t.co/GfBgP95xMw"
                },
                {
                    "id": 1601250826470695000,
                    "text": "symbols; that the whale, inde\niherb_promocode_promo_rewards_voucher_code_discount_coupon_💪 https://t.co/cmOa7mOzrM"
                },
                {
                    "id": 1601250824788713500,
                    "text": "RT @GrindersHaven: 🐳MASSIVE WL GIVEAWAY🐳 \n\nFollow the rules\n1️⃣ Like, rt + tag 3 frens\n2️⃣ Follow all Twitter accounts 👇 \n3️⃣ Join discord…"
                },
                {
                    "id": 1601250818254340000,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250723466879000,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250693360197600,
                    "text": "RT @GeorgiaWild: THE FIRST RIGHT WHALE CALF OF THE SEASON HAS BEEN SPOTTED! https://t.co/ZxWGB2xHvq"
                },
                {
                    "id": 1601250676868231200,
                    "text": "RT @beaniebabybot: Waves the whale. \nBirthday: December 8, 1996.\n“Join him today on the Internet\nDon’t be afraid to get your feet wet\nHe ta…"
                },
                {
                    "id": 1601250674867830800,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250627174424600,
                    "text": "@restassuredketm @karchkraemerr @sportbible Their women's team is actually quite good, and is ranked in the top ten globally"
                },
                {
                    "id": 1601250614058840000,
                    "text": "RT @NextBestPicture: What a great day for new film scores! #BestOriginalScore #FYC #Oscars #FilmTwitter\n\nBABYLON: https://t.co/mja5BGjnh1…"
                },
                {
                    "id": 1601250605237837800,
                    "text": "RT @FilmUpdates: Sadie Sink photographed by Alec Vierra for Interview Magazine\n\n(https://t.co/0nmeu7ehdO) https://t.co/Yy9Vzxmm4e"
                },
                {
                    "id": 1601250585940197400,
                    "text": "RT @jenelleriley: At THE WHALE Q&amp;A last night, an audience member got up to talk about how he was working as an usher at the Geffen Theatre…"
                },
                {
                    "id": 1601250583989493800,
                    "text": "~Hong Chau Of ‘The Whale’ And ‘The Menu’ Tells Us About Her Extraordinary Life And Career~ \nhttps://t.co/ABSgHzIdee… https://t.co/EvyEmgNllj"
                },
                {
                    "id": 1601250564947718100,
                    "text": "Darren Aronofsky’s The Whale, starring Brendan Fraser, is in select theaters today.\nhttps://t.co/q5HzSNBpTb\n“Once e… https://t.co/9D4PAOISPM"
                },
                {
                    "id": 1601250555594408000,
                    "text": "RT @GrindersHaven: 🐳MASSIVE WL GIVEAWAY🐳 \n\nFollow the rules\n1️⃣ Like, rt + tag 3 frens\n2️⃣ Follow all Twitter accounts 👇 \n3️⃣ Join discord…"
                }
            ]
        },
        {
            "id": 705996,
            "original_title": "헤어질 결심",
            "overview": "From a mountain peak in South Korea, a man plummets to his death. Did he jump, or was he pushed? When detective Hae-joon arrives on the scene, he begins to suspect the dead man’s wife Seo-rae. But as he digs deeper into the investigation, he finds himself trapped in a web of deception and desire.",
            "tweets": [
                {
                    "id": 1601251430395826200,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601251349068669000,
                    "text": "@evillady_x 꺄아—-  헤어질결심 .. 💓박해일 배우님과~~~ 너무너무 부러운 1인 !!!!!"
                },
                {
                    "id": 1601251313584865300,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601251309310869500,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601251247394521000,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601251086182273000,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601250958897733600,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601250950940803000,
                    "text": "헤어질 결심 티셔츠인가 이뻐 보이네 https://t.co/QaKX3n4x4Q"
                },
                {
                    "id": 1601250925716582400,
                    "text": "RT @gra1n0fmylife: 파이아키아 &lt;헤어질 결심&gt; 평 중에 이거 좋다\n\n“해준과 서래의 ‘미결’된 사랑은 영원한 사랑에 대한 하나의 해법이다”\n“사람이 어떻게 영원한 사랑을 할 수 있지? 그럼 그 사랑에 마침표를 안 찍으면 되잖아!” ht…"
                },
                {
                    "id": 1601250778810679300,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601250740928147500,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601250686150537200,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601250271434518500,
                    "text": "RT @301_vid: 헤어질 결심\n\n#원호 #WONHO https://t.co/V9Mow28cLv"
                },
                {
                    "id": 1601250232066793500,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601250209237205000,
                    "text": "RT @dochilove2: 뉴욕타임즈 선정 '2022년 최고의 영화'\n1위 EO (예지 스콜리모프스키)\n2위 쁘띠마망 (셀린 시아마)\n3위 놉 (조던 필)\n4위 No Bears(자파르 파나히)\n5위 KIMI (스티븐 소더버그)\n6위  The Ete…"
                },
                {
                    "id": 1601249635942928400,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601249566195470300,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601249344539484200,
                    "text": "‘헤어질 결심’ 대종상 작품상…남녀주연상은 박해일·염정아"
                },
                {
                    "id": 1601249213035122700,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601248850228183000,
                    "text": "RT @gra1n0fmylife: 파이아키아 &lt;헤어질 결심&gt; 평 중에 이거 좋다\n\n“해준과 서래의 ‘미결’된 사랑은 영원한 사랑에 대한 하나의 해법이다”\n“사람이 어떻게 영원한 사랑을 할 수 있지? 그럼 그 사랑에 마침표를 안 찍으면 되잖아!” ht…"
                },
                {
                    "id": 1601248657315025000,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601248535726346200,
                    "text": "대종상 헤어질 결심 최우수 작품상 및 3관왕…박해일·염정아 남녀주연상\n\nhttps://t.co/KB6KPU32zx"
                },
                {
                    "id": 1601248439547080700,
                    "text": "아무튼 헤어질 결심은 다큐멘터리라 나도 안끌리는듯ㅋㅋㅋㅋ내가 재난 영화를 잘 못본다. 이터널 선샤인은 생각을 할 수있게 하는 자유를 준 장치들이 많아서 재밌었던거고. 뭐 작품이란건 각자의 사정이 투사되는거니까~예압"
                },
                {
                    "id": 1601248321410322400,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601247936603906000,
                    "text": "RT @art_nine9: 🎬아트나인 12/10(토) 상영시간표\n\n0관\n10:00 &lt;더 메뉴&gt;\n12:10 &lt;러브레터&gt;\n14:30 &lt;헤어질 결심&gt;\n17:10 &lt;본즈 앤 올&gt;\n19:40 &lt;양자경의 더 모든 날 모든 순간&gt;\n\n9관\n10:00  &lt;본즈 앤…"
                },
                {
                    "id": 1601247848976511000,
                    "text": "@aroundagainforu 나이브스 아웃, 헌트(청담부부말고블룸하우스), 스텝포드 와이프, 킬빌, 비상선언, 업그레이드(이것도 블룸하우스), 모범형사(내가 개개개개개개사랑함), 비밀의 숲, 시그널, 모범… https://t.co/Sgr78oOyrc"
                },
                {
                    "id": 1601247469157122000,
                    "text": "RT @yonhaptweet: 전미비평가위원회 올해 '톱5' 외국어영화에 '헤어질 결심' https://t.co/8pYvFz59X4"
                },
                {
                    "id": 1601247195348766700,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601247058500804600,
                    "text": "RT @tangh00r00: @모든 영화가 소품이나 지문 의도하고 배치한거지만 이영화가 유독 그런점이강한거 같음 배스킨 먹고싶다고 귀에 다 대고 작게 말하는 느낌\n\n트친의 헤어질결심 감상이 너무 웃겨서 트훔"
                },
                {
                    "id": 1601247031837589500,
                    "text": "RT @gra1n0fmylife: 파이아키아 &lt;헤어질 결심&gt; 평 중에 이거 좋다\n\n“해준과 서래의 ‘미결’된 사랑은 영원한 사랑에 대한 하나의 해법이다”\n“사람이 어떻게 영원한 사랑을 할 수 있지? 그럼 그 사랑에 마침표를 안 찍으면 되잖아!” ht…"
                },
                {
                    "id": 1601246957925961700,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601246935486460000,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601246865852616700,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601246863067295700,
                    "text": "RT @99iew: 올해 제일 재밌게 본 드라마가 헤어질 결심이라는 그녀.. 뭘까 …https://t.co/xkS8FHorBl"
                },
                {
                    "id": 1601246776715260000,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601246710168457200,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601246321092210700,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601246195695128600,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601246153143877600,
                    "text": "RT @Uahan2: 이동진 선정 2022년 한국 영화 베스트 10\n\n1. 헤어질 결심 \n2. 탑 \n3. 같은 속옷을 입는 두 여자 \n4. 소설가의 영화 \n5. 물방울을 그리는 남자 \n6. 성적표의 김민영 \n7. 헌트 \n8. 아치의 노래, 정태준…"
                },
                {
                    "id": 1601245624850317300,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601245543933825000,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601245329592320000,
                    "text": "RT @summeronsaturn: &lt;58회 대종상 영화제 수상작(자)&gt;\n\n•남우조연: 변요한(한산)\n•여우조연: 임윤아(공조2)\n•남우주연: 박해일(헤어질 결심)\n•여우주연: 염정아(인생은 아름다워)\n•감독: 변성현(킹메이커)\n•작품: 헤어질 결심…"
                },
                {
                    "id": 1601245152051626000,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601245002503688200,
                    "text": "미키 사야카 후배쨩이랑 헤어질결심 찍네"
                },
                {
                    "id": 1601244981259538400,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601244783510683600,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601244670700703700,
                    "text": "RT @spacce_error: 슈가 그거같네… 날 기쁘게 하기 위해 헤어질 결심 이야기를 꺼냈을 뿐인 친구 그거"
                },
                {
                    "id": 1601244504912146400,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601244459274244000,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                },
                {
                    "id": 1601244407424245800,
                    "text": "RT @CJENMMOVIE: 아름다운 밤이에요 *.◟(ˊᗨˋ)◞.*\n&lt;헤어질 결심&gt; &lt;외계+인&gt;1부 &lt;공조2: 인터내셔날&gt;\n🏆제58회 대종상 영화제🏆\n수상을 진심으로 축하합니다. 💐\n\n#대종상영화제 #대종상 #헤어질결심 #외계인_1부 #공조2_인터내…"
                }
            ]
        },
        {
            "id": 676547,
            "original_title": "Prey for the Devil",
            "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
            "tweets": [
                {
                    "id": 1601233226713813000,
                    "text": "@Lorelay_Fox Blonde\nPrey for the devil\nBeast\nEsposa de aluguel\nHalloween ends\nLuckiest girl alive\nThe beach\nChristm… https://t.co/u0iIEXtFzT"
                },
                {
                    "id": 1601224944385679400,
                    "text": "Happy ✨Film Friday✨ my new upload will be live at 6pm GMT | 1pm EST 🍿 \n\nTalking about 'PREY FOR THE DEVIL' 2022 🎬 -… https://t.co/dv6SqVyDdU"
                },
                {
                    "id": 1601204336620863500,
                    "text": "RT @nkem_lisa: @bj_patrick19 @harrydaniyan @Tspiceskitchen While men slept, does not mean physical sleep, lol, it means wen ur spiritual li…"
                },
                {
                    "id": 1601136335393546200,
                    "text": "@bj_patrick19 @harrydaniyan @Tspiceskitchen While men slept, does not mean physical sleep, lol, it means wen ur spi… https://t.co/fk7ChxYnnX"
                },
                {
                    "id": 1601095485317468200,
                    "text": "@StammDaniel can you tell me why the name of the movie was changed from The Devil's Light to Prey For The Devil?  T… https://t.co/4EniIYzyoo"
                },
                {
                    "id": 1601081823731355600,
                    "text": "(Prey for the Devil (2022) - IMDb) has been published on Love Quote Of The Day - https://t.co/Br614iphMs https://t.co/1fWQ2mqh6h"
                },
                {
                    "id": 1601053534836772900,
                    "text": "Smile and Prey For The Devil are still having multiple daily showings at multiple theaters in Denver months after t… https://t.co/BDGiKg66n5"
                },
                {
                    "id": 1600940754066473000,
                    "text": "@huntforpics i prey for the devil and hope u do too!!"
                },
                {
                    "id": 1600916894495936500,
                    "text": "Prey for the Devil (2022 Movie) Official Trailer #2 - Christian Navarro, Jacqueline Byers - Lionsgate Movies https://t.co/asG50z7Oxt"
                },
                {
                    "id": 1600916571677143000,
                    "text": "@madebythemaker @mkeelanbishop @OhYouAreSoWrong @shanghi9386 @ReverendWarnock Your real interest is promoting insti… https://t.co/U7RvZhumUB"
                },
                {
                    "id": 1600914915774300200,
                    "text": "@madebythemaker @OhYouAreSoWrong @shanghi9386 @ReverendWarnock Your real interest is promoting institutional racism… https://t.co/C9IPORhG48"
                },
                {
                    "id": 1600891150704857000,
                    "text": "RT @OCATCOfficial: On Cinema Season 13 is here! \nS13 Ep1 'Prey for the Devil' is free to watch for all (no HEI Wall!) and can be viewed exc…"
                },
                {
                    "id": 1600885068024758300,
                    "text": "RT @ShaunaMarie_0: Hey Twitter!👋🏼\n✨THUMBNAIL REVEAL✨ for Film Fridays upload 🍿\n\nPrey For The Devil (2022) Talking Review 9/12 6pm GMT | 1pm…"
                },
                {
                    "id": 1600881355780653000,
                    "text": "@luastardust @camp_cryptid Best - Prey, Nope, Prey For The Devil, Smile\n\nWorst - Barbarian\n\nLooking forward to Mega… https://t.co/U8Uuo7S02p"
                },
                {
                    "id": 1600866413719490600,
                    "text": "Prey for the Devil (2022) https://t.co/EejHEOq6UD"
                },
                {
                    "id": 1600862433400475600,
                    "text": "WHY  PEOPLE ASKING BRETANICA IS BACTERIA,VAMPIRES=ISHA DHARE MASHRSS,MOSQUETOS?THAT KIND DRAMA FINISH MY… https://t.co/CtiwSDDNaZ"
                },
                {
                    "id": 1600844973250736000,
                    "text": "@igrstory vc foi assistir prey for the devil nos cinys mas não assistiu smile"
                },
                {
                    "id": 1600832107453943800,
                    "text": "Top 10 worst:\n\nCrimes of the future\nElvis\nMen\nFirestarter\nMorbius\nAmsterdam\nPrey for the Devil\nBeast\nBlack Adam\nDon’t worry Darling"
                },
                {
                    "id": 1600700008541876200,
                    "text": "@RandomBookBoi That whole damn film… Mixing some rebel romance and a whole damn traumatized new character with no b… https://t.co/idZXSKyQbX"
                },
                {
                    "id": 1600697195241476000,
                    "text": "RT @ShaunaMarie_0: Hey Twitter!👋🏼\n✨THUMBNAIL REVEAL✨ for Film Fridays upload 🍿\n\nPrey For The Devil (2022) Talking Review 9/12 6pm GMT | 1pm…"
                },
                {
                    "id": 1600630341684830200,
                    "text": "Hey Twitter!👋🏼\n✨THUMBNAIL REVEAL✨ for Film Fridays upload 🍿\n\nPrey For The Devil (2022) Talking Review 9/12 6pm GMT… https://t.co/fGd9YpRtPd"
                },
                {
                    "id": 1600593687523704800,
                    "text": "@mmpadellan Prey for the devil and he shall bring upon a person who almost ran over his wife / ex wife"
                },
                {
                    "id": 1600566072956043300,
                    "text": "@MovieBoxProapp Are they going to add prey for the devil anytime soon"
                },
                {
                    "id": 1600550713800769500,
                    "text": "🚨🚨 Pre Order Live 🇬🇧\n\nPREY FOR THE DEVIL (2022)\n\n🇬🇧-Amazon \n4K Ultra-HD https://t.co/vD1J89M8cx\nBlu-Ray… https://t.co/qO429D6zTP"
                },
                {
                    "id": 1600543496670060500,
                    "text": "@StuffKSaid Prey for the Devil is an uplifting movie? McDonald's isn't a chain restaurant &amp; everything is \"fresh\" i… https://t.co/xbm2TlB01Z"
                },
                {
                    "id": 1600508027089698800,
                    "text": "He didn't have to carry, Prey For The Devil, On his back, but he did it anyway"
                },
                {
                    "id": 1600496636584665000,
                    "text": "Prey for the Devil will be available online in HD on December 13th 2022\nTrailer: https://t.co/44Xeko9MAc https://t.co/4ayMm6RDlg"
                },
                {
                    "id": 1600493588449828900,
                    "text": "i watched prey for the devil yesterday and it was the worst fucking movie i’ve seen so far"
                },
                {
                    "id": 1600484396376752000,
                    "text": "Your adversary the devil prowls around like a roaring lion, seeking someone to devour. 1Pt 5:8\n\nDo you know who mak… https://t.co/yeFFZ172SI"
                },
                {
                    "id": 1600378730865520600,
                    "text": "RT @theadaezesworld: The Devil and His angels are searching daily for victims that will fall prey and they are coming from different angles…"
                },
                {
                    "id": 1600304147223675000,
                    "text": "Prey for the Devil better have me jumping out my seat. Period!"
                },
                {
                    "id": 1600279902057439200,
                    "text": "RT @AcragasOf: @QuintusCurtius There's a great demonic posession movie that was out recently called \"Prey for the Devil\" that's from a Cath…"
                },
                {
                    "id": 1600269102341410800,
                    "text": "Prey for the Devil features a nun who wants to study exorcisms. Click and receive monthly #book and #movie reviews… https://t.co/TgJrol8quS"
                },
                {
                    "id": 1600250951381635000,
                    "text": "@QuintusCurtius There's a great demonic posession movie that was out recently called \"Prey for the Devil\" that's fr… https://t.co/JY6nUeL8vc"
                },
                {
                    "id": 1600235082962194400,
                    "text": "nem tem na lista mas prey for the devil foi o meu favorito esse ano, um enredo clichê que já era de se esperar mas… https://t.co/BuFKZUnaQI"
                },
                {
                    "id": 1600226130534928400,
                    "text": "RT @MoviePolls4U: On This day in Movie History.\n\nDecember 6th 1962: COLIN SALMON is born.\n\n(🎥 Prey for the Devil - 2022)\nhttps://t.co/yV5Jb…"
                },
                {
                    "id": 1600225673561669600,
                    "text": "Prey for the Devil (2022)\nDirected by Daniel Stamm\n\nThoughts on this film? https://t.co/kK8nELDeRK"
                },
                {
                    "id": 1600225615869022200,
                    "text": "@ctims12 @Firestarter13A @MollyJongFast I can translate.  First.  Speaking in tongues is a carnival act and a scam.… https://t.co/Ki1pY04qdd"
                },
                {
                    "id": 1600225526571888600,
                    "text": "@slow_learner0 Prey for the Devil maybe?"
                },
                {
                    "id": 1600200886202007600,
                    "text": "RT @theadaezesworld: The Devil and His angels are searching daily for victims that will fall prey and they are coming from different angles…"
                },
                {
                    "id": 1600197743351169000,
                    "text": "The Devil and His angels are searching daily for victims that will fall prey and they are coming from different ang… https://t.co/HCWs5bpTXa"
                },
                {
                    "id": 1600144215748624400,
                    "text": "On This day in Movie History.\n\nDecember 6th 1962: COLIN SALMON is born.\n\n(🎥 Prey for the Devil - 2022)\nhttps://t.co/yV5Jba3Hpc"
                },
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
                }
            ]
        },
        {
            "id": 497828,
            "original_title": "Triangle of Sadness",
            "overview": "A celebrity model couple are invited on a luxury cruise for the uber-rich, helmed by an unhinged captain. What first appeared Instagrammable ends catastrophically, leaving the survivors stranded on a desert island and fighting for survival.",
            "tweets": [
                {
                    "id": 1601250742970437600,
                    "text": "RT @ComisionEuropea: 🎬Mañana → 35ª edición Premios Cine Europeo 2022\n\n16 películas subvencionadas por la UE, y 4 de ellas compiten por el p…"
                },
                {
                    "id": 1601250575273939000,
                    "text": "https://t.co/jGb4JU2pU1 #TriangleOfSadness #trakt"
                },
                {
                    "id": 1601250133781655600,
                    "text": "Triangle of Sadness 🤯"
                },
                {
                    "id": 1601249552128176000,
                    "text": "RT @inquirerdotnet: Have you noticed that all of actress Dolly de Leon’s active social media accounts currently feature black profile photo…"
                },
                {
                    "id": 1601249299685208000,
                    "text": "So, the critical question is will I be able to watch ‘BABYLON’, ‘BONES &amp; ALL’, ‘THE MENU’, ‘GLASS ONION’, TRIANGLE… https://t.co/WO03RNAyGB"
                },
                {
                    "id": 1601248594392404000,
                    "text": "I want to shake YouTube like an etch a sketch until someone makes a 2+ hr long triangle of sadness video essay"
                },
                {
                    "id": 1601248535202394000,
                    "text": "Hoy bakit ganon yung Triangle of Sadness!!!! Kailangan ko ng explanation hahaha but Dolly De Leon! Tangina!! Nakaka… https://t.co/bye4Yb3O4Q"
                },
                {
                    "id": 1601247523959865300,
                    "text": "#2023年期待映画ベスト10\n\nTriangle of Sadness\nヴェネデッタ\nEO\n別れる決心\nイニシェリン島の精霊\nバビロン\nマッシブ・タレント\nノック・アット・ザ・キャビン\nKiller of the Flower… https://t.co/eOEWOijUpf"
                },
                {
                    "id": 1601247345324482600,
                    "text": "RT @SatelliteAwards: 2022 #SatelliteAwards Nominations\nMOTION PICTURE, COMEDY OR MUSICAL\n• Triangle of Sadness #TriangleOfSadness\n• Everyth…"
                },
                {
                    "id": 1601245718643372000,
                    "text": "RT @PHTVandFilmUPD: . @THR predicts Dolly De Leon as a ‘frontrunner’ for Best Supporting Actress at the Oscars 2023 for her performance in…"
                },
                {
                    "id": 1601245661357564000,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards\n\nBEST SUPPORTING ACTRESS:\n\nKerry Condon, Banshees of Inisherin\nStephanie Hsu, Everythi…"
                },
                {
                    "id": 1601245581351223300,
                    "text": "RT @8qingren: me watching triangle of sadness for the plot \nthe plot:  https://t.co/TCwfXdVKNP"
                },
                {
                    "id": 1601245575302692900,
                    "text": "@blowryontv I think that its normal for people from completely different cultures to have differing opinions. Trian… https://t.co/kKE2ZI9eMk"
                },
                {
                    "id": 1601245284650356700,
                    "text": "RT @ComisionEuropea: 🎬Mañana → 35ª edición Premios Cine Europeo 2022\n\n16 películas subvencionadas por la UE, y 4 de ellas compiten por el p…"
                },
                {
                    "id": 1601244726216511500,
                    "text": "Triangle of Sadness: totalmente folle ma con tanti significati più o meno nascosti.\n\nThe Devil Wears Prada: ci ho m… https://t.co/57yhedBMSP"
                },
                {
                    "id": 1601244650907787300,
                    "text": "RT @neonrated: \"What made it even more special was how Ruben wrote her from “nothing to something.” It’s very important for the role to hav…"
                },
                {
                    "id": 1601244635426599000,
                    "text": "#2023年期待映画ベスト10\n\n①Triangle of Sadness\n②別れる決心\n③The Whale\n④インディ・ジョーンズと運命のダイヤル\n⑤Poor Things\n⑥EO\n⑦ベネデッタ\n⑧バビロン\n⑨TÁR\n⑩エブリシング・エブリウェア・オール・アット・ワンス"
                },
                {
                    "id": 1601243135807746000,
                    "text": "@phsantos PH, vc viu o Triangle of sadness?"
                },
                {
                    "id": 1601242221486882800,
                    "text": "@moviemenfes TRIANGLE OF SADNESS BAGUS BANGET GILAKK"
                },
                {
                    "id": 1601241844284764200,
                    "text": "@MundosdeLectura Nope, Triangle of Sadness,Kimi,Bones and all,TÁR.\nYo no he visto Decision to Leave,ni Broker pero… https://t.co/SmSKNWOExo"
                },
                {
                    "id": 1601240713899151400,
                    "text": "RT @parismarx: “Anti-capitalist art is now a genre, one safe enough to be reproduced by the very people it’s supposed to target.” https://t…"
                },
                {
                    "id": 1601240574551822300,
                    "text": "Triangle of Sadness'ı ben baya beğendim.\nBir yarım saat daha olsa izlerdim. https://t.co/eYESyEyCiY"
                },
                {
                    "id": 1601240342531281000,
                    "text": "RT @Nina_Metz: Y'all know my forever gripe is that Hollywood has been ~way too~ consumed with stories about the wealthy, even when they're…"
                },
                {
                    "id": 1601239530103017500,
                    "text": "RT @markcousinsfilm: Worked so hard this year that I missed lots of films, but of what I saw my top 10 new UK/Ireland cinema releases:\nAfte…"
                },
                {
                    "id": 1601238346696601600,
                    "text": "@BaaadSorter 1. RRR\n2. The Worst Person in the World\n3. Decision of love\n4. Triangle of Sadness\n5. Everything Everywhere All at Once"
                },
                {
                    "id": 1601237896966467600,
                    "text": "RT @parismarx: “Anti-capitalist art is now a genre, one safe enough to be reproduced by the very people it’s supposed to target.” https://t…"
                },
                {
                    "id": 1601237730977280000,
                    "text": "RT @triangleofsad: What the world needs now.\n\nRuben Östlund’s Palme d’Or winner, TRIANGLE OF SADNESS, sets sail in theaters October 7. http…"
                },
                {
                    "id": 1601236775275372500,
                    "text": "Triangle of Sadness (2022, Ruben Östlund) https://t.co/pQNar4gxvg"
                },
                {
                    "id": 1601236700763590700,
                    "text": "RT @ComisionEuropea: 🎬Mañana → 35ª edición Premios Cine Europeo 2022\n\n16 películas subvencionadas por la UE, y 4 de ellas compiten por el p…"
                },
                {
                    "id": 1601236411130478600,
                    "text": "🎟 Doet Amazon Prime Video het voor het eerst beter dan Netflix? \n🎟 Disney heeft hoge verwachtingen van Fox-aankoop… https://t.co/5CjYT51rK9"
                },
                {
                    "id": 1601235793284325400,
                    "text": "🎬Mañana → 35ª edición Premios Cine Europeo 2022\n\n16 películas subvencionadas por la UE, y 4 de ellas compiten por e… https://t.co/VB8uGmPaHT"
                },
                {
                    "id": 1601235250952429600,
                    "text": "RT @parismarx: “Anti-capitalist art is now a genre, one safe enough to be reproduced by the very people it’s supposed to target.” https://t…"
                },
                {
                    "id": 1601235104437002200,
                    "text": "\"Triangle of sadness\" es una genial sátira acerca de todo el sistema económico y su alegoria del colapso es certera… https://t.co/24CdZRxX5y"
                },
                {
                    "id": 1601233880488759300,
                    "text": "triangle of sadness (2022) https://t.co/hGquVpxyAh"
                },
                {
                    "id": 1601233016730562600,
                    "text": "🎞️16 filmov, nastalih s podporo 🇪🇺, je nominiranih za evropske filmske nagrade: https://t.co/NQ4zKFpU8y.\n\n🏆Nominaci… https://t.co/lK5BE106EJ"
                },
                {
                    "id": 1601231786276593700,
                    "text": "@LydiaCornell New favorite: Triangle of Sadness. I howled!!!"
                },
                {
                    "id": 1601231512598327300,
                    "text": "My Top 2022 Films (so far):\n\n-EEAAO\n-Top Gun: Maverick\n-Nope\n-Barbarian\n-Pearl\n-Bodies Bodies Bodies\n-X\n\nI haven't… https://t.co/pGwY9qdDRy"
                },
                {
                    "id": 1601228894480236500,
                    "text": "@robgreeta Martins Skorsēze ir biased, bet filmu kultūru \"nogalina\" filmu skatītāji.\n\nTo var attīstīt, nākot uz ne-… https://t.co/GAUg2ffrRH"
                },
                {
                    "id": 1601228840180666400,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards\n\nBEST SUPPORTING ACTRESS:\n\nKerry Condon, Banshees of Inisherin\nStephanie Hsu, Everythi…"
                },
                {
                    "id": 1601228588636065800,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards\n\nBEST ENSEMBLE:\n\nEverything Everywhere All at Once\nGlass Onion: A Knives Out Mystery\nT…"
                },
                {
                    "id": 1601228552908963800,
                    "text": "140. Triangle Of Sadness\nSatir tentang dunia romawi yang menyinggung isu kesetaraan, 147menit yang tak membosankan… https://t.co/OnVrW2XB8U"
                },
                {
                    "id": 1601228429893828600,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards\n\nBEST ORIGINAL SCREENPLAY:\n\nThe Banshees of Inisherin\nDecision To Leave\nEverything Eve…"
                },
                {
                    "id": 1601226936835268600,
                    "text": "RT @DiscussingFilm: 4th DiscussingFilm Critic Awards:\n\nBEST BREAKTHROUGH PERFORMANCE:\n\nFrankie Corio, Aftersun\nDiego Calva, Babylon\nStephan…"
                },
                {
                    "id": 1601226016160157700,
                    "text": "Filmmenü - Violent Night, She Said, Bones &amp; All, Triangle of Sadness  🅴 #dieLetzteFilmkritik \nhttps://t.co/VX5PNYDVqL via @PodcastAddict"
                },
                {
                    "id": 1601225943686992000,
                    "text": "RT @SatelliteAwards: 2022 #SatelliteAwards Nominations\nMOTION PICTURE, COMEDY OR MUSICAL\n• Triangle of Sadness #TriangleOfSadness\n• Everyth…"
                },
                {
                    "id": 1601224718534992000,
                    "text": "RT @Nina_Metz: Y'all know my forever gripe is that Hollywood has been ~way too~ consumed with stories about the wealthy, even when they're…"
                },
                {
                    "id": 1601224308751503400,
                    "text": "@FilmstoFilms_ Triangle of Sadness"
                },
                {
                    "id": 1601224165746708500,
                    "text": "@sirjsph @OKNOTOK2017 Actually this years Oscar field could be a really strong one compared to last year's - EEAAO,… https://t.co/sD8id4eWYZ"
                },
                {
                    "id": 1601223705652494300,
                    "text": "Any other communists seen the Triangle of Sadness? Very strange, disjointed move that could only have been a commen… https://t.co/BnV2c7KXKY"
                },
                {
                    "id": 1601222870129995800,
                    "text": "sofrendo pra terminar triangle of sadness antes do jogo começar"
                }
            ]
        },
        {
            "id": 842934,
            "original_title": "Poker Face",
            "overview": "A yearly high-stakes poker game between childhood friends turns into chaos when the tech billionaire host unveils an elaborate scheme to seek revenge for the ways they've betrayed him over the years. But as his plans unfold, a group of thieves hatch plans of their own breaking into the mansion thinking it is empty. The old friends quickly band together and the years of playing the game help them win their way through a night of terror.",
            "tweets": [
                {
                    "id": 1601251776594083800,
                    "text": "Ga juga sih, bagi kita (luar CSYPAJS, udah jelas kan Aku sering sebut kita= Aku or setipe), pemilik mata nukik, hid… https://t.co/MaIC696kr9"
                },
                {
                    "id": 1601251682280931300,
                    "text": "Poker Face Food Challenge (ft. VERY Spicy Sushi!!) https://t.co/H48p1LZEj5 via @YouTube\n\nif you need a laugh (or a… https://t.co/HDr6IpkhVQ"
                },
                {
                    "id": 1601251292164558800,
                    "text": "RT @TODAYshow: #WhiteLotus star Haley Lu Richardson opened up about her character Portia, developing a poker face to not spoil the show’s e…"
                },
                {
                    "id": 1601250929876926500,
                    "text": "Somehow I got talked into doing the first ever \"Recipe 4 Poker Face Disaster Challenge\" tomorrow.\n\n@RecIpe4D1saster… https://t.co/sVtBp4Jjcl"
                },
                {
                    "id": 1601250838059810800,
                    "text": "@kyrstensinema You are so damned predictable and you don’t have a good poker face. You’re in it for lobby money. Go… https://t.co/dd8APIKgxP"
                },
                {
                    "id": 1601250395418169300,
                    "text": "Flashback Friday to GnashVegas 2019 🎭 \n\nHow does your poker face compare to @Gnash00? Find out Wednesday, Feb. 8 at… https://t.co/CtIynOmIOz"
                },
                {
                    "id": 1601250047336665000,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601248530664149000,
                    "text": "RT @Kristozant09: @Playymaakerr la versión NO Póker Face de PlayAprove [PNG EN DISCORD, PLAY] https://t.co/EQHXI595Lf"
                },
                {
                    "id": 1601248493372203000,
                    "text": "I don't know how to touch your heart\n伝えたくて知りたくてでもできなくて\nuntil we can see the sunrise again\nkeep trying　POKER FACE\nmy… https://t.co/IBaEEOHbUR"
                },
                {
                    "id": 1601248440226578400,
                    "text": "@DiamondandSilk #Traitor #mikepence  was probably the Leaker!\nI'll bet, Ol' poker face, was given a shot at Preside… https://t.co/9JDbpIU3Dn"
                },
                {
                    "id": 1601248351445430300,
                    "text": "@Playymaakerr la versión NO Póker Face de PlayAprove [PNG EN DISCORD, PLAY] https://t.co/EQHXI595Lf"
                },
                {
                    "id": 1601248301453815800,
                    "text": "NEW POKER FACE EP"
                },
                {
                    "id": 1601248153193549800,
                    "text": "Well Geez that’s fucking rude!  \nHarry's 'poker face' at Meghan 'mocking' the Queen with curtsey https://t.co/doKSCDOctY"
                },
                {
                    "id": 1601246715914641400,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601246391174455300,
                    "text": "ImOw is singing poker face by lady gaga whilst sitting on the floor with a nessie drunk"
                },
                {
                    "id": 1601245998504083500,
                    "text": "Ngga sih, poker face yg ku tangkap, not beauty in enak dipandang oleh kelompok org tertentu. Misal muka tegas, mata… https://t.co/OFPZxDbdxy"
                },
                {
                    "id": 1601244582934499300,
                    "text": "Ali: akin lang si tata bena vika\nVika: wag mong subakan, masisira buhay mo :) *poker face* \nHAHHAHAHAHA ASA NA PUD NA GIKAN DAEEEEE"
                },
                {
                    "id": 1601243880258560000,
                    "text": "🗿 &lt;--- is a mood emoji. my ultimate face is a poker face"
                },
                {
                    "id": 1601243871710949400,
                    "text": "@zachary_bosch On the one hand I kinda do, but on the other hand I do NOT have a good poker face"
                },
                {
                    "id": 1601243624041504800,
                    "text": "Harry's 'poker face' at Meghan 'mocking' the Queen with curtsey https://t.co/nVbqrhV0fr via @MailOnline… https://t.co/mULcM4uwlO"
                },
                {
                    "id": 1601243374010663000,
                    "text": "Harry's 'poker face' at Meghan 'mocking' the Queen with curtsey https://t.co/q6sLMCJIGf via @MailOnline"
                },
                {
                    "id": 1601243363684008000,
                    "text": "\"Why would I waste my time trying to capture a pathetic runt like him?  Rats hardly belong on my wall, even if they… https://t.co/2zcSEshY6k"
                },
                {
                    "id": 1601242997697679400,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601242652271595500,
                    "text": "@ViggyStrdust Poker face"
                },
                {
                    "id": 1601242030474424300,
                    "text": "RT @sliitttt: woke up to cartman singing poker face"
                },
                {
                    "id": 1601241864438706200,
                    "text": "@playboisugoi The only people Zoro cuts in half are Logia type devil fruit users, because they can always reshape t… https://t.co/U892bGmpDE"
                },
                {
                    "id": 1601241611794804700,
                    "text": "Harry's 'poker face' at Meghan 'mocking' the Queen with curtsey https://t.co/Zo0pmwtQ7v via @MailOnline"
                },
                {
                    "id": 1601240913405423600,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601240662917144600,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601240490451800000,
                    "text": "RT @MailOnline: Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601240267583012900,
                    "text": "Harry's 'poker face' at Meghan 'mocking' the Queen https://t.co/uoP5wZJRxf"
                },
                {
                    "id": 1601240026880565200,
                    "text": "RT @kleponwajik: When you can watch sex scenes in movies with a straight, unbothered poker face but always, ALWAYS, make every kind of stra…"
                },
                {
                    "id": 1601239960891576300,
                    "text": "@Callux I genuinely can't wait for tonights episode @sortedfood Poker face challenge 👀🔥 @Bebbrell"
                },
                {
                    "id": 1601239901055635500,
                    "text": "Liriknya, \nCan't read my\nCan't read my\nOh no, he can't read my poker face\n\nSuara lelaki \"Shes got like nobody\" muka… https://t.co/hq0KI0G6rk"
                },
                {
                    "id": 1601239551628152800,
                    "text": "no banheiro escutando poker face"
                },
                {
                    "id": 1601239082658513000,
                    "text": "@diastergaywitch that’s so me but when lady gaga said ‘ p-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah) ‘"
                },
                {
                    "id": 1601238263767134200,
                    "text": "RT @TODAYshow: #WhiteLotus star Haley Lu Richardson opened up about her character Portia, developing a poker face to not spoil the show’s e…"
                },
                {
                    "id": 1601237575754461200,
                    "text": "😐 emoji mais perto de poker face que achei"
                },
                {
                    "id": 1601237175592329200,
                    "text": "@prettygirlxclub @MurrayShaneil You also need face surgery because your poker face turns us off"
                },
                {
                    "id": 1601237098131992600,
                    "text": "@MurrayShaneil @prettygirlxclub You also need face surgery because your poker face turns us off"
                },
                {
                    "id": 1601237027978027000,
                    "text": "Hide behind your poker face, you do it every day"
                },
                {
                    "id": 1601235732982485000,
                    "text": "@tanyakanrl Suka ngayal tapi gasadar kalau itu sebenarnya mimpinya, ngopi sendiri dipojokan, sedikit teman tapi ber… https://t.co/lzhtdKSok1"
                },
                {
                    "id": 1601235614304637000,
                    "text": "\"Smile and laughter are always good, but never forget your Poker Face\" -Kaito Kid"
                },
                {
                    "id": 1601234195920978000,
                    "text": "RT @olivermessi7454: @sportbible In that case...nobody should celebrate after scoring a goal..The manager of the scoring team should keep a…"
                },
                {
                    "id": 1601233857243537400,
                    "text": "@churruption Desperately trying to maintain a poker face reading this update bc I am in public!! With people!! Unfa… https://t.co/jBJQolQm1U"
                },
                {
                    "id": 1601233099555119000,
                    "text": "RT @TODAYshow: #WhiteLotus star Haley Lu Richardson opened up about her character Portia, developing a poker face to not spoil the show’s e…"
                },
                {
                    "id": 1601233092957864000,
                    "text": "@hodgetwins @jack Good poker face"
                },
                {
                    "id": 1601231419166314500,
                    "text": "Can't read my poker face"
                },
                {
                    "id": 1601230285865353200,
                    "text": "\" he have poker face be extra careful with him \""
                },
                {
                    "id": 1601229816568619000,
                    "text": "RT @TODAYshow: #WhiteLotus star Haley Lu Richardson opened up about her character Portia, developing a poker face to not spoil the show’s e…"
                }
            ]
        },
        {
            "id": 736732,
            "original_title": "브로커",
            "overview": "Boxes are left out for people to anonymously drop off their unwanted babies.",
            "tweets": [
                {
                    "id": 1601250737136472000,
                    "text": "브로커 한 번 더 보고 온다요 무인 때 아이유 볼 생각에 떨려서 제대로 못 봣음🥺 https://t.co/o1t9IaXapr"
                },
                {
                    "id": 1601250249225302000,
                    "text": "RT @dltldms516: [ 박지연 ] jiyeon2 인스타 스토리📸 \n\n멋있다 이쁘다 ❤\n브로커 대박나라!!\n@/DLWLRMA\n\n▶https://t.co/Js1bFtuIBT\n\n#이지은 #아이유 #IU #브로커 https://t.co/KafDNf…"
                },
                {
                    "id": 1601249788313612300,
                    "text": "RT @ting30436424: IU❤️Jiyeon❤️Yooinna❤️\n\n#iu #LeeJieun #아이유 #jiyeon #yooinna #kpop #idol #actress #movie #singer #유인나 #영화 #박지연 #지연 #yg #브로커…"
                },
                {
                    "id": 1601249352831631400,
                    "text": "RT @dltldms516: [ 박지연 ] jiyeon2 인스타 스토리📸 \n\n멋있다 이쁘다 ❤\n브로커 대박나라!!\n@/DLWLRMA\n\n▶https://t.co/Js1bFtuIBT\n\n#이지은 #아이유 #IU #브로커 https://t.co/KafDNf…"
                },
                {
                    "id": 1601247901795377200,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조제작 #신분증위조제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #중국밀항"
                },
                {
                    "id": 1601244889051967500,
                    "text": "이런일을 맡아 하는 브로커가 있답니다. 밀입국을 했다면 백프로 브로커랑 연관이 있을거랍니다."
                },
                {
                    "id": 1601242377527914500,
                    "text": "RT @01771G: 더 레드스트링스클럽(The red strings club)\n\n기업에 의해 통제받는 도시를 배경으로 그려지는 사이버펑크 테이스트 어드벤처 게임.\n\n정보 브로커 바텐더와 그의 파트너인 신경망 해커가 되어 인류를 지배하려는 기업의 기…"
                },
                {
                    "id": 1601239894403129300,
                    "text": "RT @01771G: 더 레드스트링스클럽(The red strings club)\n\n기업에 의해 통제받는 도시를 배경으로 그려지는 사이버펑크 테이스트 어드벤처 게임.\n\n정보 브로커 바텐더와 그의 파트너인 신경망 해커가 되어 인류를 지배하려는 기업의 기…"
                },
                {
                    "id": 1601238094652461000,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601237180932055000,
                    "text": "RT @01771G: 더 레드스트링스클럽(The red strings club)\n\n기업에 의해 통제받는 도시를 배경으로 그려지는 사이버펑크 테이스트 어드벤처 게임.\n\n정보 브로커 바텐더와 그의 파트너인 신경망 해커가 되어 인류를 지배하려는 기업의 기…"
                },
                {
                    "id": 1601236772356522000,
                    "text": "RT @01771G: 더 레드스트링스클럽(The red strings club)\n\n기업에 의해 통제받는 도시를 배경으로 그려지는 사이버펑크 테이스트 어드벤처 게임.\n\n정보 브로커 바텐더와 그의 파트너인 신경망 해커가 되어 인류를 지배하려는 기업의 기…"
                },
                {
                    "id": 1601234432077475800,
                    "text": "브로커 보는데 동수소영 때문에 미치겠음"
                },
                {
                    "id": 1601232824417144800,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조제작 #신분증위조\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #중국밀항"
                },
                {
                    "id": 1601232787427643400,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #일본밀항"
                },
                {
                    "id": 1601226965285240800,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601225220253446100,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조 #신분증위조\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #중국밀항"
                },
                {
                    "id": 1601225198417883100,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #필리핀밀입국"
                },
                {
                    "id": 1601219596782309400,
                    "text": "헤결에 나온 카발란 혹시 중문 면세점에 있을까 해서 지인들이 제주도 다녀올 때마다 문의 부탁하는데 매번 없음....다른 에디션은 다 있어도 헤결에 나온 버전은 항상 없음!! 😭😭 아무리 생각해도 기도수 이… https://t.co/RZjUQCG88Q"
                },
                {
                    "id": 1601218001017372700,
                    "text": "RT @e08gys20iyb: 스포없는 브로커후기:관크가 없음\n왜냐면 주위사람들이 다 보다가 잠들엇기때문에....."
                },
                {
                    "id": 1601217719365689300,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조제작 #신분증위조제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀항"
                },
                {
                    "id": 1601217687375741000,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #필리핀밀항"
                },
                {
                    "id": 1601216544595677200,
                    "text": "RT @L0VE_Y0UR_4RT: ⚠️ 2짤 스포일러~노출\n브로커 H와 조수 S #SDRA #슈단나더 https://t.co/SW7VQcaWKT"
                },
                {
                    "id": 1601213907225698300,
                    "text": "RT @e08gys20iyb: 스포없는 브로커후기:관크가 없음\n왜냐면 주위사람들이 다 보다가 잠들엇기때문에....."
                },
                {
                    "id": 1601210122822619100,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조 #신분증위조제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀항"
                },
                {
                    "id": 1601210100857069600,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀입국"
                },
                {
                    "id": 1601202599096508400,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀항"
                },
                {
                    "id": 1601201976720912400,
                    "text": "서귀포여드름관리\n분당감정오일\n동두천커피숍\n친환경티셔츠\n영광군회집\n병문안선물\n브로커\n양산시소개팅 https://t.co/ttD7KfpgPY"
                },
                {
                    "id": 1601199052594761700,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601198231756890000,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601196310148763600,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601193819965657000,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601192265019719700,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601191577145446400,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601190701475459000,
                    "text": "RT @coup_jung: csc 섹텐 오지게 탄거 티나는 영상\n\nyjh 훅 들어오니까 동공 흔들리고 어깨 다시 부여잡는게 너무 영혼 털린거 티나요 아저씨 ㅜ가뜩이나 가까이 있는데 '브로커' 발음 특성상 귀에 숨도 마니 닿았을꺼구 바로 입 달싹이는게…"
                },
                {
                    "id": 1601190422545432600,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601189334266577000,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601187516643561500,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권위조제작 #신분증위조제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀입국"
                },
                {
                    "id": 1601187484192239600,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #중국밀항"
                },
                {
                    "id": 1601185894928502800,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601181868329951200,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601181835655975000,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601180843548217300,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601180651763699700,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601180638690037800,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601179924655919000,
                    "text": "텔레그램 mhbkim \n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 비자 여권제작 전문 #여권제작 #신분증위조제작\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #베트남밀입국"
                },
                {
                    "id": 1601179901520130000,
                    "text": "텔레그램 mhbkim\n\n무비자 무여권 안전보장 #해외점프 전문 #밀항브로커 #밀항\n국내외 실사용 가능 #비자제작 #여권제작 #신분증제작 전문\n국내 #신분세탁 및 비밀보장성형 중계 밀항브로커\n#징역바지 #바지사장 구인중계 #중국밀입국"
                },
                {
                    "id": 1601178957277454300,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601178248872071200,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601176659297980400,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                },
                {
                    "id": 1601176644559212500,
                    "text": "RT @_itsmerys: Lee Ji-eun of #브로커 | The 58th Grand Bell Awards \n\n#LeeJieun #이지은 #IU #아이유 https://t.co/qyT6nc8ofc"
                }
            ]
        },
        {
            "id": 615777,
            "original_title": "Babylon",
            "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
            "tweets": [
                {
                    "id": 1601251689100894200,
                    "text": "@_Crypto__Girl_ @BOROWSKIMIKE @al_jiaan Quelle ignorance crasse. En même temps venant d'une fan de crypto on attend pas autre chose."
                },
                {
                    "id": 1601251641990283300,
                    "text": "Meanwhile on that slender riotous island ...\nhttps://t.co/iWUPBaDTDt"
                },
                {
                    "id": 1601251538068205600,
                    "text": "@ralter well have you seen Babylon yet"
                },
                {
                    "id": 1601251458745528300,
                    "text": "RT @RadixFS: People are even more excited about Babylon after what they saw yesterday\n\n@radixdlt $XRD #Radix #RadFi2022"
                },
                {
                    "id": 1601251418949968000,
                    "text": "RT @babylonmovie: A score for the ages. From Academy Award winner Justin Hurwitz, discover the original #BabylonMovie soundtrack. https://t…"
                },
                {
                    "id": 1601251307699900400,
                    "text": "RT @DLEveryFriday: https://t.co/74FJGoAc1X"
                },
                {
                    "id": 1601251099662590000,
                    "text": "'Babylon' trailer makes you want to party with Margot Robbie and Brad Pitt #digital #digitalmarketing #smm https://t.co/WlcZxPWKG7"
                },
                {
                    "id": 1601251032700719000,
                    "text": "@jjwallwork @radixdlt Its stupid what you say. It was a preview and explanation of what the radix tech stack is abl… https://t.co/xjHH4G4bvb"
                },
                {
                    "id": 1601251028287955000,
                    "text": "RT @BuraStar23: ارتجلت مارغو روبي مشهد التقبيل مع براد بيت في فيلم [ Babylon ]  لأنها أرادت تقبيله . وقالت مارغو : \n\n\"لم يكن في النص.  لكنن…"
                },
                {
                    "id": 1601251010277953500,
                    "text": "RT @Fandango: A score for the ages. \n\nHear what the cast and crew of #BabylonMovie had to say about Academy Award winner Justin Hurwitz's a…"
                },
                {
                    "id": 1601250981232054300,
                    "text": "My heart is pounding my emotional ass can't even watch romantic movies (the couples always breaks apart for some re… https://t.co/XPACdyVTZQ"
                },
                {
                    "id": 1601250855617171500,
                    "text": "RT @Sollywood_sa: صالات السينما تستقبل فيلم Babylon من بطولة براد بيت ومارجو روبي.. 23 ديسمبر الجاري\n\n#سوليوود\nhttps://t.co/5MA4QlKzjZ"
                },
                {
                    "id": 1601250847002087400,
                    "text": "avatar\nthe fabelmans\neverything everywhere all at once\ntill\ntar\nelvis\nglass onion\nshe said\nbabylon\nthe banshees of… https://t.co/lPQtNrmQpz"
                },
                {
                    "id": 1601250614058840000,
                    "text": "RT @NextBestPicture: What a great day for new film scores! #BestOriginalScore #FYC #Oscars #FilmTwitter\n\nBABYLON: https://t.co/mja5BGjnh1…"
                },
                {
                    "id": 1601250609025364000,
                    "text": "@charles_gambino @TheBabylonBee You don't understand that the Babylon Bee is a parody site? \nWhy don't any of you p… https://t.co/NUv1eD5tzx"
                },
                {
                    "id": 1601250530827079700,
                    "text": "Now we do things without substance, essence or depth. Is Satan in Babylon succeeding at corrupting everything? By w… https://t.co/aiShoj0hYn"
                },
                {
                    "id": 1601250487617327000,
                    "text": "Me trying to avoid the Babylon score until I get to see the film in January. https://t.co/SeBz2IkLes"
                },
                {
                    "id": 1601250431338152000,
                    "text": "@Babylon_Hookr @ParisHilton This is genius lmao\nBut notice how it still made headlines? Lmao\nAnd I mean the first p… https://t.co/7fArkSLKYw"
                },
                {
                    "id": 1601250108339032000,
                    "text": "@nogenderjust Don’t think like that. I can tell you what would have happened:  you didn’t practice taking it. So, y… https://t.co/SQgnIbu6Q1"
                },
                {
                    "id": 1601250090902954000,
                    "text": "RT @Sollywood_sa: صالات السينما تستقبل فيلم Babylon من بطولة براد بيت ومارجو روبي.. 23 ديسمبر الجاري\n\n#سوليوود\nhttps://t.co/5MA4QlKzjZ"
                },
                {
                    "id": 1601250031239303200,
                    "text": "RT @cadeIinhadalana: Assistindo o jogo do Brasil contra Croácia assim\nhttps://t.co/TBCz3dGDgy"
                },
                {
                    "id": 1601250006652289000,
                    "text": "RT @JennTristanD20: Babylon 5's series finale, \"Sleeping in Light\", was my biggest scripted TV tearjerker episode for like 2 decades.\n\nBut…"
                },
                {
                    "id": 1601249995331887000,
                    "text": "RT @superiIudido: tudo sobre controle https://t.co/rzawT80g9v"
                },
                {
                    "id": 1601249966508368000,
                    "text": "RT @ParamountUK: A score for the ages. From Academy Award winner Justin Hurwitz, discover the original #BabylonMovie soundtrack. https://t.…"
                },
                {
                    "id": 1601249856961794000,
                    "text": "Babylon Pro NG 11.0.1.2 With Serial Key Free 2023 Download https://t.co/xX5URzaBLa"
                },
                {
                    "id": 1601249782865227800,
                    "text": "y el babylon también por 4t4qu3 m4f10s0 https://t.co/8kSshXYogb"
                },
                {
                    "id": 1601249753815478300,
                    "text": "Babylon 5's series finale, \"Sleeping in Light\", was my biggest scripted TV tearjerker episode for like 2 decades.… https://t.co/HWEHHxzpuV"
                },
                {
                    "id": 1601249639638130700,
                    "text": "Ooh, there's a pre-save available now for the Babylon soundtrack! I'm definitely going to look forward to listening… https://t.co/alkR3UV0eB"
                },
                {
                    "id": 1601249568254873600,
                    "text": "RT @oser691: 12月11日（日）\nDON'T ASK 🎄Christmas Special🎄\nat:喜多方市「大和川酒蔵北方風土館2階」\nstart 17:30 - close 23:00\n入場料¥2000(1ドリンク付)\n【SPECIAL GUEST DJ】\nLE…"
                },
                {
                    "id": 1601249543948861400,
                    "text": "RT @oser691: 12月11日（日）\nDON'T ASK 🎄Christmas Special🎄\nat:喜多方市「大和川酒蔵北方風土館2階」\nstart 17:30 - close 23:00\n入場料¥2000(1ドリンク付)\n\n【SPECIAL GUEST DJ】\nL…"
                },
                {
                    "id": 1601249473031987200,
                    "text": "RT @DavidLimbaugh: For a minute I did a double take to make sure this wasn't the Babylon Bee. Awesome."
                },
                {
                    "id": 1601249299685208000,
                    "text": "So, the critical question is will I be able to watch ‘BABYLON’, ‘BONES &amp; ALL’, ‘THE MENU’, ‘GLASS ONION’, TRIANGLE… https://t.co/WO03RNAyGB"
                },
                {
                    "id": 1601249297156436000,
                    "text": "@PopCrave Just \"Imagine\" for a second if it was:\nBrad Pitt snuck in unscripted kiss with Margot Robbie on 'Babylon'… https://t.co/FbSJt2bZfj"
                },
                {
                    "id": 1601249292101947400,
                    "text": "Eff me I don't think I could handle watching Babylon, I just know that it will be stuck in my head and overthink ev… https://t.co/CPNOiMVd4W"
                },
                {
                    "id": 1601249268589023200,
                    "text": "@cinematicphd @videocoven I got Avatar and Babylon to see yet this year and then I’ll make my top 10 movies I’ve se… https://t.co/CbveMScFwY"
                },
                {
                    "id": 1601249113005523000,
                    "text": "From \"Top Gun: Maverick\" to \"Blonde\" to \"Babylon\" really does feel like the end of a wild party in cinema. Sun's co… https://t.co/i1rHDBTvEX"
                },
                {
                    "id": 1601249092210163700,
                    "text": "RT @KoreanUpdates: #EDEN, producer of #ATEEZ, also producer of numerous hit song of #BTOB #GFRIEND #Babylon reportedly will marry a non-cel…"
                },
                {
                    "id": 1601248952028106800,
                    "text": "@aliensexpanded What was it like, starring in A L I E N S, and then guest-starring in Babylon 5 years later?? https://t.co/3YbKZHNBfu"
                },
                {
                    "id": 1601248948303573000,
                    "text": "เอาจริงนะรู้สึกว่าสกอร์hurwitzมีเอกลักษณ์ เราเริ่มฟังจากวิปแลช พอมาฟังลาลาแลนด์ก็โทนเดียวกัน บาบิลอนก็โทนเดียวกันเ… https://t.co/k2UrEBQczN"
                },
                {
                    "id": 1601248932679405600,
                    "text": "SE O BRASIL GANHAR ANTES DE IR PROS PÊNALTIS EU ATUALIZO A AU ATE DOMINGO"
                },
                {
                    "id": 1601248890606715000,
                    "text": "RT @JunsuiFilms: 📣#Competition #Giveaway📀#RT, #FOLLOW&amp; #WIN Babylon Berlin: Series 4 on DVD ⭐#VolkerBruch #LivLisaFries #BennoFurmann #Lars…"
                }
            ]
        },
        {
            "id": 936074,
            "original_title": "Ténor",
            "overview": "While working part-time as a food deliveryman, Antoine, an aspiring young rapper from the suburbs of Paris, meets Mrs. Loiseau, an eminent teacher at the Paris Opéra. Stunned by the young man's raw talent, she introduces him to the world of opera. As Antoine becomes one of Mrs. Loiseau's students, he hides his new dream from his friends and family, fearing that they won’t understand – this double life burdens him... Somewhere in between the gilded and uptight Parisian upper-class, and the harsh yet free-spirited and familiar suburbs he grew up in, Antoine will have to find his own voice.",
            "tweets": [
                {
                    "id": 1601251541364912000,
                    "text": "RT @MATCHAJUNKYU: Keinginan punya rumah di masa muda bisa jadi kenyataan dengan Mandiri KPR HEBAT.\n\nDapatkan benefit bebas angsuran pokok u…"
                },
                {
                    "id": 1601251511363080200,
                    "text": "@MATCHAJUNKYU Tenor sampai 25 tahun? Dah gt 2 tahun pertama bebas angsuran?! Duh Bismillah ah Senin ke Bank Mandiri… https://t.co/uQiGGoCELY"
                },
                {
                    "id": 1601251372208312300,
                    "text": "Tomorrow live at Fini's Landing, 5689 N Swan Rd, Tucson AZ. Mr. Boogie Woogie &amp; The Weed Whackers with Larry Lee Le… https://t.co/ZkBthoiKwt"
                },
                {
                    "id": 1601251245976699000,
                    "text": "Hello there! I'm a bot that attempts to generate memes from text. Here's one I made based on the linked tweet:… https://t.co/d9BqB2Jbv7"
                },
                {
                    "id": 1601251127315480600,
                    "text": "@Javayala94 @ChequeGasca17 Como sería algo anecdótico algo de este tenor ?"
                },
                {
                    "id": 1601251026312450000,
                    "text": "Bagay vagabondaj nèt pa se Vini li retire 🤣 https://t.co/JkMY710I06"
                },
                {
                    "id": 1601250908699996200,
                    "text": "Congratulations to #BritneyGriner\n#LordOfWar2\n\nhttps://t.co/K4m4HpIOAZ"
                },
                {
                    "id": 1601250711701856300,
                    "text": "@Tenor_HT Lol"
                },
                {
                    "id": 1601250475957190700,
                    "text": "Four/eight years tenor of any political saint can't solve it. D problem of Nigeria is #FOUNDATIONAL which was built… https://t.co/C51xgfQNyB"
                },
                {
                    "id": 1601250340300411000,
                    "text": "@silverwing1412 @FlywheelKnot Yeah, you should do a tenor list one day probably"
                },
                {
                    "id": 1601250269727449000,
                    "text": "RT @Julia_Weigelt: Ich habe mit Soldat:innen über die neue Social-Media-Anweisung gesprochen (kein dienstl. Equipment nutzen). Deren Tenor:…"
                },
                {
                    "id": 1601250173987868700,
                    "text": "Harmonica's handled by Don Bailey, and other players include Joe Sample on keyboards, Herman Riley on tenor, Freddi… https://t.co/7TsCfqwZzs"
                },
                {
                    "id": 1601249973051367400,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601249908110938000,
                    "text": "RT @armesillaconde: A tenor de lo ocurrido en #Perú con @PedroCastilloTe, he participado en un debate organizado por la @unitruoficial fren…"
                },
                {
                    "id": 1601249798228934700,
                    "text": "@BroMilito @0x_Shinobi @DecentralGames Join TRIBE fam, you gonna love all our gifs: https://t.co/gOSdQoMGY2"
                },
                {
                    "id": 1601249329188307000,
                    "text": "RT @wjbdawes: The group has started the recruitment process, so if you’re a baritone with the ability to sing some tenor parts as well, do…"
                },
                {
                    "id": 1601248955538747400,
                    "text": "Radòtè a retire Raphinha li monte Anthony epi Rodrygo sou ban.🤣"
                },
                {
                    "id": 1601248931824177200,
                    "text": "dicicil geb kalo banyak. tinggal pilih mau tenor yg brp bulan 🙏🏻\n\nbtw ngana sudah sampai dirumah kahh dekkk? atau m… https://t.co/6MrgatS579"
                },
                {
                    "id": 1601248926585479200,
                    "text": "j'adore le \"aimez vous les uns les autres sauf ...\"\n\nhttps://t.co/PFpJmgikYI"
                },
                {
                    "id": 1601248858142519300,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601248465325265000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601248359649464300,
                    "text": "@AristeguiOnline O sea el típico “no es falso, pero exageran”: Rocío Nahle, en su comparecencia. Y en ese tenor de… https://t.co/3NvZHDwo0G"
                },
                {
                    "id": 1601248086658932700,
                    "text": "RT @armesillaconde: A tenor de lo ocurrido en #Perú con @PedroCastilloTe, he participado en un debate organizado por la @unitruoficial fren…"
                },
                {
                    "id": 1601248081026044000,
                    "text": "@sayitnspinit I agree, women don't have an Adams apple in their throat like it does. The voice is deep tenor. It ha… https://t.co/LRo8lWzqzg"
                },
                {
                    "id": 1601248076684923000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601248076454580200,
                    "text": "@charliekirk11 You mean THIS tucker?\n\nJust read U.S. District Judge Mary Kay:\nThe \"'general tenor' of the show shou… https://t.co/tulm8hqxWH"
                },
                {
                    "id": 1601248041951821800,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601247993373814800,
                    "text": "RT @MATCHAJUNKYU: Keinginan punya rumah di masa muda bisa jadi kenyataan dengan Mandiri KPR HEBAT.\n\nDapatkan benefit bebas angsuran pokok u…"
                },
                {
                    "id": 1601247985866014700,
                    "text": "RT @armesillaconde: A tenor de lo ocurrido en #Perú con @PedroCastilloTe, he participado en un debate organizado por la @unitruoficial fren…"
                },
                {
                    "id": 1601247927854575600,
                    "text": "@majanovelist @nickabbott @PennyMordaunt @GreaterTheBook @TheHive_Project @CircularIT @portsmouthnews… https://t.co/386zqnj0MA"
                },
                {
                    "id": 1601247847974047700,
                    "text": "RT @FrapapaOfficial: @Charles_tenor @TheFtXMaestro Kindly click on the link to see how you can use your free bet.\nhttps://t.co/WbM35qcHor"
                },
                {
                    "id": 1601247625692741600,
                    "text": "RT @AmigosOperaCoru: Con imágenes y sonidos excepcionales seguimos recordando el concierto fin de temporada de @AmigosOperaCoru con la actu…"
                },
                {
                    "id": 1601247484738535400,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601247032726851600,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601246965949665300,
                    "text": "RT @UPROXX: 🔥 #LESSERAFIM (@le_sserafim) - 'FEARLESS'\n\n'FEARLESS' serves as a sonic introduction to LE SSERAFIM’s sophisticated pop tones &amp;…"
                },
                {
                    "id": 1601246728946356200,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601246625867104300,
                    "text": "RT @MATCHAJUNKYU: Keinginan punya rumah di masa muda bisa jadi kenyataan dengan Mandiri KPR HEBAT.\n\nDapatkan benefit bebas angsuran pokok u…"
                },
                {
                    "id": 1601246381381161000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601245948805423000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601245927171588000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601245711383003100,
                    "text": "okay but think about nj walking into the interrogation room and jk's determined glare faltering as nj doesn't stop… https://t.co/PJlXHD67Ge"
                },
                {
                    "id": 1601245707922456600,
                    "text": "Meet one of our soloists for Messiah next week, Tenor Benjamin Butterfield🎵 He will be featured on CBC Music/Radio… https://t.co/czEZNU41e4"
                },
                {
                    "id": 1601245655565205500,
                    "text": "RT @HarrisBrad03: @TENOR_officiel:&lt;&lt; Tu prendras ton pieds avec mes doigts car je sais trop bien le faire&gt;&gt;\nGénie 😭🇨🇲"
                },
                {
                    "id": 1601245550636064800,
                    "text": "Foto Friday!\n\n2019, Philadelphia\nGig at Chris' Jazz Cafe - with Jesse Crawford-bass, Bill McClellan-drums and Denni… https://t.co/qocHvFQQS7"
                },
                {
                    "id": 1601245544869159000,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                },
                {
                    "id": 1601245400484434000,
                    "text": "RT @Julia_Weigelt: Ich habe mit Soldat:innen über die neue Social-Media-Anweisung gesprochen (kein dienstl. Equipment nutzen). Deren Tenor:…"
                },
                {
                    "id": 1601245312890601500,
                    "text": "RT @Julia_Weigelt: Ich habe mit Soldat:innen über die neue Social-Media-Anweisung gesprochen (kein dienstl. Equipment nutzen). Deren Tenor:…"
                },
                {
                    "id": 1601245265431736300,
                    "text": "Should I thrift today or tomorrow?"
                },
                {
                    "id": 1601245219751866400,
                    "text": "@Agenda2030_ Y no olvidemos al peligroso tenor y sus 24 compinches ultraderechistas y antivacunas que preparaban un… https://t.co/ywc49zJTl2"
                },
                {
                    "id": 1601245203486363600,
                    "text": "RT @SweetMartabak_: Sahabat, ajuin proses kredit kendaraan bermotor sekarang &amp; wujudin wishlist-mu di akhir tahun ini! Dapetin suku bunga 4…"
                }
            ]
        },
        {
            "id": 517302,
            "original_title": "Pahanhautoja",
            "overview": "12 year old Tinja is desperate to please her mother, a woman obsessed with presenting the image of a perfect family. One night, Tinja finds a strange egg. What hatches is beyond belief.",
            "tweets": [
                {
                    "id": 1600807611074584600,
                    "text": "RT @DESTINOARRAKIS: Un oscuro cuento de terror finlandés es EGO, las relaciones madre e hija pueden crear monstruos. Después de pasar por @…"
                },
                {
                    "id": 1600790709157568500,
                    "text": "RT @DESTINOARRAKIS: Un oscuro cuento de terror finlandés es EGO, las relaciones madre e hija pueden crear monstruos. Después de pasar por @…"
                },
                {
                    "id": 1600773664655302700,
                    "text": "Un oscuro cuento de terror finlandés es EGO, las relaciones madre e hija pueden crear monstruos. Después de pasar p… https://t.co/UWkJhyIL0j"
                },
                {
                    "id": 1600772705418203100,
                    "text": "Ego (2022. Pahanhautoja. Hatching. Hanna Bergholm) Festival de cine de Sitges 2022 https://t.co/geukDCbtPZ"
                },
                {
                    "id": 1600476469339136000,
                    "text": "@no1_albinoi Модные постмодернистские хорроры) (ну, ты знаешь мои вкусы)\nФильмы Джордана Пила (ругаю, но люблю), не… https://t.co/IfAc93TOML"
                },
                {
                    "id": 1600362087548539000,
                    "text": "137. Hatching /Pahanhautoja\n2022\n🇫🇮\nDir. #HannaBergholm\nUn cuento oscuro más fantástico q terrorífico aunque tiene… https://t.co/ayC3bQjZkI"
                },
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
                }
            ]
        },
        {
            "id": 16859,
            "original_title": "魔女の宅急便",
            "overview": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
            "tweets": [
                {
                    "id": 1601251793589371000,
                    "text": "🍺(:3_ヽ)_ﾊﾞﾀ…   🐗ﾌﾟﾋﾟｰ！ﾌﾟﾋﾟ-！\n\n魔女の宅急便現象…\n\nおやすみ"
                },
                {
                    "id": 1601247296611504000,
                    "text": "「私こんな町に住みたかったの」（キキ/魔女の宅急便より）"
                },
                {
                    "id": 1601246262480683000,
                    "text": "ライブ配信中9\n\n00:48~\n「コタツは寝落ちの敵です」\n\n00:51~\n「めちゃモテ奏者の演奏聴けるよ🎷」\n\n00:56~\n「海の見える街🎷魔女の宅急便」\n\n#ポコチャ x 音楽好きの枠\nhttps://t.co/WthmW3v9po"
                },
                {
                    "id": 1601246102585364500,
                    "text": "魔女の宅急便  DVD 120\n\nおすすめ\nhttps://t.co/D8iiHMqd7i"
                },
                {
                    "id": 1601240101199044600,
                    "text": "moz好きすぎてスウェーデンに興味が出てきた……一人旅にもおすすめの治安と書いてある……行きてえ……魔女の宅急便のモデルなのか……"
                },
                {
                    "id": 1601237918428778500,
                    "text": "「宅急便」という言葉は元々ヤマト運輸の登録商標。「魔女の宅急便」の作者はどうしてもこれが使いたくてヤマト運輸に使用許可をとりにいった時、相手が条件として出したのが「作品中に黒猫を出すこと」そうして生まれたのがジジらしい。"
                },
                {
                    "id": 1601235558638182400,
                    "text": "@younikutabetai @shishido_riho @MOODYZ_official @countsheep_ 魔女の宅急便買ったよ。"
                },
                {
                    "id": 1601234401085788200,
                    "text": "RT @Z4fcR: 今回のアンケートに投票してくれた方々ありがとうございました☺️✨今日は魔女の宅急便のキキ風ピンプクちゃんを描きました😊🌸今回も楽しく描くことができて満足です😌✨ありがとうございました！\n＃ポケモン　#イラスト https://t.co/l0SAnJqVMX"
                },
                {
                    "id": 1601233080391442400,
                    "text": "Amazonのキッズ・ファミリーから\n気になるアイテムは「コレ」だ👍\n\nアマゾンのセールスランク 12 位！\n\n魔女の宅急便 [DVD]\n\nhttps://t.co/GPv9l3qfHn"
                },
                {
                    "id": 1601232393905799200,
                    "text": "10代女子の好きなジブリ映画ランキング\n\n●第1位／となりのトトロ\n○第2位／千と千尋の神隠し\n●第3位／魔女の宅急便\n○第4位／ハウルの動く城\n●第5位／耳をすませば https://t.co/lmp49Ajl5A"
                },
                {
                    "id": 1601231223694631000,
                    "text": "宅配便と宅急便の違いは？　宅配便とは小口貨物輸送の略称で、宅急便はヤマト運輸の登録商標なのである★したがって、他の会社の宅配サービスは宅急便とは呼べない★ちなみに、映画「魔女の宅急便」のスポンサーはヤマト運輸である★気に入ったらリツイート！"
                },
                {
                    "id": 1601230673628790800,
                    "text": "前は何も考えなくても、飛べたの\n出典\nキキ(魔女の宅急便)"
                },
                {
                    "id": 1601228960083611600,
                    "text": "ドゥブロヴニク(クロアチア)\n予算¥110000〜\n魔女の宅急便や紅の豚の\nモデルになったとも言われる\nクロアチアの街。\nその旧市街は世界遺産にも\n認定されている。 https://t.co/sOkIJE2z6S"
                },
                {
                    "id": 1601228485950722000,
                    "text": "魔女の宅急便 [DVD]\n\n【12/09 23:53】\nhttps://t.co/HXdrKJGPh9"
                },
                {
                    "id": 1601227227487604700,
                    "text": "魔女の宅急便  DVD 561\n\nおすすめ\nhttps://t.co/D8iiHMqd7i"
                },
                {
                    "id": 1601226768299753500,
                    "text": "魔女の宅急便の舞台である美しい街並みを持つクロアチア\nブラジルには絶対に負けられない"
                },
                {
                    "id": 1601225589083381800,
                    "text": "学校でルージュの伝号が流れてて，魔女の宅急便かと思ったら友達が、\n「すずめの戸締まりじゃん！」\nとか言っててびっくりした"
                },
                {
                    "id": 1601225259868643300,
                    "text": "RT @arigappa: 「となりのトトロ」や「魔女の宅急便」「おもひでぽろぽろ」の名プロデューサー原徹さんが去年の12/14に亡くなられていたのを、今知りました。原さんの面接でジブリへ入れました。他の方だったら、どうだったか……。ありがとうございました。御冥福をお祈りします…"
                },
                {
                    "id": 1601224500548624400,
                    "text": "@pompom_purino 魔女の宅急便、千と千尋の神隠しときて崖の上のポニョとつないでくるポムのちゃん好き🥰🥰\nもう雑コラの域を超えてて感動です🫣🫶\n\nマイペースな の称号はそのままにしておいてもらって…🤭ランク更新はまた急に… https://t.co/EjHIDbkJ9L"
                },
                {
                    "id": 1601223310939156500,
                    "text": "前は何も考えなくても、飛べたの(魔女の宅急便)"
                },
                {
                    "id": 1601223135025451000,
                    "text": "魔女の宅急便★ キキのラテアート♪ 可愛くて飲むのもったいない♪https://t.co/YHxyqcK4mE　　ＲＴしてジブリ好きのお友達とシェアしてね♪"
                },
                {
                    "id": 1601222953915814000,
                    "text": "¥ 1,075:「魔女の宅急便 ジェットストリーム4&amp;1 0.38/夜空」\n\nhttps://t.co/mkEORnanPb"
                },
                {
                    "id": 1601222948991697000,
                    "text": "魔女の宅急便  DVD 804\n\nおすすめ\nhttps://t.co/D8iiHM9a5i"
                },
                {
                    "id": 1601220416038908000,
                    "text": "【漫画・アニメ名言】前は何も考えなくても、飛べたの　キキ　～魔女の宅急便～"
                },
                {
                    "id": 1601220204213653500,
                    "text": "1992年　紅の豚  監督は宮崎駿。前作の『魔女の宅急便』に続いて劇場用アニメ映画の興行成績日本記録を更新した。"
                },
                {
                    "id": 1601218213442113500,
                    "text": "ただい魔女の宅急便(2017/12/13)"
                },
                {
                    "id": 1601218056243773400,
                    "text": "@kotositatta どら焼きとかたい焼きとか最高ね！(*´﹃｀*)\n海も綺麗ですし、魔女の宅急便のロケ地にちなんで写真撮影用にホウキ貸し出ししてたり、いろいろ楽しめそう！\n写真見た限りでは単品でそのままﾃﾞﾝ！と置いてる感じ… https://t.co/hEFXInUos5"
                },
                {
                    "id": 1601217562901028900,
                    "text": "描くのをやめる。 散歩をしたり、景色をみたり、昼寝をしたり。 何もしない。 そのうち急に描きたくなるんだよ。 【魔女の宅急便】 https://t.co/70dtP9hUvi"
                },
                {
                    "id": 1601217466113589200,
                    "text": "I'm sure Kiki will want to know the lady's birthday so she'll be able to give her a present.その子もおば様の誕生日を知りたがるわ、プレゼントを考える楽しみができるから（キキ/魔女の宅急便）"
                },
                {
                    "id": 1601217405531095000,
                    "text": "RT @315___4n_220227: 【好きなアニメ（マンガ）キャラ】\n\n真宙→ゾロ（ワンピース）\n港人→ 空条承太郎（ジョジョ）\nグノ→あんま見ない…（ジブリは好き）（魔女の宅急便のキキが飾ってあるらしい）（でも1番好きなのはナルトらしい）（ヨンフンと話したらやばそうww…"
                },
                {
                    "id": 1601216328891003000,
                    "text": "「耳をすませば」の劇中では、「魔女の宅急便」で協賛していたヤマト運輸の営業車が走っている。"
                },
                {
                    "id": 1601215799943102500,
                    "text": "That's not fair!　/いじわる！（キキ/魔女の宅急便）"
                },
                {
                    "id": 1601215514704912400,
                    "text": "RT @Sanshi1989: 生年映画ベスト　107本鑑賞\n1ストリートオブノーリターン\n2春のソナタ\n3ショッカー\n4セントラルパーク\n5動くな死ね甦れ\n6ミステリートレイン\n7血\n8白い婚礼\n9レニングラードカウボーイズ〜\n10ロックアップ\n次)バックトラック、その男凶暴…"
                },
                {
                    "id": 1601215506224406500,
                    "text": "魔女の宅急便、劇場公開時のパンフレットとポスターが復刻してたので即購入。インクまで当時の再現とのことで…✨　このポスターは学生の頃から欲しかったポスターなので復刻してくれたジブリさんには感謝してもし切れない🥺🥺🥺… https://t.co/DtMoNmNGTB"
                },
                {
                    "id": 1601215303580790800,
                    "text": "魔女の宅急便見たいな\nずっと昔から好きだけど見る年齢が変わるごとに感じ方変わるんだよね…\n初めて一人暮らししたときに見た衝撃はずこかったなぁ\nDVDあっるかなぁ～"
                },
                {
                    "id": 1601215056049422300,
                    "text": "RT @teammachinegun: #ホスミュ \n今日のミシェル日替わり\nミシェル「(またがって)わたしは今日から魔法使い～🎶アブラカタブラ～」\n光「魔女になっちゃったよ！」\n馨「猫澤先輩ー！あなたの大好物ですよー！」\n光「宅急便でも運んでもらおうか！」\n光笑い我慢しつつセ…"
                },
                {
                    "id": 1601214956929634300,
                    "text": "RT @tyomateee: 魔女の宅急便見るとこれ思い出すw\n https://t.co/xQxrcJmgVl"
                },
                {
                    "id": 1601214935865827300,
                    "text": "娘が、Z会の国語の問題にあった話の続きを読みたい！\nと本をねだってきた。\n\n調べてみると、新刊ではもう手に入らないマイナー本。\n著者は『魔女の宅急便』の角野栄子氏。\nZ会がなければ知る由もなかった良本。\n\n選書の仕方に悩んでいたけ… https://t.co/ADsZYmavzY"
                },
                {
                    "id": 1601213230642176000,
                    "text": "RT @teammachinegun: #ホスミュ \n今日のミシェル日替わり\nミシェル「(またがって)わたしは今日から魔法使い～🎶アブラカタブラ～」\n光「魔女になっちゃったよ！」\n馨「猫澤先輩ー！あなたの大好物ですよー！」\n光「宅急便でも運んでもらおうか！」\n光笑い我慢しつつセ…"
                },
                {
                    "id": 1601212655792173000,
                    "text": "1989年　魔女の宅急便  宮崎が監督を務めたスタジオジブリの長編映画としては初の、他者の原作による作品であり、宮崎が『ハウルの動く城』の監督に就くまで15年間にわたって唯一の作品であった。"
                },
                {
                    "id": 1601212184474030000,
                    "text": "魔女の宅急便をBGMに鹿🎂ケーキを箸で食いはじめるViViオンニ可愛すぎるのだが！！！！"
                },
                {
                    "id": 1601211846077255700,
                    "text": "【ざっきー/Cl】\n「黒魔女の宅急便」"
                },
                {
                    "id": 1601210023543128000,
                    "text": "#ホスミュ \n今日のミシェル日替わり\nミシェル「(またがって)わたしは今日から魔法使い～🎶アブラカタブラ～」\n光「魔女になっちゃったよ！」\n馨「猫澤先輩ー！あなたの大好物ですよー！」\n光「宅急便でも運んでもらおうか！」\n光笑い我慢… https://t.co/u8i0xK8MIV"
                },
                {
                    "id": 1601209926864752600,
                    "text": "私は実際に「魔女の宅急便」の舞台となっている場所には行ったことがないけど、小芝さんはそれをちゃんと見て演じているからこその出せる空気感ていうのがたくさんあって、そこに引っ張ってってもらうことがたくさんありましたので"
                },
                {
                    "id": 1601209256078086100,
                    "text": "私もよく掃除の時、ほうきにまたがって魔女の宅急便ごっこするから通じるもの感じた^^"
                },
                {
                    "id": 1601208602165117000,
                    "text": "@purinmuchauma ナウシカとかラピュタとか魔女の宅急便あたりですかね😌千と千尋は映画館で見ました✨\n\n猫の恩返しは耳をすませばのバロンが出てくるのですよね🍀それはすごく気になってます😊今度見れそうな機会があったら観てみ… https://t.co/fdlFtlggeU"
                },
                {
                    "id": 1601206814275928000,
                    "text": "@Mashoxe キャラ 魔女の宅急便のキキ\n名前 Kurea"
                },
                {
                    "id": 1601205988979531800,
                    "text": "RT @mii_tomboy: 《魔女の宅急便*cos》キキ\n\nphoto* @19_tempest \n#星の王子さまミュージアム\n#麗yers\n※特別な許可を得て撮影しています https://t.co/RmW5enfTc6"
                },
                {
                    "id": 1601205975654224000,
                    "text": "RT @mii_tomboy: 《魔女の宅急便*cos》キキ\n\n　　　「仕事はじめ」\n\nphoto* @19_tempest \n#星の王子さまミュージアム\n#麗yers\n※特別な許可を得て撮影しています https://t.co/E1CZETeFRj"
                },
                {
                    "id": 1601205839695528000,
                    "text": "魔女の宅急便  DVD 507\n\nおすすめ\nhttps://t.co/D8iiHMqd7i"
                }
            ]
        },
        {
            "id": 396194,
            "original_title": "Ennio",
            "overview": "Well-rounded portrait of Ennio Morricone, the most popular and prolific film composer of the 20th century, the one most loved by the international public, a two-time Oscar winner and the author of over five hundred unforgettable scores.",
            "tweets": [
                {
                    "id": 1601250794183221200,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601250636409884700,
                    "text": "@DIAVOLE13994496 Ennio Morricone❤️"
                },
                {
                    "id": 1601249739332542500,
                    "text": "Ya me jodería ser tan cretino como para ir a poner semejante hez de respuesta a una persona que esta diciendo que a… https://t.co/knqy8f9EjU"
                },
                {
                    "id": 1601249657942073300,
                    "text": "@thisisthekit @ROZIPLAIN @ViaductPromo @Snoopy 🖇️ https://t.co/GwtIp7vvic\n\n𝗛𝗪𝗬-𝟬𝟰𝟳 ‘Surviving Christmas' by Jherek… https://t.co/ZqwKZoAvWK"
                },
                {
                    "id": 1601248310916153300,
                    "text": "Curious about this guest production running here at Club Fugazi in January? What exactly is a quick-change lip-sync… https://t.co/eLZxyCquq7"
                },
                {
                    "id": 1601247383966269400,
                    "text": "@libe @nicolasmassol1 \"Ce propos racialiste, inédit dans la bouche de Zemmour\" ?!? 🤔 Vous tombez des nues, ou quoi ?"
                },
                {
                    "id": 1601246989844635600,
                    "text": "RT @Lubilder: Vamos a ver que tal...Nestor Almendros, Ennio Morricone y Terrence Malick...que puede salir mal?? https://t.co/Hc1CbS8Bww"
                },
                {
                    "id": 1601246884609544200,
                    "text": "RT @tizianacampodon: \"Viviamo in un'epoca in cui la dichiarazione dei redditi sostituisce i rimorsi.\"\nEnnio #Flaiano, Diario notturno, 1956…"
                },
                {
                    "id": 1601246794716807200,
                    "text": "@JYGproductions Man cj lit check the stats even tho he had a great maybe the greatest WRs core ever and ennio yapoo… https://t.co/TjaVycJobh"
                },
                {
                    "id": 1601246784189526000,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601246658083397600,
                    "text": "Filmpremiere \"Ennio Morricone – Il Maestro\":  https://t.co/qvZWEao4jx"
                },
                {
                    "id": 1601245899476283400,
                    "text": "RT @vergaratampe: 2. “Ennio, el Maestro” (Giuseppe Tornatore, 2021). Documental sobre Ennio Morricone, uno de los genios más importantes de…"
                },
                {
                    "id": 1601245679871197200,
                    "text": "RT @Anikigo1: Por aquí os dejo esta maravilla de BSO de Ennio Morricone 🤩🤩 https://t.co/S4291xVEyV"
                },
                {
                    "id": 1601245344507269000,
                    "text": "@RubensOtoni Mandou muito bem! #TMJ👊💯"
                },
                {
                    "id": 1601245270918180900,
                    "text": "@DuquesaDetax Acho que 1 x 0 Brasil 🇧🇷 no 2° tempo tá de bom tamanho."
                },
                {
                    "id": 1601245261959155700,
                    "text": "RT @Lubilder: Vamos a ver que tal...Nestor Almendros, Ennio Morricone y Terrence Malick...que puede salir mal?? https://t.co/Hc1CbS8Bww"
                },
                {
                    "id": 1601245033088548900,
                    "text": "RT @Anikigo1: Por aquí os dejo esta maravilla de BSO de Ennio Morricone 🤩🤩 https://t.co/S4291xVEyV"
                },
                {
                    "id": 1601244691009515500,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601243952312504300,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601243087711314000,
                    "text": "RT @Lubilder: Vamos a ver que tal...Nestor Almendros, Ennio Morricone y Terrence Malick...que puede salir mal?? https://t.co/Hc1CbS8Bww"
                },
                {
                    "id": 1601243038596354000,
                    "text": "C d criminels Dolce Gabbana d'utiliser la sublime musique d'Ennio Morricone tiré du film \"le bon la brute et le tru… https://t.co/rz9rqn4FBy"
                },
                {
                    "id": 1601241823740973000,
                    "text": "@keita21968 Lo que se perdió el Ennio Morricone"
                },
                {
                    "id": 1601241696766816300,
                    "text": "@DIAVOLE13994496 Ennio Morricone, il Maestro"
                },
                {
                    "id": 1601241386564452400,
                    "text": "Thanks Ennio Morricone for spending 1,434 minutes with me in 2022. I couldn’t stop listening to Nuovo Cinema Paradi… https://t.co/McVxoq2ugP"
                },
                {
                    "id": 1601240369739444200,
                    "text": "RT @Lubilder: Vamos a ver que tal...Nestor Almendros, Ennio Morricone y Terrence Malick...que puede salir mal?? https://t.co/Hc1CbS8Bww"
                },
                {
                    "id": 1601239880952033300,
                    "text": "@Fernand93582708 @ctavaut @marcelazadoff Y ya que Ennio Inocenti le resulta serio, le recuerdo que en su \"Conversió… https://t.co/6P2YiM0Hlk"
                },
                {
                    "id": 1601239009204007000,
                    "text": "@DiariodeSion @Anikigo1 Lo que está sobrevalorado es la tarifa de la madre que puso en el mundo a contaminar el air… https://t.co/5i67eJzBTM"
                },
                {
                    "id": 1601238409250762800,
                    "text": "RT @Pizza_Yeti: Yall need to check out A Tale of Two Lions by @/Anoriand. I know like 2 things about Final Fantasy games and still have a p…"
                },
                {
                    "id": 1601238253512061000,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601238211153784800,
                    "text": "@juanma3010 Personalmente, la música de Ennio Morriconne me parece de las mas evocadoras de la historia del cine. A… https://t.co/C7fGw3zQP0"
                },
                {
                    "id": 1601236548615344000,
                    "text": "09.12. 16:22 Uhr: Ennio \"Wand\""
                },
                {
                    "id": 1601236453979455500,
                    "text": "RT @RosarioSgroia: @alesallusti Se il sedere dei potenti fosse di carta vetrata, gran parte dei giornalisti italiani sarebbero senza lingua…"
                },
                {
                    "id": 1601235809310367700,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601234567641596000,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601234560003575800,
                    "text": "Ennio Morricone - Love Theme for Nata (From Cinema paradiso) -- https://t.co/efNDD2lURA  Good Listening"
                },
                {
                    "id": 1601233592486695000,
                    "text": "09.12. 16:13 Uhr: Ennio \"Drachenfrucht\""
                },
                {
                    "id": 1601233420277153800,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601231928253812700,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601231869906911200,
                    "text": "Per Qualche Dollaro In Più by Ennio Morricone"
                },
                {
                    "id": 1601231623575376000,
                    "text": "@Anikigo1 Ennio sobrevalorado🤣😂🤣... Cómo chiste... que flipas, para el resto... un alarde mayúsculo...así, con luce… https://t.co/wXS2xqKZdx"
                },
                {
                    "id": 1601230415477756000,
                    "text": "@angeli_ennio @RestoFerma (Per i credenti) anche nostro Signore ci ha lasciato il libero arbitrio nella scelta, bas… https://t.co/7ec9gW3fGm"
                },
                {
                    "id": 1601230272254840800,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601230009632321500,
                    "text": "@LabradorYuki Ennio Morricone - Once upon a time in the West. 😁https://t.co/TeFQzAEHPj"
                },
                {
                    "id": 1601229960697753600,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601229884822519800,
                    "text": "Continua la sfilata delle grandi star del pianoforte con il ritorno di Mikhail Pletnev, vincitore nel 1978 del cele… https://t.co/gZZ6KHCkgt"
                },
                {
                    "id": 1601229129978110000,
                    "text": "nowplaying: \"The Ecstasy Of Gold\" by Ennio Morricone"
                },
                {
                    "id": 1601228987464052700,
                    "text": "@ennio_gnecco @relatandohisto1 Roma tendrá mucha historia pero bonita tampoco me pareció, si es la más bonita de eu… https://t.co/OvDHbhkmwj"
                },
                {
                    "id": 1601227874811670500,
                    "text": "@raul_olaechea Terruco RCTV, ¿cómo te atreves a arruinar uno de mis soundtracks favoritos con terrucos, cojudignos… https://t.co/g22SEdarKq"
                },
                {
                    "id": 1601227868838580200,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                },
                {
                    "id": 1601227454122639400,
                    "text": "RT @juanma3010: Buenos días y feliz viernes!!\nMuchas gracias a todos por votar por vuestra banda sonora favorita de Ennio Morricone. \nAyer…"
                }
            ]
        },
        {
            "id": 882206,
            "original_title": "L.O.L. Surprise! The Movie",
            "overview": "Dazzling doll sisters Queen Bee and Royal Bee make their first movie with help from their fashionable friends in this one-of-a-kind magical adventure.",
            "tweets": [
                {
                    "id": 1599740172987687000,
                    "text": "https://t.co/20p4A0OdRN"
                }
            ]
        },
        {
            "id": 790867,
            "original_title": "The Eternal Daughter",
            "overview": "An artist and her elderly mother confront long-buried secrets when they return to a former family home, now a hotel haunted by its mysterious past.",
            "tweets": [
                {
                    "id": 1601251441183961000,
                    "text": "RT @ColorsofDarkPod: Ep 49 from @FANGORIA We discuss new films EARWIG, NOCEBO, HOUSE OF DARKNESS, THE LEECH, THE ETERNAL DAUGHTER &amp; BLOOD R…"
                },
                {
                    "id": 1601250646736322600,
                    "text": "https://t.co/m4qlzUQsod"
                },
                {
                    "id": 1601250364358918100,
                    "text": "RT @P0pH3r3t1c: Further proof that everything Soulsborne lives rent-free in my head: the *first* thing that came to mind when I saw The Ete…"
                },
                {
                    "id": 1601250209237205000,
                    "text": "RT @dochilove2: 뉴욕타임즈 선정 '2022년 최고의 영화'\n1위 EO (예지 스콜리모프스키)\n2위 쁘띠마망 (셀린 시아마)\n3위 놉 (조던 필)\n4위 No Bears(자파르 파나히)\n5위 KIMI (스티븐 소더버그)\n6위  The Ete…"
                },
                {
                    "id": 1601249114099851300,
                    "text": "RT @ColorsofDarkPod: Ep 49 from @FANGORIA We discuss new films EARWIG, NOCEBO, HOUSE OF DARKNESS, THE LEECH, THE ETERNAL DAUGHTER &amp; BLOOD R…"
                },
                {
                    "id": 1601248926929420300,
                    "text": "Ep 49 from @FANGORIA We discuss new films EARWIG, NOCEBO, HOUSE OF DARKNESS, THE LEECH, THE ETERNAL DAUGHTER &amp; BLOO… https://t.co/R6pVDLlS70"
                },
                {
                    "id": 1601248773358747600,
                    "text": "An extra little push on some recent pieces 🕸️\n\nAn interview with Joanna Hogg and Stéphane Collonge on THE ETERNAL D… https://t.co/P9SnJAZqt4"
                },
                {
                    "id": 1601248501777956900,
                    "text": "RT @ElementPictures: Absolutely thrilled to see The Eternal Daughter &amp; The Wonder make the @NBRfilm's Top Independent Films of 2022! Sendin…"
                },
                {
                    "id": 1601247683120812000,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601247345169105000,
                    "text": "‘The Eternal Daughter’ Review: Two Glorious Sides of Tilda Swinton https://t.co/kCo8lIe9l0"
                },
                {
                    "id": 1601246638772977700,
                    "text": "RT @ElementPictures: Absolutely thrilled to see The Eternal Daughter &amp; The Wonder make the @NBRfilm's Top Independent Films of 2022! Sendin…"
                },
                {
                    "id": 1601246417640513500,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601244260619391000,
                    "text": "Absolutely thrilled to see The Eternal Daughter &amp; The Wonder make the @NBRfilm's Top Independent Films of 2022! Sen… https://t.co/TDbcTE2DeX"
                },
                {
                    "id": 1601244255556890600,
                    "text": "What's on today at #MVFILMCENTER?\n\n4:00 PM -- THE BANSHEES OF INISHERIN -- \n(OUR LAST SHOWING)\n\n7:30 PM -- THE ETER… https://t.co/eBMjDooK4H"
                },
                {
                    "id": 1601244239404609500,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601243029737975800,
                    "text": "@RufusTSuperfly So good. I love the process details from them both. I wasn't wild about The Souvenir but reading th… https://t.co/m3xpamZ5oT"
                },
                {
                    "id": 1601239699863277600,
                    "text": "New - Joanna Hogg's THE ETERNAL DAUGHTER, Sam Mendes' EMPIRE OF LIGHT, Michael Showalter's SPOILER ALERT, doc 752 I… https://t.co/bOGStxuNeB"
                },
                {
                    "id": 1601237483181572000,
                    "text": "Joanna Hogg nos regala otra obra personal, ahora con tintes góticos y una doble actuación de Tilda Swinton en THE E… https://t.co/xRV4rHaJlk"
                },
                {
                    "id": 1601235762716246000,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601235503726010400,
                    "text": "RT @bealoayza: Wrote about The Eternal Daughter and ghosts (once again!) for @FilmComment. Not minor Hogg in the least - genre trappings ca…"
                },
                {
                    "id": 1601232327333793800,
                    "text": "RT @A24: “An astonishing tour de force for Swinton’s art and for Hogg’s writing and direction” @NewYorker \n\nTHE ETERNAL DAUGHTER, a mesmeri…"
                },
                {
                    "id": 1601231997283995600,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601230441356337200,
                    "text": "NOW PLAYING\n\nALL THE BEAUTY AND THE BLOODSHED\nBLACK PANTHER: WAKANDA FOREVER\nNANNY\nSHE SAID\nSPOILER ALERT\nSTRANGE W… https://t.co/zuXQrKB4wB"
                },
                {
                    "id": 1601230187496374300,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601227865466761200,
                    "text": "RT @bealoayza: Wrote about The Eternal Daughter and ghosts (once again!) for @FilmComment. Not minor Hogg in the least - genre trappings ca…"
                },
                {
                    "id": 1601227540747559000,
                    "text": "RT @bealoayza: Wrote about The Eternal Daughter and ghosts (once again!) for @FilmComment. Not minor Hogg in the least - genre trappings ca…"
                },
                {
                    "id": 1601227017692672000,
                    "text": "RT @bealoayza: Wrote about The Eternal Daughter and ghosts (once again!) for @FilmComment. Not minor Hogg in the least - genre trappings ca…"
                },
                {
                    "id": 1601226919798014000,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601226617744810000,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601226572186669000,
                    "text": "RT @MayadeenEnglish: In loving memory of Ella Maria, our beloved colleague's daughter who passed away recently, #AlMayadeen decorates its n…"
                },
                {
                    "id": 1601226502548623400,
                    "text": "RT @TomiLaffly: I might or might not have gotten teary eyed when Scorsese looked at me and reflected on grief through The Eternal Daughter.…"
                },
                {
                    "id": 1601226246402502700,
                    "text": "Tickets available right here: https://t.co/SgGnoaD1d2"
                },
                {
                    "id": 1601225998418456600,
                    "text": "THE ETERNAL DAUGHTER returns to @TIFF_NET tonight, with a video introduction from Joanna. It's an exquisite film, p… https://t.co/qCNyseQSlw"
                },
                {
                    "id": 1601225768314450000,
                    "text": "RT @MayadeenEnglish: In loving memory of Ella Maria, our beloved colleague's daughter who passed away recently, #AlMayadeen decorates its n…"
                },
                {
                    "id": 1601225690262954000,
                    "text": "I might or might not have gotten teary eyed when Scorsese looked at me and reflected on grief through The Eternal D… https://t.co/ljy0PpqOlc"
                },
                {
                    "id": 1601225338864173000,
                    "text": "Should I wait to watch Eternal Daughter until after I catch up with the Souvenir films?"
                },
                {
                    "id": 1601223990617702400,
                    "text": "RT @TomiLaffly: Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [deep breat…"
                },
                {
                    "id": 1601221356724838400,
                    "text": "Some personal/professional news: I interviewed THE ETERNAL DAUGHTER + SOUVENIR I/II collaborators Joanna Hogg &amp; [de… https://t.co/iDd3SGcszd"
                },
                {
                    "id": 1601218752343072800,
                    "text": "YOUR SEED AND MY SEED NEVER MIXES \nTHE CONNEXTION OF THIS BLOOD IS ETERNAL YOU CANNOT FINISH\nSUPRESSING THE DESIRE… https://t.co/BADL4Nm1IQ"
                },
                {
                    "id": 1601217893714256000,
                    "text": "What Martin Scorsese and Joanna Hogg Are Still Learning From Each Other The filmmakers, who collaborated on Hogg’s… https://t.co/nfFzJHMsNf"
                },
                {
                    "id": 1601217038403657700,
                    "text": "White Noise - She Said - The Eternal Daughter\nhttps://t.co/Whri1sojeW"
                },
                {
                    "id": 1601214646035402800,
                    "text": "Cause of Death – Obituary : In loving memory of Ella Maria, our beloved colleague's daughter who passed away recent… https://t.co/nhIiivmStt"
                },
                {
                    "id": 1601209814268317700,
                    "text": "@MarinaPurkiss @WestminsterWAG Lillybeth The Name Of Their Daughter \nRidiculousness On Another Scale \nYeah Lets Nam… https://t.co/YBWSbqCSmV"
                },
                {
                    "id": 1601209521669832700,
                    "text": "Joanna Hogg's THE ETERNAL DAUGHTER is a dreamy and deeply moving ghost story with two dynamite performances by Tild… https://t.co/2TSgpC9MpF"
                },
                {
                    "id": 1601207698863059000,
                    "text": "RT @MayadeenEnglish: In loving memory of Ella Maria, our beloved colleague's daughter who passed away recently, #AlMayadeen decorates its n…"
                },
                {
                    "id": 1601206837587869700,
                    "text": "I thought this was pretty great — though it helps to be conversant with the SOUVENIR films. Chicagoans have between… https://t.co/kXH0tLTofR"
                },
                {
                    "id": 1601204426655424500,
                    "text": "RT @MayadeenEnglish: In loving memory of Ella Maria, our beloved colleague's daughter who passed away recently, #AlMayadeen decorates its n…"
                },
                {
                    "id": 1601200273052999700,
                    "text": "RT @dochilove2: 뉴욕타임즈 선정 '2022년 최고의 영화'\n1위 EO (예지 스콜리모프스키)\n2위 쁘띠마망 (셀린 시아마)\n3위 놉 (조던 필)\n4위 No Bears(자파르 파나히)\n5위 KIMI (스티븐 소더버그)\n6위  The Ete…"
                },
                {
                    "id": 1601200201506562000,
                    "text": "RT @MayadeenEnglish: In loving memory of Ella Maria, our beloved colleague's daughter who passed away recently, #AlMayadeen decorates its n…"
                },
                {
                    "id": 1601197859806007300,
                    "text": "RT @dearmyli_: 헉 6번이 빠졌네 ..😢\n* 6. 디 이터널 도터 (The Eternal Daughter)\n\n1.예르지 스콜리모프스키\n2.셀린 시아마\n3. 조던 필\n4. 자파르 파니히\n5. 스티븐 소더버그\n6. 조안나 호그 \n7. 오드리…"
                }
            ]
        }
    ]
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

    const fetchWeather = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:3030/api/weather',
            headers: { }
        };

        axios(config)
            .then(function (response) {
                setWeather(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        fetchMovieList();
        setCurrentDisplay(0);
        fetchWeather();
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
            if (prev === allMovies.length) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    return(
        <div className={"bg-gray-300 h-screen pt-4"}>
            <div className="flex mx-8 border-2 border-gray-700 p-2">
                {weather.map(each => {
                    return(
                        <div className={"flex border-2 border-gray-700 rounded-lg mx-2"}>
                            <div className={"flex flex-col basis-1/3  border-r-2 border-gray-700"}>
                                <p className={"m-2"}>{each.time.substring(5, 7)}</p>
                                <p className={"m-2"}>{each.time.substring(8)}</p>
                            </div>
                            <p className={"m-2 basis-1/3"}>{each.temperature} F</p>
                            <p className={"m-2 basis-1/3"}>{each.condition}</p>
                        </div>
                    )
                })}
            </div>
            <div className={"w-screen flex justify-center mt-8"}>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handleLike}>Like</button>
                <div className={"w-1/3 h-2/3 border-2 border-gray-700 rounded-xl my-auto flex flex-col justify-center font-quicksand font-bold text-[20px]"}>
                    <h1 className={"mb-8 text-center"}>{tempMovie[currentDisplay].original_title}</h1>
                    <p className={"px-12"}>{tempMovie[currentDisplay].overview}</p>
                </div>
                <button className={"w-1/12 h-2/3 border-2 border-gray-700  rounded-xl my-auto mx-6 font-raleway text-[20px] font-bold hover:bg-gray-600 hover:text-white"} onClick={handlePass}>Pass</button>
            </div>
            <h1 className={"mt-16 text-center text-xl"}>What's On twitter</h1>
            <div class="overflow-y-auto h-1/3 mx-8 mt-8 border-2 border-gray-700 p-4">
                {tempMovie[currentDisplay].tweets.map(each => {
                    return <p key={each.id} className={"border-2 border-gray-700 rounded-lg m-4 px-8 py-6"}>{each.text}</p>
                })}
            </div>
        </div>
    )
}

export default Dashboard;
