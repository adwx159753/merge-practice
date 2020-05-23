var player;//Youtube播放器
var currentPlay=0;//紀錄目前播到第幾首歌

//當YOUTUBE API準備好時
function onYouTubeIframeAPIReady(){

    player = new YT.Player("player",
        {
            height:"390",
            width:"640",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0,//不自動播放
                "controls":0,//不顯示控制項
                "start":playTime[currentPlay][0],//起始秒數
                "end":playTime[currentPlay][1],//結束秒數
                "showinfo":0,//上方標題(關不掉->此行無效)
                "rel":0,//預覽影片
                "iv_load_policy":3//不顯示影片註解式行銷
            },
            events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
}
//當YOUTUBE播放器準備好時 (設定按鈕event)
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
//當播放器播放狀態改變時 (跳到下一首)
function onPlayerStateChange(event){
    //當目前播放秒數與預期播放結束秒數相同時->下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        //正常播下一首
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        //最後一首歌
        else{
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    //抓取影片標題來顯示
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}

