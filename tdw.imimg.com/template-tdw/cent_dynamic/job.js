var flagcookie=0;
var submit_flag_value=0;
var request_response_file="/cgi/autotdw.php";
var customElementNamesHash_jobfran='';
var apply_button_id='';
//------------Function to Hide Popup-------------------
// ------------job popup for----------------------------------
function show_jobform_popup(jobtypename,jobid){
	 apply_button_id="click-btn"+jobid;
	  $("#S_mobile_job").addClass("bdr2_p"); 
      $("#mobile-number_job").addClass("bdr2_p");
	document.getElementById(apply_button_id).style.display="none";
	document.getElementById('job_formpopup').style.display="block";
 	document.getElementById('close_formbtn').style.display="block";
	document.getElementById('job_heading_popup').style.display="block";
	document.getElementById('thankyou_form').style.display="none";
	document.getElementById('to').style.display="block";
	document.getElementById('form_blow').style.display="block";
	document.getElementById('html_job').style.overflow="hidden";
        document.getElementById('text_placeholder_desc').style.display="block";
        $("#S_mobile_job").removeClass("cn22_p");
	if(document.getElementById('job_Description_field').value == " " || document.getElementById('job_Description_field').value == ""){
	    document.getElementById('job_Description_field').value="Covering Letter";
	}
	hide_on_keypress();
	document.getElementById('job_type_name').value=jobtypename;
	document.form.reset();
	  if(flagcookie == 1){
		if(typeof cookieread =="function"){
		cookieread(); }
    }
    fill_cookies_jobfrn();
    $('#fullname_job').change(function(){

		var fullname_field = $(this).val().split(' ');
		$('#firstname_fran').val(fullname_field[0]);
		fullname_field.shift();
		if(fullname_field.join(' ')){

			$('#lastname_fran').val(fullname_field.join(' '));
		}else{
			$('#lastname_fran').val(" ");
		}
	});
	document.getElementById('fname_job_err').style.display="none";
	document.getElementById('mobile_err').style.display="none";
	document.getElementById('mail_job_err').style.display="none";
	document.getElementById('d1_job').style.display="none";
	$("#job_Description_field").removeClass("active_error_job");
	$("#fullname_job").removeClass("active_error_job");
	$("#S_email_job").removeClass("active_error_job");
	$("#redcolor").removeClass("active_error_job");
      if(getCartCookie("ImeshVisitor") == "")
	{sync_country_flag('+91','IN','India');
	}else{
	document.getElementById('txtCountry_sms1').value=getparamVal1(getCartCookie("ImeshVisitor"), "cn");
	}
};
//-------------------- attachment validations ---------------------------

var validFileExtensions1 = ["jpg", "jpeg", "bmp", "gif", "png" , "txt" , "doc" , "docx","pdf", "xls", "odt", "xlsx"];
function check_attachment_job_type(){
  var fup = document.getElementById('S_attachment_job');
  var fileName = fup.value;
  var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
  if(validFileExtensions1.indexOf(ext) != '-1' || ext == ""){
      document.getElementById('err_attach_job').style.display='none';
      return true;
    }else{
	    fup.value='';
	    document.getElementById('err_attach_job').style.display='block';
	    return false;
	}
};
// ---------company name validation---------------
function check_Company_focus(FieldName){
  if(FieldName.value == 'Enter your company name:' )
    {
      FieldName.value = '';
    }
  FieldName.className='bdr2_p bg10_p m41_p hi2_p icon3_p icon_datauri_new1 icon16_p validate req email_val';
};
function check_Company(){
 var org_idvalue=eval("document.form.S_organization.value");
 var orgid_cls=eval("document.form.S_organization.className");
 org_idvalue = org_idvalue.replace(/^\s+|\s+$/g,"");
 if(org_idvalue == ""){
    org_idvalue = "Enter your company name:";
    orgid_cls='bdr2_p bg10_p m41_p hi2_p icon3_p icon_datauri_new1 icon16_p validate req email_val c11_p';
  }
};
// ---------------------description valdiation starts--------------------------------------------------------
function check_Description_job(pagename){
  var desc_idvalue=eval("document.form.Description.value");
  desc_idvalue = desc_idvalue.replace(/^\s+|\s+$/g,"");
  if(desc_idvalue == ""){
      try
      {
	document.getElementById('text_placeholder_desc').style.display='block';
      }
      catch(e){ }
      document.getElementById('job_Description_field').className='clr7_p bdr2_p bg10_p h1_p w30_p fnt_p icon1_p icon_datauri icon2_p c11_p validate Desc_err';
      if(submit_flag_value == 1){
	$("#job_Description_field").addClass("active_error_job");
	document.getElementById('d1_job').style.display="block";
      if(pagename == "franchisee")
	{
	  document.getElementById('d1_job').innerHTML='Kindly Describe Your Business Information.';
	}
	else
	{
	  document.getElementById('d1_job').innerHTML='Kindly Describe Your Information.';
	}
      }
      return false;
    }
    else
    {
      document.getElementById('text_placeholder_desc').style.display='none';
      document.getElementById('job_Description_field').className='clr7_p bdr2_p bg10_p h1_p w30_p fnt_p icon1_p icon_datauri icon2_p  validate Desc_err';
      document.getElementById('d1_job').style.display="none";
    }
  return true;
};
//---------------email validation starts-----------------------------
function check_Email_focus_job(FieldName,event){
  if(FieldName.value == 'Enter your email:')
    {
      FieldName.value = '';
    }
  FieldName.className='bdr2_p bg10_p m41_p hi2_p icon3_p icon4_p validate req email_val';
  if(document.getElementById('mail_job_err').style.display == "block"){
  document.getElementById('mail_job_err').style.display="none";
  $("#S_email_job").removeClass("active_error_job");
  }
  if(event!=undefined && event.keyCode==13)
    {
      if(document.getElementById('Submit_job')){document.getElementById(submitbtn).focus();}
    }
};

