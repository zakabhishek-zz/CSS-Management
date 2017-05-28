//jscontent is an array of JSON data objects .


var jscontent =[
    {
        "country": "Thailand",
        "plan": "$74555",
        "forecast": "$12121225",
        "bestcase": [
            "$445176",
            "$8484100"
        ],
        "commit": [
            "$476734",
            "$5454100"]
    },
    {
        "country": "India",
        "plan": "$71125",
        "forecast": "$14225",
        "bestcase": [
            "$46676",
            "$8004100"
        ],
        "commit": [
            "$325734",
            "$7854100"]

    },


    {
        "country": "Morocco",
        "plan": "$73265",
        "forecast": "$16625",
        "bestcase": [
            "$466565",
            "$984100"
        ],
        "commit": [
            "$365634",
            "$7656100"]

    },

    {
        "country": "Japan",
        "plan": "$10022",
        "forecast": "$105125",
        "bestcase": [
            "$461216",
            "$8545400"
        ],
        "commit": [
            "$525734",
            "$58800"]

    },

    {
        "country": "United States",
        "plan": "$91625",
        "forecast": "$73225",
        "bestcase": [
            "$94676",
            "$346100"
        ],
        "commit": [
            "$875734",
            "$33500"]

    },

    {
        "country": "Russia",
        "plan": "$950555",
        "forecast": "$444600",
        "bestcase": [
            "$600000",
            "$900000"
        ],
        "commit": [
            "$74545",
            "$7859500"]

    },

    {
        "country": "China",
        "plan": "$7556641",
        "forecast": "$54545121",
        "bestcase": [
            "$4562321",
            "$805454"
        ],
        "commit": [
            "$564554",
            "$59751520"]

    }

];


$("#hide").click(function() //function to show the contents when the More option is selected
{
    // alert("Handler clicked");
    $(".ftype").fadeOut("slow", function(){});

});


$("#show").click(function() ////function to hide the contents when the Less option is selected
{
    // alert("Handler clicked");
    $(".ftype").fadeIn("slow", function(){});

});


//selecting the the first cell and the first element in the jscontent array

document.getElementById("country_name1").innerHTML=jscontent[0].country;
document.getElementById("country_name2").innerHTML=jscontent[1].country;
document.getElementById("country_name3").innerHTML=jscontent[2].country;
document.getElementById("country_name4").innerHTML=jscontent[3].country;
document.getElementById("country_name5").innerHTML=jscontent[4].country;
document.getElementById("country_name6").innerHTML=jscontent[5].country;


//selecting the the Second Column ie. Plan and displaying the corresponding JSON value

document.getElementById("plan_1").innerHTML=jscontent[0].plan;
document.getElementById("plan_2").innerHTML=jscontent[1].plan;
document.getElementById("plan_3").innerHTML=jscontent[2].plan;
document.getElementById("plan_4").innerHTML=jscontent[3].plan;
document.getElementById("plan_5").innerHTML=jscontent[4].plan;
document.getElementById("plan_6").innerHTML=jscontent[5].plan;


//selecting the the Third Column ie. forecast and displaying the corresponding JSON value

document.getElementById("forecast_1").innerHTML=jscontent[0].forecast;
document.getElementById("forecast_2").innerHTML=jscontent[1].forecast;
document.getElementById("forecast_3").innerHTML=jscontent[2].forecast;
document.getElementById("forecast_4").innerHTML=jscontent[3].forecast;
document.getElementById("forecast_5").innerHTML=jscontent[4].forecast;
document.getElementById("forecast_6").innerHTML=jscontent[5].forecast;




//selecting the the fourth Column ie. best case and displaying the corresponding JSON value. We traverse through both the bestcase values

document.getElementById("best_case1").innerHTML=jscontent[0].bestcase[0];
document.getElementById("best_case1.1").innerHTML=jscontent[0].bestcase[1];
document.getElementById("best_case2").innerHTML=jscontent[1].bestcase[0];
document.getElementById("best_case2.1").innerHTML=jscontent[1].bestcase[1];
document.getElementById("best_case3").innerHTML=jscontent[2].bestcase[0];
document.getElementById("best_case3.1").innerHTML=jscontent[2].bestcase[1];
document.getElementById("best_case4").innerHTML=jscontent[3].bestcase[0];
document.getElementById("best_case4.1").innerHTML=jscontent[3].bestcase[1];
document.getElementById("best_case5").innerHTML=jscontent[4].bestcase[0];
document.getElementById("best_case5.1").innerHTML=jscontent[4].bestcase[1];
document.getElementById("best_case6").innerHTML=jscontent[5].bestcase[0];
document.getElementById("best_case6.1").innerHTML=jscontent[5].bestcase[1];





//selecting the the fifth  Column ie.commit and displaying the corresponding JSON value. We traverse through both the commit values
document.getElementById("commit1").innerHTML=jscontent[0].commit[0];
document.getElementById("commit1.1").innerHTML=jscontent[0].commit[1];
document.getElementById("commit2").innerHTML=jscontent[1].commit[0];
document.getElementById("commit2.1").innerHTML=jscontent[1].commit[1];
document.getElementById("commit3").innerHTML=jscontent[2].commit[0];
document.getElementById("commit3.1").innerHTML=jscontent[2].commit[1];
document.getElementById("commit4").innerHTML=jscontent[3].commit[0];
document.getElementById("commit4.1").innerHTML=jscontent[3].commit[1];
document.getElementById("commit5").innerHTML=jscontent[4].commit[0];
document.getElementById("commit5.1").innerHTML=jscontent[4].commit[1];
document.getElementById("commit6").innerHTML=jscontent[5].commit[0];
document.getElementById("commit6.1").innerHTML=jscontent[5].commit[1];

