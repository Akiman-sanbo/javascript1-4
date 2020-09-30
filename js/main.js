'use strict'

const title = () => {
  console.log('========================')
  console.log('現在持っているタスク一覧')
  console.log('========================')
}

const lists = [
  {  
  contents:'机を片付ける',
  categorys:'掃除',
  },
  {
    contents:'牛乳をかう',
    categorys:'買い物',
  },
  {
    contents:'散歩する',
    categorys:'運動',
  },
];

const flists = (i) => {
  for(let i = 0; i < lists.length; i++){
    console.log(`${i} : [内容]:${lists[i].contents}、[ジャンル]${lists[i].categorys}`);
  }
};
title();
flists();

while(true){
  const messaage1 = prompt('タスクを入力してください');
  const message2 = prompt('ジャンルを入力してください');
  
  const lists2 = {contents:messaage1,categorys:message2};
  lists.push(lists2);
  
  title();
  flists();
  alert('新しいタスクを追加しました');
  
  const result = prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
}