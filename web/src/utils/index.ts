import dayjs from 'dayjs';
import { sample } from 'lodash-es';

/**
 * @param {string} className
 * @description: 切换 html 类名
 */
export function toggleHtmlClass(className: string) {
  function add() {
    document.documentElement.classList.add(className);
  }

  function remove() {
    document.documentElement.classList.remove(className);
  }

  return {
    add,
    remove,
  };
}

/** @description: 获取当前时间 */
export const timeFix = () => {
  const hour = dayjs().hour();
  let result = '';
  if (hour < 9) {
    result = '早上好';
  } else if (hour <= 11) {
    result = '上午好';
  } else if (hour <= 13) {
    result = '中午好';
  } else if (hour <= 20) {
    result = '下午好';
  } else {
    result = '夜深了';
  }
  return result;
};

/** @description: 随机欢迎语 */
export const welcomeWords = () => {
  const words = [
    '休息一会儿吧',
    '准备吃什么呢?',
    '要不要打一把 LOL',
    '我猜你可能累了',
    '认真工作吧',
    '今天又是充满活力的一天',
  ];
  return sample(words);
};
