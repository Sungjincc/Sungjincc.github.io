$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/Sungjincc/TaskManager',
            title: '할일 관리 앱',
            demo: false,
            technologies: ['Kotlin', 'Room Database', 'MVVM'],
            description: "사용자의 일정과 할일을 효율적으로 관리할 수 있는 안드로이드 앱입니다. Material Design을 적용하여 직관적인 UI를 제공합니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/Sungjincc/WeatherApp',
            title: '날씨 정보 앱',
            demo: false,
            technologies: ['Java', 'REST API', 'Volley'],
            description: "실시간 날씨 정보와 주간 예보를 제공하는 앱입니다. OpenWeather API를 활용하여 정확한 기상 정보를 제공합니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/Sungjincc/ChatApp',
            title: '실시간 채팅 앱',
            demo: false,
            technologies: ['Kotlin', 'Firebase', 'Authentication'],
            description: "Firebase를 활용한 실시간 채팅 애플리케이션입니다. 사용자 인증과 메시지 저장 기능을 포함합니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/Sungjincc/ExpenseTracker',
            title: '가계부 앱',
            demo: false,
            technologies: ['Kotlin', 'SQLite', 'Chart Library'],
            description: "개인 지출을 추적하고 분석할 수 있는 가계부 앱입니다. 차트와 통계 기능으로 지출 패턴을 시각화합니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/Sungjincc/PhotoGallery',
            title: '사진 갤러리 앱',
            demo: false,
            technologies: ['Java', 'Camera API', 'Gallery'],
            description: "사진 촬영과 갤러리 관리 기능을 제공하는 앱입니다. 필터와 편집 기능을 포함합니다.",
            categories: ['native']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/Sungjincc/MusicPlayer',
            title: '음악 플레이어',
            demo: false,
            technologies: ['Kotlin', 'MediaPlayer', 'Notification'],
            description: "로컬 음악 파일을 재생할 수 있는 음악 플레이어 앱입니다. 백그라운드 재생과 알림 기능을 지원합니다.",
            categories: ['native']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/Sungjincc/FitnessTracker',
            title: '운동 트래커',
            demo: false,
            technologies: ['Kotlin', 'Sensor API', 'Health Kit'],
            description: "사용자의 운동량과 건강 데이터를 추적하는 피트니스 앱입니다. 걸음 수, 칼로리, 운동 시간을 기록합니다.",
            categories: ['native', 'health']
        },
        {
            image: 'assets/images/s3scan.png',
            link: 'https://github.com/Sungjincc/QRCodeScanner',
            title: 'QR 코드 스캐너',
            demo: false,
            technologies: ['Java', 'ZXing', 'Camera'],
            description: "QR 코드와 바코드를 스캔하고 정보를 처리하는 앱입니다. 빠른 인식과 히스토리 관리 기능을 제공합니다.",
            categories: ['native', 'utility']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://github.com/Sungjincc/NewsReader',
            title: '뉴스 리더 앱',
            demo: false,
            technologies: ['Kotlin', 'RecyclerView', 'News API'],
            description: "다양한 뉴스 소스에서 최신 뉴스를 가져와 보여주는 뉴스 리더 앱입니다. 카테고리별 필터링 기능을 제공합니다.",
            categories: ['native']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://github.com/Sungjincc/ShoppingList',
            title: '쇼핑 리스트 앱',
            demo: false,
            technologies: ['Java', 'SharedPreferences', 'Material Design'],
            description: "쇼핑 목록을 작성하고 관리할 수 있는 간편한 앱입니다. 체크리스트와 카테고리 분류 기능을 포함합니다.",
            categories: ['native']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://github.com/Sungjincc/VoiceRecorder',
            title: '음성 녹음기',
            demo: false,
            technologies: ['Kotlin', 'MediaRecorder', 'Audio'],
            description: "고품질 음성 녹음과 재생 기능을 제공하는 앱입니다. 녹음 파일 관리와 공유 기능을 지원합니다.",
            categories: ['native']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://github.com/Sungjincc/Calculator',
            title: '고급 계산기',
            demo: false,
            technologies: ['Java', 'Mathematical Operations'],
            description: "기본 계산부터 과학 계산까지 지원하는 다기능 계산기 앱입니다. 계산 히스토리와 단위 변환 기능을 포함합니다.",
            categories: ['utility']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://github.com/Sungjincc/PasswordManager',
            title: '비밀번호 관리자',
            demo: false,
            technologies: ['Kotlin', 'Encryption', 'Biometric'],
            description: "안전한 암호화를 통해 비밀번호를 저장하고 관리하는 앱입니다. 생체 인증과 자동 생성 기능을 지원합니다.",
            categories: ['utility', 'security']
        },
        {
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://github.com/Sungjincc/CloudStorage',
            title: '클라우드 스토리지 앱',
            demo: false,
            technologies: ['Kotlin', 'Google Drive API', 'Sync'],
            description: "개인 파일을 클라우드에 백업하고 동기화하는 앱입니다. 자동 백업과 파일 공유 기능을 제공합니다.",
            categories: ['utility', 'cloud']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://github.com/Sungjincc/NoteTaking',
            title: '노트 작성 앱',
            demo: false,
            technologies: ['Java', 'Rich Text Editor', 'Export'],
            description: "텍스트, 이미지, 음성을 포함한 다양한 형태의 노트를 작성할 수 있는 앱입니다. 검색과 태그 기능을 지원합니다.",
            categories: ['utility']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://github.com/Sungjincc/LanguageLearning',
            title: '언어 학습 앱',
            demo: false,
            technologies: ['Kotlin', 'TTS', 'Progress Tracking'],
            description: "게임화된 언어 학습 경험을 제공하는 앱입니다. 발음 연습, 퀴즈, 진도 추적 기능을 포함합니다.",
            categories: ['education']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}