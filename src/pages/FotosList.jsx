import { serverResponse } from "../api/config";
import Foto from "../components/Foto";
import { useGetRoverPhotos } from "../hooks/useGetRoverPhotos";

// const map = (array, transformer /* : (param) => { return ...; } */) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     const transformedElement = transformer(array[i]);
//     result.push(transformedElement);
//   }
//   return result;
// };

const FotoList = () => {
  //const { data } = useGetRoverPhotos();
  const data = serverResponse;
  // const photoTransformer = (foto) => <Foto key={foto.id} foto={foto} />;
  // const transformedPhotos = map(data?.photos, photoTransformer);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgb(228, 189, 142)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "12px",
          color: "white",
        }}
      >
        {data?.photos.map((foto) => (
          <Foto key={foto.id} foto={foto} />
        ))}
      </div>
    </div>
  );
};
export default FotoList;
