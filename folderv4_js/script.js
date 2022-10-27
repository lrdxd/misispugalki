function reminder() {
    alert("давай, вставай, ержан")
}

setTimeout(reminder, 250000);

function valid() {
    var name = document.getElementById("1").value;
    var surn = document.getElementById("2").value;
    var batya = document.getElementById("3").value;
    var oc = document.getElementById("4").value;

    var reg_name = /^[a-zа-яё]+$/i;
    var reg_surn = /^[a-zа-яё]+$/i;
    var reg_batya = /^[a-zа-яё]+$/i;
    var reg_oc = /^[0-9]+$/i;

    if (reg_name.test(name) == false) {
        alert("ощибка 000000001");
    }

    if (reg_surn.test(surn) == false) {
        alert("ощибка 000000001");
    }

    if (reg_batya.test(batya) == false) {
        alert("ощибка 000000001");
    }

    if (reg_oc.test(oc) == false) {
        alert("ощибка 000000001");
    }

}

document.querySelector(".button").addEventListener("click", valid);

