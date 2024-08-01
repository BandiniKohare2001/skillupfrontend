import React, { useState } from "react";
import { Modal, Box, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

const PostModal = ({ open, onClose }) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleVideoChange = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    // Implement post submission logic here
    console.log("Description:", description);
    console.log("File:", file);
    console.log("Video:", video);
    onClose(); // Close the modal after submitting
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <h3 className="my-2">Create New Post</h3>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <input
            accept="image/*"
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<AttachFileIcon />}
              sx={{ backgroundColor: 'gray' }}
            >
              Attach Image
            </Button>
          </label>
          <input
            accept="video/*"
            id="video-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleVideoChange}
          />
          <label htmlFor="video-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<VideoCameraFrontIcon />}
              sx={{ backgroundColor: 'gray' }}
            >
              Attach Video
            </Button>
          </label>
        </Box>
        <div>
          {file && <img src={file} alt="Preview" style={{ width: "100%", marginTop: 16 }} />}
          {video && <video src={video} controls style={{ width: "100%", marginTop: 16 }} />}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            // display: 'flex',
            // justifyContent: 'flex-end',
          }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default PostModal;
