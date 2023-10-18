// navLinks & Icons--------->
var navlink = document.querySelector(".links");
var bars = document.getElementById("bars");
bars.onclick = function(){
    navlink.classList.toggle("nav")
}
//Gender Selection--------------->
var male_btn = document.getElementById("male_btn");
var female_btn = document.getElementById("female_btn");
male_btn.onclick = function(){
    window.location.assign("male.html");
};
female_btn.onclick = function(){
    window.location.assign("female.html");
};
//Welcome Screen--------------->
var welcome_btn = document.getElementById("lets_start");
var Close_welcome_btn = document.getElementById("welcome_close");
var welcome_window = document.querySelector(".welcome_screen");

welcome_btn.onclick = function(){
    welcome_window.classList.toggle("active")
}
Close_welcome_btn.onclick = function(){
    welcome_window.classList.toggle("active")
    window.location.assign("index.html")
}


// var propertyValueLabel = document.createTextNode(`Property : `);
// result_row_label.appendChild(propertyValueLabel);
// var debtLabel = document.createTextNode(`Debt : `);
// result_row_label.appendChild(debtLabel);
// var funeralLabel = document.createTextNode(`Funeral : `);
// result_row_label.appendChild(funeralLabel);
// var brodnessLabel = document.createTextNode(`Brodness : `);
// result_row_label.appendChild(brodnessLabel);
// var ExpenditureLabel = document.createTextNode(`Expenditure : `);
// result_row_label.appendChild(ExpenditureLabel);
// var Remaining_WorthLabel = document.createTextNode(`Remaining Worth : `);
// result_row_label.appendChild(Remaining_WorthLabel);
// var ParentsLabel = document.createTextNode(`Parents : `);
// result_row_label.appendChild(ParentsLabel);
// var WifeLabel = document.createTextNode(`Wife : `);
// result_row_label.appendChild(WifeLabel);
// var SonsLabel = document.createTextNode(`Sons : `);
// result_row_label.appendChild(SonsLabel);
// var DaughtersLabel = document.createTextNode(`Daughters : `);
// result_row_label.appendChild(DaughtersLabel);
// var Parents_ShareLabel = document.createTextNode(`Parents Share : `);
// result_row_label.appendChild(Parents_ShareLabel);
// var Parents_share_for_eachLabel = document.createTextNode(`Parents share for each : `);
// result_row_label.appendChild(Parents_share_for_eachLabel);
// var Wife_shareLabel = document.createTextNode(`Wife share : `);
// result_row_label.appendChild(Wife_shareLabel);
// var Wife_share_for_eachLabel = document.createTextNode(`Wife share for each : `);
// result_row_label.appendChild(Wife_share_for_eachLabel);
// var Property_distribute_amoung_childernLabel = document.createTextNode(`Property distribute amoung childern : `);
// result_row_label.appendChild(Property_distribute_amoung_childernLabel);
// var Sons_shareLabel = document.createTextNode(`Sons share : `);
// result_row_label.appendChild(Sons_shareLabel);
// var Sons_share_for_eachLabel = document.createTextNode(`Sons  hare for each : `);
// result_row_label.appendChild(Sons_share_for_eachLabel);
// var Daughters_shareLabel = document.createTextNode(`Daughters share : `);
// result_row_label.appendChild(Daughters_shareLabel);
// var Daughters_share_for_eachLabel = document.createTextNode(`Daughters share for each : `);
// result_row_label.appendChild(Daughters_share_for_eachLabel);

// var propertyValueText = document.createTextNode(`${propertyValue}`);
// result_row.appendChild(propertyValueText);
// var debtValueText = document.createTextNode(`${debtValue}`);
// result_row.appendChild(debtValueText);
// var funeralValueText = document.createTextNode(`${funeralValue}`);
// result_row.appendChild(funeralValueText);
// var brodnessValueText = document.createTextNode(`${brodnessValue}`);
// result_row.appendChild(brodnessValueText);
// var expenditureText = document.createTextNode(`${expenditure}`);
// result_row.appendChild(expenditureText);
// var remainingAmountText = document.createTextNode(`${remainingAmount}`);
// result_row.appendChild(remainingAmountText);
// var widowsValueText = document.createTextNode(`${widowsValue}`);
// result_row.appendChild(widowsValueText);
// var sonsValueText = document.createTextNode(`${sonsValue}`);
// result_row.appendChild(sonsValueText);
// var parentsShareText = document.createTextNode(`${parentsShare}`);
// result_row.appendChild(parentsShareText);
// var parentsShareForEachText = document.createTextNode(`${parentsShareForEach}`);
// result_row.appendChild(parentsShareForEachText);
// var WidowShareText = document.createTextNode(`${WidowShare}`);
// result_row.appendChild(WidowShareText);
// var WidowShareForEachText = document.createTextNode(`${WidowShareForEach}`);
// result_row.appendChild(WidowShareForEachText);
// var grossTotalText = document.createTextNode(`${grossTotal}`);
// result_row.appendChild(grossTotalText);
// var sonsShareText = document.createTextNode(`${sonsShare}`);
// result_row.appendChild(sonsShareText);
// var sonsShareForEachText = document.createTextNode(`${sonsShareForEach}`);
// result_row.appendChild(sonsShareForEachText);
// var DaughtersShareText = document.createTextNode(`${DaughtersShare}`);
// result_row.appendChild(DaughtersShareText);
// var DaughtersShareForEachText = document.createTextNode(`${DaughtersShareForEach}`);
// result_row.appendChild(DaughtersShareForEachText);