const tab1 = document.querySelector('.service__btn_photo');
const tab2 = document.querySelector('.service__btn_creat');
const tab3 = document.querySelector('.service__btn_desing');

const blocksList = document.querySelectorAll('.service__block');
const tabsList = document.querySelectorAll('.service__btn');



tab1.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "service__block_photo", "service__btn_photo")
});

tab2.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "service__block_creat", "service__btn_creat")
});

tab3.addEventListener('click', () => {
  tabsHandler(tabsList, blocksList, "service__block_desing", "service__btn_desing")
});

function tabsHandler (tabs, blocks, blockClass, tabClass) {
  tabs.forEach(tab => {
    if(tab.classList.contains(tabClass)){
      tab.lastElementChild.classList.toggle('transform');
    }
    else
      tab.lastElementChild.classList.remove('transform');
  });

  blocks.forEach((block) => {
    if(block.classList.contains(blockClass)) {
      block.classList.toggle('d-none');
    }
    else
      block.classList.add('d-none');

  });
 }










