
// add-sub Price
x = document.querySelectorAll(".add")
tab2 = Array.from(x)

for (let i = 0; i < tab2.length; i++) {
    tab2[i].addEventListener("click", () => {
        console.log(tab2[i])
        let s = tab2[i].previousElementSibling
        s.innerHTML = parseInt(s.innerHTML) + 1
        let w = event.target.parentElement.nextElementSibling.querySelector(".unitprice")
        let z = event.target.parentElement.nextElementSibling.querySelector(".price")
        z.innerHTML = s.innerHTML * w.innerHTML
        let totalprice = Array.from(document.querySelectorAll(".price"))
        let sum = 0
        for (let i = 0; i < totalprice.length; i++) {

            sum += parseInt(totalprice[i].innerHTML)
            document.querySelector(".totalshoppingprice").innerHTML = sum
        }
    })
}

function subtraction(event) {
    let x = event.target.nextElementSibling
    let w = event.target.parentElement.nextElementSibling.querySelector(".unitprice")
    let z = event.target.parentElement.nextElementSibling.querySelector(".price")
    if (parseInt(x.innerHTML, 10) > 0) x.innerHTML = parseInt(x.innerHTML, 10) - 1
    z.innerHTML = x.innerHTML * w.innerHTML

    let sum = 0
    let totalprice = Array.from(document.querySelectorAll(".price"))
    for (let i = 0; i < totalprice.length; i++) {
        sum += parseInt(totalprice[i].innerHTML)
        document.querySelector(".totalshoppingprice").innerHTML = sum
    }
}

tab1 = document.querySelectorAll(".remove")
for (let i = 0; i < tab1.length; i++) {
    tab1[i].addEventListener("click", subtraction)
}

// favorite
favoritetab = Array.from(document.querySelectorAll(".fa-heart"))
for (let i = 0; i < favoritetab.length; i++) {
    favoritetab[i].addEventListener("click", function (event) { event.target.classList.toggle("active"); })
}

// remove 
removeitem = Array.from(document.querySelectorAll(".fa-times"))
for (let i = 0; i < removeitem.length; i++) {
    removeitem[i].addEventListener("click", function (event) { event.target.parentElement.parentElement.remove(); })
}

// optional
$('#blogCarousel').carousel({
    interval: 5000
});
