import React, { useState } from 'react';

function Modal() {
    const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
    return (
        <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className='text-[22px]'><span className='bg-red-500 text-white p-2 rounded-3xl mr-2'>NEW</span>Product</h1>
        <div>
          <label>
            Name: 
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={{ margin: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Description: 
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              style={{ margin: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL: 
            <input 
              type="text" 
              value={img} 
              onChange={(e) => setImg(e.target.value)} 
              style={{ margin: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Price: 
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              style={{ margin: '10px' }}
            />
          </label>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        {img && <img src={img} alt={name} style={imgStyle} />}
        <div className="card-container" style={containerStyle}>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px',
  overflow: 'hidden'
};

const imgStyle = {
  width: '100%',
  height: 'auto'
};

const containerStyle = {
  padding: '16px'
};
    


export default Modal