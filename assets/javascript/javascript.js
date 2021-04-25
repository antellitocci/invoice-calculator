
// Calculate Fee based on user selection
function feecalc()
{
    //Declare variables and get from web page
    //(for the input fields it is better to grab them inside the function because default value will be null and will stay that way if listed as a global variable)
    var currentFee = document.getElementById("current-fee"); //Check status of current fee radio button
    var newFee = document.getElementById("new-fee"); //Check status of current fee radio button
    var grossNW = document.getElementById("client-gnw").value; //Get input value of gross net worth if Business Interest Discount is selected
    var billableNW = document.getElementById("client-bnw").value; //Get input value of billable net worth
    var discConcPos = document.getElementById("disc-conc-pos"); //Check status of concentrated position discount radio button
    var discBizInt = document.getElementById("disc-biz-int"); //Check status of business interest discount radio button
    var discFamily = document.getElementById("disc-family"); //Check status of family discount radio button
    var discTrans = document.getElementById("disc-transition"); //Check status of transition discount radio button

    //Calculated Values
    var grossFeeTemp = 0;
    var netFeeTemp = 0;
    var grossFeeQtr = 0;
    var netFeeQtr = 0;
    var discountQtr = 0;
    var grossFeeQtrTemp = 0;
    var netFeeQtrTemp = 0;
    var discountQtrTemp = 0;

    if (discConcPos.checked) //current fee & concentrated position discount (33%)
    {
        {
            if(currentFee.checked)
            {
                if (billableNW >= 12000000)
                {		
                    grossFeeTemp = 36000 + (billableNW - 12000000 ) * 0.001;		
                }
                else if (billableNW >= 6000000 && billableNW < 12000000)
                {		
                    grossFeeTemp = 24000 + ( billableNW - 6000000) * 0.002;		
                }
                else if (billableNW >= 1500000 && billableNW < 6000000)
                {		
                    grossFeeTemp = billableNW * 0.004;		
                }
                else
                {		
                    grossFeeTemp = 6000;	
                }
            }
            else if (newFee.checked)
            {
                if (billableNW >=30000000)
                {
                    grossFeeTemp = (60000 + (billableNW - 30000000) * 0.002);
                }
                else if (billableNW > 14500000 && billableNW < 30000000)
                {   		
                    grossFeeTemp = 45000 + ((billableNW - 12000000 ) * 0.001);		
                }
                else if (billableNW >= 7500000 && billableNW < 14500000)
                {		
                    grossFeeTemp = 30000 + (( billableNW - 6000000) * 0.002);		
                }
                else if (billableNW >= 1875000 && billableNW < 7500000)
                {		
                    grossFeeTemp = (billableNW * 0.004);		
                }
                else
                {		
                    grossFeeTemp = 7500;		
                }
            }
            grossFeeQtrTemp = grossFeeTemp / 4;
            discountQtrTemp = (grossFeeTemp * (-1/3)) / 4;
            netFeeQtrTemp = grossFeeQtrTemp + discountQtrTemp; 
        }
    }
    else if (discBizInt.checked) //only instance where we need to use gross net worth & net fee
    {
        {
            if(currentFee.checked)
            {
                if (billableNW >= 12000000)
                {		
                    netFeeTemp = 36000 + (billableNW - 12000000 ) * 0.001;		
                }
                else if (billableNW >= 6000000 && billableNW < 12000000)
                {		
                    netFeeTemp = 24000 + ( billableNW - 6000000) * 0.002;		
                }
                else if (billableNW >= 1500000 && billableNW < 6000000)
                {		
                    netFeeTemp = billableNW * 0.004;		
                }
                else
                {		
                    netFeeTemp = 6000;	
                }

                if (grossNW >= 12000000)
                {		
                    grossFeeTemp = 36000 + (grossNW - 12000000 ) * 0.001;		
                }
                else if (grossNW >= 6000000 && grossNW < 12000000)
                {		
                    grossFeeTemp = 24000 + ( grossNW - 6000000) * 0.002;		
                }
                else if (grossNW >= 1500000 && grossNW < 6000000)
                {		
                    grossFeeTemp = grossNW * 0.004;		
                }
                else
                {		
                    grossFeeTemp = 6000;	
                }
            }
            else if (newFee.checked)
            {
                if (billableNW >=30000000)
                {
                    netFeeTemp = (60000 + (billableNW - 30000000) * 0.002);
                }
                else if (billableNW > 14500000 && billableNW < 30000000)
                {   		
                    netFeeTemp = 45000 + ((billableNW - 12000000 ) * 0.001);		
                }
                else if (billableNW >= 7500000 && billableNW < 14500000)
                {		
                    netFeeTemp = 30000 + (( billableNW - 6000000) * 0.002);		
                }
                else if (billableNW >= 1875000 && billableNW < 7500000)
                {		
                    netFeeTemp = (billableNW * 0.004);		
                }
                else
                {		
                    netFeeTemp = 7500;		
                }

                if (grossNW >=30000000)
                {
                    grossFeeTemp = (60000 + (grossNW - 30000000) * 0.002);
                }
                else if (grossNW > 14500000 && grossNW < 30000000)
                {   		
                    grossFeeTemp = 45000 + ((grossNW - 12000000 ) * 0.001);		
                }
                else if (grossNW >= 7500000 && grossNW < 14500000)
                {		
                    grossFeeTemp = 30000 + (( grossNW - 6000000) * 0.002);		
                }
                else if (grossNW >= 1875000 && grossNW < 7500000)
                {		
                    grossFeeTemp = (grossNW * 0.004);		
                }
                else
                {		
                    grossFeeTemp = 7500;		
                }
            }
            grossFeeQtrTemp = grossFeeTemp / 4;
            discountQtrTemp = (netFeeTemp - grossFeeTemp) / 4;
            netFeeQtrTemp = grossFeeQtrTemp + discountQtrTemp;
            console.log(discountQtrTemp);
             
        }
    }
    else if (discFamily.checked) //Friends and family discount (30%)
    {
        {
            if(currentFee.checked)
            {
                if (billableNW >= 12000000)
                {		
                    grossFeeTemp = 36000 + (billableNW - 12000000 ) * 0.001;		
                }
                else if (billableNW >= 6000000 && billableNW < 12000000)
                {		
                    grossFeeTemp = 24000 + ( billableNW - 6000000) * 0.002;		
                }
                else if (billableNW >= 1500000 && billableNW < 6000000)
                {		
                    grossFeeTemp = billableNW * 0.004;		
                }
                else
                {		
                    grossFeeTemp = 6000;	
                }
            }
            else if (newFee.checked)
            {
                if (billableNW >=30000000)
                {
                    grossFeeTemp = (60000 + (billableNW - 30000000) * 0.002);
                }
                else if (billableNW > 14500000 && billableNW < 30000000)
                {   		
                    grossFeeTemp = 45000 + ((billableNW - 12000000 ) * 0.001);		
                }
                else if (billableNW >= 7500000 && billableNW < 14500000)
                {		
                    grossFeeTemp = 30000 + (( billableNW - 6000000) * 0.002);		
                }
                else if (billableNW >= 1875000 && billableNW < 7500000)
                {		
                    grossFeeTemp = (billableNW * 0.004);		
                }
                else
                {		
                    grossFeeTemp = 7500;		
                }
            }
            grossFeeQtrTemp = grossFeeTemp / 4;
            discountQtrTemp = (grossFeeTemp * (-0.3)) / 4;
            netFeeQtrTemp = grossFeeQtrTemp + discountQtrTemp;
        }
    }
    else if (discTrans.checked) //Transition discount (30%)
    {
        {
            if(currentFee.checked)
            {
                if (billableNW >= 12000000)
                {		
                    grossFeeTemp = 36000 + (billableNW - 12000000 ) * 0.001;		
                }
                else if (billableNW >= 6000000 && billableNW < 12000000)
                {		
                    grossFeeTemp = 24000 + ( billableNW - 6000000) * 0.002;		
                }
                else if (billableNW >= 1500000 && billableNW < 6000000)
                {		
                    grossFeeTemp = billableNW * 0.004;		
                }
                else
                {		
                    grossFeeTemp = 6000;	
                }
            }
            else if (newFee.checked)
            {
                if (billableNW >=30000000)
                {
                    grossFeeTemp = (60000 + (billableNW - 30000000) * 0.002);
                }
                else if (billableNW > 14500000 && billableNW < 30000000)
                {   		
                    grossFeeTemp = 45000 + ((billableNW - 12000000 ) * 0.001);		
                }
                else if (billableNW >= 7500000 && billableNW < 14500000)
                {		
                    grossFeeTemp = 30000 + (( billableNW - 6000000) * 0.002);		
                }
                else if (billableNW >= 1875000 && billableNW < 7500000)
                {		
                    grossFeeTemp = (billableNW * 0.004);		
                }
                else
                {		
                    grossFeeTemp = 7500;		
                }
            }
            grossFeeQtrTemp = grossFeeTemp / 4;
            discountQtrTemp = (grossFeeTemp * (-0.3)) / 4;
            netFeeQtrTemp = grossFeeQtrTemp + discountQtrTemp;
        }
    }
    //No discounts selected
    else
    {
        if(currentFee.checked)
        {
            if (billableNW >= 12000000)
            {		
                grossFeeTemp = 36000 + (billableNW - 12000000 ) * 0.001;		
            }
            else if (billableNW >= 6000000 && billableNW < 12000000)
            {		
                grossFeeTemp = 24000 + ( billableNW - 6000000) * 0.002;		
            }
            else if (billableNW >= 1500000 && billableNW < 6000000)
            {		
                grossFeeTemp = billableNW * 0.004;		
            }
            else
            {		
                grossFeeTemp = 6000;	
            }    
        }
        else if(newFee.checked)
        {
            if (billableNW >=30000000)
            {
                grossFeeTemp = (60000 + (billableNW - 30000000) * 0.002);
            }
            else if (billableNW > 14500000 && billableNW < 30000000)
            {   		
                grossFeeTemp = 45000 + ((billableNW - 12000000 ) * 0.001);		
            }
            else if (billableNW >= 7500000 && billableNW < 14500000)
            {		
                grossFeeTemp = 30000 + (( billableNW - 6000000) * 0.002);		
            }
            else if (billableNW >= 1875000 && billableNW < 7500000)
            {		
                grossFeeTemp = (billableNW * 0.004);		
            }
            else
            {		
                grossFeeTemp = 7500;		
            }
        }

        grossFeeQtrTemp = 0;
        discountQtrTemp = 0;
        netFeeQtrTemp = grossFeeTemp / 4;
    }
    //Minimum fee check
    if (currentFee.checked && netFeeQtrTemp <= 1500)
    {
        netFeeQtr = 1500;
        grossFeeQtr = grossFeeQtrTemp;
        discountQtr = discountQtrTemp + netFeeQtr;
    }
    else if (newFee.checked && netFeeQtrTemp <= 1750)
    {
        netFeeQtr = 1750;
        grossFeeQtr = grossFeeQtrTemp;
        discountQtr = discountQtrTemp + netFeeQtr;
    }
    else
    {
        grossFeeQtr = grossFeeQtrTemp;
        discountQtr = discountQtrTemp;
        netFeeQtr = netFeeQtrTemp;
    }

    //final assignments
    document.getElementById("gross-quarterly-fee").value = grossFeeQtr.toFixed(2);
    document.getElementById("discount").value = discountQtr.toFixed(2);
    document.getElementById("net-quarterly-fee").value = netFeeQtr.toFixed(2);
    calculateQuantity(); 
}

