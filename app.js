//Marital Status--------------->
var married_btn = document.getElementById("married");
var Unmarried_btn = document.getElementById("Unmarried");
var married_menu = document.querySelector(".dropdown_yes");
var Unmarried_menu = document.querySelector(".dropdown_no");
var married_Close_btn = document.getElementById("yes_close");
var Unmarried_Close_btn = document.getElementById("no_close");
married_btn.onclick = function(){
    married_menu.classList.toggle("show");
};
Unmarried_btn.onclick = function(){
    Unmarried_menu.classList.toggle("show");
};
married_Close_btn.onclick = function(){
    married_menu.classList.toggle("show");
}
Unmarried_Close_btn.onclick = function(){
    Unmarried_menu.classList.toggle("show");
}
//checkbox section-------------->
var parent_check = document.getElementById("parents")
var widow_check = document.getElementById("widow")
var sons_check = document.getElementById("sons")
var daughters_check = document.getElementById("daughters")
var form_yes = document.getElementById("yes_form")
// var Siblings = document.getElementById("of_siblings")
//declaring the inputs values----------->
var row = document.querySelector(".row")
var calculation_window = document.querySelector(".calculation_window");
var cal_close = document.getElementById("cal_close")

cal_close.onclick = function(){
    calculation_window.style.display = "none";
};

