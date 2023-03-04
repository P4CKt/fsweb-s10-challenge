import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI, favEkleAPI } from "../actions";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";

export default function Post(props) {
  const { item } = props;
  const notify = () => toast("Not Silindii ");
  const dispatch = useDispatch();
  function handleSil(event) {
    event.preventDefault();
    dispatch(notSilAPI(item.id));
    notify();
    console.log(item.id);
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
  }

  function handleFav(event) {
    const yeniFav = {
      id: nanoid(),
      date: Date(),
      body: Object.values(item.body).join(""),
    };
    event.preventDefault();
    dispatch(favEkleAPI(yeniFav));
    toast("Fav Eklendii ");
    console.log(yeniFav.id);
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <div className="flex justify-between">
        <h1>
          {formatDistanceToNow(new Date(item.date), {
            addSuffix: true,
            locale: tr,
          })}
        </h1>
        <Box className="flex justify-end">
          <p>Favoriler Ekle</p>
          <Icon onClick={handleFav} sx={{ color: green[500], fontSize: 20 }}>
            add_circle
          </Icon>
        </Box>
      </div>
      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 mt-4 underline"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}
