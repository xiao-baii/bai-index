import Introduction from './introduction'
import HeroVisual from './hero-visual'
import Beian from './beian'

const coms = {
  Introduction,
  HeroVisual,
  Beian,
}

export default function install(app) {
  Object.keys(coms).forEach((name) => {
    app.component(name, coms[name])
  })
}
