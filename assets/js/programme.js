$(function() {
  $('.prg-timing').each(function(i) {
    console.log($(this).attr('data-timestamp'));
    user_date = new Date(Date.parse($(this).attr('data-timestamp')));
    console.log(user_date)
    $(this).children('span').text((user_date.getHours() < 10 ? '0' : '') + user_date.getHours() + ':' + (user_date.getMinutes() < 10 ? '0':'') + user_date.getMinutes());
    if($(this).attr('data-day-alert')) {
      programme_month_day = $(this).attr('data-programme-scheduled');
      $('#' + $(this).attr('data-day-alert') + ' strong').text(user_date.getDate() + '/' + (user_date.getMonth()+1) + '/' + user_date.getFullYear());
      if (user_date.getDate() != programme_month_day) {
        $('#' + $(this).attr('data-day-alert')).removeClass('d-none');
      }
    }
  });
  $('.timezone').text('have been converted to your timezone (' + Intl.DateTimeFormat().resolvedOptions().timeZone + ')');
});