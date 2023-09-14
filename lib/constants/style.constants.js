export const CONTAINER_CSS = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:flex-end;
        position: fixed;
        padding: 5px;
        top: 15px;
        right: 15px;
        max-height: 100vh;
        overflow-y: auto;
        z-index: 99999999999999;
`;
export const NOTIFICATION_CSS = `
        display: flex;
        align-items: center;
        background: #fff;
        width: fit-content;
        color: #363636;
        line-height: 1.3;
        will-change: transform;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
        max-width: 350px;
        pointer-events: auto;
        padding: 8px 10px;
        border-radius: 8px;
        font-family: Arial, Helvetica, sans-serif;
        animation: toastBar .5s ease forwards;
        margin: 5px 0;
        transition: all .1s;
        font-size: 15px;
`;

export const NOTIFICATION_MESSAGE_CSS = `
        display: flex;
        justify-content: center;
        margin: 4px 10px;
        color: inherit;
        flex: 1 1 auto;
        white-space: pre-line;
`;

export const NOTIFICATION_ICON_CSS = `
        display: flex;
        justify-content: center;
        align-items-center;
`;

export const NOTIFICATION_ANIMATION = `
@keyframes toastBar {
        0% {transform: translate3d(0,-100%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
}
`;

export const COMMON_CSS = `${NOTIFICATION_ANIMATION}`;
