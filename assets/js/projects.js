$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/PillCare-screen.png',
            link: 'https://github.com/Sungjincc/PillCare',
            title: 'PillCare',
            demo: false,
            technologies: ['Kotlin', 'Android', 'Jetpack Compose', 'Room Database', 'Retrofit', 'Coroutine'],
            description: "고령층이 약 복용 시간을 놓치지 않도록 돕는 스마트 복약 관리 앱으로,<br>RecyclerView 중첩 구조와 알림 기능으로 사용자 친화적인 UI를 제공하며, 현재 Compose 전환 및 서버 연동 구조 효율화를 진행 중입니다.",
            detailed_description: "캡스톤 프로젝트로 개발한 고령층 대상 복약 관리 솔루션입니다. RoomDB를 활용한 로컬 데이터 관리, Jetpack Compose와 XML을 병행한 UI 개발, Retrofit과 Coroutine 기반의 안정적인 네트워크 처리를 구현했습니다.",
            features: [
                "• Jetpack Compose + XML 하이브리드 UI",
                "• RecyclerView 중첩 구조로 직관적 UI 구성", 
                "• Room Database 기반 로컬 데이터 저장",
                "• Retrofit + Coroutine 비동기 API 통신 구현",
                "• 정확한 복약 시간 알림 및 스케줄 관리"
            ],
            categories: ['featured', 'native', 'healthcare']
        },
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/Sungjincc/LawRo',
            title: 'LawRo',
            demo: false,
            technologies: ['Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Coroutine'],
            description: "외국인 근로자의 권리(권리 right, 노동 law)를 스스로 점검할 수 있도록 돕는 AI기반 계약서 분석 서비스 앱으로,<br>언어 장벽을 해결하고 안전한 근로 환경 조성을 돕는 프로젝트입니다. TABA Project에서 팀 리더로서 프로젝트를 이끌며 최우수상을 수상했습니다.",
            detailed_description: "일본 근무 경험에서 착안한 외국인 근로자 지원 솔루션입니다. UI 디자이너와 협업하여 최신 트렌드를 반영한 디자인을 완성했으며, 다양한 API 연동과 보안 강화를 통해 실용적인 서비스를 구현했습니다.",
            features: [
                "• Jetpack Compose 100% 네이티브 UI 구현",
                "• 6개국 다국어 지원 시스템 구축 (KR/US/JP/CN/TH/VN)",
                "• MVVM + Repository 패턴 Clean Architecture 설계",
                "• Retrofit + Coroutine 비동기 API 통신 구현",
                "• Naver Maps SDK 실시간 위치 기반 서비스 구축"
            ],
            categories: ['featured', 'native', 'social']
        }
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
                            <img src="${project.image}" alt="${project.title} 프로젝트 이미지" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal" style="font-size: 18px; color: #000; font-weight: 500; line-height: 1.6;">${project.description} ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}</p>
                        
                        ${project.detailed_description ? `<p class="paragraph-text-normal" style="margin-top: 15px; font-size: 16px; color: #000; font-weight: 500;">${project.detailed_description}</p>` : ''}
                        
                        ${project.features ? `
                            <div style="margin-top: 20px;">
                                <strong style="color: #1976D2; font-size: 20px; font-weight: bold;">What I did:</strong>
                                <ul style="margin: 8px 0 0 20px; font-size: 18px; color: #000; font-weight: 500;">
                                    ${project.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </article>

                                
                    <div class="card__meta" style="margin-top: 20px;">
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