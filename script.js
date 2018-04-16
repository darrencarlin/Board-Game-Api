$(document).ready(function ready() {
    "use strict";
    let counterTotal = document.getElementById("counterTotal");
    let counter;
    const coinHTML = "<div class='unit'><b><i aria-hidden='true' class='fas fa-euro-sign'></i></b></div>";
    let calculatedWeights = [];
    let newArr = [];
    let jsonData = [{
        "Jan": 0.99482768,
        "Feb": 1.002448943,
        "Mar": 0.998880735,
        "Apr": 1.005324257,
        "May": 1.000099037,
        "Jun": 0.999389381,
        "Jul": 1.000946324,
        "Aug": 1.002647255,
        "Sep": 1.001916043,
        "Oct": 1.003368431,
        "Nov": 0.999758556,
        "Dec": 1.006620653
    }, {
        "Jan": 1.019145958,
        "Feb": 1.001016596,
        "Mar": 1.00311856,
        "Apr": 0.995140471,
        "May": 1.007109039,
        "Jun": 1.000086543,
        "Jul": 0.994149667,
        "Aug": 0.9993684,
        "Sep": 1.002571778,
        "Oct": 0.998832278,
        "Nov": 0.999533796,
        "Dec": 1.007450577
    }, {
        "Jan": 1.025397783,
        "Feb": 1.001276134,
        "Mar": 1.000442315,
        "Apr": 0.999830767,
        "May": 1.00003044,
        "Jun": 1.00105987,
        "Jul": 1.002049876,
        "Aug": 1.004148044,
        "Sep": 1.002806112,
        "Oct": 1.000268363,
        "Nov": 1.000329593,
        "Dec": 1.012561416
    }, {
        "Jan": 0.892639749,
        "Feb": 1.082385608,
        "Mar": 1.026534744,
        "Apr": 1.003300132,
        "May": 1.002670949,
        "Jun": 0.958042312,
        "Jul": 0.948387713,
        "Aug": 1.067056237,
        "Sep": 1.028596714,
        "Oct": 1.010493414,
        "Nov": 0.999843383,
        "Dec": 0.986522288
    }, {
        "Jan": 1.001969727,
        "Feb": 1.01196195,
        "Mar": 1.002242788,
        "Apr": 0.992579257,
        "May": 0.99929164,
        "Jun": 0.996228671,
        "Jul": 1.002078603,
        "Aug": 1.000219143,
        "Sep": 1.007519814,
        "Oct": 1.006054685,
        "Nov": 1.004817035,
        "Dec": 1.003701083
    }, {
        "Jan": 0.944162,
        "Feb": 0.968511,
        "Mar": 0.999697,
        "Apr": 0.996503,
        "May": 0.996396,
        "Jun": 0.993231,
        "Jul": 0.993117,
        "Aug": 0.967655,
        "Sep": 0.983207,
        "Oct": 0.996364,
        "Nov": 1.009577,
        "Dec": 0.996375
    }, {
        "Jan": 0.995417514,
        "Feb": 1.007579853,
        "Mar": 1.002954418,
        "Apr": 1.001562083,
        "May": 1.004782158,
        "Jun": 0.98949311,
        "Jul": 0.998830285,
        "Aug": 1.011308582,
        "Sep": 1.00147361,
        "Oct": 1.017271417,
        "Nov": 0.998542262,
        "Dec": 0.997753258
    }, {
        "Jan": 1.007219771,
        "Feb": 1.0003655,
        "Mar": 0.999699778,
        "Apr": 0.998373685,
        "May": 0.999897184,
        "Jun": 1.000516351,
        "Jul": 1.000891713,
        "Aug": 0.997605385,
        "Sep": 0.999781401,
        "Oct": 0.997775221,
        "Nov": 0.998971458,
        "Dec": 1.000274286
    }, {
        "Jan": 1.027651054,
        "Feb": 1.010999093,
        "Mar": 1.012232655,
        "Apr": 1.012675828,
        "May": 0.995077844,
        "Jun": 0.98830439,
        "Jul": 0.99291723,
        "Aug": 1.016360595,
        "Sep": 1.013090334,
        "Oct": 0.994895157,
        "Nov": 0.98431485,
        "Dec": 0.992036274
    }, {
        "Jan": 0.949001474,
        "Feb": 1.088367712,
        "Mar": 1.143831601,
        "Apr": 0.912012611,
        "May": 0.996895856,
        "Jun": 1.087733076,
        "Jul": 1.093973817,
        "Aug": 1.005466026,
        "Sep": 0.904794063,
        "Oct": 0.900185645,
        "Nov": 0.973702308,
        "Dec": 1.034043881
    }, {
        "Jan": 1.002436743,
        "Feb": 1.001316475,
        "Mar": 0.999862927,
        "Apr": 0.993456494,
        "May": 0.993463239,
        "Jun": 0.997183815,
        "Jul": 0.996406098,
        "Aug": 0.995252873,
        "Sep": 0.993963946,
        "Oct": 0.992112024,
        "Nov": 0.989558103,
        "Dec": 0.989493415
    }, {
        "Jan": 0.995616981,
        "Feb": 0.999432784,
        "Mar": 1.00041632,
        "Apr": 1.001692019,
        "May": 0.993603943,
        "Jun": 0.999410509,
        "Jul": 0.995883132,
        "Aug": 1.003244278,
        "Sep": 0.997576645,
        "Oct": 1.005638234,
        "Nov": 1.00196609,
        "Dec": 0.999065523
    }, {
        "Jan": 0.994687468,
        "Feb": 1.002054095,
        "Mar": 1.005606956,
        "Apr": 1.004490466,
        "May": 1.003683519,
        "Jun": 1.009061039,
        "Jul": 1.003897987,
        "Aug": 1.002015432,
        "Sep": 0.994899813,
        "Oct": 1.002553663,
        "Nov": 0.989302892,
        "Dec": 0.998191845
    }, {
        "Jan": 1.00714953,
        "Feb": 1.004462319,
        "Mar": 1.021460871,
        "Apr": 1.015161982,
        "May": 0.998779619,
        "Jun": 1.001683985,
        "Jul": 0.999105434,
        "Aug": 0.99985894,
        "Sep": 0.995730578,
        "Oct": 1.007705749,
        "Nov": 0.999563858,
        "Dec": 1.006645227
    }];
    let globalDiff
    let coinWeights = [5, 4, 1, 2, 2, 2, 5, 1, 6, 1, 1, 4, 5, 5];
    let nationalCPI = [99.5, 100.4, 101.4, 101.4, 101.4, 101.2, 101.1, 101.7, 101.6, 101.5, 101.1, 101.2];
    let personalCPI = [];
    let percentageChangePersonal = [];
    let percentageChangeNational = [1.009045226, 1.009960159, 1, 1, 0.998027613, 0.999011858, 1.005934718, 0.999016716, 0.999015748, 0.996059113, 1.00098912];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let containers = [
        document.querySelector("#cartItem1"), // Food
        document.querySelector("#cartItem2"), // Alcohol
        document.querySelector("#cartItem3"), // Tobacco
        document.querySelector("#cartItem4"), // Clothing
        document.querySelector("#cartItem5"), // Rent 
        document.querySelector("#cartItem6"), // Mortage 
        document.querySelector("#cartItem7"), // Housing
        document.querySelector("#cartItem8"), // Health
        // 9 is skipped
        document.querySelector("#cartItem10"), // Car
        document.querySelector("#cartItem11"), // Public Transport
        document.querySelector("#cartItem12"), // Telecommunications
        document.querySelector("#cartItem13"), // Education
        document.querySelector("#cartItem14"), // Recreation
        // 15 is not in 2012 data
        document.querySelector("#cartItem16") // Other 
    ];
    var coinsRemaining;
    let coinsInUse;
    // initial values 
    coinWeights[5] = 0;
    coinWeights[2] = 0;
    coinsRemaining = 3;
    counterTotal.innerHTML = 3;
    coinsInUse = coinWeights.reduce(function (a, b) {
        return a + b
    }, 0);
    //let toolTips = [
    //	document.getElementById("lineChart"),
    //	document.getElementById("pieChart"),
    //	document.getElementById("percentageChart")
    //];
    //tippy(toolTips, {
    //    animation: 'fade',
    //    arrow: true
    //})
    // display Errors
    function displayErr(string) {
        $(".counter-feedback").text(string);
        $(".counter-feedback").css("opacity", "1");
        setTimeout(function () {
            $(".counter-feedback").text("");
            $(".counter-feedback").css("opacity", "0");
        }, 5000);
    }
    // Overlays
    function addOverlay(ids) {
        $(ids).addClass("overlay");
        $(ids).prev().addClass("overlay");
    }

    function removeOverlay(ids) {
        $(ids).removeClass("overlay");
        $(ids).prev().removeClass("overlay");
    }
    // Default Overlays
    addOverlay("#cartItem6, #cartItem3")
    // Calculate CPI
    function calculateIndex(arr) {
        return ((arr.reduce(getSum) / coinsInUse) * 100)
    }

    function getSum(total, num) {
        return total + num;
    }

    function displayCoins() {
        let wallet = document.querySelector(".cart-theme-remaining")


        for (let i = 1; i <= 44; i++) {
            wallet.insertAdjacentHTML("afterbegin", coinHTML);
        }


    }
    displayCoins();

    function updateCoins(string) {
        console.log(coinsRemaining);
        let unit = document.querySelectorAll(".cart-theme-remaining .unit")
        console.log(unit)

        for (let i = 0; i < (44 - coinsRemaining); i++) {
            console.log(coinsRemaining)
            unit[i].style.backgroundColor = "#919191 ";
        }

        if (string === "plus") {

            for (let i = 0; i < (44 - coinsRemaining); i++) {
                unit[i].style.backgroundColor = "#919191";
            }

        } else if (string === "minus") {

            //  for (let i = (44 - (coinsRemaining - 4)); i > (44 - (coinsRemaining)); i--) {
            unit[(44 - coinsRemaining)].style.backgroundColor = "gold";

            //  }

        } else {

        }
    }




    updateCoins()

    function calculatePersonal(data) {
        personalCPI = [];
        let currMonth = [];
        let nextMonth = [];
        let firstMonth = [];
        for (let i = 0; i < data.length; i++) {
            nextMonth = [];
            currMonth = [];
            let currentMonth = months[i];
            if (i === 0) {
                for (let i = 0; i < data.length; i++) {
                    firstMonth.push(data[i][currentMonth] * coinWeights[i]);
                }
                personalCPI.push(calculateIndex(firstMonth).toFixed(4));
                continue
            } else {
                for (let i = 0; i < data.length; i++) {
                    currMonth.push(data[i][currentMonth])
                    nextMonth.push(currMonth[i] * firstMonth[i]);
                }
                firstMonth = nextMonth;
                personalCPI.push(calculateIndex(nextMonth).toFixed(4));
                if (i === 11) {
                    break
                }
            }
        }
        personalCPI = personalCPI.map(Number);
        calculatePercentage(personalCPI)
        renderHighchart(personalCPI, nationalCPI, 'Personal Inflation', 'National Inflation');
    }
    calculatePersonal(jsonData);
    // Calculate CPI End

    // Calculate CPI Percentage
    function calculatePercentage(arr1) {
        percentageChangePersonal = []
        let firstIndex;
        let secondIndex;
        for (let i = 0; i < arr1.length - 1; i++) {
            firstIndex = arr1[i];
            secondIndex = arr1[i + 1];
            percentageChangePersonal.push((secondIndex / firstIndex));
        }

        let index, avg, above = 0, below = 0;

        for (let i = 0; i < personalCPI.length; i++) {
            index = personalCPI[i] / nationalCPI[i];

            if (index > 1) {
                above += 1;
            } else if (index < 1) {
                below += 1;
            }
        }

        if (above > below) {
            above = true;
            below = false;
        } else if (above >= 5 && above < 7 || below >= 5 && below < 7) {
            avg = true;
            above = false;
            below = false;
        } else {
            below = true;
            above = false;
        }

        if (avg) {
            $(".output-text").html("Inflation is affecting you close to the National Average <i class='fas fa-arrows-alt-h fa-2x'></i>");
            $(".output-text").css("border", "2px solid blue");
            $(".fa-arrow-up").css("color", "blue");

        } else if (below) {
            $(".output-text").html("Inflation is affecting you below the National Average <i class='fas fa-arrow-down fa-2x'></i>");
            $(".output-text").css("border", "2px solid green");
            $(".fa-arrow-down").css("color", "green");
        } else if (above) {
            $(".output-text").html("Inflation is affecting you above the National Average <i class='fas fa-arrow-up fa-2x'></i>");
            $(".output-text").css("border", "2px solid red");
            $(".fa-arrow-up").css("color", "red");

        }

    }
    // Calculate Pie Chart Data 
    function calculatePieChart(numbers, index) {
        let num;
        for (let i = index; i < (index + 1); i++) {
            num = ((numbers[index] / numbers.length) * 100).toFixed(2)
            return parseInt(num)
        }
    }

    // using bind for 'this' (binds this to .minus)
    $(".minus").bind("click touchstart", function (e) {
        $(".plus").css("pointer-events", "initial");
        var btn = $(this)

        e.stopImmediatePropagation();
        e.preventDefault();
        let id = this.parentElement.id
        let counter = this.parentElement.firstElementChild;
        let counterNum = counter.innerHTML;
        this.nextElementSibling.style.pointerEvents = "auto";
        let lastChild = this.parentElement.lastChild.classList;
        let unit = this.parentElement.lastChild;
        if (lastChild == 'unit') {
            unit.remove();
            counter.innerHTML--;
            counterTotal.innerHTML++;
            coinsRemaining++;
            updateCoins("minus");
        } else {
            let counterNum = parseInt(counter);
            if (counterNum <= 0) {
                displayErr("Container Empty");
            }
        }

        function calcDifferenceMinus(index) {
            let currCoins = coinsInUse;
            coinWeights[index] -= 1
            coinsInUse -= 1
            if (coinWeights[index] <= 0) {
                btn.css("pointer-events", "none");
            }
        }
        if (id === "cartItem1") {
            calcDifferenceMinus(0);
        } else if (id === "cartItem2") {
            calcDifferenceMinus(1);
        } else if (id === "cartItem3") {
            calcDifferenceMinus(2);
        } else if (id === "cartItem4") {
            calcDifferenceMinus(3);
        } else if (id === "cartItem5") {
            calcDifferenceMinus(4);
        } else if (id === "cartItem6") {
            calcDifferenceMinus(5);
        } else if (id === "cartItem7") {
            calcDifferenceMinus(6);
        } else if (id === "cartItem8") {
            calcDifferenceMinus(7);
        } else if (id === "cartItem9") {
            // do nothing - html currently commented out
        } else if (id === "cartItem10") {
            calcDifferenceMinus(8);
        } else if (id === "cartItem11") {
            calcDifferenceMinus(9);
        } else if (id === "cartItem12") {
            calcDifferenceMinus(10);
        } else if (id === "cartItem13") {
            calcDifferenceMinus(11);
        } else if (id === "cartItem14") {
            calcDifferenceMinus(12);
        } else if (id === "cartItem15") {
            // do nothing - html currently commented out
        } else if (id === "cartItem16") {
            calcDifferenceMinus(13);
        }
        calculatePersonal(jsonData);

    });
    // using bind for 'this' (binds this to .plus)
    $(".plus").bind("click touchstart", function (e) {
        var btn = $(this)
        btn.prev().css("pointer-events", "initial");
        e.stopImmediatePropagation();
        e.preventDefault();
        let id = this.parentElement.id;
        let counter = this.parentElement.firstElementChild;
        let counterNum = counter.innerHTML;
        if (coinsRemaining > 0) {
            let counter = this.parentElement.firstElementChild;
            this.parentElement.insertAdjacentHTML("beforeend", coinHTML);
            counter.innerHTML++;
            let counterNum = parseInt(counter.innerHTML);
            if (counterNum === 6) {
                displayErr("Container Full");
                this.style.pointerEvents = "none";
            }
            counterTotal.innerHTML--;
            coinsRemaining--;
            updateCoins("plus");
        } else {
            displayErr("Not Enough Coins");
        }

        function calcDifferencePlus(index) {
            if (coinsInUse < 44) {
                coinWeights[index] += 1
                coinsInUse += 1
            }
        }
        if (id === "cartItem1") {
            calcDifferencePlus(0);
        } else if (id === "cartItem2") {
            calcDifferencePlus(1);
        } else if (id === "cartItem3") {
            calcDifferencePlus(2);
        } else if (id === "cartItem4") {
            calcDifferencePlus(3);
        } else if (id === "cartItem5") {
            calcDifferencePlus(4);
        } else if (id === "cartItem6") {
            calcDifferencePlus(5);
        } else if (id === "cartItem7") {
            calcDifferencePlus(6);
        } else if (id === "cartItem8") {
            calcDifferencePlus(7);
        } else if (id === "cartItem9") {
            // do nothing - html currently commented out
        } else if (id === "cartItem10") {
            calcDifferencePlus(8);
        } else if (id === "cartItem11") {
            calcDifferencePlus(9);
        } else if (id === "cartItem12") {
            calcDifferencePlus(10);
        } else if (id === "cartItem13") {
            calcDifferencePlus(11);
        } else if (id === "cartItem14") {
            calcDifferencePlus(12);
        } else if (id === "cartItem15") {
            // do nothing - html currently commented out
        } else if (id === "cartItem16") {
            calcDifferencePlus(13);
        }
        if (counterTotal.innerHTML === "2" && document.getElementById("OwnerOccupiedHome").checked) {
            $(".plus").css("pointer-events", "none");
            displayErr("2 Coins Needed for Rent/Mortage");
        }
        calculatePersonal(jsonData);
        calculatePercentage(personalCPI)

    });

    // Check toggle states & update coin weights on initial quesitons
    $("input[type='radio']").change(updateWeights);

    function updateWeights() {

        let currWeight = 0;



        if (this.value === "Mortgaged Owner Occupied Home") {


            addOverlay("#cartItem5");
            removeOverlay("#cartItem6, #cartItem7");
            currWeight = coinWeights[4];
            coinWeights[4] = 0;
            coinsInUse -= currWeight;

            currWeight = coinWeights[5];
            coinWeights[5] = 2
            coinsInUse -= currWeight - 2;
            rePopulate("#cartItem6", 2);

        } else if (this.value === "Owner Occupied Home (No Mortgage)") {


            addOverlay("#cartItem5, #cartItem6");
            removeOverlay("#cartItem7");

            currWeight = coinWeights[4];
            coinWeights[4] = 0;
            coinsInUse -= currWeight;

            currWeight = coinWeights[5];
            coinWeights[5] = 0
            coinsInUse -= currWeight;

            $("#cartItem5 .unit, #cartItem6 .unit").remove();

        } else if (this.value === "Rental Accommodation") {

            addOverlay("#cartItem6");
            removeOverlay("#cartItem5, #cartItem7");
            currWeight = coinWeights[4];
            coinWeights[4] = 2;
            coinsInUse -= currWeight - 2;
            rePopulate("#cartItem5", 2);
            currWeight = coinWeights[5];
            coinWeights[5] = 0
            coinsInUse -= currWeight;

        } else if (this.value === "Car-Yes") {

            removeOverlay("#cartItem10");
            currWeight = coinWeights[8];
            coinWeights[8] = 6;
            coinsInUse -= currWeight - 6;
            rePopulate("#cartItem10", 6);

        } else if (this.value === "Car-No") {

            addOverlay("#cartItem10");
            currWeight = coinWeights[8];
            coinWeights[8] = 0;
            coinsInUse -= currWeight;

        } else if (this.value === "Smoker-Yes") {

            removeOverlay("#cartItem3");
            currWeight = coinWeights[2];
            coinWeights[2] = 1;
            coinsInUse -= currWeight - 1;
            rePopulate("#cartItem3", 1);

        } else if (this.value === "Smoker-No") {

            addOverlay("#cartItem3");
            currWeight = coinWeights[2];
            coinWeights[2] = 0;
            coinsInUse -= currWeight;

        } else if (this.value === "Drinker-Yes") {

            removeOverlay("#cartItem2");
            currWeight = coinWeights[1];
            coinWeights[1] = 4;
            coinsInUse -= currWeight - 4;
            rePopulate("#cartItem2", 4);

        } else if (this.value === "Drinker-No") {

            addOverlay("#cartItem2");
            currWeight = coinWeights[1];
            coinWeights[1] = 0;
            coinsInUse -= currWeight;

        }

        calculatePersonal(jsonData);
        calculatePercentage(personalCPI);

    }

    function rePopulate(selector, num) {

        let unit = document.querySelector(".unit");
        let location = document.querySelector(selector);
        let nodelist = location.querySelectorAll(".unit").length

        if (nodelist === 0) {

            for (let i = 1; i <= num; i++) {
                location.insertAdjacentHTML("beforeend", coinHTML);
            }

        }
        if (selector === "#cartItem6") {

            $("#cartItem5 .unit").remove();

        } else if (selector === "#cartItem5") {

            $("#cartItem6 .unit").remove();

        }
    }

    function populate() {

        let total = 0;

        for (let i = 0; i < containers.length; i++) {
            let item = containers[i];
            let span = item.firstElementChild;
            let num = coinWeights[i];
            for (let i = 1; i <= num; i++) {

                item.insertAdjacentHTML("beforeend", coinHTML);

            }

            span.innerHTML = num;
            total += num;
            newArr.push(num);
        }
    };

    populate();

    // Get previous selection 

    var prev;
    var id;

    $("label").on("mousedown", function () {

        prev = $('input[type=radio]:checked').val();
        id = $('input[type=radio]:checked').attr("id");
    });

    // Auto Adjust Table Visually & update counters 

    $("input[type='radio']").change(autoAdjust);

    console.log(`Coins in use ${coinsInUse}`)
    console.log(`Coins remaining ${coinsRemaining}`)

    function autoAdjust() {


        //let currValue1;
        //let currValue2;

        // When you click on a radio button, you need to check for:
        // 1st Get the current value in the item
        // 2nd Get coins remaining and make sure there is enough remaining, each item has
        // different weights associated with them.
        // 3rd If there is enough remaining to make that choice update the two counters
        // 4th Update visually 


        // i.e if I click owner I need to count the coins in rent / mortage and remove them 
        // from the coins in use and add them to coins remaining 

        // i.e if I click mortage I need to count the coins in just rent and remove them
        // from the coins in use and add them to coins remaining 

        // i.e if I click rent I need to count the coins in just mortage and remove them
        // from the coins in use and add them to coins remaining 


        //if ($(this).val() === "Mortgaged Owner Occupied Home") { // Weight of 2 

        //    currValue1 = $("#cartItem5 > .counter").html(); // Get Rent value
        //    currValue1 -= coinWeights[5];

        //    if (coinsRemaining >= 2) {

        //        coinsInUse += currValue1; // Take it from total coins in use
        //        coinsRemaining += currValue1; // Add it to remaining 
        //        counterTotal.innerHTML = coinsRemaining;
        //        console.log(`Coins in use ${coinsInUse}`);
        //        console.log(`Coins remaining ${coinsRemaining}`);

        //    } else {

        //        return

        //    }

        //}

        //if ($(this).val() === "Owner Occupied Home (No Mortgage)") { // Weight of 0 no inital check needed

        //    currValue1 = $("#cartItem5 > .counter").html(); // Get Rent value
        //    currValue2 = $("#cartItem6 > .counter").html(); // Get Mortage value

        //    if (coinsRemaining >= 2) {

        //        coinsInUse - (currValue1 - currValue2);
        //        coinsRemaining + (currValue1 + currValue2);

        //        console.log(`Coins in use ${coinsInUse}`);
        //        console.log(`Coins remaining ${coinsRemaining}`);


        //    } else {


        //    }

        //}

        //if ($(this).val() === "Rental Accommodation") { // Weight of 0

        //    currValue1 = $("#cartItem6 > .counter").html(); // Get Mortage value


        //    if (coinsRemaining >= 2) {

        //        coinsInUse - currValue1; // Take it from total coins in use
        //        coinsRemaining + currValue1; // Add it to remaining;

        //        console.log(`Coins in use ${coinsInUse}`);
        //        console.log(`Coins remaining ${coinsRemaining}`);

        //    } else {



        //    }

        //}
        //  console.log(total)
        coinsRemaining = counterTotal.innerHTML
        if (coinsRemaining > 2) {

            $("#plus").css("pointer-events", "initial");

        }

        let currVal;
        let currVal2;


        if ($(this).val() === "Mortgaged Owner Occupied Home") {

            if (prev === "Owner Occupied Home (No Mortgage)" && coinsRemaining < 2) {

                displayErr("Not Enough Coins - Owner => Mortage");
                $("#OwnerOccupiedHome").prop("checked", true);

            } else if (prev === "Rental Accommodation") {
                // do nothing
            } else {

                for (let i = 0; i < 2; i++) {

                    counterTotal.innerHTML--;

                }

                coinsRemaining = counterTotal.innerHTML // fixes issues with coins going into minusg

            }

            if (currVal > 0) {

                for (let i = 0; i < currVal; i++) {

                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem5 .unit").remove();

                }

                $("#cartItem5 > .counter").html("0");

            } else {
                // do nothing
            }
        } else if ($(this).val() === "Owner Occupied Home (No Mortgage)") {
            console.log("this")
            currVal = $("#cartItem5 > .counter").html();
            currVal2 = $("#cartItem6 > .counter").html();
            if (coinsRemaining < 2) {

                $("#plus").css("pointer-events", "auto");
                console.log("none")

            }
            if (prev === "Rental Accommodation" || prev === "Mortgaged Owner Occupied Home") {
                for (let i = 0; i < 2; i++) {
                    counterTotal.innerHTML++;
                }
            }

            for (let i = 0; i < currVal; i++) {
                counterTotal.innerHTML--;
            }
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem5 .unit").remove();
                }
                $("#cartItem5 > .counter").html("0");
            } else {
                // do nothing
            }
            if (currVal2 > 0) {
                for (let i = 0; i < currVal2; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem6 .unit").remove();
                }
                $("#cartItem6 > .counter").html("0");
            } else { }
        } else if ($(this).val() === "Rental Accommodation") {
            if (prev === "Owner Occupied Home (No Mortgage)") {
                for (let i = 0; i < 2; i++) {
                    counterTotal.innerHTML--;
                }
                coinsRemaining = counterTotal.innerHTML // fixes issues with coins going into minus
            } else {
                // do nothing
            }
            currVal = $("#cartItem6 > .counter").html();
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem6 .unit").remove();
                }
                $("#cartItem6 > .counter").html("0");
            } else {
                // do nothing
            }
            coinsRemaining = counterTotal.innerHTML
            console.log(coinsRemaining)
        } else if ($(this).val() === "Smoker-Yes") {
            if (coinsRemaining >= 1) {
                currVal = $("#cartItem3 > .counter").html("1");
                for (let i = 0; i < 1; i++) {
                    counterTotal.innerHTML--;
                    coinsRemaining--;
                }
            } else {
                displayErr("Not Enough Coins smoking")
            }
        } else if ($(this).val() === "Smoker-No") {
            currVal = $("#cartItem3 > .counter").html();
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem3 .unit").remove();
                }
                $("#cartItem3 > .counter").html("0");
            } else {
                // do nothing
            }
        } else if ($(this).val() === "Insurance-Yes") { // not in use
            // do nothing
        } else if ($(this).val() === "Insurance-No") {
            currVal = $("#cartItem9 > .counter").html();
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem9 .unit").remove();
                }
                $("#cartItem9 > .counter").html("0");
            } else {
                // do nothing
            }
        } else if ($(this).val() === "Drinker-Yes") {
            if (coinsRemaining >= 4) {
                currVal = $("#cartItem2 > .counter").html("4");
                for (let i = 0; i < 4; i++) {
                    counterTotal.innerHTML--;
                }
            } else {
                displayErr("Not Enough Coins drinking")
            }
        } else if ($(this).val() === "Drinker-No") {
            currVal = $("#cartItem2 > .counter").html();
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem2 .unit").remove();
                }
                $("#cartItem2 > .counter").html("0");
            } else {
                // do nothing
            }
        } else if ($(this).val() === "Car-Yes") {
            if (coinsRemaining >= 6) {
                currVal = $("#cartItem10 > .counter").html("6");
                for (let i = 0; i < 6; i++) {
                    counterTotal.innerHTML--;
                }
            } else {
                displayErr("Not Enough Coins car")
            }
        } else if ($(this).val() === "Car-No") {
            currVal = $("#cartItem10 > .counter").html();
            if (currVal > 0) {
                for (let i = 0; i < currVal; i++) {
                    counterTotal.innerHTML++;
                    coinsRemaining++;
                    $("#cartItem10 .unit").remove();
                }
                $("#cartItem10 > .counter").html("0");
            } else {
                // do nothing
            }
        }
        coinsRemaining = counterTotal.innerHTML
       updateCoins();
    }
    //$("#lineChart").on("click", function () {
    //    renderHighchart(personalCPI, nationalCPI, 'Personal Inflation', 'National Inflation');
    //    $(".chart1").removeClass("close");
    //    $(".chart2").addClass("close");
    //});
    //$("#percentageChart").on("click", function () {
    //    renderHighchart(percentageChangePersonal, percentageChangeNational, 'PI Percentage Change', 'NI  Percentage Change');
    //    $(".chart1").removeClass("close");
    //    $(".chart2").addClass("close");
    //});
    //$("#pieChart").on("click", function () {
    //    $(".chart1").addClass("close");
    //    $(".chart2").removeClass("close");
    //});
    //$("#reset").on("click", function () {
    //    location.reload();
    //});

    function renderHighchart(data1, data2, text1, text2) {
        Highcharts.chart('container', {
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            xAxis: {
                categories: months
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    }
                }
            },
            series: [{
                name: text1,
                data: data1
            }, {
                name: text2,
                data: data2
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
        Highcharts.chart('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Percentage Breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Catergories',
                colorByPoint: true,
                data: [{
                    name: 'Food',
                    y: calculatePieChart(coinWeights, 0)
                }, {
                    name: 'Alcohol',
                    y: calculatePieChart(coinWeights, 1)
                }, {
                    name: 'Tobacco',
                    y: calculatePieChart(coinWeights, 2)
                }, {
                    name: 'Clothing',
                    y: calculatePieChart(coinWeights, 3)
                }, {
                    name: 'Rent',
                    y: calculatePieChart(coinWeights, 4)
                }, {
                    name: 'Mortage',
                    y: calculatePieChart(coinWeights, 5)
                }, {
                    name: 'Housing',
                    y: calculatePieChart(coinWeights, 6)
                }, {
                    name: 'Health',
                    y: calculatePieChart(coinWeights, 7)
                }, {
                    name: 'Car',
                    y: calculatePieChart(coinWeights, 8)
                }, {
                    name: 'Public Transport',
                    y: calculatePieChart(coinWeights, 9)
                }, {
                    name: 'Telecommunications',
                    y: calculatePieChart(coinWeights, 10)
                }, {
                    name: 'Recreation',
                    y: calculatePieChart(coinWeights, 11)
                }, {
                    name: 'Education',
                    y: calculatePieChart(coinWeights, 12)
                }, {
                    name: 'Other',
                    y: calculatePieChart(coinWeights, 13)
                }, {
                    name: 'Other',
                    y: calculatePieChart(coinWeights, 14)
                }]
            }]
        });
    }
});

