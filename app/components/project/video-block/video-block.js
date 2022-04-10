import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class VideoBlock extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "videoBlock",
    "Constructor": VideoBlock,
    "selector": ".video-block"
  }
);
