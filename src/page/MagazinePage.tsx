import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BackBtn from '../common/Header/BackBtn';
import { IcBackDark } from '../assets/icon';
import PageLayout from '../components/PageLayout';
import { NotionRenderer } from 'react-notion';

const MagazinePage = () => {
  const [blockRecord, setBlockRecord] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = '08534fc2f78349c98af75cb9f3c2cf53';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setBlockRecord(resJson);
      });
  }, []);

  const renderMagazineHeader = () => {
    return <Header transparent={true} leftSection={<IcBackDark />}></Header>;
  };

  if (Object.keys(blockRecord).length) {
    return (
      <PageLayout renderHeader={renderMagazineHeader}>
        <NotionRenderer blockMap={blockRecord} fullPage={true} hideHeader={true}></NotionRenderer>
      </PageLayout>
    );
  }
  return null;
};

export default MagazinePage;
