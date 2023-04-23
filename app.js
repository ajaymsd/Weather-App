let weather={
    "apikey":"630a9e2888b30003a61145094a1f6a44",   //Setting Up the API key and storing it in one variiable
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apikey)
        .then((response)=>response.json())//calling the below created function displayWeather to print the response.
        .then((data)=>this.displayWeather(data)); //Fetching the data from the API Using the url of that API.IF The fetch is done the response will be stored in json format.The Fetched data stored in data parameter and it will be printed in console.
        },
        
        displayWeather:function(data){
           const {name}=data;
           const{icon,description}=data.weather[0];   //getting the icon and description from the weather component inside the data object(reponse came from API)
           const{temp,humidity}=data.main;
           const{speed}=data.wind;
           console.log(name,icon,description,temp,humidity,speed);
           document.querySelector(".city").innerText="Weather in "+ name;
           document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon +".png";
           document.querySelector(".description").innerText=description;
           document.querySelector(".temp").innerText=temp+ "°C";
           document.querySelector(".humidity").innerText="Humidiity: "+humidity+ "%";
           document.querySelector(".wind").innerText="Wind Speed: "+speed+ "km/h";
          document.querySelector(".weather").classList.remove("loading");
          document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name +" ')"
        },
        search:function(){
            this.fetchWeather(document.querySelector(".search-box").value);
        }

};
document.querySelector(".search button").addEventListener("click",function(){
      weather.search();
})

document.querySelector(".search-box").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})

weather.fetchWeather("Madurai");