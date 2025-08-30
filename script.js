const InputElementName= document.getElementById('searchbarforhomepage');
const BrowseButtonName= document.getElementsByClassName('buttonforbrowsing')[0];
const LowerDisplayName= document.getElementById('therecipedisplaysection');


async function FetchingData(){
try{
const query =InputElementName.value || 'Arrabiata'; //default
const DataCollerterFromAPI=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const redableDataFormat =await DataCollerterFromAPI.json();

if(redableDataFormat.meals){     //means if request present in the array by using that object then
LowerDisplayName.innerHTML='';  //all previous data will be finished

redableDataFormat.meals.forEach(meal =>{
LowerDisplayName.innerHTML +=`<h2 id="headingIntheanswerbox">${meal.strMeal}</h2>
<p id="therecipedisplaysectionPara" class="lowerfont">${meal.strInstructions}</p>
<img src="${meal.strMealThumb}" alt="" id="foodlowerimage">
<a href="${meal.strYoutube}" id="tutorialbuttonimage">View Here</a>
`;
});

}else{
LowerDisplayName.innerHTML =`<h2>Food not found</h2>`
}
}catch(error){
console.log(error)
}
}


BrowseButtonName.onclick= FetchingData;
