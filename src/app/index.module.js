import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { MapDirective } from '../app/components/map/map.directive';
import { CsvFormatter } from '../app/components/csvTable/csvFormatter.directive';
import { CsvTable } from '../app/components/csvTable/csvTable.directive';

angular
  .module('foundersMap', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'uiGmapgoogle-maps'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('map', MapDirective)
  .directive('csvFormatter', CsvFormatter)
  .directive('csvTable', CsvTable);
