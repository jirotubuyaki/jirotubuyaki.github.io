function init(){    
    var queue = new createjs.LoadQueue(true);
    queue.installPlugin(createjs.Sound);

    //読み込むファイルを記述（複数可能）
    var manifest = [{id:"sound",src:"./tw060.mp3"},];
    queue.loadManifest(manifest,true);  

    //manifestで指定したファイルが１つ読み込まれるごとに実行される
    //このサンプルでは１ファイルのみなので細かい処理割愛
    queue.addEventListener('fileload',handleFileLoad);
    function handleFileLoad(event){
        var bgm = createjs.Sound.createInstance(event.item.id);
        bgm.addEventListener("complete", function(){
            alert("サウンド終了")
        });
        document.getElementById("startBtn").addEventListener("click",function(){
            bgm.setVolume(0.1); //ボリュームを設定
            bgm.play();                     
        },false); 
        document.getElementById("stopBtn").addEventListener("click",function(){
            bgm.stop();
        },false); 
    }
};

window.addEventListener("load",function(){init();});