const url = "https://whatsyourfavending.netlify.app/";

function setShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = "엔딩 취향 유형 결과";
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + "img/image-" + resultAlt + ".jpg";
    const shareURL = url + "page/result-" + resultAlt + ".html";
    Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        buttons: [
        {
            title: "결과확인하기",
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        },
        ],
    });
}

function twitterShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = "엔딩 취향 유형 결과";
    const shareImage = url + "img/image-" + resultAlt + ".jpg";
    const shareURL = url + "page/result-" + resultAlt + ".html";
    window.open(
        "https://twitter.com/intent/tweet?text=" + shareTitle + "&url=" + shareURL 
    );
}
