import { useRef, useState } from 'react';

const Card = () => {
  const list = [{ color: 'orange' }, { color: 'green' }, { color: 'blue' }, { color: 'red' }];
  const CARD_WIDTH = 300;

  const cardRef = useRef(null);
  const [originTime, setOriginTime] = useState();
  const [start, setStart] = useState(0);
  const [dir, setDir] = useState('Auto');
  const [opacity, setOpacity] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [currIdx, setCurrIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [currElem, setCurrElem] = useState(null);
  const [transformX, setTransformX] = useState();

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setOriginTime(new Date());
    setStart(e.clientX);
    setCurrElem(e.target);
  };
  const handleOnDrag = (e) => {
    if (isDrag) {
      if (e.clientX !== 0 && start > e.clientX) {
        setDir('To Left');
      }
      if (e.clientX !== 0 && start < e.clientX) {
        setDir('To Right');
      }
      const currentSwipe = 1 - Math.abs(e.clientX - start) / CARD_WIDTH;
      setOpacity(currentSwipe);
      setTransformX(`translateX(${e.clientX - start}px)`);
    }
  };

  const handleDragEnd = (e) => {
    setIsDrag(false);
    setTransformX(0);
    let swiping = Math.abs(((e.clientX - start) / CARD_WIDTH) * 100);
    if (swiping === 0) alert('CLICK : ' + currElem.innerHTML);
    if (swiping > 50) {
      if (currIdx < 3) {
        setCurrIdx(currIdx + 1);
        setNextIdx(nextIdx + 1);
      } else {
        setCurrIdx(0);
        setNextIdx(1);
      }
    } else {
      setDir('Cancel');
    }

    //클릭 시작한 시간과 마지막 시간으로 속도를 구하기, 기준점은 어떤 기준으로 사용할까
    const elapsedTime = new Date().getTime() - originTime.getTime();
    const distance = e.clientX - start;
    const velocity = distance / elapsedTime;
  };

  return (
    <div className="wrapper">
      <p>{dir}</p>
      <ul ref={cardRef} onMouseUp={handleDragEnd} onMouseMove={handleOnDrag}>
        {list.map((item, index) => (
          <li
            key={index}
            className={item.color}
            onMouseDown={handleDragStart}
            onMouseMove={handleOnDrag}
            style={
              currIdx === index
                ? { opacity: 1, display: 'inline' }
                : isDrag && nextIdx === index
                ? { opacity: 1, display: 'inline' }
                : { opacity: 0, display: 'none' }
            }
          >
            {item.color}
          </li>
        ))}
        {isDrag ? (
          <span
            style={{ transform: transformX, opacity: opacity, backgroundColor: currElem.innerHTML }}
            className="black"
          >
            {currElem.innerHTML}
          </span>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default Card;
