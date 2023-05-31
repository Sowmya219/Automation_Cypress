var t = {
  id: "interceptedRequest423",
  browserRequestId: "32664.400",
  routeId: "1669723532939-207",
  request: {
    headers: {
      host: "hpcorp-ob-dev.default.api.hp.com",
      connection: "keep-alive",
      "content-length": "187",
      "sec-ch-ua":
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      accept: "application/json, text/plain, */*",
      "content-type": "application/json",
      "sec-ch-ua-mobile": "?0",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrYWRha3VudGxhLnNvd215YUBocC5jb20iLCJwLWFwcCI6InBhbGFkaW4tcG9ydGFsIiwiaXNzIjoidXJuOnBhbGFkaW46and0OnBvbGljeSIsInAtZGVmYXVsdC1wIjoicGFsYWRpbi1hcGkiLCJwLXVuYW1lIjoiS2FkYWt1bnRsYSBTb3dteWEiLCJwLWVudiI6ImRldiIsImF1ZCI6InBhbGFkaW4tcG9ydGFsIiwicC1zdWItaWQiOiIyODg1ZjkwYy1jZGNmLTQzNjktOTk2Ny05NTg0NWJkNzVmMmUiLCJwLWNsYWltcy1hbGxvdyI6eyJwLWlkIjoia2FkYWt1bnRsYS5zb3dteWFAaHAuY29tIiwicC1hcHAtcmVxdWVzdC1yZXNvdXJjZS1pZCI6IjdlZGZiYzM2LTlhZjgtNDYzMS04NzgzLWVlZDY5Y2YyYTVhYiIsInAtZm5hbWUiOiJLYWRha3VudGxhIiwicC1sbmFtZSI6IlNvd215YSIsInAtZW1wbG95ZWUtbnVtYmVyIjoiMjQxMTAyODQiLCJwLWNvdW50cnkiOiJJTiIsInAtbnQtYWNjb3VudCI6IkFVVEg6U293bXlLYWQiLCJwLWFwcC1hcHByb3Zlci1ncm91cC1pZCI6IjZmYWMxNjE1LTQ0MTgtNDY2My1hMjY5LWY5ODU3ZGQxYjNjOCIsIngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsicGFsYWRpbl9hZG1pbiIsInVzZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoicGFsYWRpbl9hZG1pbiIsIngtaGFzdXJhLXVzZXItaWQiOiIyODg1ZjkwYy1jZGNmLTQzNjktOTk2Ny05NTg0NWJkNzVmMmUiLCJ4LWhhc3VyYS10ZW5hbnQtaWQiOiJlY2JiOTViZi1iOWVkLTQ1ZWUtOGNkZi00Y2M3ZDFhN2E3MGMifSwicC10ZW5hbnQiOiJlY2JiOTViZi1iOWVkLTQ1ZWUtOGNkZi00Y2M3ZDFhN2E3MGMiLCJwLWVtYWlsIjoia2FkYWt1bnRsYS5zb3dteWFAaHAuY29tIiwiaWF0IjoxNjY5NzIzNTM2LCJleHAiOjE2Njk3NDE1MzZ9.E769yoFUc0FxXVbcq3-9vdn17VYd85Ouu4upVlY2ym8",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://paladin-portal-dev.corp.hpicloud.net/",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
    },
    url: "https://hpcorp-ob-dev.default.api.hp.com/paladin-config-service/dev/apigee/apps/create",
    method: "POST",
    httpVersion: "1.1",
    body: {
      displayName: "behv-test-app",
      shortName: "behv-test-short-applyern",
      products: [],
      attributes: [
        {
          name: "app-type",
          value: "service",
        },
      ],
      tenantId: "ecbb95bf-b9ed-45ee-8cdf-4cc7d1a7a70c",
    },
    responseTimeout: 30000,
  },
  state: "Complete",
  requestWaited: true,
  responseWaited: true,
  subscriptions: [],
  response: {
    headers: {
      date: "Tue, 29 Nov 2022 12:06:26 GMT",
      "content-type": "application/json; charset=utf-8",
      "content-length": "150",
      connection: "keep-alive",
      "x-amzn-requestid": "dc2b4d68-e35c-406c-be49-37abb7238d00",
      "access-control-allow-origin": "*",
      "x-amzn-remapped-content-length": "150",
      "x-amz-apigw-id": "cXNV7F7iPHcFoDA=",
      "x-amzn-trace-id": "Root=1-6385f5bf-68107dfc02024633200e34a9;Sampled=0",
      "x-cache": "Miss from cloudfront",
      via: "1.1 12092b1d863b1b4b20da0d09effe7b36.cloudfront.net (CloudFront)",
      "x-amz-cf-pop": "SIN2-P2",
      "x-amz-cf-id": "MEt5ieHD7Z5G0LTnW8b6a0bAJ_B9unKnuqU9E5tUv15MUG8aggWBMQ==",
    },
    url: "https://hpcorp-ob-dev.default.api.hp.com/paladin-config-service/dev/apigee/apps/create",
    method: null,
    httpVersion: "1.1",
    statusCode: 200,
    statusMessage: "OK",
    body: {
      responseData: {
        message: "Successfully created or updated the app",
        clientId: "oXmz3j6uOcsn36TV6WY4XBTAlsvE1k4w",
        clientSecret: "CdfOAXUjTZZQJhYE",
      },
    },
  },
};

console.log(t.response.body.responseData.clientId);

var arr1 = "john".split("");
// console.log(arr1);
var arr2 = arr1.reverse();
// console.log(arr1);
// console.log(arr2);
var arr3 = "jones".split("");
arr2.push(arr3);
console.log(arr2);
console.log(arr3);
console.log(arr1);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

var s = "programming",
  a = [];
var s1 = s.split("");
s1.forEach((a1) => {
  if (!a.includes(a1)) {
    a.push(a1);
  }
});
a = a.join("");
// for (let i = 0; i < s.length; i++) {
//   for (let j = i + 1; j < s.length; j++) {
//     if (!a.includes(s[j])) {
//       a.push(s[i]);
//       // s[j] = 0;
//     }
//   }
// }
console.log(a);
console.log(typeof null);
