import _ from "lodash";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IPosts {
  key: number;
  poster: string;
  title: string;
  inStock: boolean;
}

const Context = createContext<
  Partial<{
    posts: IPosts[];
  }>
>({});
const usePostCtx = () => useContext(Context);

const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          key: 1,
          poster:
            "https://www.nicepng.com/png/full/179-1792843_gato-pixel-art-gif.png",
          title:
            "Lorem zh ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit.",
          inStock: true,
        },
        {
          key: 2,
          poster:
            "https://www.kindpng.com/picc/m/100-1008203_transparent-pacman-clipart-transparent-pixel-orange-hd-png.png",
          title:
            "Lorem ryq ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit.",
          inStock: false,
        },
        {
          key: 3,
          poster:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX/////CQoAAADPz8//AABhYWFBAAScBAcWAALsCAqMjIzHx8czAAP4CAoqAAM8PDz5+fnUwsKoBQhQUFDUBgkiIiLgBwnN09O8vLzKBgnimZm0BQilpaXc3NxwcHA6AAO/Bgjoh4fL2Njtc3Pm5uZUAARZWVk1NTUpLy9+gYEdAADlkJCztLQnAAIjAAAwAAPYtrbvbGxzAABra2sXKiqCAAAAERA5QkJKSkoAGhohJSVZH158AAACsklEQVR4nO3dXVPaQBSAYZogQlFBQAHlQ9HSglDst+3//2G96DBTzlmcsGSzu/F9r8PZ8wxXcQypVIiIiIiIiIiIKMomJzbNB3pS127S2LXwY2LVSE+yG5SkroUthAgRIkSIECFChAiLFrabsvST3V6LVI2yFI70TkcIU31AzTI1aGk56ExNmucq3Lyzq6cmfbCc1FGTTnIVXpzb7TXMTXiKECFChAgRIkSIEKFLYVVXLmH16Ub2YCIeKXwc77RS09buhJd90ewmm7Artn5VuNj97Ocz0WZqK1zKSVqYivpm4VouJe+JXxW+37321I5jVVahrrEsvbCOEGExIdwfQoRFhXB/CBEW1RsVZronjkfYl8Lne9mTiRiN8PlS1pT3xP1ZzELD32m+yG81jVuoqj4g/BdChP5CuA0hQn8h3IYQob8QbkMYsnBWrjtgXcb/XYhYmDGECMMPIcLwQ4gw/BAiDD+ECMMPIcLwQ4gw/BAiDD+ECMMPIcLwO0b4taOyfIY0v4Z6p0OEq2+T/5snsrp3oX4O+PvOzpODHnweq2m2z3K7FIbxtDpChAgRIkSIECFChAgPEvoGuhfeqXoOOef6uB+5CsetruynOuDWpbCujvslN3pZHCE0pH/P26nwQh3n/E063oUefpMdIUKECBEiRIgQIUKERQg7PdnQ0nOtJvX0e3OcC1+uZL/VEmtL4a2alPyRp7kX6vSLm6a5CVvFcwwNECJE6D2ECBH6DyFChP5DWEZh7VrV0B59kX6JahhC/cokQ4bb/k2Gj135xu0rk3CqLmr63jt7lsKB772zhxBh+CFEGH4IEYYfQoTh9xaFdw1VrVzCpK7S16x87529tqwy0h7DVTFnEpYrhPGHMP4Qxh/C+EMYfwjjD2H8lV/YflT5XomIiIiIiIiIKKj+AviN6kfLJl7KAAAAAElFTkSuQmCC",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit.",
          inStock: true,
        },
      ]);
    }, 100);
  });

  return (
    <Context.Provider value={{ posts }}>{children}</Context.Provider>
  );
};

export { PostsProvider, usePostCtx };
