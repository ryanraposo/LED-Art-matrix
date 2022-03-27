import React from "react";

export const OneKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M64.7812 28.25V74H59V35.4688L47.3438 39.7188V34.5L63.875 28.25H64.7812Z" fill="white"/>
        </svg>
      ` }}>
      </div>
    </>
  );
};
export const TwoKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M75.5938 69.25V74H45.8125V69.8438L60.7188 53.25C62.5521 51.2083 63.9688 49.4792 64.9688 48.0625C65.9896 46.625 66.6979 45.3438 67.0938 44.2188C67.5104 43.0729 67.7188 41.9062 67.7188 40.7188C67.7188 39.2188 67.4062 37.8646 66.7812 36.6562C66.1771 35.4271 65.2812 34.4479 64.0938 33.7188C62.9062 32.9896 61.4688 32.625 59.7812 32.625C57.7604 32.625 56.0729 33.0208 54.7188 33.8125C53.3854 34.5833 52.3854 35.6667 51.7188 37.0625C51.0521 38.4583 50.7188 40.0625 50.7188 41.875H44.9375C44.9375 39.3125 45.5 36.9688 46.625 34.8438C47.75 32.7188 49.4167 31.0312 51.625 29.7812C53.8333 28.5104 56.5521 27.875 59.7812 27.875C62.6562 27.875 65.1146 28.3854 67.1562 29.4062C69.1979 30.4062 70.7604 31.8229 71.8438 33.6562C72.9479 35.4688 73.5 37.5938 73.5 40.0312C73.5 41.3646 73.2708 42.7188 72.8125 44.0938C72.375 45.4479 71.7604 46.8021 70.9688 48.1562C70.1979 49.5104 69.2917 50.8438 68.25 52.1562C67.2292 53.4688 66.1354 54.7604 64.9688 56.0312L52.7812 69.25H75.5938Z" fill="white"/>
        </svg>
      ` }}>
      </div>
    </>
  );
};

export const ThreeKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M54.2188 48.4062H58.3438C60.3646 48.4062 62.0312 48.0729 63.3438 47.4062C64.6771 46.7188 65.6667 45.7917 66.3125 44.625C66.9792 43.4375 67.3125 42.1042 67.3125 40.625C67.3125 38.875 67.0208 37.4062 66.4375 36.2188C65.8542 35.0312 64.9792 34.1354 63.8125 33.5312C62.6458 32.9271 61.1667 32.625 59.375 32.625C57.75 32.625 56.3125 32.9479 55.0625 33.5938C53.8333 34.2188 52.8646 35.1146 52.1562 36.2812C51.4688 37.4479 51.125 38.8229 51.125 40.4062H45.3438C45.3438 38.0938 45.9271 35.9896 47.0938 34.0938C48.2604 32.1979 49.8958 30.6875 52 29.5625C54.125 28.4375 56.5833 27.875 59.375 27.875C62.125 27.875 64.5312 28.3646 66.5938 29.3438C68.6562 30.3021 70.2604 31.7396 71.4062 33.6562C72.5521 35.5521 73.125 37.9167 73.125 40.75C73.125 41.8958 72.8542 43.125 72.3125 44.4375C71.7917 45.7292 70.9688 46.9375 69.8438 48.0625C68.7396 49.1875 67.3021 50.1146 65.5312 50.8438C63.7604 51.5521 61.6354 51.9062 59.1562 51.9062H54.2188V48.4062ZM54.2188 53.1562V49.6875H59.1562C62.0521 49.6875 64.4479 50.0312 66.3438 50.7188C68.2396 51.4062 69.7292 52.3229 70.8125 53.4688C71.9167 54.6146 72.6875 55.875 73.125 57.25C73.5833 58.6042 73.8125 59.9583 73.8125 61.3125C73.8125 63.4375 73.4479 65.3229 72.7188 66.9688C72.0104 68.6146 71 70.0104 69.6875 71.1562C68.3958 72.3021 66.875 73.1667 65.125 73.75C63.375 74.3333 61.4688 74.625 59.4062 74.625C57.4271 74.625 55.5625 74.3438 53.8125 73.7812C52.0833 73.2188 50.5521 72.4062 49.2188 71.3438C47.8854 70.2604 46.8438 68.9375 46.0938 67.375C45.3438 65.7917 44.9688 63.9896 44.9688 61.9688H50.75C50.75 63.5521 51.0938 64.9375 51.7812 66.125C52.4896 67.3125 53.4896 68.2396 54.7812 68.9062C56.0938 69.5521 57.6354 69.875 59.4062 69.875C61.1771 69.875 62.6979 69.5729 63.9688 68.9688C65.2604 68.3438 66.25 67.4062 66.9375 66.1562C67.6458 64.9062 68 63.3333 68 61.4375C68 59.5417 67.6042 57.9896 66.8125 56.7812C66.0208 55.5521 64.8958 54.6458 63.4375 54.0625C62 53.4583 60.3021 53.1562 58.3438 53.1562H54.2188Z" fill="white"/>
        </svg>
      ` }}>
      </div>
    </>
  );
};

export const FourKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M76.5312 58.6875V63.4375H43.6562V60.0312L64.0312 28.5H68.75L63.6875 37.625L50.2188 58.6875H76.5312ZM70.1875 28.5V74H64.4062V28.5H70.1875Z" fill="white"/>
        </svg>
      ` }}>
      </div>
    </>
  );
};

