const translations = {
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_skills": "Skills",
        "nav_projects": "Projects",
        "nav_contact": "Contact",

        "hero_tagline": "Designing the Future, Automating the Present.",
        "hero_intro": "I am Abdulaziz Alyas, a multi-disciplinary creative professional.",
        "hero_cta_work": "View My Work",
        "hero_cta_contact": "Let's Talk",

        "about_title": "About Me",
        "about_text": "I bridge the gap between creativity and technology. With a passion for refined aesthetics and efficient automation, I create digital experiences that are not only beautiful but also intelligent. My work is driven by a desire to innovate and simplify.",

        "skills_title": "My Expertise",
        "skill_design": "Graphic Design",
        "skill_design_desc": "Visual identity, UI/UX, and branding with a premium touch.",
        "skill_automation": "Automation",
        "skill_automation_desc": "Streamlining workflows using modern tools and scripts.",
        "skill_video": "Video Editing",
        "skill_video_desc": "Cinematic storytelling and motion graphics.",
        "skill_ai": "AI & Vibe Coding",
        "skill_ai_desc": "Leveraging AI to accelerate development and creativity.",

        "projects_title": "Selected Works",
        "project_1_title": "Brand Evolution",
        "project_1_desc": "A complete rebrand for a modern tech startup.",
        "project_1_cat": "Design",
        "project_2_title": "Workflow Auto-Pilot",
        "project_2_desc": "Automated content distribution system.",
        "project_2_cat": "Automation",
        "project_3_title": "Visual Rhythm",
        "project_3_desc": "A high-energy promotional video edit.",
        "project_3_cat": "Video",
        "project_4_title": "Smart Dashboard",
        "project_4_desc": "AI-powered analytics interface.",
        "project_4_cat": "Vibe Coding",
        "project_5_title": "Eco-System",
        "project_5_desc": "Sustainable living mobile application.",
        "project_5_cat": "Design",
        "project_6_title": "Auto-Editor",
        "project_6_desc": "Script to auto-chop silence from videos.",
        "project_6_cat": "Automation",

        "contact_title": "Get In Touch",
        "contact_name": "Name",
        "contact_email": "Email",
        "contact_message": "Message",
        "contact_submit": "Send Message",

        "footer_copy": "© 2026 Abdulaziz Alyas. Crafted with creativity."
    },
    "ar": {
        "nav_home": "الرئيسية",
        "nav_about": "عني",
        "nav_skills": "مهاراتي",
        "nav_projects": "أعمالي",
        "nav_contact": "تواصل معي",

        "hero_tagline": "أصمم للمستقبل، وأبتكر للحاضر.",
        "hero_intro": "أنا عبدالعزيز الياس، مبدع متعدد التخصصات.",
        "hero_cta_work": "شاهد أعمالي",
        "hero_cta_contact": "تحدث معي",

        "about_title": "نبذة عني",
        "about_text": "أجمع بين الإبداع والتكنولوجيا. بشغف للجماليات المتقنة والأتمتة الفعالة، أبتكر تجارب رقمية ليست جميلة فقط بل ذكية أيضًا. عملي مدفوع برغبة دائمة في الابتكار والتبسيط.",

        "skills_title": "خبراتي",
        "skill_design": "التصميم الجرافيكي",
        "skill_design_desc": "الهوية البصرية، واجهة المستخدم، والعلامات التجارية بلمسة فاخرة.",
        "skill_automation": "الأتمتة",
        "skill_automation_desc": "تحسين سير العمل باستخدام أحدث الأدوات والبرمجيات.",
        "skill_video": "المونتاج وتحرير الفيديو",
        "skill_video_desc": "سرد قصصي سينمائي وموشن جرافيك.",
        "skill_ai": "الذكاء الاصطناعي والبرمجة",
        "skill_ai_desc": "توظيف الذكاء الاصطناعي لتسريع التطوير والإبداع.",

        "projects_title": "أعمال مختارة",
        "project_1_title": "تطور العلامة التجارية",
        "project_1_desc": "إعادة تسمية كاملة لشركة تقنية ناشئة.",
        "project_1_cat": "تصميم",
        "project_2_title": "الطيار الآلي للعمل",
        "project_2_desc": "نظام توزيع محتوى مؤتمت بالكامل.",
        "project_2_cat": "أتمتة",
        "project_3_title": "إيقاع بصري",
        "project_3_desc": "فيديو ترويجي عالي الطاقة.",
        "project_3_cat": "فيديو",
        "project_4_title": "لوحة المعلومات الذكية",
        "project_4_desc": "واجهة تحليلات مدعومة بالذكاء الاصطناعي.",
        "project_4_cat": "فايب كودينج",
        "project_5_title": "النظام البيئي",
        "project_5_desc": "تطبيق محمول للحياة المستدامة.",
        "project_5_cat": "تصميم",
        "project_6_title": "المحرر التلقائي",
        "project_6_desc": "كود لإزالة الصمت تلقائياً من الفيديوهات.",
        "project_6_cat": "أتمتة",

        "contact_title": "تواصل معي",
        "contact_name": "اسمك",
        "contact_email": "بريدك الإلكتروني",
        "contact_message": "رسالتك",
        "contact_submit": "إرسال الرسالة",

        "footer_copy": "© 2026 عبدالعزيز الياس. صُنع بإبداع."
    }
};

class LanguageManager {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'en';
        this.init();
    }

    init() {
        this.updatePage();
        this.setupEventListeners();
    }

    updatePage() {
        // Update HTML dir and lang attributes
        document.documentElement.lang = this.lang;
        document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';

        // Get current dictionary
        const content = translations[this.lang];

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (content[key]) {
                element.textContent = content[key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (content[key]) {
                element.placeholder = content[key];
            }
        });

        // Update Toggle Button Text
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = this.lang === 'en' ? 'عربي' : 'English';
        }

        // Save preference
        localStorage.setItem('lang', this.lang);

        // Re-trigger animations if needed (optional optimization)
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            // Remove old listeners to be safe (though this runs once usually)
            const newBtn = toggleBtn.cloneNode(true);
            toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);

            newBtn.addEventListener('click', () => {
                this.lang = this.lang === 'en' ? 'ar' : 'en';
                this.updatePage();
            });
        }
    }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});
