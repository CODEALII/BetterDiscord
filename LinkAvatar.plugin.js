/**
 * @name LinkAvatar
 * @author YTAli
 * @version 1.0
 * @description Allows you to click on a user's Avatar to open it in the browser
 * @invite wYAKWygN8s
 * @source https://github.com/CODEALII/BetterDiscord/LinkAvatar.plugin.js
 */

 module.exports = class LinkAvatar {
    start() {
        document.addEventListener("click", this.link)
    }
    stop() {
        document.removeEventListener("click", this.link)
    }
    link({target}) {
        if (target.classList.contains("avatar-3QF_VA") && target.parentElement?.parentElement?.classList.contains("header-S26rhB")) {
            window.open(target.querySelector("img").src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
        }
    }
}
