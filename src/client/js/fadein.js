



/* Add class 'active' to section when near top of viewport*/
const activeSection = () => {
    console.log('scrolling');
   const allSections = document.querySelectorAll('section');
    for (let m =0; m < allSections.length; m++) {
        const section = allSections[m]

     const view = section.getBoundingClientRect();
        if (view.top <=350 && view.bottom >= 30) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
           
        }
    }}

//add active section to article elements
    const activeArticle = ()=>{
        const allArticles = document.querySelectorAll('article');
        for(let a=0; a < allArticles.length; a++){
            const article = allArticles[a]

            const view = article.getBoundingClientRect();
            if (view.top <=350 && view.bottom >= 30) {
                article.classList.add("your-active-class");
               
            } else {
                article.classList.remove("your-active-class");
                
            }


        }
    }

//Add active class to quotes
const activeQuote = ()=>{
    const allQuotes = document.getElementsByClassName('quote');
    for(let a=0; a < allQuotes.length; a++){
        const quote = allQuotes[a]

        const view = quote.getBoundingClientRect();
        if (view.top <=350 && view.bottom >= 30) {
            quote.classList.add("your-active-class");
            
        } else {
            quote.classList.remove("your-active-class");
            
        }


    }
}

//Add active class to section titles

const activeTitle = ()=>{
    const allTitles = document.getElementsByClassName('section_title');
    for(let a=0; a < allTitles.length; a++){
        const title = allTitles[a]

        const view = title.getBoundingClientRect();
        if (view.top<500 && view.bottom >= 10) {
            title.classList.add("your-active-class");
            console.log("a bit of added class");
        } else {
            title.classList.remove("your-active-class");
            console.log("a little less classy");
        }


    }
}


export {activeSection}
export {activeArticle}
export {activeQuote}
export{activeTitle}