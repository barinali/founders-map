export class MainController {
  constructor () {
    'ngInject';

    this.csvData = null;
    this.csvObject = null;
    this.labelColumn = 0;
    this.latitudeColumn = 0;
    this.longitudeColumn = 0;

    this.seperator = ',';
  }

  submitCsv() {
    this.csvData = `Id;Company Name;Founder;City;Country;Postal Code; Street;Photo;Home Page;Garage Latitude;Garage Longitude
    1;Google;Larry Page & Sergey Brin;Mountain View;USA;CA 94043;1600 Amphitheatre Pkwy;https://s.yimg.com/uy/build/images/sohp/backgrounds/bottom5.jpg;http://google.com;37.457674;-122.163452
    2;Apple;Steve Jobs & Steve Wozniak;Cupertino;USA;CA 95014;1 Infinite Loop;https://s.yimg.com/uy/build/images/sohp/inspiration/bliss3.jpg;http://apple.com;37.3403188;-122.0581469
    3;Microsoft;Bill Gates;Redmond;USA;WA 98052-7329;One Microsoft Way;https://s.yimg.com/uy/build/images/sohp/hero/carlin-gill-valley3.jpg;http://microsoft.com;37.472189;-122.190191`;
    let rows = this.csvData.split('\n');

    let csvObject = {
      "headers": [],
      "rows": []
    }

    for (let index in rows) {
      index = parseInt(index);
      let row = rows[index];
      row = row.trim();
      let rowArr = row.split(this.seperator);

      if (!index) {
        csvObject.headers = rowArr;
      } else {
        csvObject.rows.push({ cells: rowArr });
      }
    }

    this.csvObject = csvObject;
  }

  resetCsv() {
    this.csvData = null;
    this.csvObject = null;
  }
}
