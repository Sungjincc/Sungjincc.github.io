
$(document).ready(function() {
    general_utils();
    blog_posts();
    
    // 페이지 로드 후 약간의 지연을 두고 초기 네비게이션 활성화
    setTimeout(function() {
        console.log('Available nav buttons:');
        $('.nav-links').each(function() {
            console.log('Button:', $(this).text(), 'href:', $(this).attr('href'));
        });
        updateActiveNavigation();
    }, 100);
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    // 네비게이션 링크 클릭 시 즉시 active 상태로 변경
    $('.nav-links').on('click', function(e) {
        var href = $(this).attr('href');
        console.log('Click detected on:', $(this).text(), 'href:', href);
        
        // LANGUAGE 버튼은 제외 (href가 #이 아님)
        if (href && href !== '#' && href.startsWith('#')) {
            // 모든 버튼에서 active 제거
            $('.nav-links').removeClass('active');
            console.log('Removed active from all buttons');
            
            // 클릭한 버튼에 active 추가
            $(this).addClass('active');
            console.log('Added active to:', $(this).text());
            
            // 강제로 스타일 적용 확인
            setTimeout(function() {
                console.log('Active buttons after click:', $('.nav-links.active').length);
                $('.nav-links.active').each(function() {
                    console.log('Active button:', $(this).text(), 'has active class:', $(this).hasClass('active'));
                });
            }, 50);
        }
    });

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

// 언어변경 기능은 language.js에서 처리됩니다

// 활성 네비게이션 업데이트 함수
function updateActiveNavigation() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    
    // 각 섹션 위치 확인
    var aboutOffset = $('#about').length ? $('#about').offset().top - 100 : 0;
    var skillsOffset = $('#skills').length ? $('#skills').offset().top - 100 : 0;
    var projectsOffset = $('#projects').length ? $('#projects').offset().top - 100 : 0;
    var contactOffset = $('#contact').length ? $('#contact').offset().top - 300 : 0; // Contact는 더 일찍 활성화
    
    // 모든 네비게이션 버튼에서 active 클래스 제거
    $('.nav-links').removeClass('active');
    
    // 현재 스크롤 위치에 따른 활성화
    var activeSection = '';
    var activeButton = null;
    
    // 페이지 하단 근처에 있으면 Contact 활성화 (마지막 섹션 처리)
    if (scrollTop + windowHeight >= documentHeight - 100) {
        activeButton = $('.nav-links[href="#contact"]');
        activeButton.addClass('active');
        activeSection = 'contact (near bottom)';
    } else if (scrollTop >= contactOffset) {
        activeButton = $('.nav-links[href="#contact"]');
        activeButton.addClass('active');
        activeSection = 'contact';
    } else if (scrollTop >= projectsOffset) {
        activeButton = $('.nav-links[href="#projects"]');
        activeButton.addClass('active');
        activeSection = 'projects';
    } else if (scrollTop >= skillsOffset) {
        activeButton = $('.nav-links[href="#skills"]');
        activeButton.addClass('active');
        activeSection = 'skills';
    } else if (scrollTop >= aboutOffset) {
        activeButton = $('.nav-links[href="#about"]');
        activeButton.addClass('active');
        activeSection = 'about';
    }
    
    if (activeButton && activeButton.length > 0) {
        console.log('Active section:', activeSection, 'ScrollTop:', scrollTop, 'Bottom detect:', scrollTop + windowHeight, '>=', documentHeight - 100);
        console.log('Contact offset:', contactOffset);
    } else {
        console.log('No active section detected. ScrollTop:', scrollTop);
    }
}

// 네비게이션 배경 동적 변경 및 활성화
var scrollTimeout;
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var navMenu = $('.head-menu-wrap');
    
    // 네비게이션 배경 변경
    if (scrollTop > 100) { // 100px 이상 스크롤했을 때
        navMenu.addClass('scrolled');
    } else {
        navMenu.removeClass('scrolled');
    }
    
    // 스크롤 이벤트 최적화 (부드러운 스크롤 중에도 즉시 반응)
    clearTimeout(scrollTimeout);
    updateActiveNavigation();
    
    scrollTimeout = setTimeout(function() {
        updateActiveNavigation();
    }, 100);
});