$(function(){
  $('.gallery img').hide().eq(0).show();

  var imgNum = 0;
  var pauseTime = 5000;

  function changeGallery(imgNum) {
    $('.gallery img')
      .stop()
      .fadeOut(300)
      .eq(imgNum)
      .fadeIn(300);

    $('.indicator li').removeClass('active');
    $('.indicator li').eq(imgNum).addClass('active');
  }

  setInterval(function(){
    imgNum = imgNum + 1;
    if(imgNum > 2) { imgNum = 0;}
    changeGallery(imgNum); 
  }, pauseTime);

  $('.indicator li').eq(0).click(function(){
    changeGallery(0);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false;
  })
  $('.indicator li').eq(1).click(function(){
    changeGallery(1);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false;
  })
  $('.indicator li').eq(2).click(function(){
    changeGallery(2);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');   
    return false; 
  })
     

});