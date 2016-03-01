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
