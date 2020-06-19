$(document).ready(function(){
    setTable();
});
 
function setTable(){
    $("#this_month_Table").empty();
 
    //一次產生固定標題列
    $("#this_month_Table").append(
        "<tr><th>時間</th><th>圖片</th><th>主題</th></tr>"
    );
    //反覆產生資料列
    let topicCount = topicsArray.length;
 
    //計算一天有多少毫秒
    let oneDayMilliseconds = 24*60*60*1000;
 
    for(let x=0; x<topicCount; x++){
        let trSpecial = "<tr>";
        $("#this_month_Table").append(
            trSpecial +
            "<td>"+ topicsArray[x][0] +"</td>"+
            "<td>"+ "<img src = pic/characters_month/"+  topicsArray[x][2] +".png>" +"</td>"+
            "<td>" + topicsArray[x][1]+"</td>"+
            "</tr>"
        ); //每一列有場次、預計日期、主題
    }

    /*---------------------*/
    $("#characters_order").empty();
 
    //一次產生固定標題列
    $("#characters_order").append(
        "<tr><th>圖片</th><th>主題</th></tr>"
    );
    //反覆產生資料列
    let topicCount_a = charactersArray.length;

    for(let x=0; x<topicCount_a; x++){
        let pic_order = topicCount + x + 1;
        let trSpecial = "<tr>";
        $("#characters_order").append(
            trSpecial +
            "<td>"+ "<img src = pic/characters_month/"+ pic_order +".png>" +"</td>"+
            "<td>" + charactersArray[x][0]+"</td>"+
            "</tr>"
        ); //每一列有場次、預計日期、主題
    }
}
