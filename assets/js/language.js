// 언어변경 기능을 위한 번역 데이터
const translations = {
    kr: {
        // Header
        title: "최성진 - 안드로이드 앱 개발자",
        name: "- 최성진 -",
        occupation: "안드로이드 앱 개발자",
        greeting: "안녕하세요.",
        description: "사용자 입장의 안드로이드 앱 개발자<br/>최성진입니다.",
        learnMore: "더 알아보기 ↓",
        
        // About Section
        aboutTitle: "About",
        nameLabel: "이름",
        nameValue: "최성진",
        birthLabel: "생년월일",
        birthValue: "2000년 02월 11일",
        locationLabel: "위치",
        locationValue: "용인특례시 기흥구",
        contactLabel: "연락처",
        contactValue: "010-9253-2942",
        emailLabel: "이메일",
        emailValue: "chltjdwls294@naver.com",
        
        // Education
        educationTitle: "학력",
        highSchool: "와룡고등학교",
        universityMain: "단국대학교 국제자유전공학부",
        universitySoftware: "단국대학교 소프트웨어학과",
        bootcampTitle: "교육",
        bootcamp: "빅데이터 분석 및 인공지능 처리를 위한 SW융합개발자 양성 과정",
        company: "티맥스티베로",
        
        // Skills
        skillsTitle: "Skills",
        coreSkills: "주력 기술",
        learningSkills: "학습 기술",
        collaboration: "협업 도구",
        devEnvironment: "개발 환경",
        
        // Projects
        projectsTitle: "PROJECT",
        
        // PillCare
        pillcareDesc: "고령층이 약 복용 시간을 놓치지 않도록 돕는 스마트 복약 관리 앱으로,<br/>사용자 친화적인 UI와 정확한 알림 시스템으로 건강한 복약 습관을 지원합니다.",
        pillcareTech1: "• Jetpack Compose + XML 하이브리드 UI",
        pillcareTech2: "• RecyclerView 중첩 구조로 직관적 UI 구성",
        pillcareTech3: "• Room Database 기반 로컬 데이터 저장",
        pillcareTech4: "• Retrofit + Coroutine 비동기 API 통신 구현",
        pillcareTech5: "• 정확한 복약 시간 알림 및 스케줄 관리",
        
        // LawRo
        lawroDesc: "외국인 근로자의 권리를 스스로 점검할 수 있도록 돕는 AI기반 계약서 분석 서비스 앱으로,<br/>언어 장벽을 해결하고 안전한 근로 환경 조성을 돕는 프로젝트입니다.",
        lawroTech1: "• Jetpack Compose 100% 네이티브 UI 구현",
        lawroTech2: "• 6개국 다국어 지원 시스템 구축 (KR/US/JP/CN/TH/VN)",
        lawroTech3: "• MVVM + Repository 패턴 Clean Architecture 설계",
        lawroTech4: "• Retrofit + Coroutine 비동기 API 통신 구현",
        lawroTech5: "• Naver Maps SDK 실시간 위치 기반 서비스 구축",
        
        // Contact
        contactTitle: "CONTACT",
        contactDesc: "제 이력이나 프로젝트에 대해 궁금하신 점이 있다면, 아래 연락처로 편하게 문의해 주세요.",
        phoneLabel: "전화번호",
        githubLabel: "GitHub",
        
        // Copyright
        copyright: "© 2025. 최성진 All rights reserved"
    },
    
    jp: {
        // Header
        title: "チェソンジン - Androidアプリエンジニア",
        name: "- チェソンジン -",
        occupation: "Androidアプリエンジニア",
        greeting: "こんにちは。",
        description: "ユーザー視点のAndroidアプリ開発者<br/>チェソンジンです。",
        learnMore: "もっと見る ↓",
        
        // About Section
        aboutTitle: "About",
        nameLabel: "名前",
        nameValue: "チェソンジンン",
        birthLabel: "生年月日",
        birthValue: "2000年２月11日",
        locationLabel: "住所",
        locationValue: "龍仁特例市器興区",
        contactLabel: "連絡先",
        contactValue: "010-9253-2942",
        emailLabel: "メール",
        emailValue: "chltjdwls294@naver.com",
        
        // Education
        educationTitle: "学歴",
        highSchool: "臥龍高等学校",
        universityMain: "檀国大学校国際自由専攻学部",
        universitySoftware: "檀国大学校ソフトウェア学科",
        bootcampTitle: "教育",
        bootcamp: "ビッグデータ分析およびAI処理のためのSW融合開発者養成課程",
        company: "TmaxTibero",
        
        // Skills
        skillsTitle: "Skills",
        coreSkills: "主力技術",
        learningSkills: "学習技術",
        collaboration: "協業ツール",
        devEnvironment: "開発環境",
        
        // Projects
        projectsTitle: "PROJECT",
        
        // PillCare
        pillcareDesc: "高齢者が薬の服用時間を逃さないよう支援するスマート服薬管理アプリで、<br/>ユーザーフレンドリーなUIと正確なアラームシステムで健康的な服薬習慣をサポートします。",
        pillcareTech1: "• Jetpack Compose + XML ハイブリッド UI",
        pillcareTech2: "• RecyclerView ネスト構造で直感的なUI構成",
        pillcareTech3: "• Room Database ベースのローカルデータストレージ",
        pillcareTech4: "• Retrofit + Coroutine 非同期API通信実装",
        pillcareTech5: "• 正確な服薬時間アラームおよびスケジュール管理",
        
        // LawRo
        lawroDesc: "外国人労働者の権利を自ら点検できるよう支援するAIベースの契約書分析サービスアプリで、<br/>言語の壁を解決し安全な労働環境づくりを支援するプロジェクトです。",
        lawroTech1: "• Jetpack Compose 100% ネイティブUI実装",
        lawroTech2: "• 6か国多言語サポートシステム構築 (KR/US/JP/CN/TH/VN)",
        lawroTech3: "• MVVM + Repository パターン Clean Architecture 設計",
        lawroTech4: "• Retrofit + Coroutine 非同期API通信実装",
        lawroTech5: "• Naver Maps SDK リアルタイム位置ベースサービス構築",
        
        // Contact
        contactTitle: "CONTACT",
        contactDesc: "経歴やプロジェクトについてご質問がございましたら、お気軽にお問い合わせください。お待ちしております。",
        phoneLabel: "電話番号",
        githubLabel: "GitHub",
        
        // Copyright
        copyright: "© 2025. チェソンジン　All rights reserved"
    },
    
    en: {
        // Header
        title: "Sungjin Choi - Android App Developer",
        name: "- Sungjin Choi -",
        occupation: "Android App Developer",
        greeting: "Hello.",
        description: "User-focused Android App Developer.",
        learnMore: "Learn More ↓",
        
        // About Section
        aboutTitle: "About",
        nameLabel: "Name",
        nameValue: "Sungjin Choi",
        birthLabel: "Date of Birth",
        birthValue: "Feb 11, 2000",
        locationLabel: "Location",
        locationValue: "Giheung-gu, Yongin Special City",
        contactLabel: "Contact",
        contactValue: "010-9253-2942",
        emailLabel: "Email",
        emailValue: "chltjdwls294@naver.com",
        
        // Education
        educationTitle: "Education",
        highSchool: "Waryong High School",
        universityMain: "Dankook University, College of International Liberal Studies",
        universitySoftware: "Dankook University, Department of Software",
        bootcampTitle: "Training",
        bootcamp: "SW Convergence Developer Training Course for Big Data Analysis and AI Processing",
        company: "TmaxTibero",
        
        // Skills
        skillsTitle: "Skills",
        coreSkills: "Core Skills",
        learningSkills: "Learning Skills",
        collaboration: "Collaboration Tools",
        devEnvironment: "Development Environment",
        
        // Projects
        projectsTitle: "PROJECT",
        
        // PillCare
        pillcareDesc: "A smart medication management app that helps elderly users not miss their medication times,<br/>supporting healthy medication habits with user-friendly UI and accurate notification system.",
        pillcareTech1: "• Jetpack Compose + XML Hybrid UI",
        pillcareTech2: "• Intuitive UI composition with RecyclerView nested structure",
        pillcareTech3: "• Room Database-based local data storage",
        pillcareTech4: "• Retrofit + Coroutine asynchronous API communication implementation",
        pillcareTech5: "• Accurate medication time notifications and schedule management",
        
        // LawRo
        lawroDesc: "An AI-based contract analysis service app that helps foreign workers check their rights independently,<br/>a project that resolves language barriers and helps create a safe working environment.",
        lawroTech1: "• Jetpack Compose 100% native UI implementation",
        lawroTech2: "• 6-country multilingual support system (KR/US/JP/CN/TH/VN)",
        lawroTech3: "• MVVM + Repository pattern Clean Architecture design",
        lawroTech4: "• Retrofit + Coroutine asynchronous API communication implementation",
        lawroTech5: "• Naver Maps SDK real-time location-based service implementation",
        
        // Contact
        contactTitle: "CONTACT",
        contactDesc: "If you have any questions about my background or projects, please feel free to contact me using the information below.",
        phoneLabel: "Phone Number",
        githubLabel: "GitHub",
        
        // Copyright
        copyright: "© 2025. Sungjin Choi All rights reserved"
    }
};

