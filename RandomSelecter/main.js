/*
window.onload=function(){
    //document.write()這個動作會將網頁強制變成()內描述的內容
    document.write("Hello JavaScript");
};
*/

$(document).ready(function(){
    /*
    var images = [
        "pic/img0.jpg","pic/img1.jpg","pic/img2.jpg"
    ];

    $("#select").click(function(){
        console.log("[id=draw_10_card]");
        //numberOfListItem = LI的內容的大小
        let numberOfListItem = $("#choices li").length;
        //製作亂數，以達成呼叫 li:0, li:1, li:2, ....
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //改變h1的文字
        $("#eat").text($("#choices li").eq(randomChildNumber).text());
        document.getElementById('image').src= images[randomChildNumber];
    });*/
    /*----------------------------------*/
    //第 1 ~ 9 隻角色
    //3星角色  2.500%
    //2星角色 18.000%
    //1星角色 79.500%
    /*----------------------------------*/
    //隨機1~100的數字
    // 1 ~  25  為3星 去3星資料夾
    //26 ~ 205  為2星 去2星資料夾
    //206~1000  為1星 去1星資料夾
    let times_count = 0;
    let stones_count = 0;
    let goddess_count = 0;
    let star3_count = 0;
    
    $("#draw_10_card").click(function(){
        times_count++;
        stones_count=1500 * times_count;
        $("#Gashapon").html(""); //清空表格 來源 https://blog.csdn.net/kangmingyaner/article/details/53261169
        for(let i = 0 ; i < 9 ; i++){//1~9抽
            var star = Math.floor(Math.random() * 1000) + 1;//1~1000的亂數 用來確認目前是幾星
            if(star>=1 && star<=25){
                //3星資料夾
                var character = Math.floor(Math.random() * 65) + 1;//資料夾內的角色量
                $("#Gashapon").append(
                    '<td><img src=' + 'pic/characters3/'+ character +'.png' + ' width="100"  style="border:5px yellow solid;box-shadow:3px 3px 12px gray;border-radius: 10px;">' + '</td>'
                );
                //抽到3星次數+1
                star3_count++;
                goddess_count+=50;
            }
            else if(star >= 26 && star <= 205){
                //2星資料夾
                var character = Math.floor(Math.random() * 21) + 1;//資料夾內的角色量
                $("#Gashapon").append(
                    '<td><img src=' + 'pic/characters2/'+ character +'.png' + ' width="100" style="border:5px greenyellow solid;box-shadow:3px 3px 12px gray;border-radius: 10px;">' + '</td>'
                );
                goddess_count+=10;
            }
            else if(star >= 206 && star <=1000){
                //1星資料夾
                var character = Math.floor(Math.random() * 15) + 1;//資料夾內的角色量
                $("#Gashapon").append(
                    '<td><img src=' + 'pic/characters1/'+ character +'.png' + ' width="100" style="border:5px white solid;box-shadow:3px 3px 12px gray;border-radius: 10px;">' + '</td>'
                );
                goddess_count+=1;
            }
            if(i == 4){//5個角色時換行
                $("#Gashapon").append('<tr>');
            }
        }
        //第10隻角色
        //3星角色  2.500%
        //2星角色 97.500%
        /*----------------------------------*/
        var star10 = Math.floor(Math.random() * 1000) + 1;//1~1000的亂數 用來確認目前是幾星
        if(star>=1 && star<=25){
            //3星資料夾
            var character = Math.floor(Math.random() * 65) + 1;//資料夾內的角色量
            $("#Gashapon").append(
                '<td><img src=' + 'pic/characters3/'+ character +'.png' + ' width="100" style="border:5px yellow solid;box-shadow:3px 3px 12px gray;border-radius: 10px;">' + '</td>'
            );
            //抽到3星次數+1
            star3_count++;
            goddess_count+=50;
        }
        else if(star >= 26 && star <= 1000){
            //2星資料夾
            var character = Math.floor(Math.random() * 21) + 1;//資料夾內的角色量
            $("#Gashapon").append(
                '<td><img src=' + 'pic/characters2/'+ character +'.png' + ' width="100" style="border:5px greenyellow solid;box-shadow:3px 3px 12px gray;border-radius: 10px;">' + '</td>'
            );
            goddess_count+=10;
        }
        console.log(times_count);
        console.log(stones_count);
        console.log(goddess_count);
        console.log(star3_count);
        $("#times").html(times_count);
        $("#stones").html(stones_count);
        $("#goddess").html(goddess_count);
        $("#star3").html(star3_count);

    });
    //全部清0
    $("#reset").click(function(){
        $("#Gashapon").html("");
        times_count = 0;
        stones_count = 0;
        goddess_count = 0;
        star3_count = 0;
        $("#times").html(times_count);
        $("#stones").html(stones_count);
        $("#goddess").html(goddess_count);
        $("#star3").html(star3_count);
    });
});