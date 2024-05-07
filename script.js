// Quiz

document.getElementById("refresh").addEventListener("click", refresh)

function refresh() {
        location.reload();
}

// Variables
let counter = 0;

let input1 = document.getElementById("ans1");
let input2 = document.getElementById("ans2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("ans4");
let input5 = document.getElementById("ans5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("ans7");
let input8 = document.getElementById("ans8");
let input9 = document.getElementById("ans9");
let input10 = document.getElementById("ans10");
let input11 = document.getElementById("input11");

let pic4 = document.getElementById("pic4");
let pic7 = document.getElementById("pic7");
let pic8 = document.getElementById("pic8");
let pic10 = document.getElementById("pic10");

let question1 = "";
let question2 = "";
let question3 = "";
let question4 = "";
let question5 = "";
let question6 = "";
let question7 = "";
let question8 = "";
let question9 = "";
let question10 = "";
let question11 = "";

let opp1 = 0;
let opp2 = 0;
let opp3 = 0;
let opp4 = 0;
let opp5 = 0;
let opp6 = 0;
let opp7 = 0;
let opp8 = 0;
let opp9 = 0;
let opp10 = 0;
let opp11 = 0;

let correct1 = "";
let correct2 = "";
let correct3 = "";
let correct4 = "";
let correct5 = "";
let correct6 = "";
let correct7 = "";
let correct8 = "";
let correct9 = "";
let correct10 = "";
let correct11 = "";

// Questions
let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();
let rand4 = Math.random();
let rand5 = Math.random();
let rand6 = Math.random();
let rand7 = Math.random();
let rand8 = Math.random();
let rand9 = Math.random();
let rand10 = Math.random();
let rand11 = Math.random();

// Question 1
if (rand1 < 0.2) {
        question1 = "What is the largest creature in RainWorld?";
        opp1 = 1;
} else if (rand1 < 0.4) {
        question1 = "What is the smallest creature in RainWorld?";
        opp1 = 2;
} else if (rand1 < 0.6) {
        question1 = "what abilitys or poweres does the player have to help them survive?";
        opp1 = 3;
} else if (rand1 < 0.8) {
        question1 = "What is the main goal of the base game?";
        opp1 = 4;
} else{
        question1 = "What kills the player at the end of the day?";
        opp1 = 5;
}
// Question 2
if (rand2 < 0.25) {
        question2 = "How many diffrent lizard types are there (incuding DLC)?";
        correct2 = "13";
        opp2 = 13;
} else if (rand2 < 0.5) {
        question2 = "How many diffrent types of carnivourus plants are there?";
        correct2 = "3";
        opp2 = 3;
} else if (rand2 < 0.75) {
        question2 = "How many diffrent slugcats are there (incuding DLC)?";
        correct2 = "9";
        opp2 = 9;
} else {
        question2 = "How many diffrent flying creatures are there (incuding DLC)?";
        correct2 = "7";
        opp2 = 7;
}
// Question 3
if (rand3 < 0.2) {
        question3 = "Which lizards can climb poles?";
        opp3 = 2345678;
        correct3 = "Pink, Blue, White, Yellow, Black, Red, Cyan";
} else if (rand3 < 0.4) {
        question3 = "Which lizards can climb walls?";
        opp3 = 348;
        correct3 = "Blue, White, Cyan";
} else if (rand3 < 0.6) {
        question3 = "Which lizards can be tamed?";
        opp3 = 12345678;
        correct3 = "All of them";
} else if (rand3 < 0.8) {
        question3 = "Which lizards can spawn in farm arrays?";
        opp3 = 1235;
        correct3 = "Green, Pink, Blue, Yellow";
} else {
        question3 = "Which lizards dont have tounges?";
        opp3 = 12567;
        correct3 = "Green, Pink, Yellow, Black, Red";
}
// Question 4
if (rand4 < 0.25) {
        pic4.src = "img/bubble-plant.png";
        correct4 = "Stuns Leaches";
        opp4 = 1;
} else if (rand4 < 0.5) {
        pic4.src = "img/gooieduck.png";
        correct4 = "Repels Wormgrass";
        opp4 = 2;
} else if (rand4 < 0.75) {
        pic4.src = "img/batnip.png";
        correct4 = "Attracts Batflies";
        opp4 = 3;
} else {
        pic4.src = "img/spore-puff.png";
        correct4 = "Attracts Raindeer";
        opp4 = 4;
}
// Question 5
if (rand5 < 0.25) {
        question5 = "Which slugcat can create explosions?";
        correct5 = "Artificer";
        opp5 = "artificer";
} else if (rand5 < 0.5) {
        question5 = "Which slugcat can create unlimited spears?";
        correct5 = "Spearmaster";
        opp5 = "spearmaster";
} else if (rand5 < 0.75) {
        question5 = "which slugcat cannot throw spears?";
        correct5 = "Saint";
        opp5 = "saint";
} else {
        question5 = "Which slugcat has increased speed?";
        correct5 = "Rivulet";
        opp5 = "rivulet";
}
// Question 6
if (rand6 < 0.2) {
        question6 = "What animal will increase you swim speed whill holding?";
        correct6 = `<img src="img/jetfish.png" width="100px">`;
        opp6 = 3;
} else if (rand6 < 0.4) {
        question6 = "What creature acts as a grapling hook?";
        correct6 = `<img src="img/grapple-worm.png" width="100px">`;
        opp6 = 1;
} else if (rand6 < 0.6) {
        question6 = "What creature summons vultures?";
        correct6 = `<img src="img/vulterGrub.png" width="100px">`;
        opp6 = 4;
} else if (rand6 < 0.8) {
        question6 = "What creature increases your jump hight?";
        correct6 = `<img src="img/squidcada.png" width="100px">`;
        opp6 = 5;
} else {
        question6 = "What creature can you ride on?";
        correct6 = `<img src="img/raindeer.png" width="100px">`;
        opp6 = 2;
}
// Question 7
if (rand7 < 0.25) {
        pic7.src = "img/eel.png";
        correct7 = "Eel lizard";
        opp7 = "eel";
} else if (rand7 < 0.5) {
        pic7.src = "img/salamander.png";
        correct7 = "Salamander";
        opp7 = "salamander";
} else if (rand7 < 0.75) {
        pic7.src = "img/strawberry.png";
        correct7 = "Strawberry lizard";
        opp7 = "strawberry";
} else {
        pic7.src = "img/train.png";
        correct7 = "Train lizard";
        opp7 = "train";
}
// Question 8
if (rand8 < 0.25) {
        pic8.src = "img/spear.png";
        correct8 = "Spear";
        opp8 = 1;
} else if (rand8 < 0.5) {
        pic8.src = "img/fire-spear.png";
        correct8 = "Fire Spear";
        opp8 = 2;
} else if (rand8 < 0.75) {
        pic8.src = "img/electric-spear.png";
        correct8 = "Electric Spear";
        opp8 = 3;
} else {
        pic8.src = "img/explosive-spear.png";
        correct8 = "Explosive Spear";
        opp8 = 4;
}
// Question 9
if (rand9 < 0.25) {
        question9 = "How many segmants does a red centipede have?";
        correct9 = "18";
        opp9 = "18";
} else if (rand9 < 0.5) {
        question9 = "How many diffrent centipedes types are there?";
        correct9 = "4";
        opp9 = "4";
} else if (rand9 < 0.75) {
        question9 = "What type of centipede can fly?";
        correct9 = "Centiwing";
        opp9 = "centiwing";
} else {
        question9 = "What type of centipede can swim ?";
        correct9 = "Aquapede";
        opp9 = "aquapede";
}
// Question 10
if (rand10 < 0.25) {
        pic10.src = "img/big-spider.png";
        correct10 = "Big spider";
        opp10 = "4";
} else if (rand10 < 0.5) {
        pic10.src = "img/mother-spider.png";
        correct10 = "Mother spider";
        opp10 = "2";
} else if (rand10 < 0.75) {
        pic10.src = "img/spitter-spider.png";
        correct10 = "Spitter spider";
        opp10 = "3";
} else {
        pic10.src = "img/coasescapead.png";
        correct10 = "Coalescipede";
        opp10 = "1";
}
// Question 11
if (rand11 < 0.2) {
        question11 = "Which item creates a singular large explotion when thrown?";
        correct11 = `<img src="img/grenade.png" width="100px">`;
        opp11 = 4;
} else if (rand11 < 0.4) {
        question11 = "Which item creates a birght flashing light when thrown?";
        correct11 = `<img src="img/flashbang.png" width="100px">`;
        opp11 = 5;
} else if (rand11 < 0.6) {
        question11 = "Which item creates a seriese of small explotions when thrown?";
        correct11 = `<img src="img/fiercracker.png" width="100px">`;
        opp11 = 1;
} else if (rand11 < 0.8) {
        question11 = "Which item temporarily immobilizes creatures around it when thrown?";
        correct11 = `<img src="img/beehive.png" width="100px">`;
        opp11 = 3;
} else {
        question11 = "Which item instantly kills any creaturesin its explotion radius?";
        correct11 = `<img src="img/singularity-bomb.png" width="100px">`;
        opp11 = 2;
}
// Setting Questions
document.getElementById("question1").innerHTML = question1;
document.getElementById("question2").innerHTML = question2;
document.getElementById("question3").innerHTML = question3;
document.getElementById("question5").innerHTML = question5;
document.getElementById("question6").innerHTML = question6;
document.getElementById("question9").innerHTML = question9;
document.getElementById("question11").innerHTML = question11;

// question 6 selection

let selection61 = document.getElementById("ans6-1");
let selection62 = document.getElementById("ans6-2");
let selection63 = document.getElementById("ans6-3");
let selection64 = document.getElementById("ans6-4");
let selection65 = document.getElementById("ans6-5");

selection61.addEventListener("click", select61);
selection62.addEventListener("click", select62);
selection63.addEventListener("click", select63);
selection64.addEventListener("click", select64);
selection65.addEventListener("click", select65);

let ans6 = 0;
function select61() {
        ans6 = 1;
        selection61.style.border = "3px solid red";
        selection62.style.border = "";
        selection63.style.border = "";
        selection64.style.border = "";
        selection65.style.border = "";
}
function select62() {
        ans6 = 2;
        selection61.style.border = "";
        selection62.style.border = "3px solid red";
        selection63.style.border = "";
        selection64.style.border = "";
        selection65.style.border = "";
}
function select63() {
        ans6 = 3;
        selection61.style.border = "";
        selection62.style.border = "";
        selection63.style.border = "3px solid red";
        selection64.style.border = "";
        selection65.style.border = "";
}
function select64() {
        ans6 = 4;
        selection61.style.border = "";
        selection62.style.border = "";
        selection63.style.border = "";
        selection64.style.border = "3px solid red";
        selection65.style.border = "";
}
function select65() {
        ans6 = 5;
        selection61.style.border = "";
        selection62.style.border = "";
        selection63.style.border = "";
        selection64.style.border = "";
        selection65.style.border = "3px solid red";
}
// question 6 selection

let selection1 = document.getElementById("ans11-1");
let selection2 = document.getElementById("ans11-2");
let selection3 = document.getElementById("ans11-3");
let selection4 = document.getElementById("ans11-4");
let selection5 = document.getElementById("ans11-5");

selection1.addEventListener("click", select1);
selection2.addEventListener("click", select2);
selection3.addEventListener("click", select3);
selection4.addEventListener("click", select4);
selection5.addEventListener("click", select5);

let ans11 = 0;
function select1() {
        ans11 = 1;
        selection1.style.border = "3px solid red";
        selection2.style.border = "";
        selection3.style.border = "";
        selection4.style.border = "";
        selection5.style.border = "";
}
function select2() {
        ans11 = 2;
        selection1.style.border = "";
        selection2.style.border = "3px solid red";
        selection3.style.border = "";
        selection4.style.border = "";
        selection5.style.border = "";
}
function select3() {
        ans11 = 3;
        selection1.style.border = "";
        selection2.style.border = "";
        selection3.style.border = "3px solid red";
        selection4.style.border = "";
        selection5.style.border = "";
}
function select4() {
        ans11 = 4;
        selection1.style.border = "";
        selection2.style.border = "";
        selection3.style.border = "";
        selection4.style.border = "3px solid red";
        selection5.style.border = "";
}
function select5() {
        ans11 = 5;
        selection1.style.border = "";
        selection2.style.border = "";
        selection3.style.border = "";
        selection4.style.border = "";
        selection5.style.border = "3px solid red";
}

// Checkboxes
let check1 = document.getElementById("ans3-1");
let check2 = document.getElementById("ans3-2");
let check3 = document.getElementById("ans3-3");
let check4 = document.getElementById("ans3-4");
let check5 = document.getElementById("ans3-5");
let check6 = document.getElementById("ans3-6");
let check7 = document.getElementById("ans3-7");
let check8 = document.getElementById("ans3-8");

document.getElementById("Grade").addEventListener("click", gradeTest);
let grade = "NotGraded";
let response = "";
// Grading
function gradeTest() {

        if (grade == "NotGraded") {
                console.log("not graded")
                grade = "Graded"
                counter = 0;
                // Anwser Variables
                let ans1 = input1.value.toLowerCase();
                let ans2 = input2.value.toLowerCase();
                let ans4 = input4.value
                let ans5 = input5.value.toLowerCase();
                let ans7 = input7.value.toLowerCase();
                let ans8 = input8.value
                let ans9 = input9.value.toLowerCase();
                let ans10 = input10.value
                let ans3 = "";

                let border1 = "";
                let border2 = "";
                let border3 = "";
                let border4 = "";
                let border5 = "";
                let border6 = "";
                let border7 = "";
                let border8 = "";
                let border9 = "";
                let border10 = "";
                let border11 = "";

                // Checkbox string Answer 3
                if(check1.checked == true) {
                        ans3 = "1";
                }
                if(check2.checked == true) {
                        ans3 += "2";
                }
                if(check3.checked == true) {
                        ans3 += "3";
                }
                if(check4.checked == true) {
                        ans3 += "4";
                }
                if(check5.checked == true) {
                        ans3 += "5";
                }
                if(check6.checked == true) {
                        ans3 += "6";
                }
                if(check7.checked == true) {
                        ans3 += "7";
                }
                if(check8.checked == true) {
                        ans3 += "8";
                }

                // Question 1
                if (opp1 == 1) {
                        if (ans1.includes("leviathan")) {
                                console.log("Correct1")
                                border1 = "3px solid green";
                                correct1 = "Correct";
                                counter += 1;
                        } else {
                                console.log("incorrect1")
                                border1 = "3px solid red";
                                correct1 = "Leviathan";
                        }
                } else if (opp1 == 2) {
                        if (ans1 == "batflies" || ans1 == "bat flies" || ans1 == "batfly" || ans1 == "bat fly") {
                                console.log("Correct1")
                                border1 = "3px solid green";
                                correct1 = "Correct";
                                counter += 1;
                        } else {
                                console.log("incorrect1")
                                border1 = "3px solid red";
                                correct1 = "Batflies";
                        }
                } else if (opp1 == 3) {
                        if (ans1 == "none" || ans1 == "nothing") {
                                console.log("Correct1")
                                border1 = "3px solid green";
                                correct1 = "Correct";
                                counter += 1;
                        } else {
                                console.log("incorrect1")
                                border1 = "3px solid red";
                                correct1 = "None";
                        }
                } else if (opp1 == 4) {
                        if (ans1.includes("die") || ans1.includes("ascen")) {
                                console.log("Correct1")
                                border1 = "3px solid green";
                                correct1 = "Correct";
                                counter += 1;
                        } else {
                                console.log("incorrect1")
                                border1 = "3px solid red";
                                correct1 = "To Ascend";
                        }
                } else {
                        if (ans1 == "rain" || ans1 == "the rain") {
                                console.log("Correct1")
                                border1 = "3px solid green";
                                correct1 = "Correct";
                                counter += 1;
                        } else {
                                console.log("incorrect1")
                                border1 = "3px solid red";
                                correct1 = "The Rain";
                        }
                }

                // Question 2
                if (ans2 == opp2) {
                        console.log("Correct2")
                        border2 = "3px solid green";
                        correct2 = "Correct";
                        counter += 1;
                }  else {
                        console.log("incorrect2")
                        border2 = "3px solid red";
                }
                // Question 3
                if (ans3 == opp3) {
                        console.log("Correct3")
                        border3 = "3px solid green";
                        correct3 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect3")
                        border3 = "3px solid red";
                }
                // Question 4
                if (ans4 == opp4) {
                        console.log("Correct4")
                        border4 = "3px solid green";
                        correct4 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect4")
                        border4 = "3px solid red";
                }
                // Question 5
                if (ans5.includes(opp5)) {
                        console.log("Correct5")
                        border5 = "3px solid green";
                        correct5 = "Correct";
                        counter += 1;
                } else {                
                        console.log("incorrect5")
                        border5 = "3px solid red";
                }

                // Question 6
                if (ans6 == opp6) {
                        console.log("Correct6")
                        border6 = "3px solid green";
                        correct6 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect6")
                        border6 = "3px solid red";
                }
                // Question 7
                if (ans7.includes(opp7)) {
                        console.log("Correct7")
                        border7 = "3px solid green";
                        correct7 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect7")
                        border7 = "3px solid red";
                }
                // Question 4
                if (ans8 == opp8) {
                        console.log("Correct8")
                        border8 = "3px solid green";
                        correct8 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect8")
                        border8 = "3px solid red";
                }
                // Question 9
                if (ans9.includes(opp9)) {
                        console.log("Correct9")
                        border9 = "3px solid green";
                        correct9 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect9")
                        border9 = "3px solid red";
                }
                // Question 10
                if (ans10.includes(opp10)) {
                        console.log("Correct10")
                        border10 = "3px solid green";
                        correct10 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect10")
                        border10 = "3px solid red";
                }
                // Question 11
                if (ans11 == opp11) {
                        console.log("Correct11")
                        border11 = "3px solid green";
                        correct11 = "Correct";
                        counter += 1;
                } else {
                        console.log("incorrect11")
                        border11 = "3px solid red";
                }

                // Marking Questions

                document.getElementById("correctAns1").innerHTML = correct1;
                document.getElementById("correctAns2").innerHTML = correct2;
                document.getElementById("correctAns3").innerHTML = correct3;
                document.getElementById("correctAns4").innerHTML = correct4;
                document.getElementById("correctAns5").innerHTML = correct5;
                document.getElementById("correctAns6").innerHTML = correct6;
                document.getElementById("correctAns7").innerHTML = correct7;
                document.getElementById("correctAns8").innerHTML = correct8;
                document.getElementById("correctAns9").innerHTML = correct9;
                document.getElementById("correctAns10").innerHTML = correct10;
                document.getElementById("correctAns11").innerHTML = correct11;

                input1.style.border = border1;
                input2.style.border = border2;
                input3.style.border = border3;
                input4.style.border = border4;
                input5.style.border = border5;
                input6.style.border = border6;
                input7.style.border = border7;
                input8.style.border = border8;
                input9.style.border = border9;
                input10.style.border = border10;
                input11.style.border = border11;

                // Mark Display
                let percent = Math.round(counter/11 * 100);
                if (percent == 100) {
                        response = `Grade: ${counter}/11 <br>Percent: ${percent}% <br>AMAZING!!!`;
                } else if (percent > 75) {
                        response = `Grade: ${counter}/11 <br>Percent: ${percent}% <br>Great Job!`;
                } else if (percent > 50) {
                        response = `Grade: ${counter}/11 <br>Percent: ${percent}% <br>Better Luck Next Time`;
                } else {
                        response = `Grade: ${counter}/11 <br>Percent: ${percent}% <br>Try Harder`;
                }
                document.getElementById("results").innerHTML = response;
        } else if (grade == "Graded") {
                response = `Test was already graded, click Try Again to redo the test<br>${response}`;
                document.getElementById("results").innerHTML = response;
                console.log("Test was Already Graded, Refresh page to try again")
        }
        
}

// Questions + Awnsers

/*1.    what is the largest creature in RainWorld - leviathan
        what is the smallest creature in RainWorld - Batflies
        what abilitys or poweres does the player have to help them survive - none / nothing
        what is the main goal of the base game - to die / to ascend / die / ascend
        what kills the player at the end of the day - rain / the rain
*/

/*2.    How many diffrent lizard types are there (incuding DLC)? - 12
        How many diffrent types of carnivourus plants are there - 3
        How many diffrent slugcats are there (incuding DLC)? - 9
        How many diffrent flying creatures are there (incuding DLC)? - 7
*/

/*3.    Which lizards can climb poles - pink blue white yellow black red cyan
        which lizards can climb walls - white blue cyan
        which lizards can be tamed - all
        what lizards can spawn in farm arrays - green blue yellow pink
        what lizards dont have tounges - green pink black yellow red
*/

/* 4.   
        what does this items do - scares away worm grass -- gooieduck
        what does this items do - attracts raindeer -- spore puff
        what does this items do - stuns leaches  -- bubble plant
        what does this items do - attracts batflies -- batnip
*/

/* 5.   
        which slugcat can create explosions - Artificer
        which slugcat can create unlimited spears - spearmaster
        which slugcat can not throw spears - saint
        which slugcat has increased speed - rivulet
*/

/*6.    what animal will increase you swim speed whill holding - jetfish
        what creature acctes as a grapling hook - Grappling worms / grapple worms
        what creature summons vultures - vulture grub
        what creature increases your jump hight - Squidcadas
        what creature can you ride on - raindeers / rain deers
*/

/*7.    
        what is this lizard called - eel lizard
        what is this lizard called - salamander
        what is this lizard called - strawberry
        what is this lizard called - train
*/

/*8.    
        what type of spear is this - spear
        what type of spear is this - fire spear
        what type of spear is this - electric spear
        what type of spear is this - explosive spear
*/

/*9.    
        How many segmants does a red centipede have - 18
        How many diffrent centipedes types are there - 4
        What type of centipede can fly - centiwing
        What type of centipede can swim - aquapede
*/
/*10.    
        What type of spider is this - big spider
        What type of spider is this - mother spider
        What type of spider is this - spitter spider
        What type of spider is this - coalescipede
*/
/*11.    
        which one creates a singular large explotion - grenade
        which one cretes bright flashing lights - flash bang
        witch one creater a seriese of small expoltions - fiercraker
        which one tempararaly imobalizes the target - beehive
        which one instantly kills any creature in its explotion radius - singularity bomb
*/