function logowanie()
{
    let log1 = document.getElementById("logowanie");
    let b1 = document.getElementById("button1");
    let b2 = document.getElementById("button2");
    let rejes = document.getElementById("rejestracja");
    let close = document.getElementById("x");

    b1.style.setProperty("visibility", "hidden");
    b2.style.setProperty("visibility", "hidden");
    log1.style.setProperty("visibility", "visible");
    rejes.style.setProperty("visibility", "hidden");
    close.style.setProperty("visibility", "visible");
}

function rejestracja()
{
    let rejes = document.getElementById("rejestracja");
    let b1 = document.getElementById("button1");
    let b2 = document.getElementById("button2");
    let log1 = document.getElementById("logowanie");
    let close = document.getElementById("x");

    b1.style.setProperty("visibility", "hidden");
    b2.style.setProperty("visibility", "hidden");
    rejes.style.setProperty("visibility", "visible");
    log1.style.setProperty("visibility", "hidden");
    close.style.setProperty("visibility", "visible");
}

function cos()
{
    let rejes = document.getElementById("rejestracja");
    let b1 = document.getElementById("button1");
    let b2 = document.getElementById("button2");
    let log1 = document.getElementById("logowanie");
    let close = document.getElementById("x");

    b1.style.setProperty("visibility", "visible");
    b2.style.setProperty("visibility", "visible");
    rejes.style.setProperty("visibility", "hidden");
    log1.style.setProperty("visibility", "hidden");
    close.style.setProperty("visibility", "hidden");
}