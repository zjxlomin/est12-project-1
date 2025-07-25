const videoList = [
    {
        videoId: 1,
        src: "https://www.youtube.com/embed/h0KIWaUEIgQ?si=fkbzAXJpPeRG5i-v",
        thumbnail: "https://img.youtube.com/vi/h0KIWaUEIgQ/mqdefault.jpg",
        time: "2:46",
        profile: "img/profiles/notmy_profile.jpg",
        title: "[MV] 한로로 (HANRORO) - 사랑하게 될 거야 (Landing in Love)",
        channel: "한로로 HANRORO",
        views: "56만",
        uploaded: "1년 전",
        desc: "설명",
    },
    {
        videoId: 2,
        src: "https://www.youtube.com/embed/M8oCsI0iG7Y?si=pnHtqvez0UcKanYB",
        thumbnail: "https://img.youtube.com/vi/M8oCsI0iG7Y/mqdefault.jpg",
        time: "5:11",
        profile: "img/profiles/notmy_profile.jpg",
        title: "잔나비 [JANNABI] - 사랑의이름으로! (feat. 카리나 of aespa) M/V",
        channel: "잔나비 JANNABI",
        views: "98만",
        uploaded: "2개월 전",
        desc: "설명",
    },
    {
        videoId: 3,
        src: "https://www.youtube.com/embed/z1HlPOoHm5w?si=_faOCBQmzn8XPA-W",
        thumbnail: "https://img.youtube.com/vi/z1HlPOoHm5w/mqdefault.jpg",
        time: "7:59",
        profile: "img/profiles/notmy_profile.jpg",
        title: "231008 실리카겔(Silica Gel) - T + Tik Tak Tok @ 2023 부산국제록페스티벌, 삼락생태공원",
        channel: "gongrot",
        views: "24만",
        uploaded: "1년 전",
        desc: "설명",
    },
    {
        videoId: 4,
        src: "https://www.youtube.com/embed/cIMzRdVQI3E?si=dzxOQZrCgCP8KYIc",
        thumbnail: "https://img.youtube.com/vi/cIMzRdVQI3E/mqdefault.jpg",
        time: "23:56",
        profile: "img/profiles/notmy_profile.jpg",
        title: "[드림 vs 나눔] 7/12 | 2025 KBO 올스타전 | 하이라이트 | TVING",
        channel: "TVING SPORTS",
        views: "57만",
        uploaded: "10일 전",
        desc: "설명",
    },
    {
        videoId: 5,
        src: "https://www.youtube.com/embed/Ha1tWwGntpM?si=zM179JgDQKtTt0jY",
        thumbnail: "https://img.youtube.com/vi/Ha1tWwGntpM/mqdefault.jpg",
        time: "5:39",
        profile: "img/profiles/notmy_profile.jpg",
        title: "[F1입문 필수시청!] 🏎️F1뉴비를 위한 세상에서 가장 쉬운 F1 입문 가이드",
        channel: "원투피니시",
        views: "13만",
        uploaded: "3개월 전",
        desc: "설명",
    },
    {
        videoId: 6,
        src: "https://www.youtube.com/embed/nTGLkSVcyqg?si=ZGVaNiU7uy1aVszX",
        thumbnail: "https://img.youtube.com/vi/nTGLkSVcyqg/mqdefault.jpg",
        time: "1:07:21",
        profile: "img/profiles/notmy_profile.jpg",
        title: "T1 vs BLG 매치 하이라이트 | 결승전 | 11.02 | 2024 월드 챔피언십",
        channel: "LCK",
        views: "300만",
        uploaded: "8개월 전",
        desc: "설명",
    },
    {
        videoId: 7,
        src: "https://www.youtube.com/embed/tRxsB9MBhnQ?si=A0heY-9bgORZNCxS",
        thumbnail: "https://img.youtube.com/vi/tRxsB9MBhnQ/mqdefault.jpg",
        time: "1:03:29",
        profile: "img/profiles/notmy_profile.jpg",
        title: "⏰ 세상에서 가장 친절한 『테넷』 해설 몰아보기ㅣ캐릭터별 순행 역행 동선 완벽분석",
        channel: "요런시점 movie",
        views: "8.8만",
        uploaded: "7개월 전",
        desc: "설명",
    },
    {
        videoId: 8,
        src: "https://www.youtube.com/embed/RI4ysZ7w28k?si=1Tr_5uZoG5b92TNG",
        thumbnail: "https://img.youtube.com/vi/RI4ysZ7w28k/mqdefault.jpg",
        time: "20:46",
        profile: "img/profiles/notmy_profile.jpg",
        title: "[밥묵자] 대화가 필요해 2023",
        channel: "꼰대희",
        views: "701만",
        uploaded: "2년 전",
        desc: "설명",
    },
    {
        videoId: 9,
        src: "https://www.youtube.com/embed/KNSqMLSy1H8?si=f1IhNwlYptOTBXpC",
        thumbnail: "https://img.youtube.com/vi/KNSqMLSy1H8/mqdefault.jpg",
        time: "25:04",
        profile: "img/profiles/notmy_profile.jpg",
        title: "[#무도] 길성준 일상 Vlog │ 에너지 과소비가 불러온 재앙🚨│ 지구 멸망(?) 에도 콩트 짜는 뼈그맨까지🦋 '나비효과' 3편 MBC101218방송",
        channel: "올끌 (All of MBClassic)",
        views: "149만",
        uploaded: "2년 전",
        desc: "설명",
    },
    {
        videoId: 10,
        src: "https://www.youtube.com/embed/2pDqErA71Zg?si=GavoNyL3WlHnpsow",
        thumbnail: "https://img.youtube.com/vi/2pDqErA71Zg/mqdefault.jpg",
        time: "4:17",
        profile: "img/profiles/notmy_profile.jpg",
        title: "진나이 토모노리-앵무새.flv",
        channel: "가을매",
        views: "5.1천",
        uploaded: "5년 전",
        desc: "설명",
    },
]

