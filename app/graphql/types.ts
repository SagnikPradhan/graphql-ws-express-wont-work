import { list, objectType, queryField, stringArg } from "nexus";

const cats = [
  { id: "100", name: "Larry" },
  { id: "101", name: "Marry" },
  { id: "102", name: "Ginger" },
];

export const Cat = objectType({
  name: "Cat",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});

export const GetCats = queryField("GetCats", {
  type: list(Cat),
  resolve() {
    return cats;
  },
});

export const GetCat = queryField("GetCat", {
  type: Cat,
  args: { id: stringArg() },
  resolve(_, args, __) {
    return cats.find((cat) => cat.id === args.id);
  },
});
