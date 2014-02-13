window.rl_widget_cfg = {
    "id": "2ed67249-4004-48cd-9c18-7777b7b8f81b",
    "globalMasterAdvertiserId": "USA_17120",
    "config": {
        "domains": {
            "cdn": "static.rlcdn.net",
            "mms": "rlmms.com",
            "capture": "rlets.com",
            "internal": ["www.baycarpet.com"]
        },
        "platform": "USA",
        "debug": 0,
        "hipaa": 0
    },
    "products": [{
        "autoload": true,
        "config": {},
        "created_at": "2013-07-19T14:24:00-07:00",
        "cssFile": "/email/rl_email.css",
        "enabled": true,
        "id": "8764eb6c-f0b9-11e2-9680-15e5c4bfbc9d",
        "jsCode": "",
        "jsFile": "/email/rl_email.source.js",
        "name": "email",
        "site_config_id": "2ed67249-4004-48cd-9c18-7777b7b8f81b",
        "updated_at": "2013-07-19T14:24:00-07:00"
    }, {
        "autoload": true,
        "class_name": "Chat",
        "config": {
            "id": "2928280",
            "maid": "17120",
            "apex_chat_id": "USA2928280",
            "apex_chat_key": 117224
        },
        "created_at": "2014-01-07T11:10:01-08:00",
        "enabled": false,
        "id": "6c9964aa-4039-11e3-9de8-b01cf44459c8",
        "jsFile": "/chat/rl_chat.source.js",
        "name": "chat",
        "site_config_id": "2ed67249-4004-48cd-9c18-7777b7b8f81b",
        "updated_at": "2014-01-07T11:10:01-08:00"
    }, {
        "autoload": true,
        "config": {},
        "created_at": "2013-07-19T14:24:00-07:00",
        "cssFile": "",
        "enabled": true,
        "id": "875dc468-f0b9-11e2-8ff4-6cdcad544e9e",
        "jsCode": "",
        "jsFile": "/capture/rl_capture.source.js",
        "name": "capture",
        "site_config_id": "2ed67249-4004-48cd-9c18-7777b7b8f81b",
        "updated_at": "2013-07-19T14:24:00-07:00"
    }],
    "cvts": {
        "http://m.baycarpet.com": {
            "/contact-thank-you/thank-you.aspx?Sent=True": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350715",
                "value": "high"
            }]
        },
        "http://www.baycarpet.com": {
            "/pages/products/commercial.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350709",
                "value": "low"
            }],
            "/pages/brands.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350706",
                "value": "low"
            }],
            "/pages/specials/": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350705",
                "value": "low"
            }],
            "/pages/products/windows.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350707",
                "value": "low"
            }],
            "/pages/products/shop.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350710",
                "value": "low"
            }],
            "/pages/products/marine.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350708",
                "value": "low"
            }],
            "/pages/contact/": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350711",
                "value": "low"
            }, {
                "campaign_id": "USA_1492249",
                "cvtid": "11225936",
                "value": "low"
            }],
            "/pages/feedback/": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350712",
                "value": "low"
            }, {
                "campaign_id": "USA_1492249",
                "cvtid": "11225937",
                "value": "low"
            }],
            "/pages/products/index.php": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350713",
                "value": "low"
            }],
            "/contact-thank-you/thank-you.aspx": [{
                "campaign_id": "USA_1510617",
                "cvtid": "11350714",
                "value": "high"
            }]
        }
    },
    "replacements": {
        "USA_2955729": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184756954"
            }, {
                "original": "5165613222",
                "replace": "5167084861"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "SOCIAL": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "3474820540"
            }, {
                "original": "5165613222",
                "replace": "5162049378"
            }, {
                "original": "2127663774",
                "replace": "6464026875"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1434424": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1660551": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "OTHER": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "3474166212"
            }, {
                "original": "5165613222",
                "replace": "5162049387"
            }, {
                "original": "2127663774",
                "replace": "6468330533"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "DIRECT": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184129449"
            }, {
                "original": "5165613222",
                "replace": "5162049366"
            }, {
                "original": "2127663774",
                "replace": "2127866783"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1660550": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786231": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1943903": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786239": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786238": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786237": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786236": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786235": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786234": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786233": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786232": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1892465": {
            "strings": [{
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d589/589692/868923_8669393427.png\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "8669393427"
            }, {
                "original": "5165613222",
                "replace": "8669393427"
            }, {
                "original": "2127663774",
                "replace": "8778132585"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1892464": {
            "strings": [{
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d589/589692/868923_8669393427.png\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "8669393427"
            }, {
                "original": "5165613222",
                "replace": "8669393427"
            }, {
                "original": "2127663774",
                "replace": "8778132585"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_2955730": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184756954"
            }, {
                "original": "5165613222",
                "replace": "5167084861"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_2955731": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184756954"
            }, {
                "original": "5165613222",
                "replace": "5167084861"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_2955732": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184756954"
            }, {
                "original": "5165613222",
                "replace": "5167084861"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_1892466": {
            "strings": [{
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d589/589692/868923_8669393427.png\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "8669393427"
            }, {
                "original": "5165613222",
                "replace": "8669393427"
            }, {
                "original": "2127663774",
                "replace": "8778132585"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_786240": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "DIRECTORY": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "3477651066"
            }, {
                "original": "5165613222",
                "replace": "5162049379"
            }, {
                "original": "2127663774",
                "replace": "6464026590"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_924471": {
            "strings": [{
                "original": "XXX",
                "replace": "YYY"
            }, {
                "original": "src=\"/uploads/images/2515/images/Bay%20Carpet%20image.JPG\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/Bay%20Carpet%20image_5162844833.jpg\""
            }, {
                "original": "</body>",
                "replace": "<script src='http://widget.rlcdn.net/widget/rl_chatwidget.js'></script><script>var id ='USA2928280'; var rl_adid='17120'; var rl_key = '117224'; rl_chatinit(id, rl_adid, rl_key) ;</script></body>"
            }, {
                "original": "src=\"http://www.baycarpet.com/images/baycarpet_03.png\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/baycarpet_03_5162844833.png\""
            }, {
                "original": "src=\"../images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }, {
                "original": "src=\"images/homepage_03.jpg\"",
                "replace": "src=\"//rtsys.rtrk.com/campaign_images/d184/184344/homepage_03._5162844833.jpg\""
            }],
            "phone": [{
                "original": "7183665001",
                "replace": "7186185679"
            }, {
                "original": "5165613222",
                "replace": "5162844833"
            }, {
                "original": "2127663774",
                "replace": "2122034791"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "SEARCH": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "3474299396"
            }, {
                "original": "5165613222",
                "replace": "5168210996"
            }, {
                "original": "2127663774",
                "replace": "6464026833"
            }],
            "email": [{
                "original": "baycarpet@yahoo.com",
                "replace": "formmail"
            }]
        },
        "USA_2928280": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184739817"
            }, {
                "original": "5165613222",
                "replace": "5165968000"
            }, {
                "original": "9175605477",
                "replace": "9173382022"
            }],
            "email": null
        },
        "USA_2928281": {
            "strings": null,
            "phone": [{
                "original": "7183665001",
                "replace": "7184739817"
            }, {
                "original": "5165613222",
                "replace": "5165968000"
            }, {
                "original": "9175605477",
                "replace": "9173382022"
            }],
            "email": null
        }
    },
    "campaign_data": {
        "USA_1193435": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1126745": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_252105": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1429992": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_447428": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_754693": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_264676": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_698147": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_780578": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1315241": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_1510617": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_73437": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_522074": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_583467": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_935774": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_448035": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_428755": {
            "referrer_type": "PAID",
            "master_campaign_id": "428755",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1397520": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_565641": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_856942": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1027709": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1364352": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_733391": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1374259": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_397252": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1495818": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_318083": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_429207": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_123236": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_1467628": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_659567": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_985967": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_738719": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1077807": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_399821": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_237829": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_868923": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_681825": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1429512": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_962689": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_82485": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_912552": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1052008": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_635106": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_379935": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1297822": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1078581": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1354604": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_97109": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_1305123": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_922828": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_416031": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_1223626": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1450544": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1344944": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_346753": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_1420460": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_1400454": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_680818": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_212566": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_532106": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_759418": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_332738": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_1406706": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "SEARCH": {
            "referrer_type": "ORGANIC",
            "master_campaign_id": "1388315",
            "campaign_name": "Bay Carpet* 20130723"
        },
        "USA_1444399": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_365405": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_1492281": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1447478": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_1240052": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "SOCIAL": {
            "referrer_type": "ORGANIC",
            "master_campaign_id": "1388317",
            "campaign_name": "Bay Carpet* 20130723"
        },
        "DIRECT": {
            "referrer_type": "ORGANIC",
            "master_campaign_id": "1388318",
            "campaign_name": "Bay Carpet* 20130723"
        },
        "USA_1381368": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1333002": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_957438": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_444706": {
            "referrer_type": "PAID",
            "master_campaign_id": "444706",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1263605": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1203105": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1028361": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_549314": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_506068": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_1096464": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_589692": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_463146": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1513207": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_1314402": {
            "referrer_type": "PAID",
            "master_campaign_id": "1314402",
            "campaign_name": "Bay Carpet - Total Live Chat"
        },
        "USA_463345": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_131842": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_478017": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_348669": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1270335": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1474949": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_778046": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_898006": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1179423": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_430242": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_201747": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_639789": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1338534": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_942640": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_703609": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_224965": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_114271": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_707889": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_823925": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_303640": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1490360": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_289605": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1408891": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_716378": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_363281": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_105435": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_1467773": {
            "referrer_type": "PAID",
            "master_campaign_id": "1344944",
            "campaign_name": "Bay Carpet* 5/28/2013"
        },
        "USA_184344": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1116759": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1045577": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1158998": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "OTHER": {
            "referrer_type": "ORGANIC",
            "master_campaign_id": "1388319",
            "campaign_name": "Bay Carpet* 20130723"
        },
        "USA_332720": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_801410": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1339691": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_1244114": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1136778": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_277840": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1423800": {
            "referrer_type": "PAID",
            "master_campaign_id": "1315241",
            "campaign_name": "Bay Carpet* - Total Live Chat"
        },
        "USA_1005494": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_610889": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1284955": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1004769": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1358695": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_494598": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1153519": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_986803": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_1390943": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_891234": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_412911": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1372436": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_512283": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_483386": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_877557": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_1102627": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_382042": {
            "referrer_type": "PAID",
            "master_campaign_id": "332738",
            "campaign_name": "Bay Carpet - Display Ad"
        },
        "USA_602048": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_659587": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_620614": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "DIRECTORY": {
            "referrer_type": "ORGANIC",
            "master_campaign_id": "1388316",
            "campaign_name": "Bay Carpet* 20130723"
        },
        "USA_1468629": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_836613": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_816903": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_798997": {
            "referrer_type": "PAID",
            "master_campaign_id": "184344",
            "campaign_name": "Bay Carpet 20080508"
        },
        "USA_846169": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        },
        "USA_89739": {
            "referrer_type": "PAID",
            "master_campaign_id": "73437",
            "campaign_name": "Bay Carpet 20070429"
        },
        "USA_1492249": {
            "referrer_type": "PAID",
            "master_campaign_id": "589692",
            "campaign_name": "ReachCast"
        }
    }
}