const myAccount = {
    name: "신승민",
    handle: "@zjxlomin",
    profile: "img/profiles/my_profile.jpg",
}

function showMymenu(myAccount) {
    document.write(`
        <div class="row mymenu-section" style="padding-top: 15px;">
            <div class="col" style="max-width: 50px;">
                <img class="ch-profile" src=${myAccount.profile} alt="" >
            </div>
            <div class="col" style="padding-left: 30px;">
                <div>${myAccount.name}</div>
                <div>${myAccount.handle}</div>
                <a href="" style="font-size: 14px; text-decoration: none;">내 채널 보기</a>
            </div>
        </div>
        <div class="row mymenu-section">
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">Google 계정</div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">계정 전환</div>
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                </div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>    
                </div>
                <div class="col" style="padding-top: 2px;">로그아웃</div>
            </a>
        </div>
        <div class="row mymenu-section">
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">Youtube 스튜디오</div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                        <rect x="2" y="2" width="20" height="20" rx="5" fill="white"></rect>
                        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#paint0_linear_6125_21625_yt1384)"></rect>
                        <path d="M12.7593 13.0229H9.9834V11.5654H12.7593C13.2427 11.5654 13.6333 11.4873 13.9312 11.3311C14.229 11.1748 14.4463 10.96 14.583 10.6865C14.7246 10.4082 14.7954 10.0908 14.7954 9.73438C14.7954 9.39746 14.7246 9.08252 14.583 8.78955C14.4463 8.4917 14.229 8.25244 13.9312 8.07178C13.6333 7.89111 13.2427 7.80078 12.7593 7.80078H10.5474V17H8.70898V6.33594H12.7593C13.5845 6.33594 14.2852 6.48242 14.8613 6.77539C15.4424 7.06348 15.8843 7.46387 16.187 7.97656C16.4897 8.48438 16.6411 9.06543 16.6411 9.71973C16.6411 10.4082 16.4897 10.999 16.187 11.4922C15.8843 11.9854 15.4424 12.3638 14.8613 12.6274C14.2852 12.8911 13.5845 13.0229 12.7593 13.0229Z" fill="white"></path>
                        <defs>
                        <linearGradient id="paint0_linear_6125_21625_yt1384" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop offset="0.3" stop-color="#E1002D"></stop>
                        <stop offset="0.9" stop-color="#E01378"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="col" style="padding-top: 2px;">내 Premium 혜택</div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 7V7h-3V5h-2v2h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h4v2H8v2h3v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4V9h6z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">구매 항목 및 멤버십</div>
            </a>
        </div>
        <div class="row mymenu-section">
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">Youtube의 내 데이터</div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">디자인: 기기 테마</div>
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                </div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m12.258 16.18-2.93-2.87c-.8.86-1.64 1.71-2.48 2.54l-2.25 2.25-.7-.7 2.25-2.25c.84-.84 1.68-1.69 2.48-2.55a15.891 15.891 0 01-2.9-4.18V8.4h1.14a14.96 14.96 0 002.44 3.45c1.59-1.81 2.89-3.69 3.43-5.7H2.078v-1h6.65V3h1v2.15h6.78v1h-2.73c-.54 2.32-2.01 4.42-3.77 6.42l2.63 2.58c-.13.35-.25.67-.38 1.03Zm9.25 4.83h-.95l-1.12-3.04h-4.91l-1.11 3.04h-.96l4.09-10.81h.87l4.09 10.81Zm-2.36-3.81-2.17-5.89-2.17 5.89h4.34Z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">언어: 한국어</div>
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                </div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">제한 모드: 사용 안함</div>
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                </div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM8.442 16c.232.993.545 1.88.917 2.624C10.211 20.327 11.202 21 12 21s1.789-.673 2.64-2.376c.373-.744.686-1.631.918-2.624H8.442Zm-4.505 0a9.019 9.019 0 005.547 4.64c-.912-1.064-1.64-2.69-2.067-4.64h-3.48Zm12.646 0c-.426 1.95-1.156 3.576-2.068 4.64A9.018 9.018 0 0020.062 16h-3.479ZM3.513 9A8.983 8.983 0 003 12c0 1.052.182 2.062.514 3h3.715A19.391 19.391 0 017 12c0-1.045.08-2.053.23-3H3.513Zm4.73 0A18.29 18.29 0 008 12c0 1.056.087 2.065.243 3h7.514c.156-.935.243-1.944.243-3s-.087-2.065-.243-3H8.243Zm8.527 0c.15.947.23 1.955.23 3s-.08 2.053-.23 3h3.716A8.982 8.982 0 0021 12a8.982 8.982 0 00-.514-3H16.77ZM9.484 3.358A9.02 9.02 0 003.938 8h3.479c.426-1.951 1.155-3.577 2.067-4.642ZM12 3c-.798 0-1.789.673-2.64 2.376-.373.744-.686 1.631-.918 2.624h7.116c-.232-.993-.545-1.88-.917-2.624C13.789 3.673 12.798 3 12 3Zm2.515.358c.912 1.065 1.642 2.69 2.068 4.642h3.48a9.02 9.02 0 00-5.548-4.642Z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">위치: 한국</div>
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                </div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M16 16H8v-2h8v2zm0-5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm-3 0H8v2h2v-2zm-3 0H5v2h2v-2zm9-3h-2v2h2V8zm3 0h-2v2h2V8zm-6 0h-2v2h2V8zm-3 0H8v2h2V8zM7 8H5v2h2V8zm15-3v14H2V5h20zm-1 1H3v12h18V6z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">단축키</div>
            </a>
        </div>
        <div class="row mymenu-section">
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clip-rule="evenodd" d="m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" fill-rule="evenodd"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">설정</div>
            </a>
        </div>
        <div class="row mymenu-section" style="border-bottom: 0px;">
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">고객센터</div>
            </a>
            <a href="" class="mymenu-btn row">
                <div class="col" style="padding: 0px; max-width: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path></svg>
                </div>
                <div class="col" style="padding-top: 2px;">의견 보내기</div>
            </a>
        </div>
    `);
}

