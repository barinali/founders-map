export function CsvFormatter() {
  'ngInject';

  let directive = {
    restrict: 'A',
    require: 'ngModel',
    link: linkFunc
  };

  return directive;

  function csvToObject(value) {
    value = `Id,Company Name,Founder,City,Country,Postal Code, Street,Photo,Home Page,Garage Latitude,Garage Longitude
    1,Google,Larry Page & Sergey Brin,Mountain View,USA,CA 94043,1600 Amphitheatre Pkwy,http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg,http://google.com,37.457674,-122.163452
    2,Apple,Steve Jobs & Steve Wozniak,Cupertino,USA,CA 95014,1 Infinite Loop,http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg,http://apple.com,37.3403188,-122.0581469
    3,Microsoft,Bill Gates,Redmond,USA,WA 98052-7329,One Microsoft Way,http://postdefiance.com/wp-content/uploads/2013/02/bill-gates-microsoft-young.jpg,http://microsoft.com,37.472189,-122.190191`;
    let rows = value.split('\n');

    let csvObject = {
      headers: [],
      rows: []
    }

    for (let index in rows) {
      index = parseInt(index);
      let row = rows[index];
      row = row.trim();
      let rowArr = row.split(',');

      if (!index) {
        csvObject.headers = rowArr;
      } else {
        csvObject.rows.push(rowArr);
      }
    }

    return csvObject;
  }

  function objectToCsv(value) {
    value.headers = value.headers.join(',');
    for (let index in value.rows) {
      value.rows[index] = value.rows[index].join(',');
    }

    value.rows = value.rows.join('\n');

    return value.headers + '\n' + value.rows;
  }

  function linkFunc(scope, el, attr, vm) {
    vm.$parsers.push(value => {
      return csvToObject(value);
    });

    vm.$formatters.push(value => {
      return objectToCsv(value);
    });
  }
}
