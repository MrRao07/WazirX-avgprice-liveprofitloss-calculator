// ==UserScript==
// @name         Mr X 
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  try to take over the world!
// @author       Mr.Rao
// @match        https://wazirx.com/exchange/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==





function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeflag(flag){
    if (flag==0) return 1;
    else return 0;
}


window.addEventListener('load', async function() {
    'use strict';

    await sleep(2000);

    let totalinr=0;
    let totalprofitloss=0;
    let coinamtMap = new Map();
    let coininrspendMap = new Map();
    let flag=1;

    let D= document.getElementsByClassName("sc-hMqMXs dmFtgd navbar navbar-default");
    let data = document.createElement("Details");
    data.innerText = "";
    data.className = "Data";
    D[0].after(data);

    let A= document.getElementsByClassName("sc-bdVaJa sc-jzgbtB cqfbzB");

    let btn = document.createElement("button");
    btn.innerHTML = "Mr X";
    btn.className = "Btn";
    btn.title ="";
    A[0].append(btn);

    const styles ={
        fontVariant: 'none',
        background: 'dodgerblue',
        color: 'white',
        fontSize: 'revert',
        padding: 'revert',
        blockSize: 'auto'
    }
    Object.assign(btn.style,styles);

    let LP = document.createElement("LP");
    LP.innerHTML = 0;
    A[0].append(LP);

    let Livestyles0 ={
        color: "black",
        textShadow: "0 0 black",
        background: "white"
    }
    let Livestyles1 ={
        color: "black",
        textShadow: "0 0 black",
        background: "#F1535F"
    }
    let Livestyles2 ={
        color: "black",
        textShadow: "0 0 black",
        background: "#d5f5e4"
    }

    let localprofitstyles1 ={
        //green
        color: "rgb(0, 200, 83)",
        display: "block",
        fontSize: "10px",
        lineHeight: "1.2",
        textAlign: "left",
        fontWeight: "bold"
    }
    let localprofitstyles2 ={
        //red
        color: "rgb(244, 67, 54)",
        display: "block",
        fontSize: "10px",
        lineHeight: "1.2",
        textAlign: "left",
        fontWeight: "bold"
    }


    let btn2 = document.createElement("button");
    btn2.innerHTML = "re";
    btn2.className = "Btn";
    A[0].append(btn2);

    const btn2styles ={
        fontVariant: 'none',
        background: 'white',
        color: 'black',
        fontSize: 'revert',
        padding: 'revert',
        blockSize: 'auto'
    }
    const datastyles ={
        fontVariant: 'none',
        background: '#1e90ff',
        color: 'white',
        fontSize: 'revert',
        padding: 'revert',
        blockSize: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        WebkitUserModify: 'read-write-plaintext-only'
    }
    const datastyles2 ={
        fontVariant: 'none',
        background: 'rgb(236 239 241)',
        color: 'black',
        fontSize: 'revert',
        padding: 'revert',
        blockSize: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
        WebkitUserModify: 'read-write-plaintext-only'
    }

    const calbtnstyles ={
        background: '#0081ff',
        color: 'white',
        fontSize: '15px',
        padding: 'revert',
        blockSize: 'auto',
        width:' 100px',
        placeSelf: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        fontWeight: 'bold',
    }

    const inputstyles={

        display: 'flex',
        flexShrink: '0',
        padding: '0px 5px',
        margin: 'auto 0px',
        flexDirection: 'column',
        WebkitBoxPack: 'start',
        justifyContent: 'flex-start',
        borderRight: '1px solid rgba(34, 35, 38, 0.12)',
        width: '150px',
        placeSelf: 'center',
    }


    const inputstyles2= {
        overflow: 'hidden',
        fontWeight: '600',
        padding: '20px 35px 20px 10px',
        fontSize: '14px',
        lineHeight: '1.25',
        letterSpacing: '0.2px',
        color: 'rgb(34, 35, 38)',
        border: '3px solid rgba(34, 35, 38, 0.12)',
        transition: 'all 0.4s ease 0s',
        width: '200px',
        placeSelf: 'center',
    }

    const selectstyles={
        width: '150px',
    }

    Object.assign(btn2.style,btn2styles);
    Object.assign(data.style,datastyles);




        let D2= document.getElementsByClassName("footer");

        let cal = document.createElement("text");
        cal.className = "cal"
        cal.innerText="Calculator";
        D2[0].before(cal);


        let sycn = document.createElement("select");
        sycn.innerHTML = "sycn";
        sycn.id="myselect";
        sycn.className = "coin_select";
        sycn.title ="Select the coin";
       // console.log(sycn);
        D2[0].before(sycn);

        let curr_avg_price_text =document.createElement("text");
        curr_avg_price_text.className ="cal2";
        curr_avg_price_text.innerText="Current Avg Price";
        D2[0].before(curr_avg_price_text);

        let curr_avg_price =document.createElement("input");
        curr_avg_price.value=0.00;
        D2[0].before(curr_avg_price);

        let curr_coin_no_text =document.createElement("text");
        curr_coin_no_text.className ="cal3";
        curr_coin_no_text.innerText="Current NO of COIN";
        D2[0].before(curr_coin_no_text);

        let curr_coin_no =document.createElement("input");
        D2[0].before(curr_coin_no);

        let new_buy_price_text =document.createElement("text");
        new_buy_price_text.className ="cal4";
        new_buy_price_text.innerText="New Buy Price";
        D2[0].before(new_buy_price_text);

        let new_buy_price =document.createElement("input");
        D2[0].before(new_buy_price);

        let new_buy_cost_text =document.createElement("text");
        new_buy_cost_text.className ="cal5";
        new_buy_cost_text.innerText="Buy Cost";
        D2[0].before(new_buy_cost_text);

        let new_buy_cost =document.createElement("input");
        D2[0].before(new_buy_cost);


        let calbtn = document.createElement("button");
        calbtn.innerHTML = "calculate";
        calbtn.className = "Btn";
        calbtn.title ="";
        D2[0].before(calbtn);

        let NEWPRICE = document.createElement("data");
        NEWPRICE.className ="newprice";
        NEWPRICE.innerText = " Result =>";
        D2[0].before(NEWPRICE);

        Object.assign(calbtn.style,calbtnstyles);
        Object.assign(cal.style,datastyles);

        Object.assign(curr_avg_price.style,inputstyles2);
        Object.assign(curr_coin_no.style,inputstyles2);
        Object.assign(new_buy_price.style,inputstyles2);
        Object.assign(new_buy_cost.style,inputstyles2);

        Object.assign(curr_avg_price_text.style,datastyles2);
        Object.assign(curr_coin_no_text.style,datastyles2);
        Object.assign(new_buy_price_text.style,datastyles2);
        Object.assign(new_buy_cost_text.style,datastyles2);


        Object.assign(NEWPRICE.style,datastyles);

        Object.assign(sycn.style,selectstyles);


        sycn.onchange= ()=>{
            //console.log(document.getElementById("myselect").value);
            let x= document.getElementById("myselect").value;
            var xarr = x.split(',');
            curr_coin_no.value= parseFloat(xarr[0]);
            curr_avg_price.value= parseFloat(xarr[1]);
            new_buy_price.value= xarr[2];
            new_buy_cost.value= xarr[3];
           // console.log(x);
        }

        calbtn.onclick =()=>{
            let new_avg_price= ((parseFloat(curr_avg_price.value) *parseFloat(curr_coin_no.value)) + parseFloat(new_buy_cost.value))/(parseFloat(curr_coin_no.value) + (parseFloat(new_buy_cost.value)/parseFloat(new_buy_price.value)));
            NEWPRICE.innerText=" New COIN COUNT : " + (parseFloat(curr_coin_no.value) + (parseFloat(new_buy_cost.value)/parseFloat(new_buy_price.value))).toFixed(4) + "    New avg Price : "+ new_avg_price + " ";

        }


    async function liveloop(){
        while(1)
        {
            if(flag==0)return;
            await sleep(1000);
            //btn2.click();
            liveprofitloss();
        }
    }



    async function liveprofitloss(){
        let star= document.getElementsByTagName("label");
        //star[0].click();
        let starcoins= document.getElementsByClassName("ticker-item");

        let starcoincurrentprice= document.getElementsByClassName("price-text ticker-price");
        let starcoinname= document.getElementsByClassName("market-name-text");
        let starcoinsubtextname= document.getElementsByClassName("market-change");
        totalprofitloss=0-totalinr;
        //console.log(starcoinname[0].innerText);
        for(let i =0;i<starcoins.length;i++){
            if( coinamtMap.has( starcoinname[i].innerText.slice(0,-4) ) ){
                totalprofitloss+= (coinamtMap.get( starcoinname[i].innerText.slice(0,-4) ))* ( parseFloat(starcoincurrentprice[i].innerText.replace(/[,₹]/g, '') ) ) ;

                let localprofit = ( -(coininrspendMap.get(starcoinname[i].innerText.slice(0,-4))) + (coinamtMap.get(starcoinname[i].innerText.slice(0,-4)))*(parseFloat(starcoincurrentprice[i].innerText.replace(/[,₹]/g, ''))) ).toFixed(2) ;
                let localprofitpercent = localprofit*100/(coininrspendMap.get(starcoinname[i].innerText.slice(0,-4)));
                starcoinsubtextname[i].innerText= " ₹" + localprofit + " (" +localprofitpercent.toFixed(2) + "%)" ;
                if(localprofit>0)
                { Object.assign(starcoinsubtextname[i].style,localprofitstyles1); }
                else{ Object.assign(starcoinsubtextname[i].style,localprofitstyles2); }
            }// console.log(coinamtMap.get( starcoinname[i].innerText.slice(0,-4) ) );
            // console.log(parseFloat(starcoincurrentprice[i].innerText.replace(/[,₹]/g, '') ) );
        }
        LP.innerHTML = "P/L : ₹ " + totalprofitloss.toFixed(3) + "(" + (totalprofitloss*100/totalinr).toFixed(2) + "%)" ;

        if(totalprofitloss>0)
        { Object.assign(LP.style,Livestyles2);
         await sleep(100);
         Object.assign(LP.style,Livestyles0);
        }
        else{ Object.assign(LP.style,Livestyles1);
             await sleep(100);
             Object.assign(LP.style,Livestyles0);
            }
    }

    async function MrX(){

        totalinr=0;
        totalprofitloss=0;
        coinamtMap = new Map();
        coininrspendMap = new Map();
        flag=1;



        let star= document.getElementsByTagName("label");
        star[0].click();

        let starcoins= document.getElementsByClassName("ticker-item");

        let starcoincurrentprice= document.getElementsByClassName("price-text ticker-price");
        let result= "";
        let result0="";



        for( let j=0; j<starcoins.length; j++)
        {
            starcoins[j].click();

            await sleep(500);
            let p= document.getElementsByTagName('h6');

            p[8].click();
            await sleep(500);
            let s="";
            let flag=1;
            let coinamt=0;
            let sellcoinamt=0;
            let buycoinamtarray=[];
            let buycoinpricearray=[];
            let sellcoinamtarray=[];
            let sellcoinpricearray=[];
            let inramt=0;
            let currentprice =parseFloat(starcoincurrentprice[j].innerText.replace(/[,₹]/g, ''));
            let coinname="";
            // Your code here...
            let buyorderlist = document.getElementsByClassName("sc-bdVaJa sc-iuJeZd eVNcjS");

            if(buyorderlist.length>0){

                for( let i of buyorderlist){
                    /// console.log(i.innerText);
                    var myArray = i.innerText.split("\n");
                    ///console.log(myArray);
                    coinname=myArray[0];
                    //coinamt+= parseFloat(myArray[2].replace(/,/g, ''));
                    //inramt+= parseFloat(myArray[5].replace(/,/g, ''));

                    buycoinamtarray.push( parseFloat(myArray[2].replace(/,/g, '')) );
                    buycoinpricearray.push( parseFloat(myArray[4].replace(/,/g, '')) );

                }


                /*
                ----------if COIN is  Transfer from BINENCE to WAZIRX------------
                if(coinname =="USDT" )
                {
                    buycoinamtarray.push(141.85);
                    buycoinpricearray.push(78.030);
                }
                */


                /*
            let partialbuyorderlist = document.getElementsByClassName("sc-bdVaJa sc-iuJeZd eVNcjS");

            if(partialbuyorderlist.length>0){

                for( let i of partialbuyorderlist){
                    console.log(i.innerText);
                    var myArray = i.innerText.split("\n");
                    console.log(myArray);
                    coinname=myArray[0];
                    //coinamt+= parseFloat(myArray[2].replace(/,/g, ''));
                    //inramt+= parseFloat(myArray[5].replace(/,/g, ''));

                    buycoinamtarray.push( parseFloat(myArray[2].replace(/,/g, '')) );
                    buycoinpricearray.push( parseFloat(myArray[4].replace(/,/g, '')) );

                } */

                let sellorderlist = document.getElementsByClassName("sc-bdVaJa sc-iuJeZd blXZKS");


                for( let i of sellorderlist){
                    /// console.log(i.innerText);
                    var myArray2 = i.innerText.split("\n");
                    /// console.log(myArray2);
                    sellcoinamt+=parseFloat(myArray2[2].replace(/,/g, ''));
                    sellcoinamtarray.push( parseFloat(myArray2[2].replace(/,/g, '')) );
                    sellcoinpricearray.push( parseFloat(myArray2[4].replace(/,/g, '')) );

                }
                let partialsellorderlist = document.getElementsByClassName("sc-bdVaJa sc-iuJeZd fUgZaV");


                for( let i of partialsellorderlist){
                    ///  console.log(i.innerText);
                    var myArray4 = i.innerText.split("\n");
                    ///  console.log(myArray4);
                    sellcoinamt+=parseFloat(myArray4[2].replace(/,/g, ''));
                    sellcoinamtarray.push( parseFloat(myArray4[2].replace(/,/g, '')) );
                    sellcoinpricearray.push( parseFloat(myArray4[4].replace(/,/g, '')) );

                }

                //----------if COIN is  Transfer from WAZIRX to BINENCE ------------
               /* if(coinname =="USDT" )
                {
                    let x=800; //coin amount
                    sellcoinamtarray.push(x);
                    sellcoinpricearray.push(78.030);  //price
                    sellcoinamt+=x;
                }
                */

                ///  console.log(buycoinamtarray);
                ///   console.log(buycoinpricearray);
                ///  console.log(sellcoinamtarray);
                ///  console.log(sellcoinpricearray);
                let k = buycoinamtarray.length-1;
                while(sellcoinamt)
                {
                    if(buycoinamtarray[k]> sellcoinamt)
                    {
                        buycoinamtarray[k]-=sellcoinamt;
                        sellcoinamt=0;
                    }
                    else
                    {
                        sellcoinamt-=buycoinamtarray[k];
                        buycoinamtarray[k]=0;
                        k--;
                    }
                }
                if(buycoinamtarray[0]>0){
                    ///  console.log(buycoinamtarray);
                    while(k+1)
                    {
                        coinamt+=buycoinamtarray[k];
                        inramt+=buycoinamtarray[k]*buycoinpricearray[k];
                        k-=1;
                    }
                    coinamtMap.set(coinname,coinamt);

                    var sycns = document.getElementsByClassName("coin_select");
                    var temp=document.createElement("option");
                    temp.text= coinname;
                    var A=[parseFloat(coinamt),(inramt/coinamt).toFixed(5),currentprice,inramt];
                    temp.value= A;
                  //  console.log(temp);
                  //  console.log(sycns[0]);
                    sycns[0].add(temp);

                    coininrspendMap.set(coinname,inramt);
                    ///   console.log(coinamtMap.get(coinname));
                    result=result.concat("\n Total "+ coinname +" Coin : " + coinamt +
                                         ",   Total ₹ spend: " +inramt.toFixed(3) +
                                         ",   AVG price : " + (inramt/coinamt).toFixed(5) +
                                         ",   Current value: " + (coinamt*currentprice).toFixed(2) +
                                         ",   P/L : " + ( coinamt*currentprice - inramt).toFixed(2)+
                                         "("+ ( (coinamt*currentprice - inramt)*100/inramt ).toFixed(2) +"%)\n"
                                        );
                    totalinr +=inramt;
                    totalprofitloss += coinamt*currentprice - inramt;
                }
            }
        }
        result0 = " Total int :" + totalinr.toFixed(2) + ", Total profit/loss :" + totalprofitloss.toFixed(2) +"("+ (totalprofitloss*100/totalinr).toFixed(2) +"%)\n";
        //btn.title=result0.concat(result);
        data.innerText = result0.concat(result);
        //alert(result0.concat(result));


        liveprofitloss();



        liveloop();
    }
    btn.onclick =() => {
        var sycns = document.getElementsByClassName("coin_select");
        sycns[0].innerHTML=null;
        MrX();




    }
    btn2.onclick =() =>{
        // liveprofitloss();
        flag=changeflag(flag);
        liveloop();
    }



});