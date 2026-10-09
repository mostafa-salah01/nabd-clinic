/**
 * نبض للرعاية الطبية - Nabd Medical Care
 * قاعدة البيانات والترجمات والإعدادات الشاملة (data.js)
 * جميع النصوص والمحتوى والمسارات والبيانات الطبية
 */

const CONFIG = {
  clinicNameAr: 'نبض للرعاية الطبية',
  clinicNameEn: 'Nabd Medical Care',
  sloganAr: 'صحتك تبدأ برعاية موثوقة وموعد دقيق',
  sloganEn: 'Your Health Begins with Trusted Care and Precision',
  hotline: '16890',
  phone: '+20 2 2345 6789',
  phoneDisplay: '02 2345 6789',
  emergencyPhone: '123',
  whatsappNumber: '201234567890', // غيّر هذا الرقم لرقم الواتساب الخاص بك
  whatsappDisplay: '+20 123 456 7890',
  email: 'info@nabd-care.example.com',
  addressAr: 'شارع الثورة، مصر الجديدة، القاهرة، جمهورية مصر العربية',
  addressEn: 'Al-Thawra St., Heliopolis, Cairo, Egypt',
  workingHoursAr: 'السبت - الخميس: 8:00 ص - 10:00 م | الجمعة: عيادات الطوارئ فقط',
  workingHoursEn: 'Sat - Thu: 8:00 AM - 10:00 PM | Friday: Emergency Only',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110486.27503794189!2d31.2584643!3d30.0827258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79e57d63f0821516!2sHeliopolis%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000',
  // رابط Formspree لاستقبال رسائل التواصل والحجوزات (ضع رابطك الخاص هنا بدلاً من الرابط التجريبي)
  formspreeContactEndpoint: 'https://formspree.io/f/mqkvrkzl',
  formspreeBookingEndpoint: 'https://formspree.io/f/mqkvrkzl'
};

const IMAGES = {
  logoIcon: './images/logo-icon.png',
  hero1: './images/hero-1.jpg',
  hero2: './images/hero-2.jpg',
  about: './images/about.jpg',
  banner: './images/banner.jpg',
  ctaBg: './images/cta-bg.jpg',
  doctor01: './images/doctor-01.jpg',
  doctor02: './images/doctor-02.jpg',
  doctor03: './images/doctor-03.jpg',
  doctor04: './images/doctor-04.jpg',
  facility1: './images/facility-1.jpg',
  facility2: './images/facility-2.jpg',
  facility3: './images/facility-3.jpg'
};

const SPECIALTIES = [
  {
    id: 'internal',
    icon: 'internal',
    nameAr: 'الأمراض الباطنية والجهاز الهضمي',
    nameEn: 'Internal Medicine & Gastroenterology',
    shortDescAr: 'تشخيص دقيق وعلاج متكامل للأمراض المزمنة واضطرابات الجهاز الهضمي والسكري وضغط الدم.',
    shortDescEn: 'Comprehensive diagnosis and management of chronic diseases, gastrointestinal disorders, diabetes, and hypertension.',
    longDescAr: 'قسم الباطنية في مركز نبض يقدّم رعاية شاملة تعتمد على البروتوكولات الطبية الدولية للتشخيص الدقيق للأمراض المزمنة، مع متابعة دورية لوظائف الأعضاء الحيوية والفحوصات الوقائية.',
    longDescEn: 'Our Internal Medicine department provides holistic care following international clinical protocols for precise chronic illness management, continuous organ function tracking, and preventative screening.',
    conditionsAr: ['داء السكري من النوعين الأول والثاني', 'ارتفاع ضغط الدم والدهون الثلاثية', 'اضطرابات القولون العصبي والمعدة', 'أمراض الكبد الفيروسية والدهنية', 'فقر الدم واضطرابات المناعة'],
    conditionsEn: ['Type 1 & Type 2 Diabetes Mellitus', 'Hypertension & Lipid Disorders', 'Irritable Bowel Syndrome & Gastritis', 'Fatty & Viral Liver Conditions', 'Anemia & General Immune Disorders'],
    servicesAr: ['فحص طبي دوري شامل', 'متابعة السكري ومقاومة الإنسولين', 'علاج قرحة المعدة وجرثومة المعدة', 'تنظيم ضغط الدم بالهولتر'],
    servicesEn: ['Comprehensive Annual Health Checks', 'Insulin Resistance & Diabetes Care', 'H. Pylori & Peptic Ulcer Therapy', 'Ambulatory Blood Pressure Monitoring'],
    doctorCount: 2
  },
  {
    id: 'cardiology',
    icon: 'heart',
    nameAr: 'أمراض القلب والأوعية الدموية',
    nameEn: 'Cardiology & Vascular Medicine',
    shortDescAr: 'فحوصات القلب المتقدمة وتخطيط الإيكو لمتابعة كفاءة عضلة القلب والشرايين بدقة متناهية.',
    shortDescEn: 'Advanced cardiovascular diagnostics, echocardiography, and tailored preventive heart health programs.',
    longDescAr: 'وحدة القلب مجهزة بأحدث أجهزة رسم القلب الكهربائي وإيكو القلب بالموجات فوق الصوتية، بإشراف استشاريين متخصصين في الوقاية من الأزمات القلبية وضبط اضطرابات النبض.',
    longDescEn: 'Equipped with state-of-the-art ECG and ultrasound echocardiography devices, led by senior cardiologists focused on ischemic heart prevention and arrhythmia control.',
    conditionsAr: ['قصور الشرايين التاجية والذبحة الصدرية', 'اضطرابات ضربات القلب وخفقانه', 'ضعف واعتلال عضلة القلب', 'أمراض صمامات القلب', 'تصلب الشرايين'],
    conditionsEn: ['Coronary Artery Disease & Angina', 'Cardiac Arrhythmias & Palpitations', 'Heart Muscle Weakness & Cardiomyopathy', 'Valvular Heart Disorders', 'Atherosclerosis'],
    servicesAr: ['رسم قلب متقدم (ECG)', 'إيكو القلب بالموجات الصوتية', 'هولتر لمراقبة النبض 24-48 ساعة', 'برنامج صحة القلب الرياضي والوقائي'],
    servicesEn: ['12-Lead Electrocardiogram (ECG)', 'Transthoracic Echocardiogram', '24-48h Holter Rhythm Monitoring', 'Cardiovascular Preventive Screening'],
    doctorCount: 1
  },
  {
    id: 'pediatrics',
    icon: 'baby',
    nameAr: 'طب الأطفال وحديثي الولادة',
    nameEn: 'Pediatrics & Neonatology',
    shortDescAr: 'رعاية حنونة وشاملة لصحة أطفالكم، من متابعة النمو والتطعيمات إلى علاج أمراض الطفولة.',
    shortDescEn: 'Compassionate, specialized care for infants and children, encompassing growth tracking, vaccines, and pediatric illnesses.',
    longDescAr: 'بيئة مهيأة للأطفال تجعل زيارة الطبيب تجربة مريحة وممتعة، مع تقييم دقيق لمعالم النمو البدني والإدراكي والتغذية السليمة لكل مرحلة عمرية.',
    longDescEn: 'A child-friendly setting designed to alleviate medical anxiety, offering developmental milestone assessments, pediatric nutrition, and gentle care.',
    conditionsAr: ['نزلات البرد وحساسية الصدر للأطفال', 'اضطرابات النمو وتأخر المشي والكلام', 'الالتهابات المعوية والجفاف', 'حساسية الطعام والأكزيما التأتبية', 'حمى الأطفال والالتهابات المتكررة'],
    conditionsEn: ['Pediatric Asthma & Respiratory Allergies', 'Developmental Delays & Growth Disorders', 'Gastroenteritis & Dehydration', 'Pediatric Eczema & Food Allergies', 'Recurrent Infections & Pediatric Fevers'],
    servicesAr: ['متابعة نمو الرضع وحديثي الولادة', 'جدول التطعيمات الأساسية والإضافية', 'استشارات التغذية التكميلية', 'علاج حساسية الصدر والأنف'],
    servicesEn: ['Infant & Neonatal Growth Tracking', 'Core & Optional Vaccination Programs', 'Pediatric Weaning & Nutrition Guidance', 'Pediatric Allergy & Pulmonology Care'],
    doctorCount: 1
  },
  {
    id: 'obgyn',
    icon: 'female',
    nameAr: 'النساء والتوليد وصحة المرأة',
    nameEn: 'Obstetrics, Gynecology & Women’s Health',
    shortDescAr: 'رعاية فائقة للمرأة في كافة مراحل حياتها، ومتابعة الحمل ثلاثي ورباعي الأبعاد باحترافية.',
    shortDescEn: 'Excellence in female reproductive health, pregnancy care, and 3D/4D ultrasound fetal assessments.',
    longDescAr: 'نقدم رعاية متكاملة للأم والجنين بأحدث أجهزة السونار الملونة، مع برامج للكشف المبكر عن أورام الثدي وعنق الرحم وعلاج اضطرابات الهرمونات وتكيس المبايض.',
    longDescEn: 'Holistic care for expectant mothers and women across all life stages, featuring high-resolution color Doppler ultrasound and early detection screenings.',
    conditionsAr: ['متابعة الحمل الحرج والطبيعي', 'متلازمة تكيس المبايض (PCOS)', 'اضطرابات الدورة الشهرية والهرمونات', 'التهابات الحوض المزمنة', 'بطانة الرحم المهاجرة'],
    conditionsEn: ['High-Risk & Routine Pregnancy Care', 'Polycystic Ovary Syndrome (PCOS)', 'Hormonal & Menstrual Irregularities', 'Pelvic Inflammatory Conditions', 'Endometriosis Management'],
    servicesAr: ['سونار تفصيلي 3D/4D للجنين', 'خطة ولادة آمنة ومتابعة ما بعد الولادة', 'فحص عنق الرحم والمسحة الوقائية', 'علاج تكيس المبايض وتأخر الإنجاب'],
    servicesEn: ['3D/4D High-Definition Fetal Ultrasound', 'Safe Delivery & Postpartum Care Plans', 'Cervical Screening & Pap Smear', 'PCOS & Fertility Consultation'],
    doctorCount: 1
  },
  {
    id: 'dermatology',
    icon: 'skin',
    nameAr: 'الجلدية والليزر والتجميل الطبي',
    nameEn: 'Dermatology & Medical Cosmetology',
    shortDescAr: 'علاج متطور للأمراض الجلدية وصحة البشرة والشعر بتقنيات طبية حديثة وموثوقة.',
    shortDescEn: 'State-of-the-art dermatological therapies, medical cosmetology, and laser skin restoration.',
    longDescAr: 'تشخيص وعلاج مشاكل البشرة والشعر المستعصية، من حب الشباب وتساقط الشعر والصدفية، إلى إجراءات النضارة والترميم المعتمدة طبيًا.',
    longDescEn: 'Evidence-based treatment for acne, alopecia, psoriasis, and dermatitis, supplemented with non-invasive aesthetic dermatology.',
    conditionsAr: ['حب الشباب وآثاره والتصبغات', 'تساقط الشعر الوراثي والمناعي (الثعلبة)', 'الصدفية والأكزيما المزمنة', 'البهاق واضطرابات التصبغ', 'الفطريات والتهابات الجلد البكتيرية'],
    conditionsEn: ['Severe Acne & Hyperpigmentation', 'Androgenetic & Areata Hair Loss', 'Chronic Psoriasis & Atopic Dermatitis', 'Vitiligo & Hypopigmentation', 'Fungal & Bacterial Cutaneous Infections'],
    servicesAr: ['جلسات الميزوثيرابي والبلازما (PRP)', 'علاج الندبات وآثار الحبوب', 'فحص الشامات والزوائد الجلدية بالديرموسكوب', 'التقشير الكيميائي الطبي'],
    servicesEn: ['Mesotherapy & PRP Hair/Skin Therapies', 'Acne Scar Revision Protocols', 'Dermoscopic Mole & Lesion Screening', 'Medical Grade Chemical Peels'],
    doctorCount: 1
  },
  {
    id: 'orthopedics',
    icon: 'bone',
    nameAr: 'جراحة العظام والمفاصل والعمود الفقري',
    nameEn: 'Orthopedics & Joint Care',
    shortDescAr: 'حلول دقيقة لآلام المفاصل والخشونة وإصابات الملاعب والعمود الفقري بدون جراحة ما أمكن.',
    shortDescEn: 'Precise orthopedic evaluations, conservative joint therapies, sports injury rehabilitation, and spinal care.',
    longDescAr: 'نهج طبي وقائي وتحفظي يهدف لاستعادة الحركة والتخلص من الآلام المزمنة في الركبة والكتف والفقرات، باستخدام الحقن الموضعي وبرامج التأهيل.',
    longDescEn: 'Focused on conservative musculoskeletal medicine to restore functional mobility and alleviate joint and back pain without premature surgery.',
    conditionsAr: ['خشونة الركبة والمفاصل وتآكل الغضاريف', 'الانزلاق الغضروفي وآلام عرق النسا', 'إصابات الأربطة والأوتار الرياضية', 'هشاشة العظام وضعف الكثافة العظمية', 'آلام الكتف وتجمد المفصل'],
    conditionsEn: ['Knee Osteoarthritis & Cartilage Wear', 'Herniated Disc & Sciatic Nerve Pain', 'Sports Ligament & Tendon Injuries', 'Osteoporosis & Bone Density Loss', 'Frozen Shoulder & Rotator Cuff Tendonitis'],
    servicesAr: ['حقن البلازما والهيالورونيك للمفاصل', 'علاج آلام الظهر والرقبة التحفظي', 'تقييم هشاشة العظام بالأشعة', 'تأهيل إصابات الرياضيين'],
    servicesEn: ['Intra-Articular Hyaluronic & PRP Injections', 'Non-Surgical Spinal Pain Protocols', 'Bone Mineral Density Evaluation', 'Sports Trauma Recovery Pathways'],
    doctorCount: 1
  },
  {
    id: 'dentistry',
    icon: 'tooth',
    nameAr: 'طب وجراحة وتجميل الأسنان',
    nameEn: 'Dentistry & Oral Health',
    shortDescAr: 'ابتسامة صحية ومشرقة بأعلى معايير التعقيم وأحدث أجهزة معالجة الجذور والتركيبات.',
    shortDescEn: 'Comprehensive dental health, painless endodontics, cosmetic restorations, and strict sterilization standards.',
    longDescAr: 'عيادة أسنان متكاملة توفر علاجات خالية من الألم لحشو الجذور وتجميل الابتسامة وعلاج التهابات اللثة باستخدام أحدث أدوات التطهير الرقمي.',
    longDescEn: 'State-of-the-art dental suite delivering painless root canal therapy, teeth whitening, veneers, and periodontal management in a sterile environment.',
    conditionsAr: ['تسوس الأسنان والتهابات العصب الحادة', 'التهاب ونزيف اللثة وانحسارها', 'فقدان الأسنان واحتياج التركيبات', 'تصبغات الأسنان واصفرار المينا', 'صرير الأسنان ومشاكل مفصل الفك'],
    conditionsEn: ['Deep Dental Caries & Pulpitis', 'Periodontitis & Gingival Bleeding', 'Tooth Loss & Edentulism', 'Severe Enamel Stains & Discoloration', 'Bruxism & Temporomandibular Joint Pain'],
    servicesAr: ['حشو العصب التجميلي الرقمي في جلسة واحدة', 'تنظيف الجير وإزالة الرواسب وتلميع الأسنان', 'التركيبات الخزفية والزركونيا', 'تبييض الأسنان بالضوء البارد'],
    servicesEn: ['Single-Visit Digital Endodontics', 'Ultrasonic Scaling & Airflow Polishing', 'Zirconia & Ceramic Crowns', 'Advanced In-Clinic Teeth Whitening'],
    doctorCount: 1
  },
  {
    id: 'ophthalmology',
    icon: 'eye',
    nameAr: 'طب وجراحة العيون وتصحيح الإبصار',
    nameEn: 'Ophthalmology & Vision Care',
    shortDescAr: 'فحص قاع العين وقياس النظر الرقمي وتشخيص أمراض القرنية وضغط العين (المياه الزرقاء).',
    shortDescEn: 'Digital vision refraction, fundus examination, cornea assessments, and glaucoma intraocular monitoring.',
    longDescAr: 'فحوصات دقيقة للعين للأطفال والبالغين، وتقييم شامل للشبكية لمرضى السكري، مع قياس ضغط العين والتعامل مع جفاف العين وإجهاد الشاشات.',
    longDescEn: 'Comprehensive eye screening for adults and children, diabetic retinopathy tracking, tonometry, and dry eye relief solutions.',
    conditionsAr: ['عيوب الإبصار (قصر، طول، إستجماتزم)', 'اعتلال الشبكية السكري', 'ارتفاع ضغط العين (الجلوكوما / المياه الزرقاء)', 'المياه البيضاء وضعف حدة الرؤية', 'جفاف العين المزمن وإجهاد القراءة'],
    conditionsEn: ['Refractive Errors (Myopia, Hyperopia, Astigmatism)', 'Diabetic Retinopathy Screening', 'Glaucoma & Elevated Intraocular Pressure', 'Cataract Diagnostics & Visual Blur', 'Chronic Dry Eye & Digital Strain'],
    servicesAr: ['فحص النظر وتحديد النظارات الرقمي', 'قياس ضغط العين الدقيق بدون تلامس', 'فحص قاع العين والشبكية بالمصباح الشقي', 'علاج متلازمة جفاف العين'],
    servicesEn: ['Digital Visual Acuity & Refraction Test', 'Non-Contact Intraocular Tonometry', 'Slit-Lamp Fundus & Retina Evaluation', 'Specialized Dry Eye Management'],
    doctorCount: 1
  }
];

