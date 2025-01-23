import React from "react";
import { useState } from "react";

const Table = ({ countries, setCountries }) => {
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);
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
              <button>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
