import React, { useEffect, useState } from "react";
import MobileCard from "./components/MobileCard";
import logo from './images/icon_logo.svg';

const Header = (props) => {
  const toHomePage = () => {
    props.logoClick();
  };
  const [myFavType, setMyFavType] = useState('ScenicSpot')
  const [myFavList, setMyFavList] = useState([])
  useEffect(()=>{
    let data = JSON.parse(window.localStorage.getItem('myFav'))
    data = data.filter(e => e.type === myFavType)[0].favList
    console.log('myFavType',myFavType);
    console.log('myFavList', data);
    setMyFavList(data)
    return(()=>{
        
    })
  },[myFavType]);
  const useRWD = () => {
    const [mobile, setMobile] = useState('mobile');
    const handleRWD = () => {
        if(window.innerWidth > 768){
          setMobile('PC');
        }else if (window.innerWidth > 576){
          setMobile('tablet');
        }else{
          setMobile('mobile');
        }
    }
    useEffect(()=>{
        window.addEventListener('resize', handleRWD);
        handleRWD(); 
        return(()=>{
            window.removeEventListener('resize', handleRWD);
        })
    },[]);
    return mobile;
  }
  const activeStyle = {
      color: '#fff',
      backgroundColor: '#dc3545',
      borderColor: '#dc3545',
      marginRight: '12px'
  }
  const normalStyle = {
      color: '#959595',
      backgroundColor: '#fff',
      borderColor: '#fff',
      marginRight: '12px'
  }
  return (
    <div>
      <div className="header">
        <span
          className="logo"
          onClick={() => {
            toHomePage();
          }}
        >
          <img src={logo} className="img" alt="logo" />
        </span>
        <span className="fav">
          <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fas fa-heart"></i>
            {
              useRWD() === 'mobile' ? '' : '我的最愛'
            }
            
          </button>
        </span>
      </div>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">我的最愛</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                <div className="d-flex typeList" style={{marginBottom: '5px'}}>
                  <span>
                      <button 
                          type="button" 
                          className="btn rounded-pill" 
                          onClick={()=>{setMyFavType('ScenicSpot')}}
                          style={myFavType === 'ScenicSpot' ? activeStyle : normalStyle}>景點</button>
                  </span>
                  <span>
                      <button 
                          type="button" 
                          className="btn rounded-pill" 
                          onClick={()=>{setMyFavType('Restaurant')}}
                          style={myFavType === 'Restaurant' ? activeStyle : normalStyle}>餐飲</button>
                  </span>
                  <span>
                      <button 
                          type="button" 
                          className="btn rounded-pill" 
                          onClick={()=>{setMyFavType('Hotel')}}
                          style={myFavType === 'Hotel' ? activeStyle : normalStyle}>旅宿</button>
                  </span>
                  <span>
                      <button 
                          type="button" 
                          className="btn rounded-pill" 
                          onClick={()=>{setMyFavType('Activity')}}
                          style={myFavType === 'Activity' ? activeStyle : normalStyle}>活動</button>
                  </span>
              </div>
              }
              <div className="row g-2">
                {
                  myFavList.length ? (
                    myFavList.map((x) => {
                      return (
                        <MobileCard
                          name={x.Name}
                          key={x.ID}
                          img={x.Picture}
                        />
                      );
                    })
                  ) : ('')
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
