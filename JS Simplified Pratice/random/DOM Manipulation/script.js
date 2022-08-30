//-------------1. Adding Elements-------------

// const body = document.body
// const div = document.querySelector('div')
// div.innerText = "Hello World"
// //body.appendChild(div)
// body.append(div)


//-------------2. Creating Elements-------------

// const body = document.body
// const div = document.createElement(div)


//-------------3. Modifing Element Text-------------
// const div = document.querySelector('div')
// console.log(div.textContent);// PRINTS WITH INTENDENTION of HTML FILE
// console.log(div.innerText);//PRINTS WHATS VISIBLE ON HTML DOCUMENT AFTER RENDER


//-------------4. Modifing Element HTML -------------

// const body = document.body
// const div = document.createElement('div')

//---------------------------------------------
// div.innerHTML = "<strong>Hello World 2</strong>"//IT ADDS HTML FROM A STRING & HAVE SECURITY ISSUES
// body.append(div)
//---------------------------------------------
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 2"
// div.append(strong)
// body.append(div)


//-------------5. Removing Elements -------------

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

//---------------------------------------------
// spanBye.remove()
// div.append(spanBye)
//---------------------------------------------
// div.removeChild(spanHi)
//---------------------------------------------


//-------------6. Modifying Element Attributes -------------

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

//---------------------------------------------
// console.log(spanHi.id);
// console.log(spanHi.title);
// spanHi.id = "adafafadads"

//---------------------------------------------
// console.log(spanHi.getAttribute("id"));
// console.log(spanHi.getAttribute("title"));
// spanHi.setAttribute("id", "adafafadads")
// spanHi.removeAttribute("id")

//-------------7. Modifying Data Attributes -------------

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// console.log(spanHi.dataset.test)
// console.log(spanHi.dataset.longerName)

// spanHi.dataset.newName = "hi"
// console.log(spanHi.dataset.newName)


//-------------8. Modifying Element Classes -------------

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// spanHi.classList.add("new-class")

// spanHi.classList.remove("hi1")

// spanHi.classList.toggle("hi2")
// spanHi.classList.toggle("hi3")
// spanHi.classList.toggle("hi4", true)
// spanHi.classList.toggle("hi1", false)

//-------------9. Modifying Element Style -------------

// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')

// spanHi.style.color = "green"
// spanHi.style.backgroundColor = "red"
