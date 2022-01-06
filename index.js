
/* toggle menu view */
var navMenu = document.getElementById("navContainer");
var menuToggle = document.getElementById("menuToggleContainer");
var toggleImg = document.getElementById("menuToggle");
var toggleView = document.getElementById("toggleView");
var toggleClose = document.getElementById("toggleClose");
var rotateConstMenu = 0;
var menuIconOpen = document.getElementById("menuIconOpen");
var menuIconClose = document.getElementById("menuIconClose");

function menuOpen() {
	navMenu.style.display = "block";
	menuIconOpen.style.display = "none";
	menuIconClose.style.display = "block";
}

function menuClose() {
	navMenu.style.display = "none";
	menuIconOpen.style.display = "block";
	menuIconClose.style.display = "none";
}

function menuDisplayChange() {
	if (navMenu.style.display == "none"){
		menuOpen();	
	}
	else {
		menuClose();		
	}
}

navMenu.style.display = "none";

menuToggle.addEventListener("click", menuDisplayChange);

/* toggle individual project view */
var projectTitle1 = document.getElementById("projectTitle1");
var projectContent1 = document.getElementById("projectContent1");
var projectDesc1 = document.getElementById("projectDesc1");
var arrowContain1 = document.getElementById("projectArrows1");
var openLeft = document.getElementById("projectOpen1");
var closeLeft = document.getElementById("projectClose1");

var projectTitle2 = document.getElementById("projectTitle2");
var projectContent2 = document.getElementById("projectContent2");
var projectDesc2 = document.getElementById("projectDesc2");
var arrowContain2 = document.getElementById("projectArrows2");
var openRight = document.getElementById("projectOpen2");
var closeRight = document.getElementById("projectClose2");

var projectContainer3 = document.getElementById("projectContainer3");
var projectTitle3 = document.getElementById("projectTitle3");
var projectContent3 = document.getElementById("projectContent3");
var projectDesc3 = document.getElementById("projectDesc3");
var arrowContain3 = document.getElementById("projectArrows3");
var openArrow3 = document.getElementById("projectOpen3");
var closeArrow3 = document.getElementById("projectClose3");



function closeProject1() {
	projectContent1.style.left = "-90%";
		closeLeft.style.display = "none";
		openLeft.style.display = "block";
		projectDesc1.style.width = "60%";
		projectContainer3.style.left = "-8%"
		projectTitle3.style.color = "white";
		setTimeout(function(){
			arrowContain1.style.backgroundColor = "rgba(0, 5, 20, 1)";
		}, 500);
}

function openProject2() {
	projectContent2.style.right = "0%";
	openRight.style.display = "none";
	closeRight.style.display = "block";
	projectDesc2.style.width = "80%";
	arrowContain2.style.backgroundColor = "lightblue";
}

function closeProject2() {
	openRight.style.display = "block";
	closeRight.style.display = "none";
	projectContent2.style.right = "-90%";
	projectDesc2.style.width = "60%";
	setTimeout(function(){
		arrowContain2.style.backgroundColor = "rgba(0, 5, 20, 1)";
	}, 500);
}

function openProject3() {
	projectContent3.style.left = "0%";
	projectDesc3.style.width = "80%";
	openArrow3.style.display = "none";
	closeArrow3.style.display = "block";
	arrowContain3.style.backgroundColor = "lightblue";
}

function closeProject3() {
	projectContent3.style.left = "-90%";
	closeArrow3.style.display = "none";
	openArrow3.style.display = "block";
	projectDesc3.style.width = "60%";
	setTimeout(function(){
		arrowContain3.style.backgroundColor = "rgba(0, 5, 20, 1)";
	}, 500);
}

function openProject1() {
	projectContent1.style.left = "0%";
	projectDesc1.style.width = "80%";
	openLeft.style.display = "none";
	closeLeft.style.display = "block";
	arrowContain1.style.backgroundColor = "lightblue";
	closeProject3();
	projectContainer3.style.left = "-50%";
	projectTitle3.style.color = "lightblue";
}

function toggleProject1() {
	if (projectContent1.style.left == "-90%") {
		openProject1();
	}
	else {
		closeProject1();
	}
	if (projectContent2.style.right == "0%"){
		closeProject2();
	}

}

function toggleProject2() {
	if (projectContent2.style.right == "-90%") {
		openProject2();
	}
	else {
		closeProject2();
	}
	if (projectContent1.style.left == "0%"){
		closeProject1();
		
	}
	if (projectContent3.style.left == "0%"){
		closeProject3();
	}
}

function toggleProject3() {
	if (projectContent3.style.left == "-90%") {
		openProject3();
	}
	else {
		closeProject3();
	}
	if (projectContent2.style.right == "0%"){
		closeProject2();
	}
}


/* project 1 */

projectTitle1.addEventListener("click", toggleProject1);
projectContent1.addEventListener("click", toggleProject1);

/* project 2 */
projectTitle2.addEventListener("click", toggleProject2);
projectContent2.addEventListener("click", toggleProject2);

/* project 3 */
projectTitle3.addEventListener("click", toggleProject3);
projectContent3.addEventListener("click", toggleProject3);










/*****************END*******************/