function check_Email_job(){
  var mail_idvalue=eval("document.form.S_email.value");
  mail_idvalue1 = mail_idvalue.replace(/^\s+|\s+$/g,"");
  var x=mail_idvalue1;
  if (x==null || x=="")
  {
    document.getElementById('S_email_job').value="Enter your email:";
    document.getElementById('S_email_job').className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon4_p validate req email_val c11_p';
    if(submit_flag_value == 1){
    document.getElementById('mail_job_err').style.display="block";
    document.getElementById('mail_job_err').innerHTML='Please enter your email.';
    $("#S_email_job").addClass("active_error_job");
    }
    return false;
   }
    else if (!(/^[A-z0-9][_.A-z0-9-]+@[a-zA-Z0-9]+[\.\-\_]{0,1}[a-zA-Z0-9]+\.[a-zA-Z]{2,6}\.?[a-zA-Z]{0,4}$/.test(mail_idvalue1)))
      {
	document.getElementById('mail_job_err').style.display="block";
	if(mail_idvalue1 == "Enter your email:")
	  {
	    document.getElementById('S_email_job').className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon4_p validate req email_val c11_p  active_error_job';
	    document.getElementById('mail_job_err').innerHTML='Please enter your email.';
	    document.getElementById('S_email_job').value="Enter your email:";
	  }
	    else
	    {
	      document.getElementById('S_email_job').className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon4_p validate req email_val c11_p active_error_job';
	      document.getElementById('mail_job_err').innerHTML='Please enter valid email.';
	    }
	return false;
      }
	else
	  {
	    document.getElementById('mail_job_err').style.display="none";
	  }
  return true;
};
// -------------------------------mobile number validation starts----------------------------------------------
function check_Mobile_focus_sms_job(FieldName){
  if(FieldName.value == 'Enter your mobile:')
    {
      FieldName.value = '';
    }
  FieldName.className='bdr2_p bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p fnt_p';
  document.getElementById('mobile-number_job').className='cnty_isd bg10_p bdr2_p cn1_p validate_pop req_pop mobile_val_pop ';
  
  if(document.getElementById('mobile_err').style.display == "block"){
  document.getElementById('mobile_err').style.display="none";
  $("#redcolor").removeClass("active_error_job");
  }
};

