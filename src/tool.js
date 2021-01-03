function day() {
  return new Date().getDay();
}
const dayList = ['日', '一', '二', '三', '四', '五', '六'];
function yyyy(setTime) {
  if (setTime) {
    return setTime.toLocaleDateString().slice(0, 4);
  }
  return new Date().toLocaleDateString().slice(0, 4);
}
function MM(setTime) {
  if (setTime) {
    return (setTime.getMonth() + 1 < 10 ? '0' : '') + (setTime.getMonth() + 1);
  }
  return (new Date().getMonth() + 1 < 10 ? '0' : '') + (new Date().getMonth() + 1);
}
function dd(setTime) {
  if (setTime) {
    return (setTime.getDate() < 10 ? '0' : '') + setTime.getDate();
  }
  return (new Date().getDate() < 10 ? '0' : '') + new Date().getDate();
}
function h() {
  return (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
}
function m() {
  return (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
}
// 換算時間為幾分鐘前、幾小時前、幾天前，或顯示日期
function getPublishTime(publishTime) {
  let nowTime = new Date().getTime();
  let time = nowTime - publishTime;
  if (time < 3600000) {
    return String(Math.round(time / 1000 / 60)) + '分前';
  } else if (time >= 3600000 && time < 86400000) {
    return String(Math.round(time / 1000 / 60 / 60)) + '小時前';
  } else if (time >= 86400000 && time < 259200000) {
    return String(Math.round(time / 1000 / 60 / 60 / 24)) + '天前';
  } else {
    return `${yyyy(new Date(publishTime))}/${MM(new Date(publishTime))}/${dd(new Date(publishTime))}`;
  }
}
// 更改頁面的 meta 的資料
function changeHeadInfo(title, image, description) {
  if (title) {
    document.title = title;
  }
  let metaList = document.getElementsByTagName('meta');
  metaList.forEach(item => {
    if (item.getAttribute('property') === 'og:title' && title) {
      item.content = title;
    }
    if (item.getAttribute('property') === 'og:image' && image) {
      item.content = image;
    }
    if (item.getAttribute('property') === 'og:description' && description) {
      item.content = description;
    }
  });
}

export default {
  day,
  dayList,
  yyyy,
  MM,
  dd,
  h,
  m,
  getPublishTime,
  changeHeadInfo
};
