// src/components/DoubtForm.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DoubtPage.css';
import Navbar from '../../components/Navbar/Navbar';

function DoubtPage() {
  const [batch, setBatch] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [detailedDesc, setDetailedDesc] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('batch', batch);
    formData.append('shortDesc', shortDesc);
    formData.append('detailedDesc', detailedDesc);
    if (screenshot) {
      formData.append('screenshot', screenshot);
    }

    try {
      const response = await axios.post('http://localhost:8080/doubts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setBatch('');
    setShortDesc('');
    setDetailedDesc('');
    setScreenshot(null);
  };

  return (
    <>
    <div className='bg'>
        <Navbar/>
        <section className='sec'>
        <div className='ds'>
        <div className="doubt-form-container">
      <h2>Stuck somewhere? Ask your doubts here!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            className="form-control"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option value="">Select Batch</option>
            <option value="batch1">Batch 1</option>
            <option value="batch2">Batch 2</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Describe your doubt in short"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Describe your doubt in detail"
            value={detailedDesc}
            onChange={(e) => setDetailedDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="screenshot">Add a screenshot of the error message or the code snippet here.</label>
          <input
            type="file"
            className="form-control-file"
            id="screenshot"
            onChange={(e) => setScreenshot(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ask Doubt</button>
        <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
      </form>
    </div>
    <div className='list-of-doubts-section'>
        <h2 className='heading-doubts'>Your Doubts</h2>
    </div>
        </div>
        </section>
    </div>
    </>
  );
}

export default DoubtPage;