function check_Mobile_sms_job(){
  var mobile_idvalue=eval("document.form.S_mobile.value");
  if(mobile_idvalue != "Enter your mobile:")
  {
  mobile_idvalue = mobile_idvalue.replace(/\s+/g,"");
  }
  mobile_idvalue = mobile_idvalue.replace(/^0+/, "");
  
  var mobile_valid_sms = document.getElementById('txtCountry1').value == "IN" ? (/^((?![2-5])[0-9]{10})$/.test(mobile_idvalue)): (/^[0-9]{1,30}$/.test(mobile_idvalue));
  
  if(mobile_idvalue == "Enter your mobile:")
    {
      document.getElementById('mobile_err').style.display="block";
      document.getElementById('mobile_err').innerHTML='Please enter your mobile number.';
      document.getElementById('S_mobile_job').className='mobile_valid_border_hide bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p  fnt_p  c11_p';
      document.getElementById('mobile-number_job').className='mobile_valid_border_hide cnty_isd bg10_p  cn1_p validate_pop req_pop mobile_val_pop  ';
      document.getElementById('redcolor').className="m41_p fl_p w1_p active_error_job";
      $("#S_mobile_job").removeClass("bdr2_p"); 
      $("#mobile-number_job").removeClass("bdr2_p");
      $("#S_mobile_job").addClass("cn22_p");
      return false;
    }
      else if(mobile_idvalue == "")
	  {
	      document.getElementById('S_mobile_job').value="Enter your mobile:";
	      document.getElementById('S_mobile_job').className='bdr2_p  bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p fnt_p  c11_p';
	      document.getElementById('mobile-number_job').className='bdr2_p  cnty_isd bg10_p cn1_p validate_pop req_pop mobile_val_pop  ';
	      document.getElementById('redcolor').className="m41_p fl_p w1_p";   
	      if(submit_flag_value == 1){
	      document.getElementById('mobile_err').style.display="block";
	      document.getElementById('mobile_err').innerHTML='Please enter your mobile number.';
	      $("#S_mobile_job").addClass("mobile_valid_border_hide"); 
	      $("#mobile-number_job").addClass("mobile_valid_border_hide");
	      $("#S_mobile_job").removeClass("bdr2_p"); 
	      $("#mobile-number_job").removeClass("bdr2_p");
	      $("#redcolor").addClass("active_error_job");
              $("#S_mobile_job").addClass("cn22_p");
	      }
	      return false;
	  }
	else if(!mobile_valid_sms)
	{
	  document.getElementById('mobile_err').style.display="block";
	  document.getElementById('mobile_err').innerHTML='Please enter valid mobile number.';
	  document.getElementById('S_mobile_job').className='mobile_valid_border_hide bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p c11_p  fnt_p  ';
	  document.getElementById('mobile-number_job').className='cnty_isd bg10_p mobile_valid_border_hide cn1_p validate_pop req_pop mobile_val_pop  ';
	  document.getElementById('redcolor').className="m41_p fl_p w1_p active_error_job";
	  $("#S_mobile_job").removeClass("bdr2_p"); 
	  $("#mobile-number_job").removeClass("bdr2_p");
          $("#S_mobile_job").addClass("cn22_p");
	  return false;
	}
// 	else if(mobile_idvalue.charAt(0) < 6 && document.getElementById('mobile-number_job').value == '+91'){
// 	  document.getElementById('mobile_err').style.display="block";
// 	  document.getElementById('mobile_err').innerHTML='Please enter valid mobile number.';
// 	  document.getElementById('S_mobile_job').className='mobile_valid_border_hide bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p c11_p fnt_p';
// 	  document.getElementById('mobile-number_job').className='cnty_isd bg10_p mobile_valid_border_hide cn1_p validate_pop req_pop mobile_val_pop  ';
// 	  document.getElementById('redcolor').className="m41_p fl_p w1_p active_error_job";
// 	  $("#S_mobile_job").removeClass("bdr2_p"); 
// 	  $("#mobile-number_job").removeClass("bdr2_p");
//           $("#S_mobile_job").addClass("cn22_p");
// 	  return false;
// 	  
// 	}
	  else
	  {
	    document.getElementById('mobile_err').style.display="none";
	    document.getElementById('S_mobile_job').className='bdr2_p bg10_p ft5_p validate_pop req_pop mobile_val_pop cn2_p fnt_p';
	    document.getElementById('mobile-number_job').className='cnty_isd bg10_p bdr2_p cn1_p validate_pop req_pop mobile_val_pop';
	    document.getElementById('redcolor').className="m41_p fl_p w1_p ";
	    $("#mobile-number_job").removeClass("c11_p");
	    $("#S_mobile_job").removeClass("mobile_valid_border_hide"); 
	    $("#mobile-number_job").removeClass("mobile_valid_border_hide");
	  }
  return true;
};
// ------------------full name validation --------------------

function check_Fullname_focus_job(FieldName) 
{
  if(FieldName.value == 'Enter your name:')
    {
      FieldName.value = '';
      FieldName.className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon5_p validate chars';
    }
  if(document.getElementById('fname_job_err').style.display == "block"){
  document.getElementById('fname_job_err').style.display="none";
  $("#fullname_job").removeClass("active_error_job");
  }
};