const CONSULTATION_TYPES = [
  {
    id: 'clinic',
    icon: 'building',
    nameAr: 'كشف بالعيادة',
    nameEn: 'In-Clinic Visit',
    taglineAr: 'فحص سريري كامل وجهاً لوجه في المركز',
    taglineEn: 'Complete face-to-face physical exam in the clinic',
    priceEg: 350,
    featuresAr: ['فحص سريري دقيق بالأجهزة الطبية', 'إمكانية إجراء التحاليل الفورية بالمعمل', 'تقرير طبي ووصفة علاجية معتمدة', 'إعادة كشف مجانية خلال 14 يوماً'],
    featuresEn: ['Direct physical examination with clinic tools', 'On-site immediate lab testing if needed', 'Certified prescription & stamped medical report', 'Free follow-up visit within 14 days'],
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular'
  },
  {
    id: 'video',
    icon: 'video',
    nameAr: 'استشارة فيديو أونلاين',
    nameEn: 'Online Video Consultation',
    taglineAr: 'تحدث مع الطبيب صوت وصورة من منزلك بأمان',
    taglineEn: 'Consult your doctor via secure HD video from home',
    priceEg: 250,
    featuresAr: ['رابط مكالمة مشفر وخاص عالي الجودة', 'مراجعة التحاليل والأشعة السابقة', 'روشتة إلكترونية رسمية تُرسل فوراً', 'توفير وقت التنقل والانتظار'],
    featuresEn: ['Encrypted, private HD video call session', 'Live review of past lab work & radiology', 'Official digital prescription sent to your email', 'Zero commute, convenient from your couch'],
    badgeAr: 'مريح وسريع',
    badgeEn: 'Convenient'
  },
  {
    id: 'phone',
    icon: 'phone',
    nameAr: 'استشارة هاتفية سريعة',
    nameEn: 'Phone Consultation',
    taglineAr: 'مكالمة صوتية لمراجعة النتائج أو الاستفسار العاجل',
    taglineEn: 'Direct audio call to review lab results or quick questions',
    priceEg: 180,
    featuresAr: ['مكالمة مباشرة مدتها 15 دقيقة', 'متابعة نتائج التحاليل مع الطبيب', 'تعديل جرعات الأدوية المستمرة', 'إرشادات أولية للحالات البسيطة'],
    featuresEn: ['Dedicated 15-minute direct doctor call', 'Immediate review of latest test results', 'Dosage adjustments for existing medications', 'Triage guidance and quick medical advice'],
    badgeAr: 'للمتابعات السريعة',
    badgeEn: 'Quick Follow-up'
  }
];

