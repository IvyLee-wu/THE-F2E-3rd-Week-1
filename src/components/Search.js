import React, { useState } from "react";
const Search = (props) => {
  const cities = [
    { eng: "Kaohsiung", zh: "高雄市" },
    { eng: "Taipei", zh: "臺北市" },
    { eng: "Chiayi", zh: "嘉義市" },
    { eng: "Taichung", zh: "臺中市" },
    { eng: "HualienCounty", zh: "花蓮縣" },
    { eng: "YunlinCounty", zh: "雲林縣" },
    { eng: "PingtungCounty", zh: "屏東縣" },
    { eng: "KinmenCounty", zh: "金門縣" },
    { eng: "PenghuCounty", zh: "澎湖縣" },
    { eng: "YilanCounty", zh: "宜蘭縣" },
    { eng: "MiaoliCounty", zh: "苗栗縣" },
    { eng: "LienchiangCounty", zh: "連江縣" },
    { eng: "HsinchuCounty", zh: "新竹縣" },
    { eng: "NewTaipei", zh: "新北市" },
    { eng: "Taoyuan", zh: "桃園市" },
    { eng: "Keelung", zh: "基隆市" },
    { eng: "Hsinchu", zh: "新竹市" },
    { eng: "ChiayiCounty", zh: "嘉義縣" },
    { eng: "NantouCounty", zh: "南投縣" },
    { eng: "ChanghuaCounty", zh: "彰化縣" },
    { eng: "Tainan", zh: "臺南市" },
    { eng: "TaitungCounty", zh: "臺東縣" }
  ];
  const [option, setOption] = useState(props.select);
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  const input = React.createRef();
  return (
    <div className="search d-flex">
      <span className="selectPlace">
        <select className="form-select" value={option} onChange={handleSelect}>
          {cities.map((e, i) => (
            <option value={e.eng} key={i}>
              {e.zh}
            </option>
          ))}
        </select>
      </span>
      <span className="inputPlace">
        <input type="text" className="form-control" ref={input} />
      </span>
      <span className="btnPlace"
        onClick={() => {
          props.currentCity(option);
          props.filterName(input.current.value);
          props.clickSearch(true);
        }}
      >
        <button type="button" className="btn btn-danger">
          搜尋
        </button>
      </span>
    </div>
  );
};
export default Search;
