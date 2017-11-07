window.onload = function () {

    
    alert("Thanks For Playing");
    alert("Made By Daniel Strama-Rolfe");

    /////////////////////////////////////////////
    var myCookies = 0;
    var clickPower = 1;
    var price1 = 100;
    var price2 = 20;
    var price3 = 35;
    var price4 = 200;
    var cps = 0;
    var buy1 = document.getElementById("buy1");
    var cookie = document.getElementById("c");
    var text = document.getElementById("text2");
    var textPrice = document.getElementById("price1");
    var buy2 = document.getElementById("buy2");
    var textPrice2 = document.getElementById("price2");
    var buy3 = document.getElementById("buy3");
    var textPrice3 = document.getElementById("price3");
    var buy4 = document.getElementById("buy4");
    var textPrice4 = document.getElementById("price4");
    var cpower = document.getElementById("clickPower");
    var tcps = document.getElementById("tcps");
    /////////////////////////////////////////////

    //Cookie
    cookie.onclick = function () {
        myCookies += clickPower;
        text.innerHTML = myCookies;
    }
    //Cookie End

    //Generate Cookie Automatically
    function generate() {
        myCookies++;
        text.innerHTML = myCookies;
    }
    //Generate Cookie Automatically End

    //Click Power
    buy1.onclick = function () {

        if (myCookies >= price1) {

            myCookies -= price1;
            text.innerHTML = myCookies;
            buy1.innerHTML = "Upgrade";
            buy1.style.backgroundColor = "Green";
            clickPower *= 2;
            price1 *= 3;
            cpower.innerHTML = clickPower;
            textPrice.innerHTML = price1;

        }

        else {

            alert("Not Enough Cookies!");

        }
    }
    //Click Power End

    //Auto Click
    buy2.onclick = function () {

        if (myCookies >= price2) {

            myCookies -= price2;
            setInterval(generate, 1000);
            cps++;
            tcps.innerHTML = cps;
            buy2.innerHTML = "Upgrade";
            buy2.style.backgroundColor = "Green";
            price2 *= 1.5;
            textPrice2.innerHTML = price2;
        }
        else {
            alert("Not Enough Cookies!");
        }
    }
    //Auto Click End

    //Grandma
    buy3.onclick = function () {

        if (myCookies >= price3) {

            myCookies -= price3;
            setInterval(generate, 500);
            cps += 2;
            tcps.innerHTML = cps;
            buy3.innerHTML = "Upgrade";
            buy3.style.backgroundColor = "Green";
            price3 *= 1.5;
            textPrice3.innerHTML = price3;
        }
        else {
            alert("Not Enough Cookies!");
        }
    }
    //Grandma End

    //Cookie Farm
    buy4.onclick = function () {

        if (myCookies >= price4) {

            myCookies -= price4;
            setInterval(generate, 200);
            cps += 5;
            tcps.innerHTML = cps;
            buy4.innerHTML = "Upgrade";
            buy4.style.backgroundColor = "Green";
            price4 *= 1.5;
            textPrice4.innerHTML = price4;
        }
        else {
            alert("Not Enough Cookies!");
        }
    }
    //Cookie Farm End
}