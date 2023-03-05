import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const notlar = useSelector((myStore) => myStore.notlar);
  const nNotlar = notlar.sort((a, b) => new Date(b.date) - new Date(a.date));

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {nNotlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
