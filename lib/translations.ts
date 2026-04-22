export type Language = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl",
    nav: {
      about: "من نحن",
      services: "خدماتنا",
      doctors: "الكادر الطبي",
      equipment: "أجهزتنا الطبية",
      book: "احجز موعدك",
    },
    hero: {
      title: "عنايتك بأيدٍ سعودية",
      subtitle: "أطباء واستشاريون سعوديون بخبرة طبية متخصصة",
      mobileSubtitle: "أطباء واستشاريون سعوديون",
      bookNow: "احجز موعدك الآن",
      clinic: {
        name: "مجمع ستراتا لطب الأسنان",
        enName: "STRATA DENTAL CLINIC",
      },
    },
    about: {
      title: "من نـحــــــــــــــــن؟",
      description:
        "مجمع طبي متكامل يقدم رعاية صحية بمعايير عالية، مجهز بأحدث الأجهزة الطبية، وبكادر طبي سعودي مؤهل لضمان تجربة علاجية استثنائية.",
      stats: [
        { value: 5, label: "سنوات خبرة", suffix: "+" },
        { value: 12, label: "طبيب مختص", suffix: "" },
        { value: 5000, label: "ابتسامة جديدة", suffix: "+" },
      ],
    },
    services: {
      title: "خدماتنا المتكاملة",
      description:
        "مجموعة شاملة من الحلول العلاجية والتجميلية لابتسامة أكثر صحة ً وجمالا",
      descriptionHighlight: "الحلول العلاجية والتجميلية",
      heading: "خدماتنا المتكاملة",
      descriptionRich: {
        prefix: "مجموعة شاملة من",
        highlight: "الحلول العلاجية والتجميلية",
        suffix: "لابتسامة أكثر صحة ً وجمالا",
      },
      items: [
        {
          title: "لتقويم الشفاف (إنفزلاين)",
          subtitle: "Clear Aligners (Invisalign)",
          desc: "لتقويم الشفاف (إنفزلاين) هو تقنية حديثة لتقويم الأسنان باستخدام قوالب شفافة مخصصة لكل مريض. يتميز بأنه شبه غير مرئي، مريح في الاستخدام ويمكن إزالته بسهولة عند الأكل أو تنظيف الأسنان، مما يجعله خياراً مثالياً لمن يبحث عن ابتسامة جميلة بطريقة مريحة وعصرية",
        },
        {
          title: "حشوات الأسنان",
          subtitle: "Dental Fillings",
          desc: "حشوات الأسنان هي إجراء علاجي يستخدم لإصلاح الأسنان المتضررة نتيجة التسوس أو الكسر. يتم تنظيف الجزء المصاب من السن ثم ملؤه بمواد طبية آمنة تعيد للسن شكله ووظيفته الطبيعية. تساعد الحشوات على حماية السن من المزيد من التلف والحفاظ على صحة الفم والابتسامة",
        },
        {
          title: "تبييض الأسنان",
          subtitle: "Teeth Whitening",
          desc: "يعد تبييض الأسنان من أكثر الإجراءات التجميلية شيوعاً للحصول على ابتسامة مشرقة وجذابة. في عياداتنا نستخدم أحدث تقنيات تبييض الأسنان الآمنة والفعالة التي تساعد على إزالة التصبغات الناتجة عن القهوة والشاي والتدخين مع الحفاظ على صحة الأسنان",
        },
        {
          title: "فلورايد الأسنان",
          subtitle: "Dental Fluoride Treatment",
          desc: "يساعد الفلورايد على تقوية مينا الأسنان وحمايتها من التسوس ويعد من أهم الإجراءات الوقائية لصحة الأسنان",
        },
        {
          title: "علاج العصب",
          subtitle: "Root Canal Treatment",
          desc: "يهدف علاج العصب إلى إزالة الالتهاب أو العدوى داخل السن وتنظيف القنوات العصبية بدقة، مما يساعد على إنقاذ السن من الخلع والحفاظ على بنيته الطبيعية ووظيفته. يتم هذا الإجراء في عيادتنا تحت إشراف استشاريين متخصصين",
        },
        {
          title: "زراعة الأسنان",
          subtitle: "Dental Implants",
          desc: "تهدف زراعة الأسنان إلى تعويض الأسنان المفقودة واستعادة الابتسامة ووظيفة الأسنان بشكل طبيعي، حيث يتم تثبيت جذور صناعية داخل عظم الفك لتكون قاعدة ثابتة تركب عليها الأسنان التعويضية.",
        },
        {
          title: "تنظيف الأسنان",
          subtitle: "Teeth Cleaning",
          desc: "تنظيف الأسنان هو إجراء وقائي يهدف إلى إزالة الجير والترسبات والبلاك المتراكمة على الأسنان، مما يساعد على الحفاظ على صحة اللثة ومنع تسوس الأسنان.",
        },
        {
          title: "الحشوات التجميلية",
          subtitle: "Cosmetic Dental Fillings",
          desc: "الحشوات التجميلية هي علاج يستخدم لإصلاح الأسنان المتضررة من التسوس أو الكسور البسيطة مع الحفاظ على المظهر الطبيعي للسن. يتم استخدام مواد تجميلية حديثة بلون الأسنان بحيث تندمج الحشوة مع لون السن الطبيعي وتصبح غير ملحوظة.",
        },
      ],
    },
    doctors: {
      title: "عنايتك بأيد سعودية",
      description: "أطباء واستشاريون سعوديون بخبرة طبية متخصصة",
      items: [
        {
          name: "د. عبد العزيز الربدي",
          spec: "إستشاري إصلاح وتجميل الأسنان",
          points: [
            "عضو هيئة تدريس بجامعة القصيم",
            "استشاري طب الفم وتجميل الأسنان",
            "رئيس قسم إصلاح وتجميل الأسنان بمدينة الأمير سلطان الطبية بالقصيم",
          ],
        },
        {
          name: "د. عبد المجيد العنزي",
          spec: "أخصائي أول علاج جذور وأعصاب الأسنان",
          points: [
            "البورد السعودي في علم الجذور وعلاج أعصاب الأسنان",
            "خبرة عالية في علاج العصب والجذور باستخدام تقنيات حديثة",
          ],
        },
        {
          name: "د. نورة السناني",
          spec: "استشارية تقويم الأسنان وعظام الوجه والفكين",
          points: [
            "البورد السعودي في تقويم الأسنان وعظام الوجه والفكين",
            "رئيس قسم تقويم الأسنان، ومستشفى الملك فهد التخصصي",
          ],
        },
        {
          name: "د. جراح المطيري",
          spec: "أخصائي أول إصلاح وتجميل الأسنان",
          points: [
            "حاصل على البورد السعودي في إصلاح وتجميل الأسنان",
            "متخصص في تركيبات الأسنان والتعويضات السنية",
          ],
        },
        {
          name: "د. وليد العلوي",
          spec: "أخصائي أول جراحة الوجه والفكين",
          points: [
            "البورد السعودي في جراحة الوجه والفكين",
            "عضو هيئة التدريس في جامعة القصيم",
            "متخصص في زراعة الأسنان والتعويضات السنية",
          ],
        },
        {
          name: "د. ربى الخليل",
          spec: "أخصائية طب أسنان الأسرة",
          points: [
            "شهادة الاختصاص من مدينة الأمير سلطان الطبية العسكري",
            "متخصصة في عمل الحشوات التجميلية والتركيبات الثابتة",
            "خبرة في علاج الأسنان للأطفال",
          ],
        },
        {
          name: "د. ريما البشر",
          spec: "طبيب أسنان عام",
          points: ["بكالوريوس طب وجراحة الفم والأسنان"],
        },
        {
          name: "د. عبد العزيز الراجحي",
          spec: "طبيب أسنان عام",
          points: [
            "بكالوريوس طب وجراحة الفم والأسنان - جامعة القصيم",
            "خبرات إكلينيكية في علم عصب الأسنان",
            "دورات في الحشوات التجميلية والتركيبات",
          ],
        },
      ],
    },
    equipment: {
      title: "أحدث التقنيات والأجهزة الطبية",
      item1: {
        title: "المايكروسكوب الدقيق",
        brandIntro: "جهاز",
        description: "لم يعد علاج العصب يعني رؤية محدودة أو نتائج غير دقيقة",
        logo: "/images/bondent.png",
        device: "/images/bondent-device.png",
        alt: "جهاز مايكروسكوب دقيق لعلاج العصب",
        caption: ["والأهم...", "رؤية مضخمة لقنوات العصب قبل", "بدء العلاج"],
        points: [
          "علاج أدق للحالات الصعبة والمعقدة",
          "تقليل نسبة الأخطاء أثناء العلاج",
          "اكتشاف القنوات المخفية بسهولة",
          "رفع معدل نجاح علاج العصب بشكل كبير",
          "رؤية واضحة وعالية الدقة للقنوات الجذرية",
        ],
      },
      item2: {
        title: "الماسح ثلاثي الأبعاد",
        brandIntro: "جهاز",
        description: "لم يعد أخذ المقاسات يعني مواد مزعجة أو طبعات غير دقيقة",
        logo: "/images/itero.png",
        device: "/images/itero-device.png",
        alt: "جهاز ماسح ثلاثي الأبعاد للأسنان",
        caption: ["والأهم...", "راحة أوضح لقياساتك قبل أن تبدأ", "رحلة العلاج"],
        points: [
          "مسح ثلاثي الأبعاد عالي الدقة للأسنان",
          "نتائج فورية بدون قوالب تقليدية",
          "تخطيط أدق لعلاجات التقويم والتجميل",
          "راحة أكبر للمريض وتجربة أسرع",
        ],
      },
    },
    experience: "عناية طبية... بتجربة استثنائية!",
    gallery: {
      title: "معرضنا",
    },
    footer: {
      clinicName: "مجمع ستراتا لطب الأسنان",
      clinicEnName: "STRATA DENTAL CLINIC",
      headline: "عنايتك بأيدٍ سعودية",
      subtitle: "أطباء واستشاريون سعوديون بخبرة طبية متخصصة",
      bookNow: "احجز موعدك الآن",
      vatLabel: "الرقم الضريبي",
      regLabel: "السجل التجاري",
      rights: "الحقوق محفوظة © 2026 مجمع ستراتا لطب الأسنان",
      tagline: "رعايتك الطبية الفاخرة تبدأ من هنا.",
      contact: "تواصل معنا",
      address: "الرياض، المملكة العربية السعودية",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      about: "About Us",
      services: "Services",
      doctors: "Our Doctors",
      equipment: "Equipment",
      book: "Book Now",
    },
    hero: {
      title: "Care by Saudi Hands",
      subtitle: "Doctors and consultants with specialized medical expertise",
      mobileSubtitle: "Saudi Doctors & Consultants",
      bookNow: "Book Now",
      clinic: {
        name: "مجمع ستراتا لطب الأسنان",
        enName: "STRATA DENTAL CLINIC",
      },
    },
    about: {
      title: "Who We Are",
      description:
        "An integrated medical complex providing healthcare to the highest standards, equipped with the latest medical devices and a qualified Saudi medical team to ensure an exceptional experience.",
      stats: [
        { value: 5, label: "Years Exp", suffix: "+" },
        { value: 12, label: "Specialists", suffix: "" },
        { value: 5000, label: "New Smiles", suffix: "+" },
      ],
    },
    services: {
      title: "Our Integrated Services",
      description:
        "A comprehensive range of therapeutic and cosmetic solutions for a healthier, more beautiful smile.",
      descriptionHighlight: "therapeutic and cosmetic solutions",
      heading: "Our Integrated Services",
      descriptionRich: {
        prefix: "A comprehensive range of",
        highlight: "therapeutic and cosmetic solutions",
        suffix: "for a healthier, more beautiful smile.",
      },
      items: [
        {
          title: "Clear Aligners (Invisalign)",
          subtitle: "Clear Aligners (Invisalign)",
          desc: "Clear Aligners (Invisalign) is a modern orthodontic technique that uses custom-made transparent trays for each patient. It is almost invisible, comfortable to use, and can be easily removed when eating or brushing, making it an ideal choice for those looking for a beautiful smile in a comfortable and modern way.",
        },
        {
          title: "Dental Fillings",
          subtitle: "Dental Fillings",
          desc: "Dental fillings are a treatment used to repair teeth damaged by decay or fractures. The affected part of the tooth is cleaned and then filled with safe medical materials that restore its natural shape and function. Fillings help protect the tooth from further damage and maintain oral health and a healthy smile.",
        },
        {
          title: "Teeth Whitening",
          subtitle: "Teeth Whitening",
          desc: "Teeth whitening is one of the most common cosmetic procedures to achieve a bright and attractive smile. In our clinic, we use the latest safe and effective whitening technologies to remove stains caused by coffee, tea, and smoking while maintaining the health of teeth and gums.",
        },
        {
          title: "Dental Fluoride Treatment",
          subtitle: "Dental Fluoride Treatment",
          desc: "Fluoride helps strengthen tooth enamel and protect it from decay and is considered one of the most important preventive procedures for maintaining dental health.",
        },
        {
          title: "Root Canal Treatment",
          subtitle: "Root Canal Treatment",
          desc: "Root canal treatment aims to remove inflammation or infection inside the tooth and carefully clean the root canals, helping to save the tooth from extraction and preserve its natural structure and function. This procedure is performed in our clinic under the supervision of specialized consultants.",
        },
        {
          title: "Dental Implants",
          subtitle: "Dental Implants",
          desc: "Dental implants aim to replace missing teeth and restore the smile and function of teeth naturally. Artificial roots are placed into the jawbone to serve as a stable base for replacement teeth. The procedure is performed using advanced technologies to achieve accurate and natural results.",
        },
        {
          title: "Teeth Cleaning",
          subtitle: "Teeth Cleaning",
          desc: "Teeth cleaning is a preventive procedure that removes tartar, plaque, and deposits from teeth, helping maintain healthy gums and prevent tooth decay. It is performed using modern equipment and techniques that ensure precise and safe cleaning without affecting enamel.",
        },
        {
          title: "Cosmetic Dental Fillings",
          subtitle: "Cosmetic Dental Fillings",
          desc: "Cosmetic fillings are used to repair teeth damaged by decay or minor fractures while maintaining the natural appearance of the tooth. Tooth-colored materials are used to blend with the natural tooth color, making them unnoticeable.",
        },
      ],
    },
    doctors: {
      title: "Our Doctors",
      description:
        "Saudi doctors and consultants with specialized medical expertise",
      items: [
        {
          name: "Dr. Abdulaziz Al-Rabdi",
          spec: "Consultant - Restorative & Cosmetic Dentistry",
          points: [
            "Faculty member at Qassim University",
            "Consultant in Oral Medicine and Cosmetic Dentistry",
            "Head of Restorative Dentistry at Prince Sultan Medical City",
          ],
        },
        {
          name: "Dr. Abdulmajeed Al-Anazi",
          spec: "Senior Specialist - Endodontics",
          points: [
            "Saudi Board in Endodontics",
            "Expert in root canal treatment using modern techniques",
          ],
        },
        {
          name: "Dr. Noura Al-Sanani",
          spec: "Consultant - Orthodontics & Dentofacial Orthopedics",
          points: [
            "Saudi Board in Orthodontics",
            "Head of Orthodontics, King Fahd Specialist Hospital",
          ],
        },
        {
          name: "Dr. Jarrah Al-Mutairi",
          spec: "Senior Specialist - Restorative & Cosmetic Dentistry",
          points: [
            "Saudi Board in Restorative and Cosmetic Dentistry",
            "Specialist in dental prosthetics and restorations",
          ],
        },
        {
          name: "Dr. Walid Al-Alawi",
          spec: "Senior Specialist - Oral & Maxillofacial Surgery",
          points: [
            "Saudi Board in Oral & Maxillofacial Surgery",
            "Faculty member at Qassim University",
            "Specialist in dental implants and prosthetics",
          ],
        },
        {
          name: "Dr. Ruba Al-Khalil",
          spec: "Specialist - Family Dentistry",
          points: [
            "Specialty certificate from Prince Sultan Military Medical City",
            "Specialist in cosmetic fillings and fixed prosthetics",
            "Experienced in pediatric dentistry",
          ],
        },
        {
          name: "Dr. Rima Al-Bashr",
          spec: "General Dentist",
          points: ["Bachelor of Dental Surgery"],
        },
        {
          name: "Dr. Abdulaziz Al-Rajhi",
          spec: "General Dentist",
          points: [
            "Bachelor of Dental Surgery - Qassim University",
            "Clinical expertise in endodontics",
            "Courses in cosmetic fillings and prosthetics",
          ],
        },
      ],
    },
    equipment: {
      title: "Latest Technology & Equipment",
      item1: {
        title: "Surgical Microscope (Bondent)",
        brandIntro: "Device",
        description:
          "Root canal treatment is no longer limited by poor visibility or inaccurate results",
        logo: "/images/bondent.png",
        device: "/images/bondent-device.png",
        alt: "Bondent dental microscope device",
        caption: [
          "Most importantly...",
          "Magnified visibility of root canals",
          "before treatment begins",
        ],
        points: [
          "More precise treatment for complex cases",
          "Reduced risk of treatment errors",
          "Easier detection of hidden canals",
          "Significantly higher success rates in root canal treatment",
          "Clear and high-definition visualization of root canals",
        ],
      },
      item2: {
        title: "3D Intraoral Scanner (iTero)",
        brandIntro: "Device",
        description:
          "Taking impressions is no longer uncomfortable or inaccurate",
        logo: "/images/itero.png",
        device: "/images/itero-device.png",
        alt: "iTero 3D intraoral scanner device",
        caption: [
          "Most importantly...",
          "A smoother scan before your",
          "treatment journey",
        ],
        points: [
          "High-precision 3D scanning of teeth",
          "Instant results without traditional molds",
          "More accurate planning for orthodontic and cosmetic treatments",
          "Greater patient comfort and faster experience",
        ],
      },
    },
    experience: "Medical Care... An Exceptional Experience!",
    gallery: {
      title: "Our Gallery",
    },
    footer: {
      clinicName: "STRATA Dental Clinic",
      clinicEnName: "STRATA DENTAL CLINIC",
      headline: "Care by Saudi Hands",
      subtitle: "Doctors and consultants with specialized medical expertise",
      bookNow: "Book Now",
      vatLabel: "VAT number",
      regLabel: "Commercial registration",
      rights: "All rights reserved © 2026 STRATA Dental Clinic",
      tagline: "Your premium dental care starts here.",
      contact: "Contact Us",
      address: "Riyadh, Saudi Arabia",
    },
  },
};

export type TranslationType = typeof translations.ar;
