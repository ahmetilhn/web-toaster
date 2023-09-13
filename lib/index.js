import { STYLE_ELEM_ID } from "./constants/static.constants";
import { CONTAINER_CSS } from "./constants/style.constants";

class Notification {
  /**
   * @param {String} payload.text
   * @param {String} payload.type
   */
  text = "";
  type = "success";
  constructor(payload) {
    this.text = payload.text;
    this.type = payload.type;
  }
  createNotificationContainerHtm(){
    const elem = document.createElement("div");
    elem.classList.add()
  }
  createNotificationHTML() {
    const elem = document.createElement("div");
    elem.classList.add(`web-toaster-notification ${this.type}`);
    elem.innerHTML = `
    <span>${this.text}</span>
    `;
  }
  get getContainerElem(){
    return document.getElementById()
  }
}

class WebToaster {
  /**
   * @param {Number} config.timeout
   * @param {String} config.position
   */
  position = "top-right";
  timeout = 3000;
  constructor(config) {
    this.position = config.position;
    this.timeout = config.timeout;
  }
  injectCSS() {
    const styleElem = document.createElement("style");
    styleElem.setAttribute("id", STYLE_ELEM_ID);
    styleElem.type = "text/css";
    styleElem.textContent = `${CONTAINER_CSS}`;
    document.getElementsByTagName("head")[0].appendChild(styleElem);
  }
}

export default WebToaster;