form_yes.addEventListener("submit", function(e){
    e.preventDefault();
    if(parent_check.checked && widow_check.checked && sons_check.checked && daughters_check.checked){
        alert("All entries are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(widow_check.checked && sons_check.checked && daughters_check.checked){
        alert("Widows, Sons & daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked && sons_check.checked && daughters_check.checked){
        alert("Parents, Sons & Daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);

    }
    else if(parent_check.checked && widow_check.checked && daughters_check.checked){
        alert("Parents, Widows & Daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked && widow_check.checked && sons_check.checked){
        alert("Parents, Widows & Sons are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked && widow_check.checked){
        alert("Parents & Widows are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked  && sons_check.checked){
        alert("Parents & Sons are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked && daughters_check.checked){
        alert("Parents & Daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(widow_check.checked && sons_check.checked){
        alert("Widows & Sons are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);


        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(widow_check.checked && daughters_check.checked){
        alert("Widows & Daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else  if(sons_check.checked && daughters_check.checked){
        alert("Sons & Daughters are checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);
        
        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else  if(widow_check.checked){
        alert("Only Widows is checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Widows------>
        let no_of_Widows_lable = document.createElement("label");
        no_of_Widows_lable.setAttribute("for","of_widows");
        no_of_Widows_lable.innerText = "No.of wife (alive)";
        row.appendChild(no_of_Widows_lable);
        let no_of_Widows_div = document.createElement("input")
        no_of_Widows_div.setAttribute("type", "number")
        no_of_Widows_div.setAttribute("id", "of_widows") 
        no_of_Widows_div.setAttribute("value", "1") 
        row.appendChild(no_of_Widows_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if( sons_check.checked ){
        alert("Only sons is checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Sons------>
        let no_of_Sons_lable = document.createElement("label");
        no_of_Sons_lable.setAttribute("for","of_sons");
        no_of_Sons_lable.innerText = "No.of Sons (alive)";
        row.appendChild(no_of_Sons_lable);
        let no_of_Sons_div = document.createElement("input")
        no_of_Sons_div.setAttribute("type", "number")
        no_of_Sons_div.setAttribute("id", "of_sons") 
        no_of_Sons_div.setAttribute("value", "1") 
        row.appendChild(no_of_Sons_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(daughters_check.checked){
        alert("Only Daughters is checked....!")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Daughters------>
        let no_of_Daughters_lable = document.createElement("label");
        no_of_Daughters_lable.setAttribute("for","of_daughters");
        no_of_Daughters_lable.innerText = "No.of Daughters (alive)";
        row.appendChild(no_of_Daughters_lable);
        let no_of_Daughters_div = document.createElement("input")
        no_of_Daughters_div.setAttribute("type", "number")
        no_of_Daughters_div.setAttribute("id", "of_daughters") 
        no_of_Daughters_div.setAttribute("value", "1") 
        row.appendChild(no_of_Daughters_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else if(parent_check.checked){
        alert("Please Check one more with parent combinition")
    }
    else{
        alert("Please Check at least one")
    }
});
// -----------------------No Form------------------------

var no_form = document.getElementById("no_form");
var No_parents = document.getElementById("Parents");
var SB = document.getElementById("Siblings");

no_form.addEventListener("submit", function(e){
    e.preventDefault();
    if(No_parents.checked && SB.checked){
        alert("Parents & Siblings are checked")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

        //Siblings------>
        let no_of_Siblings_lable = document.createElement("label");
        no_of_Siblings_lable.setAttribute("for","of_siblings");
        no_of_Siblings_lable.innerText = "No.of Siblings (alive)";
        row.appendChild(no_of_Siblings_lable);
        let no_of_Siblings_div = document.createElement("input")
        no_of_Siblings_div.setAttribute("type", "number")
        no_of_Siblings_div.setAttribute("id", "of_siblings") 
        no_of_Siblings_div.setAttribute("value", "1") 
        row.appendChild(no_of_Siblings_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);

        // -------------------------------------------------------------------------------------------
        

        
    }
    else if(No_parents.checked){
        alert("Parents are checked")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Parents------>
        let no_of_parents_lable = document.createElement("label");
        no_of_parents_lable.setAttribute("for","of_parents");
        no_of_parents_lable.innerText = "No.of Parents (alive)";
        row.appendChild(no_of_parents_lable);
        let no_of_parents_div = document.createElement("input")
        no_of_parents_div.setAttribute("type", "number")
        no_of_parents_div.setAttribute("id", "of_parents") 
        no_of_parents_div.setAttribute("value", "2") 
        row.appendChild(no_of_parents_div);

         //Submit------>
         let submit_btn1 = document.createElement("button")
         submit_btn1.setAttribute("type", "submit")
         submit_btn1.setAttribute("id", "submit_btn1")
         submit_btn1.innerText = "Calculate"
         row.appendChild(submit_btn1);
    }
    else if(SB.checked){
        alert(" Siblings are checked")
        calculation_window.style.display = "inline-block";
        //Property Worth------>
        let property_lable = document.createElement("label")
        property_lable.setAttribute("for","property")
        property_lable.innerText = "Property Worth"
        row.appendChild(property_lable);
        let property_div = document.createElement("input")
        property_div.setAttribute("type", "number")
        property_div.setAttribute("id", "property") 
        property_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(property_div);
        //Funeral Expenses------>

        let funeral_lable = document.createElement("label");
        funeral_lable.setAttribute("for","funeral");
        funeral_lable.innerText = "Funeral Expenses";
        row.appendChild(funeral_lable);
        let funeral_div = document.createElement("input")
        funeral_div.setAttribute("type", "number")
        funeral_div.setAttribute("id", "funeral") 
        funeral_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(funeral_div);
        //Debt Amount------>

        let debt_lable = document.createElement("label");
        debt_lable.setAttribute("for","debt");
        debt_lable.innerText = "Debt Amount";
        row.appendChild(debt_lable);
        let debt_div = document.createElement("input")
        debt_div.setAttribute("type", "number")
        debt_div.setAttribute("id", "debt") 
        debt_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(debt_div);

        //Brodness------>
        let brodness_lable = document.createElement("label");
        brodness_lable.setAttribute("for","brodness");
        brodness_lable.innerText = "Brodness (1/3)";
        row.appendChild(brodness_lable);
        let brodness_div = document.createElement("input")
        brodness_div.setAttribute("type", "number")
        brodness_div.setAttribute("id", "brodness") 
        brodness_div.setAttribute("placeholder", "Enter Amount") 
        row.appendChild(brodness_div);

        //Siblings------>
        let no_of_Siblings_lable = document.createElement("label");
        no_of_Siblings_lable.setAttribute("for","of_siblings");
        no_of_Siblings_lable.innerText = "No.of Siblings (alive)";
        row.appendChild(no_of_Siblings_lable);
        let no_of_Siblings_div = document.createElement("input")
        no_of_Siblings_div.setAttribute("type", "number")
        no_of_Siblings_div.setAttribute("id", "of_siblings") 
        no_of_Siblings_div.setAttribute("value", "1") 
        row.appendChild(no_of_Siblings_div);

        //Submit------>
        let submit_btn1 = document.createElement("button")
        submit_btn1.setAttribute("type", "submit")
        submit_btn1.setAttribute("id", "submit_btn1")
        submit_btn1.innerText = "Calculate"
        row.appendChild(submit_btn1);
    }
    else{
        alert("Please Check at least one.")
    }
})