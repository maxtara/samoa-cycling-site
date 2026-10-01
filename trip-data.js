// Shared trip data for the map (index.html) and activities page (activities.html).
// cat: base | stay | transport | sight | swim | cave | must
window.TRIP = {
  days: [
    {key:'sat3', date:'Sat 3 Oct', title:'Arrive Samoa', summary:'Land 05:00 at Faleolo. Taxi ~5 km to Samoa Beach Resort (early check-in). Get cash at the airport.', stay:'samoa-beach-resort'},
    {key:'sun4', date:'Sun 4 Oct', title:'Rest day', summary:'No riding (bike shop closed Sunday). Pool, beach, sleep.', stay:'samoa-beach-resort'},
    {key:'mon5', date:'Mon 5 Oct', title:'Ferry → Salelologa → Manase', ride:true, km:'~56 km', elev:'~170 m', summary:'08:00 bikes at Outdoor Samoa → 09:15 at wharf → 10:00 ferry → ~11:30 Salelologa. Ride north up the east coast.', stay:'tailua'},
    {key:'tue6', date:'Tue 6 Oct', title:'Manase → Asau', ride:true, km:'~38 km', elev:'~400 m ⚠️ hilly', summary:'Hardest day. Few villages/water west of Sasina — carry 2 L+ each.', stay:'vaimoana'},
    {key:'wed7', date:'Wed 7 Oct', title:'Asau → Falealupo (Se\'eti)', ride:true, km:'~22 km', elev:'~200 m', summary:'Short day — most time for activities. Last few km to the beach are rough.', stay:'seeti'},
    {key:'thu8', date:'Thu 8 Oct', title:'Falealupo → Satuiatua', ride:true, km:'~42 km', elev:'~300 m ⚠️', summary:'Climb back to the main road, then the rugged south-west coast.', stay:'satuiatua'},
    {key:'fri9', date:'Fri 9 Oct', title:'Satuiatua → Salelologa', ride:true, km:'~54 km', elev:'~90 m ✅ flat', summary:'Last ride. Blowholes + waterfall are the big ones.', stay:'jetover'},
    {key:'sat10', date:'Sat 10 Oct', title:'Ferry back → return bikes', summary:'At wharf 11:15 → 12:00 ferry → ~13:30 Mulifanua → bikes back to Outdoor Samoa by 16:00. Resort room from 15:00.', stay:'samoa-beach-resort'},
    {key:'sun11', date:'Sun 11 Oct', title:'Fly home', summary:'~03:00 taxi to airport. 05:00 Fiji Airways → Nadi → Canberra 12:40.'}
  ],

  stops: [
    // ===== Upolu base =====
    {id:'airport', cat:'base', day:'sat3', lat:-13.8311, lng:-172.0078, name:'Faleolo Airport', when:'Sat 3 05:00 arrive • Sun 11 05:00 depart',
     details:'Arrive 05:00 Sat 3 Oct (Qantas via Brisbane). Get WST cash here. Taxi ~5 km to the resort. Home: ~03:00 taxi Sun 11 for the 05:00 Fiji Airways flight via Nadi (lands Canberra 12:40).'},
    {id:'samoa-beach-resort', cat:'stay', day:'sat3', num:'0', lat:-13.8263, lng:-172.0287, name:'Samoa Beach Resort, Mulifanua', when:'Nights: Fri 2 (early check-in Sat), Sat 3, Sun 4 • Sat 10',
     details:'Two Queen Oceanfront room. Breakfast included. On Sat 10 the room is ready from 15:00.', phone:'+685 844 5611 / +685 777 1288'},
    {id:'outdoor-samoa', cat:'transport', day:'mon5', lat:-13.8475, lng:-172.0515, name:'Outdoor Samoa (bike hire)', when:'Mon 5 08:00 pickup • Sat 10 return by 16:00',
     details:'Pick up bikes + panniers 08:00 Mon. Return Sat 10 by 16:00 (Saturday exception agreed). Closed Sundays.', phone:'Lenka (WhatsApp) +64 21 372233'},
    {id:'mulifanua-wharf', cat:'transport', day:'mon5', lat:-13.8300, lng:-172.0365, name:'Mulifanua Wharf (ferry)', when:'Mon 5 10:00 out • Sat 10 ~13:30 back',
     details:'Be at the wharf 09:15 for the 10:00 sailing (~90 min). Weekday sailings roughly 06, 08, 10, 12, 14, 16. Foot passengers + bikes, pay at wharf (~WST 40 for 2 people + 2 bikes each way).'},
    {id:'salelologa-wharf', cat:'transport', day:'mon5', lat:-13.7434, lng:-172.2186, name:'Salelologa Wharf (Savai\'i)', when:'Mon 5 ~11:30 arrive • Sat 10 12:00 depart',
     details:'Main ATM town on Savai\'i. Return: be at the wharf 11:15 Sat for the 12:00 ferry (the 16:00 is too late for the bike return).'},

    // ===== Overnights on Savai'i =====
    {id:'tailua', cat:'stay', day:'mon5', num:'1', lat:-13.4481, lng:-172.3750, name:'Tailua Beach Fales, Manase', when:'Night of Mon 5 Oct',
     details:'Beach fales on Manase beach. Dinner + breakfast likely included — confirm on arrival.', phone:'+685 726 8149'},
    {id:'vaimoana', cat:'stay', day:'tue6', num:'2', approx:true, lat:-13.5154, lng:-172.6274, name:'Va-i-Moana Seaside Lodge, Asau', when:'Night of Tue 6 Oct',
     details:'Open fale. Breakfast only — dinner NOT included (lodge restaurant). Check-in 13:00, checkout 10:00.', phone:'+685 58140'},
    {id:'seeti', cat:'stay', day:'wed7', num:'3', lat:-13.5015, lng:-172.7899, name:'Se\'eti Beach Fales, Falealupo', when:'Night of Wed 7 Oct',
     details:'Beach fales on Falealupo beach. Meals to confirm on arrival. Very remote — carry snacks.', phone:'+685 776 5342 (WhatsApp)'},
    {id:'satuiatua', cat:'stay', day:'thu8', num:'4', approx:true, lat:-13.7075, lng:-172.6000, name:'Satuiatua Beach Fales', when:'Night of Thu 8 Oct',
     details:'Booked by phone, 2 single beds. Meals to confirm on arrival.', phone:'+685 846 4119'},
    {id:'jetover', cat:'stay', day:'fri9', num:'5', lat:-13.7378, lng:-172.2194, name:'Jet Over Hotel, Salelologa', when:'Night of Fri 9 Oct',
     details:'Enclosed room with AC, ~1 km from the wharf. ATM in Salelologa.', phone:'+685 51565 / 51566 • info@jetoverhotel.ws'},

    // ===== Mon 5: Salelologa → Manase =====
    {id:'lano', cat:'swim', day:'mon5', lat:-13.6101, lng:-172.2012, name:'Lano Beach', when:'En route, ~18 km', time:'30–60 min', cost:'Small beach fee (~WST 5)',
     details:'Calm lagoon swim on the east coast. Wild turtles are sometimes seen here. Good first cool-off after the ferry.'},
    {id:'mauga-crater', cat:'sight', day:'mon5', lat:-13.4757, lng:-172.3155, name:'Mauga village crater', when:'En route, ~40 km', time:'10 min',
     details:'Village built around a small volcanic crater, right by the road. Quick look.'},
    {id:'lava', cat:'must', day:'mon5', lat:-13.4517, lng:-172.3306, name:'Saleaula Lava Fields (LMS church ruins)', when:'En route, ~43 km', time:'30–45 min', cost:'~WST 5–10 pp',
     details:'1905–11 lava flow that swallowed villages: walls of the LMS church with lava inside, plus the Virgin\'s Grave. Short walk on rough lava — wear shoes.'},
    {id:'dive-savaii', cat:'swim', day:'mon5', lat:-13.4424, lng:-172.3576, name:'Dive Savai\'i — wild turtle snorkel', when:'En route, ~50 km (~3 km before Manase)', time:'~2 h', cost:'~WST 80 pp',
     details:'Guided snorkel with wild green turtles, opposite Le Lagoto Resort, Fagamalo. Shop 08:30–16:00, closed Sun. Book a day ahead. Mon arrival is probably too late in the day — ask for an early Tue slot (3 km back east) or skip.', phone:'+685 776 4900 (WhatsApp) • +685 751 0875 • info@divesavaii.com'},
    {id:'manase-beach', cat:'swim', day:'mon5', lat:-13.4471, lng:-172.3767, name:'Manase beach swim & snorkel', when:'At destination', time:'Evening',
     details:'Calm turquoise lagoon right in front of the fales. Sunset ~18:25.'},

    // ===== Tue 6: Manase → Asau =====
    {id:'mata-alelo', cat:'swim', day:'tue6', approx:true, lat:-13.4620, lng:-172.4180, name:'Mata o le Alelo freshwater pool', when:'En route, ~5 km (Matavai village)', time:'30 min', cost:'~WST 4 pp',
     details:'Spring-fed freshwater pool by the sea, linked to the legend of Sina and the Eel. Steep ladder down. Mon–Sat until 17:00.'},
    {id:'paia-dwarf', cat:'cave', day:'tue6', lat:-13.4917, lng:-172.4084, name:'Paia Dwarf\'s Cave', when:'Detour ~2–3 km uphill from Paia', time:'1–1.5 h', cost:'Guide fee (ask in Paia)',
     details:'Lava tube with underground pools. Local guide required — ask in Paia village. Bring a good torch. Uphill detour on a hilly day — only if keen.'},
    {id:'matavanu', cat:'sight', day:'tue6', lat:-13.5372, lng:-172.3944, name:'Mt Matavanu crater', when:'⚠️ ~9 km uphill detour each way', time:'Half day',
     details:'Crater of the 1905 eruption that made the Saleaula lava fields. Rough road climbing inland from Safotu. Not realistic by bike on this day — taxi only, probably skip.'},
    {id:'satoalepai', cat:'swim', day:'tue6', approx:true, lat:-13.4680, lng:-172.4450, name:'Satoalepai turtle pool', when:'En route, ~8 km', time:'30 min', cost:'~WST 5–10 pp',
     details:'Village-run freshwater pool with captive green turtles — hand-feed (and sometimes swim with) them. Not wild turtles, but easy and kid-friendly.'},
    {id:'peapea', cat:'cave', day:'tue6', lat:-13.5064, lng:-172.4780, name:'Pe\'ape\'a Cave', when:'En route, ~14 km (right by the road)', time:'30 min', cost:'~WST 5–10 pp',
     details:'Short lava-tube walk with nesting swiftlets that navigate by clicking. Guided. Bring a torch.'},
    {id:'asau-bay', cat:'swim', day:'tue6', approx:true, lat:-13.5170, lng:-172.6300, name:'Asau Bay swim', when:'At destination', time:'Afternoon',
     details:'Swim and rest at the lodge after the hills. Lodge restaurant for dinner (not included).'},

    // ===== Wed 7: Asau → Falealupo =====
    {id:'vaisala', cat:'swim', day:'wed7', lat:-13.5149, lng:-172.6710, name:'Vaisala Beach', when:'En route, ~5 km', time:'30 min',
     details:'Pretty bay for a swim stop. Vaisala Hotel next door for a drink/snack.'},
    {id:'canopy', cat:'sight', day:'wed7', lat:-13.5264, lng:-172.7484, name:'Falealupo Canopy Walk', when:'En route, ~15 km', time:'45 min', cost:'~WST 20 pp',
     warn:'Has been closed for repairs in recent years — ask at Va-i-Moana before going.',
     details:'Swing bridge and tower up in the rainforest canopy, in the Falealupo rainforest reserve.'},
    {id:'moso', cat:'sight', day:'wed7', lat:-13.5015, lng:-172.7669, name:'Moso\'s Footprint', when:'En route, ~19 km', time:'10 min', cost:'Free / small fee',
     details:'2 m foot-shaped rock. Legend: the giant Moso stepped from here to Fiji.'},
    {id:'church-ruins', cat:'sight', day:'wed7', lat:-13.4938, lng:-172.7840, name:'Falealupo church ruins', when:'En route, ~21 km', time:'15 min', cost:'Free / donation',
     details:'Shell of the old Catholic church wrecked by Cyclones Ofa and Val (1990–91).'},
    {id:'house-of-rock', cat:'cave', day:'wed7', lat:-13.4970, lng:-172.7858, name:'House of Rock', when:'En route, ~21 km', time:'20 min', cost:'~WST 5 pp',
     details:'Collapsed lava tube "house". Legend of a men-vs-women house-building contest. Short trail — closed shoes.'},
    {id:'seeti-snorkel', cat:'swim', day:'wed7', lat:-13.5018, lng:-172.7900, name:'Falealupo beach swim & snorkel', when:'At destination', time:'Afternoon',
     details:'White-sand beach right in front of Se\'eti — one of the best on Savai\'i.'},
    {id:'mulinuu', cat:'must', day:'wed7', lat:-13.5156, lng:-172.8016, name:'Cape Mulinu\'u — Star Mound & sunset', when:'~2 km from Se\'eti', time:'1–2 h', cost:'~WST 10 pp village fee',
     details:'Westernmost point of Samoa. Ancient star mound, Vaisuatoto well and rock pools — guides tell the legends. Sunset ~18:25.'},

    // ===== Thu 8: Falealupo → Satuiatua =====
    {id:'falelima-arch', cat:'sight', day:'thu8', lat:-13.5950, lng:-172.7231, name:'Falelima Sea Arch', when:'En route, ~23 km', time:'20 min', cost:'Free / small fee',
     details:'Natural rock arch on a wild stretch of coast. Short walk from the road.'},
    {id:'lovers-leap', cat:'sight', day:'thu8', lat:-13.6407, lng:-172.6715, name:'Lover\'s Leap', when:'En route, ~31 km', time:'15 min', cost:'~WST 2–5',
     details:'Cliff-top viewpoint over the south-west coast.'},
    {id:'faiaai', cat:'swim', day:'thu8', lat:-13.6740, lng:-172.6401, name:'Fai\'a\'ai Beach', when:'En route, ~36 km', time:'30 min',
     details:'Swim stop; coconuts from roadside stands.'},
    {id:'coral-garden', cat:'must', day:'thu8', lat:-13.7090, lng:-172.6013, name:'Satuiatua snorkelling (coral garden)', when:'At destination', time:'Afternoon',
     details:'Often called the best snorkelling in Samoa — reef and channel just off the beach. Ask the fale owners where it\'s safe (currents).'},

    // ===== Fri 9: Satuiatua → Salelologa =====
    {id:'blowholes', cat:'must', day:'fri9', lat:-13.8016, lng:-172.5190, name:'Alofaaga Blowholes, Taga', when:'En route, ~15 km (+1.5 km unsealed)', time:'45 min', cost:'~WST 5–10 pp (+ tip for coconut throw)',
     details:'Huge blowholes; locals fire coconuts into them. Best around high tide. Stay well back from the edge.'},
    {id:'mu-pagoa', cat:'sight', day:'fri9', lat:-13.7769, lng:-172.3787, name:'Mu Pagoa Waterfall', when:'En route, ~31 km', time:'15 min', cost:'~WST 5',
     details:'Waterfall that drops straight into the sea, next to the road at Puleia. Look-only.'},
    {id:'afu-aau', cat:'must', day:'fri9', lat:-13.7454, lng:-172.3136, name:'Afu A\'au Waterfall', when:'En route, ~41 km (short inland dirt road)', time:'45–60 min', cost:'~WST 5–10 pp',
     details:'Waterfall into a clear freshwater swimming pool — best swim of the trip. Toilets/changing.'},
    {id:'pulemelei', cat:'sight', day:'fri9', lat:-13.7352, lng:-172.3238, name:'Pulemelei Mound', when:'~2 km off route near Afu A\'au', time:'1–2 h', cost:'Guide ~WST 40',
     warn:'Access depends on the landowners — often closed. Overgrown. Probably skip.',
     details:'Largest ancient stone mound in Polynesia, in the Letolo plantation.'},
    {id:'tafua', cat:'sight', day:'fri9', lat:-13.7850, lng:-172.2516, name:'Tafua Crater (flying foxes)', when:'⚠️ ~4–5 km detour south + uphill walk', time:'1.5–2 h', cost:'~WST 5 pp (pay in Tafua village)',
     details:'Rainforest crater with flying foxes. Mon–Sat 08:00–17:00. Only if legs are fresh.'},
    {id:'salelologa-market', cat:'sight', day:'fri9', lat:-13.7484, lng:-172.2291, name:'Salelologa Market', when:'At destination', time:'30–60 min',
     details:'Fruit, cheap food, lavalava and souvenirs. Spend leftover tala here.'}
  ]
};
