import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Rate extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "rate",
    "Constructor": Rate,
    "selector": ".rate"
  }
);
