// import config from "../config";

// const needURL = `${config.API_ENDPOINTS}/needs`;
// const NeedApiService = {
//   getNeeds() {
//     return fetch(`${needURL}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${config.API_KEY}`,
//       },
//     }).then((res) => {
//       return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
//     });
//   },
//   postNeeds() {
//     return fetch(`${config.API_ENDPOINT}/needs`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         need_id: needId,
//         name,
//         tampon,
//         pad,
//         zipcode,
//       }),
//     }).then((res) =>
//       !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
//     );
//   },
// };

// export default NeedApiService;
