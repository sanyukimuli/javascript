// The Object Model (Dom)
// the document stands for your entire html and css 
// it's like the structural framework for your webpage
// it is html and css turned into javascript - an object which is accessible by js
// how to interact with browser using js - lets you change things after the page loads wthout editing or refreshing
//it makes your page responsive to users 
 console.log(document);
        // console.log(window);
    
//DOM methods
//create (get)
// console.log(document.body);
// getElementById(); // selects an element by id
// getElementsByClassName(); // notice these are plural elementS
// getElementtsByTagName();
// querrySelector(); // selects the first matching css class - use it for classess but can also be used for Ids and tags
// querrySelectorAll(); // gives you all matching elements 

// const allTitles = document.getElementsByTagName('h1');
// console.log(allTitles) // this helps you edit individual things 

// for(let i = 0; i < allTitles.length ; i++){
//     console.log(allTitles[i]);
// }

// const firstTitle = document.getElementById('heading-one');
// console.log(firstTitle)

// const firstTitle = document.querySelector('.title')
// const firstTitle = document.querySelector('#title')
// const firstTitle = document.querySelector('h1') // you can do all three with querry 

// const allTitles = document.querySelectorAll('h1'); 
// allTitles[1].className;
// allTitles[1].className = 'season - two';
// allTitles.setAttribute();

// allTitles[2].style.color = 'blue';



//read

//update

//delete