function calculateQuantity()
{
    var today = new Date(document.getElementById("client-start-date").value);
    var month = today.getMonth() + 1;
    var qtrMonth = (month <= 3) ? 3 : (month <= 6) ? 6 : (month <= 9) ? 9 : 12;
    var qtrLastDay = (qtrMonth == 3 || qtrMonth == 12) ? 31 : 30;
    var qtrDate = new Date(Date.parse(qtrMonth + "/" + qtrLastDay + "/" + today.getFullYear()));

    //get the difference between the 2 dates in milliseconds
    var dateDiff = qtrDate.getTime() - today.getTime();
    
    //convert the dateDiff to days and round up to the nearest day (rounding up ensures that the time that has elapsed in the current day is still counted)
    dateDiff = Math.round(Math.ceil(dateDiff / 1000 / 60 / 60 / 24)/91*100)/100
    //check if dateDiff is today and set the value to 1 (the date diff would round down to 0 otherwise)
    if (dateDiff <=0)
    {
        dateDiff =1;
    }
    else
    {
        dateDiff = dateDiff;
    }

    //display invoice quantity
    document.getElementById("invoice-quantity").value = dateDiff;
}

function showHiddenInputBoxes()
{
    // find optional checkbox and the corresponding radio buttons
    var optionalCheck = document.getElementById("opt-checkbox");
    var optionalElements = document.querySelectorAll('.enable-disable');
    
    //if the optional checkbox is checked. Display the optional fields.
    if(optionalCheck.checked)
    {
        for (var i = 0; i < optionalElements.length; i++)
        {
            optionalElements[i].style.display = "flex";
        }
    }
    //If the optional checkbox is unchecked, hide the optional fields and uncheck radio selections.
    else
    {
        //uncheck radio boxes. Better way?
        document.getElementById('disc-conc-pos').checked = false;
        document.getElementById('disc-biz-int').checked = false;
        document.getElementById('disc-family').checked = false;
        document.getElementById('disc-transition').checked = false;
        
        //Run the showGrossNW(); to remove GNW box when optional elements go away.
        showGrossNW();

        for (var i = 0; i < optionalElements.length; i++)
        {
            optionalElements[i].style.display = "none";
        }
    }
}

