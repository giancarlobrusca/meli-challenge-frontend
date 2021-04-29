import "../styles/loader.scss";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
