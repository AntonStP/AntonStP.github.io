import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Intro extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "intro",
    "Constructor": Intro,
    "selector": ".intro"
  }
);
