fetch("https://restcountries.com/v3.1/all")
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    numberOfAfricanCountries(data)
})


function numberOfAfricanCountries(data) {
    
    
const countries = data.filter((country) => country.region === "Africa")
console.log(countries.length)
.then((countries) =>
console.log(countries))

}


fetch("https://restcountries.com/v2/all")
.then((response) =>{
    return response.json()
})
.then((data) =>{

    numberOfAfricanCountriesThatDoNotSpeakEnglish(data)
})
//number of african countries 

function numberOfAfricanCountriesThatDoNotSpeakEnglish(data) {
    const countries = data.filter((country) => country.region === "Africa")

    const EnglishSpeak = countries.filter((country) => country.language === "English")
    console.log(EnglishSpeak.length)
    for (let i = 0; i < countries.length; i++) {
        console.log(countries.languages)
    }
    
}


// function countriesHasenglish(EnglishSpeak) {
//     CountryList =[];

//     array.forEach(element => {
//         if (EnglishSpeak.language === "English") {
//             CountryList.Push();

        
//     });
// }



// number of african countries that dont speaak english