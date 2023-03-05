import { NOT_EKLE, NOT_SIL, NOT_BELLEK, NOT_FAV, FAV_SIL } from "./actions";
import { toast } from "react-toastify";
const s10chLocalStorageKey = "s10ch";
const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
  fav: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};
const notify = (item) => toast(item);

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}
export function reducer(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      const newArr = { ...state, notlar: [...state.notlar, action.payload] };

      localStorageStateYaz(s10chLocalStorageKey, newArr);

      return newArr;

    case NOT_BELLEK:
      console.log(localStorageStateOku(s10chLocalStorageKey));
      return baslangicNotlariniGetir(s10chLocalStorageKey);

    case NOT_SIL:
      const notSil = {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, notSil);

      return notSil;

    case FAV_SIL:
      const favSil = {
        ...state,
        fav: state.fav.filter((item) => item.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, favSil);

      return favSil;

    case NOT_FAV:
      const contr = state.fav;
      if (!contr.find((item) => item.body === action.payload.body)) {
        localStorageStateYaz(s10chLocalStorageKey, {
          ...state,
          fav: [...state.fav, action.payload],
        });
        notify("Favorilere Eklendi");
        return { ...state, fav: [...state.fav, action.payload] };
      } else {
        notify("Aynısı Var :P");
        return state;
      }

    default:
      return state;
  }
}
