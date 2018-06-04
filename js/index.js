var shi={
    1:""
};

$(function () {
    $('#shi').fadeIn(1000);
    $('header').slideDown(500);
    console.log('1')
});
$(function() {
    $("#card ul li").mouseenter(function () {
          $('body').css("background-image",'url("./pic/pic-'+$(this).index()+'.jpg');
          //$('#shi>div>span').html('4');
    });

});