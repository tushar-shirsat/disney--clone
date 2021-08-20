import React, { useEffect,useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import db from '../firebase'

const Detail = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState();
  const history = useHistory();
  useEffect(() =>{
      db.collection("movies")
        .doc(id)
        .onSnapshot((doc) =>{
            if(doc.exists){
                setMovie(doc.data());
            }else{
                history.replace("/");
            }
        })
  },[])
  return (
    <Container>
      <Background>
        <img
          src={movie?.backgroundImg}
          alt="detail-backgaround"
        />
      </Background>
      <ImageTitle>
          <img src={movie?.titleImg} alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" alt="play-icon-black" />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-white.png" alt="play-icon-white" />
            <span>Trailer</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src="/images/group-icon.png" alt="group-icon" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>
          {movie?.subTitle}
      </SubTitle>

      <Desctiption>
        {movie?.description}
      </Desctiption>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: cacl(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items:center;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 56px;
    background: rgba(249,249,249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    
    &:hover{
        background: rgb(198,198,198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    cursor: pointer;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background: rgba(0,0,0,0.6);
    margin-right: 16px;
    span{
        font-size: 36px;
        color: #fff;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: #000;
`;

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`;

const Desctiption = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
`;