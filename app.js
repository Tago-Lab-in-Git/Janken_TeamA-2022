

function Run() {
    console.log("test");
    //　じゃんけんの参加者数
    let len = 3;
    //　じゃんけんの参加者
    let name = ["tanaka", "satou", "suzuki"];
    // じゃんけんの手
    let hand = [];
    //　勝者
    let won = [];

    //じゃんけんの手を設定
    // 0 グー
    // 1 チョキ
    // 2 パー
    for (let i = 0; i < len;i++) {
        hand.push(Math.floor(Math.random() * 1000 % 3));
        //hand.push(2);
    }
    console.log(hand);

    //全部の種類がある時はあいこにしちゃう
    if (hand.indexOf(0) != -1 && hand.indexOf(1) != -1 && hand.indexOf(2) != -1) {
        console.log("引き分けです");
        return;
    }

    //let win = score[0] != 2 ? (score[0] >= score[1] ? score[0] : score[1]) : (score[1] == 1 ? score[1] : score[0]);
    let j = 0;
    while (j < len - 1) {
        if (hand[j] != hand[j + 1]) break;
        j++;
    }
    if (j == len - 1) {
        console.log("引き分けです!");
        return;
    }
    if (hand[j] != 2) {
        if (hand[j] < hand[j + 1]) {
            for (let k = 0; k < j + 1; k++) {
                won.push(name[k]);
            }
            win = hand[j];
        }
        if (hand[j] > hand[j + 1]) {
            won.push(name[j + 1]);
            win = hand[j + 1];
        }
    } else {
        if (hand[j + 1] != 0) {
            won.push(name[j + 1]);
            win = hand[j + 1];
        } else {
            for (let k = 0; k < j + 1; k++) {
                won.push(name[k]);
            }
            win = hand[j];
        }
    }
    /*//あいこ
    if (hand[0] == hand[1]) {
        won.push(name[0]);
        won.push(name[1]);
        win = hand[0];
    }
    //0番目が1番目に勝っている時
    else if ((hand[0] + 1) % 3 == hand[1]) {
        won.push(name[0]);
        win = hand[0];
    } else { //1番目が0番目に勝っている時
        won.push(name[1]);
        win = hand[1];       
    }*/

    console.log("j = ", j);
    console.log("win = ", win);
    // 2つめ以降の手を比較
    for (let i = j + 2; i < len; i++) {
        const cw = win - 1 < 0 ? 2 : win - 1;
        if (hand[i] == cw % 3) {
            console.log("引き分けです");
            return;
        }
        //3種類の手が出てきたか
        if (win == hand[i]) {
            won.push(name[i]);
        } 
    }
console.log(won);

}

// 人数を決める

// 各人の名前を決める

// ランダムに手を決める

// 最初の2つで勝ち負けを比較

// 勝った人を配列に入れる
//　勝った人の手を変数に入れる

// その他の人に対して

    // その手に対しての勝ち負け

    // 勝ったらおかしいから引き分けでreturn

    // 引き分けだったら勝ちだから
    // 勝った人を配列に入れる

    // 負けだったらそのまま次のループへ

// 勝った人を表示

Run();