(function($){

    var $default = {
        'title' : 'Info',
        'icon' : 'icon-exclamation-sign',
        'message' : '',
        'button' : '<button class="btn btn-sm btn-detault" type="button" data-dismiss="modal">OK</button>',
        'class' : 'alert-info',
        'btnclass' : 'btn-info'
    };

    var $el = null;

    var notification = {
        alert : function($opt){
            var $o = $.extend({}, $default, $opt);
            $o.class = 'alert-danger';
            $o.icon = 'icon-remove-sign';
            $o.btnClass = 'btn-danger';
            notification.launch($o);
        },

        warning : function($opt){
            var $o = $.extend({}, $default, $opt);
            $o.class = 'alert-warning';
            $o.icon = 'icon-warning-sign';
            $o.btnClass = 'btn-warning';
            notification.launch($o);
        },

        success : function($opt){
            var $o = $.extend({}, $default, $opt);
            $o.class = 'alert-success';
            $o.icon = 'icon-ok-sign';
            $o.btnClass = 'btn-success';
            notification.launch($o);
        },

        info : function($opt){
            var $o = $.extend({}, $default, $opt);
            $o.class = 'alert-info';
            $o.icon = 'icon-exclamation-sign';
            $o.btnClass = 'btn-primary';
            notification.launch($o);
        },

        close : function(){
            $el.container.modal('hide');
        },

        launch : function($o){
            notification.setup();
            $el.title.html($o.title).attr('class',$o.class);
            $el.message.html($o.message);
            $el.icon.attr('class',$o.icon);
            $el.wrapper.attr('class','row alert '+$o.class);
            $el.button.attr('class','btn btn-md pull-right '+$o.btnClass);
            $el.container.modal('show');
        },

        setup : function(){
            if($('#notification-modal').length === 0){
                $('body').append(
                    '<div class="modal fade" id="notification-modal">'+
                        '<div class="modal-dialog">'+
                            '<div class="modal-content">'+
                                '<div class="alert alert-danger row" id="notification-wrapper" style="margin:0">'+
                                    '<div class="col-md-1"><i class="icon-remove-sign" id="notification-icon"></i></div>'+
                                    '<div class="col-md-11">'+
                                        '<h4 class="alert-danger" id="notification-title">Error title</h4>'+
                                        '<p id="notification-message">Unexpected error. Please try again later.</p>'+
                                        '<button id="notification-button" class="btn btn-primary btn-md pull-right" data-dismiss="modal">OK</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                );
            }

            $el = {
                title : $('#notification-title'),
                message : $('#notification-message'),
                icon : $('#notification-icon'),
                wrapper : $('#notification-wrapper'),
                button : $('#notification-button'),
                container : $('#notification-modal')
            };
        }

    };

    $.fn.extend({
        notify : function($action, $option){
                if (notification[$action]) {
                    return notification[$action].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof($action) == 'object' || typeof($action) == 'undefined') {
                    return notification.info.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.bsnotify');
                }
            }
        });
})(jQuery);