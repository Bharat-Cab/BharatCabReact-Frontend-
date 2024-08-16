import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatting.css'; // Import the CSS file

export default function Chatting() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1 style={{color:'blue',align:'center'}}><b>Chattiness</b></h1>
      <form action="#">
        <table className="chatting-table">
          <tbody>
            <tr className="radio-item">
              <td>
                <input type="radio" name="chats" id="chatterbox" />
              </td>
              <td>
                <label htmlFor="chatterbox">I'm a chatterbox!</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="chats" id="chatty" />
              </td>
              <td>
                <label htmlFor="chatty">I'm chatty when I feel comfortable</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="chats" id="quiet" />
              </td>
              <td>
                <label htmlFor="quiet">I'm the quiet type</label>
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
