
let wallet = 0;
let ClickAmount = 1;
let buyCost = 10;
let totalClicks = 0;

function buttonClick() {
    totalClicks = totalClicks + 1;
    document.getElementById('totalClicks').innerHTML = "Total Clicks: " + totalClicks;
    wallet = wallet + ClickAmount;
    document.getElementById('walletAmount').innerHTML = wallet;
    if(wallet >= 50) {
        document.getElementById('walletAmount').style.color = "orange";
    }
    if(wallet >= 100) {
        document.getElementById('walletAmount').style.color = "yellow";
    }
    if(wallet >= 150) {
        document.getElementById('walletAmount').style.color = "red";
    }
    if(wallet >= 200) {
        document.getElementById('walletAmount').style.color = "pink";
    }
    if(wallet >= 250) {
        document.getElementById('walletAmount').style.color = "green";
    }
    if(wallet >= 300) {
        document.getElementById('walletAmount').style.color = "purple";
    }
    if(wallet >= 350) {
        document.getElementById('walletAmount').style.color = "lightblue";
    }
    if(wallet >= 400) {
        document.getElementById('walletAmount').style.color = "darkblue";
    }
    if(wallet >= 450) {
        document.getElementById('walletAmount').style.color = "lightpurple";
    }
    if(wallet >= 500) {
        document.getElementById('walletAmount').style.color = "darkred";
    }
    if(wallet >= 550) {
        document.getElementById('walletAmount').style.color = "gray";
    }
}

window.onload = function() {
    document.getElementById('walletAmount').style.color = "white";
    document.getElementById('buyButton').style.backgroundColor = "red";
}

function Buy() {
    if(wallet >= buyCost){
        wallet = wallet - buyCost;
        ClickAmount = ClickAmount + 1;
        document.getElementById('clickPower').innerHTML = "Click Power: " + ClickAmount + "!";
        buyCost = buyCost * 2;
        document.getElementById('upgradePrice').innerHTML = "Cost: " + buyCost + ".-";
        console.log("Buy Cost: " + buyCost);
        document.getElementById('walletAmount').innerHTML = wallet;
        if(wallet < buyCost) {
            document.getElementById('buyButton').style.backgroundColor = "red";
        }
        if(wallet >= 50) {
            document.getElementById('walletAmount').style.color = "orange";
        }
        if(wallet >= 100) {
            document.getElementById('walletAmount').style.color = "yellow";
        }
        if(wallet >= 150) {
            document.getElementById('walletAmount').style.color = "red";
        }
        if(wallet >= 200) {
            document.getElementById('walletAmount').style.color = "pink";
        }
        if(wallet >= 250) {
            document.getElementById('walletAmount').style.color = "green";
        }
        if(wallet >= 300) {
            document.getElementById('walletAmount').style.color = "purple";
        }
        if(wallet >= 350) {
            document.getElementById('walletAmount').style.color = "lightblue";
        }
        if(wallet >= 400) {
            document.getElementById('walletAmount').style.color = "darkblue";
        }
        if(wallet >= 450) {
            document.getElementById('walletAmount').style.color = "lightpurple";
        }
        if(wallet >= 500) {
            document.getElementById('walletAmount').style.color = "darkred";
        }
        if(wallet >= 550) {
            document.getElementById('walletAmount').style.color = "gray";
        }
    }
}

function updateClick() {
    if(wallet >= buyCost) {
        document.getElementById('buyButton').style.backgroundColor = "green";
    }
    else if(wallet < buyCost) {
        document.getElementById('buyButton').style.backgroundColor = "red";
    }
}