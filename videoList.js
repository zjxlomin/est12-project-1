const videoList = [
    {
        videoId: 1,
        src: "https://www.youtube.com/embed/h0KIWaUEIgQ?si=fkbzAXJpPeRG5i-v",
        thumbnail: "https://img.youtube.com/vi/h0KIWaUEIgQ/mqdefault.jpg",
        time: "2:46",
        profile: "img/profiles/profile.jpg",
        title: "[MV] 한로로 (HANRORO) - 사랑하게 될 거야 (Landing in Love)",
        channel: "한로로 HANRORO",
        views: "56만",
        uploaded: "1년 전",
        desc: "",
    },
    {
        videoId: 2,
        src: "https://www.youtube.com/embed/M8oCsI0iG7Y?si=pnHtqvez0UcKanYB",
        thumbnail: "https://img.youtube.com/vi/M8oCsI0iG7Y/mqdefault.jpg",
        time: "5:11",
        profile: "img/profiles/profile.jpg",
        title: "잔나비 [JANNABI] - 사랑의이름으로! (feat. 카리나 of aespa) M/V",
        channel: "잔나비 JANNABI",
        views: "98만",
        uploaded: "2개월 전",
        desc: "",
    },
    {
        videoId: 3,
        src: "https://www.youtube.com/embed/19oT04OuBhg?si=wjLUIfMg0Sye4hoP",
        thumbnail: "https://img.youtube.com/vi/19oT04OuBhg/mqdefault.jpg",
        time: "3:49",
        profile: "img/profiles/profile.jpg",
        title: "이찬혁 (LEE CHANHYUK) - '멸종위기사랑' M/V",
        channel: "AKMU",
        views: "82만",
        uploaded: "6일 전",
        desc: "",
    },
    {
        videoId: 4,
        src: "https://www.youtube.com/embed/cIMzRdVQI3E?si=dzxOQZrCgCP8KYIc",
        thumbnail: "https://img.youtube.com/vi/cIMzRdVQI3E/mqdefault.jpg",
        time: "23:56",
        profile: "img/profiles/profile.jpg",
        title: "[드림 vs 나눔] 7/12 | 2025 KBO 올스타전 | 하이라이트 | TVING",
        channel: "TVING SPORTS",
        views: "57만",
        uploaded: "10일 전",
        desc: "",
    },
    {
        videoId: 5,
        src: "https://www.youtube.com/embed/Ha1tWwGntpM?si=zM179JgDQKtTt0jY",
        thumbnail: "https://img.youtube.com/vi/Ha1tWwGntpM/mqdefault.jpg",
        time: "5:39",
        profile: "img/profiles/profile.jpg",
        title: "[F1입문 필수시청!] 🏎️F1뉴비를 위한 세상에서 가장 쉬운 F1 입문 가이드",
        channel: "원투피니시",
        views: "13만",
        uploaded: "3개월 전",
        desc: "",
    },
    {
        videoId: 6,
        src: "https://www.youtube.com/embed/nTGLkSVcyqg?si=ZGVaNiU7uy1aVszX",
        thumbnail: "https://img.youtube.com/vi/nTGLkSVcyqg/mqdefault.jpg",
        time: "1:07:21",
        profile: "img/profiles/profile.jpg",
        title: "T1 vs BLG 매치 하이라이트 | 결승전 | 11.02 | 2024 월드 챔피언십",
        channel: "LCK",
        views: "300만",
        uploaded: "8개월 전",
        desc: "",
    },
    {
        videoId: 7,
        src: "https://www.youtube.com/embed/tRxsB9MBhnQ?si=A0heY-9bgORZNCxS",
        thumbnail: "https://img.youtube.com/vi/tRxsB9MBhnQ/mqdefault.jpg",
        time: "1:03:29",
        profile: "img/profiles/profile.jpg",
        title: "⏰ 세상에서 가장 친절한 『테넷』 해설 몰아보기ㅣ캐릭터별 순행 역행 동선 완벽분석",
        channel: "요런시점 movie",
        views: "8.8만",
        uploaded: "7개월 전",
        desc: "",
    },
    {
        videoId: 8,
        src: "https://www.youtube.com/embed/KHBwzpBZ3C4?si=hHyVYQbd5m0Qc_KF",
        thumbnail: "https://img.youtube.com/vi/KHBwzpBZ3C4/mqdefault.jpg",
        time: "51:12",
        profile: "img/profiles/profile.jpg",
        title: "[1박2일 시즌1 153회 -2][오프로드편] 속고 속이는 오프로드 레이스! 긴장을 늦추는 순간 반전이 일어난다Full ver.(20100815-2)",
        channel: "KBS Entertain: 깔깔티비",
        views: "354만",
        uploaded: "5년 전",
        desc: "",
    },
    {
        videoId: 9,
        src: "https://www.youtube.com/embed/KNSqMLSy1H8?si=f1IhNwlYptOTBXpC",
        thumbnail: "https://img.youtube.com/vi/KNSqMLSy1H8/mqdefault.jpg",
        time: "25:04",
        profile: "img/profiles/profile.jpg",
        title: "[#무도] 길성준 일상 Vlog │ 에너지 과소비가 불러온 재앙🚨│ 지구 멸망(?) 에도 콩트 짜는 뼈그맨까지🦋 '나비효과' 3편 MBC101218방송",
        channel: "올끌 (All of MBClassic)",
        views: "149만",
        uploaded: "2년 전",
        desc: "",
    },
    {
        videoId: 10,
        src: "https://www.youtube.com/embed/2pDqErA71Zg?si=GavoNyL3WlHnpsow",
        thumbnail: "https://img.youtube.com/vi/2pDqErA71Zg/mqdefault.jpg",
        time: "4:17",
        profile: "img/profiles/profile.jpg",
        title: "진나이 토모노리-앵무새.flv",
        channel: "가을매",
        views: "5.1천",
        uploaded: "5년 전",
        desc: "",
    },
]

// home functions
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

// video functions
const urlParams = new URL(location.href).searchParams;
const id = urlParams.get('videoId');

function showVideo(videoList, id) {
    const video = videoList[id-1];
    document.write(`
        <div class="video">
            <iframe src=${video.src} frameborder="0" width="100%" height="100%"></iframe>
        </div>
        <h3 class="vid-info" style="font-weight: bold; padding-top: 8px; padding-left: 15px;">${video.title}</h1>
        <div class="row">
            <!-- 채널 프로필 -->
            <div class="col" style="max-width: 70px; margin-left: 10px;">
                <img src=${video.profile} class="ch-profile" alt="">
            </div>
            <!-- 영상 정보 -->
            <div class="col" style="margin-top: 5px;">
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
                    <div class="col" style="margin-top: 5px; padding: 0px;">
                        <p class="vid-info" style="font-weight: bold; font-size: 16px;">
                            ${video.title}
                        </p>
                        <p class="vid-info" style="font-size: 13px;">
                            ${video.channel}
                        </p>
                        <p class="vid-info" style="font-size: 13px;">
                            조회수 ${video.views}회 · ${video.uploaded}
                        </p>
                    </div>
                </div>
            </a>
        `);
        i++;
    }
}