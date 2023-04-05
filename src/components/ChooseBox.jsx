function ChooseBox({ img, title, text }) {
  return (
    <div className="choose-box">
      <i className={img} style={{ color: "#130749" }}></i>
      <div className="choose-box__text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChooseBox;
