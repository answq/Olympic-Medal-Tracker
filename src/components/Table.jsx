import React from "react";

const Table = ({ countries, setCountries }) => {
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);
  //금메달 기준 내림차순 정렬

  const deleteCountry = (nation) => {
    const filteredCountry = countries.filter((rest) => {
      if (rest.nation === nation) {
        return false;
      } else {
        return true;
      }
    });
    setCountries(filteredCountry);
  };

  return (
    <table className="medal-table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries.map((country) => (
          <tr>
            <td>{country.nation}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button className="delete" onClick={() => deleteCountry(country.nation)}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
