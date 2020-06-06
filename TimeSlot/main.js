let playList=[    //播放清單
    "ZvnSpT25PLo",//1王
    "xf0dgo0zeyI",//2王
    "8ouNBRq2U4o",//3王
    "DXsb-XTsh7A",//4王
    "p8qofIUNVXM" //5王
]

var player;//Youtube播放器
var current;

$(document).ready(function(){
    function loadPlayer() {
        window.onYouTubePlayerAPIReady = function() {
            onYouTubePlayer();
        };
    }
    player = new YT.Player("player",
    {
        height:"600",
        width:"640",
        videoId:playList[0],
        playerVars:{
            "autoplay":0,//不自動播放
        }
    });
});

$(document).on("imageClick",function onYouTubeIframeAPIReady(e,id){

    current = id - 1;//播放該boss攻略影片

    $('.name').html("<h2> Boss" + id + "</h2><br>");//王的名稱
    $('.picture').html('<img src = TimeSlot/picture/team'+id+'.jpg width=400px><h2>推薦攻略<br></h2>');//隊伍截圖
    console.log(id);
    //此註解需在html增加<div class="timeslot"></div>
    //$('.timeslot').html('<h3>時間軸</h3><img src = timeslot'+id+'.png width=400px>')//時間軸截圖
    player.loadVideoById(playList[current]);

});