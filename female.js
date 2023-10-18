
var result_screen = document.querySelector(".result");
var result_close = document.getElementById("closeResult");
result_close.addEventListener("click", function () {
    result_screen.style.display = "none";
});
var data = document.querySelector(".table")
var cal_form = document.getElementById("cal_form")
var result_table = document.querySelector(".resultTable");
var result_row = document.querySelector(".resultRow");

cal_form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (parent_check.checked && widow_check.checked && sons_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_widows = document.getElementById("of_widows");
        var of_sons = document.getElementById("of_sons");
        var of_daughters = document.getElementById("of_daughters");
        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const widowsValue = parseInt(of_widows.value)
        const sonsValue = parseInt(of_sons.value)
        const daughtersValue = parseInt(of_daughters.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare - WidowShare;
        //Sum of Ratios:
        let sonRatio = sonsValue * 2;
        let sumOfratios = sonRatio + daughtersValue;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;
        // Daughters Share:
        let DaughtersShare = grossTotal * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Husband`, widowsValue)
        console.log(`Sons`, sonsValue)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Tota Widows Share`, WidowShare)
        console.log(`Total Worth Distribute in Children`, grossTotal)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Sons Share`, sonsShare)
        console.log(`Son Share For Each`, sonsShareForEach);
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    No.of Husband : ${widowsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    No.of Daughters : ${daughtersValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (widow_check.checked && sons_check.checked && daughters_check.checked) {
    var property = document.getElementById("property")
    var debt = document.getElementById("debt");
    var funeral = document.getElementById("funeral");
    var brodness = document.getElementById("brodness");
    var of_widows = document.getElementById("of_widows");
    var of_sons = document.getElementById("of_sons");
    var of_daughters = document.getElementById("of_daughters");
    if(of_widows.value <= 1){
        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const widowsValue = parseInt(of_widows.value)
        const sonsValue = parseInt(of_sons.value)
        const daughtersValue = parseInt(of_daughters.value)

                                //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - WidowShare;
        //Sum of Ratios:
        let sonRatio = sonsValue * 2;
        let sumOfratios = sonRatio + daughtersValue;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;
        // Daughters Share:
        let DaughtersShare = grossTotal * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Widows`, widowsValue)
        console.log(`Sons`, sonsValue)
        console.log(`Daughters`, daughtersValue)

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Husband : ${widowsValue}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    No.of Daughters : ${daughtersValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (parent_check.checked && sons_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_sons = document.getElementById("of_sons");
        var of_daughters = document.getElementById("of_daughters");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const sonsValue = parseInt(of_sons.value)
        const daughtersValue = parseInt(of_daughters.value)

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Parents`, parentsValue)
        console.log(`Sons`, sonsValue)
        console.log(`Daughters`, daughtersValue)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;
        //Sum of Ratios:
        let sonRatio = sonsValue * 2;
        let sumOfratios = sonRatio + daughtersValue;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;
        // Daughters Share:
        let DaughtersShare = grossTotal * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    No.of Daughters : ${daughtersValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
    }
    else if (parent_check.checked && widow_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_widows = document.getElementById("of_widows");
        var of_daughters = document.getElementById("of_daughters");

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const widowsValue = parseInt(of_widows.value)
        const daughtersValue = parseInt(of_daughters.value)

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Parents`, parentsValue)
        console.log(`Husband`, widowsValue)
        console.log(`Daughters`, daughtersValue)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare - WidowShare;
        //Sum of Ratios:
        let sumOfratios = daughtersValue;
        // Daughters Share:
        let DaughtersShare = grossTotal * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    No.of Husband : ${widowsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Daughters : ${daughtersValue}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (parent_check.checked && widow_check.checked && sons_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_widows = document.getElementById("of_widows");
        var of_sons = document.getElementById("of_sons");

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const widowsValue = parseInt(of_widows.value)
        const sonsValue = parseInt(of_sons.value)

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Parents`, parentsValue)
        console.log(`Husband`, widowsValue)
        console.log(`Sons`, sonsValue)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare - WidowShare;
        //Sum of Ratios:
        let sonRatio = sonsValue * 2;
        let sumOfratios = sonRatio;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    No.of Husband : ${widowsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (parent_check.checked && widow_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_widows = document.getElementById("of_widows");

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const widowsValue = parseInt(of_widows.value)

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Parents`, parentsValue)
        console.log(`Husband`, widowsValue)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 3;
        let parentsShareForEach = parentsShare / parentsValue;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare - WidowShare;

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    No.of Husband : ${widowsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Remaining Property : ${grossTotal}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (parent_check.checked && sons_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_sons = document.getElementById("of_sons");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const sonsValue = parseInt(of_sons.value)

         //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;
        //Sum of Ratios:
        let sonRatio = sonsValue;
        let sumOfratios = sonRatio;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Sons`, sonsValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Total Worth Distribute in Children`, grossTotal)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Sons Share`, sonsShare)
        console.log(`Son Share For Each`, sonsShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    `;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Parents`, parentsValue)
        console.log(`Sons`, sonsValue)
    }
    else if (parent_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_daughters = document.getElementById("of_daughters");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const daughtersValue = parseInt(of_daughters.value)
        if(daughtersValue == 1){
                                        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;
        let grossTotal1 = grossTotal * 1/2;
        //Sum of Ratios:
        let sumOfratios = daughtersValue;
        // Daughters Share:
        let DaughtersShare = grossTotal1 * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Total Worth Distribute in Children`, grossTotal1)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    ${br.innerHTML}
    Remaining worth is : ${grossTotal}
    Worth distribute amoung children is : ${grossTotal1}
    No.of Daughters : ${daughtersValue}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}

    Note: As the daughter is only 1, therefore she will receive
     only half property of remaining worth.
    `;
        }
        else{
            // alert("more daughters")
             //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 6;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;
        let grossTotal2 = grossTotal * 2/3;
        //Sum of Ratios:
        let sumOfratios = daughtersValue;
        // Daughters Share:
        let DaughtersShare = grossTotal2 * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Total Worth Distribute in Children`, grossTotal2)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Parents : ${parentsValue}
    Parents share (total) : ${parentsShare}
    Parents share for each : ${parentsShareForEach}
    ${br.innerHTML}
    Remaining worth is : ${grossTotal}
    Worth distribute amoung children is : ${grossTotal}
    No.of Daughters : ${daughtersValue}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
        }
    }
    else if (widow_check.checked && sons_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_widows = document.getElementById("of_widows");
        var of_sons = document.getElementById("of_sons");

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const widowsValue = parseInt(of_widows.value)
        const sonsValue = parseInt(of_sons.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - WidowShare;
        //Sum of Ratios:
        let sonRatio = sonsValue;
        let sumOfratios = sonRatio;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Husband`, widowsValue)
        console.log(`Sons`, sonsValue)
        console.log(`Tota Husband Share`, WidowShare)
        console.log(`Total Worth Distribute in Children`, grossTotal)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Sons Share`, sonsShare)
        console.log(`Son Share For Each`, sonsShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Husband : ${widowsValue}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (widow_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_widows = document.getElementById("of_widows");
        var of_daughters = document.getElementById("of_daughters")

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const widowsValue = parseInt(of_widows.value)
        const daughtersValue = parseInt(of_daughters.value)
        if(daughtersValue == 1){
                                        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - WidowShare;
        let grossTotal1 = grossTotal * 1/2;
        //Sum of Ratios:
        let sumOfratios = daughtersValue;
        // Daughters Share:
        let DaughtersShare = grossTotal1 * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Husband Share`, WidowShare)
        console.log(`Total Worth Distribute in Children`, grossTotal1)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}

    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}

    Husband share (total) : ${WidowShare}
    Remaining worth is : ${grossTotal}

    Worth distribute amoung children is : ${grossTotal1}
    No.of Daughters : ${daughtersValue}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}

    Note: As the daughter is only 1, therefore she will receive
     only half property of remaining worth.
    `;
        }
        else{
            // alert("more daughters")
             //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Wife Share:
        let WidowShare = remainingAmount * 1 / 4;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - WidowShare;
        let grossTotal2 = grossTotal * 2/3;
        //Sum of Ratios:
        let sumOfratios = daughtersValue;
        // Daughters Share:
        let DaughtersShare = grossTotal2 * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Wife`, widowsValue)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Wife Share`, WidowShare)
        console.log(`Wife Share For each`, WidowShareForEach)
        console.log(`Total Worth Distribute in Children`, grossTotal2)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}

    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of widows : ${widowsValue}
    Husband share (total) : ${WidowShare}

    Remaining worth is : ${grossTotal}
    Worth distribute amoung children is : ${grossTotal2}
    No.of Daughters : ${daughtersValue}
    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
        }
    }
    else{
        alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
    }
    }
    else if (sons_check.checked && daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_sons = document.getElementById("of_sons");
        var of_daughters = document.getElementById("of_daughters");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const sonsValue = parseInt(of_sons.value)
        const daughtersValue = parseInt(of_daughters.value)

//Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Total worth after all Shares:
        let grossTotal = remainingAmount;
        //Sum of Ratios:
        let sonRatio = sonsValue * 2;
        let sumOfratios = sonRatio + daughtersValue;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;
        // Daughters Share:
        let DaughtersShare = grossTotal * daughtersValue / sumOfratios;
        let DaughtersShareForEach = DaughtersShare / daughtersValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Sons`, sonsValue)
        console.log(`Daughters`, daughtersValue)
        console.log(`Total Worth Distribute in Children`, grossTotal)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Sons Share`, sonsShare)
        console.log(`Son Share For Each`, sonsShareForEach);
        console.log(`Total Daughters Share`, DaughtersShare)
        console.log(`Daughter Share for Each`, DaughtersShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}

    Remaining Worth : ${remainingAmount}
    Worth distribute amoung children is : ${grossTotal}

    No.of Sons : ${sonsValue}
    No.of Daughters : ${daughtersValue}

    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}

    Daughters share (total) : ${DaughtersShare}
    Daughter share for each : ${DaughtersShareForEach}
    `;
    }
    else if (widow_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_widows = document.getElementById("of_widows");

        if(of_widows.value <= 1){

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const widowsValue = parseInt(of_widows.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Widow Share:
        let WidowShare = remainingAmount * 1 / 2;
        let WidowShareForEach = WidowShare / widowsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - WidowShare;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Husand`, widowsValue)
        console.log(`Tota Husband Share`, WidowShare)
        console.log(`Remaining Property`, grossTotal)

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}

    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Husband : ${widowsValue}
    Husband share (total) : ${WidowShare}
    ${br.innerHTML}
    Remaining Property will distribute amoung
    Desced's Siblings : ${grossTotal}
    `;
}
else{
    alert("You have entered husband value more than 1, Please enter 1 if Husband alive otherwise enter 0")
}
    }
    else if (sons_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_sons = document.getElementById("of_sons");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const sonsValue = parseInt(of_sons.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Total worth after all Shares:
        let grossTotal = remainingAmount;
        //Sum of Ratios:
        let sonRatio = sonsValue;
        let sumOfratios = sonRatio;
        // Sons Share:
        let sonsShare = grossTotal * sonRatio / sumOfratios;
        let sonsShareForEach = sonsShare / sonsValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Sons`, sonsValue)
        console.log(`Total Worth Distribute in Children`, grossTotal)
        console.log(`Sum of Ratios = `, sumOfratios)
        console.log(`Total Sons Share`, sonsShare)
        console.log(`Son Share For Each`, sonsShareForEach);

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })
        
    result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    Worth distribute amoung children is : ${grossTotal}
    No.of Sons : ${sonsValue}
    Sons share (total) : ${sonsShare}
    Sons share for each : ${sonsShareForEach}
    `;
    }
    else if (daughters_check.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_daughters = document.getElementById("of_daughters");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const daughtersValue = parseInt(of_daughters.value)

        if(daughtersValue == 1){
            //Calculations----------->
//Expenditure:
let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
let expenditure = propertyValue - remainingAmount;
let grossTotal = remainingAmount;
let grossTotal1 = grossTotal * 1/2;
//Sum of Ratios:
let sumOfratios = daughtersValue;
// Daughters Share:
let DaughtersShare = grossTotal1 * daughtersValue / sumOfratios;
let DaughtersShareForEach = DaughtersShare / daughtersValue;

// Console.log--------------->
console.log(`Property`, propertyValue)
console.log(`Debt`, debtValue)
console.log(`Funeral Expenses`, funeralValue)
console.log(`Brodness`, brodnessValue)
console.log(`Expenditure`, expenditure)
console.log(`Worth After expenditure`, remainingAmount)
console.log(`Daughters`, daughtersValue)
console.log(`Total Worth Distribute in Children`, grossTotal1)
console.log(`Sum of Ratios = `, sumOfratios)
console.log(`Total Daughters Share`, DaughtersShare)
console.log(`Daughter Share for Each`, DaughtersShareForEach);

// result Screen-------------->
var br = document.createElement("br")
result_screen.style.display = "inline-block";
var print_btn = document.getElementById("print")
var slip = document.querySelector(".slip");
// var logo_img = document.getElementById("logo_img")

print_btn.addEventListener("click", function() {
var printContents = slip.innerHTML;
var originalContents = document.body.innerHTML;
document.body.innerHTML = printContents;
window.print();
document.body.innerHTML = originalContents;
})

result_table.innerText = `
${br.innerHTML}
Property Worth : ${propertyValue}
Debt : ${debtValue}
Funeral Expenses : ${funeralValue}
Brodness : ${brodnessValue}

