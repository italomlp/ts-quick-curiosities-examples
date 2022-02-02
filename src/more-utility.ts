interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
console.log(cats.boris);

// ---------

function updateProfile(id: string, { name, age }: {name: string, age: number}) {
  return {
    id,
    personalInfo: {
      name,
      age
    },
  };
}

type UpdateProfileParams = Parameters<typeof updateProfile>;

type ProfileUpdatedParams = ReturnType<typeof updateProfile>;