const DOCTORS = [
  {
    id: 'doc-01',
    photo: IMAGES.doctor01,
    nameAr: 'د. طارق عبد الرحمن',
    nameEn: 'Dr. Tarek Abdelrahman',
    titleAr: 'استشاري أمراض الباطنة والجهاز الهضمي',
    titleEn: 'Consultant of Internal Medicine & Gastroenterology',
    specialtyId: 'internal',
    gender: 'male',
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 142,
    availableToday: true,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'دكتوراه الأمراض الباطنية - قصر العيني، زميل الجمعية الأوروبية لأمراض الجهاز الهضمي.',
    educationEn: 'MD in Internal Medicine, Cairo University. Fellow of the European Society of Gastroenterology.',
    bioAr: 'طبيب استشاري متخصص بخبرة تفوق ستة عشر عاماً في تشخيص ومتابعة متلازمة القولون العصبي ومرض السكري واضطرابات الكبد والمناعة الذاتية.',
    bioEn: 'Senior consultant with over 16 years of expertise in managing complex irritable bowel syndrome, diabetes control, and autoimmune metabolic disorders.',
    fees: {
      clinic: 350,
      video: 250,
      phone: 180
    },
    scheduleDays: [1, 2, 3, 4, 6], // Sat, Sun, Mon, Tue, Wed (0=Sun, 6=Sat)
    timeSlots: ['10:00 AM', '11:00 AM', '01:00 PM', '04:00 PM', '06:00 PM', '08:00 PM']
  },
  {
    id: 'doc-02',
    photo: IMAGES.doctor02,
    nameAr: 'د. سارة المنشاوي',
    nameEn: 'Dr. Sarah El-Menshawy',
    titleAr: 'أخصائية طب الأطفال وحديثي الولادة',
    titleEn: 'Specialist in Pediatrics & Neonatology',
    specialtyId: 'pediatrics',
    gender: 'female',
    experienceYears: 11,
    rating: 4.95,
    reviewCount: 189,
    availableToday: true,
    languagesAr: ['العربية', 'الإنجليزية', 'الفرنسية'],
    languagesEn: ['Arabic', 'English', 'French'],
    educationAr: 'ماجستير طب الأطفال وحديثي الولادة - جامعة عين شمس، عضو الجمعية المصرية لطب الأطفال.',
    educationEn: 'M.Sc. in Pediatrics & Neonatology, Ain Shams University. Member of the Egyptian Pediatric Association.',
    bioAr: 'تتميز بأسلوب حنون ومحبوب لدى الأطفال، وتهتم بمتابعة الرضاعة والتغذية التكميلية وحساسية الصدر والتطعيمات وفق أحدث المعايير الدولية.',
    bioEn: 'Renowned for gentle pediatric care, specializing in neonatal growth trajectories, respiratory allergies, and childhood immunizations.',
    fees: {
      clinic: 320,
      video: 220,
      phone: 160
    },
    scheduleDays: [0, 1, 2, 4, 6],
    timeSlots: ['09:30 AM', '11:30 AM', '02:00 PM', '05:00 PM', '07:30 PM']
  },
  {
    id: 'doc-03',
    photo: IMAGES.doctor03,
    nameAr: 'د. كريم النجار',
    nameEn: 'Dr. Karim El-Naggar',
    titleAr: 'استشاري أمراض القلب والقسطرة التداخلية',
    titleEn: 'Consultant Cardiologist & Interventionalist',
    specialtyId: 'cardiology',
    gender: 'male',
    experienceYears: 19,
    rating: 4.88,
    reviewCount: 164,
    availableToday: false,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'دكتوراه أمراض القلب والأوعية الدموية - جامعة الإسكندرية، زميل الكلية الأمريكية لأمراض القلب (FACC).',
    educationEn: 'MD in Cardiology, Alexandria University. Fellow of the American College of Cardiology (FACC).',
    bioAr: 'خبير في الفحوصات الدقيقة لعضلة القلب وصماماته، وتنظيم ضربات القلب وعلاج ارتفاع ضغط الدم المقاوم وبرامج وقاية الشرايين التاجية.',
    bioEn: 'Pioneering cardiologist specializing in non-invasive coronary diagnostics, echocardiography, resistant hypertension, and arrhythmia management.',
    fees: {
      clinic: 450,
      video: 320,
      phone: 220
    },
    scheduleDays: [0, 2, 3, 6],
    timeSlots: ['12:00 PM', '02:30 PM', '05:30 PM', '07:00 PM', '08:30 PM']
  },
  {
    id: 'doc-04',
    photo: IMAGES.doctor04,
    nameAr: 'د. مريم الشربيني',
    nameEn: 'Dr. Mariam El-Sherbini',
    titleAr: 'استشارية النساء والتوليد وجراحة المناظير',
    titleEn: 'Consultant Obstetrician & Gynecologist',
    specialtyId: 'obgyn',
    gender: 'female',
    experienceYears: 14,
    rating: 4.92,
    reviewCount: 210,
    availableToday: true,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'دكتوراه أمراض النساء والتوليد - جامعة القاهرة، دبلوم السونار المتقدم من الكلية الملكية بلندن (MRCOG).',
    educationEn: 'MD in Obstetrics & Gynecology, Cairo University. Advanced Fetal Medicine Diploma, RCOG London.',
    bioAr: 'متخصصة في متابعة الحمل الحرج والسونار ثلاثي ورباعي الأبعاد وعلاج متلازمة تكيس المبايض واضطرابات الهرمونات بأحدث الأساليب الطبية.',
    bioEn: 'Specialized in high-risk pregnancy monitoring, 3D/4D fetal scans, hormonal balancing, and personalized women’s wellness across life stages.',
    fees: {
      clinic: 400,
      video: 280,
      phone: 200
    },
    scheduleDays: [1, 2, 4, 6],
    timeSlots: ['10:00 AM', '12:00 PM', '03:00 PM', '05:30 PM', '08:00 PM']
  },
  {
    id: 'doc-05',
    photo: null, // Initial avatar fallback
    initials: 'ن.ع',
    initialsEn: 'N.A',
    nameAr: 'د. نادية عبد العزيز',
    nameEn: 'Dr. Nadia Abdelaziz',
    titleAr: 'أخصائية الأمراض الجلدية والليزر والعناية بالبشرة',
    titleEn: 'Specialist Dermatologist & Laser Clinician',
    specialtyId: 'dermatology',
    gender: 'female',
    experienceYears: 9,
    rating: 4.87,
    reviewCount: 98,
    availableToday: true,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'ماجستير الأمراض الجلدية والتناسلية - جامعة عين شمس، دبلوم الليزر التجميلي من المعهد القومي لليزر.',
    educationEn: 'M.Sc. in Dermatology, Ain Shams University. Clinical Laser Diploma, National Institute of Laser Sciences.',
    bioAr: 'خبرة متميزة في علاج حب الشباب المستعصي، والصدفية، والإكزيما، وتساقط الشعر، وجلسات البلازما والميزوثيرابي لإعادة نضارة البشرة.',
    bioEn: 'Expertise in stubborn acne therapies, scalp restoration, psoriasis, eczema, and evidence-based clinical aesthetic rejuvenation.',
    fees: {
      clinic: 300,
      video: 230,
      phone: 170
    },
    scheduleDays: [0, 1, 3, 6],
    timeSlots: ['11:00 AM', '01:00 PM', '04:00 PM', '06:30 PM', '08:30 PM']
  },
  {
    id: 'doc-06',
    photo: null,
    initials: 'هـ.ح',
    initialsEn: 'H.H',
    nameAr: 'د. هشام حماد',
    nameEn: 'Dr. Hisham Hammad',
    titleAr: 'استشاري جراحة العظام والمفاصل والعمود الفقري',
    titleEn: 'Consultant Orthopedic & Joint Surgeon',
    specialtyId: 'orthopedics',
    gender: 'male',
    experienceYears: 18,
    rating: 4.89,
    reviewCount: 155,
    availableToday: false,
    languagesAr: ['العربية', 'الإنجليزية', 'الألمانية'],
    languagesEn: ['Arabic', 'English', 'German'],
    educationAr: 'دكتوراه جراحة العظام والمفاصل - جامعة عين شمس، زمالة جراحة المفاصل والمنظار بجامعة ميونخ ألمانيا.',
    educationEn: 'MD in Orthopedic Surgery, Ain Shams University. Munich University Joint Fellowship, Germany.',
    bioAr: 'رائد في العلاج التحفظي لخشونة المفاصل، وحقن البلازما الغنية بالصفائح، وإصابات الملاعب، وتخفيف آلام العمود الفقري بدون جراحة.',
    bioEn: 'Leading orthopedic physician specializing in conservative joint preservation, regenerative PRP injections, sports medicine, and spinal care.',
    fees: {
      clinic: 380,
      video: 260,
      phone: 190
    },
    scheduleDays: [0, 2, 4, 6],
    timeSlots: ['12:30 PM', '03:00 PM', '05:00 PM', '07:30 PM', '09:00 PM']
  },
  {
    id: 'doc-07',
    photo: null,
    initials: 'ع.ز',
    initialsEn: 'A.Z',
    nameAr: 'د. عمرو زهران',
    nameEn: 'Dr. Amr Zahran',
    titleAr: 'أخصائي طب وجراحة الأسنان وتجميل الابتسامة',
    titleEn: 'Dental Surgeon & Aesthetic Restorative Specialist',
    specialtyId: 'dentistry',
    gender: 'male',
    experienceYears: 12,
    rating: 4.93,
    reviewCount: 172,
    availableToday: true,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'ماجستير العلاج التحفظي وعلاج الجذور - جامعة القاهرة، عضو الأكاديمية الأمريكية لتجميل الأسنان (AACD).',
    educationEn: 'M.Sc. in Endodontics & Restorative Dentistry, Cairo University. AACD Active Member.',
    bioAr: 'شغوف بتطبيق أحدث تقنيات علاج الجذور بدون ألم في جلسة واحدة، وتصميم الابتسامة الرقمية وتركيبات الزيركونيا التجميلية.',
    bioEn: 'Dedicated to painless single-visit microscopic root canal therapy, digital smile makeovers, and minimally invasive aesthetic ceramics.',
    fees: {
      clinic: 300,
      video: 200,
      phone: 150
    },
    scheduleDays: [1, 2, 3, 4, 6],
    timeSlots: ['10:30 AM', '01:30 PM', '04:30 PM', '06:30 PM', '08:30 PM']
  },
  {
    id: 'doc-08',
    photo: null,
    initials: 'ر.غ',
    initialsEn: 'R.G',
    nameAr: 'د. رانيا غنيم',
    nameEn: 'Dr. Rania Ghoneim',
    titleAr: 'استشارية طب وجراحة العيون والليزك',
    titleEn: 'Consultant Ophthalmologist & Refractive Surgeon',
    specialtyId: 'ophthalmology',
    gender: 'female',
    experienceYears: 15,
    rating: 4.91,
    reviewCount: 138,
    availableToday: false,
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    educationAr: 'دكتوراه طب وجراحة العيون - جامعة عين شمس، زميل الكلية الملكية للجراحين بإدنبرة (FRCS Ed).',
    educationEn: 'MD in Ophthalmology, Ain Shams University. Fellow of the Royal College of Surgeons of Edinburgh (FRCS Ed).',
    bioAr: 'متخصصة في فحوصات اعتلال الشبكية السكري، والمياه الزرقاء، وعمليات تصحيح الإبصار بالليزك والفيمتو ليزك، وعلاج جفاف العين المزمن.',
    bioEn: 'Renowned for diabetic eye exams, glaucoma monitoring, customized refractive laser treatments, and dry eye symptom relief protocols.',
    fees: {
      clinic: 360,
      video: 250,
      phone: 180
    },
    scheduleDays: [0, 1, 3, 6],
    timeSlots: ['11:00 AM', '02:00 PM', '05:00 PM', '07:00 PM', '08:30 PM']
  }
];

const FACILITIES = [
  {
    id: 'fac-1',
    image: IMAGES.facility1,
    titleAr: 'صالة الاستقبال والانتظار المريح',
    titleEn: 'Welcoming Reception & Patient Lounge',
    descAr: 'مساحة واسعة صممت لراحتكم بأجواء هادئة ونظام حجز واستدعاء رقمي يقلل فترات الانتظار.',
    descEn: 'A tranquil, spacious lounge with digital queue management designed to minimize patient wait times.'
  },
  {
    id: 'fac-2',
    image: IMAGES.facility2,
    titleAr: 'غرف الكشف والعيادات التخصصية',
    titleEn: 'Modern Specialized Examination Suites',
    descAr: 'عيادات مجهزة بأحدث أدوات الفحص الطبي وأعلى معايير النظافة والخصوصية والراحة.',
    descEn: 'State-of-the-art clinical suites prioritizing hygienic sterilization, patient privacy, and ergonomic comfort.'
  },
  {
    id: 'fac-3',
    image: IMAGES.facility3,
    titleAr: 'معمل التحاليل والتشخيص الفوري',
    titleEn: 'Rapid On-Site Diagnostic Laboratory',
    descAr: 'أجهزة تحليل آلية دقيقة توفر نتائج الفحوصات الأساسية في دقائق لدعم سرعة اتخاذ القرار الطبي.',
    descEn: 'Automated diagnostic analyzers delivering rapid blood and biochemical results within minutes.'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    initials: 'م.أ',
    initialsEn: 'M.A',
    nameAr: 'محمود الألفي',
    nameEn: 'Mahmoud El-Alfi',
    cityAr: 'القاهرة',
    cityEn: 'Cairo',
    rating: 5,
    specialtyAr: 'باطنية',
    specialtyEn: 'Internal Medicine',
    commentAr: 'تجربة ممتازة في عيادة الباطنية مع د. طارق. التشخيص كان في غاية الدقة والمتابعة بعد الكشف ممتازة. التنظيم في المركز راقي جداً ولا يوجد انتظار طويل.',
    commentEn: 'An outstanding experience with Dr. Tarek. The diagnosis was precise and the post-visit follow-up was exceptional. Highly organized clinic with zero delay.'
  },
  {
    id: 2,
    initials: 'ن.ش',
    initialsEn: 'N.S',
    nameAr: 'نورا الشناوي',
    nameEn: 'Noura El-Shennawy',
    cityAr: 'الجيزة',
    cityEn: 'Giza',
    rating: 5,
    specialtyAr: 'أطفال',
    specialtyEn: 'Pediatrics',
    commentAr: 'د. سارة لطيفة جداً مع ابنتي وجعلتها تشعر بالاطمئنان دون خوف من الفحص. وفرت لنا نصائح تغذية قيّمة وأجابت على جميع أسئلتي بصدر رحب.',
    commentEn: 'Dr. Sarah was wonderful with my daughter, putting her completely at ease. She gave us clear pediatric nutrition advice and answered all my questions patiently.'
  },
  {
    id: 3,
    initials: 'خ.م',
    initialsEn: 'K.M',
    nameAr: 'خالد مرزوق',
    nameEn: 'Khaled Marzouk',
    cityAr: 'التجمع الخامس',
    cityEn: 'New Cairo',
    rating: 5,
    specialtyAr: 'قلب وأوعية دموية',
    specialtyEn: 'Cardiology',
    commentAr: 'استشارة الفيديو أونلاين كانت مريحة جداً لمراجعة تخطيط القلب مع د. كريم. الصوت والصورة واضحان وحصلت على الروشتة فوراً عبر البريد.',
    commentEn: 'The video consultation with Dr. Karim was remarkably smooth for reviewing my ECG. Clear HD connection and I received my digital prescription instantly.'
  },
  {
    id: 4,
    initials: 'هـ.س',
    initialsEn: 'H.S',
    nameAr: 'هدى السعدني',
    nameEn: 'Hoda El-Saadany',
    cityAr: 'مصر الجديدة',
    cityEn: 'Heliopolis',
    rating: 5,
    specialtyAr: 'نساء وتوليد',
    specialtyEn: 'Obstetrics & Gynecology',
    commentAr: 'أتابع حملي مع د. مريم، جهاز السونار ثلاثي الأبعاد لديهم عالي الدقة، واهتمام الطبيبة بالتفاصيل منحني راحة نفسية طوال شهور الحمل.',
    commentEn: 'Following my pregnancy with Dr. Mariam has been reassuring. The 3D/4D ultrasound clarity and her meticulous attention to detail gave me complete peace of mind.'
  }
];

