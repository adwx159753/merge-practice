$(document).ready(function(){
    //建立currentQuiz，儲存目前作答到第幾題
    let currentQuiz = null;
    //當按下按鈕後，要做的事情在裡面
    $("#startButton").click(function(){
        if(currentQuiz == null){//第一次按按鈕
            currentQuiz = 0;
            //到第0個問題
            $("#question").text(questions[0].question)

            $("#options").empty();
            //逐行輸出問題
            for(let x=0;x<questions[0].answers.length;x++){
                //把資料接在options後面
                $("#options").append(
                    "<input name='options' type='radio' value="+x+
                    ">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            //attr更改按鈕文字為Next
            $("#startButton").attr("value","Next");
        }
        else{
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        //answers[i][1]不是數字->到終點了
                        //NaN = Not a Number
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            //取得最終結果的字串
                            let finalResult = questions[currentQuiz].answers[i][1];
                            $("#question").text(finalAnswers[finalResult][0]);
                            //清空介面
                            $("#options").empty();
                            //顯示目前資料
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            //變數清空
                            currentQuiz=null;
                            //attr改按鈕的值為restart
                            $("#startButton").attr("value","Restart");
                        }
                        else{
                            //currentQuiz改成下個資料的值，並輸出下個資料的文字
                            currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for(let i=0;i<questions[currentQuiz].answers.length;i++){
                                $("#options").append(
                                    "<input name='options' type='radio' value="+i+">"
                                    +
                                    "<label>"+questions[currentQuiz].answers[i][0]+
                                    "</label><br><br>"
                                );

                            }
                        }
                        return false;
                    }
                }
            );
        }

    });
})