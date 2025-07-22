const videoList = [
    {
        videoId: 1,
        thumbnail: "img/thumbnails/thumbnail.png",
        time: "8:16",
        profile: "img/profiles/profile.jpg",
        title: "title1",
        channel: "channel",
        views: 123,
        uploaded: "1일 전",
    },
    {
        videoId: 2,
        thumbnail: "img/thumbnails/thumbnail.png",
        time: "2:34",
        profile: "img/profiles/profile.jpg",
        title: "title2",
        channel: "channel",
        views: 123,
        uploaded: "1일 전",
    },
]

for(const video of videoList) {
    document.write(`
        <a class="card col-3" href="video.html?videoId=${video.videoId}" style="text-decoration: none;">
            <!-- 썸네일, 러닝타임 -->
            <div style="position: relative;">
                <img src=${video.thumbnail} class="card-img-top" alt="..." style="border-radius: 10px;">
                <div class="vid-time">${video.time}</div>
            </div>
            <div class="row">
                <!-- 채널 프로필 -->
                <div class="col" style="max-width: 70px;">
                    <img src=${video.profile} class="ch-profile" alt="">
                </div>
                <!-- 영상 정보 -->
                <div class="col" style="margin-top: 5px;">
                    <h5 class="vid-info" style="font-weight: bold;">${video.title}</h5>
                    <h6 class="vid-info">${video.channel}</h6>
                    <h6 class="vid-info">조회수 ${video.views}회 · ${video.uploaded}</h6>
                </div>
            </div>
        </a>
    `);
}