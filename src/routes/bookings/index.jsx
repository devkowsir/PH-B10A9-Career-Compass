import React from "react";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { FaCheck, FaCross, FaPlus } from "react-icons/fa6";
import { friendlyDaysCount } from "../../utils/friendly-days-count";

const getBookingStatus = (date, time) => {
  const currDate = Date.now();
  const bookingDate = Date.parse(`${date}, ${time}`);

  if (currDate < bookingDate) return "Upcoming";
  else if (currDate < bookingDate + 60 * 60 * 1000) return "Ongoing";
  else return "Completed";
};

const BookingsRoute = () => {
  const [bookings, setBookings] = useLocalStorage({ key: "bookings", initial: [] });

  return (
    <section className="container pt-12 text-base-content/75">
      <h1 className="text-4xl text-center font-bold">Bookings</h1>
      <div className="mt-4 max-w-sm mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 sm:max-w-full">
        {bookings.map((booking, i) => {
          const bookingStatus = getBookingStatus(booking.date, booking.time);
          const badgeStyle =
            bookingStatus == "Upcoming"
              ? "badge-primary"
              : bookingStatus == "Ongoing"
              ? "badge-secondary"
              : "badge-accent";

          return (
            <div className="card card-compact bg-base-100 shadow-xl md:card-normal" key={i}>
              <figure className="relative">
                <img src={booking.image} alt="Shoes" className="aspect-[4/3] object-cover" />
                <div className={`badge ${badgeStyle} badge-lg font-medium absolute bottom-4 right-4`}>
                  {bookingStatus}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{booking.title}</h2>
                <p className="text-sm">
                  <span className="text-base text-base-content">{friendlyDaysCount(Date.parse(booking.date))} </span>
                  At <span className="text-base text-base-content">{booking.time}</span>
                </p>
                <p className="text-sm">
                  Counselor: <span className="text-base font-semibold">{booking.counselor}</span>
                </p>
                <div>
                  <p className="mb-1 font-medium">Customiztions</p>
                  {booking.customizations.map(({ name, enabled }, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {enabled ? (
                        <FaCheck className="text-success/70" />
                      ) : (
                        <FaPlus className="text-error/70 rotate-45" />
                      )}
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
                <p className="font-extrabold">${booking.totalPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookingsRoute;
