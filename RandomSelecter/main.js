/*
window.onload=function(){
    //document.write()這個動作會將網頁強制變成()內描述的內容
    document.write("Hello JavaScript");
};
*/

$(document).ready(function(){
    var images = [
        "pic/img0.jpg","pic/img1.jpg","pic/img2.jpg"
    ];

    $("#select").click(function(){
        console.log("[id=select]");
        //numberOfListItem = LI的內容的大小
        let numberOfListItem = $("#choices li").length;
        //製作亂數，以達成呼叫 li:0, li:1, li:2, ....
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //改變h1的文字
        $("#eat").text($("#choices li").eq(randomChildNumber).text());
        document.getElementById('image').src= images[randomChildNumber];
    });
});