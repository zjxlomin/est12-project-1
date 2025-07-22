const videoList = [
    {
        videoId: 1,
        src: "https://www.youtube.com/embed/14ultAJDYys?si=bKaIg1-lObl_fmca",
        url: "",
        thumbnail: "img/thumbnails/thumbnail.png",
        time: "8:16",
        profile: "img/profiles/profile.jpg",
        title: "title1",
        channel: "channel",
        views: "123",
        uploaded: "1일 전",
    },
    {
        videoId: 2,
        src: "https://www.youtube.com/embed/kvduHyPbFHA?si=Z0dsQDC36X9J9gpY",
        url: "",
        thumbnail: "img/thumbnails/thumbnail.png",
        time: "2:34",
        profile: "img/profiles/profile.jpg",
        title: "잠든 친구 오지에 버리기ㅋㅋㅋ",
        channel: "핫소스",
        views: "612만",
        uploaded: "3년 전",
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]

function showThumbs(videoList) {
    for(const video of videoList) {
        document.write(`
            <a class="card col-3" href="video.html?videoId=${video.videoId}" style="text-decoration: none;">
                <!-- 썸네일, 러닝타임 -->
                <div style="position: relative;">
                    <img src=${video.thumbnail} class="card-img-top" alt="..." style="border-radius: 10px;">
                    <div class="vid-time">
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
                        <p class="vid-info" style="font-weight: bold; font-size: 20px;">
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
                <p class="vid-info" style="font-size: 15px;">
                    ${video.channel}
                </p>
                <p class="vid-info" style="font-size: 15px;">
                    조회수 ${video.views}회 · ${video.uploaded}
                </p>
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
                        <div class="vid-time" style="right: 10px; bottom: 5px;">
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