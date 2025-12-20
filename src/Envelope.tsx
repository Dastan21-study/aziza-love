import { useState } from "react";
import "./Envelope.css";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => setIsOpen(!isOpen);

  return (
    <div className="envelope-container">
      <div className={`scene ${isOpen ? "open" : ""}`} onClick={toggleEnvelope}>
        <div className="envelope"></div>
        <div className="flap"></div>

        <div className="letter">
          <h2>Моя Азиза,</h2>
          <p>
            Первый стих.<br />
            Я не могу не думать о тебе.<br />
            Дорогая моя родная,<br />
            без тебя жизнь была темней,<br />
            без тебя в жизни не было огней,<br />
            с тобой все поменялось,<br />
            стало светлее и теплей,<br />
            с тобой моя жизнь веселее стала,<br />
            спала грусть уныние печаль,<br />
            я понял вдруг что мне много в жизни и не надо,<br />
            лишь знать что тебе меня встречать,<br />
            и так тепло резко стало,<br />
            как будто ты сумела меня уже обнять,<br />
          </p>
          <p className="signature">— Твой Кумишка💓</p>
        </div>

        {!isOpen && <div className="hint">Нажми, чтобы открыть</div>}
      </div>
    </div>
  );
};

export default Envelope;
