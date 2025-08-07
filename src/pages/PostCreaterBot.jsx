import React, { useRef, useState } from 'react';

const PostCreaterBot = () => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [text, setText] = useState('Your Insta Post');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(32);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    // Draw text
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontSize}px sans-serif`;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(text, width / 2, height / 2);

    const link = document.createElement('a');
    link.download = 'insta-post.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  // Update canvas preview
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(text, width / 2, height / 2);
  }, [bgColor, text, textColor, fontSize, width, height]);

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Insta Post Maker</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          Background Color:{' '}
          <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
        </label>
        <label style={{ marginLeft: 16 }}>
          Text Color:{' '}
          <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Text:{' '}
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            style={{ width: 200 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Font Size:{' '}
          <input
            type="number"
            min={10}
            max={100}
            value={fontSize}
            onChange={e => setFontSize(Number(e.target.value))}
            style={{ width: 60 }}
          /> px
        </label>
        <label style={{ marginLeft: 16 }}>
          Width:{' '}
          <input
            type="number"
            min={100}
            max={1080}
            value={width}
            onChange={e => setWidth(Number(e.target.value))}
            style={{ width: 60 }}
          /> px
        </label>
        <label style={{ marginLeft: 16 }}>
          Height:{' '}
          <input
            type="number"
            min={100}
            max={1080}
            value={height}
            onChange={e => setHeight(Number(e.target.value))}
            style={{ width: 60 }}
          /> px
        </label>
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          border: '1px solid #ccc',
          display: 'block',
          marginBottom: 16,
          background: bgColor,
          maxWidth: '100%',
        }}
      />
      <button onClick={handleDownload}>Download Post</button>
    </div>
  );
};

export default PostCreaterBot;