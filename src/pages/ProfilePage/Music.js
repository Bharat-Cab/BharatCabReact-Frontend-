import React from 'react';
import './Music.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function Music() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };
  return (
    <div>
      <h1><b>Music</b></h1>
      <form action="#">
        <table className="Music-table">
          <tbody>
            <tr className="radio-item">
              <td>
                <input type="radio" name="playlist" id="playlist" />
              </td>
              <td>
                <label htmlFor="playlist">It's all about the playlist!</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="mood" id="mood" />
              </td>
              <td>
                <label htmlFor="mood">I'll jam depending on the mood</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="quiet" id="quiet" />
              </td>
              <td>
                <label htmlFor="quiet">Silence is golden</label>
              </td>
            </tr>
            <tr>
              <td><button type="submit">Save</button></td>
              <td><button type="button" onClick={handleBack}>Back</button></td>
            </tr>
          </tbody>
        </table>
        <br />
      </form>
    </div>
  );
}