// home.html functions
function showThumbs(videoList) {
    for(const video of videoList) {
        document.write(`
            <a class="card col-3" href="video.html?videoId=${video.videoId}" style="text-decoration: none;">
                <!-- 썸네일, 러닝타임 -->
                <div style="position: relative;">
                    <img src=${video.thumbnail} class="card-img-top" alt="..." style="border-radius: 10px;">
                    <div class="vid-time" style="bottom: 10px;">
                        ${video.time}
                    </div>
                </div>
                <div class="row">
                    <!-- 채널 프로필 -->
                    <div class="col" style="max-width: 70px;">
                        <img src=${video.profile} class="ch-profile" alt="">
                    </div>
                    <!-- 영상 정보 -->
                    <div class="col" style="margin-top: 5px;">
                        <p class="vid-info" style="font-weight: bold; font-size: 18px;">
                            ${video.title}
                        </p>
                        <p class="vid-info" style="font-size: 15px;">
                            ${video.channel}
                        </p>
                        <p class="vid-info" style="font-size: 15px;">
                            조회수 ${video.views}회 · ${video.uploaded}
                        </p>
                    </div>
                </div>
            </a>
        `);
    }
}

// video.html functions
const urlParams = new URL(location.href).searchParams;
const id = urlParams.get('videoId');
const video = videoList[id-1];

