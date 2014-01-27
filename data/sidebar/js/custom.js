    //tooltips
    $('.spectate-page').tooltip();
    $('.push-page').tooltip();

    // fade out username
    $('.user-one').hover(function(){
      $('.user-one .username').fadeOut();
    }, function(){
      $('.user-one .username').fadeIn();
    })
    $('.user-two').hover(function(){
      $('.user-two .username').fadeOut();
    }, function(){
      $('.user-two .username').fadeIn();
    })
    $('.user-three').hover(function(){
      $('.user-three .username').fadeOut();
    }, function(){
      $('.user-three .username').fadeIn();
    })
    $('.user-four').hover(function(){
      $('.user-four .username').fadeOut();
    }, function(){
      $('.user-four .username').fadeIn();
    })

    //tabbable activity list area
    $("#private-messages-list").hide();
    $('.btn-activity-stream').click(function(){
      $("#chat-field").show();
      $("#activity-list").show();
      $("#private-messages-list").hide();
      $('.middlebar li:first-child').addClass('active');
      $('.middlebar li:nth-child(2)').removeClass('active');
    });

    //$('.btn-private-messages').click(function(){
      //alert("test");
      //$("#activity-stream-container").hide();
      //$("#chat-field").hide();
      //$("#private-messages-list").show();
      //$('.middlebar li:nth-child(2)').addClass('active');
      //$('.middlebar li:first-child').removeClass('active');
    //});

    //toggle Activity View and Participant View
    $("#participant-view .user-one-participant-view").hide();

    //Updating the Activity Window dynamically.
    $(function(){
      $('.activity-stream').css({'max-height': (($(window).height())-300)+'px'});
      $(window).resize(function(){
          $('.activity-stream').css({'max-height': (($(window).height())-300)+'px'});
      });
    });

    //adding style for when all users have joined a HotDish session
    $(function(){
      $(".btn-activity-stream").click(function(){
        notificationDropDown();
        //$(".all-users-here-notification").fadeIn(100).fadeOut(2000);
        addon.port.emit("notifyEveryoneHere");
      });
    });

    function notificationDropDown() {
      $(".all-users-here-notification").animate({
        "top": "+=33px"
      }, 500).delay(4000);
      $(".all-users-here-notification").animate({
        "top": "-=33px"
      }, 500);
    }

    function notificationDropDownInvites() {
      $(".invites-sent-notification").animate({
        "top": "+=33px"
      }, 500).delay(4000);
      $(".invites-sent-notification").animate({
        "top": "-=33px"
      }, 500);
    }

    function inviteSent() {
      notificationDropDownInvites();
      addon.port.emit("notifyInvitesSent");

      if( $('#users .username').length) {
        $('#users .firstUserRow .main').append("<span style='position:absolute;top:10px;padding:6px;'>Waiting for user to join...</span");
        $('#users .secondUserRow .main').append("<span style='position:absolute;top:10px;padding:6px;'>Waiting for user to join...</span>");
      }
    }

    // show hide invitation panel
    $(function(){
      $(".btn-invite-ppl").click(function(){
        //alert();
      });
    });

    // Bootstrap custom toggle
    $(function() {
      // initialize all the inputs
      $('input[type="checkbox"],[type="radio"]').not('.create-switch').bootstrapSwitch();
    });