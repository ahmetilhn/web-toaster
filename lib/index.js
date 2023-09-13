import {
  NOTIFICATIONS_CONTAINER_ID,
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
} from "./constants/static.constants";
import { CONTAINER_CSS, NOTIFICATION_CSS } from "./constants/style.constants";
class Notification {
  /**
   * @param {String} text
   * @param {String} type
   */
  text = "";
  type = "success";
  constructor({ text, type }) {
    this.text = text;
    this.type = type;
    this.createNotification();
  }
  createNotification() {
    const elem = document.createElement("div");
    elem.classList.add("web-toaster-notification", this.type.toLowerCase());
    elem.innerHTML = `
    <span>${this.text}</span>
    `;
    elem.style.cssText = NOTIFICATION_CSS;
    this.getContainerElem.appendChild(elem);
  }
  get getContainerElem() {
    return document.getElementById(NOTIFICATIONS_CONTAINER_ID);
  }
}

class WebToaster {
  /**
   * @param {Number} timeout
   * @param {String} position
   */
  position = "top-right";
  timeout = 3000;
  constructor({ timeout, position }) {
    this.position = position;
    this.timeout = timeout;
    this.createNotificationsContainer();
  }
  createNotificationsContainer() {
    const isContainerElemExist = !!document.getElementById(
      NOTIFICATIONS_CONTAINER_ID
    );
    if (isContainerElemExist) return;
    const elem = document.createElement("div");
    elem.classList.add("web-toaster-container");
    elem.setAttribute("id", NOTIFICATIONS_CONTAINER_ID);
    elem.style.cssText = CONTAINER_CSS;
    document.body.appendChild(elem);
  }
  push({ type, text }) {
    try {
      new Notification({ text, type });
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
