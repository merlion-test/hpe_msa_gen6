$(document).ready(function() {
  $('#button').click(function(){
    $.fancybox.open({
      src  : '#getSolutionForm',
      scrolling   : 'hidden',
      opts : {
        afterClose : function( instance, current ) {
          $('.post_ramka').html('');
        }
      }
    });
  });
});



  // $('#getSolutionForm .former').prepend('<input type="hidden" name="form_id" value="'+ $('#getSolutionFormId').data('id')+'">');
  // $('#requestForm .former').prepend('<input type="hidden" name="form_id" value="'+ $('#requestFormId').data('id')+'">');



  // $('#requestForm #form_input_i1 input, #getSolutionForm #form_input_i4 input').attr('placeholder', 'Имя Фамилия');
  // $('#requestForm #form_input_i2 input, #getSolutionForm #form_input_i5 input').attr('placeholder', 'Название компании');
  // $('#requestForm #form_input_i3 input, #getSolutionForm #form_input_i6 input').attr('placeholder', 'E-mail');
  // $('#requestForm textarea, #getSolutionForm textarea').attr('placeholder', 'Ваш вопрос');

  // let el = $('input[value="3884"] + div');
  // let elArray = el.children('div, input');
  //   elArray.slice(0,9).wrapAll('<div class="wrap"></div>');
  // elArray.slice(9,35).wrapAll('<div class="wrap"></div>');

  // $('#requestForm .checkbox-field, #requestForm .checkbox-field + .input.text').wrapAll('<div class="inner-wrap"></div>');
  // $('#getSolutionForm .checkbox-field, #getSolutionForm .checkbox-field + .input.text').wrapAll('<div class="inner-wrap"></div>');



  // let inputsArray = $('input[type=radio], input[type=checkbox]');
  //   inputsArray.after('<label></label>');





  /*  $('.sendbutton').click(function(){
      if($('.error')){
        $('.fill-form').css('display', 'block')
      } else{
        $('.fill-form').css('display', 'none');
      }
    });

  $('.sendbutton').submit(function() {
    if ($('.send-text-after')) {
      $(this).sibling('div').css('display', 'none');
      $('.fill-form').css('display', 'none');
    }
  });*/






