import React from "react";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { favSilAPI } from "../actions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Fav() {
  const fav = useSelector((myStore) => myStore.fav);
  const dispatch = useDispatch();
  const notify = () => toast("Favori Silindii ");

  function handleFavSil(event) {
    dispatch(favSilAPI(event.id));
    notify();
    console.log(event.id);
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
  }
  return (
    <div>
      {fav.map((not) => (
        <div key={not.id} className="beyazKutu p-8 pb-6 mb-4 text-sm">
          <h1>
            {formatDistanceToNow(new Date(not.date), {
              addSuffix: true,
              locale: tr,
            })}
          </h1>

          {not.body.split("|").map((li) => (
            <p className="mt-2" key={li}>
              - {li}
            </p>
          ))}
          <button onClick={() => handleFavSil(not)}>Favoriden Çıkar</button>
        </div>
      ))}
    </div>
  );
}
