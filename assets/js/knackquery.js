var appid="551865de0a7684f9444ffc25";
var apikey="4b2e3b10-d8c7-11e4-9cb0-593b338c1498";

var UserRole_Object = "object_14";
var Artists_Object = "object_15";

var FOOT_OBJECT = "object_1";
var FOOT_EXHIB_ID_FIELD = "field_14";
var FOOT_DATE = "field_3";
var FOOT_TRAFFIC = "field_2";

var EXHIB_OBJECT = "object_3";
var EXHIB_ID_FIELD = "field_9";
var EXHIB_STDATE_FIELD = "field_10";
var EXHIB_EDDATE_FIELD = "field_11";
var EXHIB_DESC_FIELD = "field_12";
var EXHIB_ARTISTS_FIELD = "field_125";
var EXHIB_WORKS_FIELD = "field_115";

var CUST_OBJECT = "object_4";
var CUST_ID_FIELD = "field_16";
var CUST_NAME_FIELD = "field_18";
var CUST_Phone_FIELD = "field_19";
var CUST_ADDR_FIELD = "field_20";
var CUST_EMAIL_FIELD = "field_21";

var FDBK_OBJECT = "object_6";
var FDBK_ID_FIELD = "field_24";
var FDBK_CUST_ID_FIELD = "field_25";
var FDBK_DATE_FIELD = "field_26";
var FDBK_FBDATE_FIELD = "field_27";
var FDBK_FBDESC_FIELD = "field_58";

var GTAD_OBJECT = "object_7";
var GTAD_CUST_ID_FIELD = "field_29";
var GTAD_EXHIB_ID_FIELD = "field_30";
var GTAD_ATDDATE_FIELD = "field_31";

var ARTIST_OBJECT = "object_8";
var ARTIST_ID_FIELD = "field_33";
var ARTIST_NAME_FIELD = "field_34";
var ARTIST_ADDR_FIELD = "field_35";
var ARTIST_PHONE_FIELD = "field_36";
var ARTIST_DESC_FIELD = "field_37";
var ARITST_EMAIL_FIELD = "field_38";
var ARTIST_EXHIB_ID_FIELD = "field_118";

var WORK_OBJECT = "object_9";
var WORK_ID_FIELD = "field_40";
var WORK_ARTIST_ID_FIELD = "field_112";
var WORK_NAME_FIELD = "field_42";
var WORK_MATERIAL_FIELD = "field_43";
var WORK_TYPE_FIELD = "field_44";
var WORK_PRICE_FIELD = "field_45";
var WORK_DESC_FIELD = "field_46";
var WORK_EXHIB_FIELD = "field_113";

var SALE_OBJECT = "object_10";
var SALE_CUST_ID_FIELD = "field_48";
var SALE_EXHIB_ID_FIELD = "field_49";
var SALE_WORK_ID_FIELD = "field_50";
var SALE_PRICE_FIELD = "field_51";
var SALE_DATE_FIELD = "field_111";

function query_all_artist(){
	$.ajax({
			url: "https://api.knackhq.com/v1/objects/"+ARTIST_OBJECT+"/records",
			type: "GET",
			dataType: "json",
			headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			
			var artistList="";
			for(i = 0; i < data.total_records; i++){
				artistList += data.records[i].field_34 + "<br />";
			}

			$("#show-tab").html(artistList);
		}
	});
}

function query_all_works(){
	$.ajax({
			url: "https://api.knackhq.com/v1/objects/"+WORK_OBJECT+"/records",
			type: "GET",
			dataType: "json",
			headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			
			for (var i = data.total_records - 1; i >= 0; i--) {
				console.log(data.records[i]);
			};
			
			/*var workList="";
			for(i = 0; i < data.total_records; i++){
				artistList += data.records[i].field_34 + ", ";
			}

			$("#show-tab").html(workList);*/
		}
	});

}

function query_all_exhibits(){
	$.ajax({
			url: "https://api.knackhq.com/v1/objects/"+EXHIBIT_OBJECT+"/records",
			type: "GET",
			dataType: "json",
			headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			
			console.log(data);
			/*var workList="";
			for(i = 0; i < data.total_records; i++){
				artistList += data.records[i].field_34 + ", ";
			}

			$("#show-tab").html(workList);*/
		}
	});

}

function query_all_users(){
	$.ajax({
			url: "https://api.knackhq.com/v1/objects/"+UserRole_Object+"/records",
			type: "GET",
			dataType: "json",
			headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			
			for (var i = data.total_records - 1; i >= 0; i--) {
				console.log(data.records[i]);
			};
			

			$("#show-tab").html("All Users Queried");
		}
	});
}

function query_all_artists(){
	$.ajax({
			url: "https://api.knackhq.com/v1/objects/"+Artists_Object+"/records",
			type: "GET",
			dataType: "json",
			headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			
			for (var i = data.total_records - 1; i >= 0; i--) {
				console.log(data.records[i]);
			};
			

			$("#show-tab").html("All Users Queried");
		}
	});
}

function query_for_user_1(){
	var userid="";
	$.ajax({
		url: "https://api.knackhq.com/v1/objects/"+Artists_Object+"/records",
		type: "GET",
		dataType: "JSON",
		headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			localStorage["userid"]=data.records[0].field_112;
		}
	});

	userid = localStorage["userid"];
	query_for_artist_works(userid);
}

function query_for_artist_works(user_id){
	var filters = [
		{
			field: WORK_ARTIST_ID_FIELD,
			operator: "is",
			value: user_id
		}
	];
	var param = encodeURIComponent(JSON.stringify(filters));

	$.ajax(
		url: "https://api.knackhq.com/v1/objects/" + WORK_OBJECT + "/records?filters=" + param,
		type: "GET",
		dataType: "JSON",
		headers: {
				'X-Knack-Application-Id': appid,
				'X-Knack-REST-API-Key': apikey
		},
		success: function(data){
			console.log(data);
		}
	);
}


$(document).ready(function(){

		$("#artist").click(query_all_artist);
		$("#works").click(query_all_works);
		$("#exhibitions").click(query_all_exhibits);
		$("#alluser").click(query_all_users);
		$("#allart").click(query_all_artists);
		$("#art1").click(query_for_user_1);
});





