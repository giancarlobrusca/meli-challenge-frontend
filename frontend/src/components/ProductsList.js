export const ProductsList = ({ status, data }) => {
  console.log("DATA", data.results);
  return (
    <div
      style={{
        height: "calc(100vh - 36px)",
        width: "77%",
        margin: "auto",
        overflow: "auto",
      }}
    >
      {status === "loading" ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {data?.results.map((product, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "0 20px",
                  alignItems: "center",
                  height: "200px",
                  borderBottom: "1px solid lightgray",
                  background: "white",
                }}
                key={index}
              >
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "4px",
                    backgroundImage: `url(${product.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    justifySelf: "flex-start",
                    alignSelf: "flex-start",
                  }}
                >
                  <h2>{`$ ${product.price}`}</h2>
                  <p>{product.title}</p>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    width: "20%",
                    alignSelf: "flex-start",
                  }}
                >
                  {product.address.state_name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
