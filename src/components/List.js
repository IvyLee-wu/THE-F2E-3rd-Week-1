import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import jsSHA from 'jssha';

const List = (props) => {
  const [data, setData] = useState([]);
  const getCurrent = (x) => {
    props.current(x);
  };
  const [num, setNum] = useState(1);
  const addPage = () => {
    if (!isLast) {
      setNum(num + 1);
      props.clearReset();
    }
  };
  const subtractPage = () => {
    if (num > 1) {
      setNum(num - 1);
      props.clearReset();
    }
  };
  const [isLast, setIsLast] = useState(false);
  const getAuthorizationHeader = () => {
    let AppID = "1da9a83fdb34426584220c435d48b66a";
    let AppKey = "sw0INMZ4b6qO127EZLxbgCWch3Q";
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA("SHA-1", "TEXT");
    ShaObj.setHMACKey(AppKey, "TEXT");
    ShaObj.update("x-date: " + GMTString);
    let HMAC = ShaObj.getHMAC("B64");
    let Authorization =
      'hmac username="' +
      AppID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';
    return { Authorization: Authorization, "X-Date": GMTString };
  };
  useEffect(() => {
    if (props.isReset) {
      setNum(1);
    }
    const fetchData = (size = 0) => {
      console.log("inFetch", props.currentCity, props.filterName);
      let filter = "";
      let skip = "";
      if (props.filterName) {
        filter = `$filter=contains(Name, '${props.filterName}')&`;
      }
      if (size) {
        skip = `$skip=${16 * size}&`;
      }
      let url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${props.currentType}/${props.currentCity}?${skip}$top=16&${filter}$format=JSON`;
      fetch(url, {
        headers: getAuthorizationHeader()
      })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          console.log("myJson", myJson);
          let favList
          if(window.localStorage.getItem('myFav')){
            favList = JSON.parse(window.localStorage.getItem('myFav')).filter(e => e.type === props.currentType)[0].favList
            favList = favList.map(e => e.ID)
          }
          myJson = myJson.map(e => {
            for(let i = 0; i< favList.length; i++){
              if(e.ID === favList[i]){
                e.isFav = true
              }
            }
            return e
          })
          setData(myJson);
          if (
            myJson.length < 16 ||
            myJson.message === "API rate limit exceeded"
          ) {
            setIsLast(true);
          } else {
            setIsLast(false);
          }
        });
    };
    fetchData(num - 1);
    return () => {
      
    };
  }, [num, props.currentCity, props.filterName, props.isReset, props.currentType]);
  const addFav = (x) => {
    console.log('fav', x);
    let localStorage = []
    if(!window.localStorage.getItem('myFav')){
      localStorage = [
        {type: 'ScenicSpot', favList: []},
        {type: 'Restaurant', favList: []},
        {type: 'Hotel', favList: []},
        {type: 'Activity', favList: []},
      ]
      localStorage = localStorage.map(e => {
        if(e.type === props.currentType){
          e.favList.push(x)
          x.isFav = true
        }
        return e
      })
      window.localStorage.setItem('myFav', JSON.stringify(localStorage))
    }else{
      localStorage = JSON.parse(window.localStorage.getItem('myFav'))
      localStorage = localStorage.map(e => {
        if(e.type === props.currentType){
          let index = e.favList.findIndex(i => i.ID === x.ID);
          console.log('index',index);
          index === -1 ? (e.favList.push(x) && (x.isFav = true)) : (e.favList.splice(index, 1) && (delete x.isFav));
        }
        return e
      })
      console.log('localStorage',localStorage);
      window.localStorage.setItem('myFav', JSON.stringify(localStorage))
    }
    console.log('data',data);
  }
  return (
    <div>
      <div className="row g-2">
        {data.length
          ? data.map((x) => {
              return (
                <Card
                  name={x.Name}
                  key={x.ID}
                  img={x.Picture.PictureUrl1}
                  onClick={() => {
                    getCurrent(x);
                  }}
                  fav={() => {
                    addFav(x);
                  }}
                  isFav={x.hasOwnProperty('isFav') &&　x.isFav}
                />
              );
            })
          : "暫無資料"}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Pagination
          add={addPage}
          subtract={subtractPage}
          num={num}
          isLast={isLast}
        />
      </div>
    </div>
  );
};
export default List;
