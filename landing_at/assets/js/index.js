function copy(){
    window.navigator.clipboard.writeText(1);
}



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
            $('.code').html(localStorage.getItem("codeLuuDanh"));
            $(".codeLuuDanh").css("display", "block");
            $(".modal ").toggleClass("show-modal");

            // swal(`Code của bạn là:${codeLuuDanh}`);
        } else {
            getData();
            // console.log($("input[name=email]").val());
        }
    } else {
        swal("Định dạng email chưa đúng!");
    }

});


$('.close-luudanh').click(function () {
    $(".codeLuuDanh").css("display", "none");
    $("input[name=email]").val('');
    $(".code-title").css("opacity", "0");


})



function getData() {
    let email = $("input[name=email]").val();

    console.log(email);
    $.ajax({
        url: 'https://goirong.com/backend/submitmail.php',
        type: 'post',
        dataType: 'json',
        data: {
            email: email,
        },
        beforeSend: function () {
        },
        success: function (res) {
            console.log(res);
            localStorage.setItem("codeLuuDanh", res.code);
            // swal(`Code của bạn là:${res.code}`);
            $('.code').html(localStorage.getItem("codeLuuDanh"));
        },
        complete: function () {
        }
    });
}


// copy
function copyToClipboard(){
    let val = localStorage.getItem("codeLuuDanh");
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  $('.copy').click(function () {
    $(".code-title").css("opacity", "1");
})












