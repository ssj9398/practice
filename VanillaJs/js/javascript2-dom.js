﻿//Ex9 - 마우스 이베트 객체: 박스의 옵셋 영역 좌표 이용하기

window.addEventListener("load", () => {
    var section = document.querySelector("#section9");
    var container = section.querySelector("#container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = { x: 0, y: 0 };
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;

    console.log(left);
    console.log(top);

    section.onmousedown = (e) => {
        if (e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.y = e.offsetY;
            offset.x = e.offsetX;
            console.log(offset.y + "," + offset.x);
        }

    };

    section.onmousemove = (e) => {
        if (!dragging) return;



        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;

        current.style.left = x + "px";
        current.style.top = y + "px";
        status.innerText = "(x , y) : (" + x + "," + y + ")";

    };

    section.onmouseup = (e) => {
        dragging = false;
    };


});



//Ex8 - 마우스 이베트 객체 : 여러개 박스 드래그 방식으로 옮기기

window.addEventListener("load", () => {
    var section = document.querySelector("#section8");
    var container = section.querySelector("#container");
    var box = section.querySelectorAll(".box");
    var dragging = false;
    var offset = { x: 0, y: 0 };
    var current = null;

    container.onmousedown = (e) => {
        if (e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.y = e.offsetY;
            offset.x = e.offsetX;
            console.log(offset.y + "," + offset.x);
        }

    };

    container.onmousemove = (e) => {
        if (!dragging) return;
        current.style.left = (e.x - offset.x) + "px";
        current.style.top = (e.y - offset.y) + "px";
        console.log(current.style.left + "," + current.style.top);
    };

    container.onmouseup = (e) => {
        dragging = false;
    };


});



//Ex7 - 마우스 이베트 객체 : 드래그 방식으로 박스 옮기기

window.addEventListener("load", () => {
    var section = document.querySelector("#section7");
    var container = section.querySelector("#container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = { x: 0, y: 0 };

    container.onmousedown = (e) => {
        if (e.target === box)
            dragging = true;
    };

    container.onmousemove = (e) => {
        if (!dragging) return;
        box.style.left = (e.x - offset.x) + "px";
        box.style.top = (e.y - offset.y) + "px";
    };

    container.onmouseup = (e) => {
        dragging = false;
    };

    box.onmousedown = (e) => {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };

});


//Ex7 - 마우스 이베트 객체 : 드래그 방식으로 박스 옮기기

window.addEventListener("load", () => {
    var section = document.querySelector("#section7");
    var container = section.querySelector("#container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = { x: 0, y: 0 };

    container.onmousedown = (e) => {
        if (e.target === box)
            dragging = true;
    };

    container.onmousemove = (e) => {
        if (!dragging) return;
        box.style.left = (e.x - offset.x) + "px";
        box.style.top = (e.y - offset.y) + "px";
    };

    container.onmouseup = (e) => {
        dragging = false;
    };

    box.onmousedown = (e) => {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };

});


//Ex6 - 마우스 이베트 객체 : 마우스 좌표

window.addEventListener("load", () => {
    var section = document.querySelector("#section6");
    var container = section.querySelector("#container");
    var box = section.querySelector(".box");

    container.onclick = (e) => {
        console.log(e.x + "," + e.y);
        console.log("client :" + e.clientX + "," + e.clientY);
        console.log("page :" + e.pageX + "," + e.pageY);
        console.log("offset :" + e.offsetX + "," + e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.x + "px";
        box.style.top = e.y + "px";
    };


});



//Ex5 - 이벤트 트리거
window.addEventListener("load", () => {
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = () => {
        var event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        fileButton.dispatchEvent(event);
        console.log("a");
    }
});



//Ex4 - 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", () => {

    var section = document.querySelector("#section4");
    var tbody = section.querySelector(".notice-list tbody");
    tbody.onclick = (e) => {

        e.preventDefault();
        var target = e.target;
        if (target.nodeName != "A")
            return;
        if (target.classList.contains("sel-button1")) {
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr = tr.parentElement);
            tr.style.background = "yellow";
        }
        else if (target.classList.contains("edit-button")) {

        }

        else if (target.classList.contains("del-button")) {

        }

    };


});


//Ex3 연습문제 : 버블링을 이용한 사용자 이벤트 처리하기

window.addEventListener("load", () => {
    var section = document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    var addButton = section.querySelector(".add-button");

    imgList.onclick = (e) => {
        console.log("aaa" + e.target.src);
        if (e.target.nodeName != "IMG") return false;
        currentImg.src = e.target.src
    };

    addButton.onclick = (e) => {
        e.stopPropagation();       //버블링 막기
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);

    };

    /* for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        }
    }
}); */
});


//Ex2-1 연습문제 - 선택된 레코드 삭제하기 : event target
window.addEventListener("load", () => {

    var section = document.querySelector("#section2-1");
    var delButtonList = section.querySelector(".notice-list");

    delButtonList.onclick = (e) => {
        console.log(e.target.parentElement);
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    }
});



//Ex2 - 선택된 레코드 삭제하기 : event target
window.addEventListener("load", () => {

    var section = document.querySelector("#section2");
    var delButton = section.querySelectorAll(".del-button2");
    for (var i = 0; i < delButton.length; i++) {
        delButton[i].onclick = (e) => {
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        }
    }

});


//Ex1-1 연습문제 : 버블링을 이용한 사용자 이벤트 처리하기

window.addEventListener("load", () => {
    var section = document.querySelector("#section1-1");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = (e) => {
        console.log("aaa" + e.target.src);
        if (e.target.nodeName != "IMG") return false;


        currentImg.src = e.target.src

    };

    /* for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        }
    }
}); */
});

//Ex1 : 선택된 이미지 보여주기 : event target

window.addEventListener("load", () => {
    var section = document.querySelector("#section1");
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = (e) => {
            currentImg.src = e.target.src;
        }
    }

    /* imgs[0].onclick = function (e) {
        currentImg.src = e.target.src;
    }
 
    imgs[1].onclick = function (e) {
        currentImg.src = e.target.src;
    }
 
    imgs[2].onclick = function (e) {
        currentImg.src = e.target.src;
    } */


});