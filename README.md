# Notifi Test

This browser extension uses the Notifi gql API to subscribe to new messages and send push notifications to the browser.

![Notifi Test landing screen](https://github.com/zaindewsi/notifi-test/blob/main/docs/get-started.png)

## Get Started

```
git clone git@github.com:zaindewsi/notifi-test.git
cd notifi-test
npm install
npm run build
```

## Use with chrome

- go to `chrome://extensions`
- Enable developer mode
- Click the `Load unpacked` button and select the extension `build` directory

## Use with firefox

- Go to `about:debugging#/runtime/this-firefox`
- Click `Load temporary addon`
- Select the `manifest.json` file from the `build` directory

## Notes

- If you have already disabled notifications, you may need to manually enable them in the browser
- You also need give your browser permission to send notification through system preferences and/or windows settings
- If notifications come in too frequently, they may only appear in the notification center without a banner popping up