export const QKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M66.625 67.7812L78.1875 76.9375L74.125 80.6875L62.75 71.6562L66.625 67.7812ZM78.0312 48.8125V51.6875C78.0312 55.1042 77.6042 58.1667 76.75 60.875C75.8958 63.5833 74.6667 65.8854 73.0625 67.7812C71.4583 69.6771 69.5312 71.125 67.2812 72.125C65.0521 73.125 62.5521 73.625 59.7812 73.625C57.0938 73.625 54.625 73.125 52.375 72.125C50.1458 71.125 48.2083 69.6771 46.5625 67.7812C44.9375 65.8854 43.6771 63.5833 42.7812 60.875C41.8854 58.1667 41.4375 55.1042 41.4375 51.6875V48.8125C41.4375 45.3958 41.875 42.3438 42.75 39.6562C43.6458 36.9479 44.9062 34.6458 46.5312 32.75C48.1562 30.8333 50.0833 29.375 52.3125 28.375C54.5625 27.375 57.0312 26.875 59.7188 26.875C62.4896 26.875 65 27.375 67.25 28.375C69.5 29.375 71.4271 30.8333 73.0312 32.75C74.6354 34.6458 75.8646 36.9479 76.7188 39.6562C77.5938 42.3438 78.0312 45.3958 78.0312 48.8125ZM72.0625 51.6875V48.75C72.0625 46.0417 71.7812 43.6458 71.2188 41.5625C70.6771 39.4792 69.875 37.7292 68.8125 36.3125C67.75 34.8958 66.4583 33.8229 64.9375 33.0938C63.4167 32.3646 61.6771 32 59.7188 32C57.8646 32 56.1771 32.3646 54.6562 33.0938C53.1562 33.8229 51.8646 34.8958 50.7812 36.3125C49.6979 37.7292 48.8646 39.4792 48.2812 41.5625C47.6979 43.6458 47.4062 46.0417 47.4062 48.75V51.6875C47.4062 54.4167 47.6979 56.8333 48.2812 58.9375C48.8646 61.0208 49.6979 62.7812 50.7812 64.2188C51.8854 65.6354 53.1979 66.7083 54.7188 67.4375C56.2396 68.1667 57.9271 68.5312 59.7812 68.5312C61.7396 68.5312 63.4792 68.1667 65 67.4375C66.5208 66.7083 67.8021 65.6354 68.8438 64.2188C69.9062 62.7812 70.7083 61.0208 71.25 58.9375C71.7917 56.8333 72.0625 54.4167 72.0625 51.6875Z" fill="white"/>
        </svg>        
      `}}>
      </div>
    </>
  );
};

export const WKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M48.25 59.25L57.2812 27.5H61.6562L59.125 39.8438L49.4062 73H45.0625L48.25 59.25ZM38.9062 27.5L46.0938 58.625L48.25 73H43.9375L32.9062 27.5H38.9062ZM73.3438 58.5938L80.375 27.5H86.4062L75.4062 73H71.0938L73.3438 58.5938ZM62.3125 27.5L71.0938 59.25L74.2812 73H69.9375L60.5625 39.8438L58 27.5H62.3125Z" fill="white"/>
        </svg>       
      `}}>
      </div>
    </>
  );
};

