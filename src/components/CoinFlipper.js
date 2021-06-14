import React, { Component, useEffect, useState } from 'react';
import '../styles/style.scss';

const CoinFlipper = () => {
  const [flip, setFlip] = useState([]);
  const [random, setRandom] = useState(null);
  const [str, setStr] = useState('');
  const [total, setTotal] = useState(0);
  const [tura, setTura] = useState(0);
  const [yazi, setYazi] = useState(0);

  const clickHandle = () => {
    setFlip(['front', 'back']);
    setStr('empty');

    setTimeout(() => {
      setFlip(['']);

      setTimeout(() => {
        setRandom(Math.floor(Math.random() * 2 + 1));
        result();
      }, 100);
    }, 2000);
  };

  const result = () => {
    console.log(random);
    setTimeout(() => {
      if (random > 0) {
        if (random >= 2) {
          setStr('front');
          setTotal(e => (e += 1));
          setTura(e => (e += 1));
        }

        if (random >= 1 && random < 2) {
          setStr('back');
          setTotal(e => (e += 1));
          setYazi(e => (e += 1));
        }
      }
    }, 100);
  };

  return (
    <div className="coin-flipper__container">
      <h1 className="title">Yazı mı yoksa Tura mı?</h1>
      <div className="coin">
        <div className={`coin__side coin__side--${flip[0]} `}></div>
        <div className={`coin__side coin__side--${flip[1]}`}></div>
        <div className={`coin__side coin__side-${str}`}></div>
      </div>
      <button className="coin-btn" onClick={clickHandle}>
        Tıkla
      </button>
      <div className="titles__container">
        <p>
          Toplam &nbsp;
          <span className="titles">{total}</span>
          &nbsp; atıştan
        </p>
        <p>
          <span className="titles">{yazi}</span> tane yazı
        </p>
        <p>
          <span className="titles">{tura}</span> tane tura
        </p>
      </div>
    </div>
  );
};

export default CoinFlipper;

// üst(coin__side--front) alt(coin__side--back)
