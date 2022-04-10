import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Create extends Plugin {
  constructor($element) {
    super($element);
  }
}


registerPlugins(
  {
    "name": "create",
    "Constructor": Create,
    "selector": ".create"
  }
);
