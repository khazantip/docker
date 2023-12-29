import "./Foto.css";

const Foto = ({ foto }) => {
  return (
    <div
      className="card"
      style={{
        padding: "12px",
        width: "280px",
        backgroundColor: "black",
        borderRadius: "10px",
      }}
    >
      <img
        src={foto.img_src}
        alt="фото"
        style={{
          display: "flex",
          maxHeight: "90px",
          aspectRatio: "1/1",
          padding: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <div
        className="data"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
          padding: "12px",
          width: "200px",
          height: "100px",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0", padding: "0" }}>Name: {foto.camera.name}</p>
        <p style={{ margin: "0", padding: "0" }}>
          Total_photos: {foto.rover.total_photos}
        </p>
        <p style={{ margin: "0", padding: "0" }}>Date: {foto.earth_date}</p>
        <p style={{ margin: "0", padding: "0" }}>Camera: {foto.camera.name}</p>
      </div>
    </div>
  );
};

export default Foto;