// 현재 언어 (기본값: 한국어)
let currentLanguage = 'kr';

// 언어 변경 함수
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    const t = translations[lang];
    
    // 페이지 제목
    document.title = t.title;
    
    // Header 섹션
    const headName = document.getElementById('head-name');
    if (headName) headName.innerHTML = t.name;
    
    const headPunchline = document.querySelector('.head-punchline');
    if (headPunchline) headPunchline.innerHTML = t.occupation;
    
    const headIntro = document.querySelector('.head-intro');
    if (headIntro) headIntro.innerHTML = t.greeting + '<br/>' + t.description;
    
    const moreInfoBtn = document.querySelector('.more-info-btn');
    if (moreInfoBtn) moreInfoBtn.innerHTML = t.learnMore;
    
    // About 섹션 제목
    const aboutHeading = document.querySelector('#about .section-heading');
    if (aboutHeading) aboutHeading.innerHTML = t.aboutTitle;
    
    // Contact 정보 (About 섹션 내)
    const contactInfos = document.querySelectorAll('#about strong');
    if (contactInfos.length >= 5) {
        contactInfos[0].innerHTML = t.nameLabel;
        contactInfos[1].innerHTML = t.birthLabel;
        contactInfos[2].innerHTML = t.locationLabel;
        contactInfos[3].innerHTML = t.contactLabel;
        contactInfos[4].innerHTML = t.emailLabel;
    }
    
    const contactValues = document.querySelectorAll('#about span[style*="color: #666"]');
    if (contactValues.length >= 5) {
        contactValues[0].innerHTML = t.nameValue;
        contactValues[1].innerHTML = t.birthValue;
        contactValues[2].innerHTML = t.locationValue;
        contactValues[3].innerHTML = t.contactValue;
        contactValues[4].innerHTML = t.emailValue;
    }
    
    // Skills 섹션 제목
    const skillsHeading = document.querySelector('#skills .section-heading');
    if (skillsHeading) skillsHeading.innerHTML = t.skillsTitle;
    
    // Skills 서브 제목들
    const skillsSubheadings = document.querySelectorAll('#skills h3');
    if (skillsSubheadings.length >= 4) {
        skillsSubheadings[0].innerHTML = t.coreSkills;
        skillsSubheadings[1].innerHTML = t.learningSkills;
        skillsSubheadings[2].innerHTML = t.collaboration;
        skillsSubheadings[3].innerHTML = t.devEnvironment;
    }
    
    // Projects 섹션 제목
    const projectsHeading = document.querySelector('#projects .section-heading');
    if (projectsHeading) projectsHeading.innerHTML = t.projectsTitle;
    
    // Education 섹션
    const educationTitle = document.getElementById('education-title');
    if (educationTitle) educationTitle.innerHTML = t.educationTitle;
    
    const highSchool = document.getElementById('high-school');
    if (highSchool) highSchool.innerHTML = t.highSchool;
    
    const universityMain = document.getElementById('university-main');
    if (universityMain) universityMain.innerHTML = t.universityMain;
    
    const universitySoftware = document.getElementById('university-software');
    if (universitySoftware) universitySoftware.innerHTML = t.universitySoftware;
    
    const bootcampTitle = document.getElementById('bootcamp-title');
    if (bootcampTitle) bootcampTitle.innerHTML = t.bootcampTitle;
    
    const bootcampName = document.getElementById('bootcamp-name');
    if (bootcampName) bootcampName.innerHTML = t.bootcamp;
    
    const companyName = document.getElementById('company-name');
    if (companyName) companyName.innerHTML = t.company;
    
    // Projects 설명
    const pillcareDesc = document.getElementById('pillcare-desc');
    if (pillcareDesc) pillcareDesc.innerHTML = t.pillcareDesc;
    
    const lawroDesc = document.getElementById('lawro-desc');
    if (lawroDesc) lawroDesc.innerHTML = t.lawroDesc;
    
    // PillCare 기술 스택
    const pillcareTech1 = document.getElementById('pillcare-tech1');
    if (pillcareTech1) pillcareTech1.innerHTML = t.pillcareTech1;
    
    const pillcareTech2 = document.getElementById('pillcare-tech2');
    if (pillcareTech2) pillcareTech2.innerHTML = t.pillcareTech2;
    
    const pillcareTech3 = document.getElementById('pillcare-tech3');
    if (pillcareTech3) pillcareTech3.innerHTML = t.pillcareTech3;
    
    const pillcareTech4 = document.getElementById('pillcare-tech4');
    if (pillcareTech4) pillcareTech4.innerHTML = t.pillcareTech4;
    
    const pillcareTech5 = document.getElementById('pillcare-tech5');
    if (pillcareTech5) pillcareTech5.innerHTML = t.pillcareTech5;
    
    // LawRo 기술 스택
    const lawroTech1 = document.getElementById('lawro-tech1');
    if (lawroTech1) lawroTech1.innerHTML = t.lawroTech1;
    
    const lawroTech2 = document.getElementById('lawro-tech2');
    if (lawroTech2) lawroTech2.innerHTML = t.lawroTech2;
    
    const lawroTech3 = document.getElementById('lawro-tech3');
    if (lawroTech3) lawroTech3.innerHTML = t.lawroTech3;
    
    const lawroTech4 = document.getElementById('lawro-tech4');
    if (lawroTech4) lawroTech4.innerHTML = t.lawroTech4;
    
    const lawroTech5 = document.getElementById('lawro-tech5');
    if (lawroTech5) lawroTech5.innerHTML = t.lawroTech5;
    
    // Contact 섹션
    const contactHeading = document.querySelector('#contact .section-heading');
    if (contactHeading) contactHeading.innerHTML = t.contactTitle;
    
    const contactDesc = document.querySelector('#contact .paragraph-text');
    if (contactDesc) contactDesc.innerHTML = t.contactDesc;
    
    const contactLabels = document.querySelectorAll('#contact strong');
    if (contactLabels.length >= 3) {
        contactLabels[0].innerHTML = t.phoneLabel;
        contactLabels[1].innerHTML = t.emailLabel;
        contactLabels[2].innerHTML = t.githubLabel;
    }
    
    // Copyright
    const copyright = document.querySelector('footer');
    if (copyright) copyright.innerHTML = t.copyright;
    
    // 언어 버튼 텍스트 업데이트
    updateLanguageButton();
    
    // 드롭다운 메뉴 닫기
    const languageMenu = document.getElementById('language-menu');
    if (languageMenu) {
        languageMenu.classList.remove('show');
    }
    
    // 로컬 스토리지에 언어 설정 저장
    localStorage.setItem('preferredLanguage', lang);
    
    console.log('Language changed to:', lang);
}

// 언어 드롭다운 토글 함수
function toggleLanguageDropdown() {
    const languageMenu = document.getElementById('language-menu');
    if (languageMenu) {
        languageMenu.classList.toggle('show');
    }
}

// 언어 버튼 텍스트 업데이트
function updateLanguageButton() {
    const languageButton = document.getElementById('language-btn');
    if (languageButton) {
        const languageNames = {
            'kr': '한국어',
            'jp': '日本語', 
            'en': 'English'
        };
        languageButton.innerHTML = languageNames[currentLanguage] || '한국어';
    }
}

// 드롭다운 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageMenu = document.getElementById('language-menu');
    
    if (languageDropdown && languageMenu && !languageDropdown.contains(event.target)) {
        languageMenu.classList.remove('show');
    }
});

// 페이지 로드 시 저장된 언어 설정 불러오기
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        // 기본 언어일 때도 버튼 텍스트 설정
        updateLanguageButton();
    }
}); 