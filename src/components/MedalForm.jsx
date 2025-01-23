import React from "react";
import { useState } from "react";

const MedalForm = ({ countries, setCountries }) => {
  const [countryInfo, setCountryInfo] = useState({
    nation: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const onInputChange = (e, keyName) => {
    setCountryInfo({ ...countryInfo, [keyName]: e.target.value }); //인풋창 변화
  };
  console.log(countryInfo);
  const addCountry = (e) => {
    e.preventDefault(); //새로고침방지

    setCountryInfo({
      nation: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={addCountry}>
          <div className="input-item">
            <label>국가명</label>
            <input
              type="text"
              value={countryInfo.nation}
              onChange={(e) => onInputChange(e, "nation")}
            />
          </div>

          <div className="input-item">
            <lable>금메달</lable>
            <input
              type="number"
              value={countryInfo.gold}
              onChange={(e) => onInputChange(e, "gold")}
            />
          </div>

          <div className="input-item">
            <label>은메달</label>
            <input
              type="number"
              value={countryInfo.silver}
              onChange={(e) => onInputChange(e, "silver")}
            />
          </div>

          <div className="input-item">
            <label>동메달</label>
            <input
              type="number"
              value={countryInfo.bronze}
              onChange={(e) => onInputChange(e, "bronze")}
            />
          </div>

          <div className="button-container">
            <button type="submit">국가 추가</button>
            <button type="button">업데이트</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MedalForm;