function showVideo(video) {
    document.write(`
        <div class="video">
            <iframe src=${video.src} frameborder="0" width="100%" height="100%"></iframe>
        </div>
        <h5 class="vid-info" style="font-weight: bold; padding-top: 8px; padding-left: 15px;">${video.title}</h5>
        <div class="row">
            <!-- 채널 프로필 -->
            <div class="col" style="max-width: 70px;">
                <img src=${video.profile} class="ch-profile" alt="">
            </div>
            <!-- 영상 정보 -->
            <div class="col" style="margin-top: 5px; padding: 0px;">
                <p class="vid-info" style="font-size: 15px; font-weight: bold;">
                    ${video.channel}
                </p>
            </div>
        </div>
        <!-- 영상 설명 --!>
        <div class="row">
            <div class="about-vid-cont">
                <p class="vid-info" style="font-size: 15px; font-weight: bold;">
                    조회수 ${video.views}회 · ${video.uploaded}
                </p>
                <p>${video.desc}</p>
            </div>
        </div>
    `);
}

function showRecomm(videoList, id) {
    let i = 1;
    for(let video of videoList) {
        if(i == id) {
            i++;
            continue;
        }
        document.write(`
            <a class="card" href="video.html?videoId=${video.videoId}" style="text-decoration: none; width: 100%;">
                <div class="row">
                    <!-- 썸네일, 러닝타임 -->
                    <div class="col" style="position: relative; max-width: 190px;">
                        <img src=${video.thumbnail} class="card-img-top" alt="..." style="border-radius: 10px; width: 170px;">
                        <div class="vid-time" style="right: 12px; top: 70px;">
                            ${video.time}
                        </div>
                    </div>
                    <!-- 영상 정보 -->
                    <div class="col" style="margin-top: 5px; padding: 0px; padding-right: 5px;">
                        <p class="vid-info" style="font-weight: bold; font-size: 15px;">
                            ${video.title}
                        </p>
                        <p class="vid-info" style="font-size: 12px;">
                            ${video.channel}
                        </p>
                        <p class="vid-info" style="font-size: 12px;">
                            조회수 ${video.views}회 · ${video.uploaded}
                        </p>
                    </div>
                </div>
            </a>
        `);
        i++;
    }
}