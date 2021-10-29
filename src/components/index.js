import Introduction from "./introduction";
import SkateBoard from "./skate-board";
import beian from "./beian";

const coms = {
    Introduction,
    SkateBoard,
    beian,
};

export default function install(Vue) {
    Object.keys(coms).forEach((name) => {
        Vue.component(name, coms[name]);
    });
}
