 export function MapDirective() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/map/map.html',
    scope: {
      mapData: '=',
      lngColumn: '=',
      latColumn: '=',
      labelColumn: '='
    },
    controller: MapController,
    controllerAs: 'vm',
    bindToController: true,
    link: linkFunc
  };

  return directive;

  function linkFunc(scope) {
    let center = {
      latitude: 37.472189,
      longitude: -122.190191
    }

    scope.map = {
      "center": center,
      "zoom": 11
    }
  }
}

class MapController {
  constructor () {
    'ngInject';

    /*

    $scope.$watch(function(){
      return self.mapData;
    }, (newValue, oldValue) => {
      if ( newValue !== oldValue) {
        let bound = new google.maps.LatLngBounds();
        for (let index = 0; index < this.mapData.rows.length; index++) {
          bound.extend(new google.maps.LatLng(this.mapData.rows[index][9], this.mapData.rows[index][10]));
        }

        let center = bound.getCenter();

        $scope.map.center = {
          latitude: center.lat(),
          longitude: center.lng()
        };
      }
    }, true);
    */

    // "this.creation" is available by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();
  }
}
