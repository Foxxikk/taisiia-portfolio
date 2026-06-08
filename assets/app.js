/* ===== Taisiia Pokrovska portfolio — shared app ===== */
(function(){
"use strict";

/* ---------- i18n dictionary ---------- */
const I18N = {
  en:{
    'nav.home':'Home','nav.services':'Services','nav.work':'Work','nav.about':'About','nav.contact':'Contact',
    'cta.talk':"Let's talk",'cta.work':'View work','cta.email':'Email me','cta.tg':'Telegram','cta.ig':'Instagram',
    'foot.blurb':'AI Creator & Visual Artist crafting on-brand visuals for beauty, lifestyle and product brands.',
    'foot.explore':'Explore','foot.connect':'Connect','foot.rights':'AI Creator & Visual Artist. All rights reserved.',
    /* home hero */
    'h.eyebrow':'✦ AI Creator & Visual Artist',
    'h.title':'Turning ideas into <em>beautiful</em> visuals with AI',
    'h.lead':'I craft AI-generated ad creatives, surreal art, portraits and product photoshoots for beauty, lifestyle and product brands — fast, on-brand and made to convert.',
    'h.m1':'Projects delivered','h.m2':'Brands & clients','h.m3':'AI tools mastered',
    /* services preview */
    'sv.eyebrow':'✦ What I do','sv.title':'Creative <em>services</em>',
    'sv.lead':'From a single hero image to a full campaign — ten ways AI becomes your visual advantage.',
    'sv.all':'All services',
    /* tools */
    'tl.eyebrow':'✦ My stack','tl.title':'Tools & <em>technologies</em>',
    'tl.lead':'The professional AI and post-production toolkit behind every project.',
    /* work preview */
    'wk.eyebrow':'✦ Portfolio','wk.title':'Selected <em>works</em>',
    'wk.lead':'A glimpse across categories — from ad creatives to surreal worlds.',
    'wk.all':'View full portfolio',
    /* video */
    'vd.eyebrow':'✦ Motion','vd.title':'Video creatives & <em>surrealist visuals</em>',
    'vd.lead':'AI-driven motion for ads, reels and dreamlike short films. Tap any frame to play.',
    /* why */
    'wy.eyebrow':'✦ Why me','wy.title':'Why work <em>with me</em>',
    'f1.t':'Distinctive aesthetic','f1.d':'A signature soft-luxury look that elevates beauty and lifestyle brands.',
    'f2.t':'Fast turnaround','f2.d':'Concepts in days, not weeks — without sacrificing quality or polish.',
    'f3.t':'Truly on-brand','f3.d':'Every visual built around your palette, tone and audience.',
    /* cta band */
    'cb.eyebrow':'✦ Get in touch','cb.title':"Let's create something <em>beautiful</em>",
    'cb.lead':'Have a brand, a campaign or a wild idea? Tell me about it — I usually reply within a day.',
    /* services page */
    'svp.eyebrow':'✦ Services','svp.title':'Everything I create <em>with AI</em>',
    'svp.lead':'Ten focused services, each delivered with a distinctive soft-luxury aesthetic and a fast, collaborative process.',
    'svp.proc':'How we work','svp.proct':'A simple, <em>collaborative</em> process',
    'p1.t':'Brief','p1.d':'We align on goals, brand, references and deliverables.',
    'p2.t':'Concepts','p2.d':'First AI directions within days for your feedback.',
    'p3.t':'Refine','p3.d':'We iterate on the chosen direction until it is perfect.',
    'p4.t':'Deliver','p4.d':'Final assets, web- and print-ready, in every format you need.',
    /* service items */
    's1.t':'AI Ad Creatives','s1.d':'Scroll-stopping ad visuals tailored to your brand, product and platform.',
    's2.t':'Surrealist Visuals','s2.d':'Dreamlike, editorial art that makes a brand impossible to ignore.',
    's3.t':'Interior Visualization','s3.d':'Photoreal interior and scene visuals generated on demand.',
    's4.t':'AI Photoshoots','s4.d':'Full model and product shoots without a studio or logistics.',
    's5.t':'Infographics','s5.d':'Clear, on-brand visual data and explainer graphics.',
    's6.t':'AI Portraits','s6.d':'Striking personal and brand portraits in any style.',
    's7.t':'Photo Restoration','s7.d':'Old or damaged photos restored and enhanced to crisp quality.',
    's8.t':'Video Creatives','s8.d':'Short-form AI video for ads, reels and product launches.',
    's9.t':'Brand Visual Identity','s9.d':'Cohesive visual worlds — moodboards, palettes and key art.',
    's10.t':'Product Mockups','s10.d':'Polished product renders and packaging visuals.',
    's1.t1':'Static','s1.t2':'Carousel','s1.t3':'Story',
    's2.t1':'Editorial','s2.t2':'Conceptual','s2.t3':'Fine-art',
    's3.t1':'Interior','s3.t2':'Scene','s3.t3':'Architectural',
    's4.t1':'Model','s4.t2':'Product','s4.t3':'Lifestyle',
    's5.t1':'Data','s5.t2':'Explainer','s5.t3':'Social',
    's6.t1':'Beauty','s6.t2':'Brand','s6.t3':'Editorial',
    's7.t1':'Restore','s7.t2':'Upscale','s7.t3':'Colorize',
    's8.t1':'Reels','s8.t2':'Ads','s8.t3':'Loops',
    's9.t1':'Moodboard','s9.t2':'Palette','s9.t3':'Key art',
    's10.t1':'Render','s10.t2':'Packaging','s10.t3':'Mockup',
    /* work page */
    'wkp.eyebrow':'✦ Portfolio','wkp.title':'Selected <em>works</em>',
    'wkp.lead':'A curated selection across ad creatives, beauty, interiors, portraits and surreal visuals. Click any piece to view it large.',
    'fl.all':'All','fl.ad':'Ad Creatives','fl.beauty':'Beauty','fl.interior':'Interior','fl.photo':'Photoshoot','fl.info':'Infographic','fl.portrait':'Portraits','fl.surreal':'Surrealist',
    /* work items */
    'i1.t':'Botanical Serum','i1.c':'Beauty','i2.t':'Garden Elixir','i2.c':'Beauty',
    'i3.t':'Atelier Mirror','i3.c':'Beauty','i4.t':'Slate & Stone','i4.c':'Beauty',
    'i5.t':'Bloom Campaign','i5.c':'Ad Creatives','i6.t':'Azure Bottle','i6.c':'Ad Creatives',
    'i7.t':'Crimson Room','i7.c':'Interior','i8.t':'Rosé Editorial','i8.c':'Photoshoot',
    'i9.t':'Maison Data','i9.c':'Infographic','i10.t':'Muse','i10.c':'Portraits',
    'i11.t':'Nocturne','i11.c':'Portraits','i12.t':'Wild Bouquet','i12.c':'Surrealist',
    'i13.t':'Scarlet Dots','i13.c':'Surrealist','i14.t':'Dream City','i14.c':'Surrealist',
    'i15.t':'Polka Reverie','i15.c':'Surrealist','i16.t':'Cathedral','i16.c':'Surrealist',
    /* about page */
    'ab.eyebrow':'✦ About','ab.title':'Hi, I’m <em>Taisiia</em>',
    'ab.p1':'I’m an AI creator and visual artist working at the intersection of beauty, technology and fine art. I help brands and agencies turn ideas into striking, on-brand visuals — from scroll-stopping ad creatives to surreal, editorial worlds.',
    'ab.p2':'My signature is a <strong>soft-luxury aesthetic</strong>: warm palettes, elegant typography and a quiet sense of craft. I combine the speed of generative AI with a careful, art-directed eye, so every asset feels intentional rather than auto-generated.',
    'ab.p3':'I work with clients across Europe in <strong>Czech, English and Ukrainian</strong>, mostly in beauty, lifestyle and product. If you have a brand to elevate or a wild concept to realise, I’d love to hear about it.',
    'ab.stat1':'Projects delivered','ab.stat2':'Brands & clients','ab.stat3':'Languages','ab.stat4':'AI tools',
    'ab.skills':'✦ Expertise','ab.skillst':'What I bring <em>to the table</em>',
    'ab.sk1':'Art direction','ab.sk1d':'A consistent, recognisable visual language across every deliverable.',
    'ab.sk2':'Generative AI','ab.sk2d':'Deep command of the leading image and video models and pipelines.',
    'ab.sk3':'Post-production','ab.sk3d':'Retouching, upscaling and finishing for crisp, print-ready results.',
    /* contact page */
    'cp.eyebrow':'✦ Contact','cp.title':'Let’s create something <em>beautiful</em>',
    'cp.lead':'Tell me about your brand, campaign or idea. Fill in the form or reach out directly — I usually reply within a day.',
    'cp.reach':'Reach me directly','cp.formt':'Send a message',
    'fm.name':'Your name','fm.email':'Email','fm.msg':'Tell me about your project','fm.send':'Send message',
    'fm.note':'This demo form opens your email client. For a live site, connect it to your preferred form service.',
    'modal.note':'Video preview — replace with the real showreel clip on launch.'
  },
  cs:{
    'nav.home':'Domů','nav.services':'Služby','nav.work':'Práce','nav.about':'O mně','nav.contact':'Kontakt',
    'cta.talk':'Pojďme to probrat','cta.work':'Zobrazit práce','cta.email':'Napsat e-mail','cta.tg':'Telegram','cta.ig':'Instagram',
    'foot.blurb':'AI tvůrkyně a vizuální umělkyně tvořící vizuály věrné značce pro beauty, lifestyle a produktové značky.',
    'foot.explore':'Procházet','foot.connect':'Spojme se','foot.rights':'AI tvůrkyně a vizuální umělkyně. Všechna práva vyhrazena.',
    'h.eyebrow':'✦ AI tvůrkyně & vizuální umělkyně',
    'h.title':'Měním nápady v <em>krásné</em> vizuály pomocí AI',
    'h.lead':'Tvořím AI reklamní kreativy, surreální umění, portréty a produktové focení pro beauty, lifestyle a produktové značky — rychle, věrně značce a s důrazem na konverze.',
    'h.m1':'Dokončených projektů','h.m2':'Značek a klientů','h.m3':'Zvládnutých AI nástrojů',
    'sv.eyebrow':'✦ Co dělám','sv.title':'Kreativní <em>služby</em>',
    'sv.lead':'Od jednoho hlavního vizuálu po celou kampaň — deset způsobů, jak se AI stane vaší vizuální výhodou.',
    'sv.all':'Všechny služby',
    'tl.eyebrow':'✦ Můj stack','tl.title':'Nástroje & <em>technologie</em>',
    'tl.lead':'Profesionální AI a postprodukční sada za každým projektem.',
    'wk.eyebrow':'✦ Portfolio','wk.title':'Vybrané <em>práce</em>',
    'wk.lead':'Náhled napříč kategoriemi — od reklamních kreativ po surreální světy.',
    'wk.all':'Celé portfolio',
    'vd.eyebrow':'✦ Pohyb','vd.title':'Video kreativy & <em>surrealistické vizuály</em>',
    'vd.lead':'AI pohyb pro reklamy, reels a snové krátké filmy. Klepnutím na záběr přehrajete.',
    'wy.eyebrow':'✦ Proč já','wy.title':'Proč pracovat <em>se mnou</em>',
    'f1.t':'Osobitá estetika','f1.d':'Signature soft-luxury vzhled, který pozvedne beauty a lifestyle značky.',
    'f2.t':'Rychlé dodání','f2.d':'Koncepty ve dnech, ne týdnech — bez kompromisu v kvalitě.',
    'f3.t':'Skutečně věrné značce','f3.d':'Každý vizuál postavený na vaší paletě, tónu a publiku.',
    'cb.eyebrow':'✦ Ozvěte se','cb.title':'Vytvořme něco <em>krásného</em>',
    'cb.lead':'Máte značku, kampaň nebo odvážný nápad? Napište mi — obvykle odpovím do jednoho dne.',
    'svp.eyebrow':'✦ Služby','svp.title':'Vše, co tvořím <em>pomocí AI</em>',
    'svp.lead':'Deset zaměřených služeb, každá s osobitou soft-luxury estetikou a rychlým, kolaborativním procesem.',
    'svp.proc':'Jak pracujeme','svp.proct':'Jednoduchý, <em>kolaborativní</em> proces',
    'p1.t':'Brief','p1.d':'Sladíme cíle, značku, reference a výstupy.',
    'p2.t':'Koncepty','p2.d':'První AI směry během několika dnů k vaší zpětné vazbě.',
    'p3.t':'Ladění','p3.d':'Iterujeme zvolený směr, dokud není perfektní.',
    'p4.t':'Dodání','p4.d':'Finální výstupy pro web i tisk ve všech formátech, které potřebujete.',
    's1.t':'AI reklamní kreativy','s1.d':'Vizuály, které zastaví scrollování, na míru vaší značce, produktu a platformě.',
    's2.t':'Surrealistické vizuály','s2.d':'Snové, editorialní umění, které značku nelze přehlédnout.',
    's3.t':'Vizualizace interiérů','s3.d':'Fotorealistické interiérové a scénické vizuály na vyžádání.',
    's4.t':'AI focení','s4.d':'Kompletní focení modelek i produktů bez studia a logistiky.',
    's5.t':'Infografiky','s5.d':'Přehledná vizuální data a vysvětlující grafika věrná značce.',
    's6.t':'AI portréty','s6.d':'Výrazné osobní i firemní portréty v jakémkoli stylu.',
    's7.t':'Restaurování fotek','s7.d':'Staré či poškozené fotky obnovené a vylepšené do ostré kvality.',
    's8.t':'Video kreativy','s8.d':'Krátká AI videa pro reklamy, reels a launche produktů.',
    's9.t':'Vizuální identita značky','s9.d':'Soudržné vizuální světy — moodboardy, palety a klíčové vizuály.',
    's10.t':'Produktové mockupy','s10.d':'Vyladěné produktové rendery a vizuály obalů.',
    's1.t1':'Statické','s1.t2':'Carousel','s1.t3':'Story',
    's2.t1':'Editorial','s2.t2':'Koncept','s2.t3':'Fine-art',
    's3.t1':'Interiér','s3.t2':'Scéna','s3.t3':'Architektura',
    's4.t1':'Modelka','s4.t2':'Produkt','s4.t3':'Lifestyle',
    's5.t1':'Data','s5.t2':'Explainer','s5.t3':'Social',
    's6.t1':'Beauty','s6.t2':'Značka','s6.t3':'Editorial',
    's7.t1':'Obnova','s7.t2':'Upscale','s7.t3':'Kolorování',
    's8.t1':'Reels','s8.t2':'Reklamy','s8.t3':'Smyčky',
    's9.t1':'Moodboard','s9.t2':'Paleta','s9.t3':'Klíčový vizuál',
    's10.t1':'Render','s10.t2':'Obal','s10.t3':'Mockup',
    'wkp.eyebrow':'✦ Portfolio','wkp.title':'Vybrané <em>práce</em>',
    'wkp.lead':'Vybraná kolekce napříč reklamními kreativami, beauty, interiéry, portréty a surreálnými vizuály. Klepnutím zobrazíte velký náhled.',
    'fl.all':'Vše','fl.ad':'Reklamní','fl.beauty':'Beauty','fl.interior':'Interiér','fl.photo':'Focení','fl.info':'Infografika','fl.portrait':'Portréty','fl.surreal':'Surreální',
    'i1.t':'Botanické sérum','i1.c':'Beauty','i2.t':'Zahradní elixír','i2.c':'Beauty',
    'i3.t':'Atelier Mirror','i3.c':'Beauty','i4.t':'Břidlice & kámen','i4.c':'Beauty',
    'i5.t':'Kampaň Bloom','i5.c':'Reklamní','i6.t':'Azurová lahvička','i6.c':'Reklamní',
    'i7.t':'Karmínový pokoj','i7.c':'Interiér','i8.t':'Rosé Editorial','i8.c':'Focení',
    'i9.t':'Maison Data','i9.c':'Infografika','i10.t':'Muse','i10.c':'Portréty',
    'i11.t':'Nocturne','i11.c':'Portréty','i12.t':'Divoká kytice','i12.c':'Surreální',
    'i13.t':'Šarlatové tečky','i13.c':'Surreální','i14.t':'Snové město','i14.c':'Surreální',
    'i15.t':'Puntíkové snění','i15.c':'Surreální','i16.t':'Katedrála','i16.c':'Surreální',
    'ab.eyebrow':'✦ O mně','ab.title':'Ahoj, jsem <em>Taisiia</em>',
    'ab.p1':'Jsem AI tvůrkyně a vizuální umělkyně na pomezí beauty, technologií a výtvarného umění. Pomáhám značkám a agenturám měnit nápady ve výrazné vizuály věrné značce — od reklamních kreativ, které zastaví scrollování, po surreální editorialní světy.',
    'ab.p2':'Mým rukopisem je <strong>soft-luxury estetika</strong>: teplé palety, elegantní typografie a tichý smysl pro řemeslo. Spojuji rychlost generativní AI s pečlivým art-directorským okem, takže každý výstup působí promyšleně, ne automaticky vygenerovaně.',
    'ab.p3':'Pracuji s klienty po celé Evropě v <strong>češtině, angličtině a ukrajinštině</strong>, převážně v beauty, lifestyle a produktu. Máte-li značku k pozvednutí nebo odvážný koncept k realizaci, ráda se o něm dozvím.',
    'ab.stat1':'Dokončených projektů','ab.stat2':'Značek a klientů','ab.stat3':'Jazyky','ab.stat4':'AI nástrojů',
    'ab.skills':'✦ Expertíza','ab.skillst':'Co přináším <em>na stůl</em>',
    'ab.sk1':'Art direction','ab.sk1d':'Konzistentní, rozpoznatelný vizuální jazyk napříč všemi výstupy.',
    'ab.sk2':'Generativní AI','ab.sk2d':'Hluboké zvládnutí předních obrazových a video modelů a pipelines.',
    'ab.sk3':'Postprodukce','ab.sk3d':'Retuš, upscaling a finišování pro ostré výsledky připravené k tisku.',
    'cp.eyebrow':'✦ Kontakt','cp.title':'Vytvořme něco <em>krásného</em>',
    'cp.lead':'Napište mi o své značce, kampani nebo nápadu. Vyplňte formulář nebo se ozvěte přímo — obvykle odpovím do jednoho dne.',
    'cp.reach':'Spojte se přímo','cp.formt':'Pošlete zprávu',
    'fm.name':'Vaše jméno','fm.email':'E-mail','fm.msg':'Napište mi o svém projektu','fm.send':'Odeslat zprávu',
    'fm.note':'Tento demo formulář otevře váš e-mailový klient. Pro živý web jej napojte na preferovanou formulářovou službu.',
    'modal.note':'Náhled videa — při spuštění nahraďte skutečným showreelem.'
  },
  uk:{
    'nav.home':'Головна','nav.services':'Послуги','nav.work':'Роботи','nav.about':'Про мене','nav.contact':'Контакти',
    'cta.talk':'Обговорімо','cta.work':'Дивитися роботи','cta.email':'Написати','cta.tg':'Telegram','cta.ig':'Instagram',
    'foot.blurb':'AI-креаторка та візуальна художниця, що створює візуали у стилі бренду для beauty, lifestyle і продуктових брендів.',
    'foot.explore':'Перегляд','foot.connect':'Звʼязок','foot.rights':'AI-креаторка та візуальна художниця. Усі права захищені.',
    'h.eyebrow':'✦ AI-креаторка та візуальна художниця',
    'h.title':'Перетворюю ідеї на <em>красиві</em> візуали за допомогою AI',
    'h.lead':'Створюю AI-рекламні креативи, сюрреальне мистецтво, портрети та продуктові зйомки для beauty, lifestyle і продуктових брендів — швидко, у стилі бренду й заради конверсій.',
    'h.m1':'Виконаних проєктів','h.m2':'Брендів і клієнтів','h.m3':'Опанованих AI-інструментів',
    'sv.eyebrow':'✦ Що я роблю','sv.title':'Креативні <em>послуги</em>',
    'sv.lead':'Від одного головного візуалу до цілої кампанії — десять способів зробити AI вашою візуальною перевагою.',
    'sv.all':'Усі послуги',
    'tl.eyebrow':'✦ Мій стек','tl.title':'Інструменти та <em>технології</em>',
    'tl.lead':'Професійний набір AI та постпродакшну за кожним проєктом.',
    'wk.eyebrow':'✦ Портфоліо','wk.title':'Вибрані <em>роботи</em>',
    'wk.lead':'Погляд крізь категорії — від рекламних креативів до сюрреальних світів.',
    'wk.all':'Усе портфоліо',
    'vd.eyebrow':'✦ Рух','vd.title':'Відеокреативи та <em>сюрреалістичні візуали</em>',
    'vd.lead':'AI-рух для реклами, reels і мрійливих коротких фільмів. Торкніться кадру, щоб відтворити.',
    'wy.eyebrow':'✦ Чому я','wy.title':'Чому варто працювати <em>зі мною</em>',
    'f1.t':'Особливий стиль','f1.d':'Фірмовий soft-luxury вигляд, що підносить beauty та lifestyle бренди.',
    'f2.t':'Швидка реалізація','f2.d':'Концепти за дні, а не тижні — без втрати якості.',
    'f3.t':'Справді у стилі бренду','f3.d':'Кожен візуал побудований навколо вашої палітри, тону й аудиторії.',
    'cb.eyebrow':'✦ Звʼяжіться','cb.title':'Створімо щось <em>красиве</em>',
    'cb.lead':'Маєте бренд, кампанію чи сміливу ідею? Напишіть мені — зазвичай відповідаю протягом дня.',
    'svp.eyebrow':'✦ Послуги','svp.title':'Усе, що я створюю <em>за допомогою AI</em>',
    'svp.lead':'Десять сфокусованих послуг, кожна з особливою soft-luxury естетикою та швидким, спільним процесом.',
    'svp.proc':'Як ми працюємо','svp.proct':'Простий, <em>спільний</em> процес',
    'p1.t':'Бриф','p1.d':'Узгоджуємо цілі, бренд, референси та результати.',
    'p2.t':'Концепти','p2.d':'Перші AI-напрямки протягом днів для вашого відгуку.',
    'p3.t':'Доопрацювання','p3.d':'Ітеруємо обраний напрямок, доки він не стане ідеальним.',
    'p4.t':'Передача','p4.d':'Фінальні файли для веб і друку в усіх потрібних форматах.',
    's1.t':'AI-рекламні креативи','s1.d':'Візуали, що зупиняють скрол, під ваш бренд, продукт і платформу.',
    's2.t':'Сюрреалістичні візуали','s2.d':'Мрійливе, editorial-мистецтво, яке неможливо проігнорувати.',
    's3.t':'Візуалізація інтерʼєрів','s3.d':'Фотореалістичні інтерʼєрні та сценічні візуали на замовлення.',
    's4.t':'AI-зйомки','s4.d':'Повні зйомки моделей і продуктів без студії та логістики.',
    's5.t':'Інфографіка','s5.d':'Зрозумілі візуальні дані та пояснювальна графіка у стилі бренду.',
    's6.t':'AI-портрети','s6.d':'Виразні особисті та брендові портрети в будь-якому стилі.',
    's7.t':'Реставрація фото','s7.d':'Старі чи пошкоджені фото відновлені й покращені до чіткої якості.',
    's8.t':'Відеокреативи','s8.d':'Короткі AI-відео для реклами, reels і запусків продуктів.',
    's9.t':'Візуальна ідентичність бренду','s9.d':'Цілісні візуальні світи — мудборди, палітри та ключові візуали.',
    's10.t':'Продуктові макети','s10.d':'Вишукані продуктові рендери та візуали упаковки.',
    's1.t1':'Статика','s1.t2':'Карусель','s1.t3':'Story',
    's2.t1':'Editorial','s2.t2':'Концепт','s2.t3':'Fine-art',
    's3.t1':'Інтерʼєр','s3.t2':'Сцена','s3.t3':'Архітектура',
    's4.t1':'Модель','s4.t2':'Продукт','s4.t3':'Lifestyle',
    's5.t1':'Дані','s5.t2':'Explainer','s5.t3':'Social',
    's6.t1':'Beauty','s6.t2':'Бренд','s6.t3':'Editorial',
    's7.t1':'Відновлення','s7.t2':'Upscale','s7.t3':'Колоризація',
    's8.t1':'Reels','s8.t2':'Реклама','s8.t3':'Цикли',
    's9.t1':'Мудборд','s9.t2':'Палітра','s9.t3':'Ключовий візуал',
    's10.t1':'Рендер','s10.t2':'Упаковка','s10.t3':'Макет',
    'wkp.eyebrow':'✦ Портфоліо','wkp.title':'Вибрані <em>роботи</em>',
    'wkp.lead':'Підібрана колекція крізь рекламні креативи, beauty, інтерʼєри, портрети та сюрреальні візуали. Натисніть на роботу, щоб переглянути великий розмір.',
    'fl.all':'Усе','fl.ad':'Реклама','fl.beauty':'Beauty','fl.interior':'Інтерʼєр','fl.photo':'Зйомка','fl.info':'Інфографіка','fl.portrait':'Портрети','fl.surreal':'Сюрреалізм',
    'i1.t':'Ботанічна сироватка','i1.c':'Beauty','i2.t':'Садовий еліксир','i2.c':'Beauty',
    'i3.t':'Atelier Mirror','i3.c':'Beauty','i4.t':'Сланець і камінь','i4.c':'Beauty',
    'i5.t':'Кампанія Bloom','i5.c':'Реклама','i6.t':'Лазурова пляшка','i6.c':'Реклама',
    'i7.t':'Багряна кімната','i7.c':'Інтерʼєр','i8.t':'Rosé Editorial','i8.c':'Зйомка',
    'i9.t':'Maison Data','i9.c':'Інфографіка','i10.t':'Muse','i10.c':'Портрети',
    'i11.t':'Nocturne','i11.c':'Портрети','i12.t':'Дикий букет','i12.c':'Сюрреалізм',
    'i13.t':'Багряні крапки','i13.c':'Сюрреалізм','i14.t':'Місто-сон','i14.c':'Сюрреалізм',
    'i15.t':'Горохові мрії','i15.c':'Сюрреалізм','i16.t':'Собор','i16.c':'Сюрреалізм',
    'ab.eyebrow':'✦ Про мене','ab.title':'Привіт, я <em>Taisiia</em>',
    'ab.p1':'Я AI-креаторка та візуальна художниця на перетині beauty, технологій і образотворчого мистецтва. Допомагаю брендам і агенціям перетворювати ідеї на виразні візуали у стилі бренду — від рекламних креативів, що зупиняють скрол, до сюрреальних editorial-світів.',
    'ab.p2':'Мій почерк — <strong>soft-luxury естетика</strong>: теплі палітри, елегантна типографіка й тихе відчуття майстерності. Поєдную швидкість генеративного AI з уважним art-direction поглядом, тож кожен файл виглядає продуманим, а не згенерованим автоматично.',
    'ab.p3':'Працюю з клієнтами по всій Європі <strong>чеською, англійською та українською</strong>, переважно в beauty, lifestyle і продукті. Якщо маєте бренд для піднесення чи сміливий концепт для реалізації — буду рада почути.',
    'ab.stat1':'Виконаних проєктів','ab.stat2':'Брендів і клієнтів','ab.stat3':'Мови','ab.stat4':'AI-інструментів',
    'ab.skills':'✦ Експертиза','ab.skillst':'Що я <em>пропоную</em>',
    'ab.sk1':'Art direction','ab.sk1d':'Послідовна, впізнавана візуальна мова в усіх результатах.',
    'ab.sk2':'Генеративний AI','ab.sk2d':'Глибоке володіння провідними моделями зображень і відео та пайплайнами.',
    'ab.sk3':'Постпродакшн','ab.sk3d':'Ретуш, апскейл і фінішинг для чітких результатів, готових до друку.',
    'cp.eyebrow':'✦ Контакти','cp.title':'Створімо щось <em>красиве</em>',
    'cp.lead':'Розкажіть про свій бренд, кампанію чи ідею. Заповніть форму або звʼяжіться напряму — зазвичай відповідаю протягом дня.',
    'cp.reach':'Звʼязатися напряму','cp.formt':'Надіслати повідомлення',
    'fm.name':'Ваше імʼя','fm.email':'Email','fm.msg':'Розкажіть про ваш проєкт','fm.send':'Надіслати',
    'fm.note':'Ця демо-форма відкриває ваш поштовий клієнт. Для живого сайту підключіть її до бажаного сервісу форм.',
    'modal.note':'Превʼю відео — на запуску замініть справжнім showreel.'
  }
};

let lang = 'en';
const t = (k)=> (I18N[lang] && I18N[lang][k]) || (I18N.en[k]||k);

/* ---------- Header / footer templates ---------- */
const page = document.body.dataset.page || 'home';
const navItems = [['home','index.html'],['services','services.html'],['work','work.html'],['about','about.html'],['contact','contact.html']];

function headerHTML(){
  const links = navItems.map(([k,href])=>`<a href="${href}"${k===page?' class="active"':''} data-i18n="nav.${k}">${t('nav.'+k)}</a>`).join('');
  return `<div class="wrap nav">
    <a href="index.html" class="logo">Taisiia <span>Pokrovska</span></a>
    <nav class="nav-links" id="navLinks">${links}</nav>
    <div class="nav-right">
      <div class="lang" role="group" aria-label="Language">
        <button data-lang="cs">CS</button><button data-lang="en">EN</button><button data-lang="uk">UK</button>
      </div>
      <button class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div></div>`;
}
function footerHTML(){
  const ex = navItems.slice(1).map(([k,href])=>`<li><a href="${href}" data-i18n="nav.${k}">${t('nav.'+k)}</a></li>`).join('');
  return `<div class="wrap">
    <div class="foot">
      <div>
        <a href="index.html" class="logo">Taisiia <span>Pokrovska</span></a>
        <p class="blurb" data-i18n="foot.blurb">${t('foot.blurb')}</p>
      </div>
      <div><h4 data-i18n="foot.explore">${t('foot.explore')}</h4><ul>${ex}</ul></div>
      <div><h4 data-i18n="foot.connect">${t('foot.connect')}</h4><ul>
        <li><a href="mailto:hello@taisiiapokrovska.com">Email</a></li>
        <li><a href="https://t.me/" target="_blank" rel="noopener">Telegram</a></li>
        <li><a href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a></li>
      </ul></div>
    </div>
    <div class="foot-bottom">
      <small>© <span class="year"></span> Taisiia Pokrovska</small>
      <small data-i18n="foot.rights">${t('foot.rights')}</small>
    </div></div>`;
}

/* ---------- Apply language ---------- */
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  document.querySelectorAll('.year').forEach(e=> e.textContent = new Date().getFullYear());
}
function setLang(l){
  if(!I18N[l]) return;
  lang=l; try{ localStorage.setItem('tp-lang', l); }catch(e){}
  applyLang();
}

/* ---------- Lightbox (portfolio) ---------- */
function buildLightbox(){
  const items = [...document.querySelectorAll('[data-lb]')];
  if(!items.length) return;
  const lb=document.createElement('div'); lb.className='lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true');
  lb.innerHTML=`<div class="lb-inner">
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
    <img alt=""><div class="lb-cap"></div>
    <button class="lb-nav lb-next" aria-label="Next">›</button></div>`;
  document.body.appendChild(lb);
  const img=lb.querySelector('img'), cap=lb.querySelector('.lb-cap');
  let idx=0, last=null;
  const visible=()=> items.filter(el=> el.offsetParent!==null);
  function show(i){
    const list=visible(); if(!list.length) return;
    idx=(i+list.length)%list.length; const el=list[idx];
    img.src=el.dataset.lb; img.alt=el.dataset.title||'';
    cap.innerHTML=`${el.dataset.title||''} &nbsp;<em>${el.dataset.cat||''}</em>`;
  }
  function open(el){ last=document.activeElement; const list=visible(); show(list.indexOf(el)); lb.classList.add('open'); document.body.style.overflow='hidden'; lb.querySelector('.lb-close').focus(); }
  function close(){ lb.classList.remove('open'); document.body.style.overflow=''; if(last)last.focus(); }
  items.forEach(el=>{
    el.addEventListener('click', e=>{ e.preventDefault(); open(el); });
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(el); }});
  });
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.querySelector('.lb-prev').addEventListener('click',()=>show(idx-1));
  lb.querySelector('.lb-next').addEventListener('click',()=>show(idx+1));
  lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
  document.addEventListener('keydown',e=>{ if(!lb.classList.contains('open'))return; if(e.key==='Escape')close(); if(e.key==='ArrowLeft')show(idx-1); if(e.key==='ArrowRight')show(idx+1); });
}

