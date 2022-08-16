import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const Menu = () => {
  return (
    <>
      <motion.div
        className="menu-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="menu-box">
          <div className="album-container">
            <h1>專輯列表</h1>
            <div className="album-box">
              <div className="album-inform">
                <p>靈魂出竅 Outta Body / 2020-07</p>
                <div className="album album-01" />
              </div>
              <div className="album-inform">
                <p>Y.S.G Mixtape / 2012-02</p>
                <div className="album album-02" />
              </div>
              <div className="album-inform">
                <p>冒險王Mixtape / 2009-08</p>
                <div className="album album-03" />
              </div>
            </div>
          </div>
          <div className="intro">
            <h1>瘦子 E.SO</h1>
            <div className="eso-intro" />
            <div className="intro-text">
              <p>
                頑童MJ116核心人物 – E.SO 瘦子a.k.a冒險王 12歲就開始接觸Hip
                Hop音樂；在尚未成立頑童之前，就已經有相當多的饒舌創作經驗。瘦子練就一口獨特的抑揚頓挫饒舌特色，以及充滿自我風格的歌詞創作，堪稱新一代年輕饒舌天才，備受許多音樂界前輩們的青睞。
                2012一直以頑童MJ116為重的E.SO 瘦子推出 E.SO『Y.S.G
                Mixtape』在華語嘻哈圈造成極大的迴響，雖未正式線上發行，但透過各大通路販售並造成搶購，其銷售量初估突破一萬五千張之譜
                當年更趁勝以頑童MJ116之名推出Solo單曲「Just
                Believe」趕在服兵役前發行
                ＭＶ至今在各大平台上累積了千萬的點擊率，實為當年的華語嘻哈樂壇的人氣指標
                2016年與MC
                HOTDOG熱狗與張震嶽合組兄弟本色團體，並展開世界巡迴演唱會
                足跡踏遍亞洲、歐洲、美國，每場都吸引萬人參與，共計21場次
                期間發表的單曲「迷途羔羊」與「超大行李」都由E.SO 瘦子 擔當挑大樑
                成績不俗，皆有近千萬的點擊率，傳唱率極高 E.SO 瘦子 同年也受Dizzy
                Dizzo邀請合作單曲「誰愛誰」，一推出造成轟動ＭＶ點擊率
                更有九百多萬次的點擊
                2017年更受天后張惠妹的欽點力邀合作，推出了單曲「Whatever
                你說了算」，此單曲
                獲得媒體與大眾的一致好評，MV點擊率更有六百萬的好成績
                2018年回歸頑童MJ116 發行了團體專輯 「幹大事 BIG
                THING」在華語音樂界創造了
                許多佳績，專輯更獲得第29屆流行音樂金曲獎榮獲「最佳演唱組合獎」的殊榮肯定
                其中也收錄了 E-So 瘦子
                的個人SOLO單曲「脫罪」、與「地痞」，這兩首單曲除ＭＶ
                擁有百萬點擊率外，更在各大ＫＴＶ的排行榜上高居點播榜單，並展開中國巡迴，每場都吸引五千人次人參與，共計15場次
                2019年頑童MJ116發行團體專輯 「少年董
                DON」，其中單曲「走跳」入圍金曲獎「最佳演唱組合」
                並展開北美巡演8場次 7城市
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
