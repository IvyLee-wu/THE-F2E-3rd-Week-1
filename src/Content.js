import React, { useState, useEffect } from "react";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Type from "./components/Type";
import bannerScenicSpot from './images/ScenicSpot.png';
import bannerRestaurant from './images/Restaurant.png';
import bannerHotel from './images/Hotel.png';
import bannerActivity from './images/Activity.png';

const Content = (props) => {
  const [change, setChage] = useState(false);
  useEffect(() => {
    if (props.isHome) {
      setChage(false);
    }
    return () => {
      
    };
  }, [props.isHome]);

  const [detail, setDetail] = useState({});
  const currentListItem = (x) => {
    console.log("x", x);
    setDetail(x);
    setChage(true);
  };
  const [city, setCity] = useState("Taipei");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState(false);
  const currentCity = (city) => {
    console.log("city", city);
    setCity(city);
  };
  const filterName = (filter) => {
    console.log("filter", filter);
    setFilter(filter);
  };
  const clickSearch = (boolin) => {
    setSearch(boolin);
  };
  const clearReset = () => {
    if (search) {
      setSearch(false);
    }
  };
  const [type, setType] = useState('ScenicSpot')
  const [banner, setBanner] = useState(bannerScenicSpot)
  const changeType = (clickType) => {
    if(type === clickType){
      console.log('same');
    }else{
      console.log(clickType);
      setType(clickType)
      if(clickType === 'ScenicSpot'){
        setBanner(bannerScenicSpot)
      }
      if(clickType === 'Restaurant'){
        setBanner(bannerRestaurant)
      }
      if(clickType === 'Hotel'){
        setBanner(bannerHotel)
      }
      if(clickType === 'Activity'){
        setBanner(bannerActivity)
      }
    }
  }
  const BannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div>
      <div style={BannerStyle} >
        <div className="container" style={{paddingBottom: '25px', paddingTop: '80px'}}>
          <Type 
            currentType={type}
            onClick={changeType}
            inListItem={change}
          />
          {
            !change ? (
              <Search
                currentCity={currentCity}
                select={city}
                filterName={filterName}
                clickSearch={clickSearch}
              />
            ) : ('')
          }
        </div>
      </div>
      <div className="content container-fluid">
        {!change ? (
          <List
            current={currentListItem}
            currentCity={city}
            filterName={filter}
            isReset={search}
            clearReset={clearReset}
            currentType={type}
          />
        ) : (
          <ListItem detail={detail} />
        )}
      </div>
    </div>
  );
};
export default Content;