/* ---------- Video modal ---------- */
function buildVideoModal(){
  const vids=[...document.querySelectorAll('.vid')];
  if(!vids.length) return;
  const m=document.createElement('div'); m.className='modal'; m.setAttribute('role','dialog'); m.setAttribute('aria-modal','true');
  m.innerHTML=`<div style="position:relative;max-width:760px;width:100%">
    <button class="modal-close" aria-label="Close">×</button>
    <div class="modal-box"><img alt=""><div class="ph-msg"><span class="star">✦</span>
    <p class="serif" style="font-size:1.4rem;font-style:italic" class="mt"></p>
    <p style="color:#C9B6BA;font-size:.85rem;margin-top:10px" data-i18n="modal.note">${t('modal.note')}</p></div></div></div>`;
  document.body.appendChild(m);
  const mImg=m.querySelector('img'), mt=m.querySelector('.serif');
  let last=null;
  function open(v){ last=document.activeElement; mt.textContent=v.dataset.title||'Showreel'; mImg.src=v.querySelector('img').src; m.classList.add('open'); document.body.style.overflow='hidden'; m.querySelector('.modal-close').focus(); }
  function close(){ m.classList.remove('open'); document.body.style.overflow=''; if(last)last.focus(); }
  vids.forEach(v=>{
    v.addEventListener('click',()=>open(v));
    v.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(v); }});
  });
  m.querySelector('.modal-close').addEventListener('click',close);
  m.addEventListener('click',e=>{ if(e.target===m) close(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&m.classList.contains('open'))close(); });
}

