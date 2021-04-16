

$(window).scroll(function()
{
 console.log($(this).scrollTop())
 
  if($(this).scrollTop()>=2){
    $(".navbar-fixed-top").css("background","rgba(2,2,2)")
   


  }
  else{
    $(".navbar-fixed-top").css("background","none")
  }
});
