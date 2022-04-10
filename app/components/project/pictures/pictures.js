import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Pictures extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "pictures",
    "Constructor": Pictures,
    "selector": ".pictures"
  }
);