Total worth Expenditure : ${expenditure}
Remaining Worth : ${remainingAmount}

Remaining worth is : ${grossTotal}
Worth distribute amoung children is : ${grossTotal1}

No.of Daughters : ${daughtersValue}
Daughters share (total) : ${DaughtersShare}
Daughter share for each : ${DaughtersShareForEach}

Note: As the daughter is only 1, therefore she will receive
only half property of remaining worth.
`;
}
else{
// alert("more daughters")
//Calculations----------->
//Expenditure:
let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
let expenditure = propertyValue - remainingAmount;
//Total worth after all Shares:
let grossTotal = remainingAmount;
let grossTotal2 = grossTotal * 2/3;
//Sum of Ratios:
let sumOfratios = daughtersValue;
// Daughters Share:
let DaughtersShare = grossTotal2 * daughtersValue / sumOfratios;
let DaughtersShareForEach = DaughtersShare / daughtersValue;

// Console.log--------------->
console.log(`Property`, propertyValue)
console.log(`Debt`, debtValue)
console.log(`Funeral Expenses`, funeralValue)
console.log(`Brodness`, brodnessValue)
console.log(`Expenditure`, expenditure)
console.log(`Worth After expenditure`, remainingAmount)
console.log(`Daughters`, daughtersValue)
console.log(`Total Worth Distribute in Children`, grossTotal2)
console.log(`Sum of Ratios = `, sumOfratios)
console.log(`Total Daughters Share`, DaughtersShare)
console.log(`Daughter Share for Each`, DaughtersShareForEach);

// result Screen-------------->
var br = document.createElement("br")
result_screen.style.display = "inline-block";
var print_btn = document.getElementById("print")
var slip = document.querySelector(".slip");
// var logo_img = document.getElementById("logo_img")

print_btn.addEventListener("click", function() {
var printContents = slip.innerHTML;
var originalContents = document.body.innerHTML;
document.body.innerHTML = printContents;
window.print();
document.body.innerHTML = originalContents;
})

result_table.innerText = `
${br.innerHTML}
Property Worth : ${propertyValue}
Debt : ${debtValue}
Funeral Expenses : ${funeralValue}
Brodness : ${brodnessValue}

