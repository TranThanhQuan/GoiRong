// trailer popup
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


$(".trailer").click(function () {
    $(".modalTrailer ").toggleClass("show-modal-trailer");
});

$(".close-button-trailer").click(function () {
    $(".modalTrailer ").toggleClass("show-modal-trailer");
});

$(".modalTrailer").click(function () {
    $(".modalTrailer ").removeClass("show-modal-trailer");
});



// nav mb
$('.close-mb').click(function () {
    $('.bg_nav_mb').toggleClass('show-nav-mb');
})

$('.open-mb').click(function () {
    $('.bg_nav_mb').show();
    $('.bg_nav_mb').toggleClass('show-nav-mb');
})





// NHẬN DIỆN THIẾT BỊ
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.search("iphone") > -1) {
    console.log('iphone download')
} else if (userAgent.search("android") > -1) {
    console.log('iphone android')
    $('#my_image').attr('src', '/landing_at/assets/img/btn-apk.png');
}



// CHECK MAIL

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(".btn-xacnhan").click(function () {
    if ($('.input-email-content').val() == '' || $('.input-email-content').val() == null) {
        swal("Vui lòng nhập email!");
        return 0;
    }
    if (validateEmail($('.input-email-content').val())) {
        if (localStorage.getItem("codeLuuDanh") != null) {
            let codeLuuDanh = localStorage.getItem("codeLuuDanh");
            // console.log(codeLuuDanh)
            swal(`Code của bạn là:${codeLuuDanh}`);
        } else {
            getData();
            // console.log($("input[name=email]").val());
        }
    } else {
        swal("Định dạng email chưa đúng!");
    }


});




function getData() {
    let email = $("input[name=email]").val();

    console.log(email);
    $.ajax({
        url: 'https://goirong.com/backend/submitmail.php',
        type: 'post',
        data: {
            email: email,
        },
        beforeSend: function () {
        },
        success: function (res) {
            console.log(res);
            swal(`Code của bạn là:${res.code}`);
        },
        complete: function () {
        }
    });
}










