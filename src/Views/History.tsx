import React, {useEffect} from "react";
import {Layout} from "../Components/Layout";
import InfiniteScroll from "react-infinite-scroller";
import {useStore} from "../Store";
import {List, message, Spin} from "antd";
import {observer} from "mobx-react";
import styled from "styled-components";


const Wrapper = styled.div`
max-width: 1600px;
margin: 0 auto;
padding: 10px 20px ;
`;
const Img = styled.img`
width: 100px ;
height: 120px ;
object-fit: cover;
`;

const History = observer(() => {
  const {HistoryStore} = useStore();

  const loadMore = () => {
    HistoryStore.find();
  };
  useEffect(() => {
    return () => {
      HistoryStore.reset();
    };
  }, [HistoryStore]);
  return (
    <Layout>
      <Wrapper>
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={loadMore}
          hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
          useWindow={true}
        >
          <List
            dataSource={HistoryStore.list}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <div>
                  <Img src={
                    // @ts-ignore
                    item.attributes.url.attributes.url} alt='图片内容'/>
                </div>
                <div>
                  <h5>名称</h5>
                  <h5>{
                    // @ts-ignore
                    item.attributes.filename}</h5>
                </div>
                <div>
                  <h5>链接</h5>
                  <a href={
                    // @ts-ignore
                    item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
                </div>
              </List.Item>
            )}>
            {HistoryStore.isLoading && HistoryStore.hasMore && (
              <div className="demo-loading-container">
                <Spin tip="加载中"/>
              </div>
            )}
          </List>
        </InfiniteScroll>
      </Wrapper>
    </Layout>
  );
});

export {History};