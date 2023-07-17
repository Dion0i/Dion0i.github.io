const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".Controlls");
const sectBtn = document.querySelectorAll(".control");
const allsections = document.querySelectorAll(".main-content");

function pageTransitions() {
  // btn click active class.
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }

  // Section Active
  allsections.forEach((section) => {
    section.addEventListener("click", (e) => {
      const btn = e.target.closest('.control');
      const id = btn.dataset.id;
      if (id) {
        // Remove 'active' from other buttons
        sectBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
  
        // Hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });
  
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  });  
  
}

pageTransitions();

/*

allsections.forEach((section) => {
    section.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if(id)
      {
        //remuve selected from other btns
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
      
        //hide other seactions
        sections.forEach((section)=> {
            section.classList.remove('active')
        })
      
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  });


const id = e.target.dataset.id;
if(id)
{
  //remuve selected from other btns
  sectBtns.forEach((btn) =>{
      btn.classList.remove('active')
  })
  e.target.classList.add('active')

  //hide other seactions
  sections.forEach((section)=> {
      section.classList.remove('active')
  })

  const element = document.getElementById(id);
  element.classList.add('active');
}
*/