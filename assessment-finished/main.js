const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は心地いい気温だったので、 :insertx: は歩いて行った。 彼ら向かったところには、 :inserty:があった。彼女はしばらくそれ見つめていました。なぜなら :insertz:. しかしそのおばあさんは実は優しい人だった。 :insertx: が見たおばあさんは大柄で白髪だった。';
const insertX = ['梅子', 'ポチ', 'ケイ'];
const insertY = ['ドッグラン', '学校', '知らない廃墟'];
const insertZ = ['行きたいような、行きたくないような気がして迷っていたからです', '中は未知の世界だったからです', '中には怖いおばあさんが住んでいたからです。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
