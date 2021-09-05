import IndexPage from './index';
import MenuPage from './menu';

const buildPath = (path) => `/ff7/${path}`
const buildObject = (path,component) => ({path, component});

export const Routes = [
    buildObject(buildPath("menu"), MenuPage),
    buildObject(buildPath(""), IndexPage)
];