/* ---------- Portfolio filters ---------- */
function buildFilters(){
  const bar=document.querySelector('.filters'); if(!bar)return;
  const grid=document.querySelector('.works');
  bar.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b)return;
    bar.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f=b.dataset.filter;
    grid.querySelectorAll('.work').forEach(w=>{
      w.style.display = (f==='all'||w.dataset.category===f)?'':'none';
    });
  });
}

/* ---------- Reveal ---------- */
function reveal(){
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

/* ---------- Init ---------- */
function init(){
  const h=document.getElementById('site-header'); if(h) h.innerHTML=headerHTML();
  const f=document.getElementById('site-footer'); if(f) f.innerHTML=footerHTML();

  // header scroll + mobile menu
  window.addEventListener('scroll',()=>{ const hd=document.querySelector('header'); if(hd) hd.classList.toggle('scrolled', window.scrollY>10); });
  const mt=document.getElementById('menuToggle'), nl=document.getElementById('navLinks');
  if(mt&&nl){ mt.addEventListener('click',()=>{ const o=nl.classList.toggle('open'); mt.setAttribute('aria-expanded',o); });
    nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ nl.classList.remove('open'); mt.setAttribute('aria-expanded',false); })); }
  document.querySelectorAll('.lang button').forEach(b=> b.addEventListener('click',()=>setLang(b.dataset.lang)));

  // contact form -> mailto
  const form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=encodeURIComponent(form.name.value||''), em=encodeURIComponent(form.email.value||''), msg=encodeURIComponent(form.message.value||'');
    window.location.href=`mailto:hello@taisiiapokrovska.com?subject=Project enquiry — ${n}&body=${msg}%0D%0A%0D%0A${n} (${em})`;
  });

  try{ const s=localStorage.getItem('tp-lang'); if(s&&I18N[s]) lang=s; }catch(e){}
  applyLang();
  buildFilters(); buildLightbox(); buildVideoModal(); reveal();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
