const intructContainer = document.getElementById("containerIntruction");
const personalInfoDisplay = document.getElementById("personalInfoDisplay");
const addressInfoDisplay = document.getElementById("addressInfoDisplay");
const contanctInfoDisplay = document.getElementById("contanctInfoDisplay");
const educationalInfoDisplay = document.getElementById("educationalInfoDisplay");
const skillsInfoDisplay = document.getElementById("skillsInfoDisplay");
const otherInfoDisplay = document.getElementById("otherInfoDisplay");
const prevBtnIntruct= document.getElementById("prevBtnIntruct");
const personalInformationContainer = document.getElementById("personalInformationContainer");
const nextBtnToAddress= document.getElementById("nextBtnToAddress");
const addressInfoContainer = document.getElementById("addressInfoContainer");
const instructionsList = document.getElementById("instructionsList");



function intructionClick(){

    intructContainer.style.display = "none";
    personalInfoDisplay.style.borderRadius = "50px"
    personalInfoDisplay.style.backgroundColor = "#abc4ff";
    personalInfoDisplay.style.padding = "1rem";
    personalInfoDisplay.style.color = "#ffff"
 
   
}

function prevBtnToInsturct(){
    intructContainer.style.display = "block";
    document.getElementById('containerIntruction').scrollIntoView({ behavior: 'smooth' });
}
function prevBtnToPersonInfo(){
   
    document.getElementById('personalInformationContainer').scrollIntoView({ behavior: 'smooth' });
}
function prevBtnAdd(){
    
    document.getElementById('addressInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function prevBtnToContact(){
    
    document.getElementById('contactInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function prevBtnToEduc(){
    
    document.getElementById('educationInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function prevBtnToSkills(){
    
    document.getElementById('skillInfoContainer').scrollIntoView({ behavior: 'smooth' });
}



function nextBtnToAdd(){
    personalInfoDisplay.style.backgroundColor = "transparent";
    personalInfoDisplay.style.color = "black"

    addressInfoDisplay.style.borderRadius = "50px"
    addressInfoDisplay.style.backgroundColor = "#abc4ff";
    addressInfoDisplay.style.padding = "1rem";
    addressInfoDisplay.style.color = "#ffff"
    document.getElementById('addressInfoContainer').scrollIntoView({ behavior: 'smooth' });
}

function nextBtnToContanct(){
      addressInfoDisplay.style.color = "black"
      addressInfoDisplay.style.backgroundColor = "transparent";
      
      contanctInfoDisplay.style.borderRadius = "50px"
      contanctInfoDisplay.style.backgroundColor = "#abc4ff";
      contanctInfoDisplay.style.padding = "1rem";
      contanctInfoDisplay.style.color = "#ffff"
        document.getElementById('contactInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function nextBtnToEduc(){
    contanctInfoDisplay.style.color = "black"
    contanctInfoDisplay.style.backgroundColor = "transparent";

    educationalInfoDisplay.style.borderRadius = "50px"
    educationalInfoDisplay.style.backgroundColor = "#abc4ff";
    educationalInfoDisplay.style.padding = "1rem";
    educationalInfoDisplay.style.color = "#ffff"
    document.getElementById('educationInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function nextBtnToSkills(){
    educationalInfoDisplay.style.color = "black"
    educationalInfoDisplay.style.backgroundColor = "transparent";

    skillsInfoDisplay.style.borderRadius = "50px"
    skillsInfoDisplay.style.backgroundColor = "#abc4ff";
    skillsInfoDisplay.style.padding = "1rem";
    skillsInfoDisplay.style.color = "#ffff"
    document.getElementById('skillInfoContainer').scrollIntoView({ behavior: 'smooth' });
}
function nextBtnToOtherInfo(){
    skillsInfoDisplay.style.color = "black"
    skillsInfoDisplay.style.backgroundColor = "transparent";

    otherInfoDisplay.style.borderRadius = "50px"
    otherInfoDisplay.style.backgroundColor = "#abc4ff";
    otherInfoDisplay.style.padding = "1rem";
    otherInfoDisplay.style.color = "#ffff"
    document.getElementById('otherInfoContainer').scrollIntoView({ behavior: 'smooth' });
}



personalInformationContainer.addEventListener('mouseenter' ,function(){
    personalInfoDisplay.style.borderRadius = "50px"
    personalInfoDisplay.style.backgroundColor = "#abc4ff";
    personalInfoDisplay.style.padding = "1rem";
    personalInfoDisplay.style.color = "#ffff"
 
});
personalInformationContainer.addEventListener('mouseleave', function(){
    personalInfoDisplay.style.backgroundColor = "transparent";
    personalInfoDisplay.style.color = "black"
});
addressInfoContainer.addEventListener('mouseenter' ,function(){
    addressInfoDisplay.style.borderRadius = "50px"
    addressInfoDisplay.style.backgroundColor = "#abc4ff";
    addressInfoDisplay.style.padding = "1rem";
    addressInfoDisplay.style.color = "#ffff"
 
});
addressInfoContainer.addEventListener('mouseleave', function(){
    addressInfoDisplay.style.backgroundColor = "transparent";
    addressInfoDisplay.style.color = "black"
});
contactInfoContainer.addEventListener('mouseenter' ,function(){
    contanctInfoDisplay.style.borderRadius = "50px"
    contanctInfoDisplay.style.backgroundColor = "#abc4ff";
    contanctInfoDisplay.style.padding = "1rem";
    contanctInfoDisplay.style.color = "#ffff"
 
});
contactInfoContainer.addEventListener('mouseleave', function(){
    contanctInfoDisplay.style.backgroundColor = "transparent";
    contanctInfoDisplay.style.color = "black"
});
educationInfoContainer.addEventListener('mouseenter' ,function(){
    educationalInfoDisplay.style.borderRadius = "50px"
    educationalInfoDisplay.style.backgroundColor = "#abc4ff";
    educationalInfoDisplay.style.padding = "1rem";
    educationalInfoDisplay.style.color = "#ffff"
 
});
educationInfoContainer.addEventListener('mouseleave', function(){
    educationalInfoDisplay.style.backgroundColor = "transparent";
    educationalInfoDisplay.style.color = "black"
});
skillInfoContainer.addEventListener('mouseenter' ,function(){
    skillsInfoDisplay.style.borderRadius = "50px"
    skillsInfoDisplay.style.backgroundColor = "#abc4ff";
    skillsInfoDisplay.style.padding = "1rem";
    skillsInfoDisplay.style.color = "#ffff"
 
});
skillInfoContainer.addEventListener('mouseleave', function(){
    skillsInfoDisplay.style.backgroundColor = "transparent";
    skillsInfoDisplay.style.color = "black"
});
otherInfoContainer.addEventListener('mouseenter' ,function(){
    otherInfoDisplay.style.borderRadius = "50px"
    otherInfoDisplay.style.backgroundColor = "#abc4ff";
    otherInfoDisplay.style.padding = "1rem";
    otherInfoDisplay.style.color = "#ffff"
 
});
otherInfoContainer.addEventListener('mouseleave', function(){
    otherInfoDisplay.style.backgroundColor = "transparent";
    otherInfoDisplay.style.color = "black"
});

document.getElementById("myForm").addEventListener('submit', function(event){
     event.preventDefault();
     const result = document.getElementById("resultSection");
     const btnSubmit = document.getElementById("sumbitBtn");

     otherInfoContainer.style.display = 'none';
     skillInfoContainer.style.display = 'none';
     educationInfoContainer.style.display = 'none';
     contactInfoContainer.style.display = 'none';
     addressInfoContainer.style.display = 'none';
     personalInformationContainer.style.display = 'none';
     result.style.display= "flex";
     btnSubmit.style.display= 'none';
     window.alert("Form Successfully Submitted")
});