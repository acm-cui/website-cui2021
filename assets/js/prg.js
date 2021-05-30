var timestr = function(d) {
    var hoursNum = d.getHours();
    var minutesNum = d.getMinutes();
    if (hoursNum == 0) { hours = '00'; } else { hours = hoursNum.toString() }
    if (minutesNum == 0) { minutes = '00'; } else { minutes =minutesNum.toString() }
    return hours + ':' + minutes;
}
var datestr = function(d) {
    var day = d.getDate();
    var suffix = nth(day);
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()];
    var year = d.getFullYear();
    return day + suffix + ' ' + month + ' ' + year;
}
var nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}
$(function() {
    $.getJSON('../programme/presentations.json?s=' + (new Date().getTime()), function(data) {
        var $prg = $('#programme');
        var num_sessions = 0;
        var sessions_by_date = {};

        $.each(data, function(i, session) {
            // based on https://stackoverflow.com/posts/15397495/revisions
            var start_date = new Date(Date.parse(session.start_time));
            start_date_index = datestr(start_date);
            if (!(start_date_index in sessions_by_date)) {
                sessions_by_date[start_date_index] = [];
            }
            sessions_by_date[start_date_index].push(session);
            num_sessions++;
        });
        $('#numdays').html(Object.keys(sessions_by_date).length);
        $('.timezone').text('converted to your operating system\'s timezone (' + Intl.DateTimeFormat().resolvedOptions().timeZone + ')');

        var index = 0;
        var expand_day = 0;
        $.each(sessions_by_date, function(date_string, session) {
            var now = new Date();
            var now_string = datestr(now);
            if (now_string == date_string) {
                expand_day = index;
            }
            index++;
        });

        var global_session_id = 0;
        index = 0;
        $.each(sessions_by_date, function(date_string, sessions) {
            html = '<div class="card"><div class="card-header bg-dark" id="programmeDay' + index +'">';
            html += '<h2 class="mb-0"><button class="btn btn-link btn-block text-white font-weight-bold" type="button" id="day' + index +'" data-toggle="collapse" data-target="#programme' + index +'" aria-expanded="' + (index == expand_day ? 'true' : 'false') + '" aria-controls="programme' + index +'">';
            html += date_string + '</button></h2></div>';
            html += '<div id="programme' + index +'" class="collapse' + (index == expand_day ? ' show' : '') + '" aria-labelledby="programmeDay' + index +'" data-parent="#programme">';
            html += '<ul class="list-unstyled prg-day mb-0 border-0 rounded-0">';

            $.each(sessions, function(session_id, session) {
                global_session_id++;
                if (session['type'] == 'Break') {
                    if (session_id > 0 && session_id < sessions.length-1) {
                        html += '<li class="media p-3 bg-light border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
                        if (session['description'] != '') {
                            html += session['description'];
                        }
                        html += '</div></li>';
                    } else if (session_id == sessions.length-1) {
                        html += '<li class="media p-3 bg-light border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
                        html += 'Please see the next day\'s schedule as events may start soon after midnight';
                        html += '</div></li>';
                    }
                } else if (session['type'] == 'EOD') {
                    if (session_id > 0 && session_id < sessions.length-1) {
                        html += '<li class="media p-3 bg-light border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
                        if (session['description'] != '') {
                            html += session['description'];
                        }
                        html += '</div></li>';
                    }
                } else {
                    html += '<li class="media prg-row p-3 rounded bg-light border-bottom rounded-0 flex-md-row flex-column" id="session-' + session['id'] + '"><div class="mr-md-3 mb-md-0 mb-3"><div class="badge badge-primary text-capitalize mb-2 mr-3">' + session['type'] + '</div>';
                    html += '<div class="mb-1 small"><span alt="A clock" class="d-inline-block prg-icon-timing prg-icon-start mr-2"></span><span class="d-inline-block prg-text-timing">Starts at <span class="prg-timing"><span></span>' + timestr(new Date(Date.parse(session['start_time']))) +'</span></div>';
                    html += '<div class="mt-1 small"><span alt="A stopwatch" class="d-inline-block prg-icon-timing prg-icon-end mr-2"></span><span class="d-inline-block prg-text-timing">Ends at <span class="prg-timing"><span></span>' + timestr(new Date(Date.parse(session['end_time']))) +'</span>';
                    html += '</div></div>';
                    html += '<div class="media-body w-100">';
                    if (session['youtube'] != '') {
                        html += '<div class="float-right"><a href="' + session['youtube'] + '" title="Watch the session on YouTube" class="d-block prg-icon-yt mr-4"><span class="sr-only">Watch on YouTube</span></a></div>';
                    }
                    html += '<h4 class="text-primary mt-0 mb-1">' + session['title'] + '</h4>';

                    if (session['presenters'] != '') {
                        html += session['presenters'];
                    }

                    if (session['chairs'] != '') {
                        html += '<em class="small">Chaired by ' + session['chairs'] + '</em>';
                    }

                    if (session['presentations'].length > 0) {
                        html += '<ol class="list-group mt-3">';
                        $.each(session['presentations'], function(presentation_id) {
                            presentation = session['presentations'][presentation_id]
                            html += '<li class="list-group-item pb-3">';
                            if (presentation['aaai']) {
                                html += '<div class="float-right">';
                                html += '<a href="' + presentation['aaai'] + '" title="View the paper on the AAAI website" class="d-block prg-inner-icon prg-icon-aaai"><span class="sr-only">View paper on the AAAI website</span></a>';
                                html += '</div>';
                            }
                            if (presentation['acmdl']) {
                                html += '<div class="float-right">';
                                html += '<a href="' + presentation['acmdl'] + '" title="View the paper in the ACM Digital Library" class="d-block prg-inner-icon prg-icon-acmdl"><span class="sr-only">View paper in the ACM Digital Library</span></a>';
                                html += '</div>';
                            }
                            if (presentation['sagepub']) {
                                html += '<div class="float-right">';
                                html += '<a href="' + presentation['sagepub'] + '" title="View the paper on Sage Publishing\'s website" class="d-block prg-inner-icon prg-icon-sagepub"><span class="sr-only">View paper on the Sage Publishing\'s website</span></a>';
                                html += '</div>';
                            }
                            if (presentation['springerlink']) {
                                html += '<div class="float-right">';
                                html += '<a href="' + presentation['springerlink'] + '" title="View the paper on Springer\'s website" class="d-block prg-inner-icon prg-icon-springerlink"><span class="sr-only">View paper on Springer\'s website</span></a>';
                                html += '</div>';
                            }
                            if (presentation['info']) {
                                html += '<div class="float-right">';
                                html += '<a href="' + presentation['info'] + '" title="Read more about this presentation" class="d-block prg-inner-icon prg-icon-info"><span class="sr-only">Read more about this presentation</span></a>';
                                html += '</div>';
                            }
                            html += '<strong>' + presentation['title'] + (presentation['type'] != 'Panel' ? ' <span class="badge badge-secondary">' + presentation['type'] + '</span>' : '') + '</strong><br>';
                            html += presentation['authors'] + '</li>';
                        });
                        html += '</ol>';;
                    }
                
                    html +'</div></li>';

                    if (session_id == sessions.length-1 && global_session_id < num_sessions) {
                        html += '<li class="media p-3 bg-light border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
                        html += 'Please see the next day\'s schedule as events may start soon after midnight';
                        html += '</div></li>';
                    }
                }

            });

            html += '</ul></div>';
            html += '</div>';

            $prg.append(html);
            index++;
        });
    }); 
});