function check_Fullname_job()
{
 var jobempname=eval("document.form.fullname.value");
 jobempname = jobempname.replace(/^\s+|\s+$/g,"");
 if(jobempname == "" || jobempname == "Enter your name:")
  {
    document.getElementById('fullname_job').value="Enter your name:";
    if($('#form').css('display') !="none")
      {
	document.getElementById('fullname_job').className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon5_p validate chars c11_p';
	if(submit_flag_value == 1){
	document.getElementById('fname_job_err').style.display="block";
	document.getElementById('fname_job_err').innerHTML='Please enter your name.';
	$("#fullname_job").addClass("active_error_job");
      }
      }
     
    return false;
  }
  else if(!(/^[A-z][A-z. ]{0,42}$/.test(jobempname)))
  {
    if($('#form').css('display') !="none")
      {
	document.getElementById('fname_job_err').style.display="block";
	document.getElementById('fname_job_err').innerHTML='Please enter valid name.';
	document.getElementById('fullname_job').className='bdr2_p bg10_p m41_p hi2_p icon3_p  icon5_p validate chars c11_p active_error_job';
      }
    return false;
  }
    else
    {
    document.getElementById('fname_job_err').style.display="none";
    $("#fullname_job").removeClass("active_error_job c11_p");
    }
 return true;
};
//onsubmit validations
function validate_submit_button(pagename)
{
  var enq_sent='';
  submit_flag_value=1;
  customElementNamesHash_jobfran = new im_elementHash("S_name","S_name","S_lname","S_lname","S_email","S_email","S_cmobile","S_cmobile","S_phone_country_code","S_phone_country_code","S_organization","S_organization","S_country","S_country","country","country_iso","S_mobile","S_mobile","S_fullname","fullname","S_glusr_id","S_glusr_id");

  var jobempname=eval("document.form.fullname.value");
  var jbmobile_idvalue=eval("document.form.S_mobile.value");
  var jbmail_idvalue=eval("document.form.S_email.value");
  var jobdis=eval("document.form.Description.value");
  if (document.getElementById('text_placeholder_desc').style.display == 'block'){
	  jobdis="";
  }
  if (jbmobile_idvalue == "Enter your mobile:"){
	  jbmobile_idvalue="";
  }
  if (jbmail_idvalue == "Enter your email:"){
	  jbmail_idvalue="";
	  
  }
  if (jobempname == "Enter your name:"){
	  jobempname="";
  }
  var jobname=check_Fullname_job();
  var jobmobile=check_Mobile_sms_job();
  var email=check_Email_job();
  var descvalue=check_Description_job(pagename);
  if(jobname && jobmobile && email && descvalue) {
	}else{ 
	      if(jobname == false)
	      {
		$('#fullname_job').trigger('focus');
		return false;
	      }
	      if(jobmobile == false)
	      {
		$('#S_mobile_job').trigger('focus');
		return false;
	      }
	      if(email == false)
	      {
		$('#S_email_job').trigger('focus');
		return false;
	      }
	      if(descvalue == false)
	      {
		$('#job_Description_field').trigger('focus');
		document.getElementById('text_placeholder_desc').style.display = 'none';
		return false;
	      }
	      submit_flag_value=0;
	      return false;
	    }
    $(".enqload").html("<img src='https://tdw.imimg.com/template-tdw/loading.gif' alt='Please wait'>");
    $.ajax({
      type: "POST",
      url: request_response_file,
      data:new FormData($("#myForm")[0]), 
      contentType: false,
      processData: false,
      cache: false,
      success: function(data) {
	enq_sent=data;
         if(data == "enter"){
	      document.getElementById('form_blow1').style.display="block";
	      document.getElementById('close_formbtn').style.display="none";
	      document.getElementById('to').style.display="none";
	      document.getElementById('job_formpopup').style.display="none";
	      document.getElementById('job_heading_popup').style.display="none";
	      document.getElementById('html_job').style.overflow="hidden";
	      document.getElementById('form_blow').style.display="none";
	      document.getElementById('thankyou_form').style.display="block";
	      $(".enqload").html("");
	}
	else{
	      document.getElementById('close_formbtn').style.display="none";
	      document.getElementById('to').style.display="none";
	      document.getElementById('job_formpopup').style.display="none";
	      document.getElementById('job_heading_popup').style.display="none";
	      document.getElementById(apply_button_id).style.display="block";
	      document.getElementById('form_blow').style.display="none"; 
	      document.getElementById('html_job').style.overflow="auto";
	      document.getElementById('form_blow1').style.display="none";
	      document.getElementById('thankyou_form').style.display="none"; 
	      $(".enqload").html("");
	}
      },
      error: function(){
			document.getElementById('close_formbtn').style.display="none";
			document.getElementById('to').style.display="none";
			document.getElementById('job_formpopup').style.display="none";
			document.getElementById('job_heading_popup').style.display="none";
			document.getElementById(apply_button_id).style.display="block";
			document.getElementById('form_blow').style.display="none"; 
			document.getElementById('html_job').style.overflow="auto";
			document.getElementById('form_blow1').style.display="none";
			document.getElementById('thankyou_form').style.display="none"; 
		    }
    });
  
    
setTimeout(function(){
	  document.getElementById('thankyou_form').style.display="none";   
	 document.getElementById('form_blow').style.display="none"; 
	 document.getElementById('html_job').style.overflow="auto";
	 document.getElementById('form_blow1').style.display="none";
	  if(enq_sent != "enter"){
	    document.getElementById(apply_button_id).style.display="block";
	  }
	 
},5000);
    submit_flag_value=0;
    document.getElementById('thankyou_form').style.display="none"; 
      return true;
    
    
//   document.getElementById('click-btn').style.display="none";
    
  
};


