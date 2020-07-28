import React, {useEffect} from "react";
import {Layout} from "../Components/Layout";
import InfiniteScroll from "react-infinite-scroller";
import {useStore} from "../Store";
import {List, Spin} from "antd";
import {observer} from "mobx-react";


const  History = observer (()=> {
  const {HistoryStore} = useStore();

  const loadMore = () => {
    HistoryStore.find();
    console.log("````````````````");
    console.log(HistoryStore.list);
    console.log("````````````````");
  };
  useEffect(() => {
    console.log("进入组件");
    HistoryStore.find()
    console.log(HistoryStore.find());
    console.log(HistoryStore.list);

    console.log(HistoryStore.list);
    return () => {
      console.log("卸载");
      HistoryStore.reset();
    };
  }, []);
  return (
    <Layout>
      <h3>这里是history页面</h3>
      <div>
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={loadMore}
          hasMore={HistoryStore.isLoading && HistoryStore.hasMore}
          useWindow={true}
        >
          <List
            dataSource={HistoryStore.list}
            renderItem={(item,index )=> (
              <List.Item key={index}>
                <div>
                  <img src={
                    // @ts-ignore
                    item.attributes.url.attributes.url} alt='图片内容'/>
                </div>
                <div>
                  <h5>{
                    // @ts-ignore
                    item.attributes.filename}</h5>
                </div>
                <div>
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
      </div>
    </Layout>
  );
})

export {History};