function showGrossNW()
{
    //find the business interest discount radio and its linked gross net worth elements
    var bizIntCheck = document.getElementById("disc-biz-int");
    var optionalGrossNW = document.querySelectorAll(".enable-disable-gnw");

    //If the business interest discount radio is selected, ask for client's gross net worth.
    if(bizIntCheck.checked)
    {
        for (var i=0; i < optionalGrossNW.length; i++)
        {
            optionalGrossNW[i].style.display = "flex";
        }
    }
    //If not selected, hide the gross net worth input box.
    else
    {
        for (var i=0; i < optionalGrossNW.length; i++)
        {
            optionalGrossNW[i].style.display = "none";
        }
    }
}

function clearForms()
{
    //variable declarations
    var x, y, type = null;
    
    //Loop through forms on the page
    for (x=0; x<document.forms.length; x++)
    {
        // loop through each element on form
        for (y=0; y < document.forms[x].elements.length; y++)
        {
            //define the element type
            type = document.forms[x].elements[y].type;

            //switch on element type
            switch(type)
            {
                case 'text':
                case 'date':
                case 'number':
                    document.forms[x].elements[y].value = '';
                    break;
                case 'radio':
                    document.forms[x].elements[y].checked = false;
                    showGrossNW();
                    break;
                case 'checkbox':
                    document.forms[x].elements[y].checked = false;
                    showHiddenInputBoxes();
                    break;
            } // end switch
        } //end for y
    } //end for x
}
