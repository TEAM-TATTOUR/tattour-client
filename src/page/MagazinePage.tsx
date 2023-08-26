import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { IcBackDark } from '../assets/icon';
import PageLayout from '../components/PageLayout';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { styled } from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const MagazinePage = () => {
  const [blockRecord, setBlockRecord] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const NOTION_PAGE_ID = '8bb5ffb084d54477a0bef50b43cdd055';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setBlockRecord(resJson);
      });
  }, []);

  const renderMagazineHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={
          <IcBackDark
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      ></Header>
    );
  };

  if (Object.keys(blockRecord).length) {
    return (
      <PageLayout renderHeader={renderMagazineHeader}>
        <St.NotionWrapper>
          <NotionRenderer blockMap={blockRecord} fullPage={true} hideHeader={true}></NotionRenderer>
        </St.NotionWrapper>
      </PageLayout>
    );
  }
  return null;
};

const St = {
  // Notion wrapper
  NotionWrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1.6rem;
    margin-bottom: 4rem;

    .notion-page {
      margin: 0 auto;
    }

    .notion-title {
      ${({ theme }) => theme.fonts.title_extrabold_24};
      margin: 0;
    }

    .notion b {
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    .notion b > span {
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    .notion-text {
      color: ${({ theme }) => theme.colors.gray8};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    .notion-callout {
      border: 0.05rem solid ${({ theme }) => theme.colors.gray1};
    }

    blockquote {
      border-left: 3px solid #ff3767;
    }

    .notion-quote b {
      // 24
      ${({ theme }) => theme.fonts.title_extrabold_24};
    }
  `,
};

export default MagazinePage;
