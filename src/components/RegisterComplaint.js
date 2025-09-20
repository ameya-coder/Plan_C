import React from 'react';
import OSMMap from '../components/OSMMap';
import Modal from '../components/Modal';
import './App3.css';

export default function RegisterComplaint({ setPage }) {
  const [open, setOpen] = React.useState(false);
  const [fileName, setFileName] = React.useState('');
  const fileInputRef = React.useRef(null);
  const [details, setDetails] = React.useState('');
  const [error, setError] = React.useState('');
  const [location, setLocation] = React.useState(null); // ✅ added state for map location

  const handleRegister = (e) => {
    e.preventDefault();
    if (!details.trim()) {
      setError('Please enter complaint details.');
      return;
    }
    setError('');
    setOpen(true);
  };

  return (
    <div className="page page-light">


      <div className="page-inner">
        <div className="page-title">REGISTER COMPLAINT</div>

        <div className="register-grid">
          <div className="register-left">
            <div className="avatar">👤</div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                setFileName(file ? file.name : '');
              }}
            />
            <button
              className="secondary wide"
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
            >
              Upload Image
            </button>
            {fileName ? <div style={{ fontSize: 12 }}>Selected: {fileName}</div> : null}
            <textarea
              className="input"
              rows="5"
              placeholder="Enter complaint details here"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              aria-invalid={!!error}
            />
            {error ? <div style={{ color: '#b00020', fontSize: 12 }}>{error}</div> : null}

            {/* ✅ Location input (read-only, auto-filled from map) */}
            <input
              className="input"
              placeholder="Location details"
              value={location ? `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}` : ''}
              readOnly
            />

            <button className="primary wide" onClick={handleRegister}>Register Complaint</button>
          </div>

          <div className="register-map">
            {/* ✅ Connected map */}
            <OSMMap height={420} value={location} onChange={setLocation} />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Registration Successful!" okText="OK">
        Your complaint has been successfully registered.
      </Modal>
    </div>
  );
}
