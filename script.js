const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
let reviewOption=0;
let currenNumber=reviewOption;
window.addEventListener('load',()=>{
    showReviews(reviewOption);
});
function showReviews(num){
    document.querySelector('.container').innerHTML=
        `<img src="${reviews[num].image}"/>
                <div class="name" data-id="${reviews[num].id}">${reviews[num].name}</div>
                <div class="back_cyan"></div>
                <div class="job">${reviews[num].job}</div>
                <div class="text"><q>${reviews[num].text}</q></div>
                <button class="random_btn">Suprise me!</button>
        `;
        document.querySelector('.random_btn').addEventListener('click',supriseFunction);
        let currentNumber=document.querySelector('.name').dataset.id;
        activeBar(currentNumber);
}
function supriseFunction(){
        let randomReviews=Math.floor(Math.random()*4);
        if(randomReviews==currenNumber) supriseFunction();
        else{
            showReviews(randomReviews);
            currenNumber=randomReviews;
        }
}
const arrowRight=document.querySelector('.hero .fa-arrow-right');
arrowRight.addEventListener('click',()=>{
  reviewOption++;
  if(reviewOption>=4) reviewOption=0;
  showReviews(reviewOption);
});
const arrowLeft=document.querySelector('.hero .fa-arrow-left');
arrowLeft.addEventListener('click',()=>{
  reviewOption--;
  if(reviewOption<0) reviewOption=3;
  showReviews(reviewOption);
});
const barMenu=document.querySelector('.bars');
reviews.forEach((e)=>{
  barMenu.innerHTML+=`<div class="bar_menu m-${e.id}" data-id="${e.id}"></div>`;
});
const allBars=document.querySelectorAll(".bar_menu");
function activeBar(num){
  allBars.forEach((e)=>{
    e.classList.remove('active');
  });
  document.querySelector(`.m-${num}`).classList.add('active');
}
allBars.forEach((e)=>{
  e.addEventListener('click',function(e){
    let number=e.currentTarget.dataset.id-1;
    reviewOption=number;
    console.log(number);
    showReviews(number);
  });
});