import { useState } from "react";
import Draggable from "react-draggable"; 

const ImageComponent = ({
  component,
  isSelected,
  onClick,
  onUpdate,
  onDelete,
  isPreviewMode,
  style,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState(component.content);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target.result;
        setImageUrl(url);
        onUpdate({ content: url });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUrlSubmit = () => {
    onUpdate({ content: imageUrl });
    setIsEditing(false);
  };

  return (
    <Draggable disabled={isEditing || isPreviewMode}>
      <div
        className={`component image-component ${
          isSelected ? "selected" : ""
        }`}
        onClick={onClick}
        style={style}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Uploaded"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x200?text=Invalid+URL";
            }}
          />
        ) : (
          <div className="image-placeholder">No Image</div>
        )}

        {isSelected && !isPreviewMode && (
          <div className="component-controls">
            <button
              className="edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            <button className="delete-btn" onClick={onDelete}>
              ×
            </button>

            {isEditing && (
              <div className="image-edit-panel">
                <div className="form-group">
                  <label>Image URL:</label>
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={handleUrlChange}
                    placeholder="Paste image URL"
                  />
                  <button onClick={handleUrlSubmit}>Apply</button>
                </div>
                <div className="form-group">
                  <label>Or upload file:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default ImageComponent;