const ARTICLES = [
  {
    id: 'art-1',
    image: IMAGES.facility2,
    categoryAr: 'صحة عامة',
    categoryEn: 'General Health',
    readTimeAr: '4 دقائق قراءة',
    readTimeEn: '4 min read',
    dateAr: '15 مايو 2026',
    dateEn: 'May 15, 2026',
    titleAr: 'كيف تكتشف أعراض مقاومة الإنسولين مبكراً وطرق ضبطها بأسلوب الحياة؟',
    titleEn: 'Early Signs of Insulin Resistance and How Lifestyle Adjustments Help',
    excerptAr: 'تعرف على الإشارات التحذيرية الخفية التي يرسلها جسمك عند بداية اضطراب استجابة الخلايا لهرمون الإنسولين والخطوات العملية للوقاية.',
    excerptEn: 'Discover the subtle warning signs your body sends when cell insulin sensitivity drops and practical steps to maintain metabolic health.',
    contentAr: [
      'تعتبر مقاومة الإنسولين واحدة من أكثر الحالات الأيضية انتشاراً في العصر الحديث، وتحدث عندما لا تستجيب خلايا العضلات والدهون والكبد بشكل فعال لهرمون الإنسولين، مما يجبر البنكرياس على إفراز كميات إضافية للحفاظ على مستويات السكر في الدم ضمن المعدل الطبيعي.',
      'تشمل الأعراض الشائعة: الشعور بالإرهاق بعد الوجبات الغنية بالنشويات، صعوبة نزول الوزن خاصة في محيط الخصر، ظهور زوائد جلدية أو مناطق داكنة في ثنايا الرقبة، واشتهاء السكريات بشكل متكرر.',
      'الوقاية والتعامل المبكر يعتمدان على: زيادة النشاط البدني المعتدل كالمشي السريع لمدة 30 دقيقة يومياً، استبدال الكربوهيدرات المكررة بالألياف والحبوب الكاملة، وتناول البروتين الصحي مع كل وجبة، بالإضافة إلى الفحص المخبري الدوري لمستوى HOMA-IR والسكر التراكمي.'
    ],
    contentEn: [
      'Insulin resistance is one of the most prevalent metabolic conditions today. It occurs when muscle, fat, and liver cells do not respond effectively to insulin, prompting the pancreas to produce more insulin to manage blood glucose levels.',
      'Common early indicators include fatigue after carb-heavy meals, difficulty losing abdominal weight, the appearance of skin tags or darkened skin in neck creases, and persistent cravings for sweets.',
      'Proactive management revolves around moderate daily movement such as a brisk 30-minute walk, swapping refined grains for high-fiber whole foods, pairing protein with meals, and regular screening with fasting glucose and HbA1c tests.'
    ],
    takeawaysAr: [
      'الكشف المبكر يحمي من تطور الحالة إلى السكري من النوع الثاني.',
      'المشي اليومي بعد الوجبات يساعد الخلايا على امتصاص الجلوكوز بكفاءة.',
      'استشر طبيب الباطنة لإجراء الفحوصات الأيضية الملائمة.'
    ],
    takeawaysEn: [
      'Early detection prevents progression toward Type 2 Diabetes.',
      'A light post-meal walk directly aids muscle glucose uptake.',
      'Consult an internal medicine specialist for accurate metabolic profiling.'
    ]
  },
  {
    id: 'art-2',
    image: IMAGES.hero2,
    categoryAr: 'صحة القلب',
    categoryEn: 'Heart Health',
    readTimeAr: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    dateAr: '08 مايو 2026',
    dateEn: 'May 08, 2026',
    titleAr: 'العادات اليومية البسيطة التي تحمي عضلة القلب وتخفض ضغط الدم',
    titleEn: 'Simple Daily Habits That Strengthen Your Heart Muscle and Lower Blood Pressure',
    excerptAr: 'دليلك الطبي لحماية شرايين القلب من الإجهاد اليومي، وكيف تؤثر ساعات النوم والملح والتوتر على صحة الأوعية الدموية.',
    excerptEn: 'A clinical guide to protecting your coronary arteries from everyday strain, examining how sleep, sodium, and stress influence vascular vitality.',
    contentAr: [
      'يعمل القلب كالمضخة الرئيسية التي تغذي مليارات الخلايا في جسم الإنسان دون توقف. وتشير الدراسات الطبية إلى أن أكثر من 80% من النوبات القلبية المبكرة يمكن الوقاية منها من خلال تغييرات مدروسة في نمط الحياة اليومي.',
      'العامل الأول هو خفض استهلاك ملح الصوديوم في الطعام، حيث تستهلك الأغذية المصنعة والمعلبة كميات تفوق احتياج الجسم وتتسبب في احتباس السوائل وارتفاع ضغط الدم. كما أن النوم المنتظم لمدة 7 إلى 8 ساعات ليلاً يمنح الجهاز العصبي فرصة لخفض هرمونات التوتر كالكورتيزول والأدرينالين.',
      'كما نوصي بضرورة قياس ضغط الدم بانتظام في المنزل وتدوين القراءات، ومراجعة طبيب القلب فور الشعور بأي ألم ضاغط في منتصف الصدر أو ضيق تنفس غير مبرر مع المجهود.'
    ],
    contentEn: [
      'The heart works continuously to nourish billions of cells throughout your body. Clinical evidence indicates that up to 80% of premature cardiovascular events are preventable through mindful lifestyle practices.',
      'A primary step is moderating dietary sodium, particularly found in processed meals, which promotes fluid retention and increases arterial tension. Getting 7 to 8 hours of restorative sleep allows the sympathetic nervous system to dial down cortisol and adrenaline spikes.',
      'We recommend keeping a routine home blood pressure log and consulting a cardiologist immediately upon experiencing central chest tightness or unusual shortness of breath during exertion.'
    ],
    takeawaysAr: [
      'ضغط الدم الطبيعي هو أقل من 120/80 ملم زئبق.',
      'تقليل الأطعمة المصنعة يخفض استهلاك الصوديوم بصورة ملموسة.',
      'المتابعة الدورية بعد سن الأربعين ضرورة وقائية.'
    ],
    takeawaysEn: [
      'Normal resting blood pressure is generally below 120/80 mmHg.',
      'Minimizing processed foods cuts excessive sodium intake quickly.',
      'Routine cardiovascular screening after age 40 is a vital safeguard.'
    ]
  },
  {
    id: 'art-3',
    image: IMAGES.facility1,
    categoryAr: 'طب الأطفال',
    categoryEn: 'Pediatrics',
    readTimeAr: '3 دقائق قراءة',
    readTimeEn: '3 min read',
    dateAr: '28 أبريل 2026',
    dateEn: 'Apr 28, 2026',
    titleAr: 'تغذية الرضيع في عامه الأول: متى وكيف تبدأ تقديم الأطعمة الصلبة؟',
    titleEn: 'Infant Nutrition in the First Year: When and How to Introduce Solid Foods',
    excerptAr: 'إرشادات استشارية للأمهات حول علامات جاهزية الطفل لتناول الطعام، وترتيب إدخال الخضراوات والفواكه بأمان.',
    excerptEn: 'Pediatric guidelines on recognizing developmental readiness signs for complementary feeding and introducing diverse nutrients safely.',
    contentAr: [
      'توصي منظمة الصحة العالمية والأكاديمية الأمريكية لطب الأطفال بالاعتماد على الرضاعة الطبيعية المطلقة خلال الأشهر الستة الأولى من عمر الطفل، ثم البدء بإدخال الأغذية التكميلية تدريجياً مع استمرار الرضاعة.',
      'تشمل علامات جاهزية الرضيع: القدرة على إسناد رأسه والجلوس بمساعدة خفيفة، اهتمامه بطعام الكبار، واختفاء منعكس دفع الطعام باللسان إلى الخارج. نبدأ عادة بخضراوات مهروسة جيداً مثل الكوسا والجزر والبطاطا، مع تقديم صنف واحد لمدة ثلاثة أيام للتأكد من عدم وجود تحسس.',
      'يجب تجنب إضافة الملح والسكر وعسل النحل للطفل قبل إتمام عامه الأول حفاظاً على صحة كليتيه وجهازه الهضمي.'
    ],
    contentEn: [
      'The World Health Organization and pediatric academies recommend exclusive breastfeeding for the first six months, followed by the gradual introduction of nutrient-dense solids alongside nursing.',
      'Readiness signs include steady head control, sitting with minimal support, curiosity about meal times, and diminution of the tongue-thrust reflex. Start with single-ingredient pureed vegetables like zucchini, carrots, or sweet potatoes, waiting three days before introducing new foods to monitor tolerance.',
      'Avoid adding honey, salt, or refined sugars before the first birthday to protect immature infant kidneys and immune resilience.'
    ],
    takeawaysAr: [
      'الرضاعة تبقى المصدر الغذائي الأساسي خلال العام الأول.',
      'يمنع عسل النحل منعاً باتاً قبل إتمام العام الأول.',
      'استشيري طبيب الأطفال لتخصيص جدول تغذية مناسب لوزن طفلك.'
    ],
    takeawaysEn: [
      'Milk remains the primary nutritional baseline throughout infancy.',
      'Raw honey is strictly contraindicated before 12 months.',
      'Consult your pediatrician to customize a feeding schedule suited to your baby.'
    ]
  },
  {
    id: 'art-4',
    image: IMAGES.facility3,
    categoryAr: 'صحة المرأة',
    categoryEn: 'Women’s Health',
    readTimeAr: '4 دقائق قراءة',
    readTimeEn: '4 min read',
    dateAr: '20 أبريل 2026',
    dateEn: 'Apr 20, 2026',
    titleAr: 'تكيس المبايض (PCOS): الأسباب والحقائق وخطة العلاج المتكاملة',
    titleEn: 'Polycystic Ovary Syndrome (PCOS): Realities, Root Causes, and Holistic Care',
    excerptAr: 'تصحيح المفاهيم الخاطئة حول متلازمة تكيس المبايض، وكيف يساعد التوازن الغذائي والعلاجي في استعادة التوازن الهرموني.',
    excerptEn: 'Dispelling myths surrounding PCOS and outlining how targeted dietary care, clinical diagnostics, and therapies restore hormonal harmony.',
    contentAr: [
      'تعد متلازمة تكيس المبايض من أكثر الاضطرابات الهرمونية شيوعاً بين النساء في سن الإنجاب، وهي ليست مجرد تكيسات ميكانيكية، بل حالة أيضية ترتبط ارتباطاً وثيقاً بزيادة هرمونات الذكورة النسبية ومقاومة الإنسولين.',
      'تظهر الأعراض في صورة عدم انتظام الدورة الشهرية، تساقط شعر فروة الرأس، زيادة شعر الوجه أو حب الشباب العنيد، وتقلبات المزاج. التشخيص الدقيق يحتاج إلى فحص بالسونار مع تحاليل هرمونية في أيام محددة من الدورة.',
      'خطة العلاج تشمل تنظيم التغذية للحد من الالتهاب ومقاومة الإنسولين، إلى جانب العلاجات الدوائية الموجهة لتنظيم التبويض وحماية بطانة الرحم.'
    ],
    contentEn: [
      'Polycystic Ovary Syndrome is among the most frequent endocrine conditions affecting reproductive-age women. It is primarily a metabolic condition tied to relative hyperandrogenism and cellular insulin resistance.',
      'Key signs include irregular cycles, scalp thinning, excess facial hair, stubborn adult acne, and mood fluctuations. Accurate diagnosis involves pelvic ultrasound combined with hormonal blood panels on specific cycle days.',
      'Therapeutic pathways integrate an anti-inflammatory dietary regimen to improve insulin sensitivity with targeted medical interventions supporting ovulation and endometrial safety.'
    ],
    takeawaysAr: [
      'تكيس المبايض حالة قابلة للإدارة والتحسن بشكل كبير.',
      'التغذية والرياضة حجر الزاوية في استعادة التوازن الهرموني.',
      'المتابعة المنتظمة مع طبيبة النساء تضمن الخصوبة وصحة الرحم.'
    ],
    takeawaysEn: [
      'PCOS is highly manageable with customized lifestyle and medical care.',
      'Balanced nutrition and activity form the bedrock of hormonal recovery.',
      'Regular gynecological follow-ups safeguard reproductive vitality.'
    ]
  },
  {
    id: 'art-5',
    image: IMAGES.about,
    categoryAr: 'صحة العظام',
    categoryEn: 'Orthopedics',
    readTimeAr: '4 دقائق قراءة',
    readTimeEn: '4 min read',
    dateAr: '11 أبريل 2026',
    dateEn: 'Apr 11, 2026',
    titleAr: 'كيف تحمي مفاصل الركبة والظهر أثناء ساعات العمل المكتبي الطويلة؟',
    titleEn: 'Ergonomic Strategies to Protect Your Knees and Spine During Long Desk Hours',
    excerptAr: 'نصائح استشاري العظام لترتيب مكتبك بالشكل الصحيح وتمارين الإطالة البسيطة لمنع الانزلاق الغضروفي والخشونة المبكرة.',
    excerptEn: 'Orthopedic guidance for ergonomic desk setups and micro-stretching routines to safeguard spinal discs and prevent premature cartilage wear.',
    contentAr: [
      'تفرض الحياة المعاصرة ساعات جلوس طويلة أمام شاشات الحواسيب، مما يولد ضغطاً مستمراً على الفقرات القطنية وغضاريف الركبتين ويزيد من احتمالية تيبس العضلات والتهاب الأوتار.',
      'لتقليل هذا الضغط، يجب ضبط ارتفاع الكرسي بحيث تكون الركبتان بزاوية 90 درجة مع استواء القدمين تماماً على الأرض، وتكون الشاشة بمستوى النظر المباشر لتجنب انحناء الرقبة إلى الأمام.',
      'نوصي بقاعدة "20-20": كل نصف ساعة، قف لمدة دقيقة واحدة، وتحرك وقم بإطالة خفيفة لعضلات الظهر والفخذين لتحفيز تدفق الدم وتغذية الغضاريف المفصلية.'
    ],
    contentEn: [
      'Desk-bound work subjects lumbar vertebrae and knee cartilage to static loads, elevating the likelihood of myofascial tension, postural fatigue, and tendon strain.',
      'To mitigate strain, adjust chair height so knees rest at 90 degrees with feet flat on the floor, keeping monitors at direct eye level to curb forward head posture.',
      'Adopt the 30-minute micro-break rule: stand up briefly, walk across the room, and perform gentle hamstring and spine stretches to restore disc hydration and circulation.'
    ],
    takeawaysAr: [
      'الجلوس المستمر لأكثر من ساعتين يضاعف الضغط على الفقرات.',
      'تمارين الإطالة الخفيفة تعيد تنشيط الدورة الدموية في دقائق.',
      'استشر أخصائي العظام عند استمرار آلام الظهر لأكثر من أسبوعين.'
    ],
    takeawaysEn: [
      'Prolonged sitting without breaks concentrates static pressure on discs.',
      'Brief stretch intervals revive musculoskeletal circulation promptly.',
      'Seek clinical evaluation if back pain persists beyond two weeks.'
    ]
  },
  {
    id: 'art-6',
    image: IMAGES.banner,
    categoryAr: 'العناية بالبشرة',
    categoryEn: 'Dermatology',
    readTimeAr: '3 دقائق قراءة',
    readTimeEn: '3 min read',
    dateAr: '02 أبريل 2026',
    dateEn: 'Apr 02, 2026',
    titleAr: 'الدليل الطبي لاختيار واقي الشمس المناسب لنوع بشرتك وحمايتها من التصبغات',
    titleEn: 'A Dermatologist’s Guide to Choosing Sunscreen Suited to Your Skin Type',
    excerptAr: 'فهم الفروق بين الواقي الكيميائي والفيزيائي، وكيف تمنع الأشعة فوق البنفسجية من تسريع شيخوخة خلايا البشرة.',
    excerptEn: 'Understanding mineral versus chemical filters, and how daily broad-spectrum shielding halts UV-induced pigmentation and photoaging.',
    contentAr: [
      'التعرض اليومي للأشعة فوق البنفسجية UVA و UVB دون حماية يعد المسؤول الرئيسي عن أكثر من 80% من مظاهر شيخوخة البشرة المبكرة، وتكون التصبغات والبقع الداكنة وتلف ألياف الكولاجين.',
      'أصحاب البشرة الدهنية والمختلطة يستفيدون من التركيبات الخفيفة الهلامية (Gel) التي لا تسد المسام، بينما تفضل البشرة الجافة والحساسة التركيبات الكريمية المرطبة المحتوية على واقيات فيزيائية كأكسيد الزنك.',
      'يجب وضع كمية كافية (مقدار إصبعين للوجه والرقبة) قبل الخروج بـ 20 دقيقة، وإعادة التطبيق كل ساعتين أثناء التواجد في الشمس المباشرة للحفاظ على الفعالية القصوى.'
    ],
    contentEn: [
      'Unprotected daily exposure to UVA and UVB rays accounts for the majority of premature photoaging, contributing directly to dark spots and structural collagen breakdown.',
      'Oily and blemish-prone complexions benefit from lightweight non-comedogenic gels, while dry and sensitive skins thrive on hydrating creams formulated with zinc oxide.',
      'Apply an adequate dose (the two-finger rule for face and neck) twenty minutes prior to stepping outside, re-applying every two hours under direct solar exposure.'
    ],
    takeawaysAr: [
      'واقي الشمس خطوة أساسية صيفاً وشتاءً داخل المنزل وخارجه.',
      'اختر مؤشر حماية SPF 50 واسع الطيف (Broad Spectrum).',
      'العناية الوقائية بالبشرة تجنبك تكاليف جلسات إزالة التصبغات لاحقاً.'
    ],
    takeawaysEn: [
      'Broad-spectrum sun care is essential year-round, rain or shine.',
      'Select SPF 50 with certified broad-spectrum UVA/UVB defense.',
      'Preventive photo-protection averts stubborn hyperpigmentation.'
    ]
  }
];

