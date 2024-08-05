/**
 * @name DevClasses
 * @version 1.0
 * @description With this plugin you can display the classes of objects you click on.
 * @author YTAli
 * @invite wYAKWygN8s
 * @source https://github.com/CODEALII/BetterDiscord/DevClasses.plugin.js
 */



 module.exports = class DevClasses{

    load(){
        BdApi.setData("DevClasses", "Enabled", false)
    }

    start(){
        document.addEventListener("click", this.link)
        if(BdApi.loadData("DevClasses", "Enabled") == true){
            BdApi.alert("DevClasses", "Currently Enabled!")
        }else{
            BdApi.alert("DevClasses", "Currently Disabled! Press (STRG + .) to Enable/Disable")
        }
        let keysPressed = {};
        document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
        if (keysPressed['Control'] && event.key === '.') {
            if(BdApi.loadData("DevClasses", "Enabled") == true){
                BdApi.setData("DevClasses", "Enabled", false)
                BdApi.showToast("DevClasses: Disabled!")
            }else{
                BdApi.setData("DevClasses", "Enabled", true)
                BdApi.showToast("DevClasses: Enabled!")
            }
        }
        });
        document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
        });
    }

    stop(){
        document.removeEventListener("click", this.link)
    }

    link(event) {
        if(BdApi.loadData("DevClasses", "Enabled") == true){
            let elementClass = event.target.className;
            if (elementClass !== '') {
                BdApi.showToast("You Clicked: "+elementClass);
            }
        }
    }
}
