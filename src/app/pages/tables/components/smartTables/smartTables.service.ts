import {Injectable} from '@angular/core';

@Injectable()
export class SmartTablesService {

  smartTableData = [
    {
      "External_id": 320288,
      "nd": "1/13/17",
      "name": "Bottle",
      "beer_type_name": "Lager",
      "brand_name": "Bud Light",
      "sum(Volume)": 16.16,
      "sum(price)": 150.45
    },
    {
      "External_id": 594287,
      "nd": "3/9/17",
      "name": "Draught",
      "beer_type_name": "IPA",
      "brand_name": "Alexander Keith's IPA",
      "sum(Volume)": 28.23,
      "sum(price)": 225.6
    },
    {
      "External_id": 7001646,
      "nd": "12/22/16",
      "name": "Bottle",
      "beer_type_name": "Blonde Ale",
      "brand_name": "Labatt 50",
      "sum(Volume)": 59.67,
      "sum(price)": 444.85
    },
    {
      "External_id": 40790,
      "nd": "2/21/17",
      "name": "Draught",
      "beer_type_name": "Cream Ale",
      "brand_name": "St Ambroise Cream Ale",
      "sum(Volume)": 3.364,
      "sum(price)": 44.77
    },
    {
      "External_id": 40790,
      "nd": "3/19/17",
      "name": "Draught",
      "beer_type_name": "Cream Ale",
      "brand_name": "St Ambroise Cream Ale",
      "sum(Volume)": 0.473,
      "sum(price)": 6.52
    },
    {
      "External_id": 7001823,
      "nd": "3/1/17",
      "name": "Draught",
      "beer_type_name": "Lager",
      "brand_name": "Budweiser",
      "sum(Volume)": 23.652,
      "sum(price)": 160.4
    },
    {
      "External_id": 1004914,
      "nd": "1/5/17",
      "name": "Bottle",
      "beer_type_name": "Blonde Ale",
      "brand_name": "Laurentide",
      "sum(Volume)": 6.270,
      "sum(price)": 148.77
    },
    {
      "External_id": 775907,
      "nd": "1/4/17",
      "name": "Draught",
      "beer_type_name": "Ale",
      "brand_name": "Archibald Chipie",
      "sum(Volume)": 0.591,
      "sum(price)": 8.0
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