const FAQS = [
  {
    id: 'faq-1',
    categoryAr: 'الحجز والمواعيد',
    categoryEn: 'Booking & Scheduling',
    qAr: 'كيف يمكنني حجز موعد كشف أو استشارة مع الطبيب؟',
    qEn: 'How can I book an appointment or consultation with a doctor?',
    aAr: 'يمكنك الحجز بسهولة عبر موقعنا في 4 خطوات بسيطة: اختر التخصص والطبيب ونوع الاستشارة، ثم حدد اليوم والوقت المناسب، وأدخل بياناتك لتأكيد الحجز فورياً والحصول على رقم الحجز. كما يمكنك الحجز عبر الهاتف أو الواتساب.',
    aEn: 'You can book seamlessly on our website in 4 quick steps: choose specialty, doctor, and consultation mode, select your preferred date and slot, and enter your details to receive an instant confirmation code. You can also book via phone or WhatsApp.'
  },
  {
    id: 'faq-2',
    categoryAr: 'الحجز والمواعيد',
    categoryEn: 'Booking & Scheduling',
    qAr: 'هل يمكنني تعديل موعدي أو إلغاؤه لاحقاً؟',
    qEn: 'Can I reschedule or cancel my booking later?',
    aAr: 'نعم بكل تأكيد. يمكنك الدخول إلى صفحة "حجوزاتي" في أي وقت لعرض تفاصيل حجزك، والضغط على زر "إلغاء الحجز" أو "تعديل الموعد" لاختيار موعد جديد بدون أي رسوم إضافية، شريطة أن يتم ذلك قبل الموعد بساعتين على الأقل.',
    aEn: 'Absolutely. You can navigate to "My Bookings" anytime to view your reservation details and click "Cancel" or "Reschedule" to pick a new date at no extra charge, provided it is done at least 2 hours prior to your scheduled time.'
  },
  {
    id: 'faq-3',
    categoryAr: 'الاستشارات الأونلاين',
    categoryEn: 'Online Consultations',
    qAr: 'كيف تتم استشارة الفيديو أونلاين وما المتطلبات؟',
    qEn: 'How does an online video consultation work and what are the requirements?',
    aAr: 'بعد تأكيد حجز استشارة الفيديو، ستتلقى رابطاً مشفراً وآمناً لغرفة المكالمة الطبية. كل ما تحتاجه هو هاتف ذكي أو جهاز كمبيوتر متصل بالإنترنت ومزود بكاميرا وميكروفون. يمكنك خلال المكالمة عرض تحاليلك وأشعتك على الطبيب والحصول على روشتة إلكترونية معتمدة.',
    aEn: 'Upon confirming your video consultation, you receive a secure encrypted link to the medical room. All you need is a smartphone or laptop with internet access, camera, and microphone. You can share your test reports live and receive an official digital prescription.'
  },
  {
    id: 'faq-4',
    categoryAr: 'الاستشارات الأونلاين',
    categoryEn: 'Online Consultations',
    qAr: 'هل الروشتة الصادرة عن الاستشارة الأونلاين معتمدة في الصيدليات؟',
    qEn: 'Is a digital prescription issued during an online consult accepted at pharmacies?',
    aAr: 'نعم، الروشتة الإلكترونية الصادرة عن أطباء مركز نبض تحتوي على بيانات الطبيب ورقم ترخيص مزاولة المهنة وختم المركز الرقمي ورمز QR للتحقق، وهي معتمدة للصرف في الصيدليات ولأغراض المتابعة.',
    aEn: 'Yes. Digital prescriptions from Nabd Medical Care carry the doctor’s credentials, clinical license number, digital clinic seal, and verification QR code, making them valid for pharmacy dispensing.'
  },
  {
    id: 'faq-5',
    categoryAr: 'الدفع والتأمين',
    categoryEn: 'Payment & Insurance',
    qAr: 'ما هي طرق الدفع المتاحة في المركز وللاستشارات الأونلاين؟',
    qEn: 'What payment options are accepted for clinic visits and online sessions?',
    aAr: 'في المركز: نقبل الدفع النقدي وجميع بطاقات الائتمان والخصم المباشر (Visa / Mastercard) والمحافظ الإلكترونية (فودافون كاش، إنستاباي). للاستشارات الأونلاين: يتوفر الدفع المسبق عبر إنستاباي أو البطاقات البنكية.',
    aEn: 'At the clinic: cash, all debit/credit cards (Visa/Mastercard), and mobile wallets (InstaPay, Vodafone Cash) are accepted. For online consultations, advance payment via InstaPay or card is supported.'
  },
  {
    id: 'faq-6',
    categoryAr: 'الدفع والتأمين',
    categoryEn: 'Payment & Insurance',
    qAr: 'هل تتعاملون مع شركات التأمين الصحي الخاصة ونقابات المهن؟',
    qEn: 'Do you work with private health insurance companies and professional syndicates?',
    aAr: 'نعم، يتعاقد مركز نبض مع كبرى شركات التأمين الطبي في مصر (مثل أكسا، بوبا، أليانز، ميدنت) ومع نقابات الأطباء والمهندسين والتجاريين. يرجى إبراز بطاقة التأمين وبطاقة الرقم القومي عند شباك الاستقبال.',
    aEn: 'Yes. Nabd Care is networked with leading medical insurers in Egypt (including AXA, Bupa, Allianz, MedNet) as well as major professional syndicates. Please present your insurance ID card at our front desk.'
  },
  {
    id: 'faq-7',
    categoryAr: 'سياسات الكشف',
    categoryEn: 'Clinic Policies',
    qAr: 'هل الكشف بالعيادة يشمل إعادة كشف (استشارة) مجانية؟',
    qEn: 'Does an in-clinic visit include a complimentary follow-up consultation?',
    aAr: 'نعم، يمنحك كل كشف بالعيادة حق إعادة الكشف (استشارة متابعة) مجاناً لدى نفس الطبيب خلال 14 يوماً من تاريخ الزيارة الأولى، وذلك لمراجعة نتائج التحاليل والأشعة وتقييم التحسن الدوائي.',
    aEn: 'Yes. Every paid in-clinic consultation entitles you to one complimentary follow-up with the same doctor within 14 calendar days to review lab work and evaluate clinical response.'
  },
  {
    id: 'faq-8',
    categoryAr: 'سياسات الكشف',
    categoryEn: 'Clinic Policies',
    qAr: 'ماذا أفعل في الحالات الطارئة والعاجلة؟',
    qEn: 'What should I do in an emergency situation?',
    aAr: 'موقعنا مخصص لحجز الاستشارات والعيادات المجدولة. في الحالات الطارئة والحرجة (مثل آلام الصدر الشديدة، الإغماء، صعوبة التنفس الحادة، أو النزيف)، يرجى الاتصال فوراً بالإسعاف على الرقم 123 أو التوجه لأقرب طوارئ مستشفى.',
    aEn: 'Our booking system is intended for scheduled elective consultations. In critical life-threatening emergencies (e.g., severe chest pain, loss of consciousness, acute respiratory distress), please call 123 immediately or proceed to the nearest hospital emergency room.'
  },
  {
    id: 'faq-9',
    categoryAr: 'الخدمات والتحاليل',
    categoryEn: 'Services & Diagnostics',
    qAr: 'هل يقدم المركز خدمات سحب العينات والتحاليل المخبرية الفورية؟',
    qEn: 'Does the clinic offer on-site laboratory testing and rapid blood work?',
    aAr: 'نعم، يضم المركز معملاً تحليلياً متكاملاً لسحب عينات الدم والبول، وإجراء تحاليل السكر والدهون ووظائف الكبد والكلى وصورة الدم الكاملة (CBC) وإيكو القلب مع استلام النتائج في أسرع وقت.',
    aEn: 'Yes. Our integrated on-site diagnostic lab conducts routine and urgent panels (CBC, liver/kidney profiles, lipid screens, glucose, cardiac markers) with swift turnaround times to assist doctor decisions.'
  },
  {
    id: 'faq-10',
    categoryAr: 'الخصوصية والبيانات',
    categoryEn: 'Privacy & Data Protection',
    qAr: 'كيف تضمنون خصوصية وسرية بياناتي الطبية والشخصية؟',
    qEn: 'How do you safeguard patient confidentiality and private health records?',
    aAr: 'نلتزم بأعلى معايير السرية الطبية وأخلاقيات المهنة. سجلاتك الطبية وتفاصيل استشاراتك مشفرة ولا يطلع عليها سوى طبيبك المعالج وفريق التمريض المختص. في هذا الموقع التجريبي، تبقى بيانات حجزك مخزنة محلياً في متصفحك فقط.',
    aEn: 'We adhere to stringent medical confidentiality codes. Medical records and consultation notes are strictly accessible only by your treating doctor and clinical care team. On this demo website, your booking details remain strictly on your local browser.'
  }
];

