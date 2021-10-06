$(document).ready(function(){ // se llama al cargar la página
    
    // change web theme to dark-light
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
      document.body.classList.toggle('darkTheme');
    });
    if(screen.width > 840){
      $('.fb-db').hide();
      $('.fbutton1').hide();
      $('.fbutton2').hide();
      $('.navbar').hide();
    }
    else{
      $('.fb-db').show();
      $('.fbutton1').show();
      $('.fbutton2').hide();
      $('.hide-all a').hide();
    }
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('div.in-flex a').click(function(){ // click on sidebar items
        $('.secciones article').hide();
       
        var activeTab = $(this).attr('href');
        
        $(activeTab).show();
        return false;
    });

    $('.fb-db').click(function(){ // click on sidebar button
      if ($('.hide-all a').is(':visible')){
        $('.hide-all a').hide();
        $('.fbutton2').hide();
        $('.fbutton1').show();
      } 
      else{
        $('.hide-all a').show();
        $('.fbutton1').hide();
        $('.fbutton2').show();
      }
      return false;
    });

    $(window).resize(function(){ // resize the window show/hide side button
      if(screen.width > 840){
        $('.fb-db').hide();
        $('.fbutton1').hide();
        $('.fbutton2').hide();
        $('.hide-all a').show();
        $('.navbar').hide();
      }
      else{
        $('.fb-db').show();
        $('.fbutton2').hide();
        $('.fbutton1').show();
        $('.hide-all a').hide();
        $('.navbar').show();
      }
    })
});
