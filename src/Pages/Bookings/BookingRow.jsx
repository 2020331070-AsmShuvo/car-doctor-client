import React from "react";

const BookingRow = ({ booking, handleDelete }) => {
  const { customerName, img, date, _id, price, email } = booking;

  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{email}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td> {date}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