export const EKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M75.1875 68.0938V73H51.0938V68.0938H75.1875ZM52.3125 27.5V73H46.2812V27.5H52.3125ZM72 47.0625V51.9688H51.0938V47.0625H72ZM74.875 27.5V32.4375H51.0938V27.5H74.875Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const RKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M46.2812 27.5H61.3438C64.7604 27.5 67.6458 28.0208 70 29.0625C72.375 30.1042 74.1771 31.6458 75.4062 33.6875C76.6562 35.7083 77.2812 38.1979 77.2812 41.1562C77.2812 43.2396 76.8542 45.1458 76 46.875C75.1667 48.5833 73.9583 50.0417 72.375 51.25C70.8125 52.4375 68.9375 53.3229 66.75 53.9062L65.0625 54.5625H50.9062L50.8438 49.6562H61.5312C63.6979 49.6562 65.5 49.2812 66.9375 48.5312C68.375 47.7604 69.4583 46.7292 70.1875 45.4375C70.9167 44.1458 71.2812 42.7188 71.2812 41.1562C71.2812 39.4062 70.9375 37.875 70.25 36.5625C69.5625 35.25 68.4792 34.2396 67 33.5312C65.5417 32.8021 63.6562 32.4375 61.3438 32.4375H52.3125V73H46.2812V27.5ZM72.875 73L61.8125 52.375L68.0938 52.3438L79.3125 72.625V73H72.875Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const AKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M63.125 31.5312L48.0625 73H41.9062L59.25 27.5H63.2188L63.125 31.5312ZM75.75 73L60.6562 31.5312L60.5625 27.5H64.5312L81.9375 73H75.75ZM74.9688 56.1562V61.0938H49.4062V56.1562H74.9688Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const SKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M70.5312 61.5C70.5312 60.4375 70.3646 59.5 70.0312 58.6875C69.7188 57.8542 69.1562 57.1042 68.3438 56.4375C67.5521 55.7708 66.4479 55.1354 65.0312 54.5312C63.6354 53.9271 61.8646 53.3125 59.7188 52.6875C57.4688 52.0208 55.4375 51.2812 53.625 50.4688C51.8125 49.6354 50.2604 48.6875 48.9688 47.625C47.6771 46.5625 46.6875 45.3438 46 43.9688C45.3125 42.5938 44.9688 41.0208 44.9688 39.25C44.9688 37.4792 45.3333 35.8438 46.0625 34.3438C46.7917 32.8438 47.8333 31.5417 49.1875 30.4375C50.5625 29.3125 52.1979 28.4375 54.0938 27.8125C55.9896 27.1875 58.1042 26.875 60.4375 26.875C63.8542 26.875 66.75 27.5312 69.125 28.8438C71.5208 30.1354 73.3438 31.8333 74.5938 33.9375C75.8438 36.0208 76.4688 38.25 76.4688 40.625H70.4688C70.4688 38.9167 70.1042 37.4062 69.375 36.0938C68.6458 34.7604 67.5417 33.7188 66.0625 32.9688C64.5833 32.1979 62.7083 31.8125 60.4375 31.8125C58.2917 31.8125 56.5208 32.1354 55.125 32.7812C53.7292 33.4271 52.6875 34.3021 52 35.4062C51.3333 36.5104 51 37.7708 51 39.1875C51 40.1458 51.1979 41.0208 51.5938 41.8125C52.0104 42.5833 52.6458 43.3021 53.5 43.9688C54.375 44.6354 55.4792 45.25 56.8125 45.8125C58.1667 46.375 59.7812 46.9167 61.6562 47.4375C64.2396 48.1667 66.4688 48.9792 68.3438 49.875C70.2188 50.7708 71.7604 51.7812 72.9688 52.9062C74.1979 54.0104 75.1042 55.2708 75.6875 56.6875C76.2917 58.0833 76.5938 59.6667 76.5938 61.4375C76.5938 63.2917 76.2188 64.9688 75.4688 66.4688C74.7188 67.9688 73.6458 69.25 72.25 70.3125C70.8542 71.375 69.1771 72.1979 67.2188 72.7812C65.2812 73.3438 63.1146 73.625 60.7188 73.625C58.6146 73.625 56.5417 73.3333 54.5 72.75C52.4792 72.1667 50.6354 71.2917 48.9688 70.125C47.3229 68.9583 46 67.5208 45 65.8125C44.0208 64.0833 43.5312 62.0833 43.5312 59.8125H49.5312C49.5312 61.375 49.8333 62.7188 50.4375 63.8438C51.0417 64.9479 51.8646 65.8646 52.9062 66.5938C53.9688 67.3229 55.1667 67.8646 56.5 68.2188C57.8542 68.5521 59.2604 68.7188 60.7188 68.7188C62.8229 68.7188 64.6042 68.4271 66.0625 67.8438C67.5208 67.2604 68.625 66.4271 69.375 65.3438C70.1458 64.2604 70.5312 62.9792 70.5312 61.5Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const DKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M58.5938 73H49.0938L49.1562 68.0938H58.5938C61.8438 68.0938 64.5521 67.4167 66.7188 66.0625C68.8854 64.6875 70.5104 62.7708 71.5938 60.3125C72.6979 57.8333 73.25 54.9375 73.25 51.625V48.8438C73.25 46.2396 72.9375 43.9271 72.3125 41.9062C71.6875 39.8646 70.7708 38.1458 69.5625 36.75C68.3542 35.3333 66.875 34.2604 65.125 33.5312C63.3958 32.8021 61.4062 32.4375 59.1562 32.4375H48.9062V27.5H59.1562C62.1354 27.5 64.8542 28 67.3125 29C69.7708 29.9792 71.8854 31.4062 73.6562 33.2812C75.4479 35.1354 76.8229 37.3854 77.7812 40.0312C78.7396 42.6562 79.2188 45.6146 79.2188 48.9062V51.625C79.2188 54.9167 78.7396 57.8854 77.7812 60.5312C76.8229 63.1562 75.4375 65.3958 73.625 67.25C71.8333 69.1042 69.6667 70.5312 67.125 71.5312C64.6042 72.5104 61.7604 73 58.5938 73ZM52.3125 27.5V73H46.2812V27.5H52.3125Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const FKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="103" rx="29" fill="white"/>
          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>
          <path d="M52.3125 27.5V73H46.2812V27.5H52.3125ZM71.375 47.9688V52.9062H51V47.9688H71.375ZM74.4688 27.5V32.4375H51V27.5H74.4688Z" fill="white"/>
        </svg>
      `}}>
      </div>
    </>
  );
};

export const BKeySvg: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg width="20" height="20" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">

          <rect width="120" height="103" rx="29" fill="white"/>

          <rect x="6" y="7" width="108" height="90" rx="29" fill="black"/>

          <path 
            d="M61.5 51.7188H49.9688L49.9062 46.875H60.375C62.1042 46.875 63.6146 46.5833 64.9062 46C66.1979 45.4167 67.1979 44.5833 67.9062 43.5C68.6354 42.3958 69 41.0833 69 39.5625C69 37.8958 68.6771 36.5417 68.0312 35.5C67.4062 34.4375 66.4375 33.6667 65.125 33.1875C63.8333 32.6875 62.1875 32.4375 60.1875 32.4375H51.3125V73H45.2812V27.5H60.1875C62.5208 27.5 64.6042 27.7396 66.4375 28.2188C68.2708 28.6771 69.8229 29.4062 71.0938 30.4062C72.3854 31.3854 73.3646 32.6354 74.0312 34.1562C74.6979 35.6771 75.0312 37.5 75.0312 39.625C75.0312 41.5 74.5521 43.1979 73.5938 44.7188C72.6354 46.2188 71.3021 47.4479 69.5938 48.4062C67.9062 49.3646 65.9271 49.9792 63.6562 50.25L61.5 51.7188ZM61.2188 73H47.5938L51 68.0938H61.2188C63.1354 68.0938 64.7604 67.7604 66.0938 67.0938C67.4479 66.4271 68.4792 65.4896 69.1875 64.2812C69.8958 63.0521 70.25 61.6042 70.25 59.9375C70.25 58.25 69.9479 56.7917 69.3438 55.5625C68.7396 54.3333 67.7917 53.3854 66.5 52.7188C65.2083 52.0521 63.5417 51.7188 61.5 51.7188H52.9062L52.9688 46.875H64.7188L66 48.625C68.1875 48.8125 70.0417 49.4375 71.5625 50.5C73.0833 51.5417 74.2396 52.875 75.0312 54.5C75.8438 56.125 76.25 57.9167 76.25 59.875C76.25 62.7083 75.625 65.1042 74.375 67.0625C73.1458 69 71.4062 70.4792 69.1562 71.5C66.9062 72.5 64.2604 73 61.2188 73Z" 
            fill="white"
          />
        </svg>


      `}}>
      </div>
    </>
  );
};
export const Fader: React.FC = (): JSX.Element => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        
        <svg width="28" height="106" viewBox="0 0 28 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="11.5" y="0.5" width="5" height="105" stroke="white"/>
          <g filter="url(#filter0_d_101_2)">
          <rect x="4" y="14" width="20" height="37" rx="5" fill="black"/>
          <rect x="5" y="15" width="18" height="35" rx="4" stroke="white" stroke-width="2"/>
          </g>
          <path d="M6 32H22.6008" stroke="white" stroke-width="2" stroke-linecap="square"/>
          <path d="M4.94945 22.9093H21.9034" stroke="white" stroke-linecap="square"/>
          <path d="M5.65586 27.1478H22.2566" stroke="white" stroke-linecap="square"/>
          <path d="M5.65586 19.024H22.6098" stroke="white" stroke-linecap="square"/>
          <path d="M6 40.8853H22.954" stroke="white" stroke-linecap="square"/>
          <path d="M6.70642 45.1238H23.3072" stroke="white" stroke-linecap="square"/>
          <path d="M6.70642 37H23.6604" stroke="white" stroke-linecap="square"/>
          <defs>
          <filter id="filter0_d_101_2" x="0" y="14" width="28" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_2"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_2" result="shape"/>
          </filter>
          </defs>
        </svg>


      `}}>
      </div>
    </>
  );
};

export const Knob: React.FC = () => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `

      <?xml version="1.0" encoding="UTF-8" standalone="no" ?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      
      <svg width="91" height="106" viewBox="0 0 91 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="45.5" cy="62.5" rx="32.5" ry="31.5" fill="white"/>
        <rect x="44" y="31" width="4" height="21" fill="black"/>
        <rect x="44" width="4" height="16" fill="white"/>
        <rect x="3.75283" y="108.214" width="4" height="16" transform="rotate(-134.99 3.75283 108.214)" fill="white"/>
        <rect width="4" height="16" transform="matrix(0.731235 -0.682126 -0.682126 -0.731235 85.9912 109.357)" fill="white"/>
        <path d="M90.5 62C90.5 87.6967 70.3377 108.5 45.5 108.5C20.6623 108.5 0.5 87.6967 0.5 62C0.5 36.3033 20.6623 15.5 45.5 15.5C70.3377 15.5 90.5 36.3033 90.5 62Z" stroke="white"/>
        <path d="M72 95H23.5H17.5L3.5 110L16 135H74L86.5 111.5L81.5 105.5L72 95Z" fill="black" stroke="black"/>
      </svg>


      `}}>

      </div>
    </>
  );
};