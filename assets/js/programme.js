$(function() {
  $('.prg-timing').each(function(i) {
    console.log(i);
    user_date = new Date($(this).attr('data-timestamp'));
    $(this).children('span').text(user_date.getHours() + ':' + (user_date.getMinutes() < 10 ? '0':'') + user_date.getMinutes());

    if($(this).attr('data-day-alert')) {
      programme_month_day = $(this).attr('data-programme-scheduled');
      $('#' + $(this).attr('data-day-alert') + ' strong').text(user_date.getDate() + '/' + (user_date.getMonth()+1) + '/' + user_date.getFullYear());
      if (user_date.getDate() != programme_month_day) {
        $('#' + $(this).attr('data-day-alert')).removeClass('d-none');
      }
      console.log(user_date.getDate() )
      console.log(programme_month_day)
    }
    
    console.log(user_date)
  });
  $('.timezone').text('have been converted to your timezone (' + Intl.DateTimeFormat().resolvedOptions().timeZone + ')');
});