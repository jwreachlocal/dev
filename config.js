window.rl_widget_cfg = {
  "id": "f51e0b33-c1ea-456d-a795-d94c4a598284",
  "globalMasterAdvertiserId": "USA_8967",
  "config": {
    "domains": {
      "cdn": "cdn.rlets-test.com",
      "capture": "rlets-test.com:3000",
      "internal": ["jwreachlocal.github.io"]
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
    },
    {
      "name": "email",
      "enabled": true,
      "autoload": true,
      "jsFile": "/email/rl_email.source.js",
      "jsCode": "",
      "cssFile": "/email/rl_email.css",
      "config": {}
    }
  ],
  "replacements": {
    "DIRECT": {
      "strings": [
        {"original": "foo", "replace": "cake"}
      ],
      "phone": [
        {"original": "8888888888", "replace": "7777777777"}
      ],
      "email": [
        {"original": "foo@bar.com", "replace": "cake@pops.com"}
      ]
    }
  },
  "cvts": {
    "http://jwreachlocal.github.io": {
      "/dev/form.html": [
        {"campaign_id": "USA_223", "cvtid": 556, "value": "high"}
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
    }
  },
  "blacklist": {
    "enabled": true,
    "items": {}
  }
};
