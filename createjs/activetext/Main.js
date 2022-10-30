var canvas;
var stage;

function init(){
	canvas = document.getElementById("mycanvas");
	stage = new createjs.Stage(document.getElementById("mycanvas"));

    ActiveText(10,50,"Welcome to My Web page.");
    ActiveText(10,100,"Texts change from a:A to z:Z.");
    ActiveText(10,150,"Please use it!!");

}
var ActiveText = function(text_x, text_y, word){
    var t;     
    var moji = [];
    var change_moji = [];
    var display_word;
    var i;
    var j = 0;
    var i_state = [];

    for(i = 0; i < word.length; i++){
        i_state[i] = "go";
    }
    for(i = 0; i <= word.length; i++){
        moji[i] = "";
    }
    change_moji[0] = "a";
    change_moji[1] = "b";
    change_moji[2] = "c";
    change_moji[3] = "d";
    change_moji[4] = "e";
    change_moji[5] = "f";
    change_moji[6] = "g";
    change_moji[7] = "h";
    change_moji[8] = "i";
    change_moji[9] = "j";
    change_moji[10] = "k";
    change_moji[11] = "l";
    change_moji[12] = "m";
    change_moji[13] = "n";
    change_moji[14] = "o";
    change_moji[15] = "p";
    change_moji[16] = "q";
    change_moji[17] = "r";
    change_moji[18] = "s";
    change_moji[19] = "t";
    change_moji[20] = "u";
    change_moji[21] = "v";
    change_moji[22] = "w";
    change_moji[23] = "x";
    change_moji[24] = "y";
    change_moji[25] = "z";
    change_moji[26] = "%";
    change_moji[27] = "A";
    change_moji[28] = "B";
    change_moji[29] = "C";
    change_moji[30] = "D";
    change_moji[31] = "E";
    change_moji[32] = "F";
    change_moji[33] = "G";
    change_moji[34] = "H";
    change_moji[35] = "I";
    change_moji[36] = "J";
    change_moji[37] = "K";
    change_moji[38] = "L";
    change_moji[39] = "M";
    change_moji[40] = "N";
    change_moji[41] = "O";
    change_moji[42] = "P";
    change_moji[43] = "Q";
    change_moji[44] = "R";
    change_moji[45] = "S";
    change_moji[46] = "T";
    change_moji[47] = "U";
    change_moji[48] = "V";
    change_moji[49] = "W";
    change_moji[50] = "X";
    change_moji[51] = "Y";
    change_moji[52] = "Z";
    change_moji[53] = " ";

    t = new createjs.Text(word, "bold 2em sans-serif", "black");
    t.textBaseline = top;
    t.x = text_x;
    t.y = text_y;
    stage.addChild(t);
    stage.update();
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", act);

    function act(evt){
        stage.update();
        if(j < 54){
            stage.removeChild(t);
            Change();
            Display();
            stage.addChild(t);
            display_word = "";
            j++;
        }
        if(j == 54){
            t.text = word;
        }
    }
    function Change(){
        for(i = 0; i < word.length; i++){
            if(i_state[i] != "stop"){
                if(word.charAt(i) == change_moji[j]){
                    moji[i] = change_moji[j];
                    i_state[i] = "stop";
                }
                else{
                    moji[i] = change_moji[j];
                }
            }
        }
    }
    function Display(){
        for(i = 0; i < word.length; i++){
            display_word = display_word + String(moji[i]);
        }
        t = new createjs.Text(display_word, "bold 2em sans-serif", "black");
        t.textBaseline = top;
        t.x = text_x;
        t.y = text_y;
    }
}