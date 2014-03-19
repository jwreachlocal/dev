window.rl_widget_cfg = {
  "id": "f51e0b33-c1ea-456d-a795-d94c4a598284",
  "globalMasterAdvertiserId": "USA_8967",
  "config": {
    "domains": {
      "cdn": "cdn.rlets-test.com",
      "capture": "rlets-test.com:3000",
      "internal": ["jwreachlocal.github.io", "localhost.rtrk.com"]
    },
    "platform": "USA",
    "debug": 0,
    "hipaa": 0,
    "optOut": null
  },
  "products": [
    {
      "name": "capture",
      "enabled": true,
      "autoload": true,
      "jsFile": "/capture/rl_capture.source.js",
      "jsCode": "",
      "cssFile": "",
      "config": {}
    }/*,
    {
      "name": "email",
      "enabled": true,
      "autoload": true,
      "jsFile": "/email/rl_email.source.js",
      "jsCode": "",
      "cssFile": "/email/rl_email.css",
      "config": {}
    }*/
  ],
  "replacements": {
    "DIRECT": {
      "strings": [
        {"original": "foo", "replace": "cake"},
        {"original": "\\(2663\\)", "replace": ""},
        {"original": "('http://www.chileunderground.com/wp-content/uploads/2011/01/NanasB.png')", "replace": "(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgUG6e-CYU-i8zXBpB_FSCYTmY2Amh_tJAmYhYzXVxJgUVjpZgrg)"}
      ],
      "phone": [
        {"original": "8888888888", "replace": "7777777777"},
        {"original": "0245787344", "replace": "0123456789"},
        {"original": "4903097808888", "replace": "1234567891234"},
        // {"original": "011872703", "replace": "987654321"},
        {"original": "4082506672", "replace": "1111111111"},
        {"original": "6505590440", "replace": "2222222222"},
        {"original": "5106759646", "replace": "3333333333"},
        {"original": "003211872703#", "replace": "0032 12345678#"},
        {"original": "011872703#", "replace": "011 223 344#"}
      ],
      "email": [
        {"original": "foo@bar.com", "replace": "cake@pops.com"}
      ]
    }
  },
  "cvts": {
    "http://jwreachlocal.github.io": {
      "/dev/forms.html": [
        {"campaign_id": "USA_12345", "cvtid": 556, "value": "high"}
      ]
    },
    "http://localhost.rtrk.com": {
      "/index.html": [
        {"campaign_id": "USA_54632", "cvtid": 444, "value": "low"},
        {"campaign_id": "USA_12345", "cvtid": 555, "value": "low"}
      ],
      "/foo/test.html": [
        {"campaign_id": "USA_12345", "cvtid": 666, "value": "low"}
      ],
      "/foo": [
        {"campaign_id": "USA_12345", "cvtid": 987, "value": "low"}
      ],
      "/foo/bar": [
        {"campaign_id": "USA_123451", "cvtid": 777, "value": "high"}
      ]
    }
  },
  "campaign_data": {
    "DIRECT": {
      "referrer_type": "ORGANIC",
      "master_campaign_id": "1226468",
      "campaign_name": "Apple Annies Restaurant 20130121"
    },
    "OTHER": {
      "referrer_type": "ORGANIC",
      "master_campaign_id": "987654321",
      "campaign_name": "Apple Annies Restaurant foozball"
    },
    "USA_12345": {
      "referrer_type": "ORGANIC",
      "master_campaign_id": "987654300",
      "campaign_name": "Apple Annies Restaurant foozball"
    }
  },
  "blacklist": {
    "enabled": true,
    "items": {}
  }
};