Total worth Expenditure : ${expenditure}
Remaining worth is : ${grossTotal}
Worth distribute amoung children is : ${grossTotal2}

No.of Daughters : ${daughtersValue}
Daughters share (total) : ${DaughtersShare}
Daughter share for each : ${DaughtersShareForEach}
`;
}
    }
    else {
        // alert("Null")
    }
});
var result_screen = document.querySelector(".result");
var result_close = document.getElementById("closeResult");
result_close.addEventListener("click", function () {
    result_screen.style.display = "none";
});
// -----------------------No Form------------------------
var cal_form = document.getElementById("cal_form")
var result_table = document.querySelector(".resultTable");
var result_row = document.querySelector(".resultRow");

cal_form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (No_parents.checked && SB.checked) {

        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var of_Siblings = document.getElementById("of_siblings");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)
        const SiblingsValue = parseInt(of_Siblings.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 3;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;
        //Siblings Share:
        let SiblingsShare = grossTotal;
        let siblingsShareForEach = grossTotal / SiblingsValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Siblings`, SiblingsValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Tota Siblings Share`, SiblingsShare)
        console.log(`Widows Share For each`, siblingsShareForEach)

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function() {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })

        result_table.innerText = `
        ${br.innerHTML}
        Property Worth : ${propertyValue}
        Debt : ${debtValue}
        Funeral Expenses : ${funeralValue}
        Brodness : ${brodnessValue}
        Total worth Expenditure : ${expenditure}
        Remaining Worth : ${remainingAmount}
        ${br.innerHTML}
        No.of Parents : ${parentsValue}
        No.of Siblings : ${SiblingsValue}
        
        Parents share (total) : ${parentsShare}
        Parents share for each : ${parentsShareForEach}
        Siblings share (total) : ${SiblingsShare}
        Siblings share for each : ${siblingsShareForEach}
        `;

    }
    else if (No_parents.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_parents = document.getElementById("of_parents");
        var Siblings = document.getElementById("Siblings");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const parentsValue = parseInt(of_parents.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let parentsShare = remainingAmount * 1 / 3;
        let parentsShareForEach = parentsShare / parentsValue;
        //Total worth after all Shares:
        let grossTotal = remainingAmount - parentsShare;


        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Parents`, parentsValue)
        console.log(`Total Parents Share`, parentsShare)
        console.log(`Parents Share For each`, parentsShareForEach)
        console.log(`Remaining Property`, grossTotal)

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function () {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })

        result_table.innerText = `
        ${br.innerHTML}
        Property Worth : ${propertyValue}
        Debt : ${debtValue}
        Funeral Expenses : ${funeralValue}
        Brodness : ${brodnessValue}
        Total worth Expenditure : ${expenditure}
        Remaining Worth : ${remainingAmount}
        ${br.innerHTML}
        No.of Parents : ${parentsValue}
        Parents share (total) : ${parentsShare}
        Parents share for each : ${parentsShareForEach}

        Remaining Property : ${grossTotal}
        
    
        It is very rare case that a person have no any
        siblings. In this case Remaining Property will 
        distribute amoung relatives, if he have no any
        relative than all property will be given to 
        charity or government.
        `;
    }
    else if (SB.checked) {
        var property = document.getElementById("property")
        var debt = document.getElementById("debt");
        var funeral = document.getElementById("funeral");
        var brodness = document.getElementById("brodness");
        var of_Siblings = document.getElementById("of_siblings");

        //By converting string values to ParseInt------->
        const propertyValue = parseInt(property.value);
        const debtValue = parseInt(debt.value)
        const funeralValue = parseInt(funeral.value)
        const brodnessValue = parseInt(brodness.value)
        const SiblingsValue = parseInt(of_Siblings.value)

        //Calculations----------->
        //Expenditure:
        let remainingAmount = propertyValue - debtValue - funeralValue - brodnessValue;
        let expenditure = propertyValue - remainingAmount;
        //Parents Share:
        let siblingsShareForEach = remainingAmount / SiblingsValue;

        // Console.log--------------->
        console.log(`Property`, propertyValue)
        console.log(`Debt`, debtValue)
        console.log(`Funeral Expenses`, funeralValue)
        console.log(`Brodness`, brodnessValue)
        console.log(`Expenditure`, expenditure)
        console.log(`Worth After expenditure`, remainingAmount)
        console.log(`Siblings`, SiblingsValue)

        // result Screen-------------->
        var br = document.createElement("br")
        result_screen.style.display = "inline-block";
        var print_btn = document.getElementById("print")
        var slip = document.querySelector(".slip");
        // var logo_img = document.getElementById("logo_img")

        print_btn.addEventListener("click", function () {
            var printContents = slip.innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        })

        result_table.innerText = `
    ${br.innerHTML}
    Property Worth : ${propertyValue}
    Debt : ${debtValue}
    Funeral Expenses : ${funeralValue}
    Brodness : ${brodnessValue}
    Total worth Expenditure : ${expenditure}
    Remaining Worth : ${remainingAmount}
    ${br.innerHTML}
    No.of Siblings : ${SiblingsValue}
    Siblings share (total) : ${remainingAmount}
    Siblings share for each : ${siblingsShareForEach}
    `;
    }
    else {
        // alert("Null");
    }
});