const STATS = [
  { id: 'doctors', number: 25, suffix: '+', labelAr: 'طبيباً واستشارياً معتمداً', labelEn: 'Certified Doctors & Consultants' },
  { id: 'patients', number: 15000, suffix: '+', labelAr: 'مريض تم علاجهم بنجاح', labelEn: 'Satisfied Patients Treated' },
  { id: 'specialties', number: 12, suffix: '', labelAr: 'عيادة تخصصية متكاملة', labelEn: 'Specialized Clinical Units' },
  { id: 'experience', number: 18, suffix: '+', labelAr: 'عاماً من الخبرة والريادة', labelEn: 'Years of Medical Excellence' }
];

const I18N = {
  ar: {
    meta: {
      siteName: 'نبض للرعاية الطبية',
      siteDescription: 'مركز نبض للرعاية الطبية - حجز استشارات طبية وكشف فوري مع نخبة من الاستشاريين والأطباء المعتمدين في القاهرة.'
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      specialties: 'التخصصات',
      doctors: 'الأطباء',
      booking: 'احجز الآن',
      myBookings: 'حجوزاتي',
      blog: 'نصائح صحية',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      langToggle: 'English'
    },
    topbar: {
      emergencyHotline: 'طوارئ نبض:',
      workingHours: 'ساعات العمل:',
      phone: 'للحجز المباشر:'
    },
    hero: {
      badge: 'الرعاية الصحية الأقرب إليك',
      title: 'صحتك تبدأ بموعد واحد ورعاية تستحقها',
      subtitle: 'نجمع لك نخبة من كبار الاستشاريين في 12 تخصصاً دقيقاً مع خيارات حجز مرنة: كشف بالعيادة، استشارة فيديو أونلاين، أو مكالمة هاتفية سريعة.',
      ctaBook: 'احجز استشارتك الآن',
      ctaDoctors: 'تصفح نخبة الأطباء',
      quickBarTitle: 'بحث سريع عن موعد متاح',
      selectSpecialty: 'اختر التخصص الطبي',
      allSpecialties: 'جميع التخصصات',
      selectType: 'نوع الاستشارة',
      findAppointment: 'ابحث عن موعد'
    },
    features: {
      item1Title: 'حجز فوري ومؤكد',
      item1Desc: 'تأكيد موعدك بثوانٍ مع تذكير عبر الواتساب والرسائل.',
      item2Title: 'أطباء معتمدون',
      item2Desc: 'نخبة من حملة الدكتوراه والزمالات الدولية في كل تخصص.',
      item3Title: 'استشارة فيديو آمنة',
      item3Desc: 'تواصل مباشر صوت وصورة من منزلك بروشتة رقمية رسمية.',
      item4Title: 'مواعيد مرنة ودقيقة',
      item4Desc: 'مواعيد صباحية ومسائية تناسب جدولك مع التزام بالوقت.'
    },
    specialtiesSection: {
      badge: 'عياداتنا التخصصية',
      title: 'رعاية شاملة تغطي كافة احتياجات أسرتك',
      subtitle: 'اختر التخصص المطلوب للاطلاع على قائمة الأطباء المتاحين وحجز موعدك بسهولة.',
      viewAll: 'عرض جميع التخصصات',
      viewDoctors: 'عرض أطباء التخصص',
      doctorsCount: 'أطباء متاحون'
    },
    featuredDoctors: {
      badge: 'نخبة الكفاءات الطبية',
      title: 'أطباؤنا المميزون في خدمتك',
      subtitle: 'فريق طبي متكامل بخبرات استشارية عالية وتقييمات استثنائية من المرضى.',
      availableToday: 'متاح اليوم',
      rating: 'تقييم',
      consultationFrom: 'سعر الكشف يبدأ من',
      bookDoctor: 'احجز كشفاً',
      viewProfile: 'الملف الشخصي',
      viewAllDoctors: 'تصفح جميع الأطباء'
    },
    howItWorks: {
      badge: 'بساطة وسرعة',
      title: 'كيف تحجز موعدك في 3 خطوات بسيطة؟',
      step1Num: '01',
      step1Title: 'اختر الطبيب والتخصص',
      step1Desc: 'تصفح أطباء المركز، واطلع على المؤهلات والتقييمات وسعر كل نوع كشف.',
      step2Num: '02',
      step2Title: 'حدد اليوم والوقت المناسب',
      step2Desc: 'اختر الموعد المتاح من جدول الطبيب التفاعلي ونوع الاستشارة (عيادة / فيديو / هاتف).',
      step3Num: '03',
      step3Title: 'أكّد الحجز واحصل على الإشعار',
      step3Desc: 'أدخل بياناتك لتصلك رسالة التأكيد برقم الحجز مع إمكانية الإرسال عبر الواتساب فوراً.'
    },
    consultationModes: {
      badge: 'خيارات تناسب ظروفك',
      title: 'أنواع الاستشارات الطبية في مركز نبض',
      subtitle: 'نوفر لك خيارات متنوعة لتلقي الرعاية الطبية سواء في المركز أو من منزلك.',
      currency: 'ج.م',
      bookThisMode: 'احجز هذا النوع'
    },
    statsSection: {
      title: 'أرقام تعكس ثقة مرضانا وتميز رعايتنا'
    },
    facilitiesSection: {
      badge: 'بيئة علاجية متطورة',
      title: 'مرافق المركز والتقنيات الطبية',
      subtitle: 'صممنا مركز نبض ليوفر أعلى درجات الراحة والتعقيم والسلامة لجميع المراجعين.',
      clickToEnlarge: 'اضغط لتكبير الصورة'
    },
    testimonialsSection: {
      badge: 'تجارب حقيقية',
      title: 'ماذا يقول مرضانا عن تجربتهم معنا؟',
      subtitle: 'فخورون بثقة آلاف المرضى ونسعى دوماً للارتقاء بجودة خدماتنا الطبية.'
    },
    ctaSection: {
      title: 'صحتك وراحة بالك تستحق أفضل رعاية طبية',
      subtitle: 'لا تؤجل الاطمئنان على صحتك وصحة أسرتك. احجز موعدك الآن مع استشاري متخصص في دقائق معدودة.',
      button: 'احجز موعدك الآن'
    },
    footer: {
      aboutText: 'مركز نبض للرعاية الطبية يقدم خدمات طبية واستشارية متكاملة وفق أحدث البروتوكولات العالمية، مع رعاية إنسانية راقية تضع صحة المريض في صدارة أولوياتها.',
      quickLinks: 'روابط سريعة',
      specialties: 'أهم التخصصات',
      contactInfo: 'معلومات الاتصال',
      workingHours: 'أوقات العمل',
      copyright: 'جميع الحقوق محفوظة © 2026 مركز نبض للرعاية الطبية.',
      medicalDisclaimer: 'تنبيه طبي: المحتوى المنشور للتوعية الصحية العامة فقط ولا يغني بأي حال عن استشارة الطبيب المختص أو الفحص السريري المباشر. في الحالات الطارئة والحرجة، يرجى التوجه فوراً لأقرب قسم طوارئ أو الاتصال برقم الإسعاف (123).',
      demoNotice: 'ملاحظة: هذا موقع إلكتروني تجريبي (Demo) لأغراض العرض والتجربة فقط. البيانات لا تجمع بشكل فعلي وتبقى مخزنة في متصفحك محلياً.'
    },
    doctorsPage: {
      badge: 'فريقنا الطبي',
      title: 'نخبة الأطباء والاستشاريين',
      subtitle: 'ابحث عن طبيبك المفضل وفلتر حسب التخصص ونوع الاستشارة وتوفر اليوم.',
      searchPlaceholder: 'ابحث باسم الطبيب أو اللقب...',
      filterSpecialty: 'التخصص الطبي',
      filterType: 'نوع الاستشارة',
      filterGender: 'الجنس',
      allGenders: 'الكل',
      male: 'طبيب',
      female: 'طبيبة',
      availableTodayOnly: 'متاح اليوم فقط',
      sortBy: 'ترتيب حسب',
      sortRating: 'الأعلى تقييماً',
      sortPriceAsc: 'الأقل سعراً',
      sortPriceDesc: 'الأعلى سعراً',
      clearFilters: 'إعادة ضبط الفلاتر',
      resultsCount: 'طبيب متاح',
      noResultsTitle: 'لم نجد أطباء يطابقون بحثك',
      noResultsDesc: 'جرب تغيير معايير البحث أو إعادة ضبط الفلاتر للاطلاع على قائمة الأطباء المتاحة.'
    },
    doctorDetailsPage: {
      backToDoctors: 'العودة لقائمة الأطباء',
      experienceYears: 'سنوات خبرة',
      ratingScore: 'تقييم المرضى',
      reviews: 'تقييم',
      languages: 'اللغات:',
      education: 'المؤهلات العلمية والزمالات',
      bio: 'نبذة عن الطبيب والخبرات',
      consultationFees: 'رسوم الاستشارات المتاحة',
      scheduleTitle: 'جدول المواعيد المتاحة خلال الأسبوع القادم',
      selectDay: '1. اختر اليوم المناسب',
      selectSlot: '2. اختر التوقيت المتاح',
      noSlotsForDay: 'لا توجد مواعيد متاحة في هذا اليوم، يرجى اختيار يوم آخر.',
      proceedToBooking: 'احجز هذا الموعد الآن',
      doctorNotFoundTitle: 'لم نتمكن من العثور على الطبيب',
      doctorNotFoundDesc: 'يبدو أن رابط الطبيب غير صحيح أو تم تحديث الصفحة.',
      returnDoctors: 'تصفح قائمة الأطباء'
    },
    bookingPage: {
      badge: 'حجز موعد جديد',
      title: 'احجز استشارتك الطبية بسهولة',
      subtitle: 'خطوات سريعة لحجز كشفك في العيادة أو استشارة أونلاين وتأكيد موعدك فوراً.',
      step1: '1. الطبيب والنوع',
      step2: '2. اليوم والوقت',
      step3: '3. بيانات المريض',
      step4: '4. المراجعة والتأكيد',
      chooseSpecialty: 'التخصص الطبي المطلوبة',
      chooseDoctor: 'اختر الطبيب المعالج',
      chooseType: 'نوع الاستشارة',
      chooseDate: 'اختر تاريخ الموعد',
      chooseTime: 'اختر الوقت المتاح',
      patientName: 'اسم المريض ثلاثي',
      patientPhone: 'رقم الهاتف المحمول (مصر)',
      patientPhoneHelp: 'مثال: 01012345678 أو 011 / 012 / 015',
      patientEmail: 'البريد الإلكتروني',
      patientAge: 'العمر (بالسنوات)',
      patientNotes: 'الشكوى الطبية أو ملاحظات إضافية (اختياري)',
      patientNotesPlaceholder: 'اكتب بإيجاز الأعراض أو الغرض من الزيارة لمساعدة الطبيب...',
      nextStep: 'المتابعة للخطوة التالية',
      prevStep: 'الخطوة السابقة',
      confirmBooking: 'تأكيد الحجز النهائي',
      summaryTitle: 'ملخص بيانات حجزك',
      doctorLabel: 'الطبيب:',
      specialtyLabel: 'التخصص:',
      typeLabel: 'نوع الكشف:',
      dateLabel: 'تاريخ الموعد:',
      timeLabel: 'الوقت المحدد:',
      feeLabel: 'قيمة الكشف:',
      nameLabel: 'اسم المريض:',
      phoneLabel: 'الهاتف:',
      emailLabel: 'البريد:',
      ageLabel: 'العمر:',
      notesLabel: 'الملاحظات:',
      yearsOld: 'سنة',
      currency: 'ج.م',
      successTitle: 'تم تأكيد حجزك بنجاح!',
      successSubtitle: 'سعداء بخدمتك! تم حفظ موعدك برقم الحجز أدناه، ويسعدنا استقبالك في الموعد المحدد.',
      refNumberLabel: 'رقم الحجز المرجعي:',
      sendWhatsApp: 'أرسل تفاصيل الحجز عبر واتساب',
      viewMyBookings: 'عرض حجوزاتي المحفوظة',
      bookAnother: 'حجز موعد آخر',
      validationErrors: {
        selectDoctor: 'يرجى اختيار التخصص والطبيب أولاً.',
        selectType: 'يرجى تحديد نوع الاستشارة.',
        selectDate: 'يرجى اختيار يوم الموعد.',
        selectSlot: 'يرجى تحديد توقيت الموعد المتاح.',
        nameRequired: 'يرجى إدخال اسم المريض كاملاً (على الأقل 3 أحرف).',
        phoneInvalid: 'يرجى إدخال رقم هاتف مصري صحيح يبدأ بـ 01 ويتكون من 11 رقماً.',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
        ageInvalid: 'يرجى إدخال عمر صحيح بين 0 و 120 سنة.'
      }
    },
    myBookingsPage: {
      badge: 'سجل الحجوزات',
      title: 'حجوزاتي ومواعيدي الطبية',
      subtitle: 'يمكنك مراجعة مواعيدك المحفوظة على هذا المتصفح، أو إلغاؤها، أو إعادة جدولتها بسهولة.',
      emptyTitle: 'لا توجد حجوزات مسجلة حالياً',
      emptyDesc: 'لم تقم بحجز أي مواعيد بعد على هذا المتصفح. يمكنك تصفح الأطباء واختيار موعد جديد الآن.',
      bookNowCTA: 'احجز موعداً جديداً',
      statusConfirmed: 'مؤكد',
      statusCancelled: 'ملغي',
      cancelBtn: 'إلغاء الموعد',
      rescheduleBtn: 'تعديل الموعد',
      cancelConfirmTitle: 'هل أنت متأكد من إلغاء هذا الحجز؟',
      cancelConfirmDesc: 'سيتم إلغاء الموعد وإتاحته لمرضى آخرين.',
      confirmCancelYes: 'نعم، قم بالإلغاء',
      confirmCancelNo: 'تراجع',
      cancelSuccess: 'تم إلغاء الموعد بنجاح.'
    },
    aboutPage: {
      badge: 'قصة ورسالة نبض',
      title: 'نبض للرعاية الطبية: رواد الرعاية الصحية المتكاملة',
      subtitle: 'تأسس مركز نبض ليقدم نموذجاً طبياً استثنائياً يجمع بين الكفاءة السريرية المتقدمة والإنسانية في رعاية المريض.',
      storyTitle: 'مسيرتنا في خدمة صحة المجتمع',
      storyP1: 'انطلقت مسيرة مركز نبض للرعاية الطبية برؤية واضحة تهدف إلى إرساء معايير جديدة في الرعاية الصحية الخارجية في مصر، حيث يحظى كل مراجع بالوقت الكافي للاستماع والفحص الدقيق دون استعجال.',
      storyP2: 'نفخر بضم نخبة من أبرز الأساتذة والاستشاريين في 12 تخصصاً، مدعومين بأحدث أجهزة التشخيص الرقمية ومعمل تحاليل فوري، لتقديم رحلة علاجية سلسة ومريحة تحت سقف واحد.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون الخيار الأول للأسرة المصرية والوجهة الأكثر موثوقية في الرعاية الصحية الأولية والمتخصصة بمعايير الجودة العالمية.',
      missionTitle: 'رسالتنا',
      missionDesc: 'تقديم خدمات تشخيصية وعلاجية عالية الدقة بأسلوب إنساني راقٍ وأسعار عادلة، مستندين إلى الابتكار والتحول الرقمي.',
      valuesTitle: 'قيمنا الجوهرية',
      value1Title: 'المريض أولاً',
      value1Desc: 'سلامة المراجع وراحته النفسية هي البوصلة التي تقود كل قراراتنا الطبية.',
      value2Title: 'النزاهة والشفافية',
      value2Desc: 'نلتزم بالوضوح التام في التشخيص وتكاليف العلاج دون أي مبالغة أو فحوصات غير مبررة.',
      value3Title: 'التطوير المستمر',
      value3Desc: 'مواكبة أحدث الإرشادات الطبية والبروتوكولات الدولية المعتمدة باستمرار.',
      leadershipTitle: 'الإدارة الطبية ومعايير الجودة',
      qualityTitle: 'الاعتمادات ومكافحة العدوى',
      qualityDesc: 'يطبق المركز بروتوكولات صارمة للتعقيم والسلامة الصحية مطابقة للمعايير الوطنية والدولية، مع فحص دوري للأجهزة وتعقيم دائم للعيادات.'
    },
    blogPage: {
      badge: 'التثقيف الطبي',
      title: 'نصائح وإرشادات صحية موثوقة',
      subtitle: 'مقالات طبية عامة كتبها استشاريونا لتزويدك بالمعلومات الموثوقة لصحتك وصحة أسرتك.',
      readArticle: 'قراءة المقال كاملاً',
      keyTakeaways: 'أبرز النصائح والخلاصات:',
      closeModal: 'إغلاق',
      shareArticle: 'مشاركة'
    },
    faqPage: {
      badge: 'إجابات واضحة',
      title: 'الأسئلة الشائعة والأكثر تكراراً',
      subtitle: 'كل ما تحتاج معرفته حول آليات الحجز، استشارات الفيديو، سياسات التأمين، وخدمات المركز.',
      stillHaveQuestions: 'هل لديك استفسار آخر لم تجد إجابته هنا؟',
      contactSupport: 'تواصل مع فريق الدعم الطبي'
    },
    contactPage: {
      badge: 'نحن هنا لمساعدتك',
      title: 'تواصل مع مركز نبض للرعاية الطبية',
      subtitle: 'فريق خدمة العملاء جاهز للرد على استفساراتكم ومساعدتكم في اختيار الطبيب المناسب طوال أيام الأسبوع.',
      infoTitle: 'بيانات المركز وساعات العمل',
      hotlineLabel: 'الخط الساخن للطوارئ:',
      phoneLabel: 'هاتف الحجز والاستعلام:',
      whatsappLabel: 'المحادثة الفورية عبر واتساب:',
      emailLabel: 'البريد الإلكتروني الرسمي:',
      addressLabel: 'عنوان المركز:',
      hoursLabel: 'مواعيد العمل الرسمية:',
      formTitle: 'أرسل لنا استفسارك أو رسالتك',
      formName: 'الاسم بالكامل',
      formPhone: 'رقم الهاتف',
      formEmail: 'البريد الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'نص الرسالة أو الاستفسار',
      formSubmit: 'إرسال الرسالة الآن',
      formSending: 'جاري الإرسال...',
      formSuccess: 'شكراً لتواصلك! تم استلام رسالتك بنجاح وسيتواصل معك فريقنا في أقرب وقت.',
      formError: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
    },
    notFoundPage: {
      badge: 'خطأ 404',
      title: 'عذراً! الصفحة التي تبحث عنها غير موجودة',
      subtitle: 'ربما تم نقل الصفحة أو كتابة الرابط بشكل خاطئ. لا تقلق، يمكنك العودة إلى بر الأمان عبر الروابط أدناه.',
      backHome: 'العودة للصفحة الرئيسية',
      browseDoctors: 'تصفح قائمة الأطباء',
      bookAppointment: 'احجز موعداً'
    },
    common: {
      currency: 'ج.م',
      bookNow: 'احجز الآن',
      viewAll: 'عرض الكل',
      backToTop: 'للأعلى',
      whatsappHelp: 'محادثة واتساب'
    }
  },
  en: {
    meta: {
      siteName: 'Nabd Medical Care',
      siteDescription: 'Nabd Medical Care - Premier outpatient consultations, specialized clinics, and online doctor booking in Cairo, Egypt.'
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      specialties: 'Specialties',
      doctors: 'Doctors',
      booking: 'Book Now',
      myBookings: 'My Bookings',
      blog: 'Health Tips',
      faq: 'FAQ',
      contact: 'Contact Us',
      langToggle: 'عربي'
    },
    topbar: {
      emergencyHotline: 'Emergency Hotline:',
      workingHours: 'Working Hours:',
      phone: 'Direct Booking:'
    },
    hero: {
      badge: 'Healthcare Tailored Around You',
      title: 'Your Health Begins with a Single Appointment',
      subtitle: 'Connect with elite medical consultants across 12 clinical specialties. Choose how you consult: in-clinic visit, secure HD video call, or swift phone advice.',
      ctaBook: 'Book Your Consultation',
      ctaDoctors: 'Browse Specialist Doctors',
      quickBarTitle: 'Quick Available Slot Search',
      selectSpecialty: 'Select Medical Specialty',
      allSpecialties: 'All Specialties',
      selectType: 'Consultation Mode',
      findAppointment: 'Find Appointment'
    },
    features: {
      item1Title: 'Instant Confirmed Booking',
      item1Desc: 'Book within seconds with immediate WhatsApp & email notifications.',
      item2Title: 'Board-Certified Doctors',
      item2Desc: 'Senior consultants with prestigious international fellowships.',
      item3Title: 'Secure Video Sessions',
      item3Desc: 'Consult from home with end-to-end encrypted video and digital Rx.',
      item4Title: 'Flexible & Punctual Hours',
      item4Desc: 'Convenient morning and evening clinic slots with strict schedule respect.'
    },
    specialtiesSection: {
      badge: 'Clinical Departments',
      title: 'Comprehensive Medical Care for Your Whole Family',
      subtitle: 'Select any specialty to view qualified doctors, available time slots, and clinical services.',
      viewAll: 'View All Specialties',
      viewDoctors: 'View Department Doctors',
      doctorsCount: 'Available Doctors'
    },
    featuredDoctors: {
      badge: 'Medical Excellence',
      title: 'Featured Doctors at Your Service',
      subtitle: 'Experienced senior physicians with outstanding patient satisfaction scores.',
      availableToday: 'Available Today',
      rating: 'Rating',
      consultationFrom: 'Consultation starts at',
      bookDoctor: 'Book Visit',
      viewProfile: 'Full Profile',
      viewAllDoctors: 'Browse All Doctors'
    },
    howItWorks: {
      badge: 'Seamless & Simple',
      title: 'How to Book Your Appointment in 3 Steps',
      step1Num: '01',
      step1Title: 'Choose Specialty & Doctor',
      step1Desc: 'Explore certified doctors, review patient ratings, qualifications, and transparent fees.',
      step2Num: '02',
      step2Title: 'Select Date & Consultation Mode',
      step2Desc: 'Pick an open slot on the interactive calendar (Clinic, Video Call, or Phone Consult).',
      step3Num: '03',
      step3Title: 'Confirm & Receive Details',
      step3Desc: 'Submit your patient details to receive your booking code and instant WhatsApp summary.'
    },
    consultationModes: {
      badge: 'Tailored to Your Schedule',
      title: 'Ways to Consult at Nabd Medical Care',
      subtitle: 'Modern care formats designed to fit your health needs, whether in our clinic or from home.',
      currency: 'EGP',
      bookThisMode: 'Book This Mode'
    },
    statsSection: {
      title: 'Numbers Reflecting Patient Trust and Clinical Rigor'
    },
    facilitiesSection: {
      badge: 'Clinical Excellence',
      title: 'Modern Facilities & Advanced Diagnostics',
      subtitle: 'Thoughtfully engineered clinics ensuring superior hygiene, comfort, and patient safety.',
      clickToEnlarge: 'Click to enlarge'
    },
    testimonialsSection: {
      badge: 'Real Patient Stories',
      title: 'What Our Patients Say About Us',
      subtitle: 'Honored by the trust of thousands of families and committed to ever-higher clinical standards.'
    },
    ctaSection: {
      title: 'Your Health and Peace of Mind Deserve Premier Care',
      subtitle: 'Do not postpone your wellbeing. Reserve a confidential appointment with our top consultants today.',
      button: 'Book Your Appointment Now'
    },
    footer: {
      aboutText: 'Nabd Medical Care delivers comprehensive outpatient clinical services upholding international treatment guidelines, paired with heartfelt empathy and digital convenience.',
      quickLinks: 'Quick Links',
      specialties: 'Core Specialties',
      contactInfo: 'Contact Information',
      workingHours: 'Working Hours',
      copyright: 'All Rights Reserved © 2026 Nabd Medical Care.',
      medicalDisclaimer: 'Medical Disclaimer: Content is provided for general health education only and cannot substitute direct clinical consultation or emergency intervention. In life-threatening emergencies, call 123 or proceed to the nearest emergency department.',
      demoNotice: 'Notice: This is a demonstration website (Demo) for portfolio and presentation purposes. No clinical patient data is processed or stored on servers.'
    },
    doctorsPage: {
      badge: 'Clinical Team',
      title: 'Our Specialist Doctors & Consultants',
      subtitle: 'Filter our medical staff by specialty, consultation mode, gender, and current availability.',
      searchPlaceholder: 'Search by doctor name or specialty...',
      filterSpecialty: 'Specialty',
      filterType: 'Consultation Mode',
      filterGender: 'Gender',
      allGenders: 'All',
      male: 'Male Doctor',
      female: 'Female Doctor',
      availableTodayOnly: 'Available Today Only',
      sortBy: 'Sort By',
      sortRating: 'Highest Rated',
      sortPriceAsc: 'Lowest Price',
      sortPriceDesc: 'Highest Price',
      clearFilters: 'Reset Filters',
      resultsCount: 'Doctors Found',
      noResultsTitle: 'No doctors matched your criteria',
      noResultsDesc: 'Try adjusting your search query or reset the filters to see available doctors.'
    },
    doctorDetailsPage: {
      backToDoctors: 'Back to Doctors List',
      experienceYears: 'Years Experience',
      ratingScore: 'Patient Rating',
      reviews: 'Reviews',
      languages: 'Languages:',
      education: 'Education & Accreditations',
      bio: 'Professional Biography',
      consultationFees: 'Consultation Options & Fees',
      scheduleTitle: 'Upcoming Week Availability',
      selectDay: '1. Select Available Day',
      selectSlot: '2. Select Open Time Slot',
      noSlotsForDay: 'No available slots on this day. Please pick another date.',
      proceedToBooking: 'Book This Slot Now',
      doctorNotFoundTitle: 'Doctor Profile Not Found',
      doctorNotFoundDesc: 'The link you followed seems expired or the doctor profile is unavailable.',
      returnDoctors: 'Browse Doctor Directory'
    },
    bookingPage: {
      badge: 'New Appointment',
      title: 'Book Your Medical Consultation',
      subtitle: 'A streamlined 4-step wizard to secure your clinic appointment or virtual consult.',
      step1: '1. Doctor & Mode',
      step2: '2. Date & Time',
      step3: '3. Patient Info',
      step4: '4. Review & Confirm',
      chooseSpecialty: 'Required Specialty',
      chooseDoctor: 'Select Doctor',
      chooseType: 'Consultation Mode',
      chooseDate: 'Choose Appointment Date',
      chooseTime: 'Choose Open Time Slot',
      patientName: 'Full Patient Name',
      patientPhone: 'Mobile Phone Number (Egypt)',
      patientPhoneHelp: 'e.g. 01012345678 or 011 / 012 / 015',
      patientEmail: 'Email Address',
      patientAge: 'Age (Years)',
      patientNotes: 'Chief Complaint / Extra Notes (Optional)',
      patientNotesPlaceholder: 'Briefly state your symptoms or reason for visit to brief your doctor...',
      nextStep: 'Continue to Next Step',
      prevStep: 'Previous Step',
      confirmBooking: 'Confirm Appointment',
      summaryTitle: 'Booking Summary Details',
      doctorLabel: 'Doctor:',
      specialtyLabel: 'Specialty:',
      typeLabel: 'Consultation Mode:',
      dateLabel: 'Date:',
      timeLabel: 'Selected Time:',
      feeLabel: 'Estimated Fee:',
      nameLabel: 'Patient Name:',
      phoneLabel: 'Phone Number:',
      emailLabel: 'Email:',
      ageLabel: 'Age:',
      notesLabel: 'Notes:',
      yearsOld: 'Years',
      currency: 'EGP',
      successTitle: 'Appointment Confirmed Successfully!',
      successSubtitle: 'We look forward to welcoming you. Your booking reference number is generated below.',
      refNumberLabel: 'Booking Reference Code:',
      sendWhatsApp: 'Send Details via WhatsApp',
      viewMyBookings: 'View Saved Bookings',
      bookAnother: 'Book Another Visit',
      validationErrors: {
        selectDoctor: 'Please choose both specialty and doctor first.',
        selectType: 'Please choose a consultation mode.',
        selectDate: 'Please pick an appointment day.',
        selectSlot: 'Please pick an open time slot.',
        nameRequired: 'Please enter your full name (at least 3 characters).',
        phoneInvalid: 'Please enter a valid 11-digit Egyptian mobile number starting with 01.',
        emailInvalid: 'Please enter a valid email address.',
        ageInvalid: 'Please enter a valid age between 0 and 120.'
      }
    },
    myBookingsPage: {
      badge: 'Appointment Records',
      title: 'My Medical Bookings',
      subtitle: 'Manage your visits saved on this browser, cancel with one click, or reschedule smoothly.',
      emptyTitle: 'No Bookings Recorded Yet',
      emptyDesc: 'You have not booked any appointments on this browser yet. Browse our doctors and book your first visit today.',
      bookNowCTA: 'Book New Appointment',
      statusConfirmed: 'Confirmed',
      statusCancelled: 'Cancelled',
      cancelBtn: 'Cancel Visit',
      rescheduleBtn: 'Reschedule',
      cancelConfirmTitle: 'Are you sure you want to cancel this visit?',
      cancelConfirmDesc: 'This slot will be released for other patients.',
      confirmCancelYes: 'Yes, Cancel Appointment',
      confirmCancelNo: 'Keep Appointment',
      cancelSuccess: 'Appointment successfully cancelled.'
    },
    aboutPage: {
      badge: 'Story & Mission',
      title: 'Nabd Medical Care: Pioneers in Integrated Outpatient Health',
      subtitle: 'Founded to deliver an elevated healthcare model uniting clinical acumen with attentive bedside human empathy.',
      storyTitle: 'Our Journey in Serving Community Health',
      storyP1: 'Nabd Medical Care embarked with a resolute vision to reset outpatient clinical benchmarks in Cairo, giving each patient ample listening time and thorough examinations without rushed turnarounds.',
      storyP2: 'We take pride in assembling senior university consultants across 12 clinical branches, backed by modern digital imaging and a rapid on-site laboratory under one coordinated roof.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the most trusted healthcare partner for Egyptian families, renowned for quality, punctuality, and diagnostic integrity.',
      missionTitle: 'Our Mission',
      missionDesc: 'Delivering precision diagnostics and compassionate clinical care at transparent rates, driven by ethical medicine and continuous digital innovation.',
      valuesTitle: 'Core Values',
      value1Title: 'Patient Centricity',
      value1Desc: 'Patient safety, dignity, and psychological peace are the primary drivers of our clinical pathways.',
      value2Title: 'Clinical Integrity',
      value2Desc: 'Complete transparency in treatment plans and costs without unnecessary tests.',
      value3Title: 'Continuous Excellence',
      value3Desc: 'Adopting accredited international guidelines and rigorous safety measures daily.',
      leadershipTitle: 'Clinical Leadership & Quality Control',
      qualityTitle: 'Accreditation & Infection Control',
      qualityDesc: 'Strict clinical sterilization protocols matching both national standards and international clinical safety directives.'
    },
    blogPage: {
      badge: 'Health Education',
      title: 'Evidence-Based Wellness Insights',
      subtitle: 'Practical medical insights authored by our clinical faculty to support your daily family health decisions.',
      readArticle: 'Read Full Article',
      keyTakeaways: 'Key Clinical Takeaways:',
      closeModal: 'Close',
      shareArticle: 'Share'
    },
    faqPage: {
      badge: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to understand regarding clinic reservations, telehealth, insurance, and fees.',
      stillHaveQuestions: 'Still have questions not addressed above?',
      contactSupport: 'Reach Our Patient Care Desk'
    },
    contactPage: {
      badge: 'Here to Assist',
      title: 'Contact Nabd Medical Care',
      subtitle: 'Our patient support team is available 6 days a week to help you choose the right specialist.',
      infoTitle: 'Clinic Coordinates & Operating Hours',
      hotlineLabel: 'Emergency Hotline:',
      phoneLabel: 'Direct Clinic Line:',
      whatsappLabel: 'WhatsApp Instant Chat:',
      emailLabel: 'Official Clinic Email:',
      addressLabel: 'Facility Address:',
      hoursLabel: 'Official Working Hours:',
      formTitle: 'Send an Inquiry or Message',
      formName: 'Full Name',
      formPhone: 'Mobile Phone',
      formEmail: 'Email Address',
      formSubject: 'Subject',
      formMessage: 'Message or Question Details',
      formSubmit: 'Send Message Now',
      formSending: 'Sending...',
      formSuccess: 'Thank you for reaching out! Your message was received and our desk will respond shortly.',
      formError: 'An error occurred while sending. Please try again or call our direct phone line.'
    },
    notFoundPage: {
      badge: 'Error 404',
      title: 'Oops! The page you are looking for does not exist',
      subtitle: 'The link might be broken or the page has moved. Navigate back safely using the options below.',
      backHome: 'Return to Homepage',
      browseDoctors: 'Browse Doctor Directory',
      bookAppointment: 'Book an Appointment'
    },
    common: {
      currency: 'EGP',
      bookNow: 'Book Now',
      viewAll: 'View All',
      backToTop: 'Top',
      whatsappHelp: 'WhatsApp Chat'
    }
  }
};
