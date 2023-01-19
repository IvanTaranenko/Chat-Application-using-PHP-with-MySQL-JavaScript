// function getImagesOld(pageNumberEl) {
//     // $.ajax("https://repetitora.net/api/JS/Images?page=${pageNumberEl}&account=3", {
//   const promise = $.ajax("https://repetitors.net/api/JS/Images?page=${pageNumberEl}&account=3");
//   return promise;
//
// };

// function getImages(pageNumberEl) {
//     // $.ajax("https://repetitora.net/api/JS/Images?page=${pageNumberEl}&account=3", {
//   const promise = axios.get("https://repetitora.net/api/JS/Images?page=${pageNumberEl}&account=3");
//   return promise.then((data) => {
//       return data;
//     });
//
// };
function getImages(pageNumberEl) {
    // $.ajax("https://repetitora.net/api/JS/Images?page=${pageNumberEl}&account=3", {
  const promise = axios.get("https://repetitora.net/api/JS/Tasks? ");
  return promise.then((data) => {
      return data;
    });

};