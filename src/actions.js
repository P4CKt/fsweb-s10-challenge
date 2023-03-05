import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const NOT_BELLEK = "NOT_BELLEK";
export const NOT_FAV = "NOT_FAV";
export const FAV_SIL = "FAV_SIL";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}
export function favEkle(not) {
  return { type: NOT_FAV, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}
export function favSil(notId) {
  return { type: FAV_SIL, payload: notId };
}
export function notBellek() {
  return { type: NOT_BELLEK };
}

export const favEkleAPI = (favNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", favNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch(favEkle(res.data.json));
      }
    })
    .catch((error) => console.log(error));
};
export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch(notEkle(res.data.json));
        console.log("eklendiii", res.data.json);
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.data));
        console.log("Silindiii", res.data.data);
      }
    })
    .catch((error) => console.log(error));
};
export const favSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(favSil(res.data.data));
        console.log("fav Silindiii", res.data.data);
      }
    })
    .catch((error) => console.log(error));
};
