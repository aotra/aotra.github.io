
fetch('https://openapi.tuyaeu.com/v1.0/iot-03/devices/0536720640f5200c12fb/commands', {
    method: 'POST',
    headers: {
        'sign_method': 'HMAC-SHA256',
        'client_id': '33x8yqvp3pmg4d89nd3c',
        't': '1664314315217',
        'mode': 'cors',
        'Content-Type': 'application/json',
        'sign': 'EB3CA32EFAB113A937D75F25F3582220988504E552D63444E8393E0F0A6F6D1A',
        'access_token': '5ef4eb4ca9877f587caa82d228a72650'
    },
    body: '{commands:[{code:switch_led,value:false}]}'
});