import svgSpriteInjector from 'svg-sprite-injector';
import 'swiper/dist/css/swiper.min.css';

import './stories/welcome';
import './stories/button';
import './stories/image';
import './stories/images';
import './stories/gallery';
import './stories/icon';
import './stories/collapsible';
import './stories/selection-control';

const svgFiles = require.context('../assets/icons', true, /\.svg$/);
svgFiles.keys().forEach(key => svgFiles(key));
svgSpriteInjector('icons.svg');
