import React from "react";

function BookRegistrationForm() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h4>Registrera dig först</h4>
      <div className="form-container">
        <form>
          <div className="mb-4">
            <input type="text" name="bookTitle" placeholder="bookTitle" />
          </div>
          <div className="mb-4">
            <input type="text" name="author" placeholder="author" />
          </div>{" "}
          <div className="mb-4">
            <input
              type="date"
              name="publisherYear"
              placeholder="publisherYear"
            />
          </div>
          <div className="mb-4">
            <textarea name="description"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookRegistrationForm;
