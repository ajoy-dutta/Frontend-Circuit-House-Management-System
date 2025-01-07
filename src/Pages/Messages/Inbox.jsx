import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const Inbox = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch contact data from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/contact/");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContacts();
  }, []);

  // Open modal and set the selected message
  const openModal = (message) => {
    setSelectedMessage(message);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMessage("");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl text-center font-extrabold text-gray-700 mb-8">
        All Messages
      </h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full text-left border-collapse bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-300 px-4 py-2">SLNo</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Messages</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {new Date(contact.created_at).toLocaleDateString()}
                </td>
                <td className="border border-gray-200 px-4 py-2">{contact.name}</td>
                <td className="border border-gray-200 px-4 py-2">{contact.phone}</td>
                <td className="border border-gray-200 px-4 py-2">{contact.email}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <div
                    onClick={() => openModal(contact.message)}
                    className="btn btn-xs btn-info"
                  >
                    Details
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying the message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Message Details"
        className="flex justify-center items-center fixed inset-0 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Message Details
          </h2>
          <p className="mb-6 text-gray-600">{selectedMessage}</p>
          <div className="flex justify-center">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-error"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Inbox;
