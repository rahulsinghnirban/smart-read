import React from "react";
import "../DialogBox.css";

function DialogBox() {
  return (
    <div className="dialog-box-overlay">
      <div className="dialog-box">
        {/* CLOSE BUTTON START  */}
        <span
          style={{ backgroundColor: "white", color: "black", padding: "0 5px" }}
          className="close-button"
        >
          <span>X</span>
        </span>
        {/* CLOSE BUTTON END */}
        {/* DIALOG BOX CONTENT START */}
        <div className="dialog-box-content">
          <h1>Book Information</h1>
        </div>
        <div className="dialog-box-book-content">
          {/* BOOK IMAGE START */}
          <div className="dialog-box-book-image-container">
            {/* <img
            src="cover-image-url.jpg"
            alt="Book Cover"
            className="book-cover"
            /> */}
          </div>
          {/* BOOK IMAGE END */}
          {/* BOOK DETAILS START */}
          <div className="book-details">
            <div className="book-detail">
              <span className="detail-title">Title</span>
              <span className="detail-content">Romeo and Juliet</span>
            </div>
            <div className="book-detail">
              <span className="detail-title">Authors</span>
              <span className="detail-content">William Shakespeare</span>
            </div>
            <div className="book-detail">
              <span className="detail-title">Language</span>
              <span className="detail-content">en</span>
            </div>
            <div className="book-detail">
              <span className="detail-title">Downloads</span>
              <span className="detail-content">71135</span>
            </div>
            <div className="book-detail">
              <span className="detail-title">Format</span>
              <span className="detail-content">EPUB</span>
            </div>
          </div>
          {/* BOOK DETAILS END */}
        </div>
        {/* BUTTONS START */}
        <div className="dialog-box-buttons">
          <button className="download-button">Read Book</button>
          <button className="wishlist-button">Add to Wishlist</button>
        </div>
        {/* BUTTONS END */}
        {/* DIALOG BOX CONTENT END */}
      </div>
    </div>
  );
}

export default DialogBox;