let app = document.getElementById("app");

let gamesList = document.getElementById("gamesList");
let genresList = document.getElementById("genresList");
let idealList = document.getElementById("idealList");
let playerList = document.getElementById("playerList");
let mechanicsList = document.getElementById("mechanicsList");
let difficultyList = document.getElementById("difficultyList");

let games = [];
let genres = [];
let ideal = [];
let players = [];
let mechanics = [];
let difficulty = [];
let gameData = [];


let flatten = (arr) => {
    return arr.reduce((a, b) => a.concat(b), [])
}

let flattenSort = (arr) => {
    return [...new Set(arr.reduce((a, b) => a.concat(b), []))]
}

let findMax = (arr) => {
    return [Math.max(...arr)]
}

let pushArr = (arr, json) => {
    arr.push(json)
    arr = flattenSort(arr)
    return arr
}

let populateOption = (js, html, numberedList = false) => {

    if (numberedList) {
        for (let i = 2; i <= js; i++) {
            html.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    } else {
        for (let i of js) {
            html.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    }

}

fetch('https://darrencarlin.com/games.json')
    .then(response => response.json())
    .then(data => data.forEach( (game, index) => {

        console.log("foreach")
        games.push(game.name);

        genres.push(game.genre);
        genres = flattenSort(genres);

        ideal.push(game.idealFor);
        ideal = flattenSort(ideal);

        players.push(game.players.playersMax);
        players = findMax(players);

        mechanics.push(game.mechanics);
        mechanics = flattenSort(mechanics);

        difficulty.push(game.difficulty);
        difficulty = flattenSort(difficulty);

    }))
    .catch(err => console.log(err))

populateOption(games, gamesList);
populateOption(genres, genresList);
populateOption(ideal, idealList);
populateOption(mechanics, mechanicsList);
populateOption(difficulty, difficultyList);
populateOption(players, playerList, true);
