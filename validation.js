/*isAlphabets  validation*/

function isAlphabet(obj,minv, alt)		/*parameters passing */
	{
		var ChExp = /^[a-zA-Z]+$/;		/*Regular Expresion */
		var obj_len = obj.value.length; 
		if(obj.value.match(ChExp) && obj_len>=minv)			/* check the conditons */
			{
				return true;
			}
			else{
					alert(alt);
					obj.focus();
					return false;
				}
	}


/*isAlphanumaric validation*/

function isAlphaNumaric(obj, minv, alt)		/*parameters passing */
	{
		var anExp = /^[0-9a-zA-Z]+$/;		/*Regular Expresion */
		var obj_len = obj.value.length; 
		if(obj.value.match(anExp)  && obj_len>=minv)	/* check the conditons */
			{
				return true;
			}
			else{
					alert(alt);
					obj.focus();
					return false;
				}
	}


/*phone field validation*/

function isPhone(obj,minv, alt)			/*parameters passing */
	{
		var phone_regex = /^(?:\+?91[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;		/*Regular Expresion */
		var obj_len = obj.value.length;
		
		if(obj.value.match(phone_regex)&& obj_len>=minv)		/* check the conditons */
		{
			return true;
		}
		else{
				alert(alt);
				obj.focus();
				return false;
			}
	}

/*  checks the validity of an email address entered 
*   returns true or false 
*/

function validateEmail(email)
{
    var splitted = email.match("^(.+)@(.+)$");
    if (splitted == null) return false;
    if (splitted[1] != null)
    {
        var regexp_user = /^\"?[\w-_\.]*\"?$/;
        if (splitted[1].match(regexp_user) == null) return false;
    }
    if (splitted[2] != null)
    {
        var regexp_domain = /^[\w-\.]*\.[A-Za-z]{2,4}$/;
        if (splitted[2].match(regexp_domain) == null)
        {
            var regexp_ip = /^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
            if (splitted[2].match(regexp_ip) == null) return false;
        } // if
        return true;
    }
    return false;
}


/*Validation for  is selected or not*/

function IsCheckSelected(objValue, chkValue)
{
    var selected = false;
    var objcheck = objValue.form.elements[objValue.name];
    if (objcheck.length)
    {
        var idxchk = -1;
        for (var c = 0; c < objcheck.length; c++)
        {
            if (objcheck[c].value == chkValue)
            {
                idxchk = c;
                break;
            } //if
        } //for
        if (idxchk >= 0)
        {
            if (objcheck[idxchk].checked == "1")
            {
                selected = true;
            }
        } //if
    }
    else
    {
        if (objValue.checked == "1")
        {
            selected = true;
        } //if
    } //else  
    return selected;
}


/*File upload validation*/

function isfile(obj,alt)		/*parameters passing */
{
	var val=obj.value;
	if(val.match(".jpg")|| val.match(".gif") || val.match(".png") )	/* check the File type */
	{
		return true;
	}
	else{
		alert(alt);
		obj.focus();
		return false;
	}
}


/*DOB validation*/

function Datevalid(obj)  		/*parameters passing */
	{  
		if ( obj.selectedIndex == 0 )		/* check the conditons */
			{
				alert ( "Please select your Date." );
				return false;
			} 
		else{
				return true;
			}

	}  





/*Checkbox validation*/

function multiselection(obj)  		/*parameters passing */
	{  
		if ( (h1.checked == false ) && (h2.checked == false ) && (h3.checked == false ) && (h4.checked == false ) && (h5.checked == false ) && (h6.checked == false ))	/* check the conditons */
			{
				alert ( "Please choose your Hobbies:" );
				return false;
			} 
		else{
				return true;
			}
	}
