let id;

for(let i=1;i<=5;i++){
    $("body").append('<img id= ' + i + ' src = picture/BOSS' + i + '.jpg height=400px><br>');
    console.log(id);
}

$('img').click(function(){
    id=$(this).attr('id');
    parent.$(parent.document).trigger("imageClick",id);
});