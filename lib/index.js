import {
  ERROR_ICON,
  SUCCESS_ICON,
  WARNING_ICON,
} from "./constants/icon.constants";
import {
  NOTIFICATIONS_CONTAINER_ID,
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
  COMMON_CSS_ID,
  TOP_RIGHT_POSITION,
} from "./constants/static.constants";
import {
  COMMON_CSS,
  CONTAINER_CSS,
  NOTIFICATION_CSS,
  NOTIFICATION_ICON_CSS,
  NOTIFICATION_MESSAGE_CSS,
} from "./constants/style.constants";
class Notification {
  /**
   * @param {String} text
   * @param {String} type
   */
  text = "";
  type = "success";
  constructor({ text, type, timeout }) {
    this.text = text;
    this.type = type;
    this.timeout = timeout;
    this.createNotification();
  }
  remove(elem) {
    elem.remove();
  }
  createNotification() {
    // Elem block
    const elem = document.createElement("div");
    elem.classList.add("web-toaster-notification", this.type.toLowerCase());
    elem.style.cssText = NOTIFICATION_CSS;
    elem.onclick = () => this.remove(elem);
    // Message block
    const messageElem = document.createElement("span");
    messageElem.textContent = this.text;
    messageElem.style.cssText = NOTIFICATION_MESSAGE_CSS;
    elem.appendChild(messageElem);
    // Icon block
    const iconElem = document.createElement("div");
    iconElem.style.cssText = NOTIFICATION_ICON_CSS;
    iconElem.innerHTML = this.getIcon;
    elem.insertBefore(iconElem, elem.firstChild);
    this.getContainerElem.insertBefore(elem, this.getContainerElem.firstChild);
    this.startTimer(elem);
  }
  get getContainerElem() {
    return document.getElementById(NOTIFICATIONS_CONTAINER_ID);
  }
  get getIcon() {
    switch (this.type) {
      case SUCCESS:
        return SUCCESS_ICON;
      case ERROR:
        return ERROR_ICON;
      case WARNING:
        return WARNING_ICON;
      default:
        return "";
    }
  }
  startTimer(elem) {
    setTimeout(() => {
      this.remove(elem);
    }, this.timeout);
  }
}

class WebToaster {
  /**
   * @param {Number} config.timeout
   * @param {String} config.position
   */
  timeout = 3000;
  position = TOP_RIGHT_POSITION;
  constructor(config) {
    this.position = config?.position || this.position;
    this.timeout = config?.timeout || this.timeout;
    this.init();
  }
  createNotificationsContainer() {
    const isContainerElemExist = !!document.getElementById(
      NOTIFICATIONS_CONTAINER_ID
    );
    if (isContainerElemExist) return;
    const elem = document.createElement("div");
    elem.classList.add(
      "web-toaster-container",
      `web-toaster-container--${this.position}`
    );
    elem.setAttribute("id", NOTIFICATIONS_CONTAINER_ID);
    elem.style.cssText = CONTAINER_CSS;
    document.body.appendChild(elem);
  }
  injectCommonStyle() {
    const styleElem = document.createElement("style");
    styleElem.setAttribute("id", COMMON_CSS_ID);
    styleElem.innerHTML = COMMON_CSS;
    document.body.appendChild(styleElem);
  }
  init() {
    this.createNotificationsContainer();
    this.injectCommonStyle();
  }
  push({ type, text }) {
    try {
      new Notification({ text, type, timeout: this.timeout });
    } catch (error) {
      console.error(error);
    }
  }
  success(text) {
    this.push({ type: SUCCESS, text });
  }
  error(text) {
    this.push({ type: ERROR, text });
  }
  info(text) {
    this.push({ type: INFO, text });
  }
  warning(text) {
    this.push({ type: WARNING, text });
  }
}

export default WebToaster;
