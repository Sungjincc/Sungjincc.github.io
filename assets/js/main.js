
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://www.nagekar.com/2017/02/trip-to-bramhatal-uttarakhand.html',
            title: 'Trek To Bramhatal (Uttarakhand)',
        },
        {
            url: 'https://www.nagekar.com/2017/08/privacy.html',
            title: 'Privacy - How I Converted',
        },
        {
            url: 'https://www.nagekar.com/2018/01/jagriti-yatra.html',
            title: 'Jagriti Yatra 2017',
        },
        {
            url: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Private Cloud Part 2 | Encrypted Storage With NextCloud',
        },
        {
            url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
            title: 'ELI5 - How HTTPS Works',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://www.nagekar.com');">

        <div class="blog-link">

            <h3><a href="https://www.nagekar.com">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}

// 언어변경 기능
let currentLanguage = 'ko'; // 기본값은 한국어

function toggleLanguage() {
    if (currentLanguage === 'ko') {
        changeToEnglish();
        currentLanguage = 'en';
    } else {
        changeToKorean();
        currentLanguage = 'ko';
    }
}

function changeToEnglish() {
    // 네비게이션 메뉴
    $('.head-menu-wrap a').eq(0).text('ABOUT');
    $('.head-menu-wrap a').eq(1).text('SKILLS');
    $('.head-menu-wrap a').eq(2).text('PROJECT');
    $('.head-menu-wrap a').eq(3).text('한국어');
    
    // 섹션 제목들
    $('#about .section-heading').text('About');
    $('#skills .section-heading').text('Skills');
    $('#projects .section-heading').text('Projects');
    $('#extra .section-heading').text('Contact');
    
    // About 섹션
    $('#about .paragraph-text').eq(0).html('Hello! I am Sungjin Choi, an Android app developer. I am passionate about mobile application development and aim to create apps that are intuitive and convenient for users. I have experience in native Android development using Java and Kotlin, as well as cross-platform development.');
    $('#about .paragraph-text').eq(1).html('I am very interested in new technologies and trends and continue to learn. I am particularly focused on app development using Material Design and the latest Android Architecture Components. I value user experience (UX) and strive to write code that considers performance optimization and stability.');
    $('#about .paragraph-text').eq(2).html('You can check out my projects on <a href="https://github.com/Sungjincc">GitHub</a>, and I record development-related content on my blog. You can find my contact information at the <span class="extra-link"><a href="#extra">bottom</a></span> of the page.');
    
    // Skills 섹션
    $('#skills .skills-subsection').eq(0).text('Summary');
    $('#skills .paragraph-text.center-align').text('I am a developer specialized in Android native app development. I create user-centered mobile applications and develop stable and high-performance apps using the latest Android development technologies and architecture.');
    $('#skills .skills-subsection').eq(1).text('Technical');
    
    // Contact 섹션
    $('#extra .paragraph-text').eq(0).text('If you are interested in Android development projects or collaboration, please feel free to contact me anytime! I enjoy talking about new technologies and sharing development experiences.');
    $('#extra .paragraph-text').eq(1).html('Please feel free to contact me anytime: <a href="mailto:chltjdwls294@naver.com">chltjdwls294@naver.com</a>. I will respond as soon as possible.');
    $('#extra .paragraph-text').eq(2).text('You can check out more projects and code on my GitHub.');
}

function changeToKorean() {
    // 네비게이션 메뉴
    $('.head-menu-wrap a').eq(0).text('ABOUT');
    $('.head-menu-wrap a').eq(1).text('SKILLS');
    $('.head-menu-wrap a').eq(2).text('PROJECT');
    $('.head-menu-wrap a').eq(3).text('언어변경');
    
    // 섹션 제목들
    $('#about .section-heading').text('About');
    $('#skills .section-heading').text('Skills');
    $('#projects .section-heading').text('Projects');
    $('#extra .section-heading').text('연락처');
    
    // About 섹션 (원래 한국어로 복원)
    $('#about .paragraph-text').eq(0).text('안녕하세요! 안드로이드 앱 개발자 최성진입니다. 모바일 애플리케이션 개발에 대한 열정을 가지고 있으며, 사용자가 직관적이고 편리하게 사용할 수 있는 앱을 만드는 것을 목표로 합니다. Java와 Kotlin을 활용한 네이티브 안드로이드 개발부터 크로스 플랫폼 개발까지 다양한 경험을 쌓아왔습니다.');
    $('#about .paragraph-text').eq(1).text('새로운 기술과 트렌드에 관심이 많아 지속적으로 학습하고 있으며, 특히 Material Design과 최신 Android Architecture Components를 활용한 앱 개발에 집중하고 있습니다. 사용자 경험(UX)을 중시하며, 성능 최적화와 안정성을 고려한 코드 작성을 지향합니다.');
    $('#about .paragraph-text').eq(2).html('제가 개발한 프로젝트들은 <a href="https://github.com/Sungjincc">GitHub</a>에서 확인하실 수 있으며, 개발 관련 내용을 블로그에 기록하고 있습니다. 연락처는 페이지 <span class="extra-link"><a href="#extra">하단</a></span>에서 확인하실 수 있습니다.');
    
    // Skills 섹션
    $('#skills .skills-subsection').eq(0).text('Summary');
    $('#skills .paragraph-text.center-align').text('안드로이드 네이티브 앱 개발에 특화된 개발자입니다. 사용자 중심의 모바일 애플리케이션을 만들고, 최신 안드로이드 개발 기술과 아키텍처를 활용하여 안정적이고 성능이 우수한 앱을 개발합니다.');
    $('#skills .skills-subsection').eq(1).text('Technical');
    
    // Contact 섹션
    $('#extra .paragraph-text').eq(0).text('안드로이드 개발 관련 프로젝트나 협업에 관심이 있으시다면 언제든지 연락 주세요! 새로운 기술에 대한 이야기나 개발 경험을 나누는 것을 좋아합니다.');
    $('#extra .paragraph-text').eq(1).html('언제든지 편하게 연락주세요: <a href="mailto:chltjdwls294@naver.com">chltjdwls294@naver.com</a>. 빠른 시일 내에 답변드리겠습니다.');
    $('#extra .paragraph-text').eq(2).text('제 GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.');
}