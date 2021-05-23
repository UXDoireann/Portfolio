



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

    const activeArticle = ()=>{
        const allArticles = document.querySelectorAll('article');
        for(let a=0; a < allArticles.length; a++){
            const article = allArticles[a]

            const view = section.getBoundingClientRect();
            if (view.top <=350 && view.bottom >= 30) {
                article.classList.add("your-active-class");
                console.log("a bit of added class");
            } else {
                article.classList.remove("your-active-class");
                console.log("a little less classy");
            }


        }
    }


export {activeSection}
export {activeArticle}