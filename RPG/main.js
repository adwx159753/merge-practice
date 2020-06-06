//mapArray:建立地圖
//ctx:Canvas用
//currentImgMainX,currentImgMainY:主角位置
//imgMountain,imgMain,imgEnemy:山、主角、敵人位置
let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain,imgEnemy;


//第一部分：建立地圖
$(document).ready(function(){
    //0=可以走, 1=障礙物, 2=終點, 3=敵人
    mapArray = [0,1,1,0,1,1
               ,0,3,0,0,0,3
               ,0,0,0,1,0,3
               ,1,0,3,1,0,0
               ,1,0,3,1,0,0
               ,1,0,0,0,0,0];
    ctx=$("#myCanvas")[0].getContext("2d");

    //擺放主角
    imgMain = new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    //drawImage可以將圖片畫到網頁上
    //可以將圖片進行切割，不將全部圖片上傳，因此可以使用sprite sheet = 分解動作圖
    //drawImage(圖片,x1,y1,x2,y2,x3,y3,width,heigth)
    //從圖片的(x1,y1)到(x2,y2)切割出來並放到網頁上的(x3,y3)並壓縮成(width,heigth)的大小
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,100,100);
    };

    //建立障礙物
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    //建立敵人
    imgEnemy = new Image();
    imgEnemy.src="images/Enemy.png";

    //擺放敵人和障礙物
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    ctx.drawImage(imgMountain,32,65,32,32,x%6*100,Math.floor(x/6)*100,100,100);
                }
                else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%6*100,Math.floor(x/6)*100,100,100);
                }
            }
        }
    }
});

//第二部分：按下按鍵後的動作
$(document).keydown(function(event){
    console.log(event.originalEvent.code);
    //(targetImgMainX,targetImgMainY) = 主角的下一步
    //targetBlock = 確認主角有沒有撞牆
    //cutImagePositionX = 主角的動作(圖片切割的位置)
    let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;

    event.preventDefault();

    //方向鍵移動
    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX-100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-100;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX+100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+100;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImgMainX <= 500 &&  targetImgMainX >= 0 && targetImgMainY <= 500 && targetImgMainY >= 0){
        targetBlock = targetImgMainX/100 + ((targetImgMainY/100)*6);
    }
    else{
        targetBlock = -1;
    }

    ctx.clearRect(currentImgMainX,currentImgMainY,100,100);
    //跑到外面去 or 撞牆 or 撞敵人 -> 不動，並輸出文字
    if(targetBlock == -1){
        $("#talkBox").text("牆");
    }
    else if(mapArray[targetBlock] == 1){
        $("#talkBox").text("山")
    }
    else if(mapArray[targetBlock] == 3){
        $("#talkBox").text("人");
    }
    else{//正常走路
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,100,100);
});