// ----------------------validation function for all input fields ends--------------------------------------------------

// -----------------on click of submit check data validations--------------------------------
// var email_check = false;
// 
// var trySubmit = 0;
// function checkdatafetch_job(ele){
// 	if((!email_check)){
// 		trySubmit = 0;
// 		return	validate_submit_button(ele);
// 	}else if(trySubmit < 4){
// 		setTimeout(function(){	$(ele).submit(); },200);
// 		trySubmit++;
// 		return false;
// 	}else{
// 		return false;
// 	}
// }

// -----------------hide popup when clicked on cross button----------------------
function hide_jobform_popup()
{
  document.getElementById('job_formpopup').style.display="none";
  document.getElementById('close_formbtn').style.display="none";
  document.getElementById('to').style.display="none";
  document.getElementById('form_blow').style.display="none";
  document.getElementById('html_job').style.overflow="auto";
  document.getElementById(apply_button_id).style.display="block";
}
function hide_on_keypress(){
  window.onkeyup = function (event){
				    if(event.keyCode == 27)
				      {
					document.getElementById('job_formpopup').style.display="none";
					document.getElementById('close_formbtn').style.display="none";
					document.getElementById('to').style.display="none";
					document.getElementById('form_blow').style.display="none";
					document.getElementById('html_job').style.overflow="auto";
					document.getElementById(apply_button_id).style.display="block";
				      }
				  };
  
};

function fill_cookies_jobfrn(){
  customElementNamesHash_jobfran = new im_elementHash("S_name","S_name","S_lname","S_lname","S_email","S_email","S_cmobile","S_cmobile","S_phone_country_code","S_phone_country_code","S_organization","S_organization_id","S_country","S_country","country","country_iso","S_mobile","S_mobile","S_fullname","fullname","S_glusr_id","S_glusr_id");
  
	if(typeof im_getCookieValues=="function"){
	   
		im_getCookieValues('form',customElementNamesHash_jobfran);
		if((cookie1 = getCartCookie("ImeshVisitor")) > ""){
		  
			if(getparamVal1(cookie1, "em") != ""){  $('#S_email_job').removeClass('c11_p');
			}else{
				$('#S_email_job').val('Enter your email:');
				$('#S_email_job').show();
			}
			if(getparamVal1(cookie1, "fn").trim() != "" || getparamVal1(cookie1, "ln").trim() != ""){  $('#fullname_job').removeClass('c11_p');
			}else{
				$('#fullname_job').val('Enter your name:');
				$('#fullname_job').show();
			}
			if(getparamVal1(cookie1, "mb1") != ""){ $('#S_mobile_job').removeClass('c11_p'); }
			else
                       document.getElementById('S_mobile_job').value="Enter your mobile:";
   
			if(getparamVal1(cookie1, "co") != ""){  $('#S_company_fan').removeClass('c11_p');
			}else{ $('#S_company_fan').val('Enter your company name:'); }
			if(getparamVal1(cookie1, "phcc") != "" && getparamVal1(cookie1, "iso")){
			
				setTimeout(function(){
                                        var pccodee =getparamVal1(cookie1, "phcc");   
					var countryiso_lower = getparamVal1(cookie1, "iso");
					var country_name = $('.country-list').find('li[data-country-code='+countryiso_lower+'_ctry]').find('span').html();
					sync_country_flag(pccodee,countryiso_lower,country_name);
				},2000);
			}
			
		}
	}
};
setTimeout(function(){
$('#form').submit(function(event) {
    event.preventDefault(); // disable default submit behaviour of the browser
    $.post($(this).attr('action'), $(this).serialize()); // handle the post via ajax
});
},2000);
