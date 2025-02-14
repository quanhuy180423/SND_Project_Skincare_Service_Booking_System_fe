import { useState } from "react";
import { Button, Modal } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // ✅ Thêm plugin cho sự kiện click
import "./index.scss";
const ViewSpecialist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Danh sách sự kiện
  const events = [
    { title: "Meeting", date: "2025-02-14" },
    { title: "Birthday Party", date: "2025-02-14" },
    { title: "Conference", date: "2024-02-16" },
  ];

  // Xử lý khi click vào ngày
  const handleDateClick = (arg) => {
    const clickedDate = arg.dateStr; // Lấy ngày được click
    setSelectedDate(clickedDate);

    // Lọc sự kiện theo ngày
    const eventList = events.filter((event) => event.date === clickedDate);
    setFilteredEvents(eventList);

    // Mở Modal
    setIsModalOpen(true);
  };

  // Thay đổi màu sắc cho ngày hiện tại và tương lai
  const dayCellDidMount = (arg) => {
    const today = new Date();
    const cellDate = new Date(arg.date);

    if (cellDate.toDateString() === today.toDateString()) {
      arg.el.style.backgroundColor = "#ffff33"; // Vàng đậm cho hôm nay
      arg.el.style.color = "black";
      arg.el.style.fontWeight = "bold";
    } else if (cellDate > today) {
      arg.el.style.backgroundColor = "#ffffb3"; // Vàng nhạt cho tương lai
      arg.el.style.color = "black";
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Lịch chuyên viên </h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        dayCellDidMount={dayCellDidMount}
      />


      <Modal
        title={`Events on ${selectedDate}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {filteredEvents.length > 0 ? (
          <div className="bg-list-view-specialist">
            {filteredEvents.map((event, index) => (
              <div className="event-item">
                <span  key={index} className="event-title">{event.title}</span>
                <Button className="hi-text">Detail</Button>
              </div>
            ))}
          </div>
        ) : (
          <p>No events on this day.</p>
        )}
      </Modal>




    </div>
  );
};

export default ViewSpecialist;
