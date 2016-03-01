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

    center = {
      latitude: 0,
      longitude: 0
    }

    scope.map = {
      center: center,
      zoom: 10
    }
  }
}

class MapController {
  constructor ($scope) {
    'ngInject';

    const self = this;
    this.scope = $scope;

    $scope.$watch(function(){
      return self.mapData;
    }, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.updateCenter();
      }
    }, true);

    $scope.$watch(function() {
      return self.latColumn;
    }, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.updateCenter();
      }
    });

    $scope.$watch(function() {
      return self.lngColumn;
    }, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.updateCenter();
      }
    });
  }

  updateCenter() {
    let bound = new google.maps.LatLngBounds();
    for (let index = 0; index < this.mapData.rows.length; index++) {
      let cells = this.mapData.rows[index].cells;
      bound.extend(new google.maps.LatLng(cells[this.latColumn], cells[this.lngColumn]));
    }

    let center = bound.getCenter();

    this.scope.map.center = {
      latitude: center.lat(),
      longitude: center.lng()
    };
  }
}
