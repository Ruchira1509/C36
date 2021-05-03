class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = dataBase.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        dataBase.ref('/').upadate({
            playerCount:count
        })
    }

    update(name){
        var playerIndex = "player"+playerCount;
        dataBase.ref(playerIndex).set({
            name:name
        });
    }
}