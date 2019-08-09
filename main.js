let elements = [
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'b10',
    'b11',
];

const max = 100;
const min = 1;

function updateFill() {
    for (let i = 0; i<elements.length; i++) {
    $("."+elements[i]).css({"width":"0px"});
    }
    let currentPercent = Math.random() * (max - min) + min;
    let oneObjectMaxPercent = 100 / elements.length;
    let f = currentPercent / oneObjectMaxPercent;
    let fillCount = Math.trunc(f);
    let oneMorePartToFill = Math.ceil(((f < 1.0) ? f : (f % Math.floor(f))) * 100);

     // console.log("Получили " + currentPercent + "%");
     // console.log("Полностью красим: " + fillCount);
     // console.log("И еще один на " + oneMorePartToFill + "%");

    //бежим по тем что нужно заполнить полностью
    if (fillCount > 0) {
        for (let i = 0; i < fillCount; i++) {
            $("." + elements[i]).css({
                "width": "35px",
                "background": "orange",
            });
        }
    }
    let pixelsCount = (oneMorePartToFill * 35) / 100;
    //заполняем последний
    $("." + elements[fillCount]).css({
        "background": "orange",
        "width": pixelsCount + "px"
    });

    $(".per").html(currentPercent);
}

$(document).ready(function () {
    updateFill();
    setInterval(function () {
         updateFill();
     }, 5000);
});
